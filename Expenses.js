import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState(2022);
  const chooseYearHandler = (chosenYear) => {
    setYear(chosenYear);
  }
  console.log(year);
  return (
    <div>
      <ExpensesFilter onChooseYear={chooseYearHandler}/>
      <Card className={'expenses'}>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}
export default Expenses;
