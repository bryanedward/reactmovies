import * as React from "react";
import { Button } from "../Button";

interface Props {
  title: string;
  details: string;
  status: boolean;
}

export const Card = ({ title, details, status }: Props) => {
  return (
    <div className="flex justify-center">
      <div
        className="rounded-lg shadow-lg bg-white max-w-sm"
        style={{
          color: status ? "red" : "whitesmoke",
          backgroundColor: status ? "whitesmoke" : "#302f2f",
        }}
      >
        <a href="#!">
          <img
            className="rounded-t-lg"
            src="https://images.hdqwalls.com/download/superman-4khenry-tj-1920x1080.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-xl font-medium mb-2">{title}</h5>
          <p className=" text-base mb-4">{details}</p>
          <Button status={true} title="compra" year={20} />
        </div>
      </div>
    </div>
  );
};
