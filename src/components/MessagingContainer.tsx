import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { createStyles, makeStyles } from "@mui/styles";

import MessageView from "./MessageView";
import TextBox from "./TextBox";

import { Message, Contact } from "../types";
import { ourSelfUser } from "../mocks";

const useStyles = makeStyles(() => createStyles({}));

interface MessagingContainerProps {
  contactInfo: Contact;
  initialMessages?: Message[];
}

export default function MessagingContainer({
  contactInfo,
  initialMessages,
}: MessagingContainerProps) {
  const { name, profileImg } = contactInfo;
  const [messages, setMessages] = useState(initialMessages || []);
  const classes = useStyles();

  useEffect(() => {
    setMessages(initialMessages || []);
  }, [initialMessages]);

  return (
    <Paper
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: 500,
        height: "100%",
        backgroundColor: "#36393e",
        color: "#ffffff",
        borderTopLeftRadius: "unset",
        borderBottomLeftRadius: "unset",
      }}
      elevation={3}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: 40,
          backgroundColor: "#282b30",
          padding: 10,
        }}
      >
        <ListItemIcon>
          <Avatar
            style={{ width: 25, minWidth: 0, height: 25 }}
            src={profileImg}
          />
        </ListItemIcon>
        <ListItemText primary={name} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 600,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "95%",
            overflowY: "auto",
            padding: "0 10px",
          }}
        >
          {messages.map((msg) => (
            <MessageView
              key={msg.sender.userId + Math.random()}
              message={msg}
            />
          ))}
        </div>
        <TextBox
          onSubmit={(content) =>
            setMessages([
              ...messages,
              { sender: ourSelfUser, timeStamp: new Date(), content },
            ])
          }
        />
      </div>
    </Paper>
  );
}
