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

      //   id: "Show list of existing clients"
      //       trigger: "Show list of clients"
      // },
      // {
      //     id: "Show list of clients"
      //     message: "Wait a moment, let me get a list of clients"
      //     options: [
      //       {
      //         value: "existingclients"


      //       }
      //     ];
      // }
      // {
      //   id: "Referring back to the main menu",
      //   value: "I'm sending you to the main menu now",
      //   trigger: "Done"
      // },
      // {
      //   id: "Done"
      //   value: "Keep up the good work!"
      //   end: true

      // }
      // {
      //     id: "Asking for pizza after burger",
      //     options: [
      //         {
      //           value: true,
      //           label: "Yes",
      //           trigger: "Asking for Tomatoes in Pizza"
      //         },
      //         {
      //           value: "false",
      //           label: "No",
      //           trigger: "Done"
      //         }
      //     ],
      // },
      // {
      //     id: "Asking for Tomatoes in Pizza",
      //     message: "Would you like to have tomatoes in your pizza",
      //     trigger: "Adding Tomatoes in Pizza"
      // },
      // {
      //     id: "Adding Tomatoes in Pizza",
      //     options: [
      //         {
      //           value: true,
      //           label: "Yes",
      //           trigger: () => { props.eventHandler("tomato");
      //             return "Asking for Mushroom in Pizza";
      //           },
      //         },
      //         {
      //           value: "false",
      //           label: "No",
      //           trigger: "Asking for Mushroom in Pizza"
      //         }
      //     ]
      // },
      // {
      //     id: "Asking for Mushroom in Pizza",
      //     message: "Would you like to have mushroom in your pizza",
      //     trigger: "Adding Mushroom in Pizza"
      // },
      // {
      //     id: "Adding Mushroom in Pizza",
      //     options: [
      //         {
      //           value: true,
      //           label: "Yes",
      //           trigger: () => {props.eventHandler("mushroom"); return "Asking for Corn in Pizza";
      //           }
      //         },
      //         {
      //           value: "false",
      //           label: "No",
      //           trigger: "Asking for Corn in Pizza"
      //         }
      //     ]
      // },
      // {
      //     id: "Asking for Corn in Pizza",
      //     message: "Would you like to have corn in your pizza",
      //     trigger: "Adding Corn in Pizza"
      // },
      // {
      //     id: "Adding Corn in Pizza",
      //     options: [
      //         {
      //           value: true,
      //           label: "Yes",
      //           trigger: () => {
      //             props.eventHandler("corn");
      //             return "Asking for Veggies in Pizza"
      //           }
      //         },
      //         {
      //           value: "false",
      //           label: "No",
      //           trigger: "Asking for Veggies in Pizza"

      //         }
      //     ]
      // },
      // {
      //     id: "Asking for Veggies in Pizza",
      //     message: "Would you like to have veggies in your pizza",
      //     trigger: "Adding Veggies in Pizza"
      // },
      // {
      //     id: "Adding Veggies in Pizza",
      //     options: [
      //         {
      //           value: true,
      //           label: "Yes",
      //           trigger: () => { props.eventHandler("veggie"); return "Done"}
      //         },
      //         {
      //           value: "false",
      //           label: "No",
      //           trigger: "Done"
      //         }
      //     ]
      // },
      // {
      //     id: "Done",
      //     message: "Have a great day !!",
      //     end: true
      // }
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

