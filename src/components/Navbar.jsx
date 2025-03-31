import { usePageContext } from '../context/PageContext';
import IconLightMode from '../../icons/icon-light-mode.svg';
import IconDarkMode from '../../icons/icon-dark-mode.svg';

export default function Navbar() {
  const { toggleDarkMode, isDarkMode } = usePageContext();

  return (
    <nav className="navbar">
      <p className="navbar-text">Where in the world?</p>
      <button className="navbar-button" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <div className="button-content">
            <img
              className="button-icon"
              src={IconDarkMode}
              alt="Dark Mode Icon"
            />
            <span className="button-text">Dark Mode</span>
          </div>
        ) : (
          <div className="button-content">
            <img
              className="button-icon"
              src={IconLightMode}
              alt="Light Mode Icon"
            />
            <span className="button-text">Light Mode</span>
          </div>
        )}
      </button>
    </nav>
  );
}
