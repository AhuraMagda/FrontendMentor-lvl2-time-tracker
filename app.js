const workHours = document.querySelector("#work-hours");
const playHours = document.querySelector("#play-hours");
const studyHours = document.querySelector("#study-hours");
const exerciseHours = document.querySelector("#exercise-hours");
const socialHours = document.querySelector("#social-hours");
const selfCareHours = document.querySelector("#self-care-hours");

const previousWorkHours = document.querySelector("#previous-work-hours");
const previousPlayHours = document.querySelector("#previous-play-hours");
const previousStudyHours = document.querySelector("#previous-study-hours");
const previousExerciseHours = document.querySelector(
  "#previous-exercise-hours"
);
const previousSocialHours = document.querySelector("#previous-social-hours");
const previousSelfCareHours = document.querySelector(
  "#previous-self-care-hours"
);

// Fetch data

const url = "./data.json";

let data;
async function fetchData() {
  const response = await fetch(url);
  data = await response.json();
  getDailyData();
}

// Get and change data data

function getDailyData() {
  workHours.innerHTML = `${data[0].timeframes.daily.current} hrs`;
  playHours.innerHTML = `${data[1].timeframes.daily.current} hrs`;
  studyHours.innerHTML = `${data[2].timeframes.daily.current} hrs`;
  exerciseHours.innerHTML = `${data[3].timeframes.daily.current} hrs`;
  socialHours.innerHTML = `${data[4].timeframes.daily.current} hrs`;
  selfCareHours.innerHTML = `${data[5].timeframes.daily.current} hrs`;

  previousWorkHours.innerHTML = `Last week - ${data[0].timeframes.daily.previous} hrs`;
  previousPlayHours.innerHTML = `Last week - ${data[1].timeframes.daily.previous} hrs`;
  previousStudyHours.innerHTML = `Last week - ${data[2].timeframes.daily.previous} hrs`;
  previousExerciseHours.innerHTML = `Last week - ${data[3].timeframes.daily.previous} hrs`;
  previousSocialHours.innerHTML = `Last week - ${data[4].timeframes.daily.previous} hrs`;
  previousSelfCareHours.innerHTML = `Last week - ${data[5].timeframes.daily.previous} hrs`;
}

function getWeeklyData() {
  workHours.innerHTML = `${data[0].timeframes.weekly.current} hrs`;
  playHours.innerHTML = `${data[1].timeframes.weekly.current} hrs`;
  studyHours.innerHTML = `${data[2].timeframes.weekly.current} hrs`;
  exerciseHours.innerHTML = `${data[3].timeframes.weekly.current} hrs`;
  socialHours.innerHTML = `${data[4].timeframes.weekly.current} hrs`;
  selfCareHours.innerHTML = `${data[5].timeframes.weekly.current} hrs`;

  previousWorkHours.innerHTML = `Last week - ${data[0].timeframes.weekly.previous} hrs`;
  previousPlayHours.innerHTML = `Last week - ${data[1].timeframes.weekly.previous} hrs`;
  previousStudyHours.innerHTML = `Last week - ${data[2].timeframes.weekly.previous} hrs`;
  previousExerciseHours.innerHTML = `Last week - ${data[3].timeframes.weekly.previous} hrs`;
  previousSocialHours.innerHTML = `Last week - ${data[4].timeframes.weekly.previous} hrs`;
  previousSelfCareHours.innerHTML = `Last week - ${data[5].timeframes.weekly.previous} hrs`;
}

function getMonthlyData() {
  workHours.innerHTML = `${data[0].timeframes.monthly.current} hrs`;
  playHours.innerHTML = `${data[1].timeframes.monthly.current} hrs`;
  studyHours.innerHTML = `${data[2].timeframes.monthly.current} hrs`;
  exerciseHours.innerHTML = `${data[3].timeframes.monthly.current} hrs`;
  socialHours.innerHTML = `${data[4].timeframes.monthly.current} hrs`;
  selfCareHours.innerHTML = `${data[5].timeframes.monthly.current} hrs`;

  previousWorkHours.innerHTML = `Last week - ${data[0].timeframes.monthly.previous} hrs`;
  previousPlayHours.innerHTML = `Last week - ${data[1].timeframes.monthly.previous} hrs`;
  previousStudyHours.innerHTML = `Last week - ${data[2].timeframes.monthly.previous} hrs`;
  previousExerciseHours.innerHTML = `Last week - ${data[3].timeframes.monthly.previous} hrs`;
  previousSocialHours.innerHTML = `Last week - ${data[4].timeframes.monthly.previous} hrs`;
  previousSelfCareHours.innerHTML = `Last week - ${data[5].timeframes.monthly.previous} hrs`;
}

// Buttons

const dailyButton = document.querySelector("#daily-button");
const weeklyButton = document.querySelector("#weekly-button");
const monthlyButton = document.querySelector("#monthly-button");

fetchData();

dailyButton.addEventListener("click", getDailyData);
weeklyButton.addEventListener("click", getWeeklyData);
monthlyButton.addEventListener("click", getMonthlyData);
