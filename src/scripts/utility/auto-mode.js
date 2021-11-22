const setAutoMode = () => {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 18 || hours < 6) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (hours >= 6) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

export default setAutoMode;
