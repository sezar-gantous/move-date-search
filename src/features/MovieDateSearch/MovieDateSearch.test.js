import React from 'react';
import '@testing-library/jest-dom';
import MovieDateSearchContainer from './MovieDateSearch';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MovieDateSearchContainer />, {});
    const testId = screen.getByTestId('MovieDateSearchContainer');
    expect(testId).toBeInTheDocument();
  });
});
