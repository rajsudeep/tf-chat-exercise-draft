import React, { useState } from "react";

import TextField from "@mui/material/TextField";

interface TextBoxProps {
  onSubmit: (content: string) => void;
}

export default function TextBox({ onSubmit }: TextBoxProps) {
  const [value, setValue] = useState("");

  return (
    <div
      style={{
        width: "95%",
        backgroundColor: "#424549",
        marginBottom: 15,
      }}
    >
      <TextField
        id="outlined-multiline-flexible"
        style={{ width: "100%" }}
        inputProps={{ style: { color: "white" } }}
        multiline
        maxRows={8}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onKeyPress={(e: any) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSubmit(e.target.value);
            setValue("");
          }
        }}
      />
    </div>
  );
}
