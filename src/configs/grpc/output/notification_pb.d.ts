import * as jspb from 'google-protobuf'



export class UserDeviceRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): UserDeviceRequest;

  getDeviceid(): string;
  setDeviceid(value: string): UserDeviceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserDeviceRequest): UserDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: UserDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDeviceRequest;
  static deserializeBinaryFromReader(message: UserDeviceRequest, reader: jspb.BinaryReader): UserDeviceRequest;
}

export namespace UserDeviceRequest {
  export type AsObject = {
    userid: string,
    deviceid: string,
  }
}

export class UserDeviceResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UserDeviceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserDeviceResponse): UserDeviceResponse.AsObject;
  static serializeBinaryToWriter(message: UserDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDeviceResponse;
  static deserializeBinaryFromReader(message: UserDeviceResponse, reader: jspb.BinaryReader): UserDeviceResponse;
}

export namespace UserDeviceResponse {
  export type AsObject = {
    success: boolean,
  }
}

