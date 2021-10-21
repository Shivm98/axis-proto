import AccountType from "../components/AccountType/AccountType";
import BeneCard from "../components/BeneCard/BeneCard";

const conversations = (option) => {
  console.log(option);
  let message;
  switch (option) {
    case "orderchequebook":
      const options = ["current account", "savings account"];
      message = {
        type: "card",
        content: "orderchequebook",
        sender: "bot",
        card: <AccountType options={options} />,
      };
      return message;

    case "savingsaccount":
      message = {
        type: "card",
        content: "savingsaccount",
        text: "Please confirm your order",
        sender: "bot",
        card: <BeneCard />,
      };
      return message;
  }
};

export default conversations;
