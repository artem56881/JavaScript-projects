function searchSubstring(str, subStr) {
    let hashSubStr = hash(subStr);
    let result = [];
    
    for (let i = 0; i <= str.length - subStr.length; i++) {
      let currentSubStr = str.substring(i, i + subStr.length);
      let currentHash = hash(currentSubStr);
      
      if (currentHash === hashSubStr) {
            if (currentSubStr === subStr) result.push(i);
      }
    }
    
    return result;
  }
  
  function hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
    }
    return hash;
  }
  
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let firstString;
  let subString;

  rl.question('Введите первую строку: ', (firstString) => {
    firstString = input;
    rl.question('Введите вторую строку: ', (subString) => {
        subString = input;
      rl.close();
    });
  });
  console.log(searchSubstring(firstString, subString));