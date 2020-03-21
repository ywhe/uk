(this.webpackJsonpuknew=this.webpackJsonpuknew||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(10),i=a.n(s),l=(a(18),a(1)),r=a(2),c=a(3),d=a(4),m=(a(19),a(7)),p=(a(9),function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.textColorClass+" front-weight-bold",t="NA";this.props.total>0&&(t=this.props.total);var a="NA";return this.props.new>0&&(a="+"+this.props.new),this.props.new<0&&(a=this.props.new),o.a.createElement("div",{className:"border-bottom d-inline-block text-center",style:{width:"6rem",height:"6rem"}},o.a.createElement("small",{className:"font-weigh-lighter"},"New:",o.a.createElement("span",{className:this.props.textColorClass},a)),o.a.createElement("h3",{className:e},t),o.a.createElement("h6",null,this.props.title))}}]),a}(o.a.Component)),u=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){var e=new Date(this.props.data.date).toDateString();return o.a.createElement(m.a,{style:{minWidth:"9rem",maxWidth:"28rem",margin:"auto"}},o.a.createElement(m.a.Header,null,o.a.createElement("span",{className:"font-weight-bold"},"COVID-19 UK Summary"),o.a.createElement("span",{className:"float-right small"},e)),o.a.createElement(m.a.Body,null,o.a.createElement(p,{title:"Confirmed",new:this.props.data.newConfirmedCount,total:this.props.data.confirmedCount,textColorClass:"text-danger"}),o.a.createElement(p,{title:"Deaths",new:this.props.data.newDeathsCount,total:this.props.data.deathsCount,textColorClass:"text-dark"}),o.a.createElement(p,{title:"Tested",new:this.props.data.newTestedCount,total:this.props.data.testedCount,textColorClass:"text-info"}),o.a.createElement(p,{title:"London",new:this.props.data.newLondonCount,total:this.props.data.londonCount,textColorClass:"text-warning"})))}}]),a}(o.a.Component),h=a(12),f=a.n(h),g=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).chartRef=o.a.createRef(),n.state={},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d"),t={labels:this.props.labels,datasets:[{label:this.props.title,backgroundColor:this.props.color,borderColor:this.props.color,fill:!1,data:this.props.data}]},a={responsive:!0,legend:{display:!1},title:{display:!0,text:this.props.title},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!1}}],yAxes:[{display:!0,scaleLabel:{display:!1}}]}};new f.a(e,{type:this.props.type,data:t,options:a})}},{key:"render",value:function(){return o.a.createElement("canvas",{ref:this.chartRef})}}]),a}(o.a.Component),v=a(6),w=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).ref=o.a.createRef(),n.searchRef=o.a.createRef(),n.onScriptLoad=n.onScriptLoad.bind(Object(v.a)(n)),n}return Object(r.a)(a,[{key:"onScriptLoad",value:function(){var e=new window.google.maps.Map(this.ref.current,this.props.options),t=this.searchRef.current,a=new window.google.maps.places.SearchBox(t);e.controls[window.google.maps.ControlPosition.TOP_LEFT].push(t),e.addListener("bounds_changed",(function(){a.setBounds(e.getBounds())})),a.addListener("places_changed",(function(){var t=a.getPlaces();if(0!=t.length){var n=new window.google.maps.LatLngBounds,o=t[0];o.geometry?(o.geometry.viewport?n.union(o.geometry.viewport):n.extend(o.geometry.location),e.fitBounds(n)):console.log("Returned place contains no geometry")}})),this.props.onMapLoad(e)}},{key:"componentDidMount",value:function(){var e=this;if(window.google)this.onScriptLoad();else{var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.google.com/maps/api/js?libraries=places&key=AIzaSyA9cxRpEVUFHDVDa3DgZe5NLLe5OF__b38";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a),t.addEventListener("load",(function(t){e.onScriptLoad()}))}}},{key:"render",value:function(){return o.a.createElement("div",{style:{width:"100%",height:"100%"}},o.a.createElement("div",{style:{width:"100%",height:"100%"},ref:this.ref}),o.a.createElement("input",{type:"text",placeholder:"Search Box",ref:this.searchRef}))}}]),a}(n.Component);w.defaultProps={options:{center:{lat:51.5499133,lng:-.1985144},zoom:8}};var b=w,y=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).lastWindow=null,e}return Object(r.a)(a,[{key:"AddMarks",value:function(e){new window.google.maps.Marker({map:e,draggable:!1,animation:window.google.maps.Animation.DROP,position:{lat:51.5499133,lng:-.1985144},icon:"https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow_v3-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v3-2-medium.png,assets/icons/poi/tactile/pinlet_v3-2-medium.png,assets/icons/poi/quantum/pinlet/constellation_star_pinlet-2-medium.png&highlight=ff000000,ffffff,fbc02d,ffffff?scale=1"}),new window.google.maps.Marker({map:e,draggable:!1,animation:window.google.maps.Animation.DROP,position:{lat:51.521248,lng:-.102103},icon:"https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow_v3-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v3-2-medium.png,assets/icons/poi/tactile/pinlet_v3-2-medium.png,assets/icons/poi/quantum/pinlet/constellation_star_pinlet-2-medium.png&highlight=ff000000,ffffff,fbc02d,ffffff?scale=1"})}},{key:"AddBoundary",value:function(e){e.data.loadGeoJson("https://ywhe.github.io/UK-COVID-19-Daily-Update/England.json"),e.data.setStyle({strokeWeight:.35,strokeColor:"red",fillColor:"red",fillOpacity:0})}},{key:"AddRecords",value:function(e){var t=new window.google.maps.LatLngBounds,a=this.props.records;a||(a=[]);for(var n=0;n<a.length;n++){var o=a[n],s=new window.google.maps.LatLng(o.latitude,o.longitude),i=o.Name+"  "+o.Count;t.extend(s);var l="https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow_v3-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v3-2-medium.png,assets/icons/poi/tactile/pinlet_v3-2-medium.png,assets/icons/poi/quantum/pinlet/medical_pinlet_v2-2-medium.png&highlight=ff000000,ffffff,"+this.GetColor(o.count)+",ffffff?scale=1",r=new window.google.maps.Marker({map:e,position:s,title:i,icon:l});this.AddInfoWindow(e,r,o)}}},{key:"AddInfoWindow",value:function(e,t,a){var n="<div><h6>"+a.Name+"</h6><br /><p>Confirmed:<b class='text-danger'>"+a.Count+"</b></p><p>New:    <b class='text-danger'>"+a.NewCount+"</b></p></div>",o=new window.google.maps.InfoWindow({content:n});window.google.maps.event.addListener(t,"click",(function(){null!=this.lastWindow&&this.lastWindow.close(),o.open(e,t),this.lastWindow=o}))}},{key:"GetColor",value:function(e){var t="ffce99";return e>5&&(t="f88181"),e>10&&(t="ff8f00"),e>20&&(t="ff5b00"),e>30&&(t="ff0505"),e>40&&(t="f000ff"),e>50&&(t="000000"),t}},{key:"render",value:function(){var e=this;return o.a.createElement(b,{onMapLoad:function(t){e.AddMarks(t),e.AddBoundary(t),e.AddRecords(t)}})}}]),a}(o.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("table",{id:"table",class:"table table-responsive",style:{maxHeight:"100vh"}},o.a.createElement("thead",{class:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",null,"Location"),o.a.createElement("th",null,"Confirmed ",o.a.createElement("span",{class:"badge badge-danger badge-pill"},"New")))),o.a.createElement("tbody",null,this.props.data.map((function(e){var t=e.name,a=o.a.createElement("span",null,e.count,o.a.createElement("span",{class:"badge badge-danger badge-pill"},e.newCount));return o.a.createElement("tr",null,o.a.createElement("td",null,t),o.a.createElement("td",null,a))}))))}}]),a}(o.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{labels:[],confirmedData:[],summary:{},details:[]},isLoading:!0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});fetch("https://raw.githubusercontent.com/ywhe/uk/master/data.json").then((function(e){return e.json()})).then((function(t){e.setState({data:t,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?o.a.createElement("div",null,"is loading....."):o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(u,{data:this.state.data.summary}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm",style:{minHeight:"300px"}},o.a.createElement(g,{type:"line",title:"Cumulative Confirmed",color:"red",labels:this.state.data.labels,data:this.state.data.cumulativeConfirmed})),o.a.createElement("div",{className:"col-sm",style:{minHeight:"300px"}},o.a.createElement(g,{type:"line",title:"Cumulative Deaths",color:"black",labels:this.state.data.labels,data:this.state.data.cumulativeDeaths})),o.a.createElement("div",{className:"col-sm",style:{minHeight:"300px"}},o.a.createElement(g,{type:"line",title:"Cumulative Tested",color:"green",labels:this.state.data.labels,data:this.state.data.cumulativeTested}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm",style:{minHeight:"300px"}},o.a.createElement(g,{type:"bar",title:"Daily Confirmed",color:"red",labels:this.state.data.labels,data:this.state.data.dailyConfirmed})),o.a.createElement("div",{className:"col-sm",style:{minHeight:"300px"}},o.a.createElement(g,{type:"bar",title:"Daily Deaths",color:"black",labels:this.state.data.labels,data:this.state.data.dailyDeaths})),o.a.createElement("div",{className:"col-sm",style:{minHeight:"300px"}},o.a.createElement(g,{type:"bar",title:"Daily Tested",color:"green",labels:this.state.data.labels,data:this.state.data.dailyTested}))),o.a.createElement("div",{style:{height:"1rem"}}),o.a.createElement("div",{className:"row vh-100"},o.a.createElement("div",{className:"col-md-8",style:{height:"100vh"}},o.a.createElement(y,{records:this.state.data.details})),o.a.createElement("div",{className:"col-sm"},o.a.createElement(E,{data:this.state.data.details}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.07840b63.chunk.js.map