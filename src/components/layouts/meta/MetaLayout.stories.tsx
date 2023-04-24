import type { Meta, StoryFn } from '@storybook/react';

import type { IMetaProps } from './MetaLayout';
import MetaLayout from './MetaLayout';
import { mockMetaLayoutProps } from './MetaLayout.mocks';

export default {
  title: 'layouts/MetaLayout',
  component: MetaLayout,
  argTypes: {},
} as Meta<typeof MetaLayout>;

const Template: StoryFn<typeof MetaLayout> = (args) => <MetaLayout {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockMetaLayoutProps.base,
} as IMetaProps;
