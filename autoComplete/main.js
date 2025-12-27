let availableKeywords = [
  "html",
  "css",
  "javascript",
  "react",
  "php",
  "node",
  "wordpress",
  "joomla",
  "angular"
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }

  display(result);

  if (!result.length) {
    resultsBox.innerHTML = "";
  }

  if (!result.length && input.length) {
  resultsBox.innerHTML = "<p style='padding:10px'>No results found</p>";
}
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-box")) {
    resultsBox.innerHTML = "";
  }
});


inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const firstItem = document.querySelector(".result-box li");
    if (firstItem) {
      inputBox.value = firstItem.innerText;
      resultsBox.innerHTML = "";
    }
  }
});