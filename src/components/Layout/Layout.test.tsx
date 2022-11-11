import { render, screen } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
  it('should render empty layout', () => {
    const { container } = render(<Layout />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should render layout with children', () => {
    render(<Layout>Content</Layout>);

    const text = screen.getByText('Content');

    expect(text).toBeInTheDocument();
  });
});
