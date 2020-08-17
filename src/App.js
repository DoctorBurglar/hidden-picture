import React from "react";
import "./App.css";
import { useFirestore, useFirestoreCollection, useAuth } from "reactfire";
import Question from "./components/Question/Question";
import WorksheetCreator from "./components/WorksheetCreator/WorksheetCreator";

function App() {
  const firestore = useFirestore();

  const questionsRef = firestore.collection("worksheets");

  // const questions = useFirestoreCollection(questionsRef).docs.map((doc) => ({
  //   id: doc.id,
  //   ...doc.data(),
  // }));

  const auth = useAuth();

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="App">
      <button onClick={() => signOut()}>Sign Out</button>
      {/* {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))} */}
      <WorksheetCreator />
    </div>
  );
}

export default App;
