const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

exports.chat = async (message) => {

    const response = await client.responses.create({

        model:"gpt-4.1-mini",

        input:message

    });

    return response.output_text;

};