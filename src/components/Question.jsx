import React, { useState } from 'react';
import styled from 'styled-components';

export default function Question({ title, questionList }) {
  const [checkedElement, setCheckedElement] = useState(-1);

  const radioButtonChangeHandler = (e) => {
    setCheckedElement(e.target.value);
    // console.log(typeof e.target.value); // string
  };

  return (
    <QuestionWrap>
      <h2 className='questionTitle'>{title}</h2>
      <div>
        {questionList.map((question, index) => (
          <RadioWrap key={index}>
            <input
              type='radio'
              value={index}
              checked={Number(checkedElement) === index}
              onChange={radioButtonChangeHandler}
            />
            <div className='questionText'>{question}</div>
          </RadioWrap>
          // <React.Fragment key={index}>
          //   <input
          //     type='radio'
          //     value={index}
          //     checked={Number(checkedElement) === index}
          //     onChange={radioButtonChangeHandler}
          //     id={index + title}
          //   />
          //   <RadioWrap key={index} htmlFor={index + title}>
          //     {question}
          //   </RadioWrap>
          // </React.Fragment>
        ))}
      </div>
    </QuestionWrap>
  );
}

const QuestionWrap = styled.div`
  margin-bottom: 1rem;

  .questionTitle {
    margin-bottom: 0.5rem;
    font-size: 24px;
    font-weight: 700;
  }
`;
const RadioWrap = styled.label`
  display: flex;
  margin-bottom: 0.5rem;

  .questionText {
    margin-left: 0.5rem;
  }
`;
