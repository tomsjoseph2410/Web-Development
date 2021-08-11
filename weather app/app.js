fetch(
  "http://api.weatherapi.com/v1/current.json?key=d8a58dc9218842469e653108210408&q=Taliparamba&aqi=no"
)
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    document.getElementById(
      "content"
    ).innerHTML = `${users.location.name} </br> ${users.current.feelslike_c} ° C`;
    console.log(users);
  });
