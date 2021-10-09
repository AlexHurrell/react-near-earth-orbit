import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import { asteroidReducer } from "./reducer";
import { createTheme, ThemeProvider } from '@mui/material/styles';

let store = createStore(asteroidReducer, applyMiddleware(thunk));

const theme = createTheme({
  palette: {
    primary: {
      light: '#cfe3ff',
      main: '#66a2ff',
      dark: '#002884',
      contrastText: 'black',
    }
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
