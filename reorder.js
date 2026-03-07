const fs = require('fs');
const content = fs.readFileSync('src/data/curriculum.js', 'utf8');

// The file currently has "module.exports =" instead of "export const curriculum =" because of the previous step.
let evalString = content.replace('module.exports = ', '').replace(/;\s*$/, '');
const arr = eval(evalString);

const order = [
  'live-coding',
  'ai-automation',
  'multimodal',
  'ai-native',
  'synthetic-data',
  'ai-in-medicine',
  'data-engineering',
  'agentic-ai',
  'context-engineering',
  'clinical-evaluation',
  'legal-healthcare-data',
  'clinical-deployment',
  'live-news-radar'
];

const newCurriculum = [];
for (const id of order) {
  const mod = arr.find(m => m.id === id);
  if (mod) newCurriculum.push(mod);
}

const finalCode = `export const curriculum = ${JSON.stringify(newCurriculum, null, 2)};\n`;
fs.writeFileSync('src/data/curriculum.js', finalCode);
