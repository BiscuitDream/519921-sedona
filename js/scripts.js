var toggleButton = document.querySelector(".modal-button");
var modalSearch = document.querySelector(".modal-search");
var modalForm = document.querySelector(".search-form");

var arrival = document.querySelector("input[name=arrival]");
var departure = document.querySelector("input[name=departure]");
var adults = document.querySelector("input[name=adults]");
var children = document.querySelector("input[name=children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

document.documentElement.classList.replace('no-js', 'js');

try {
storageAdults = localStorage.getItem("numberOfAdults");
storageChildren = localStorage.getItem("numberOfChildren");
} catch (err) {
isStorageSupport = false;
}

toggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modalSearch.classList.contains("modal-error")) {
    modalSearch.classList.remove("modal-error");
  }
  modalSearch.classList.add("modal-show");
  if (storageAdults) {
    adults.value = storageAdults;
  }
  if (storageAdults) {
    children.value = storageChildren;
  }
  if (toggleButton.classList.contains("button-clicked")) {
    modalSearch.classList.add("modal-close");
  } else {
    modalSearch.classList.remove("modal-close");
  }
  toggleButton.classList.toggle("button-clicked");
});

modalForm.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    modalSearch.classList.remove("modal-error");
    modalSearch.offsetWidth = modalSearch.offsetWidth;
    modalSearch.classList.add("modal-error");
    console.log("Нужно ввести данные в форму");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("numberOfAdults", adults.value);
    localStorage.setItem("numberOfChildren", children.value);
    }
  }
});
