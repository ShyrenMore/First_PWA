## What is this thing?

- A simple progressive web application that shows you weather for any city
- Built using React.js and OpenWeatherAPI 

## How to install it on mobile?

- Open this website on your device: [https://pwa-reactjs-weather-app.netlify.app/](https://pwa-reactjs-weather-app.netlify.app/)

- click on ``` : ```, select ```Add to Home Screen```

<p align="center">
<img src="assets/add.jfif" width="480px" alt="add" title="add to home screen"/>
</p>

- click on ```Install```

<p align="center">
<img src="assets/option.jfif" width="480px" alt="Install" title="Install"/>
</p>


## Some PWA concepts

### Service worker

- Service worker is a JS file which runs all the time doesn't matter if anyone is using the page or not 
- This can be useful to send push notifications from mobile phone 
- You have to register a service worker in index.html by adding a script tag below root div

```
<script>
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("./serviceworker.js")
            .then((reg) => console.log("Success: ", reg.scope))
            .catch((err) => console.log("Failure: ", err));
        });
      }
</script>
```
- Inside serviceworker.js you need to write events for three diff things
    - install service worker
    - listen for requests
    - activate the service worker

- Visit the file [here](public/serviceworker.js)

### Dev tools

- In the ```Application tab```, you have access to dev ```manifest.json``` and ```service workers```
- Make sure you chcek the box for ```update on reload``` for testing purposes

### Manifest.json file

- specify about our app like short_name, name, theme_color for android app
- object keys have to be enclosed inside double quotes 