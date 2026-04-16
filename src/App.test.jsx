import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { heroData } from './components/siteData';

test('renders the home hero content', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: heroData.title })).toBeInTheDocument();

  heroData.ctas.forEach((action) => {
    expect(screen.getByRole('link', { name: action.label })).toBeInTheDocument();
  });
});
