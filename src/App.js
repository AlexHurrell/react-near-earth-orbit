import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const ACTIONS = {
  RECEIVE_ASTEROIDS: "LOAD_ASTEROIDS",
};

export const initialState = {
  asteroids: {},
};

export function fetchAsteroids() {
  return (dispatch) => {
    return dispatch(
      receiveAsteroids({
        links: {
          next: "http://www.neowsapp.com/rest/v1/feed?start_date=2021-10-03&end_date=2021-10-03&detailed=false&api_key=DEMO_KEY",
          prev: "http://www.neowsapp.com/rest/v1/feed?start_date=2021-10-01&end_date=2021-10-01&detailed=false&api_key=DEMO_KEY",
          self: "http://www.neowsapp.com/rest/v1/feed?start_date=2021-10-2&end_date=2021-10-2&detailed=false&api_key=DEMO_KEY",
        },
        element_count: 6,
        near_earth_objects: {
          "2021-10-02": [
            {
              links: {
                self: "http://www.neowsapp.com/rest/v1/neo/2533372?api_key=DEMO_KEY",
              },
              id: "2533372",
              neo_reference_id: "2533372",
              name: "533372 (2014 GG17)",
              nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2533372",
              absolute_magnitude_h: 20.2,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.2424124811,
                  estimated_diameter_max: 0.5420507863,
                },
                meters: {
                  estimated_diameter_min: 242.4124811008,
                  estimated_diameter_max: 542.0507863358,
                },
                miles: {
                  estimated_diameter_min: 0.1506280858,
                  estimated_diameter_max: 0.3368146392,
                },
                feet: {
                  estimated_diameter_min: 795.3165644948,
                  estimated_diameter_max: 1778.3819018419,
                },
              },
              is_potentially_hazardous_asteroid: true,
              close_approach_data: [
                {
                  close_approach_date: "2021-10-02",
                  close_approach_date_full: "2021-Oct-02 04:23",
                  epoch_date_close_approach: 1633148580000,
                  relative_velocity: {
                    kilometers_per_second: "24.4163146261",
                    kilometers_per_hour: "87898.7326540594",
                    miles_per_hour: "54616.8541871848",
                  },
                  miss_distance: {
                    astronomical: "0.165353966",
                    lunar: "64.322692774",
                    kilometers: "24736601.10965242",
                    miles: "15370611.184826596",
                  },
                  orbiting_body: "Earth",
                },
              ],
              is_sentry_object: false,
            },
            {
              links: {
                self: "http://www.neowsapp.com/rest/v1/neo/3789115?api_key=DEMO_KEY",
              },
              id: "3789115",
              neo_reference_id: "3789115",
              name: "(2017 VV1)",
              nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3789115",
              absolute_magnitude_h: 20.1,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.2538370294,
                  estimated_diameter_max: 0.5675968529,
                },
                meters: {
                  estimated_diameter_min: 253.8370293645,
                  estimated_diameter_max: 567.5968528656,
                },
                miles: {
                  estimated_diameter_min: 0.1577269688,
                  estimated_diameter_max: 0.3526882241,
                },
                feet: {
                  estimated_diameter_min: 832.7986794202,
                  estimated_diameter_max: 1862.1944587557,
                },
              },
              is_potentially_hazardous_asteroid: false,
              close_approach_data: [
                {
                  close_approach_date: "2021-10-02",
                  close_approach_date_full: "2021-Oct-02 09:35",
                  epoch_date_close_approach: 1633167300000,
                  relative_velocity: {
                    kilometers_per_second: "23.4573226902",
                    kilometers_per_hour: "84446.3616846502",
                    miles_per_hour: "52471.685125665",
                  },
                  miss_distance: {
                    astronomical: "0.2547615612",
                    lunar: "99.1022473068",
                    kilometers: "38111786.913394644",
                    miles: "23681566.2591643272",
                  },
                  orbiting_body: "Earth",
                },
              ],
              is_sentry_object: false,
            },
            {
              links: {
                self: "http://www.neowsapp.com/rest/v1/neo/3799247?api_key=DEMO_KEY",
              },
              id: "3799247",
              neo_reference_id: "3799247",
              name: "(2018 CC1)",
              nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3799247",
              absolute_magnitude_h: 23.5,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.0530340723,
                  estimated_diameter_max: 0.1185877909,
                },
                meters: {
                  estimated_diameter_min: 53.0340723319,
                  estimated_diameter_max: 118.5877908577,
                },
                miles: {
                  estimated_diameter_min: 0.0329538346,
                  estimated_diameter_max: 0.0736870142,
                },
                feet: {
                  estimated_diameter_min: 173.9963058693,
                  estimated_diameter_max: 389.0675677576,
                },
              },
              is_potentially_hazardous_asteroid: false,
              close_approach_data: [
                {
                  close_approach_date: "2021-10-02",
                  close_approach_date_full: "2021-Oct-02 04:35",
                  epoch_date_close_approach: 1633149300000,
                  relative_velocity: {
                    kilometers_per_second: "10.6665320875",
                    kilometers_per_hour: "38399.5155150749",
                    miles_per_hour: "23859.9656265753",
                  },
                  miss_distance: {
                    astronomical: "0.1941303445",
                    lunar: "75.5167040105",
                    kilometers: "29041486.039566215",
                    miles: "18045542.642055167",
                  },
                  orbiting_body: "Earth",
                },
              ],
              is_sentry_object: false,
            },
            {
              links: {
                self: "http://www.neowsapp.com/rest/v1/neo/3989315?api_key=DEMO_KEY",
              },
              id: "3989315",
              neo_reference_id: "3989315",
              name: "(2020 BZ13)",
              nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3989315",
              absolute_magnitude_h: 29.9,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.0027832677,
                  estimated_diameter_max: 0.0062235757,
                },
                meters: {
                  estimated_diameter_min: 2.7832676807,
                  estimated_diameter_max: 6.2235757337,
                },
                miles: {
                  estimated_diameter_min: 0.0017294418,
                  estimated_diameter_max: 0.0038671495,
                },
                feet: {
                  estimated_diameter_min: 9.1314559376,
                  estimated_diameter_max: 20.41855621,
                },
              },
              is_potentially_hazardous_asteroid: false,
              close_approach_data: [
                {
                  close_approach_date: "2021-10-02",
                  close_approach_date_full: "2021-Oct-02 18:22",
                  epoch_date_close_approach: 1633198920000,
                  relative_velocity: {
                    kilometers_per_second: "31.6809901648",
                    kilometers_per_hour: "114051.5645934247",
                    miles_per_hour: "70867.206899731",
                  },
                  miss_distance: {
                    astronomical: "0.3574080004",
                    lunar: "139.0317121556",
                    kilometers: "53467475.580799148",
                    miles: "33223148.7480303224",
                  },
                  orbiting_body: "Earth",
                },
              ],
              is_sentry_object: false,
            },
            {
              links: {
                self: "http://www.neowsapp.com/rest/v1/neo/54145576?api_key=DEMO_KEY",
              },
              id: "54145576",
              neo_reference_id: "54145576",
              name: "(2021 JM7)",
              nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54145576",
              absolute_magnitude_h: 23.91,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.0439091446,
                  estimated_diameter_max: 0.0981838322,
                },
                meters: {
                  estimated_diameter_min: 43.9091445969,
                  estimated_diameter_max: 98.1838321526,
                },
                miles: {
                  estimated_diameter_min: 0.0272838691,
                  estimated_diameter_max: 0.061008586,
                },
                feet: {
                  estimated_diameter_min: 144.0588779594,
                  estimated_diameter_max: 322.1254438795,
                },
              },
              is_potentially_hazardous_asteroid: false,
              close_approach_data: [
                {
                  close_approach_date: "2021-10-02",
                  close_approach_date_full: "2021-Oct-02 14:30",
                  epoch_date_close_approach: 1633185000000,
                  relative_velocity: {
                    kilometers_per_second: "23.1225604497",
                    kilometers_per_hour: "83241.2176187501",
                    miles_per_hour: "51722.8554698283",
                  },
                  miss_distance: {
                    astronomical: "0.4830163182",
                    lunar: "187.8933477798",
                    kilometers: "72258212.377962234",
                    miles: "44899171.1694334692",
                  },
                  orbiting_body: "Earth",
                },
              ],
              is_sentry_object: false,
            },
            {
              links: {
                self: "http://www.neowsapp.com/rest/v1/neo/54190789?api_key=DEMO_KEY",
              },
              id: "54190789",
              neo_reference_id: "54190789",
              name: "(2021 QJ2)",
              nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54190789",
              absolute_magnitude_h: 23.846,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.0452225426,
                  estimated_diameter_max: 0.1011206794,
                },
                meters: {
                  estimated_diameter_min: 45.2225426066,
                  estimated_diameter_max: 101.1206793837,
                },
                miles: {
                  estimated_diameter_min: 0.0280999765,
                  estimated_diameter_max: 0.0628334577,
                },
                feet: {
                  estimated_diameter_min: 148.3679266854,
                  estimated_diameter_max: 331.7607697493,
                },
              },
              is_potentially_hazardous_asteroid: false,
              close_approach_data: [
                {
                  close_approach_date: "2021-10-02",
                  close_approach_date_full: "2021-Oct-02 19:45",
                  epoch_date_close_approach: 1633203900000,
                  relative_velocity: {
                    kilometers_per_second: "8.0393985202",
                    kilometers_per_hour: "28941.8346726549",
                    miles_per_hour: "17983.330549795",
                  },
                  miss_distance: {
                    astronomical: "0.1402419524",
                    lunar: "54.5541194836",
                    kilometers: "20979897.363681388",
                    miles: "13036303.7203556344",
                  },
                  orbiting_body: "Earth",
                },
              ],
              is_sentry_object: false,
            },
          ],
        },
      })
    );
  };
}

