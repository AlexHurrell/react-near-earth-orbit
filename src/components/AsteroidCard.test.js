import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AsteroidsPage from '../pages/AsteroidsPage';
import { testPayload } from '../redux/actions';
import AsteroidCard from './AsteroidCard';

const asteroid = testPayload.near_earth_objects[Object.keys(testPayload.near_earth_objects)][0]

test('renders card', () => {
    render(<BrowserRouter><AsteroidCard asteroid={asteroid} /></BrowserRouter>);
});

test('check card text', () => {
    render(<BrowserRouter><AsteroidCard asteroid={asteroid} /></BrowserRouter>);

    const id = screen.getByText('533372 (2014 GG17)')
    expect(id).toBeInTheDocument()

    const distance = screen.getByText('Distance: 24,736,601 km')
    expect(distance).toBeInTheDocument()

    const relativeVelocity = screen.getByText('Relative Velocity: 87,898.73 km/h')
    expect(relativeVelocity).toBeInTheDocument()

    const potentiallyHazardous = screen.getByText('Potentially Hazardous: Yes')
    expect(potentiallyHazardous).toBeInTheDocument()
})