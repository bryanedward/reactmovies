import * as React from "react";

interface Props {
  status: boolean;
  title?: string;
  year: number;
}

export const Button = ({ title, status, year }: Props) => {
  return (
    <button
      style={{
        color: status ? "red" : "whitesmoke",
        backgroundColor: status ? "whitesmoke" : "black",
      }}
      type="button"
      className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {title}
    </button>
  );
};
