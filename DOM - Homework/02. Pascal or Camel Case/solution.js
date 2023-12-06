function solve() {
  let textInput = document.getElementById('text').value.toLowerCase();
  let namingConventionInput = document.getElementById('naming-convention').value;
  let resultHTML = document.querySelector("#result");
  let result;

  if (namingConventionInput === 'Camel Case') {
      let textInputSplit = textInput.split(' ');

      for (let i = 0; i < textInputSplit.length; i++) {
          if (i === 0) {
              textInputSplit[i] = textInputSplit[i].toLowerCase();
          } else {
              textInputSplit[i] = textInputSplit[i][0].toUpperCase() + textInputSplit[i].slice(1, textInputSplit[i].length);
          }
      }

      result = textInputSplit.join('')

  } else if (namingConventionInput === 'Pascal Case') {
      let textInputSplit = textInput.split(' ');

      for (let i = 0; i < textInputSplit.length; i++) {
          textInputSplit[i] = textInputSplit[i][0].toUpperCase() + textInputSplit[i].slice(1, textInputSplit[i].length);
      }

      result = textInputSplit.join('')
  } else {
      result = 'Error!'
  }

  resultHTML.textContent = result
}