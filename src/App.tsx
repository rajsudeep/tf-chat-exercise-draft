import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";

import MessagingContainer from "./components/MessagingContainer";
import ChatListItem from "./components/ChatListItem";
import CreateNewChatButton from "./components/CreateNewChatButton";

import { initialChatSessionList } from "./mocks";

export default function App() {
  const [chatSessionList, setChatSessionList] = useState(
    initialChatSessionList
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: 300,
            backgroundColor: "#1e2124",
            color: "#ffffff",
            borderTopRightRadius: "unset",
            borderBottomRightRadius: "unset",
            height: 640,
          }}
        >
          <List style={{ width: "100%" }} component="nav">
            <div
              style={{
                display: "flex",
                margin: "0 10px 8px 10px",
                justifyContent: "space-between",
              }}
            >
              <div>Chats</div>
              <CreateNewChatButton
                onClickSubmit={(requestedParticipants) => {
                  // since we know we're only dealing with single
                  // user chats, this logic is simplified for such
                  const existingChatIndex = chatSessionList.findIndex(
                    ({ participants }) =>
                      participants[0] === requestedParticipants[0]
                  );

                  if (existingChatIndex !== -1) {
                    setSelectedIndex(existingChatIndex);
                  } else {
                    const chatSessionPayload = {
                      sessionId: "DER" + Math.random(),
                      participants: requestedParticipants,
                      messages: [],
                    };
                    setChatSessionList([
                      ...chatSessionList,
                      chatSessionPayload,
                    ]);
                  }
                }}
              />
            </div>
            {chatSessionList.map((session, currentIndex) => (
              <ChatListItem
                key={session.sessionId}
                selected={selectedIndex === currentIndex}
                onClick={(_) => setSelectedIndex(currentIndex)}
                contact={session.participants[0]}
                onClickDelete={() => {
                  setChatSessionList(
                    chatSessionList.filter(
                      (_, filteredIndex) => currentIndex !== filteredIndex
                    )
                  );
                  setSelectedIndex(0);
                }}
              />
            ))}
          </List>
        </Paper>
        {chatSessionList.length !== 0 && (
          <MessagingContainer
            // would be another place to update to support groups
            contactInfo={chatSessionList[selectedIndex]?.participants[0]}
            initialMessages={chatSessionList[selectedIndex]?.messages}
          />
        )}
      </Box>
    </Container>
  );
}
