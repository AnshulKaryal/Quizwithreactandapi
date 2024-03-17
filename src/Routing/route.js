import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Questions from "../components/Questions/Questions";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import Question from "../components/Questions/Question";
import { useState } from "react";
import axios from "axios";

export default function Router(){
    // console.log("Router component mounted");
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);

    const fetchQuestions = async () => {
        // console.log("fetchQuestions function called");
        const { data } = await axios.get(
            'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
          );
          setQuestions(data.results);
        //   console.log("fetchQuestions function called");
      };

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home                    
                    fetchQuestions={fetchQuestions}
                />}></Route>
                <Route exact path="/questions" element={<Questions
                    questions={questions}
                    setQuestions={setQuestions}
                    score={score}
                    setScore={setScore}
                />}></Route>
                <Route exact path="/question" element={<Question/>}></Route>
                <Route exact path="/score" element={<ScoreCard score={score} setScore={setScore}/>}></Route>
                <Route
                  path="*"
                  element={
                    <div style={{ textAlign: "center", color: "red" }}>
                      <h1>404 Error Not Found</h1>
                      <h2>Invalid Page</h2>
                    </div>
                  }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}