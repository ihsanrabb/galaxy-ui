import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from './components/Button';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import { SignUpModal } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = React.useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button onClick={() => setUseDarkTheme(prevState => !prevState)}>change theme</button>
      <h1>Hello world!</h1>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <PrimaryButton modifiers={["small", "primaryButtonWarning"]}>asdsd</PrimaryButton>
        <SecondaryButton modifiers='large'>Goodbye world</SecondaryButton>
        <TertiaryButton modifiers={["success"]}>Hey world</TertiaryButton>
      </div>
      <SignUpModal />
      <GlobalStyle />
    </ThemeProvider>

  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
