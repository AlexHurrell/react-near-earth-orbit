import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { asteroid } from "./selectors";
import { fetchAsteroids } from "./actions";
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import React from "react";
import { Paper } from "@mui/material";

export default function AsteroidPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const uniqueAsteroid = useSelector(asteroid(id));


  useEffect(() => {
    dispatch(fetchAsteroids());
  });

  return (
    <>
      {Object.keys(uniqueAsteroid).length && (
        <Breadcrumbs aria-label="breadcrumb">

          <Link to={`/`} color="inherit">
            {uniqueAsteroid.close_approach_data[0].close_approach_date}
          </Link>
          <span>{uniqueAsteroid.name}</span>
        </Breadcrumbs>
      )}
      <Container maxWidth="sm" className="m-2">
        <Paper elevation={3}>
          {Object.keys(uniqueAsteroid).length && (
            <Box style={{ borderRadius: '5px' }} bgcolor="primary.light" color="primary.contrastText" >
              <Box className="p-3">
                <Box className="mb-3 d-flex justify-content-between">
                  <h4>{uniqueAsteroid.name}</h4>

                  <span>
                    <Tooltip title="Nasa jpl url">
                      <Link
                        to={{ pathname: uniqueAsteroid.nasa_jpl_url }}
                        target="_blank"
                      >
                        <Fab aria-label="add">
                          <OpenInNewIcon />
                        </Fab>
                      </Link>
                    </Tooltip>
                  </span>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    Estimated diameter
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      Min -{" "}
                      {
                        uniqueAsteroid.estimated_diameter.kilometers
                          .estimated_diameter_min.toLocaleString()
                      } km
                    </div>
                    <div>
                      Max -{" "}
                      {
                        uniqueAsteroid.estimated_diameter.kilometers
                          .estimated_diameter_max.toLocaleString()
                      } km
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    Potentially Hazardous?
                  </Grid>
                  <Grid item xs={6}>
                    {uniqueAsteroid.is_potentially_hazardous_asteroid
                      ? "Yes"
                      : "No"}
                  </Grid>
                  <Grid item xs={6}>
                    Close approach date
                  </Grid>
                  <Grid item xs={6}>
                    {uniqueAsteroid.close_approach_data[0].close_approach_date}
                  </Grid>
                  <Grid item xs={6}>
                    Relative velocity
                  </Grid>
                  <Grid item xs={6}>
                    {
                      Number(uniqueAsteroid.close_approach_data[0].relative_velocity
                        .kilometers_per_hour).toLocaleString()
                    } km/h
                  </Grid>
                  <Grid item xs={6}>
                    Miss distance
                  </Grid>
                  <Grid item xs={6}>
                    {Number(uniqueAsteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString()} km
                  </Grid>
                  <Grid item xs={6}>
                    Orbiting body
                  </Grid>
                  <Grid item xs={6}>
                    {uniqueAsteroid.close_approach_data[0].orbiting_body}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
}
