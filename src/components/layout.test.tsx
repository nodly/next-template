import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Layout } from './layout';

describe('Layout component', () => {
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
