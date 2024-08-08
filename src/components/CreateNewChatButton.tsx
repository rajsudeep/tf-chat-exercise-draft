import React, { useState } from "react";

import Popover from "@mui/material/Popover";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { contactList } from "../mocks";
import { Contact } from "../types";

type UserToCheckboxMap = Record<string, boolean>;

interface CreateNewChatButtonProps {
  onClickSubmit: (requestedParticipants: Contact[]) => void;
}

export default function CreateNewChatButton({
  onClickSubmit,
}: CreateNewChatButtonProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const initialUserToCheckboxMapping: UserToCheckboxMap = contactList.reduce(
    (acc, user) => {
      acc[user.name] = false;
      return acc;
    },
    {} as UserToCheckboxMap
  );
  const [chatParticipantsChecked, setChatParticipantsChecked] = useState(
    initialUserToCheckboxMapping
  );

  return (
    <>
      <div
        style={{ cursor: "pointer", fontWeight: 800 }}
        onClick={(e: any) => setAnchorEl(e.currentTarget)}
      >
        +
      </div>
      <Popover
        id={Boolean(anchorEl) ? "simple-popover" : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div style={{ width: 300, height: 200, padding: 10 }}>
          <div>Select participant</div>
          <FormGroup>
            <div style={{ height: 120, overflowY: "auto" }}>
              {contactList.map(({ userId, name, profileImg }) => (
                <FormControlLabel
                  key={userId}
                  control={
                    <Checkbox
                      checked={chatParticipantsChecked[name]}
                      onChange={(e) =>
                        setChatParticipantsChecked({
                          ...chatParticipantsChecked,
                          [name]: e.target.checked,
                        })
                      }
                    />
                  }
                  disabled={
                    !Object.values(chatParticipantsChecked).every(
                      (value) => value === false
                    ) && chatParticipantsChecked[name] !== true
                  }
                  label={
                    <div style={{ display: "flex" }}>
                      <ListItemIcon>
                        <Avatar src={profileImg} />
                      </ListItemIcon>
                      <ListItemText primary={name} />
                    </div>
                  }
                />
              ))}
            </div>
            <Button
              variant="contained"
              disabled={Object.values(chatParticipantsChecked).every(
                (value) => value === false
              )}
              onClick={() => {
                const requestedParticipants = contactList.filter(
                  ({ name }) => chatParticipantsChecked[name]
                );

                setAnchorEl(null);
                setChatParticipantsChecked(initialUserToCheckboxMapping);
                return onClickSubmit(requestedParticipants);
              }}
            >
              Create chat
            </Button>
          </FormGroup>
        </div>
      </Popover>
    </>
  );
}
