interface Message {
  id: string;
  phone: string;
  message: string | null;
  status: string;
  ref_id: string;
}

interface DataWithMessages {
  device_id: string;
  quota: number;
  messages: Message[];
}

interface DataWithImageMessages {
  device_id: string;
  quota: number;
  messages: {
    id: string;
    phone: string;
    message: null;
    caption: string;
    image: string;
    status: string;
    ref_id: string;
  }[];
}

interface ResponseWithDataAndMessages {
  status: boolean;
  message: string;
  data: DataWithMessages[];
}

interface ResponseWithDataAndImageMessages {
  status: boolean;
  message: string;
  data: DataWithImageMessages;
}
