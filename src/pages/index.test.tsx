import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  it('should render template heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /@nodly\/next-template/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
