export interface Contact {
  name: string;
  profileImg: string;
  userId: string;
}

export interface Message {
  sender: Contact;
  timeStamp: Date;
  content: string;
}

export interface ChatSession {
  sessionId: string;
  participants: Contact[];
  messages?: Message[];
}