export function receiveAsteroids(payload) {
  return {
    type: ACTIONS.RECEIVE_ASTEROIDS,
    payload,
  };
}

export function asteroidReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.RECEIVE_ASTEROIDS: {
      const asteroids = action.payload;

      return { ...state, asteroids: asteroids.near_earth_objects };
    }
    default:
      return state;
  }
}

export const asteroids = (state) => state.asteroids;
export const asteroid = (id, date, state) =>
  state.asteroids[date].filter((asteroid) => asteroid.id !== id);

function App() {
  const dispatch = useDispatch();
  const asteroidList = useSelector(asteroids);

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, []);

  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/">

    //     </Route>
    // <Route path="/:id">

    // </Route>
    //   </Switch>
    // </BrowserRouter>
    <div className="m-3">
      <h2>Near Earth Objects - {Object.keys(asteroidList)[0]}</h2>
      {Object.keys(asteroidList).map((date) => {
        return (
          <>
            <Box className="d-flex flex-wrap">
              {asteroidList[date].map((asteroid) => {
                return (
                  <Card sx={{ minWidth: 275 }} className="m-2">
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {asteroid.name}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Miss distance:{" "}
                        {Number(
                          asteroid.close_approach_data[0].miss_distance
                            .kilometers
                        ).toFixed(2)}{" "}
                        km
                      </Typography>
                      <Typography variant="body2">
                        Relative Velocity:{" "}
                        {Number(
                          asteroid.close_approach_data[0].relative_velocity
                            .kilometers_per_hour
                        ).toFixed(2)}{" "}
                        km/h
                      </Typography>
                      <Typography variant="body2">
                        Hazardous:{" "}
                        {asteroid.is_potentially_hazardous_asteroid
                          ? "True"
                          : "False"}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                );
              })}
            </Box>
          </>
        );
      })}
    </div>
  );
}

export default App;
