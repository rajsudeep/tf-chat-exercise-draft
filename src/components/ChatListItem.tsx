import React, { useState } from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";

import { Contact } from "../types";

interface ChatListItemProps {
  selected: boolean;
  onClick: (e: any) => void;
  contact: Contact;
  onClickDelete: () => void;
}

export default function ChatListItem({
  selected,
  onClick,
  contact,
  onClickDelete,
}: ChatListItemProps) {
  const { name, profileImg, userId } = contact;
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  return (
    <ListItemButton
      key={userId}
      selected={selected}
      onClick={onClick}
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      <ListItemIcon>
        <Avatar src={profileImg} />
      </ListItemIcon>
      <ListItemText primary={name} />
      {showDeleteButton && (
        <DeleteIcon
          onClick={(e) => {
            e.stopPropagation();
            onClickDelete();
          }}
        />
      )}
    </ListItemButton>
  );
}
