interface Message {
  id: string;
  phone: string;
  message: string;
  status: string;
  ref_id: string | null;
}

interface Data {
  device_id: string;
  quota: number;
  messages: Message[];
}

export interface ApiResponse {
  status: boolean;
  message: string;
  data: Data;
}
