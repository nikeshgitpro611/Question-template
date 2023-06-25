import { useState } from "react";
import Data from "./data";
import "./App.css";
import Question from "./Question";

function App() {
  const [question, setQuestion] = useState(Data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    console.log("id:", id);
    setActiveId(newActiveId)
  };
  return (
    <main>
      <Question
        question={question}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default App;
