import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import CategoryBar from '../components/CategoryBar';
import { Outlet } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';

export default function RootLayout() {
  const { isDarkMode } = usePageContext();

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar />
      <div className="container">
        <div className="search-filter-container">
          <SearchBar />
          <CategoryBar />
        </div>

        <Outlet />
      </div>
    </div>
  );
}
