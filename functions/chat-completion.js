const functions = require("firebase-functions")
const admin = require("firebase-admin")
const OpenAI = require("openai")

if (admin.apps.length === 0) {
    admin.initializeApp();
}

exports.chatCompletion = functions.https.onCall(async (data, context) => {
    const { prompt } = data;
    const OPENAI_API_KEY = "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"
    const openai = new OpenAI({apiKey : OPENAI_API_KEY})
    const aiModel = "gpt-3.5-turbo"

    const messages = [
        {
            role: "system",
            content: "you are a helpful assistant"
        },
        {
            role: "user",
            content: prompt
        },
    ]

    const completion = await openai.chat.completions.create({
        model: aiModel,
        messages: messages
    })

    const aiResponse = completion.choices[0].message.content

    return {
        aiResponse
    };
});