// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DataEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DataEdge/i);
    expect(titleElement).toBeInTheDocument();
});
