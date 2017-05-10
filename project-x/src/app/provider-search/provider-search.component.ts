import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import {MdAutocompleteModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { ProviderBO } from '../business-objects/provider-bo';
import { ProviderService } from '../service/provider.service';

@Component({
    moduleId: module.id,
    selector: 'provider-search',
    templateUrl: './provider-search.component.html',
    styleUrls: ['./provider-search.component.css']
})
export class ProviderSearchComponent implements OnInit {


    title: string = 'Augmented Reality';
    lat: number = -35.420607;
    lng: number = 149.065887;
    zoom: number = 14;

    currentMarker:any = null;
    selectedProvider:ProviderBO = null;

    providers:ProviderBO[] = [];

    providerDetailsVisible = false;

    streetViewEnabled:boolean = false;

    providerIcon: string = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

    map:any = null;
    streetView:any = null;

    searchControl: FormControl;    
    filteredProviders: Observable<ProviderBO[]>;
    deviceMobile = false;  

    markers = [];  
    markersSt = [];
    flightPaths = [];
    enableBenefits = false;
    benefitDetailsTime = false;
    
    profile = {};
    // profile = {
    //  singleSelect: null
    // }
    

 
    constructor(private providerService: ProviderService, private ref: ChangeDetectorRef) {
        this.searchControl = new FormControl();
        //imp - AGNI
        this.displayFn = this.displayFn.bind(this);
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onInfoClosed = this.onInfoClosed.bind(this);

        this.filteredProviders = this.searchControl.valueChanges
         .startWith(null)
         .map(provider => provider && typeof provider === 'object' ? provider.name : provider)
         .map(name => name ? this.filter(name) : this.providers.slice());
    }

    selectedItemChange(item) {
        console.log(item);
    }
    ngOnInit() {

        
        this.providerService.getProviders().then(providers => {
            this.providers = providers;
            this.providers.sort(function(a, b) {
                return b.name < a.name ?  1
                 : b.name > a.name ? -1
                 : 0;
            });
        });

        if(window.navigator.geolocation) {

            window.navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
            
        }
    
        if(this.providerDetailsVisible || this.streetViewEnabled == true){

        var legendHide = document.getElementById('legend').classList.add('legendHide');

        }
    if(this.zoom < 6){//!this.providerDetailsVisible){
        var legendFade = document.getElementById('legend').classList.add('fade');
    }

    
        var iconBase = '/assets/';
        var icons = {
          Physio: {
            name: 'Physio',
            icon: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-P-icon.png' //iconBase + 'ActiPhysio1.png'
          },
          WheelChairs: {
            name: 'WheelChairs',
            icon: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-W-icon.png' //iconBase + 'SteelWheel1.png'
          },
          Neuro: {
            name: 'Neuro',
            icon: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-N-icon.png' //iconBase + 'NeuroSpace1.png'
          },
          Handy: {
            name: 'Handy',
            icon: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-H-icon.png' //iconBase + 'HandyWorks1.png'
          },
          Eye: {
            name: 'EyeCare',
            icon: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-E-icon.png' //iconBase + 'HandyWorks1.png'
          }

        };
        // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        // var icons = {
        //   WheelChairs: {
        //     name: 'WheelChairs',
        //     icon: 'http://icons.iconarchive.com/icons/banzaitokyo/medico/32/wheelchair-icon.png' //iconBase + 'parking_lot_maps.png'
        //   },
        //   Physio: {
        //     name: 'Physio',
        //     icon: iconBase + 'library_maps.png'
        //   },
        //   info: {
        //     name: 'Info',
        //     icon: iconBase + 'info-i_maps.png'
        //   }
        // };

        var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);
        }        

        
    }

    profileSelect(){
       console.log(this.profile,"asdjldropdown************");

    }
    saveSearch(key){
        debugger;
         console.log(key,"dropdown************");

    }

    filter(name: string): ProviderBO[] {
        //if(name == '') {return this.providers;}
        return this.providers.filter(provider => new RegExp(`${name}`, 'gi').test(provider.name)); 
    }

    displayFn(provider: ProviderBO): string {
          if (provider) {              

            this.zoomIn(provider.lat, provider.lng);
        }
        return provider ? provider.name : "";

    }

    zoomIn(lat, lng) {
        // let e = new MouseEvent('click', {
        //     'view': window,
        //     'bubbles': true,
        //     'cancelable': true
        // });

        this.setProviderInContext(lat, lng);
        this.zoom = 20;
        //this.ref.markForCheck();
        this.ref.detectChanges();
        this.providerDetailsVisible = true;
       if(this.streetViewEnabled){
        // SEARCH function when Street view is ON
        this.map.setCenter(this.currentMarker.getPosition())
        this.streetView.setPosition(this.map.getCenter());
        }
        //this.switchToStreetView(e);        
    }

    onMapReady(map) {

        this.map = map;
        //agni
        // this.map.setOptions(function(myOptions){
        // return myOptions = {
        //     zoom: 17,
        //     center: new google.maps.LatLng(12.972442, 77.580643),
        //     mapTypeId: google.maps.MapTypeId.HYBRID,
        //     mapTypeControlOptions: {
        //         mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID,
        //         google.maps.MapTypeId.SATELLITE]
        //     }
        // };
        // });
    
        this.streetView = this.map.getStreetView();

        //var sv = new google.maps.StreetViewService();
        //this.streetView = sv.getPanorama({location: this.map.getCenter(), source: google.maps.StreetViewSource.OUTDOOR}, this.processSVData);

        this.streetView.addListener('visible_changed', this.onVisibleChanged.bind(this));
        this.streetView.addListener('position_changed', this.onPositionChanged.bind(this));
        this.streetView.addListener('pano_changed', this.onPositionChanged.bind(this));
        this.streetView.addListener('pov_changed', this.onPositionChanged.bind(this));
    }
    onMapIdle(event) {
        console.log('onMapIdle', event);
            if(!this.providerDetailsVisible || this.zoom == 14){
        var legendHide = document.getElementById('legend').classList.add('fade');
    }
    }

    onMarkerInit(marker, providerID) {

        console.log('marker Init', marker, providerID);

        marker.providerID = providerID;
        marker.setLabel("");

        var provider = this.providers.find(provider => provider.id == providerID)
        var icon = {
            scaledSize: new google.maps.Size(40, 20), 
            url: provider.image
        };
        //seperate Street and Map Icons
        var iconSt = {
            scaledSize: new google.maps.Size(40, 20), 
            url: provider.imageSt
        };


            marker.setIcon(icon);

        
    }

