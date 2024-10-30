experiences = {
  0: {
    title: "Hydrowave Android and IOS application",
    job_title: "Freelance Developer",
    date: "July - October 2024",
    languages_used: "Flutter, Dart, and Firebase",
    about:
      "Successfully developed flutter application for Hydrowave to improve sales. Collaborated with developer and product manager to create an ecommerce application available on android and ios. Debugged and tested flutter based software to increase software robustness.",
  },
};

var id = 0;

document.getElementById("experience-title").innerHTML = experiences[0]["title"];
document.getElementById("experience-job-title").innerHTML =
  experiences[0]["job_title"];
document.getElementById("experience-date").innerHTML = experiences[0]["date"];
document.getElementById("experience-languages-used").innerHTML =
  experiences[0]["languages_used"];
document.getElementById("experience-about").innerHTML = experiences[0]["about"];
document.getElementById(
  "experience-picture"
).src = `../../imgs/pages/experience/experience-${id}.jpg`;

function changeExperienceRight() {
  id += 1;

  if (checkIDRight() == false) {
    return;
  }

  document.getElementById("experience-title").innerHTML =
    experiences[id]["title"];
  document.getElementById("experience-job-title").innerHTML =
    experiences[id]["job_title"];
  document.getElementById("experience-date").innerHTML = experiences[0]["date"];
  document.getElementById("experience-languages-used").innerHTML =
    experiences[id]["languages_used"];
  document.getElementById("experience-about").innerHTML =
    experiences[id]["about"];
  document.getElementById(
    "experience-picture"
  ).src = `../../imgs/pages/experience/experience-${id}.jpg`;

  return;
}

function checkIDRight() {
  if (Object.keys(experiences).length == id) {
    id -= 1;
    return false;
  } else {
    return true;
  }
}

function changeExperienceLeft() {
  id -= 1;

  if (checkIDLeft() == false) {
    return;
  }

  document.getElementById("experience-title").innerHTML =
    experiences[id]["title"];
  document.getElementById("experience-job-title").innerHTML =
    experiences[id]["job_title"];
  document.getElementById("experience-date").innerHTML = experiences[0]["date"];
  document.getElementById("experience-languages-used").innerHTML =
    experiences[id]["languages_used"];
  document.getElementById("experience-about").innerHTML =
    experiences[id]["about"];
  document.getElementById(
    "experience-picture"
  ).src = `../../imgs/pages/experience/experience-${id}.jpg`;

  return;
}

function checkIDLeft() {
  if (Object.keys(experiences).length == -1) {
    id += 1;
    return false;
  } else {
    return true;
  }
}