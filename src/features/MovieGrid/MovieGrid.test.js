import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieGrid from './MovieGrid';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MovieGrid />, {});
    const testId = screen.getByTestId('movieGridContainer');
    expect(testId).toBeInTheDocument();
  });
});
