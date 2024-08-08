import React from "react";
import Avatar from "@mui/material/Avatar";
import { createStyles, makeStyles } from "@mui/styles";

import { Message } from "../types";

const useStyles = makeStyles(() =>
  createStyles({
    messageRow: {
      display: "flex",
      margin: "10px 0",
    },
    messageContainer: {
      marginLeft: 20,
    },
    name: {
      fontWeight: 500,
      marginRight: 10,
    },
    header: {
      display: "flex",
      alignItems: "baseline",
    },
    messageContent: {
      padding: 0,
      margin: 0,
    },
    timeStamp: {
      margin: 0,
      fontSize: 12,
      color: "#99aab5",
    },
  })
);

interface MessageViewProps {
  message: Message;
}

export default function MessageView({ message }: MessageViewProps) {
  const {
    sender: { name, profileImg, userId },
    timeStamp,
    content,
  } = message;

  const classes = useStyles();

  return (
    <div className={classes.messageRow}>
      <Avatar key={userId} alt={name} src={profileImg} />
      <div className={classes.messageContainer}>
        <div className={classes.header}>
          <div className={classes.name}>{name}</div>
          <p className={classes.timeStamp}>{timeStamp.toLocaleString()}</p>
        </div>
        <div>
          <p className={classes.messageContent}>{content}</p>
        </div>
      </div>
    </div>
  );
}
