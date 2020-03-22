import React, { Component } from 'react';


class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }
  ref=React.createRef();
  searchRef=React.createRef();

  onScriptLoad() {
    const map = new window.google.maps.Map(
      this.ref.current,
      this.props.options);
      var input = this.searchRef.current;
      var searchBox = new window.google.maps.places.SearchBox(input);
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
      map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
      });

      searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();
          if (places.length === 0) {
              return;
          }
          var bounds = new window.google.maps.LatLngBounds();
          var place = places[0];
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
          map.fitBounds(bounds);
      });
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?libraries=places&key=AIzaSyA9cxRpEVUFHDVDa3DgZe5NLLe5OF__b38`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ width: '100%', height: '100%' }} ref={this.ref} ></div>
        <input type="text" placeholder="Search Box" ref={this.searchRef}/> 
      </div>
    );
  }
}
Map.defaultProps = {
    options:{
        center: { lat: 51.5499133, lng: -0.1985144 },
        zoom: 8
    }
}
export default Map