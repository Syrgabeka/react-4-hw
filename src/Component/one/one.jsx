import { useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import css from "./one.module.css";

export const NewCounter = () => {
  //one
  const [words, setWords] = useState(false);
  function changeWord() {
    setWords((w) => !w);
  }

  //two
  const [counter, setCounter] = useState(0);

  function plusCounter() {
    setCounter((prevState) => prevState + 1);
  }
  function minusCounter() {
    setCounter((prevState) => prevState - 1);
  }

  //three
  const [box, checkBoxs] = useState(false);
  function check() {
    checkBoxs((a) => !a);
  }

  //four
  const [show, setShow] = useState(false);
  function showWord() {
    setShow((a) => !a);
  }
  //five
  const [begin, setBegin] = useState(false);
  function showbegin() {
    setBegin((a) => !a);
  }
  //six
  const [name, setName] = useState(<h2>HOME</h2>);

  return (
    <div
      style={
        box
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <h2>Биринчи уй тапшырма</h2>
      <Button text={words ? "Close" : "Open"} onClick={changeWord} /> <hr />
      <h2>Эккинчи уй тапшырма</h2>
      <Button text="Increment" onClick={plusCounter} />
      <span className={css.counter}>{counter}</span>
      <Button text="Decrement" onClick={minusCounter} /> <hr />
      <h2>Учинчу уй тапшырма</h2>
      <Input type={"checkbox"} onClick={check} /> <hr />
      <h2>Тортунчу уй тапшырма</h2>
      <Button onClick={showWord} text={show ? "Close" : "Open"} />
      {show && <h1>UPPS!</h1>} <hr />
      <h2>Бешинчи уй тапшырма</h2>
      <Button onClick={showbegin} text={begin ? "STOP" : "START"} /> <br />
      {begin && <p className={css.loader}></p>} <hr />
      <h2>Алтынчы уй тапшырма</h2>
      <Button text={"HOME"} onClick={() => setName(<h2>HOME</h2>)} />
      <Button text={"ABOUT"} onClick={() => setName(<h2>ABOUT</h2>)} />
      <Button text={"CONTACT"} onClick={() => setName(<h2>CONTACT</h2>)} />{" "}
      <br />
      <h2></h2>
      {name} <hr />
    </div>
  );
};
