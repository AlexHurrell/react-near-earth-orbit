import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AsteroidPage from "./AsteroidPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { fetchAsteroids } from "./actions";
import { asteroids } from "./selectors";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container } from "@mui/material";
import AsteroidsPage from "./AsteroidsPage";


function App() {
  const dispatch = useDispatch();
  const asteroidList = useSelector(asteroids);

  useEffect(() => {
    dispatch(fetchAsteroids());
  });

  return (
    <div className="d-flex flex-column" style={{ height: '100vh' }}>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              NASA Near Earth Objects
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ flex: 1 }} className="m-3">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {Object.keys(asteroidList).length ? (
                <>
                  <AsteroidsPage asteroidList={asteroidList}></AsteroidsPage>
                </>
              ) : (
                ""
              )}
            </Route>
            <Route path="/asteroid/:id">
              <AsteroidPage></AsteroidPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Container style={{ textAlign: 'center' }}>
        <Typography variant="subtitle2" className="p-1">
          {'Data fetched from the Asteroids NeoWs open api from nasa - https://api.nasa.gov/ '}
        </Typography>
      </Container>
    </div>
  );
}

export default App;
