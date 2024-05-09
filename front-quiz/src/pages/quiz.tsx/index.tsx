import { useEffect, useState } from "react";
import { Button, Spinner } from 'react-bootstrap';
import { Api } from "../../contexts/api";
import Sidebar from "../../components/sidebar";

function Quiz(){
    const [question, setQuestion] = useState<any[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await Api.get('perguntas/');
            setQuestion(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao obter dados da API:", error);
        }
    };

    const startQuiz = () =>{
        setQuizStarted(true);
        setQuizFinished(false);
        setCurrentQuestion(0);
        setScore(0)
    }

    const handleAnswer = (opcao: string) => {
        const currentQuestionData = question[currentQuestion];
        if (currentQuestionData && opcao === currentQuestionData.resposta_correta) {
            setScore(score + 1);
        }
    
        if (currentQuestion < question.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <>
        <Sidebar/>
        <div className="container col-5">
            <div className="crud shadow-sm p-4 mb-4 mt-5 bg-body rounded">

            {loading ? (<>  <span>Carregando perguntas... </span> <Spinner animation="border" size="sm"/> </>) : 
            (
                !quizStarted || quizFinished ? (
                <div>
                    <h3>{quizFinished ? 'Recomeçar?' : "Inciar Quiz?"}</h3>
                    <Button variant="outline-success"
                            onClick={() => startQuiz()}>{quizFinished ? 'Recomeçar' : "Iniciar"}
                    </Button>

                    {quizFinished &&(
                        <div className="p-2">
                            <h6>FINALIZADO</h6>
                            <h6>Pontuação: Acertou {score} de {question.length} questões</h6>
                        </div>
                    )}
                </div>) : 
                (
                    <div className="text-center">
                        <h2>
                            {question[currentQuestion]?.pergunta}
                        </h2>
                        <div className="d-grid gap-1 col-6 mx-auto">
                            {question[currentQuestion]?.opcoes.map((opcoe:string, index:number) => (
                                <Button variant="light" key={index} onClick={() => handleAnswer(opcoe)}>
                                    {opcoe}
                                </Button>
                            ))}
                        </div>
                    </div>
                )
            )}
            </div>
        
        </div>
        </>
    );
};

export default Quiz;