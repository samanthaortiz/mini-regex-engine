function runRegex(pattern, inputString) {
  if (typeof pattern !== "string" || typeof inputString !== "string") {
    throw new Error("Both pattern and input string must be string type.")
  }

  return findMatch(pattern, inputString)
}

function findMatch(pattern, inputString) {
  let matchBuilder = ''
  const matches = []
  
  // Handle alternates by splitting the pattern on the pipe character
  const patterns = pattern.split("|")

  patterns.forEach(currPattern => {
    let lastMatchedPosition;

    for (let i = 0; i < currPattern.length; i++) {
      const patternChar = currPattern[i]

      for (let j = 0; j < inputString.length; j++) {
        inputStringChar = inputString[j]

        if ((lastMatchedPosition === undefined || lastMatchedPosition === j-1) && inputStringChar === patternChar) {
          lastMatchedPosition = j
          matchBuilder = matchBuilder.concat(inputStringChar)

          if (matchBuilder === currPattern) {
            matches.push(matchBuilder)
            matchBuilder = ''
          }
        }
      }
    }
  })

  return matches

}

module.exports = { runRegex };