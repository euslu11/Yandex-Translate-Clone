document
  .getElementById("translator-image-container")
  .addEventListener("click", function () {
    var input = document.createElement("input");
    input.type = "file";
    input.onchange = function (event) {
      var file = event.target.files[0];
      console.log("Selected file:", file);
    };
    input.click();
  });

function selectLanguage(language, target) {
  document.getElementById(target).innerText = language;
  document.getElementById(target + "-languages").style.display = "none";
}

function swapLanguages() {
  var translateFrom = document.getElementById("translateFrom").innerText;
  var translateTo = document.getElementById("translateTo").innerText;

  document.getElementById("translateFrom").innerText = translateTo;
  document.getElementById("translateTo").innerText = translateFrom;
}

function toggleLanguageOptions(target) {
  var fromLanguages = document.getElementById("fromLanguages");
  var toLanguages = document.getElementById("toLanguages");

  if (target === "translateTo" || target === "translateFrom") {
    toLanguages.style.display =
      toLanguages.style.display === "block" ? "none" : "block";
    fromLanguages.style.display = "none";
  }
}

document.getElementById("translateFrom").addEventListener("click", function () {
  toggleLanguageOptions("translateFrom");
});

document.getElementById("translateTo").addEventListener("click", function () {
  toggleLanguageOptions("translateTo");
});
