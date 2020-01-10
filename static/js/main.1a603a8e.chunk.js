(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{14:function(e,t,a){e.exports=a(33)},22:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(3),c=a.n(s),l=(a(19),a(20),a(21),a(22),a(13)),i=a.n(l),o=function(e){var t=e.title,a=e.subtitle;return r.a.createElement("header",{className:"header section"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},a)))},m=a(5),h=a(6),u=a(8),d=a(7),p=a(9),f=a(4),v=a.n(f),E=a(11),g=(a(25),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selected:null},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState({selected:e}),this.props.onChange&&(e?this.props.onChange(e.value):this.props.onChange(null))}},{key:"render",value:function(){var e=this.state.selected&&this.state.selected.value;return r.a.createElement(E.a,{"aria-label":this.props.label,placeholder:this.props.placeholder,value:e||this.props.value,onChange:this.handleChange.bind(this),options:this.props.options})}}]),t}(r.a.Component)),y=function(e){var t=e.event;return r.a.createElement("div",{className:"column is-half",key:t.link},r.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-header-title"},t.title)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-link is-medium"},r.a.createElement("span",{className:"fa fa-calendar","aria-hidden":"true"})),r.a.createElement("time",{className:"tag is-light is-medium",dateTime:v()("{YYYY}-{Mo}-{DD}",{padMonth:!0}).render(new Date(t.date))},v()("{DD} {MMMM} {YYYY}, {H}:{mm}",{padMonth:!0,padHours:!0}).render(new Date(t.date))),"\xa0",r.a.createElement("span",{className:"tag is-link is-medium"},r.a.createElement("span",{className:"fa fa-building"})),r.a.createElement("span",{className:"tag is-light is-medium"},t.city),!t.free&&r.a.createElement("div",null,"\xa0",r.a.createElement("span",{className:"tag is-link is-medium"},r.a.createElement("i",{className:"fa fa-dollar"})),r.a.createElement("span",{className:"tag is-light is-medium"},"Fee"))),r.a.createElement("div",null,t.description||"")))))},b=function(e){var t="?";for(var a in e)t+=a+"="+e[a]+"&";return t.slice(0,-1)},w=function(e){var t={};return e.forEach((function(e){"object"!==typeof e||t[e.link]||(t[e.link]=e)})),Object.values(t)},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={city:"",month:0,events:[],search:""},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=decodeURIComponent(window.location.search.toLowerCase()),a=/city=(.*?)(?:&|$)/.exec(t)||[],n=/month=(\w+)/.exec(t)||[],r=/search=(.*?)$/.exec(t)||[];this.setState({city:a.length>1?a[1]:"",month:n.length>1?n[1]:"",search:r.length>1?r[1]:""}),fetch("https://swedishtechevents.com/api/events.json").then((function(e){return e.json()})).then((function(t){e.setState({events:w(t)})}))}},{key:"render",value:function(){var e=this;if(!this.state.events.length)return[r.a.createElement("h2",{key:"upcomming-events1",className:"title is-3"},"Upcoming events"),r.a.createElement("p",{key:"loading"},"Loading events...")];var t=this.state,a=t.city,n=t.month,s=t.search,c=new Date,l=this.state.events.filter((function(e){return!(e.date<+c)&&!!e.title})),i=l=(l=l.sort((function(e,t){return e.date-t.date}))).map((function(e){return e.city=e.city.replace(/\d+(\s|)\d+/,"").trim(),e.city=e.city.toLowerCase().replace(/^(.)|\s(.)/g,(function(e){return e.toUpperCase()})),e}));n&&!isNaN(n)&&(i=i.filter((function(e){return parseInt(n,10)===new Date(e.date).getMonth()+1}))),a&&a.length&&"null"!==a.toLowerCase()&&(i=i.filter((function(e){return e.city.toLowerCase()===a.toLowerCase()}))),s.length&&(i=i.filter((function(e){return-1!==e.title.toLowerCase().indexOf(s)||-1!==(""+e.description).toLowerCase().indexOf(s)}))),i=i.sort((function(e,t){return e.date-t.date}));var o=Array.from(new Set(l.map((function(e){return v()("{MMMM}-{Mo}").render(new Date(e.date))})))).map((function(e){return{label:e.split("-")[0],value:e.split("-")[1]}})),m=Array.from(new Set(l.map((function(e){return e.city})))).sort((function(e,t){return e.localeCompare(t)})).map((function(e){return{label:e,value:e.toLowerCase()}}));return[r.a.createElement("h2",{key:"upcomming-events2",className:"title is-3"},"Upcoming events (",i.length,")"),r.a.createElement("strong",{key:"filters"},"Filters"),r.a.createElement("div",{className:"columns",key:"columns-1"},r.a.createElement("div",{className:"column"},r.a.createElement(g,{label:"Month",key:"months",options:o,placeholder:"Select month...",value:n,onChange:function(t){e.setState({month:parseInt(t,10)}),e.props.history.push({pathname:"/",search:b({month:t,city:a,search:s})})}})),r.a.createElement("div",{className:"column"},r.a.createElement(g,{label:"City",key:"cities",options:m,placeholder:"Select city...",value:a,onChange:function(t){e.setState({city:t}),e.props.history.push({pathname:"/",search:b({month:n,city:t,search:s})})}})),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"Select is-clearable is-searchable Select--single"},r.a.createElement("label",{htmlFor:"search",className:"visually-hidden"},"Search"),r.a.createElement("div",{className:"Select-control"},r.a.createElement("div",{className:"Select-input"},r.a.createElement("input",{id:"search",type:"search",placeholder:"Search...",defaultValue:s,onChange:function(t){e.setState({search:t.target.value}),e.props.history.push({pathname:"/",search:b({month:n,city:a,search:t.target.value})})}})))))),r.a.createElement("div",{className:"columns is-multiline","aria-live":"polite",key:"columns-2"},i.map((function(t){return r.a.createElement(y,{key:t.link,event:t,renderFee:e.renderFee})})))]}}]),t}(r.a.Component),k=function(e){e.children;return r.a.createElement("footer",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"Created by"," ",r.a.createElement("a",{href:"https://twitter.com/frozzare",rel:"noopener noreferrer",target:"_blank"},"@frozzare")," ","and"," ",r.a.createElement("a",{href:"https://twitter.com/kolombiken",rel:"noopener noreferrer",target:"_blank"},"@kolombiken")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/swedishtechevents",rel:"noopener noreferrer",target:"_blank"},"Source code"),"\xa0 - \xa0",r.a.createElement("a",{href:"https://twitter.com/swetechevents",rel:"noopener noreferrer",target:"_blank"},"@swetechevents")),r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()))))},C=i()();c.a.render(r.a.createElement((function(e){return r.a.createElement("div",null,r.a.createElement(o,{title:"Swedish Tech Events",subtitle:"Events for developers, technologists, and other geeks in Sweden"}),r.a.createElement("main",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Events are fetched from"," ",r.a.createElement("a",{href:"https://www.meetup.com/"},"meetup.com")," and"," ",r.a.createElement("a",{href:"https://www.eventbrite.com/"},"eventbrite.com")," that is categorized with tech and from our GitHub every hour."," ",r.a.createElement("a",{href:"https://github.com/swedishtechevents/events/issues/new",rel:"noopener noreferrer",target:"_blank"},"Missing your event? Submit it!")),r.a.createElement("br",null),r.a.createElement(N,{history:e.history}))),r.a.createElement(k,null))}),{history:C}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1a603a8e.chunk.js.map