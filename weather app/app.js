navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=####`
  )
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      document.getElementById(
        "content"
      ).innerHTML = `Current Temperature<br> ${users.main.temp} °C <br> ${users.name}`;
      console.log(users);
    });
}, error);

function error(err) {
  console.log("not working");
}
