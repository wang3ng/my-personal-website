import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /xuyang \(william\) wang/i, level: 1 });
  expect(heading).toBeInTheDocument();
});
