


const workDailyHours = document.querySelector('#work-hours')


// pobranie danych z innego pliku

const url = './data.json'

let workDataDaily;

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    workDataDaily = data[0].timeframes.daily.current
}


// Podmiana godzin na te daily

async function changeInnerData() {
    await getData()
    console.log(workDataDaily)
    workDailyHours.innerHTML = workDataDaily;
}

changeInnerData()