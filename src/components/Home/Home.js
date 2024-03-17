import { Link, useNavigate } from "react-router-dom";

export default function Home({fetchQuestions}){
    const navigate = useNavigate();
    const handleStartNow = () => {
        fetchQuestions();
        navigate('/questions');
    };
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-teal-100 space-y-10">
                <div>
                    <p className="font-yasu font-semibold text-[60px]">Let's Test Your Skills</p>
                </div>
                <div>
                    <button  onClick={handleStartNow} className="bg-teal-600 py-2 px-6 rounded-full font-yasu font-medium text-[30px]">Start Now</button >
                </div>
            </div>
        </div>
    );
}