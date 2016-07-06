//initial list of locations for coffee shops
var map;
var model = {


locations: [
	{
	name: "Blue Bottle Broadway",
	address: "4270 Broadway, Oakland, CA 94611",
	description: "Trendy cafe chain offering upscale coffee drinks & pastries, plus beans & brewing equipment.",
	generalLoc : "Blue Bottle Broadway",
	loc: {lat: 37.831084, lng: -122.254106}

},
{
	name: "Blue Bottle Webster",
	address: "300 Webster St, Oakland, CA 94607",
	description: "Trendy cafe chain offering upscale coffee drinks & pastries, plus beans & brewing equipment.",
	generalLoc : "Blue Bottle Webster",
	loc: {lat: 37.795802, lng: -122.273161}
},
{
	name: "Black Spring Coffee Company",
	address: "2930 Telegraph Ave, Oakland, CA 94609",
	description: "A cafe with nice atmosphere, mixed crowd, great espresso and pastries.",
	generalLoc : "Black Spring Coffe Company",
    loc: {lat: 37.818757, lng: -122.266981}
},
{
	name: "Cafe 4",
	address: "20600 John Dr, Castro Valley, CA 94546",
	description: "Located on a hill, in a church, overlooking the quaint little town of Castro Valley, sits Cafe 4 - the most amazing cafe you may ever go to!",
	generalLoc : "Cafe 4 Coffee",
    loc: {lat: 37.692593, lng: -122.093918}
},
{
	name: "Zocalo Coffeehouse",
	address: "645 Bancroft Ave, San Leandro, CA 94577",
	description: "Cheery cafe serving breakfast fare, salads & sandwiches, plus coffee, craft beer & wine.",
	generalLoc : "Zocalo Coffeehouse",
    loc: {lat:  37.733234, lng: -122.150708}
},
]
};



 //starting ViewModel

 var ViewModel = function() {
 	var self = this;
 	self.displayMarkers = defaultMarkers();
 	self.locations = ko.observableArray(locationList());

 };

 function defaultMarkers(locations){
		var i = 0;
			//console.log(Object.keys(model));
		Object.keys(model).forEach(function(key) {
		var length = model[key].length;
		for(i=0; i<length; i++){
			//console.log(model[key][i].loc);
			var marker = new google.maps.Marker({
		    position: model[key][i].loc,
		    animation:google.maps.Animation.DROP,
		    map: map
			});
			marker.setMap(map);
			marker.addListener('click', toggleBounce);

		}
	});
	}

var toggleBounce =function(marker) {
     if (marker.getAnimation() !== null) {
         marker.setAnimation(null);
     } else {
         marker.setAnimation(google.maps.Animation.BOUNCE);
         setTimeout(function() {
             marker.setAnimation(null);
         }, 1250);
     }
 };
 toggleBounce()


function locationList(){
 	var i = 0;
 	var locations = [];
		Object.keys(model).forEach(function(key) {
			var length = model[key].length;
			for(i=0; i<length; i++){
				eachLocation = model[key][i].name;
				locations.push(eachLocation);
			}
	});
	return locations;
}

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.771799, lng: -122.176620},
          zoom: 11
        });

        ko.applyBindings (new ViewModel());
      }
      //37.771799, -122.176620