function bruteSearch(mainString, subString) {
    let indexes = [];
    for (let i = 0; i <= mainString.length - subString.length; i++) {
      let j;
      for (j = 0; j < subString.length; j++) {
        if (mainString[i + j] !== subString[j]) {
          break;
        }
      }
      if (j === subString.length) {
        indexes.push(i);
      }
    }
    return indexes;
  }
  
  // Пример использования
  let mainString = "abracadabra";
  let subString = "bra";
  let indices = bruteSearch(mainString, subString);
  console.log(indices);
  