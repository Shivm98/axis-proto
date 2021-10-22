import AccountType from "../components/AccountType/AccountType";
import AccoutDetailsCard from "../components/AccoutDetailsCard/AccoutDetailsCard";
import BeneCard from "../components/BeneCard/BeneCard";
import PaymentSuccess from "../components/PaymentSuccess/PaymentSuccess";
import RecentTrans from "../components/RecentTrans/RecentTrans";

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

    case "paymentsucess":
      message = {
        type: "card",
        content: "paymentsucess",
        text: "",
        sender: "bot",
        card: <PaymentSuccess />,
      };
      return message;
    case "showtransactions":
      message = {
        type: "card",
        content: "showtransactions",
        text: "Please select account",
        sender: "bot",
        card: <AccoutDetailsCard />,
      };
      return message;
    case "recenttrans":
      message = {
        type: "card",
        content: "recenttrans",
        text: "Your recent transactions",
        sender: "bot",
        card: <RecentTrans />,
      };
      return message;
  }
};

export default conversations;
