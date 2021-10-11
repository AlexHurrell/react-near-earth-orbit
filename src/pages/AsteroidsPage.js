
import { Box, Breadcrumbs } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsteroidCard from "../components/AsteroidCard";
import { fetchAsteroids } from "../redux/actions";
import { asteroids } from "../redux/selectors";

export default function AsteroidsPage() {

    const dispatch = useDispatch();
    const asteroidList = useSelector(asteroids);

    useEffect(() => {
        dispatch(fetchAsteroids());
    });

    return (
        <>
            {Object.keys(asteroidList).length && <>
                <Breadcrumbs aria-label="breadcrumb">
                    <span>
                        {Object.keys(asteroidList)[0]}
                    </span>
                </Breadcrumbs>
                <Box className="d-flex flex-wrap" role="asteroids-container">
                    {asteroidList[Object.keys(asteroidList)[0]].map(
                        (asteroid) => {
                            return (
                                <AsteroidCard asteroid={asteroid} key={asteroid.id}></AsteroidCard>
                            );
                        }
                    )}
                </Box> </>}
        </>
    );
}
