// Fetch

class Fetch {
  async getCurrent(input) {
    const myKey = "9f20313bbced6388c7df52bfde1e65ed";

    //make request to url

    const response = await fetch(
      `https://pro.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}