// import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({activeId, id, toggleQuestion, title, info }) => {
//   console.log("Info : ", info);
const isActive = id === activeId;
console.log('isActive : ', isActive);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
        {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
      
    </article>
  );
};

export default SingleQuestion;
