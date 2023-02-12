// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button";

export default {
  title: "Button/Buy",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const BuyTicket = Template.bind({});
BuyTicket.args = {
  title: "Comprar",
};
