"use client";

import { DATA_WHEEL } from "@/_mock";
import Card from "@/components/Card";
import { IWheel } from "@/interfaces";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="container">
        {DATA_WHEEL.map((data, index) => {
          return <Card data={data} key={index} />;
        })}
      </div>
    </>
  );
}
