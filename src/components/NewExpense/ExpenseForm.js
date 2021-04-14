import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Valor</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input type="date" min="2020-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Adicionar Nova Conta</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
