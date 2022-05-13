class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // new method
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.");
      this.updateChatbotState(greetingMessage);
    }
  
    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Oh great, I've got the following resources for you on your queries:",
        {
          widget: "Academics",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;