import React, { useState } from "react";
import "./App.css";

function App() {
  const questionAnswers = [
    {
      question: "What is national game of India?",
      options: [
        { option: "Hockey", isTrue: true },
        { option: "Cricket", isTrue: false },
        { option: "Football", isTrue: false },
        { option: "Tennis", isTrue: false },
      ],
    },
    {
      question: "What is national bird of India?",
      options: [
        { option: "Parrot", isTrue: false },
        { option: "Crow", isTrue: false },
        { option: "Peacock", isTrue: true },
        { option: "Sparrow", isTrue: false },
      ],
    },
    {
      question: "What is national animal of India?",
      options: [
        { option: "Lion", isTrue: false },
        { option: "Elephant", isTrue: false },
        { option: "Horse", isTrue: false },
        { option: "Tiger", isTrue: true },
      ],
    },
    {
      question: "What is national flower of India?",
      options: [
        { option: "Lotus", isTrue: true },
        { option: "Rose", isTrue: false },
        { option: "Marigold", isTrue: false },
        { option: "Jasmine", isTrue: false },
      ],
    },
    {
      question: "What is national language of India?",
      options: [
        { option: "Spanish", isTrue: false },
        { option: "Hindi", isTrue: true },
        { option: "English", isTrue: false },
        { option: "French", isTrue: false },
      ],
    },
  ];
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [isMcqsOver, setIsMcqsOver] = useState(false);

  const handleCheckAns = (isTrue) => {
    if (isTrue) {
      setScore((score) => score + 1);
    }

    const nextQuestion = questionNumber + 1;
    if (nextQuestion < questionAnswers.length) {
      setQuestionNumber(nextQuestion);
    } else {
      setIsMcqsOver(true);
    }
  };

  return (
    <div className="App">
      {isMcqsOver ? (
        <div className="main-wrapper">
          Your Score is {score} out of {questionAnswers.length}
        </div>
      ) : (
        <div className="main-wrapper">
          <div className="question-wrapper">
            <h5 style={{ marginTop: 0 }}>
              Question {questionNumber + 1} / {questionAnswers.length}
            </h5>
            {questionAnswers[questionNumber].question}
          </div>
          <div className="options-wrapper">
            {questionAnswers[questionNumber].options.map((option) => (
              <button onClick={() => handleCheckAns(option.isTrue)}>
                {option.option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
