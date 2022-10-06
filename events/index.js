const openMenu = document.querySelector("#dashboard-menu");
const navigation = document.querySelector("#navigation-section");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  navigation.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navigation.style.display = "none";
});
