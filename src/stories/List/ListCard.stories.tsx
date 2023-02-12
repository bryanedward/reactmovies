// List.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "../../components/Movies/List";
import { MovieCard } from "../List/MovieCard.stories";

export default {
  title: "List/Movies",
  component: List,
} as ComponentMeta<typeof List>;

export const ListMovies: ComponentStory<typeof List> = (args) => (
  <List>
    <MovieCard details="the new movie" status={false} title="superman" />
    <MovieCard
      details="that is much expensive"
      status={false}
      title="superman 2"
    />
  </List>
);
