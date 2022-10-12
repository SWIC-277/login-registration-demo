import Form from "./components/Form/Form";
import Header from "./components/Header";

const root = document.getElementById("root");

// There is usually an App component which serves as a top level component
const App = () => {
  // State represents all of the 'moving parts' of the application
  // State is an object that contains all of the data that the application needs
  // State will be updated based on user input and/or data from the server
  const state = {
    title: "My Form",
    fields: ["email", "password"],
    button: {
      type: "submit",
      txt: "Submit",
    },
  };

  // We can pass state from a parent component to a child component
  // State can be passed as props
  return `
    ${Header(state)}
    ${Form(state)}
  `;
};

// Render the App component to the DOM
function render() {
  root.innerHTML = App();
}

render();
