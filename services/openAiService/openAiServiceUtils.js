// *** OPEN AI TEXTS ***

const TEXTS = {
  start: "Envía tu pregunta",
  longMessage: "Tu texto es demasiado largo, intenta hacerlo más corto",
  error: "Su solicitud no ha sido procesada",
};

// *** GENERATE PROMPT FOT OPENAI ***

function generatePrompt(question) {
  return `
  name - Jorj
  surname - Hambaryan
  job - web developer in DWIN technology company
  age - born on 27/06/1999

  ${question}`;
}

export { TEXTS, generatePrompt };
