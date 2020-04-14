/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { WarningCallout } from 'nhsuk-react-components';

const stories = storiesOf('NHSUK/Warning Callout', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <WarningCallout label="School, nursery or work">
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ))
  .add('Without label', () => (
    <WarningCallout>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ));
