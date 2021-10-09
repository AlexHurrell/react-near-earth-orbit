
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function AsteroidCard(asteroids) {

    const asteroid = asteroids['asteroid']

    return (
        <>
            {asteroid && (
                <Card
                    key={asteroid.id}
                    sx={{ minWidth: 275 }}
                    className="m-2"
                >
                    <Box bgcolor="primary.light">
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {asteroid.name}
                            </Typography>
                            <Typography variant="h6" component="div">
                                Distance:{" "}
                                {Math.round(
                                    asteroid.close_approach_data[0].miss_distance
                                        .kilometers
                                ).toLocaleString()}{" "}
                                km
                            </Typography>
                            <Typography variant="body2">
                                Relative Velocity:{" "}
                                {Number(Number(
                                    asteroid.close_approach_data[0]
                                        .relative_velocity.kilometers_per_hour
                                ).toFixed(2)).toLocaleString()}{" "}
                                km/h
                            </Typography>
                            <Typography variant="body2">
                                Potentially Hazardous:{" "}
                                {asteroid.is_potentially_hazardous_asteroid
                                    ? "Yes"
                                    : "No"}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`asteroid/${asteroid.id}`}>
                                <Button size="small">Learn more</Button>
                            </Link>
                        </CardActions>
                    </Box>
                </Card>
            )}

        </>
    );
}
