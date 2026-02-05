import { ref } from 'vue';

const useThemeToggle = (theme0, theme1) => {
  const themes = [theme0, theme1];
  let theme = 0;  // theme0 by default
  const themeStyles = ref(themes[theme]);
  
  const toggleTheme = () => {
    if (theme == 0) theme = 1;
    else theme = 0;
    themeStyles.value = themes[theme];
  };

  return [toggleTheme, themeStyles];
}

export default useThemeToggle;