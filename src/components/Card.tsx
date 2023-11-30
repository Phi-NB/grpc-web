"use client";

import { IWheel } from "@/interfaces";

interface ICardProps {
  data: IWheel;
}

const Card = (props: ICardProps) => {
  const { data } = props;

  return (
    <div className="card">
      <h1>{data.name}</h1>
    </div>
  );
};

export default Card;
