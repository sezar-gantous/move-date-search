import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieSkeletonLoading from './MovieSkeletonLoading';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MovieSkeletonLoading />, {});
    const testId = screen.getByTestId('MovieSkeletonLoadingContainer');
    expect(testId).toBeInTheDocument();
  });
});
