import Button from "./Button";
import Input from "./Input";

// We map over the Array of strings and return an Input component for each one
export default ({ fields, button }) => `
  <form class="mx-auto mt-2 max-w-xs">
    ${fields.map((field) => Input({ label: field })).join("\n")}
    ${Button(button)}
  </form>
`;
