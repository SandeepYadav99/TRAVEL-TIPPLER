"use client";

function getFirstTwoLines(inputText) {
  const wordsArray = inputText.split(" ");
  const lines = [];

  for (let i = 0; i < wordsArray.length; i++) {
    const wordsSubset = wordsArray.slice(i, i + 5);
    const line = wordsSubset.join(" ");
    lines.push(line);

    if (lines.length === 3) {
      break;
    }
  }

  return lines.join("\n");
}

export default getFirstTwoLines;
