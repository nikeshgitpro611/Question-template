import React from "react";
import SingleQuestion from "./SingleQuestion";

const Question = ({ question, activeId, toggleQuestion }) => {
  //   console.log('question : ', question);

  return (
    <section className="container">
      <h1>question</h1>
      {question.map((questions) => {
        // console.log(questions);
        return (
          <SingleQuestion
            key={questions.id}
            {...questions}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Question;
