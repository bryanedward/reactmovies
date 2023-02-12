import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "../../components/Movies/Card";

export default {
  title: "List/Movies",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const MovieCard = Template.bind({});
MovieCard.args = {
  title: "Superman",
  details: "The most stronger man",
};
