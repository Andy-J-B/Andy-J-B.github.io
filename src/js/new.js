projects = {
  0: {
    project_name: "ClearWrite",
    project_classification: "CMPT 276 Group Project",
    project_link: "https://clearwrite.netlify.app/",
    date: "September-December 2024",
    languages_used: "React, Node, Vite, Express, Javascript, CSS, html",
    about: [
      "Developed a React frontend interface aligned with usability heuristics, improving user experience.",
      "Designed optimal backend server architecture with Node.js and Express, ensuring efficient API integration and reliable system performance.",
      "Implemented comprehensive testing strategies with Jest and Postman, alongside CI/CD pipelines, to automate workflows and maintain high-quality code standards.",
      "Led the team as Scrum Master, coordinating agile scrum development cycles, setting deadlines, and fostering effective communication among four developers to meet project milestones.",
    ],
  },
  1: {
    project_name: "Faster Than Light Yagami",
    project_classification: "Fall Hacks Project First Place",
    project_link: "https://github.com/Andy-J-B/FallHacks2024",
    date: "September 2024",
    languages_used: "Godot",
    about: [
      "Collaborated with a team of 4 to develop a speed typing game in Godot, featuring immersive music and sound effects.",
      "Integrated the Godot API to implement a fully functioning leaderboard, enhancing user competition and engagement.",
      "Awarded the First Place Prize by the Computer Science Student Society, out of 40 participating groups, recognizing the project for its creativity and engagement.",
    ],
  },
  2: {
    project_name: "Bank Management System",
    project_classification: "Personal Project",
    project_link: "https://github.com/Andy-J-B/BankManagementSystem",
    date: "June 2024",
    languages_used: "C++, SQLite",
    about: [
      "Developed a C++ based banking system with SQLite as its database, featuring transaction tracking and an undo function.",
      "Designed to manage user bank accounts, balances, and transactions with an intuitive interface.",
      "Implemented undo feature by using a stack data structure to reverse transactions, enhancing user control.",
    ],
  },
  3: {
    project_name: "Net Worth Calculator Web Application",
    project_classification: "Personal Project",
    project_link: "https://github.com/Andy-J-B/PERN_NetworthCalculator",
    date: "February 2024",
    languages_used: "Javascript, React, Postgresql, Express, Node, HTML, CSS",
    about: [
      "Developed a web application to calculate and track net worth, using PostgreSQL, Express.js, and Node.js for the backend and React as the frontend.",
      "Built RESTful APIs to handle CRUD operations, ensuring smooth data flow.",
      "Enabled users to calculate their current net worth and analyze historical trends for financial insights.",
    ],
  },
  4: {
    project_name: "Quant Regression Based Trading Algorithm",
    project_classification: "Group Project",
    project_link: "",
    date: "June 2023-May 2024",
    languages_used: "Python",
    about: [
      "Developed proficiency using GitHub workflows for version control and collaboration.",
      "Contributed to designing a core system that utilizes regression lines to signal buy, sell, and hold decisions within the trading algorithm.",
      "Strengthened skills in Python software development, structuring, and testing through hands-on experience.",
    ],
  },
};

var projectsContainer = document.getElementById("projects-container");

var toAdd = document.createDocumentFragment();
for (var i = 0; i < 5; i++) {
  var newProject = document.createElement("a");
  newProject.href = projects[i]["project_link"];
  newProject.id = i;
  newProject.className = "projects";
  //   newProject.textContent = "Hello";

  // Add children
  var project_name = document.createElement("h3");
  project_name.textContent = projects[i]["project_name"];
  project_name.id = i + "project_name";

  var project_classification = document.createElement("h5");
  project_classification.textContent = projects[i]["project_classification"];
  project_classification.id = i + "project_classification";
  project_classification.className = "project_classification";

  var languages_used = document.createElement("h5");
  languages_used.textContent = projects[i]["languages_used"];
  languages_used.id = i + "languages_used";
  languages_used.className = "languages_used";

  var about = document.createElement("div");
  about.id = i + "about";
  about.className = "project_about";

  for (var p = 0; p < projects[i]["about"].length; p++) {
    var sentence = document.createElement("p");
    sentence.textContent = projects[i]["about"][p];
    sentence.id = i + " " + p + "sentence";
    sentence.className = "sentence";

    about.appendChild(sentence);
  }

  newProject.appendChild(project_name);
  newProject.appendChild(project_classification);
  newProject.appendChild(languages_used);
  newProject.appendChild(about);

  toAdd.appendChild(newProject);
}

projectsContainer.appendChild(toAdd);
{
  /* <a href="project_link">
          <h3>project_name</h3>
          <h5>project_classification</h5>
          <h5>languages_used</h5>
          <p>about</p>
        </a> */
}
