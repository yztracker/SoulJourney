import vertexai
from vertexai.language_models import TextGenerationModel

vertexai.init(project="awesome-dialect-392215", location="us-central1")
parameters = {
    "temperature": 0.8,
    "max_output_tokens": 654,
    "top_p": 0.8,
    "top_k": 40
}
#previous question :  What does it mean to grow spiritually? Can you think of any examples of how you have grown spiritually in your life?
previous_question = input()

#user response : Increased Self-Awareness: Through introspection and self-reflection practices, individuals can develop a deeper understanding of their thoughts, emotions, and behaviors. This awareness allows them to recognize patterns, identify areas for growth, and make conscious choices aligned with their spiritual values.
user_response = input()


model = TextGenerationModel.from_pretrained("text-bison@001")
response = model.predict(
    """You are a professional psychologist Prompt users to consider multiple perspectives: \"Consider different aspects of the question and evaluate it from personal, social, or ethical angles.\"
Guide users to focus on personal growth: \"Reflect on how the question relates to your personal growth and well-being, providing specific examples.\"
Provide deep-thinking questions: \"Try to delve deeper into the question, contemplating its meaning, impact, and possible solutions.\"
Guide users to focus on introspection and reflection: \"Reflect on how the question triggers introspection and reflection, describing your personal experiences and perspectives on the issue.

input:\"What are some ways to explore new things in a spiritual way?
Meditation and Mindfulness: Practicing meditation and mindfulness can help you cultivate a deeper connection with your inner self and the present moment. It allows you to explore your thoughts, emotions, and sensations, leading to greater self-awareness and spiritual insights.

previous question : {previous_question}
user response : {user_response}


Please provide 3 question based on previous question and user\'s response spiritual growth for users to think deeply, and 1 response base on user response to give feedback on his reply, encourage users and enrich their spiritual well-being.


return format
{response:\"\",question:[]}""",
    **parameters
)
print(f"Response from Model: {response.text}")