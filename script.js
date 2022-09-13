function initMap(){
    var options = {
        zoom:14,
        center:{lat:-23.566339,lng:-46.684735}
    }
    var map = new google.maps.Map(document.getElementById('map'),options);

addMarker({lat:-23.566339,lng:-46.684735});

function addMarker(coords){
    var marker = new google.maps.Marker({
        position:coords,
        map:map
    });
}
}