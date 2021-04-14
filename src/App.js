import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expensiveItems = [
    { id: "e1", date: new Date(2021,4,13), title: "Conta do carro", price: "295,67" },
    { id: "e2", date: new Date(2021,3,12), title: "Conta da páscoa", price: "95,99" },
    {
      id: "e3",
      date: new Date(2021,1,1),
      title: "Conta do ano novo",
      price: "400,00",
    },
    { id: "e4", date: new Date(2021,4,12), title: "Conta de casa", price: "650,77" },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expensiveItems={expensiveItems}/>
    </div>
  );
}

export default App;
