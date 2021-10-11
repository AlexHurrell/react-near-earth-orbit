import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from '..';
import AsteroidsPage from '../pages/AsteroidsPage';
import { testPayload } from '../redux/actions';
import { renderWithRouter } from '../utils';
import AsteroidPage from './AsteroidPage';

test('renders asteroid page', () => {
    renderWithRouter(<Provider store={store}><Route path="/asteroid/:id"><AsteroidPage /></Route></Provider>, { route: '/asteroid/2533372' });
});

test('check text of asteroid page', () => {
    renderWithRouter(<Provider store={store}><Route path="/asteroid/:id"><AsteroidPage /></Route></Provider>, { route: '/asteroid/2533372' });

    const minKm = screen.getByText('Min - 0.242 km')
    expect(minKm).toBeInTheDocument()

    const maxKm = screen.getByText('Max - 0.542 km')
    expect(maxKm).toBeInTheDocument()

    const closeApproachDate = screen.getAllByText('2021-10-02')
    expect(closeApproachDate).toHaveLength(2)

    const relativeVelocity = screen.getByText('87,898.733 km/h')
    expect(relativeVelocity).toBeInTheDocument()

    const missDistance = screen.getByText('24,736,601.11 km')
    expect(missDistance).toBeInTheDocument()

    const orbitingBody = screen.getByText('Earth')
    expect(orbitingBody).toBeInTheDocument()

    const id = screen.getAllByText('533372 (2014 GG17)')
    expect(id).toHaveLength(2)
});


