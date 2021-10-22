import AccountType from "../components/AccountType/AccountType";
import AccoutDetailsCard from "../components/AccoutDetailsCard/AccoutDetailsCard";
import BeneCard from "../components/BeneCard/BeneCard";
import PaymentSuccess from "../components/PaymentSuccess/PaymentSuccess";
import PaymentSummary from "../components/PaymentSummary/PaymentSummary";
import RecentTrans from "../components/RecentTrans/RecentTrans";
import TenureSelector from "../components/TenureSelector/TenureSelector";

const conversations = (option) => {
  console.log(option);
  let message;
  let options;
  switch (option) {
    case "orderchequebook":
      options = ["current account", "savings account"];
      message = {
        type: "card",
        content: "orderchequebook",
        sender: "bot",
        card: (
          <AccountType
            options={options}
            textOnClick="saving account"
            content="savingsaccount"
          />
        ),
      };
      return message;

    case "savingsaccount":
      message = {
        type: "card",
        content: "savingsaccount",
        text: "Please confirm your order",
        sender: "bot",
        card: <BeneCard textOnClick="continue" content="paymentsucess" />,
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
    case "paymentsucessemail":
      message = {
        type: "card",
        content: "paymentsucess",
        text: "",
        sender: "bot",
        emailBtn: true,
        card: <PaymentSuccess />,
      };
      return message;
    case "showtransactions":
      message = {
        type: "card",
        content: "showtransactions",
        text: "Please select account",
        sender: "bot",
        card: <AccoutDetailsCard content="recenttrans" />,
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
    case "fundtransfer":
      message = {
        type: "card",
        content: "fundtransfer",
        text: "Please select benificiary account",
        sender: "bot",
        card: <BeneCard textOnClick="Person Name" content="entertheamout" />,
      };
      return message;

    case "entertheamout":
      message = {
        type: "message",
        content: "entertheamout",
        text: "Please enter the amount to transfer",
        sender: "bot",
        card: "",
      };
      return message;
    case "acctype":
      message = {
        type: "card",
        content: "acctype",
        text: "Please select debit account",
        sender: "bot",
        card: <AccoutDetailsCard content="enterotp" textOnClick="XXXX-0123" />,
      };
      return message;
    case "enterotp":
      message = {
        type: "message",
        content: "enterotp",
        text: "Please enter the OTP sent to 0000000000 OTP Valid till - 02:00",
        sender: "bot",
        card: "",
      };
      return message;
    case "selectfdplan":
      options = ["SHORT TERM", "regular", "tax saver"];
      message = {
        type: "card",
        content: "selectfdplan",
        text: "",
        sender: "bot",
        card: (
          <AccountType
            options={options}
            textOnClick="Short Term"
            content="selectfdaccount"
          />
        ),
      };
      return message;
    case "selectfdaccount":
      message = {
        type: "card",
        content: "selectfdaccount",
        text: "Please select the account for which you wish to start FD",
        sender: "bot",
        card: (
          <AccoutDetailsCard
            content="enterfdammount"
            textOnClick="Savings Account XXXX-0123"
          />
        ),
      };
      return message;
    case "enterfdammount":
      message = {
        type: "message",
        content: "enterfdammount",
        text: "Please enter the amount for FD",
        sender: "bot",
        card: "",
      };
      return message;
    case "interesttime":
      options = ["ON MATURITY", "MONTHLY", "QUARTERLY"];
      message = {
        type: "card",
        content: "interesttime",
        text: "",
        sender: "bot",
        card: (
          <AccountType
            options={options}
            textOnClick="On Maturity"
            content="interestrates"
          />
        ),
      };
      return message;
    case "interestrates":
      options = ["ON MATURITY", "MONTHLY", "QUARTERLY"];
      message = {
        type: "card",
        content: "interestrates",
        text: "Here are the best interest rates for you",
        sender: "bot",
        card: (
          <BeneCard
            textOnClick="Customize Deposit Tenure"
            content="selecttenure"
          />
        ),
      };
      return message;
    case "selecttenure":
      message = {
        type: "card",
        content: "selecttenure",
        text: "Please select tenure",
        sender: "bot",
        card: <TenureSelector textOnClick="1 Year 5 Months" />,
      };
      return message;
    case "nomineeforfd":
      message = {
        type: "message",
        content: "nomineeforfd",
        text: "Do you want a nominee for FD?",
        sender: "bot",
        card: "",
      };
      return message;
    case "fddetails":
      message = {
        type: "card",
        content: "fddetails",
        text: "Please verify FD details",
        sender: "bot",
        card: <PaymentSummary />,
      };
      return message;
    case "enterpannumber":
      message = {
        type: "message",
        content: "enterpannumber",
        text: "Please enter your PAN card number",
        sender: "bot",
        card: "",
      };
      return message;
  }
};

export default conversations;
