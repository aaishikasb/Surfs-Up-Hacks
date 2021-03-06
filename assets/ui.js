// Update

class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "London";
    }
  
    populateUI(data) {
      //de-structure vars
  
      //add them to inner HTML
  
      this.uiContainer.innerHTML = `
  
  
          <div class="card text-dark bg-light border-dark mb-3" style="max-width: 60em;">
              <div class="row g-0">
                  <div class="col-md-4 text-center my-auto">
                      <img class="mx-auto d-block" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">${data.name}, ${data.sys.country}</h5>
                          <p class="card-text">Weather: ${data.weather[0].main}<br>
                          Temperature: ${data.main.temp} °C<br>
                          Feels Like: ${data.main.feels_like} °C<br>
                          Humidity: ${data.main.humidity}%<br>
                          Wind Speed: ${data.wind.speed} Knots</p>
                      </div>
                  </div>
              </div>
          </div>
  
  
            `;
    }
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    clearLS() {
      localStorage.clear();
    }
  }