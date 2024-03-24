"use client";

import { grpcClient, grpcRequest } from "@/configs/grpc/grpc";
import React from "react";

function CallGrpc() {
  const test = async () => {
    try {
      await grpcClient.saveUserDevice(grpcRequest, {
        userId: "phi-ngu",
        deviceId: "iphone14",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={test}>call</button>
    </div>
  );
}

export default CallGrpc;
