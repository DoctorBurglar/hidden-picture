import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useFirestore } from "reactfire";

const Question = ({ question: { id, answer, question, answerKey } }) => {
  const firestore = useFirestore();

  const questionRef = firestore.collection("worksheets").doc(id);

  const [inputAnswer, setInputAnswer] = useState("");

  useEffect(() => {
    console.log(inputAnswer);
    if (inputAnswer === answerKey) {
      questionRef.update({
        answer: inputAnswer,
      });
    }
  }, [inputAnswer, answerKey]);

  return (
    <Grid container>
      <Typography variant="body1" gutterBottom>
        {question}
      </Typography>
      <TextField
        onChange={(event) => setInputAnswer(event.target.value)}
        id="standard-basic"
        label="answer"
      />
      {inputAnswer === answerKey ? <div>Correct!</div> : null}
    </Grid>
  );
};

export default Question;
