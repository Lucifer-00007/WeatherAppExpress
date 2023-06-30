const appID = '7e45cc279f5780f859a01df53977590d';
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = 'Enter City Name!';
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${appID}`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]
            console.log(arrData)

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Sunny") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rainy") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');

        } catch (err) {
            city_name.innerText = 'Enter Proper City Name!'
            datahide.classList.add('data_hide');
            console.log(err)
        }
    }

}

submitBtn.addEventListener('click', getInfo);