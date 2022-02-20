import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('input with button', () => {
  it('renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name"></FormField>);
  });
});
