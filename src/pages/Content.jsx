import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';
import ReactPaginate from 'react-paginate';

export default function Content() {
  const {
    setCurrentCountry,
    currentDisplayCountry,
    handlePageChange,
    pageCount,
  } = usePageContext();
  const navigate = useNavigate();

  const handleRedirect = (alpha3Code) => {
    setCurrentCountry(alpha3Code);
    navigate(`/${alpha3Code}`);
  };

  return (
    <div className="card-container">
      {currentDisplayCountry.map((country) => {
        return (
          <div
            key={country?.alpha3Code}
            className="card"
            onClick={() => handleRedirect(country?.alpha3Code)}
          >
            <img
              className="card-image"
              src={country?.flag}
              alt={`Image flag of ${country?.name}`}
            />

            <div className="card-description">
              <h2 className="card-title">{country?.name}</h2>
              <p className="card-info">
                <span className="info">Population: </span>
                {country?.population ? (
                  <>{country.population.toLocaleString()}</>
                ) : (
                  <>No Population</>
                )}
              </p>
              <p className="card-info">
                <span className="info">Region: </span>
                {country?.region}
              </p>
              <p className="card-info">
                <span className="info">Capital: </span>
                {country?.capital ? <>{country.capital}</> : <>No Capital</>}
              </p>
            </div>
          </div>
        );
      })}

      <ReactPaginate
        previousLabel={'←'}
        nextLabel={'→'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        disabledClassName={'disabled'}
      />
    </div>
  );
}
