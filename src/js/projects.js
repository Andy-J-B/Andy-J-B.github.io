projects = {
  0: {
    project_name: "Faster Than Light Yagami",
    project_classification: "Fall Hacks Project First Place",
    date: "September 2024",
    languages_used: "Godot",
    about:
      "Collaborated with a team of 4 and developed a speed typing game in Godot with immersive music and sound effects. Integrated Godot api to implement a fully functioning leaderboard, enhancing user competition and engagement. Awarded the First Place Prize by the Computer Science Student Society out of 40 participating groups as it recognized this project for its creativity and engagement.",
  },
  1: {
    project_name: "Bank Management System",
    project_classification: "Personal Project",
    date: "June 2024",
    languages_used: "C++, SQLite",
    about:
      "Developed a C++ based banking system with SQLite as its database, featuring transaction tracking and an undo function. Designed to manage user bank accounts, balances, and transactions with an intuitive interface. Implemented undo feature by implementing a stack data structure to reverse transactions, enhancing user control.",
  },
  2: {
    project_name: "Net Worth Calculator Web Application",
    project_classification: "Personal Project",
    date: "February 2024",
    languages_used: "Javascript, React, Postgresql, Express, Node, HTML, CSS",
    about:
      "Developed a web application to calculate and track net worth, using PostgreSQL, Express.js, and Node.js for the backend and React as the frontend. Built RESTful APIs to handle CRUD operations, ensuring smooth data flow. Enabled users to calculate their current net worth and analyse historical trends for financial insights.",
  },
  3: {
    project_name: "Quant Regression Based Trading Algorithm",
    project_classification: "Group Project",
    date: "June 2023-May 2024",
    languages_used: "Python",
    about:
      "Developed proficiency using GitHub workflows to versional control and collaboration. Contributed to designing a core system that utilises regression lines to signal buy, sell, and hold decisions within the trading algorithm. Strengthened skills in Python software development, structuring, and testing through hands-on experience.",
  },
};

var id = 0;

document.getElementById("project-name").innerHTML = projects[0]["project_name"];
document.getElementById("project-classification").innerHTML =
  projects[0]["project_classification"];
document.getElementById("project-date").innerHTML = projects[0]["date"];
document.getElementById("project-languages-used").innerHTML =
  projects[0]["languages_used"];
document.getElementById("project-about").innerHTML = projects[0]["about"];
document.getElementById(
  "project-picture"
).src = `../../imgs/pages/projects/project-${id}.png`;

function changeProjectRight() {
  id += 1;

  checkIDRight();
  document.getElementById("project-name").innerHTML =
    projects[id]["project_name"];
  document.getElementById("project-classification").innerHTML =
    projects[id]["project_classification"];
  document.getElementById("project-date").innerHTML = projects[0]["date"];
  document.getElementById("project-languages-used").innerHTML =
    projects[id]["languages_used"];
  document.getElementById("project-about").innerHTML = projects[id]["about"];
  document.getElementById(
    "project-picture"
  ).src = `../../imgs/pages/projects/project-${id}.png`;
  return;
}

function checkIDRight() {
  if (Object.keys(projects).length == id) {
    id = 0;
    return false;
  } else {
    return true;
  }
}

function changeProjectLeft() {
  id -= 1;

  checkIDLeft();

  document.getElementById("project-name").innerHTML =
    projects[id]["project_name"];
  document.getElementById("project-classification").innerHTML =
    projects[id]["project_classification"];
  document.getElementById("project-date").innerHTML = projects[0]["date"];
  document.getElementById("project-languages-used").innerHTML =
    projects[id]["languages_used"];
  document.getElementById("project-about").innerHTML = projects[id]["about"];
  document.getElementById(
    "project-picture"
  ).src = `../../imgs/pages/projects/project-${id}.png`;

  return;
}

function checkIDLeft() {
  if (id < 0) {
    id = Object.keys(projects).length - 1;

    return false;
  } else {
    return true;
  }
}
