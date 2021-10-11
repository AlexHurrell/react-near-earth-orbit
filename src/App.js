import "./App.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AsteroidPage from "./pages/AsteroidPage";
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container } from "@mui/material";
import AsteroidsPage from "./pages/AsteroidsPage";

function App() {

  return (
    <div className="d-flex flex-column full-height">
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              NASA Near Earth Objects
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="m-3 main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <AsteroidsPage></AsteroidsPage>
            </Route>
            <Route path="/asteroid/:id">
              <AsteroidPage></AsteroidPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Container className="footer">
        <Typography variant="subtitle2" className="p-1">
          Data fetched from the Asteroids NeoWs open api from nasa - https://api.nasa.gov/
        </Typography>
      </Container>
    </div>
  );
}

export default App;
