import React from 'react';
import '@testing-library/jest-dom';
import PageFooter from './PageFooter';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<PageFooter />, {});
    const testId = screen.getByTestId('PageFooterContainer');
    expect(testId).toBeInTheDocument();
  });
});
