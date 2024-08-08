import { Contact, Message, ChatSession } from "../types";

export const ourSelfUser: Contact = {
  name: "You",
  profileImg:
    "https://static.vecteezy.com/system/resources/previews/020/522/258/original/cool-face-with-pixel-glasses-emoji-free-png.png",
  userId: "123456",
};

const puppyCatUser: Contact = {
  name: "Puppycat",
  profileImg:
    "https://i.pinimg.com/originals/a3/f7/56/a3f756331e4cf0ff0b62a7fa8270e542.png",
  userId: "34234",
};

const deadPoolUser: Contact = {
  name: "Deadpool",
  profileImg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCpXzJZLQALdOez_VB3EBpBvVHz9cbKXNCQ&s",
  userId: "58925",
};

const gingerBreadManUser: Contact = {
  name: "Gingerbread Man",
  profileImg:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQaTKXzIghfdN8xyKS3BT2nHuEzdYrvwDG4f-B1wIa7g5ITDfIC2Fs_OQGDzpOq-EoOTnC7r9TndH2L2Jqjh9vg9DIhSt3KH90aSa-SDfh43pG3RmYiLX09tXD5hfi0WPDW42m5Pt4cXb2/s1600/gingy.jpg",
  userId: "89876",
};

const morpheusUser: Contact = {
  name: "Morpheus",
  profileImg:
    "https://www.looper.com/img/gallery/heres-why-we-didnt-see-laurence-fishburnes-morpheus-in-the-matrix-resurrections/intro-1640184659.webp",
  userId: "00929",
};

export const ourSelfMessages: Message[] = [
  {
    sender: ourSelfUser,
    timeStamp: new Date(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    sender: ourSelfUser,
    timeStamp: new Date(),
    content: "Ut enim ad minima veniam?",
  },
  {
    sender: ourSelfUser,
    timeStamp: new Date(),
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

export const messagesFromPuppycat: Message[] = [
  {
    sender: puppyCatUser,
    timeStamp: new Date(),
    content: "Sed quia consequuntur magni.",
  },
  {
    sender: puppyCatUser,
    timeStamp: new Date(),
    content: "Magni!",
  },
];

export const messagesFromDeadpool: Message[] = [];

export const initialChatSessionList: ChatSession[] = [
  {
    sessionId: "ABC123434",
    participants: [ourSelfUser],
    messages: ourSelfMessages,
  },
  {
    sessionId: "DEF83948",
    participants: [puppyCatUser, ourSelfUser],
    messages: messagesFromPuppycat,
  },
  {
    sessionId: "JKL3747",
    participants: [deadPoolUser, ourSelfUser],
    messages: messagesFromDeadpool,
  },
];

export const contactList: Contact[] = [
  ourSelfUser,
  puppyCatUser,
  deadPoolUser,
  gingerBreadManUser,
  morpheusUser,
];
