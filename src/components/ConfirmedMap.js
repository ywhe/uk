import React from 'react'
import Map from './Map'
export default class ConfirmedMap extends React.Component{
  lastWindow=null;
  AddMarks(map){
    let hPosition = { lat: 51.5499133, lng: -0.1985144 };
    let wPosition = { lat: 51.521248, lng: -0.102103 };
    new window.google.maps.Marker(
      {
          map: map,
          draggable: false,
          animation: window.google.maps.Animation.DROP,
          position: hPosition,
          icon:'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow_v3-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v3-2-medium.png,assets/icons/poi/tactile/pinlet_v3-2-medium.png,assets/icons/poi/quantum/pinlet/constellation_star_pinlet-2-medium.png&highlight=ff000000,ffffff,fbc02d,ffffff?scale=1',
      });
      new window.google.maps.Marker(
        {
            map: map,
            draggable: false,
            animation: window.google.maps.Animation.DROP,
            position: wPosition,
            icon:'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow_v3-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v3-2-medium.png,assets/icons/poi/tactile/pinlet_v3-2-medium.png,assets/icons/poi/quantum/pinlet/constellation_star_pinlet-2-medium.png&highlight=ff000000,ffffff,fbc02d,ffffff?scale=1',
        });
  }
  AddBoundary(map){
    map.data.loadGeoJson('https://raw.githubusercontent.com/ywhe/uk/master/England.json');
    map.data.setStyle({
        strokeWeight: 0.35,
        strokeColor: 'red',
        fillColor: 'red',
        fillOpacity:0
    });
  }
  AddRecords(map){
    let bounds = new window.google.maps.LatLngBounds();
    let records=this.props.records;
    if(!records){ records=[];}
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var laglng = new window.google.maps.LatLng(record.latitude, record.longitude);
        var title = record.Name + "  " + record.Count;
        bounds.extend(laglng);
        var color = this.GetColor(record.count);
        var icon = 'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow_v3-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v3-2-medium.png,assets/icons/poi/tactile/pinlet_v3-2-medium.png,assets/icons/poi/quantum/pinlet/medical_pinlet_v2-2-medium.png&highlight=ff000000,ffffff,' + color + ',ffffff?scale=1'
        var dMarker = new window.google.maps.Marker({
            map: map,
            position: laglng,
            title: title,
            icon: icon
        });
        this.AddInfoWindow(map,dMarker, record);
    }
  }
  AddInfoWindow(map,marker, record) {
      var content = "<div><h6>" + record.name + "</h6><br /><p>Confirmed:<b class='text-danger'>" + record.count + "</b></p><p>New:    <b class='text-danger'>" + record.newCount + "</b></p></div>"
      var infoWindow = new window.google.maps.InfoWindow({
          content: content
      });
      window.google.maps.event.addListener(marker, 'click', (function () {
          if (this.lastWindow != null) {
              this.lastWindow.close();
          }
          infoWindow.open(map, marker);
          this.lastWindow = infoWindow;
      }).bind(this));
  }
  GetColor(count) {
    var color = 'ffce99';
    if (count > 5) color = 'f88181';
    if (count > 10) color = 'ff8f00';
    if (count > 30) color = 'ff5b00';
    if (count > 50) color = 'ff0505';
    if (count > 80) color = 'f000ff';
    if (count > 100) color = '000000';
    return color;
  }

  render(){
    return (<Map onMapLoad={map=>{
      this.AddMarks(map);
      this.AddBoundary(map);
      this.AddRecords(map);
    }}></Map>);
  }
}