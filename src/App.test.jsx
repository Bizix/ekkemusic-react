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
      name: /ekke connects accra and vancouver with rap that feels cinematic, direct, and built to move/i,
    })
  ).toBeInTheDocument();

  expect(screen.getAllByRole('link', { name: /shows/i }).length).toBeGreaterThan(0);
});
