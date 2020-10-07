
// var textareas = $(".form-control")
// text.addEventListener("submit", e => {
//   e.preventDefault();
// });



// let city = [];

var APIKey = "526a2060086048bc6956fbed29dbfe3d";

//  building the URL we need to query the database

let onecall = ""
let currentlat;
let currentlong;



//AJAX call to the  API
function start(city) {

  // let zipCode = ;

  // let queryURL = "https://api.openweathermap.org/data/2.5/weather?=" + zipCode + "&appid=" + APIKey;
  // var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  // "q=Bujumbura,Burundi&appid=" + APIKey;

  console.log(city)

  $.ajax(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`
  
    // old api call replaced with the above api call
    // "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey
  )
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {


      // // Log the resulting object
      console.log(response);

     
      
      
      
      var fahrenheit = toFahrenheit(response.list[0].main.feels_like) ;
      
      // console.log()
      
      // console.log(currentlat)
      // console.log(currentlong)
      
      // add temp content to html
      function fiveday(dayweather, listhour){
        let weatherbox = response.list[listhour]
        
        // $(".dayweather" + dayweather).text("5 day forcast: " + toFahrenheit(weather.main.feels_like))
        // $(".dayweather" + dayweather).text("5 day forcast: " (weather.main.wind.))
        
        $(".dayweather" + dayweather).html(`
        
        <p class"text-center"> ${weatherbox.weather[0].description}</p>
        
        <p>Temperature: ${toFahrenheit(weatherbox.main.feels_like)} Degrees Fahrenheit</p>
        
        <p>Wind speed: ${weatherbox.wind.speed} Mph</p>
        
        `)
        
        $("#ws").text("Wind Speed: " + weatherbox.wind.speed);        
        $("#hum").text("Humidity: " + weatherbox.main.humidity);
        $("#city1").text(response.city.name);
        $("#temp").text("Temperature: " + toFahrenheit(weatherbox.main.feels_like))
        
      }
      fiveday(1, 4)
      fiveday(2, 12)
      fiveday(3, 20)
      fiveday(4, 28)
      fiveday(5, 36)
      
      let currentlat = response.city.coord.lat;
      let currentlong = response.city.coord.lon;
      $.ajax(
        "http://api.openweathermap.org/data/2.5/uvi?&lat=" + currentlat + "&appid=" + APIKey +"&lon=" + currentlong
        )
        .then(function (response) {
          console.log(response)
          $("#uv").text("UV index: " + response.value);
        })
        
      });
    }
      
      
    
    
    // // Log the data in the console as well
    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (F): " + fahrenheit);  
    
    
    
    
    
    
    
    $("#add-city").on("click", function (event) {
      event.preventDefault();
    
      
      let city3 = $("#search").val()
      start(city3)
    })
    
    
    
    // // // Convert the temp to fahrenheit
    function toFahrenheit(kelvin){
      
      return ((kelvin - 273.15) * 1.80 + 32).toFixed(0)
      
    }













