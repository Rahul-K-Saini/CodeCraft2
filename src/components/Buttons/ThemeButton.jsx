import { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../../context/theme';

const ThemeButton = () => {
  const { theme, darkMode, lightMode } = useTheme();

  useEffect(() => {
    let html = document.querySelector('html');
    html.classList.remove('dark', 'light');
    html.classList.add(theme);
  }, [theme]);

  function toggleDarkMode() {
    darkMode(); 
  }

  function toggleLightMode() {
    lightMode(); 
  }

  return (
    <div className="dark-mode-toggle">
      <button
        onClick={() => {
          if (theme === 'dark') {
            toggleLightMode();
          } else {
            toggleDarkMode();
          }
        }}
        className={`rounded-full p-2 transition-transform ${
          theme === 'dark' ? 'bg-yellow-300' : 'bg-gray-800'
        }`}
      >
        {theme === 'dark' ? (
          <FaSun className="text-gray-800" />
        ) : (
          <FaMoon className="text-yellow-300" />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
