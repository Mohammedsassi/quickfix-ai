function getFix() {
  const input = document.getElementById("errorInput").value;
  const output = document.getElementById("output");

  if (input.toLowerCase().includes("undefined")) {
    output.innerText = "Looks like you're using a variable that hasn't been declared yet.";
  } else if (input.toLowerCase().includes("syntax")) {
    output.innerText = "Hmm... syntax error. Maybe you're missing a bracket or semicolon.";
  } else if (input.trim() === "") {
    output.innerText = "Paste an error above to get help!";
  } else {
    output.innerText = "This might need a deeper look. Try checking for typos or missing imports.";
  }
}
