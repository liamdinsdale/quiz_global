"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styles from "./page.module.css";

export default function Page() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState<boolean>(false);
    const [questions, setQuestions] = useState<{ id: number, question: string, options: { id: number, title: string, correct: boolean }[] }[]>([
        {
            id: 0,
            question: "Example Question 1",
            options: [
                { id: 0, title: "Example Answer 1", correct: true },
                { id: 1, title: "Example Answer 2", correct: false },
                { id: 2, title: "Example Answer 3", correct: false },
                { id: 3, title: "Example Answer 4", correct: false },
            ]
        },
        {
            id: 1,
            question: "Example Question 2",
            options: [
                { id: 0, title: "Example Answer 1", correct: false },
                { id: 1, title: "Example Answer 2", correct: false },
                { id: 2, title: "Example Answer 3", correct: true },
                { id: 3, title: "Example Answer 4", correct: false },
            ]
        },
    ]);

    useEffect(() => {
        if (currentQuestionIndex > questions.length - 1) {
            setCurrentQuestionIndex(-1);
            return;
        }
    }, [currentQuestionIndex]);

    const handleAnswerToQuestion = (answerId: number) => {
        const question = questions[currentQuestionIndex];
        if (!question) return;

        const answer = question.options.find(x => x.id === answerId);
        if (!answer) return;

        answer.correct ? toast.success('Correct! That was the right answer.') : toast.error('False! That was the wrong answer.');
        setCurrentQuestionAnswered(true);
    };

    const handleNextQuestion = () => {
        if ((currentQuestionIndex + 1) > questions.length - 1) {
            toast.error('No more questions available.');
            return;
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestionAnswered(false);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
            <p className="text-lg">{questions[currentQuestionIndex].question}</p>
            <div className="grid grid-rows-2 grid-flow-col gap-4 p-2">
                {
                    !currentQuestionAnswered ? (
                        questions[currentQuestionIndex].options.map(option => {
                            return (
                                <div onClick={() => handleAnswerToQuestion(option.id)} className="hover:cursor-pointer hover:scale-110 transition-transform duration-300 w-52 h-20 p-2 rounded bg-black flex justify-center items-center select-none" key={option.id}>
                                    {option.title}
                                </div>
                            );
                        })
                    ) : (
                        questions[currentQuestionIndex].options.map(option => {
                            return (
                                <div onClick={handleNextQuestion} className={`hover:cursor-pointer hover:scale-110 transition-transform duration-300 w-52 h-20 p-2 bg-red- rounded ${option.correct ? styles.correct_answer : styles.false_answer} flex justify-center items-center select-none`} key={option.id}>
                                    {option.title}
                                </div>
                            );
                        })
                    )
                }

            </div>

        </div>
    )
}