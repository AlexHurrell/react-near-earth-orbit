import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asteroid, fetchAsteroids } from "./App";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function AsteroidPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const uniqueAsteroid = useSelector(asteroid(id));

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        {Object.keys(uniqueAsteroid).length ? (
          <Box sx={{ bgcolor: "#cfe8fc" }} className="p-3 m-3">
            <Breadcrumbs aria-label="breadcrumb" className="mb-2">
              <Link to={`/`}>
                <ArrowBackIcon />
              </Link>
            </Breadcrumbs>
            <h4>{uniqueAsteroid.name}</h4>
            <div className="mb-3">
              Nasa jpl url
              <Link
                to={{ pathname: uniqueAsteroid.nasa_jpl_url }}
                target="_blank"
              >
                <OpenInNewIcon />
              </Link>
            </div>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                Estimated diameter
              </Grid>
              <Grid item xs={6}>
                <div>
                  Min -{" "}
                  {
                    uniqueAsteroid.estimated_diameter.kilometers
                      .estimated_diameter_min
                  }
                </div>
                <div>
                  Max -{" "}
                  {
                    uniqueAsteroid.estimated_diameter.kilometers
                      .estimated_diameter_max
                  }
                </div>
              </Grid>
              <Grid item xs={6}>
                Hazardous?
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
                  uniqueAsteroid.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                }
              </Grid>
              <Grid item xs={6}>
                Miss distance
              </Grid>
              <Grid item xs={6}>
                {uniqueAsteroid.close_approach_data[0].miss_distance.kilometers}
              </Grid>
              <Grid item xs={6}>
                Orbiting body
              </Grid>
              <Grid item xs={6}>
                {uniqueAsteroid.close_approach_data[0].orbiting_body}
              </Grid>
            </Grid>
          </Box>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
