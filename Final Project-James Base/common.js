$(document).ready(function () {
    $("#submit").click(function () {
        //Api Call
        var city = $('.city').val();
        console.log(city);
        var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=2ae76972c67c8071f68a470e0b9c4386";
        console.log(uri);
        $.get(uri, onRes);
    });
});

function onRes(response) {
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    switch (response.weather[0].id) {
        case 801:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="few clouds.png" />');
            $(".sug").html('Ape-le Turnover');
            break;
        case 802:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="scattered clouds.png" />');
            $(".sug").html('Pug-kin Spice Latte');
        case 803:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="broken clouds.png" />');
            $(".sug").html('Pug-kin Spice Latte');
            break;
        case 804:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="broken clouds.png" />');
            $(".sug").html('Pug-kin Spice Latte');
            break;
        case 200:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 201:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 202:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 210:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 211:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 212:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 221:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 230:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 231:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 232:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="Thunderstormm.png" />');
            $(".sug").html('Cat-puccino');
            break;
        case 300:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 301:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 302:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 310:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 311:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 312:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="img/shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 313:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 314:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 321:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="shower rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 500:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 501:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 502:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 503:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 504:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 511:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 520:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 521:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 522:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 531:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="rain.png" />');
            $(".sug").html('Chai-huahua');
            break;
        case 600:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 601:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 602:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 611:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 612:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 615:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 616:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 620:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 621:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 622:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="snow.png" />');
            $(".sug").html('Octo-pie and Hot Croc-let')
            break;
        case 701:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 711:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 721:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 731:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 741:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;

        case 751:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 761:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 762:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 771:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 781:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="mist.png" />');
            $(".sug").html('Cinnamon Bun-ny');
            break;
        case 800:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append('<img id="theImg" src="clear sky.png" />');
            $(".sug").html('Tira-mice-su and Chai-huahua')
            break;
    }
    $(".city-name").html(response.name);
    $(".humidity").html(response.main.humidity);
}