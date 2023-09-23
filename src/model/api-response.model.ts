interface Message {
  id: string;
  phone: number;
  message: string;
  status: string;
}

interface Device {
  device_id: string;
  quota: number;
  messages: Message[];
}

interface ApiResponse {
  status: boolean;
  message: string;
  data: Device[];
}
