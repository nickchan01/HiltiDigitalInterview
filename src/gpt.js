import OpenAI from "openai";

const openai = new OpenAI({
  organization: 'org-nPr7BryMOBDUKcdEqLnz7evm',
  apiKey: "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"
});

//const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

async function callApi() {
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: "What is a carrot",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(completion.choices[0].text);

}
callApi();

