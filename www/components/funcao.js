// This is a JavaScript file

$(document).on('click', '#camera', function(){
    navigator.vibrate(3000);
    navigator.camera.getPicture(onSuccess, onFail, {
    quality: 100,
    destinationType: Camera.DestinationType.DATA_URL
    });
    saveToPhotoAlbum: true;
      
    function onSuccess(ImageData) {
        var image = document.getElementById('imagem');
        image.src = "data:image/png;base64," + ImageData;
    }
      
    function onFail(message) {
        alert('Failed because: ' + message);
    }

    // função do mapa
    function map(position){
        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

          var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
          });
          L.marker([position.coords.latitude, position.coords.longitude], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup('Mongaguá, SP').addTo(map); 
          L.circle([position.coords.latitude, position.coords.longitude], { radius: 200 }).addTo(map);

          map.addControl(L.mapquest.control());
          $("#map").show();        
          document.getElementById('long').value = position.coords.longitude;
          document.getElementById('lat').value = position.coords.latitude;
    };
    navigator.geolocation.getCurrentPosition(map);
});
