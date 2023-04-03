let inputTextarea = document.getElementById("input-textarea");
let outputParagraph = document.getElementById("output");
let decodeButton = document.getElementById("decode-btn");

decodeButton.addEventListener("click", function () {
  let inputText = inputTextarea.value.trim();
  if (inputText === "") {
    outputParagraph.textContent = "No input provided.";
    return;
  }
  let inputArray = inputText.split("\n");
  let decodedStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    try {
      let decodedText = atob(inputArray[i].trim());
      decodedStrings.push(decodedText);
    } catch (error) {
      decodedStrings.push("Invalid input.");
    }
  }
  outputParagraph.textContent = decodedStrings.join("\n");
});
