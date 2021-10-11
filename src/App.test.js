import { AppBar } from "@mui/material";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { store } from ".";
import App from "./App";
import { render, screen } from '@testing-library/react';
import { renderWithRouter } from "./utils";


test('should render app', () => {
    render(<Provider store={store}><App /></Provider>);
})

test('should navigate to asteroid details and back', () => {
    render(<Provider store={store}><App /></Provider>);

    const leftClick = { button: 0 }

    userEvent.click(screen.getAllByText('Learn more')[0], leftClick)

    expect(screen.getByRole('asteroid-page')).toBeInTheDocument()

    userEvent.click(screen.getByRole('back'), leftClick)

    expect(screen.getByRole('asteroids-container')).toBeInTheDocument()

})


