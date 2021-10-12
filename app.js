window.addEventListener('load', ()=> {
    let long; 
    let lat; 
    if(navigator.geolocation){
        return navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const api = `api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}${lat},${long}`;
            fetch(api)
            .then(response =>{
               return response.json()
            })
           .then(data => {
               console.log(data)
           })
        });
  
    }
})