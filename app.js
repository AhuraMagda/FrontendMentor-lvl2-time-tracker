


const workHours = document.querySelector('#work-hours')
const playHours = document.querySelector('#play-hours')
const studyHours = document.querySelector('#study-hours')
const exerciseHours = document.querySelector('#exercise-hours')
const socialHours = document.querySelector('#social-hours')
const selfCareHours = document.querySelector('#self-care-hours')


// pobranie danych z innego pliku i od razu podmienianie (żeby było szybiej)

const url = './data.json'

let data;
async function fetchData() {
    const response = await fetch(url);
    data = await response.json();
    workHours.innerHTML = `${data[0].timeframes.daily.current} hrs`;
    playHours.innerHTML = `${data[1].timeframes.daily.current} hrs`;
    studyHours.innerHTML = `${data[2].timeframes.daily.current} hrs`;
    exerciseHours.innerHTML = `${data[3].timeframes.daily.current} hrs`;
    socialHours.innerHTML = `${data[4].timeframes.daily.current} hrs`;
    selfCareHours.innerHTML = `${data[5].timeframes.daily.current} hrs`;
}

// zamiana na daily (usunięto await na fetch bo za długo)

async function getDailyData() {
    workHours.innerHTML = `${data[0].timeframes.daily.current} hrs`;
    playHours.innerHTML = `${data[1].timeframes.daily.current} hrs`;
    studyHours.innerHTML = `${data[2].timeframes.daily.current} hrs`;
    exerciseHours.innerHTML = `${data[3].timeframes.daily.current} hrs`;
    socialHours.innerHTML = `${data[4].timeframes.daily.current} hrs`;
    selfCareHours.innerHTML = `${data[5].timeframes.daily.current} hrs`;
}

// Podmiana godzin na te weekly


async function getWeeklyData() {
    workHours.innerHTML = `${data[0].timeframes.weekly.current} hrs`;
    playHours.innerHTML = `${data[1].timeframes.weekly.current} hrs`;
    studyHours.innerHTML = `${data[2].timeframes.weekly.current} hrs`;
    exerciseHours.innerHTML = `${data[3].timeframes.weekly.current} hrs`;
    socialHours.innerHTML = `${data[4].timeframes.weekly.current} hrs`;
    selfCareHours.innerHTML = `${data[5].timeframes.weekly.current} hrs`;
}

// guziczki

const dailyButton = document.querySelector("#daily-button");
const weeklyButton = document.querySelector("#weekly-button");

fetchData()

dailyButton.addEventListener("click", getDailyData)
weeklyButton.addEventListener("click", getWeeklyData)