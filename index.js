const contacts = require("./contacts");
const { program } = require("commander");

program
  .option("--action, <type>")
  .option("--id, <type>")
  .option("--name, <type>")
  .option("--email, <type>")
  .option("--phone, <type>");

program.parse();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      return console.log(contactsList);
      break;
    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
      break;
    case "add":
      const contactsListA = await contacts.addContact(name, email, phone);
      return console.log(contactsListA);
      break;
    case "remove":
      const contactToRemove = await contacts.removeContact(id);
      return console.log(contactToRemove);
      break;

    default:
      console.log(action);
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(program.opts());
