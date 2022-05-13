import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Tricko",
  initialMessages: [
    createChatBotMessage("Hi, I'm Tricko to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "Academics",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Welcome to NU Academics Guide",
            url:
              "https://www.niituniversity.in/partnerships/academic/",
            id: 1,
          },
          {
            text: " Admissions Guide",
            url:
              "https://developer.mozilla.org/en-https://www.niituniversity.in/admissions/b-tech/computer-science-and-engineering/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Placements Guide",
            url: "https://frontendmahttps://www.niituniversity.in/placementssters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
