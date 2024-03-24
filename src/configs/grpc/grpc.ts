import { UserDeviceServiceClient } from './output/NotificationServiceClientPb';
import { UserDeviceRequest, UserDeviceResponse } from './output/notification_pb';

export const grpcClient = new UserDeviceServiceClient('grpc://saas-dev-grpc.playciti.io:443');

export const grpcRequest = new UserDeviceRequest();
export const grpcResponse = UserDeviceResponse;
