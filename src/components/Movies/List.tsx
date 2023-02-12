import * as React from "react";

interface Props {
  children: Array<
    React.ReactElement<any, string | React.JSXElementConstructor<any>>
  >;
}
export const List = ({ children }: Props) => {
  return <div className="flex-col space-y-2">{children}</div>;
};
