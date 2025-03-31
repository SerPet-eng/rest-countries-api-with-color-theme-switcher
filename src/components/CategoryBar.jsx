import { usePageContext } from '../context/PageContext';

export default function CategoryBar() {
  const { countries, setSearchedRegion, searchedRegion } = usePageContext();

  const findRegion = [...new Set(countries?.map((country) => country.region))];

  return (
    <div className="category">
      <select
        className="category-container"
        value={searchedRegion}
        onChange={(e) => setSearchedRegion(e.target.value)}
      >
        <option value="">All Regions</option>
        {findRegion.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
