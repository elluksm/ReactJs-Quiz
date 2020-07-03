import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Home: React.FC = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const onSubmit = (): void => {
    if (input) {
      // saveAndClose();
    }
    history.push("/quiz");
  };

  return (
    <div>
      <p>Home</p>
      <button type="button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};
