function checkWord(word, endWord) {
    word = word.split("");
    endWord = endWord.split("");
    controle = true;
    for (let i = 0; i < endWord.length; i++) {
      if (word[word.length-endWord.length+i] != endWord[i]) {
        controle = false;
      }
    }
    return controle;
  }
  
  console.log(checkWord("trybe", "be")); 
  console.log(checkWord("joaofernando", "fernan")); 