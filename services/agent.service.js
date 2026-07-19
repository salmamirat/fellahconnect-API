const OpenAI = require("openai");
const systemPrompt = require("../Prompt/prompt");
const { toolDefinitions, executeTool } = require("../tools/agent.tools");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Chat with the AI agent using OpenAI function-calling (Responses API)
 * Implements a loop that handles tool calls until the model returns a final text response.
 */
exports.chat = async (message) => {
  // Initial request with tools
  let response = await client.responses.create({
    model: "gpt-4.1-mini",
    instructions: systemPrompt,
    input: message,
    tools: toolDefinitions,
  });

  // Function-calling loop: keep processing tool calls until we get a text response
  while (
    response.output &&
    response.output.some((item) => item.type === "function_call")
  ) {
    const toolCalls = response.output.filter(
      (item) => item.type === "function_call"
    );

    // Build the input for the next turn: previous output + tool results
    const nextInput = [];

    // Include the previous output items
    for (const item of response.output) {
      nextInput.push(item);
    }

    // Execute each tool call and add results
    for (const toolCall of toolCalls) {
      try {
        const args = JSON.parse(toolCall.arguments);
        const result = await executeTool(toolCall.name, args);

        nextInput.push({
          type: "function_call_output",
          call_id: toolCall.call_id,
          output: JSON.stringify(result || { message: "Aucun résultat trouvé" }),
        });
      } catch (error) {
        nextInput.push({
          type: "function_call_output",
          call_id: toolCall.call_id,
          output: JSON.stringify({ error: error.message }),
        });
      }
    }

    // Send the results back to get the next response
    response = await client.responses.create({
      model: "gpt-4.1-mini",
      instructions: systemPrompt,
      input: nextInput,
      tools: toolDefinitions,
    });
  }

  return response.output_text;
};