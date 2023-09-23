export interface WaMessage {
  refId: string;
  phone: number;
  message: string;
}

export interface WaMediaMessage {
  refId: string;
  phone: number;
  caption: string;
  image: string;
}
