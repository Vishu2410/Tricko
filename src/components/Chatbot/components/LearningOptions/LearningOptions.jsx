import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Welcome",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: " Admissions", handler: () => {}, id: 2 },
    { text: "Industry", handler: () => {}, id: 3 },
    { text: "Placements", handler: () => {}, id: 4 },

  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
