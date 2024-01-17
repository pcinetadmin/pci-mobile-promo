import { LocalEventEmitter } from './LocalEventEmitter';
export { DialEvents, SMSEvents } from './interfaces';
export declare const NSPhoneEventEmitter: LocalEventEmitter;
export declare function sms(smsNum: any, messageText: any): void;
export declare function dial(telNum: any, prompt: any): boolean;
export declare function requestCallPermission(explanation: any): Promise<unknown>;
