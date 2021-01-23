import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import { ContextItem } from "./../Route";

function ButtonGroups(props: any) {
  const firstBtn = useRef<HTMLButtonElement>(null);
  const secondBtn = useRef<HTMLButtonElement>(null);
  const thirdBtn = useRef<HTMLButtonElement>(null);
  const context = React.useContext(ContextItem);

  const clickBtn = (x: any) => {
    if (props.btn1 === "5" || props.btn2 === "10" || props.btn3 === "15") {
      context?.setQuestions(x.current?.value);
    } else {
      context?.setNewData(x.current?.value);
    }
  };

  return (
    <>
      <div className="level">
        <p>{props.name}</p>
        <Button
          ref={firstBtn}
          size="small"
          variant="contained"
          color="secondary"
          value={props.btn1}
          onClick={() => clickBtn(firstBtn)}
        >
          {props.btn1}
        </Button>
        <Button
          ref={secondBtn}
          size="small"
          variant="contained"
          color="secondary"
          value={props.btn2}
          onClick={() => clickBtn(secondBtn)}
        >
          {props.btn2}
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          value={props.btn3}
          ref={thirdBtn}
          onClick={() => clickBtn(thirdBtn)}
        >
          {props.btn3}
        </Button>
      </div>
    </>
  );
}

export default ButtonGroups;
