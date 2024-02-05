function getWords (letters, dictionary)  {
  //console.log("In getWords, got these letters")
  //console.log(letters);
  const letterSet = new Set(letters.split(''))
  const words = dictionary.filter(word => {
    const hasFirstLetter = word.indexOf(letters[0]) > -1;
    var hasBadLetter = false;
    for (var i = 0; i < word.length; i++) {      
      if (letterSet.has(word[i]) === false)  {
        hasBadLetter = true;
        break;
      }
    }
    
    return hasFirstLetter && !hasBadLetter;
  });
  return words;
}
function wordContainsAll(word, letters) {
  return letters.toLowerCase().split('').every(function(letter) {
      return word.toLowerCase().indexOf(letter) !== -1;
    });
}
function scoreWords(words, letters) {
  return words.reduce( (accumulator, word) => {
    var points = 0
    if (word.length === 4) {
      points = 1;
    } else if (word.length > 4) {
      points = word.length;
    }
    // console.log(`Word is ${word} and accumulated points are ${accumulator + points}`)
    const bonus = wordContainsAll(word, letters) ? 7 : 0
    return accumulator + points + bonus; 
  }, 0);
}
function getUniqueLetters(word) {
  const letterSet = new Set();
  word.split('').forEach((letter) => {
    letterSet.add(letter)
  });
  return letterSet;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function shuffleLetters(letters) {
  const shuffled = letters[0] + shuffleArray(Array.from(letters.substring(1))).join('')
  return shuffled
}
function shuffleAll(letters) {
  return shuffleArray(Array.from(letters)).join('')
}
function getPuzzle(dictionary) {
  const letterSetCounts = {}
  var letters = null;
  dictionary.forEach(word => {
    if (word.indexOf('s') === -1) {
      const letterSet = getUniqueLetters(word)
      if (letterSet.size === 7) {
        letters=Array.from(letterSet).sort().join('')
        if (!letterSetCounts.hasOwnProperty(letters)) {
          letterSetCounts[letters] = 0;
        } 
        letterSetCounts[letters] += 1;
      }
    }
  });
  const puzzles = Object.keys(letterSetCounts).filter(letters => {
    return letterSetCounts[letters] === 1;
  });
  var wordCount = 0;
  var puzzle = null;
  var count = 0;
  while ((wordCount < 18 || wordCount > 44) && count < 20) {
    puzzle = shuffleAll(puzzles[Math.floor(Math.random() * puzzles.length)]);
    //console.log(`Trying this puzzle: ${puzzle}`)
    wordCount = getWords(puzzle, dictionary).length
    //console.log(`has this many words: ${wordCount}`)
    count += 1;
  }
  return puzzle
}
function getRatingLevels(maxScore) {
  return { 'queenBee': maxScore,
           'genius': Math.ceil(0.7 * maxScore),
           'amazing': Math.ceil(0.5 * maxScore),
           'great': Math.ceil(0.4 * maxScore),
           'nice': Math.ceil(0.25 * maxScore),
           'solid': Math.ceil(0.15 * maxScore),
           'good': Math.ceil(0.1 * maxScore),
           'movingUp': Math.ceil(0.05 * maxScore),
           'goodStart': Math.ceil(0.02 * maxScore)
  };
}
function getRating(userScore, maxScore) {
  const percent = userScore / maxScore;
  if (percent >= 0.99)
    return "Grand Poobah!"
  else if (percent >= 0.7)
    return "Genius"
  else if (percent >= 0.5)
    return "Awesome"
  else if (percent >= 0.4)
    return "Superb"
  else if (percent >= 0.25)
    return "Nifty"
  else if (percent >= 0.15)
    return "Satisfactory"
  else if (percent >= 0.10)
    return "Promising"
  else if (percent >= 0.05)
    return "Adequate"
  else if (percent >= 0.02)
    return "Getting there"
  else return "Newbie"
}
  
export { getRatingLevels, getRating, getWords, wordContainsAll, scoreWords, getPuzzle, shuffleLetters };