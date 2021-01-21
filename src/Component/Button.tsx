import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import useLocalStorage from "./../Hooks/uselocal";

function ButtonGroups(props: any) {
    const [level, setLevel] = useState("");
    const [click, setClick] = useState(false);
    const firstBtn = useRef<HTMLButtonElement>(null);
    const secondBtn = useRef<HTMLButtonElement>(null);
    const thirdBtn = useRef<HTMLButtonElement>(null);

    const clickBtn = (x: any) => {
        setLevel(x.current?.value);
    };
    console.log(level);
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
