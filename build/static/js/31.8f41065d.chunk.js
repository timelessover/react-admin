(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{348:function(e,t,a){"use strict";a(354);var n=a(357),r=a(0),i=a.n(r),o=a(34);t.a=function(e){return i.a.createElement(n.a,{style:{marginBottom:16}},i.a.createElement(n.a.Item,null,i.a.createElement(o.b,{to:"/home"},"\u9996\u9875")),e.arr&&e.arr.map(function(e){return"object"===typeof e?i.a.createElement(n.a.Item,{key:e.title},i.a.createElement(o.b,{to:e.to},e.title)):i.a.createElement(n.a.Item,{key:e},e)}))}},350:function(e,t,a){"use strict";a(347);var n=a(349),r=a(10),i=a(11),o=a(15),l=a(14),s=a(16),c=a(0),u=a.n(c),d=function(){function e(t){Object(r.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(i.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var a=Array.from(e.childNodes),n=0;n<a.length;n++){var r=a[n];if(3===r.nodeType)t=t.concat(r.nodeValue.split(""));else if(1===r.nodeType){var i=[];i=this.convert(r,i),t.push({dom:r,val:i})}}return t}},{key:"print",value:function(e,t,a){setTimeout(function(){e.appendChild(document.createTextNode(t)),a()},this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var a=e.val.shift();if("string"===typeof a)this.print(e.dom,a,function(){t.play(e)});else{var n=a.dom.cloneNode();e.dom.appendChild(n),this.play({parent:e,dom:n,val:a.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}(),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){new d({source:this.source,output:this.output,delay:30}).start()}},{key:"render",value:function(){var e=this;return u.a.createElement(n.a,{hoverable:!0,bordered:!1,className:"card-item",title:this.props.title,style:{minHeight:this.props.height},id:this.props.id},u.a.createElement("div",{style:{display:"none"},ref:function(t){return e.source=t},dangerouslySetInnerHTML:{__html:this.props.source}}),u.a.createElement("div",{ref:function(t){return e.output=t}}))}}]),t}(u.a.Component);m.defaultProps={title:"\u4f55\u65f6\u4f7f\u7528",source:"",height:136};t.a=m},761:function(e,t,a){"use strict";a.r(t);a(181);var n=a(131),r=(a(379),a(381)),i=(a(182),a(100)),o=(a(98),a(29)),l=(a(423),a(478)),s=(a(347),a(349)),c=(a(132),a(9)),u=(a(373),a(374)),d=a(10),m=a(11),h=a(15),p=a(14),f=a(16),v=a(0),y=a.n(v),g=a(126),E=a.n(g),b=(a(207),a(348)),k=a(350),j=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,loading2:!1},a.NProgressStart=function(){E.a.start(),a.setState({loading2:!0})},a.NProgressDone=function(){E.a.done(),a.setState({loading2:!1})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){E.a.start()}},{key:"componentDidMount",value:function(){E.a.done()}},{key:"componentWillUnmount",value:function(){E.a.done()}},{key:"render",value:function(){var e=this,t=this.state.loading2;return y.a.createElement("div",null,y.a.createElement(b.a,{arr:["\u53cd\u9988","\u52a0\u8f7d\u4e2d"]}),y.a.createElement(k.a,{source:"\u9875\u9762\u5c40\u90e8\u5904\u4e8e\u7b49\u5f85\u5f02\u6b65\u6570\u636e\u6216\u6b63\u5728\u6e32\u67d3\u8fc7\u7a0b\u65f6\uff0c\u5408\u9002\u7684\u52a0\u8f7d\u52a8\u6548\u4f1a\u6709\u6548\u7f13\u89e3\u7528\u6237\u7684\u7126\u8651\u3002"}),y.a.createElement(n.a,{gutter:16},y.a.createElement(i.a,{span:12},y.a.createElement(s.a,{bordered:!1,className:"card-item"},y.a.createElement(u.a,null),"\u2003",y.a.createElement(u.a,{indicator:y.a.createElement(c.a,{type:"loading"})})),y.a.createElement(s.a,{bordered:!1,className:"card-item"},y.a.createElement(u.a,{tip:"Loading..."},y.a.createElement(l.a,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))),y.a.createElement(s.a,{bordered:!1,className:"card-item"},y.a.createElement(o.a,{onClick:this.NProgressStart,loading:t},"\u9875\u9762\u9876\u90e8\u8fdb\u5ea6\u6761\u52a0\u8f7d"),"\u2003",y.a.createElement(o.a,{onClick:this.NProgressDone},"\u9876\u90e8\u8fdb\u5ea6\u6761\u52a0\u8f7d\u5b8c\u6210"))),y.a.createElement(i.a,{span:12},y.a.createElement(s.a,{bordered:!1,className:"card-item"},y.a.createElement(u.a,{size:"small"}),"\u2003",y.a.createElement(u.a,null),"\u2003",y.a.createElement(u.a,{size:"large"})),y.a.createElement(s.a,{bordered:!1,className:"card-item"},y.a.createElement("div",{style:{marginBottom:"1em"}},y.a.createElement(u.a,{tip:"Loading...",spinning:this.state.loading},y.a.createElement(l.a,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))),"Loading state\uff1a",y.a.createElement(r.a,{onChange:function(t){return e.setState({loading:t})}})))))}}]),t}(y.a.Component);t.default=j}}]);
//# sourceMappingURL=31.8f41065d.chunk.js.map