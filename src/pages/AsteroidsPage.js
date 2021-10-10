
import { Box, Breadcrumbs } from "@mui/material";
import React from "react";
import AsteroidCard from "../components/AsteroidCard";

export default function AsteroidsPage(asteroids) {

    const asteroidList = asteroids['asteroidList']

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <span>
                    {Object.keys(asteroidList)[0]}
                </span>
            </Breadcrumbs>
            <Box className="d-flex flex-wrap">
                {asteroidList[Object.keys(asteroidList)[0]].map(
                    (asteroid) => {
                        return (
                            <AsteroidCard asteroid={asteroid}></AsteroidCard>
                        );
                    }
                )}
            </Box>
        </>
    );
}
