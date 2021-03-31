import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

//👇 Imports a specific story for the test
import { Default } from './task.stories';

it('renders the button in the primary state', () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('Primary');
});