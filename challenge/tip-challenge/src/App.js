import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const [bill, setBill] = useState("");
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage1(0);
  }
  const tip =
    (Number(bill) * (Number(percentage1) + Number(percentage2))) / 2 / 100;

  return (
    <div className="tipCalculator">
      <Bills bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did you friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <ShowMessage bill={bill} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bills({ bill, onSetBill }) {
  return (
    <div className="bill">
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="percentage">
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">I was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolute amazing! (20%)</option>
      </select>
    </div>
  );
}

function ShowMessage({ bill, tip }) {
  return (
    <div className="show-message">
      <h1>
        You pay ${Number(bill) + tip} (${bill} + ${tip} tip)
      </h1>
    </div>
  );
}

function Button({ onReset }) {
  return (
    <div className="reset">
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
