import { useEffect, useState } from "react";
import Question from "./Question";

export default function Questions({ questions, setQuestions, score, setScore }) {
    const [options, setOptions] = useState();
    const [currQueNo, setCurrQueNo] = useState(0);

    const handleShuffle = (optionsNew) => {
        return optionsNew.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        console.log("Questions state:", questions);
        if (questions) {
            setOptions(
                handleShuffle([
                    questions[currQueNo]?.correct_answer,
                    ...questions[currQueNo]?.incorrect_answers,
                ])
            );
        }
    }, [questions, currQueNo]);

    return (
        <div className="h-[100vh] bg-teal-100 flex justify-center items-center flex-col space-y-14">
            {questions ? (
                <>
                    <div>
                        <p className="font-yasu font-semibold text-[45px] ">The quiz has started</p>
                    </div>
                    <Question
                        currQueNo={currQueNo}
                        setCurrQueNo={setCurrQueNo}
                        questions={questions}
                        setQuestions={setQuestions}
                        correct={questions[currQueNo]?.correct_answer}
                        options={options}
                        score={score}
                        setScore={setScore}
                    />
                </>
            ) : (
                <div>Loading questions...</div>
            )}
        </div>
    );
}
