import { useNavigate, useParams } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';
import IconBack from '../../icons/icon-back-arrow.svg';

export default function ContentPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { filteredCountries } = usePageContext();

  const country = filteredCountries?.find((c) => c.alpha3Code === id);

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="content-preview">
      <button
        className="content-preview__back-button"
        onClick={handleBackButtonClick}
      >
        <img className="button-icon" src={IconBack} alt="Icon Back" />
        Back
      </button>

      <div className="content-preview__container">
        <img
          className="container-image"
          src={country?.flag}
          alt={`Flag of ${country?.flag}`}
        />

        <div className="content-preview__container-description">
          <div className="description-title">
            <h1>{country?.name}</h1>
          </div>
          <div className="description-details-left">
            <p>
              <span className="description-details__label">Native Name: </span>
              {country?.nativeName}
            </p>
            <p>
              <span className="description-details__label">Population: </span>
              {country?.population ? (
                <>{country.population.toLocaleString()}</>
              ) : (
                <>No Population</>
              )}
            </p>
            <p>
              <span className="description-details__label">Region: </span>
              {country?.region ? <>{country.region}</> : <>No Region</>}
            </p>
            <p>
              <span className="description-details__label">Sub Region: </span>
              {country?.subregion ? (
                <>{country.subregion}</>
              ) : (
                <>No Sub Region</>
              )}
            </p>
            <p>
              <span className="description-details__label">Capital: </span>
              {country?.capital ? <>{country.capital}</> : <>No Capital</>}
            </p>
          </div>

          <div className="description-details-right">
            <p>
              <span className="description-details__label">
                Top Level Domain:{' '}
              </span>
              {country?.topLevelDomain.join(', ')}
            </p>
            <p>
              <span className="description-details__label">Currencies: </span>
              {country?.currencies?.length > 0 ? (
                <>
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(', ')}
                </>
              ) : (
                <>No Currencies</>
              )}
            </p>
            <p>
              <span className="description-details__label">Languange: </span>
              {country?.languages?.length > 0 ? (
                <>
                  {country.languages
                    .map((language) => language.name)
                    .join(', ')}
                </>
              ) : (
                <>No Languages</>
              )}
            </p>
          </div>

          <div className="description-details-border">
            <p>
              <span className="description-details__label">
                Border Countries:{' '}
              </span>
              {country?.borders?.length > 0 ? (
                <span className="borders">
                  {country.borders.map((border) => (
                    <span>{border}</span>
                  ))}
                </span>
              ) : (
                <>No Borders</>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
