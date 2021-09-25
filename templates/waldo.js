function initialize() {
    const random_loc = { lat: Math.random()*180-180, lng: Math.random()*360-180};
    const map = new google.maps.Map(document.getElementById("map"), {
      center: random_loc,
      zoom: 14,
    });
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: random_loc,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );
  
    map.setStreetView(panorama);
}
google.maps.event.addDomListener(window, 'load', initialize);