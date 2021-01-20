import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";

function ButtonGroups(props: any) {
    const [level, setLevel] = useState("");
    const [click, setClick] = useState(false);
    const newRef = useRef<HTMLButtonElement>(null);
    const clickBtn1 = (e: any) => {
        console.log(newRef.current?.value);
        alert("work");
    };
    return (
        <>
            <div className="level">
                <p>{props.name}</p>
                <Button
                    ref={newRef}
                    size="small"
                    variant="contained"
                    color="secondary"
                    value={props.btn1}
                    onClick={clickBtn1}
                >
                    {props.btn1}
                </Button>
                <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    name="Medium"
                >
                    {props.btn2}
                </Button>
                <Button size="small" variant="contained" color="secondary">
                    {props.btn3}
                </Button>
            </div>
        </>
    );
}
// function ButtonGroups1(props: any) {
//     const [question, setQuestions] = useState("");
//     const Btn4 = (e: any) => {
//         console.log(e.target.name);
//         setQuestions(e.target.name);
//     };
//     const Btn5 = (e: any) => {
//         alert("workig5");
//         setQuestions(e.target.name);
//     };
//     const Btn6 = (e: any) => {
//         alert("workig6");
//         setQuestions(e.target.name);
//     };
//     return (
//         <div className="level">
//             <p>{props.name}</p>
//             <Button
//                 onClick={Btn4}
//                 size="small"
//                 variant="contained"
//                 color="secondary"
//                 name="5"
//             >
//                 {props.btn1}
//             </Button>
//             <Button
//                 onClick={Btn5}
//                 size="small"
//                 variant="contained"
//                 color="secondary"
//             >
//                 {props.btn2}
//             </Button>
//             <Button
//                 onClick={Btn6}
//                 size="small"
//                 variant="contained"
//                 color="secondary"
//             >
//                 {props.btn3}
//             </Button>
//         </div>
//     );
// }
export default ButtonGroups;