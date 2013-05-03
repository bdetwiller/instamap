window.App = {

 	Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Helpers: {},
  Store: {},
  Settings: {
  	instaClientID: "c8f7973e4c2a40909deb8ac3c5c11843",
  	instaClientSecret: "c02752f7a0d54e32b510859841d67ac5",
    foursquareClientID: "BSWONLNWEECXYWQSXZVQPZQQ25EZJY31CKO5BX5P0GDE3WW1",
    foursquareClientSecret: "FLFSXFWZOVRWKS545FDS3LD4SPCSWIUSDX132OKMJATU2XL4" 
  },

  initialize: function (user) {

    this.installMap();
    markersArray = []

    if(user) {
     App.Settings.auth = user.token
    }

    new App.Routers.User();
    Backbone.history.start();
  },

  installMap: function () {
    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true,
      overviewMapControl: true
  	};

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        map.setCenter(initialLocation);
    });
    } else {
      alert("We couldn't locate you. Welcome to San Francisco");
      var initialLocation = new google.maps.LatLng(37.760, -122.418);
      map.setCenter(initialLocation);
    }

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  },

  
};
















