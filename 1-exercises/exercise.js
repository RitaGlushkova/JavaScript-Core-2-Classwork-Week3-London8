/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
let paragraph = document.querySelectorAll("p");
console.log(paragraph);
let classSideHeader = document.querySelector(".site-header");
console.log(classSideHeader);
let jumbo = document.querySelector("#jumbotronText");
console.log(jumbo);
let primary = document.querySelector(".primary-content").querySelectorAll("p");
console.log(primary);
/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let alertBtn = document.querySelector("#alertBtn");
console.log(alertBtn);

alertBtn.addEventListener("click", () =>
  alert("Thanks for visiting Bikes for Refugees!")
);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let changeColorBtn = document.querySelector("#bgrChangeBtn");

changeColorBtn.addEventListener("click", () => {
  let bodyOfThePage = document.querySelector("body");
  bodyOfThePage.classList.add("background--red");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
let largerLinkBtn = document.querySelector("#largerLinksBtn");

largerLinkBtn.addEventListener("click", () => {
  let links = document.querySelectorAll("a");
  for (let link of links) {
    link.style.fontSize = "50px";
  }
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

let addArticleBtn = document.querySelector("#addArticleBtn");

let newP = document.createElement('p');
let addArticle = document.querySelector("#addArticle");
addArticleBtn.addEventListener("click", () => {
  let input = document.querySelector("#addArticleInput").value;
  newP.innerText = input;
  addArticle.appendChild(newP)
});

