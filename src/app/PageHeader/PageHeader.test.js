import React from 'react';
import '@testing-library/jest-dom';
import PageHeader from './PageHeader';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<PageHeader />, {});
    const testId = screen.getByTestId('PageHeaderContainer');
    expect(testId).toBeInTheDocument();
  });
});
