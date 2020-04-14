/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Button } from 'nhsuk-react-components';

const stories = storiesOf('NHSUK/Button', module);

stories
  .addDecorator(centered)
  .add('Primary', () => <Button>Primary</Button>)
  .add('As a link (href)', () => <Button href="/">As a Link</Button>)
  .add('As a link (as)', () => <Button as="a">As a Link</Button>)
  .add('As a button', () => <Button as="button">Button</Button>)
  .add('Disabled', () => <Button disabled>Disabled</Button>)
  .add('Secondary', () => <Button secondary>Secondary</Button>)
  .add('Reverse', () => <Button reverse>Reverse</Button>);
