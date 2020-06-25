import React from "react";
import ChatBot from "react-simple-chatbot";
import NewClientForm from "../newclientform/NewClientForm";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "600px",
    height: "700px",
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
                trigger: "Congratulations"
              },
              {
                value: "connections",
                label: "I made calls today",
                trigger: "User made calls today"
              },
              {
                value: "reference",
                label: "please send me to the main menu",
                trigger: "Referring back to the main menu"
              }
          ]
      },
      {
          id: "Congratulations",
          message: "Congratulations! Does your client exist in your contact list? ",
          trigger: "Question about existing clients"
      },
      {
          id: "Question about existing clients",
          options: [
            {
              value: "client does not exist",
              label: "client is new",
              trigger: "Add new client"
            },
            {
              value: "client exists",
              label: "client exists",
              trigger: "Show list of existing clients"
            }
          ]
      },
      {
          id: "User made calls today",
          message: "Please select in the contact list who you called today",
          trigger: "Show list of existing clients"
      },
      {
        id: "Add new client",
        message: "let's add a new client",
        label: "Add new client",
        trigger: "Asking details of new client"
      },
      {
        id: "Asking details of new client",
        // component: <NewClientForm />,
        // asMessage: true,
      },
      {
        id: "Show list of existing clients",
        message: "Here is the list of your existing clients from which you can select",
        // component: <div> The list of clients </div>,
        trigger: "Show selected clients with sales cycle"
      },
      {
        id: "Show selected clients with sales cycle",
        message: "Jessy - Connection"
      },
      {
        id: "Referring back to the main menu",
        message: "I'm going to send you back to the main menu",
        trigger: "Done"
      },
      {
        id: "Done",
        message: "Keep up the good work!",
        end: true
      }
  ]
  ;
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

