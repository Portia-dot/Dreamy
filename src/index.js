const thumbnailElements = document.querySelectorAll(".allp-post-thumbnail");

const deselectAll = () =>
  thumbnailElements.forEach((elem) => elem.removeAttribute("selected"));

thumbnailElements.forEach((elem) =>
  elem.addEventListener("click", (e) => {
    if (elem.getAttribute("selected")) {
      elem.removeAttribute("selected");
    } else {
      deselectAll();
      elem.setAttribute("selected", "selected");
    }
  })
);
