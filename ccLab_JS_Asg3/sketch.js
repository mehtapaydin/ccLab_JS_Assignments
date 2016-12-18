var weather;
var api = "http://api.openweathermap.org/data/2.5/weather?q=London,uk";
var city = 'New York';
var apiKey = '&APPID=2ddd8e385312c65d339c204b3cc87852';
var units = '&units=metric';
var input;


function setup() {
  createCanvas(windowWidth, windowHeight);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');

}


function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}


function draw() {
  background(0);
  if (weather) {
    var temp = weather.main.temp;
    var speed = weather.wind.speed;
    var humidity = weather.main.humidity;
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
    ellipse(300, 300, speed*3, speed*3);
  }
}