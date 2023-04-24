import { render, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';

import MetaLayout from './MetaLayout';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      return <>{props.children}</>;
    }
);

describe('MetaLayout component', () => {
  describe('Render method', () => {
    it('should a page title', async () => {
      const title = 'Random title';

      render(<MetaLayout title={title} description="Random description" />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
