import { useMemo } from 'react';
import { useState, useEffect, useContext, createContext } from 'react';

const PageProvider = createContext();

export function usePageContext() {
  return useContext(PageProvider);
}

export default function PageContext({ children }) {
  const [countries, setCountries] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState('');
  const [searchedRegion, setSearchedRegion] = useState('');
  const [currentCountry, setCurrentCountry] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const countryPerPage = 12;

  //* Dark Mode Toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  //* Fetching Countries Data
  const fetchData = async () => {
    try {
      const response = await fetch('/public/data.json');
      const data = await response.json();
      if (data) return setCountries(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //* Filtering Countries
  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchSearch = searchedQuery
        ? country.name.toLowerCase().includes(searchedQuery.toLowerCase())
        : true;

      const matchRegion = searchedRegion
        ? country.region === searchedRegion
        : true;

      return matchSearch && matchRegion;
    });
  }, [countries, searchedQuery, searchedRegion]);

  //* Pagination
  const offset = currentPage * countryPerPage;
  const currentDisplayCountry = filteredCountries?.slice(
    offset,
    offset + countryPerPage,
  );
  const pageCount = Math.ceil(filteredCountries?.length / countryPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <PageProvider.Provider
      value={{
        filteredCountries,
        searchedQuery,
        setSearchedQuery,
        searchedRegion,
        setSearchedRegion,
        error,
        countries,
        isDarkMode,
        toggleDarkMode,
        currentCountry,
        setCurrentCountry,
        currentDisplayCountry,
        pageCount,
        handlePageChange,
      }}
    >
      {children}
    </PageProvider.Provider>
  );
}
