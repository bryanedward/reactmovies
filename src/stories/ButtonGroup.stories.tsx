import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonGroup } from "../ButtonGroup";
export default {
  title: "ButtoGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = () => <ButtonGroup />;
export const Pair = Template.bind({});
Pair.args = {
  primary: true,
  title: "ok",
};
