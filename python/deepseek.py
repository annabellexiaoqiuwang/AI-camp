import os
import requests

API_URL = "https://router.huggingface.co/v1/chat/completions"
headers = {
    "Authorization": "Bearer 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"
}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

response = query({
    "messages": [
        {
            "role": "user",
            "content": "What is the economic capital of the United States?"
        }
    ],
    "model": "deepseek-ai/DeepSeek-V4-Pro:novita"
})

print(response["choices"][0]["message"])