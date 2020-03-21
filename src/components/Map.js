import React, { Component } from 'react';


class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }
  ref=React.createRef();

  onScriptLoad() {
    const map = new window.google.maps.Map(
      this.ref.current,
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyA9cxRpEVUFHDVDa3DgZe5NLLe5OF__b38`;
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
      <div style={{ width: '100%', height: '100%' }} ref={this.ref} />
    );
  }
}
Map.defaultProps = {
    options:{
        center: { lat: 41.0082, lng: 28.9784 },
        zoom: 8
    }
}
export default Map