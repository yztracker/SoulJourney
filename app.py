import os
import vertexai
from vertexai.language_models import TextGenerationModel
from flask import Flask, jsonify, request
from google.auth import credentials
from google.oauth2 import service_account
import json
from flask_cors import CORS

creds_path = os.path.join(os.path.dirname(__file__), "creds.json")
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = creds_path

app = Flask(__name__)
CORS(app)

# vertexai.init(project="awesome-dialect-392215", location="us-central1")
parameters = {
    "temperature": 0.1,
    "max_output_tokens": 654,
    "top_p": 0.8,
    "top_k": 40
}
model = TextGenerationModel.from_pretrained("text-bison@001")

@app.route("/predict", methods=["POST"])
def get_deep_question():
    data = request.json
    previous_question = data.get("previous_question")
    user_response = data.get("user_response")

    text = f"""
        You are a professional psychologist Prompt users to consider multiple perspectives: \"Consider different aspects of the question and evaluate it from personal, social, or ethical angles.\"
        Guide users to focus on personal growth: \"Reflect on how the question relates to your personal growth and well-being, providing specific examples.\"
        Provide deep-thinking questions: \"Try to delve deeper into the question, contemplating its meaning, impact, and possible solutions.\"
        Guide users to focus on introspection and reflection: \"Reflect on how the question triggers introspection and reflection, describing your personal experiences and perspectives on the issue.


        previous question : {previous_question}
        user response : {user_response}       


        Please ask 3 questions to delve deeper and enrich this spiritual journey, in response to previous questions and user responses,
         and give 1 modalresponse base on previous question and user response to give feedback on his reply,Remember to give suggestions for user response
 encourage users and enrich their spiritual well-being.
 """
    text2 = """
        output 
         {
            "modalresponse:""
            ,"question":["","",""]
         }
         please don't give any need ```json``` just return the object directly
        without the markdown ( ``) wrapping
    """

    # formatted_text = text.format(previous_question=question, user_response=user_text)

    response = model.predict(text+text2, **parameters)
    print(response.text) 
    response_dict = json.loads(response.text)
    print(response_dict)
    return jsonify({
        "response": response_dict
    })

@app.route("/topic/<chose_topic>", methods=["POST"])
def get_topic_question(chose_topic):

    text =     """You are a professional psychologist Prompt users to consider multiple perspectives: \"Consider different aspects of the question and evaluate it from personal, social, or ethical angles.\"
Guide users to focus on personal growth: \"Reflect on how the question relates to your personal growth and well-being, providing specific examples.\"
Provide deep-thinking questions: \"Try to delve deeper into the question, contemplating its meaning, impact, and possible solutions.\"
Guide users to focus on introspection and reflection: \"Reflect on how the question triggers introspection and reflection, describing your personal experiences and perspectives on the issue.

input:{chose_topic}

Please provide a 3 deep topic about input spiritual growth for users to think deeply

        output 
         {
            question:["","",""]
         }
        please dont need ```json``` just return the object directly

    """


    response = model.predict(text, **parameters)
    print(response.text)
    response_dict = json.loads(response.text)
    print(response_dict)
    return jsonify({
        "response": response_dict
    })

if __name__ == "__main__":
    app.run(debug=True)