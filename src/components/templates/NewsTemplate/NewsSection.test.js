import { render } from '@testing-library/react';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);
const query = `
                {
                allArticles {
                    id
                    title
                    category
                    content
                    image{
                    url
                    }
                }
                }`;
mock.onPost('/', { query }).reply(500);

describe('News Section', () => {
  it('Render articles', async () => {
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });
});
