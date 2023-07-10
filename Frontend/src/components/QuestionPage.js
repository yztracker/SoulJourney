import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const QuestionPage = () => {
  const location = useLocation();
  const initialData = location.state?.data;
  const [data, setData] = useState(initialData || {});
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [dialogues, setDialogues] = useState([]);
  
  useEffect(() => {
    setData(initialData); 
  }, [initialData]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          previous_question: selectedQuestion,
          user_response: answer,
        }),
      });

      const responseData = await response.json();
      const questions = responseData.response.question;
      const modalresponse = responseData.response.modalresponse;

      setData({ modalresponse, question: questions });
      setDialogues(prev => [...prev, { question: selectedQuestion, response: modalresponse, answer: answer }]);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    setSelectedQuestion(null);
    setAnswer('');
  };

  return (
    <main className="container mx-auto px-10 py-6 bg-f5efE6 text-7895B2">
      <h1 className='text-center font-bold text-3xl uppercase mb-5'>Finding Balance</h1>

      {dialogues.map((dialogue, index) => (
        <div key={index} className="bg-e8dfca p-5 mt-5 rounded shadow">
          <p className="font-bold text-lg mb-2">{dialogue.question}</p>
          <div className="dialogue-answer mb-2">
            <h2 className="font-bold">Answer：</h2>
            <p>{dialogue.answer}</p>
          </div>
          <div className="dialogue-response">
            <h2 className="font-bold">Response：</h2>
            <p>{dialogue.response}</p>
          </div>
        </div>
      ))}

      {data && data?.question?.map((question, index) => (
        <div key={index} className="bg-e8dfca p-5 mt-5 rounded shadow cursor-pointer" onClick={() => setSelectedQuestion(question)}>
          <p>{question}</p>
        </div>
      ))}

      {selectedQuestion && (
        <form onSubmit={handleSubmit} className="bg-e8dfca p-5 mt-5 rounded shadow">
          <h2 className="font-bold text-lg mb-2">{selectedQuestion}</h2>
          <textarea 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full h-24 p-2 mt-2 mb-4 border border-aeBDca rounded text-7895B2"
          ></textarea>
          <button type="submit" className="py-2 px-5 border-aeBDca bg-aeBDca text-white rounded uppercase">Submit</button>
        </form>
      )}
    </main>
  )
}

export default QuestionPage
