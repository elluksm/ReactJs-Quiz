import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Summary: React.FC = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const onSubmit = (): void => {
    if (input) {
      // saveAndClose();
    }
    history.push("/home");
  };

  return (
    <div>
      <p>Summary</p>
      <button type="button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};
