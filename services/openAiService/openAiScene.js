const { Configuration, OpenAIApi } = require("openai");
const { generatePrompt, TEXTS } = require("./openAiServiceUtils");

const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function getOpenAiResponse(question) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(question),
      max_tokens: 4000,
      n: 1,
      temperature: 0.2,
    });
    return completion.data.choices[0].text;
  } catch (error) {
    if (error.response && error.status === 400) {
      return TEXTS.longMessage;
    }
    return TEXTS.error; // add return statement here
  }
}

export default getOpenAiResponse;
