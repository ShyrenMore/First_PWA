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

- specify about our app like short_name, name, 
- object keys have to be enclosed inside double quotes 