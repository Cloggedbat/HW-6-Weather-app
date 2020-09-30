
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
      // start('lima')
      // start("burlington")
      // start('radnor')
      // // cityName = $("")
      // console.log("#add-city")
      
      let city3 = $("#search").val()
      start(city3)
    })
    
    
    
    // // // Convert the temp to fahrenheit
    function toFahrenheit(kelvin){
      
      return ((kelvin - 273.15) * 1.80 + 32).toFixed(0)
      
    }
    // appid={appid}&lat={lat}&lon={lon}











      // function wawa(thiswillsave, funbox, keyName) {
//   $(thiswillsave).on("click", function () {
//       // get text from wawa 
//       var textarea = $(funbox).val();
//       // text area is saved in local storage
//       localStorage.setItem(keyName, textarea)
//   })
//   // lets turn this data into a btn
//   var save = localStorage.getItem(keyName)
//   $(funbox).val(save);

// var storedValue = localStorage.getItem(keyName);
//   if(storedValue){

//   document.getElementById("yourcity").value;

//   }
//   var storedButton = localStorage.getItem("button");
//   if(storedButton){

//   // document.getElementsByClass("blauw").value = storedButton;

//   }
// }// wawa is pulling text/saveBtn activates/user-... is targeted for data... insertion
// wawa("#add-city", ".form-control", "data1")
// wawa("#add-city", ".form-control", "data2")
// wawa("#add-city", ".form-control", "data3")
// wawa("#add-city", ".form-control", "data4")
// wawa("#add-city", ".form-control", "data5")
// wawa("#add-city", ".form-control", "data6")
















// let citys = ["Salt lake city"];

// function renderButtons() {

//   // Deleting the movie buttons prior to adding new movie buttons
//   // (this is necessary otherwise we will have repeat buttons)
//   $("#yourcity").empty();

//   // Looping through the array of movies
//   for (var i = 0; i < citys.length; i++) {

//     // Then dynamicaly generating buttons for each movie in the array.
//     // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
//     var a = $("<button>");
//     // Adding a class
//     a.addClass("city");
//     // Adding a data-attribute with a value of the movie at index i
//     a.attr("data-name", citys[i]);
//     // Providing the button's text with a value of the movie at index i
//     a.text(citys[i]);
//     // Adding the button to the HTML
//     $("#yourcity").append(a);
//   }
// }

// // This function handles events where one button is clicked
// $("#add-city").on("click", function(event) {
//   // event.preventDefault() prevents the form from trying to submit itself.
//   // We're using a form so that the user can hit enter instead of clicking the button if they want
//   event.preventDefault();

//   // This line will grab the text from the input box
//   let newcity = $("#search").val().trim();
//   // The movie from the textbox is then added to our array
//   citys.push(newcity);

//   // calling renderButtons which handles the processing of our movie array
//   renderButtons();
// });

// // Calling the renderButtons function at least once to display the initial list of movies
// renderButtons();








