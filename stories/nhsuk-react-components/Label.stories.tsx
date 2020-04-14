/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Label } from 'nhsuk-react-components';

const stories = storiesOf('NHSUK/Label', module);

stories
  .addDecorator(centered)
  .add('Standard', () => <Label>National Insurance Number</Label>)
  .add('Bold', () => <Label bold>National Insurance Number</Label>)
  .add('Page Heading', () => <Label isPageHeading>National Insurance Number</Label>);
