import { ClipLoader } from 'react-spinners';
import { usePageContext } from '../context/PageContext';

export default function Loading() {
  const { isDarkMode } = usePageContext();

  return (
    <div
      className="loading"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <p
        className="loading-text"
        style={isDarkMode ? { color: 'white' } : { color: 'black' }}
      >
        Loading
      </p>
      <ClipLoader color={isDarkMode ? '#fff' : '#000'} />
    </div>
  );
}
