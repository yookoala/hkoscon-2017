!function(e){function o(t){if(n[t])return n[t].exports;var a=n[t]={exports:{},id:t,loaded:!1};return e[t].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var n={};return o.m=e,o.c=n,o.p="/2017/js/",o(0)}({0:function(e,o,n){e.exports=n(7)},7:function(e,o){"use strict";var n=document.getElementById("map");google.maps.event.addDomListener(window,"load",function(){var e=22.2595221,o=114.1318008,t=new google.maps.LatLng(e,o),a=new google.maps.Map(n,{zoom:17,center:t}),r=new google.maps.Marker({map:a,visible:!1,place:{location:{lat:e,lng:o},query:"Cyberport 3 Core E, Hong Kong"}}),i=new google.maps.InfoWindow({content:['<div id="map-infowindow">','<a class="address address-en" ','title="Open Cyberport 3 Core E with Google Map" ','href="https://www.google.com.hk/maps/place/Cyberport+3+Core+E,+Telegraph+Bay/" ','target="_blank">HKOSCon 2016 Venue</a>',"</div>"].join("")});i.open(a,r),setTimeout(function(){r.setVisible(!0),r.setAnimation(google.maps.Animation.DROP)},2e3)})}});
//# sourceMappingURL=venue.js.map