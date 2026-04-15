import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the home hero content', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', {
      name: /cinematic alt-pop with sharp hooks and late-night energy/i,
    })
  ).toBeInTheDocument();
});
