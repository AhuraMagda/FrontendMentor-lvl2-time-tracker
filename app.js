

const url = './data.json'

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    console.log(data.)
}

getData()