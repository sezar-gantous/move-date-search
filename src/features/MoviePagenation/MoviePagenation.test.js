import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviePagenation from './MoviePagenation';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MoviePagenation />, {});
    const testId = screen.getByTestId('PagenationContainer');
    expect(testId).toBeInTheDocument();
  });
});
