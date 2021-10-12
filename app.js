window.addEventListener('load', ()=> {
    let long; 
    let lat; 
    if(navigator.geolocation){
        return navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
        })
    }else{
        h1.textContent = 'Please enable geo locaiton'
    }
})