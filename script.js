// Change the text content of a paragraph
function changeText() {
  const desc = document.getElementById("description");
  desc.textContent = "The text has been dynamically changed!";
}

// Change the CSS style of an element
function changeStyle() {
  const heading = document.getElementById("main-heading");
  heading.classList.toggle("highlight");
}

// Add a new list item
function addElement() {
  const ul = document.getElementById("demo-list");
  const newItem = document.createElement("li");
  newItem.textContent = "Newly added item";
  ul.appendChild(newItem);
}

// Remove the last list item
function removeElement() {
  const ul = document.getElementById("demo-list");
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
}