onMarkerInit_street(marker, providerID) {

        console.log('marker Init', marker, providerID);

        marker.providerID = providerID;
        marker.setLabel("");

        var provider = this.providers.find(provider => provider.id == providerID)

        //seperate Street and Map Icons
        var iconSt = {
            scaledSize: new google.maps.Size(40, 20), 
            url: provider.imageSt
        };

            marker.setIcon(iconSt);
        
    }



// onMarkerInit_ben(marker, providerID) {

//         console.log('marker Init', marker, providerID);

//         marker.providerID = providerID;
//         marker.setLabel(providerID);
//         var provider = this.providers.find(provider => provider.id == providerID)
//         marker.setPosition(provider.lat1, provider.lng1)

        
//         // var icon = {
//         //     scaledSize: new google.maps.Size(40, 20), 
//         //     url: provider.image
//         // };
//         // marker.setIcon(icon);
//     }

    onClickDummy(event, element) {
        // Required for update of view
        console.log('onClickDummy', event, element);
        if(!this.providerDetailsVisible || this.zoom == 14){
        var legendHide = document.getElementById('legend').classList.add('fade');
    }
        var but = document.getElementById('PDetails');
        if (but) {
            // but.addEventListener("click", function () {
            //     console.log("button clicked**********");
            //     this.benefitDetailsTime
            // });
            but.addEventListener("click", this.onButtonClicked, false);
        }
        
        var Info = document.getElementById('infoWindow');
        if(Info){
            console.log("ihfnksnvijefiasm*********kasjdl");
            google.maps.event.addListener(Info, 'closeclick', this.onInfoClosed);
        }
    }

    onButtonClicked(){
        console.log("928483248038403204****************");
        this.benefitDetailsTime = true;
    }
    onInfoClosed(){
        console.log("ihfnksnvijefiasm*********");

    }

    onMapClick(event) {
        this.enableBenefits = true;

        //this.positions.push(event.latLng);
        console.log('onMapClick', event);
        //console.log(event.latLng.lat(), event.latLng.lng(), "lat and lng of clicked place******************");
        this.setProviderInContext(event.latLng.lat(), event.latLng.lng());
        this.providerDetailsVisible = true;
        //this.benefitDetailsTime = true;
        // var clickpoint = {
        //     lat: event.latLng.lat(),
        //     lng: event.latLng.lng()
        // }
        this.calcRoute(event.latLng.lat(), event.latLng.lng());
         console.log(this.selectedProvider, this.providerDetailsVisible,"**** outside checking street view");
        if (!this.streetViewEnabled) {
            
            setTimeout(() => {
                var PanelHide = document.getElementById('panel');
                if(PanelHide){
                    PanelHide.classList.add('fade');
                };
            }, 4000);
            setTimeout(() => {
                //hide Panel
                this.benefitDetailsTime = false;
                
            },8000);
        }
        
    }
    calcRoute(clickLat, clicklng){
        console.log( "details of latlng********", clickLat, clicklng, this.selectedProvider.lat, this.selectedProvider.lng);
        //if(!this.selectedProvider.lat && !this.selectedProvider.lng){
            this.fromMapClicked(clickLat, clicklng);
        // }else{
//             if(navigator.geolocation){

            
            
//             var location_timeout = setTimeout(10000);
//             console.log(window.navigator.geolocation, "before Windows details****************");
//             navigator.geolocation.getCurrentPosition(function(position) {
//                 clearTimeout(location_timeout);
//                 console.log(position.coords.latitude, position.coords.longitude, "Windows details****************");
//                 this.fromCurrentLoc(position.coords.latitude, position.coords.longitude);
//         },function(error) {
//                                  console.log("windows error********", error);
// //					 });
       
//     });
//     }

//var marker_ben = [];
//var marker = [];
this.setMarkersBenefit(google.maps.Animation.DROP, this.markers);

        // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // var labelIndex = 0;
        // for (var i = 1; i < 5; i++) {

        //     var marker_ben = new google.maps.Marker({
        //         //map: this.map,
        //         position: new google.maps.LatLng(this.selectedProvider.lat - (i / 1000), this.selectedProvider.lng + (i / 1000)),
        //         title: "Benefits:" + i,
        //         label: labels[labelIndex++ % labels.length]
        //     });
        //     marker_ben.setAnimation(google.maps.Animation.DROP);
        //     this.markers.push(marker_ben);

        //     console.log(i, "**** counter");
        // }

        // for (var i = 0; i < this.markers.length; i++) {
        //     //this.markersSt[i].setMap(null);
        //     this.markers[i].setMap(this.map);
        // }



    }

    setMarkersBenefit(animation, markersGen) {
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var labelIndex = 0;
        for (var i = 1; i < 5; i++) {

            var marker_ben = new google.maps.Marker({
                //map: this.map,
                position: new google.maps.LatLng(this.selectedProvider.lat - (i / 1000), this.selectedProvider.lng + (i / 1000)),
                title: "Benefits:" + i,
                label: labels[labelIndex++ % labels.length]
            });
            marker_ben.setAnimation(animation);
            markersGen.push(marker_ben);

            console.log(i, "**** counter");
        }

        for (var i = 0; i < markersGen.length; i++) {
            //this.markersSt[i].setMap(null);
            markersGen[i].setMap(this.map);
            //markersGen[i].setVisible(this.enableBenefits);
        }
    }
     
     fromMapClicked(clickLat, clicklng){
         console.log("inside frommapclicked");
         var fromLat = clickLat;
         var fromLng = clicklng;
         var toLat   = this.selectedProvider.lat;
         var toLng   = this.selectedProvider.lng;

        //  var benefits = [
        //      { lat: this.selectedProvider.benefits[0].lat, lng: this.selectedProvider.benefits[0].lng },
        //      { lat: this.selectedProvider.benefits[1].lat, lng: this.selectedProvider.benefits[1].lng },
        //      { lat: this.selectedProvider.benefits[2].lat, lng: this.selectedProvider.benefits[2].lng },
        //      ];

         this.plotRoute(fromLat, fromLng, toLat, toLng,this.selectedProvider.lat1,this.selectedProvider.lng1,this.selectedProvider.lat2,this.selectedProvider.lng2);

     }   
     fromCurrentLoc(currLat, currLng){
         console.log("inside fromCurrentLoc");
         
         var fromLat = currLat;
         var fromLng = currLng;
         var toLat   = this.selectedProvider.lat;
         var toLng   = this.selectedProvider.lng;

        //  var benefits = [
        //      { lat: this.selectedProvider.benefits[0].lat, lng: this.selectedProvider.benefits[0].lng },
        //      { lat: this.selectedProvider.benefits[1].lat, lng: this.selectedProvider.benefits[1].lng },
        //      { lat: this.selectedProvider.benefits[2].lat, lng: this.selectedProvider.benefits[2].lng },
        //      ];

        //  this.plotRoute(fromLat, fromLng, toLat, toLng);
     }
     plotRoute(fromLat, fromLng, toLat, toLng, benlat1, benlng1, benlat2, benlng2) {
         var lat1 = -35.421607;
	var lng1 = 149.065887;
	var lat2 = -35.422607;
	var lng2 = 149.066887;
         var flightPlanCoordinates = [
             { lat: fromLat, lng: fromLng },
             { lat: toLat, lng: toLng }
             //{ lat: lat1, lng:lng2 },
             //{ lat: lat2, lng: lng2 }
            //{ lat: benlat1, lng: benlat1 }
            //  {lat:-35.421257,lng:149.065867},
            //  {lat:-35.423300,lng:149.069880}

         ];
         var flightPath = new google.maps.Polyline({
             path: flightPlanCoordinates,
             geodesic: true,
             strokeColor: '#131540',
             strokeOpacity: 0.6,
             strokeWeight: 6
         });

         this.flightPaths.push(flightPath);

          for ( var i = 0; i < this.flightPaths.length; i++) {
         this.flightPaths[i].setMap(this.map);
          };
                  //flightPath.setMap(null);
         //flightPath.setPath(flightPlanCoordinates);
         //flightPath.setMap(this.map);
        //  setTimeout(2000);
        //  flightPath.setMap(null);
         
     }


// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("lastname", "Smith");
//     // Retrieve
//     document.getElementById("result").innerHTML = localStorage.getItem("lastname");
// } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }

    markerClicked(event, providerID) {

        console.log(this.map, "***** map object");

        console.log('clicked', event);

        this.selectedProvider = this.providers.find(provider => provider.id == providerID);

// important - Agni
        this.zoomIn(this.selectedProvider.lat, this.selectedProvider.lng);
        
        console.log('**************selectedProvider', this.selectedProvider);



        //(<HTMLElement>Input).valueOf = provider.name;
        //console.log("**** input", Input.nodeValue);
        //Input.setAttribute = this.selectedProvider.name;

        var marker = event.target;

        marker.nguiMapComponent.openInfoWindow('infoWindow', marker, {
            lat: marker.getPosition().lat(),
            lng: marker.getPosition().lng(),
            name: this.selectedProvider.name,
            desc: this.selectedProvider.desc,
            // function(){
            //     var content = "Click for further Details";
            //     return content;
            // }

        });
        

        


        

       

        this.providerDetailsVisible = true;
        //this.benefitDetailsTime = true;
        //this.benefitDetailsTime = true;

        if (this.providerDetailsVisible && this.selectedProvider) {
            setTimeout(() => {
                var PanelHide = document.getElementById('panel');
                if(PanelHide){
                    PanelHide.classList.add('fade');
                }
            }, 3000);
            setTimeout(() => {
                //hide Panel
                this.benefitDetailsTime = false;
                
            },8000);
        }



    }


         openProvider(){
         console.log("testing info window ************");
     }

    closeProviderDetails() {    
        //this.flightPath.setMap(null);
       if (!this.streetViewEnabled) {
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
                //this.markersSt[i].setMap(null);
            };
            this.markers = [];
            //this.markersSt = [];
            for (var i = 0; i < this.flightPaths.length; i++) {
                this.flightPaths[i].setMap(null);
            };

            //this.markers = [];
            this.flightPaths = [];
       }

    console.log(this.streetViewEnabled, "street view value *************");

        this.providerDetailsVisible = false;
        // close 
        this.benefitDetailsTime = false;
        this.ref.detectChanges();
    }

    private processSVData(data, status) {
    }

    switchToStreetView(event) {
        debugger;
        //this.map.getStreetView().setVisible(true);
        this.streetView.setVisible(true);
        this.streetViewEnabled = true; 

        var legendHide = document.getElementById('legend').setAttribute("hidden","this.streetViewEnabled");

//Agni - create diff markers for Street
        // this.map.markers.forEach((marker, index)=>{

        //     var provider = this.providers.find(provider => provider.id == marker.providerID)
        //     var icon = {
        //         scaledSize: new google.maps.Size(100, 50), 
        //         url: provider.image
        //     };
        //     marker.setIcon(icon);
        //     marker.setLabel("");
        //     console.log(event, "####### street view EVENTS")
        // });

        // recreate Markers for the nearest Providers
       for ( var i = 0; i < this.markersSt.length; i++) {
          
          this.markers[i].setMap(null);
          //this.markersSt[i].setMap(this.map);
        }
        this.markers = [];
        this.setMarkersBenefit(google.maps.Animation.BOUNCE,  this.markersSt);

        // var icon_ben = {
        //     scaledSize: new google.maps.Size(80, 80),
        //     url: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFFF00"
        // };

        // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // var labelIndex = 0;
        // for (var i = 1; i < 5; i++) {

        //     var marker_ben = new google.maps.Marker({
        //         //map: this.map,
        //         position: new google.maps.LatLng(this.selectedProvider.lat - (i / 1000), this.selectedProvider.lng + (i / 1000)),
        //         title: "Benefits:" + i,
        //         label: labels[labelIndex++ % labels.length]
        //     });
        //     marker_ben.setAnimation(google.maps.Animation.BOUNCE);
        //     marker_ben.setIcon(icon_ben);
        //     //marker_ben.setMap(this.map);
        //     this.markersSt.push(marker_ben);

        // }

        

        // for ( var i = 0; i < this.markersSt.length; i++) {
          
        //   this.markers[i].setMap(null);
        //   this.markersSt[i].setMap(this.map);
        // }
        // this.markers = [];

        this.ref.detectChanges(); // agni testing
            
        // for (var i = 0; i < this.markers.length; i++) {
        //     //this.markersSt = Object.assign(this.markers);
        //     this.markersSt[i] = Object.assign(this.markers[i]);
        //     this.markersSt[i].setIcon(icon_ben);        
        //     this.markersSt[i].setAnimation(google.maps.Animation.BOUNCE);
        //     this.markersSt[i].setMap(this.map);
        // }
        console.log(this.markersSt, this.markers,this.selectedProvider, "MARKERS *****");
            

        //  for ( var i = 0; i < this.markersSt.length; i++) {
        //   this.markersSt[i].setIcon(icon_ben);        
        //   this.markersSt[i].setAnimation(google.maps.Animation.BOUNCE);
        //   this.markersSt[i].setMap(this.map);
        //   console.log(this.markersSt[i], "ICONS *****");
        // }
    }

    switchToMapView(event) {
        debugger;

        for (var i = 0; i < this.markersSt.length; i++) {
            //this.markers[i].setMap(this.map);
            this.markersSt[i].setMap(null);
            //this.markersSt[i].setMap(null);
        }
        this.markersSt = [];
        this.setMarkersBenefit(google.maps.Animation.DROP,  this.markers);

        this.ref.detectChanges(); // agni testing
        this.streetView.setVisible(false);
        this.streetViewEnabled = false; 
        //make legend appear again
        var legendHide = document.getElementById('legend').removeAttribute("hidden");

        // this.map.markers.forEach((marker, index)=>{
        //     //marker.setIcon(null);

        //     var provider = this.providers.find(provider => provider.id == marker.providerID)
        //     marker.setLabel("");

        //     console.log("####### Removing marker image")
        // });
    }

    /****** Map events *******/

    onVisibleChanged(this) {
        //Set the street view position to the nearest marker
        this.setProviderInContext(this.map.getCenter().lat(), this.map.getCenter().lng());
        this.map.setCenter(this.currentMarker.getPosition())
        this.streetView.setPosition(this.map.getCenter());
    }

    onPositionChanged(this) {

        console.log('onPositionChanged', this);
        if(!this.streetView || !this.streetView.getPosition()) {
            return;
        }
        var lat = this.streetView.getPosition().lat();
        var lng = this.streetView.getPosition().lng();
        this.setProviderInContext(lat, lng);

        //this.ref.markForCheck();
        this.ref.detectChanges();

        this.providerDetailsVisible = true;
    }

    onPanoChanged(event) {console.log('onPanoChanged', event);}
    onPOVChanged(event) {console.log('onPOVChanged', event);}
    onStreetViewIdle(event) {console.log('onStreetViewIdle', event);}

    /****** Private *********/

    private rad(x) {return x*Math.PI/180;}

    private getClosestProviderMarker(lat: number, lng: number) {
        var R = 6371; // radius of earth in km
        var distances = [];
        var closest = -1;
        this.map.markers.forEach((marker, index)=>{
            var mlat = marker.position.lat();
            var mlng = marker.position.lng();
            var dLat  = this.rad(mlat - lat);
            var dLong = this.rad(mlng - lng);
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(this.rad(lat)) * Math.cos(this.rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            distances[index] = d;
            if ( closest == -1 || d < distances[closest] ) {
                //console.log("closest marker", index);
                closest = index;
            }
        });

        var closestMarker = this.map.markers[closest];
        console.log("closest marker label :", closestMarker.label);

        return closestMarker;
    }

    private setProviderInContext(lat, lng) {

        console.log("map markers length", this.map.markers.length);
        if(this.map.markers.length == 0) {
            return;
        }

        // Find closest marker
        var closestMarker = this.getClosestProviderMarker(lat, lng);
        console.log("*************closest marker", closestMarker.providerID);

        if(this.currentMarker) { /* Required to stop the animation in case the user clicks another location within 5 secs */
            this.currentMarker.setAnimation(null);
        }
        this.currentMarker = closestMarker;
        this.currentMarker.setAnimation(google.maps.Animation.BOUNCE);
        
// Important - Agni
        this.lat = closestMarker.position.lat();
        this.lng = closestMarker.position.lng();
        
        setTimeout(() => {
          this.currentMarker.setAnimation(null);
        }, 1000);

        this.selectedProvider = this.providers.find(provider => provider.id == closestMarker.providerID);
        console.log('selectedProvider', this.selectedProvider);

    }
}

