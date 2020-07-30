import React from "react";
import ChatBot from "react-simple-chatbot";
import Review from "../review/Review";
import ClientList from "../clientlist/ClientList";
import Numbers from "../numbers/Numbers";
import MainMenu from "../MainMenu";
import { ThemeProvider } from "styled-components";

const steps = [
      {
          id: "Greet",
          message: "Hi Jason! How are you today? Did you take action on sales today?",
          trigger: "Displaying yes or no"
      },
      {
          id: "Displaying yes or no",
          options: [
              {
                value: "yesActions",
                label: "Yes, I took action(s)",
                trigger: "Ask about clients"
              },
              {
                value: "noActions",
                label: "No, I didn't have time today",
                trigger: "Goodbye"
              },
          ]
      },
      {
          id: "Ask about clients",
          message: "Good job! How many potential new clients did you add to your list today? Use numbers ",
          trigger: "Awaiting number clients Part 1",
      },
      {
          id: "Awaiting number clients Part 1",
          user: true,
          trigger: "Awaiting number clients Part 2",
      },
      {
          id: "Awaiting number clients Part 2",
          message: "Awesome number!",
          trigger: "Ask about calls"
      },
      {
        id: "Ask about calls",
        message: "How many calls did you make today or reach outs through social media did you make today?",
        trigger: "Awaiting number of calls or reach outs Part 1"
      },
      {
        id: "Awaiting number of calls or reach outs Part 1",
        user: true,
        trigger: "Awaiting number of calls or reach outs Part 2",
      },
      {
        id: "Awaiting number of calls or reach outs Part 2",
        message: "Good work!",
        trigger: "How many responses"
      },
      {
        id: "How many responses",
        message: "And out of those {previousValue} people, how many answered the call, responded back or called you back from previous day efforts?",
        trigger: "Awaiting number responses Part 1",
      },
      {
        id: "Awaiting number responses Part 1",
        user: true,
        trigger: "Awaiting number responses Part 2"
      },
      {
        id: "Awaiting number responses Part 2",
        message: "Excellent!",
        trigger: "Ask about appointments or conversations",
      },
      {
        id: "Ask about appointments or conversations",
        message: "How many appointments or conversations did you have where you discovered someone's wants and needs?",
        trigger: "Awaiting appointments number Part 1",
      },
      {
        id: "Awaiting appointments number Part 1",
        user: true,
        trigger:  "Awaiting appointments number Part 2",
      },
      {
        id: "Awaiting appointments number Part 2",
        message: "That's 4 more than yesterday, good job! (bonus)",
        trigger: "Ask about pitches and offers",
      },
      {
        id: "Ask about pitches and offers",
        message: "How many pitches or offers did you present today?",
        trigger: "Awaiting pitches number Part 1",
      },
      {
        id: "Awaiting pitches number Part 1",
        user: true,
        trigger: "Awaiting pitches number part 2",
      },
      {
        id: "Awaiting pitches number part 2",
        message: "Amazing!",
        trigger: 'Ask about sales'
      },
      {
        id: "Ask about sales",
        message: "How many sales did you make today?!",
        trigger: "Ask about quantity of sales",
      },
      {
        id: "Ask about quantity of sales",
        user: true,
        trigger: "Awaiting quantity of sales Part 1",
      },
      {
        id: "Awaiting quantity of sales Part 1",
        message: "{previousValue} is an amazing number!",
        trigger: "Ask about value of sales",
      },
      {
        id: "Ask about value of sales",
        message: "How much did you make in sales? (e.g. 500 EU)",
        trigger: "Awaiting value of sales Part 1",
      },
      {
        id: "Awaiting value of sales Part 1",
        user: true,
        trigger: "Awaiting value of sales Part 2"
      },
      {
        id: "Awaiting value of sales Part 2",
        message: "Wow! Good work!",
        trigger: "Show report"

      },
      { id: "Show report",
        message: "Here's your report of the week! Keep on going! ",
        trigger: "Goodbye",
      },
      {
        id: "Goodbye",
        message: "See you again tomorrow!",
      },
  ];

  const theme = {
         background: "white",
         fontFamily: "Arial, Helvetica, sans-serif",
         headerBgColor: "#00B2B2",
         headerFontColor: "#fff",
         headerFontSize: "25px",
         botBubbleColor: "#00B2B2",
         botFontColor: "#fff",
         userBubbleColor: "#fff",
         userFontColor: "#4c4c4c"
        };



function CustomChatbot(props) {
  const config = {
    width: "500px",
    height: "600px",
    floating: true
  };


  return (
    <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} />
    </ThemeProvider>
    );

}
export default CustomChatbot;

