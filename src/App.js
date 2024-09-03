import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colormode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app"></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
