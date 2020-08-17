import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const WorksheetCreator = () => {
  const [questions, setQuestions] = useState([]);

  const [inputs, setInputs] = useState({ question: "", answer: "" });

  const [isDisabled, setIsDisabled] = useState(true);

  const [worksheetLength, setWorksheetLength] = useState(null);

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    setQuestions([...questions, inputs]);
    setInputs();
  };

  return (
    <div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={(event) => setWorksheetLength(event.target.value)}
      >
        <MenuItem value={4}>Four</MenuItem>
        <MenuItem value={9}>Nine</MenuItem>
        <MenuItem value={16}>Sixteen</MenuItem>
      </Select>
      <TextField
        name="question"
        onChange={(event) => handleInput(event)}
        label="question"
        disabled={isDisabled}
      />
      <TextField
        name="answer"
        onChange={(event) => handleInput(event)}
        label="answer"
        disabled={isDisabled}
      />
      <Button
        disabled={isDisabled}
        onClick={() => handleSubmit()}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
};

export default WorksheetCreator;
