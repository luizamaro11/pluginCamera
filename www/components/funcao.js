// This is a JavaScript file

function camera1(){
      navigator.camera.getPicture(onSuccess, onFail, {
      quality: 70,
      destinationType: Camera.DestinationType.DATA_URL});
      saveToPhotoAlbum: true;
      
      function onSuccess(ImageData) {
          var image = document.getElementById('imagem');
          image.src = "data:image/jpeg;base64," + ImageData;
      }
      function onFail(message) {
          alert('Failed because: ' + message);
      }
}

