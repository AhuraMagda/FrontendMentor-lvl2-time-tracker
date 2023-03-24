


const workHours = document.querySelector('#work-hours')
const playHours = document.querySelector('#play-hours')
const studyHours = document.querySelector('#study-hours')
const exerciseHours = document.querySelector('#exercise-hours')
const socialHours = document.querySelector('#social-hours')
const selfCareHours = document.querySelector('#self-care-hours')


// pobranie danych z innego pliku 

const url = './data.json'

let workDataDaily;
let playDataDaily;
let studyDataDaily;
let exerciseDataDaily;
let socialDataDaily;
let selfCareDataDaily;

// Podmiana godzin na te daily

async function getDailyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    workDataDaily = data[0].timeframes.daily.current
    playDataDaily = data[1].timeframes.daily.current
    studyDataDaily = data[2].timeframes.daily.current
    exerciseDataDaily = data[3].timeframes.daily.current
    socialDataDaily = data[4].timeframes.daily.current
    selfCareDataDaily = data[5].timeframes.daily.current
}

let workDataWeekly;
let playDataWeekly;
let studyDataWeekly;
let exerciseDataWeekly;
let socialDataWeekly;
let selfCareDataWeekly;

async function getWeeklyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    workDataWeekly = data[0].timeframes.weekly.current
    playDataWeekly = data[1].timeframes.weekly.current
    studyDataWeekly = data[2].timeframes.weekly.current
    exerciseDataWeekly = data[3].timeframes.weekly.current
    socialDataWeekly = data[4].timeframes.weekly.current
    selfCareDataWeekly = data[5].timeframes.weekly.current
}

// Podmiana godzin na te weekly

async function changeInnerDataDaily() {
    await getDailyData()
    workHours.innerHTML = `${workDataDaily} hrs`;
    playHours.innerHTML = `${playDataDaily} hrs`;
    studyHours.innerHTML = `${studyDataDaily} hrs`;
    exerciseHours.innerHTML = `${exerciseDataDaily} hrs`;
    socialHours.innerHTML = `${socialDataDaily} hrs`;
    selfCareHours.innerHTML = `${selfCareDataDaily} hrs`;
}

async function changeInnerDataWeekly() {
    await getWeeklyData()
    workHours.innerHTML = `${workDataWeekly} hrs`;
    playHours.innerHTML = `${playDataWeekly} hrs`;
    studyHours.innerHTML = `${studyDataWeekly} hrs`;
    exerciseHours.innerHTML = `${exerciseDataWeekly} hrs`;
    socialHours.innerHTML = `${socialDataWeekly} hrs`;
    selfCareHours.innerHTML = `${selfCareDataWeekly} hrs`;
}

const dailyButton = document.querySelector("#daily-button");
const weeklyButton = document.querySelector("#weekly-button");

changeInnerDataDaily()

dailyButton.addEventListener("click", changeInnerDataDaily)
weeklyButton.addEventListener("click", changeInnerDataWeekly)