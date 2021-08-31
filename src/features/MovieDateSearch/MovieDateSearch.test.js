import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDateSearchContainer, { defaultProps } from './MovieDateSearch';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MovieDateSearchContainer {...defaultProps} />, {});
    const testId = screen.getByTestId('MovieDateSearchContainer');
    expect(testId).toBeInTheDocument();
  });
});
