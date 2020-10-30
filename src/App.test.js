import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  const { getByText } = render(<App />);
  const homeElement = getByText(/Check out some of my work:/i);
  expect(homeElement).toBeInTheDocument();
});
