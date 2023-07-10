import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const DetailedQuestion = () => {
  
  const navigate = useNavigate();

  const handleClick = async (chose_topic) => {
    try {
      var url = "http://127.0.0.1:5000/topic/" + chose_topic;
      // const userText = "your_user_text"; // 你需要将用户文本放入这个变量中
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chose_topic }),
      });
      const responseData = await response.json();
      // const responseText = JSON.parse(responseData.response);
      // const questions = responseText.question;
  
      navigate('/question-page', { state: { data: responseData.response } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    
  const topics = [
    { title: 'Finding Balance', description: 'Finding balance is a key aspect of spiritual growth. It involves harmonizing different aspects of your life, such as work, relationships, self-care, and personal development. By prioritizing self-reflection, setting boundaries, and practicing mindfulness, you can create a sense of equilibrium, peace, and fulfillment in your life.' },
    { title: 'Self-acceptance', description: 'Accepting yourself with your strengths and weaknesses is an essential part of spiritual growth. Through positive self-talk and a loving attitude towards oneself, you can cultivate greater self-confidence and self-esteem, and build a stronger connection with yourself.' },
    { title: 'Letting go', description: 'Learning to release past pain and fears is crucial for spiritual growth. Letting go of past mistakes, doubts, and resentments frees you and opens up a more positive, hopeful future.' },
    { title: 'Cultivating gratitude', description: 'Gratitude is a fundamental cornerstone of spiritual growth. Cultivating an attitude of gratitude and learning to cherish the people, things, and experiences in your life can bring more peace, happiness, and fulfillment.' },
    { title: 'Practicing self-reflection', description: 'Engaging in regular self-reflection is key to personal growth. Take time to review your actions, choices, and responses, and ask yourself how you can improve and grow. This kind of self-reflection helps you gain deeper self-understanding and become a better version of yourself.' },
    ];
    
    
    
    
      
  return (
    <main className="container p-20 grid content-center justify-items-center">
      <h1 className='underline font-bold text-5xl uppercase'>Choose a topic</h1>

      {topics.map((topic, index) => (
        <Link key={index} to='/question-page' className="mt-10 hover:shadow-lg px-5 py-2 rounded" onClick={() => handleClick(topic.title)}>
          <h2 className="text-xl font-bold">{topic.title}</h2>
          <p className="mt-2">{topic.description}</p>
        </Link>
      ))}
    </main>
  )
} 

export default DetailedQuestion