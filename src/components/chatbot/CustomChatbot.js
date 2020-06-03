import React from "react";
import ChatBot from "react-simple-chatbot";
import Review from "../review/Review";
import ClientList from "../clientlist/ClientList";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "800px",
    height: "1000px",
    floating: true
  };

  const steps = [
      {
          id: "Greet",
          message: "Hello Jason, how can I help you today?",
          trigger: "Displaying options of user scenarios"
      },
      {
          id: "Displaying options of user scenarios",
          options: [
              {
                value: "sales",
                label: "I made a sale today!",
                trigger: "Congratulations on clients"
              },
              {
                value: "connections",
                label: "I made calls today",
                trigger: "Congratulations on clients"
              },
              {
                value: "newclient",
                label: "I'd like to add a new client",
                trigger: "Asking details of client"
              },
              {
                value: "reference",
                label: "please send me to the main menu",
                trigger: "Referring back to the main menu"
              },
          ]
      },
      {
          id: "Congratulations on clients",
          message: "Congratulations! Does your client exist in your contact list? ",
          trigger: "Question about the existence of clients"
      },
      {
          id: "Question about the existence of clients",
          options: [
            {
              value: "client does not exist",
              label: "client is new",
              trigger: "Ask to add client"
            },
            {
              value: "client exists",
              label: "client exists",
              trigger: "Ask about existing client"
            }
          ]
      },
      {
        id: "Ask to add client",
        message: "Would you like to add this client?",
        trigger: "Options of adding client now or later"
      },
      {
        id: "Options of adding client now or later",
        options: [
            {
              value: "addingclientnow",
              label: "Yes, I'd like to add the client now",
              trigger: "Asking details of client"
            },
            {
              value: "addclientlater",
              label: "No, I'd like to add this client later",
              trigger: "Ofcourse"
            }
        ]
      },
      {
        id: "Asking details of client",
        message: "What is the name of the client?",
        trigger: "name",
      },
      {
        id: "name",
        user: true,
        trigger: "Ways of Connecting",
      },
      {
        id: "Ways of Connecting",
        message: "Through which social media platform did you connect with this client? Select one.",
        trigger: "socialMedia",
      },
      {
        id: "socialMedia",
        options: [
          {
            value: "LinkedIn",
            label: "LinkedIn",
            user: true,
            trigger: "Company question"
          },
          {
            value: "Facebook",
            label: "Facebook",
            user: true,
            trigger: "Company question"
          },
          {
            value: "Instagram",
            label: "Instagram",
            user: true,
            trigger: "Company question"
          }
        ]
      },
      {
        id: "Company question",
        message: "Which company does this client own or works at?",
        trigger: "company",
      },
      {
        id: "company",
        user: true,
        trigger: "review",
      },
      {
        id: "review",
        component: <Review />,
        asMessage: true,
        trigger: "Add another new client"
      },
      {
        id: "Add another new client",
        message: "Would you like to add another client?",
        trigger: "Yes or No to adding another client",
      },
      {
        id: "Yes or No to adding another client",
        options: [
          {
              value: "dontaddanotherclient",
              label: "No, I'm good",
              trigger: "Thank you"
          },
          {
              value: "addanotherclient",
              label: "Yes, I'd like to add another client",
              trigger: "Asking details of client"
          }
        ]
      },
      { id: "Money",
        message: "So the big question is...how much money did you earn today? State amount + currency. ",
        trigger: "Show Amount",
      },
      {
        id: "Show Amount",
        user: true,
        trigger: "Sales Number of the day"
      },
      {
        id: "Sales Number of the day",
        message: " You have earned {previousValue} euro today. Awesome!",
        trigger: "Which campaigne?",
      },
      {
        id:"Which campaigne?",
        message: "To which campaign can I add this sale?",
        trigger: "Check Campaign list"
      },
      {
        id: "Check Campaign list",
        user: true,
        trigger: "Added info"
      },
      {
        id: "Added info",
        message: "Thank you, I added all this info to the database",
        trigger: "Anything else?"
      },
      {
        id: "Anything else?",
        message: "Is there anything else I can help you with?",
        trigger: "Displaying options of user scenarios",
      },
      {
        id: "Ask about existing client",
        message: "Could you please give me the first name and last name of this client?",
        trigger: "fullName"
      },
      {
        id: "fullName",
        user: true,
        trigger: "ClientList Search"
      },
      {
        id: "ClientList Search",
        component: <ClientList />,
        asMessage: true,
        trigger: "Result finding client"
      },
      {
        id: "Result finding client",
        message: "Is {previousValue} your client?",
        trigger: "Yes Or No to finding client",
      },
      {
        id: "Yes Or No to finding client",
        options: [
            {
              value: "clientFound",
              label: "Yes, this is him or her",
              trigger: "Ask about topic of connection",
            },
            {
              value: "clientnotfound",
              label: "No, this isn't him or her",
              trigger: "Ask to add client"
            }
        ]
      },
      {
        id: "Yes Or No to finding client to who you sold",
        options: [
            {
              value: "clientFound",
              label: "Yes, this is him or her",
              trigger: "Money",
            },
            {
              value: "clientnotfound",
              label: "No, this isn't him or her",
              trigger: "Ask to add client"
            }
        ]
      },
      {
          id: "Ask about topic of connection",
          message: "Did you take one of the following steps with this client? Please select your choice",
          trigger: "Choices of topic"
      },
      {
          id: "Choices of topic",
          options: [
            {
              value: "madesales",
              label: "I sold my client something!",
              trigger: "Money"
            },
            {
              value: "appointment",
              label: "I made an appointment",
              trigger: "What day is the appointment?"
            },
            {
              value: "salespitch",
              label: "I made an offer",
              trigger: "How much was the offer?"
            }
          ]
      },
      {
        id: "What day is the appointment?",
        message: "At what day did you plan the appointment? Write it like: \"DD-MM-YY\" ",
        trigger: "Make appointment"
      },
      {
          id: "Make appointment",
          user: true,
          trigger: "Appointment made"
      },
      {
        id: "Appointment made",
        message: " I have put the appointment at {previousValue} with your client in the calendar!",
        trigger: "Anything else?",
      },
      {
        id: "Show selected clients with sales cycle",
        message: "Jessy - Connection"
      },
      {
        id: "How much was the offer?",
        message: "How much was the offer? State amount + currency",
        trigger: "Amount offer"
      },
      {
        id: "Amount offer",
        user: true,
        trigger: "When hear from client about offer?",
      },
      {
        id: "When hear from client about offer?",
        message: "When will you hear from this client about the offer? Write it like: \"DD-MM-YY\"",
        trigger: "Calender reminder"
      },
      {
        id: "Calender reminder",
        user: true,
        trigger: "Calender reminder setting",
      },
      {
        id: "Calender reminder setting",
        message: " I have put a reminder for you at {previousValue} to contact your client about the offer",
        trigger: "Anything else?"
      },
      {
        id: "Referring back to the main menu",
        message: "I'm going to send you back to the main menu",
        trigger: "Done"
      },
      {
        id: "Thank you",
        message: "Thank you",
        trigger: "Anything else?"
      },
      {
        id: "Ofcourse",
        message: "Ofcourse, that is no problem",
        trigger: "Anything else?"
      },
      {
        id: "Done",
        message: "Keep up the good work! Bye Jason!",
        end: true
      }
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


  return (
    <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} />
    </ThemeProvider>
    );

}
export default CustomChatbot;

