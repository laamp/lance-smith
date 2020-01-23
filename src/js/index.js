import "../css/style";

window.addEventListener("DOMContentLoaded", () => {
  // nav buttons
  const projectsNav = document.querySelector("#project-nav");
  const miscNav = document.querySelector("#misc-nav");
  const colorSwitcher = document.querySelector("#color-switcher");
  const colorLabel = colorSwitcher.querySelector("span");

  // sections
  const mainNode = document.querySelector(".main");
  const projects = document.querySelector(".projects");
  const misc = document.querySelector(".misc-projects");

  // initial state
  const savedMode = localStorage.getItem("color-mode");
  if (savedMode === "dark") {
    mainNode.classList.add("dark-mode");
    mainNode.classList.remove("light-mode");
    colorLabel.innerHTML = "light";
  } else if (savedMode === "light") {
    mainNode.classList.add("light-mode");
    mainNode.classList.remove("dark-mode");
    colorLabel.innerHTML = "dark";
  } else {
    mainNode.classList.add("dark-mode");
    localStorage.setItem("color-mode", "dark");
    colorLabel.innerHTML = "light";
  }
  misc.style.display = "none";

  const switchColorMode = () => {
    if (mainNode.classList.contains("dark-mode")) {
      mainNode.classList.replace("dark-mode", "light-mode");
      localStorage.setItem("color-mode", "light");
      colorLabel.innerHTML = "dark";
    } else {
      mainNode.classList.replace("light-mode", "dark-mode");
      localStorage.setItem("color-mode", "dark");
      colorLabel.innerHTML = "light";
    }
  };

  const navChange = destination => {
    if (destination === "projects") {
      projectsNav.classList.add("selected-nav");
      miscNav.classList.remove("selected-nav");

      projects.style.display = "block";
      misc.style.display = "none";
    } else {
      projectsNav.classList.remove("selected-nav");
      miscNav.classList.add("selected-nav");

      projects.style.display = "none";
      misc.style.display = "block";
    }
  };

  colorSwitcher.addEventListener("click", switchColorMode);
  projectsNav.addEventListener("click", () => navChange("projects"));
  miscNav.addEventListener("click", () => navChange("misc"));
});
