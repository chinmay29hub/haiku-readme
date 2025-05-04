const syllable = require('syllable');
const seedrandom = require('seedrandom');
const wordBank = require('./words.json');
const templates = require('./templates.json');

// Generate a haiku with 5-7-5 syllable structure
function generateHaiku() {
  // Use a unique seed per request for randomness
  const seed = Date.now().toString() + Math.random().toString();
  seedrandom(seed, { global: false }); // Non-global to avoid affecting other calls

  // Helper to pick random item
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Generate a line with given syllable count
  function generateLine(syllableCount, retries = 3) {
    if (retries === 0) {
      console.warn(
        `Failed to generate line with ${syllableCount} syllables after retries`
      );
      return syllableCount === 5
        ? 'Code runs smoothly now,'
        : 'Functions work in silent peace.';
    }

    const templateKey = syllableCount === 5 ? 'fiveSyllable' : 'sevenSyllable';
    if (!templates[templateKey]) {
      console.error(`No templates for ${templateKey}`);
      return generateLine(syllableCount, retries - 1);
    }

    const template = random(templates[templateKey]);
    let line = [];

    for (let i = 0; i < template.pattern.length; i++) {
      const part = template.pattern[i];
      const syllables = template.syllables[i];
      if (['like', 'a', 'in', 'the'].includes(part)) {
        line.push(part); // Static words
      } else {
        if (!wordBank[part] || !Array.isArray(wordBank[part])) {
          console.error(`Invalid wordBank category: ${part}`);
          return generateLine(syllableCount, retries - 1);
        }
        const words = wordBank[part].filter((w) => w.syllables === syllables);
        if (!words.length) {
          console.warn(`No ${part} with ${syllables} syllables`);
          return generateLine(syllableCount, retries - 1);
        }
        const word = random(words).word;
        line.push(word);
      }
    }

    // Capitalize first word, add comma/period
    line[0] = line[0].charAt(0).toUpperCase() + line[0].slice(1);
    const punctuation = syllableCount === 5 ? ',' : '.';
    const lineText = line.join(' ') + punctuation;

    // Validate syllable count
    try {
      const actualSyllables = syllable(lineText.replace(/[,.\s]/g, ' ').trim());
      if (actualSyllables !== syllableCount) {
        console.warn(
          `Syllable mismatch: expected ${syllableCount}, got ${actualSyllables}`
        );
        return generateLine(syllableCount, retries - 1);
      }
    } catch (error) {
      console.warn(`Syllable validation failed: ${error.message}`);
      return generateLine(syllableCount, retries - 1);
    }

    return lineText;
  }

  // Generate haiku
  try {
    const line1 = generateLine(5);
    const line2 = generateLine(7);
    const line3 = generateLine(5);
    return `${line1}\n${line2}\n${line3}`;
  } catch (error) {
    console.error('Haiku generation failed:', error);
    return 'Code flows like a stream,\nFunctions dance in silent loops,\nDebug brings the dawn.';
  }
}

module.exports = { generateHaiku };
