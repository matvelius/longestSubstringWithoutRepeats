const { exit } = require('process');
let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {

  console.log(longestSubstringWithoutRepeats(line))

  rl.close()
  exit(0)

})

function longestSubstringWithoutRepeats(string) {

  let startIndex = 0;
  let endIndex = 0
  let maxLength = 0

  let charSet = new Set();

  while (endIndex < string.length) {

    const char = string[endIndex]

    if (!charSet.has(char)) {

      charSet.add(char)
      endIndex++
      maxLength = Math.max(maxLength, charSet.size)

    } else {

      charSet.delete(string[startIndex])
      startIndex++

    }

  }

  return maxLength

}

// console.log(longestSubstringWithoutRepeats("ysmfzgw"))