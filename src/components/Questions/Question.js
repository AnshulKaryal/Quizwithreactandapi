import { useState } from "react";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Question({currQueNo,setCurrQueNo,questions,setQuestions,correct,options=[],score,setScore,}){
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const history = useNavigate();

    const handleSelect = (option) =>{
        if(selected === option && selected === correct){
            return "bg-green-500";
        }
        else if(selected === option && selected !== correct){
            return "bg-red-500";
        }
        else if(option === correct){
            return "bg-green-500";
        }
    };

    const handleCheck = (option) =>{
        setSelected(option);
        if(option === correct){
            setScore(score+1);
        }
        setError(false);
    };

    const handleNext = () => {
        if(currQueNo===9){
            history('/score');
        }
        else if(selected){
            setCurrQueNo(currQueNo+1);
            setSelected();
        }
        else{
            setError("Please select an option first");
        }
    };

    const handleQuit = (e) => {
        setCurrQueNo(0);
        setQuestions();
        history('/');
        e.preventDefault();
    };    

    return (
        <div className="flex flex-col justify-center items-center w-full  ">
            <div className="w-[70%] space-y-10 question">
                <div className=" bg-teal-500 min-h-[100px] py-2 px-4 rounded-xl">
                    <div className="flex justify-between ">
                        <div className="font-yasu font-semibold text-[20px]">Questions No {currQueNo + 1}</div>
                        <div className="font-yasu font-semibold text-[20px]">
                            Score : {score}/10
                        </div>
                    </div>
                    <div>
                        <p className="font-tri font-semibold text-[18px]" >{questions[currQueNo].question}</p>
                    </div>
                </div>
                <div className="gird grid-cols-2">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {options && options.map((option, i) => (
                        <button
                            onClick={() => handleCheck(option)}
                            className={`bg-teal-500 min-h-[40px] w-[48%] mx-2 my-2 py-2 px-4 rounded-xl ${selected && handleSelect(option)}`}
                            disabled={selected}
                            key={i}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between">
                    <button
                        className="font-yasu bg-teal-700 outline-none px-6 py-2 rounded-full"                        
                        onClick={handleQuit}
                    >Quit Now</button>
                    <button
                        className="font-yasu bg-teal-700 outline-none px-6 py-2 rounded-full"
                        onClick={handleNext}
                    >Next</button>
                </div>
            </div>
        </div>
    );
}