const mainMenuItems = document.querySelectorAll("#categories .item");
console.log("Number of categories: ", mainMenuItems.length);
mainMenuItems.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});
