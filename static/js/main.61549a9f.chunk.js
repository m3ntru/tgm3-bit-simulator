(this["webpackJsonptgm3-bit-simulator"]=this["webpackJsonptgm3-bit-simulator"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),o=(a(86),a(87),a(61)),c=a(24),s=a(35),m=a(44),u=a(43),A=a(135),g=a(110),h=a(139),d=a(140),p=a(141),E=a(142),w=a(143),v=a(66),y=a.n(v),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.result;return l.a.createElement("div",null,l.a.createElement(A.a,{component:g.a},l.a.createElement(h.a,{"aria-label":"simple table"},l.a.createElement(d.a,null,e.map((function(e,t){return l.a.createElement(p.a,{key:t},l.a.createElement(E.a,{width:"40px"},t+1),l.a.createElement(E.a,null,e),l.a.createElement(E.a,{width:"50px"},l.a.createElement(w.a,{size:"medium","aria-label":"GitHub",href:"https://translate.google.com.tw/?hl=zh-TW&tab=wT&authuser=0#view=home&op=translate&sl=zh-CN&tl=zh-CN&text="+e,target:"blank"},l.a.createElement(y.a,null))))}))))))}}]),a}(l.a.Component),b=new function e(){Object(c.a)(this,e),this.splitTextV1=function(e,t,a){var n=[];!function e(l,r){if(t[r]&&l.trim().length)if(l.indexOf(t[r])>-1){var i=1,o=l.split(t[r]);o.forEach((function(l){if(l.length){var c="";i!==o.length&&(c=t[r]),l=(l+c).trim()}l.length&&l.length<=a?n.push(l):e(l,r+1),i++}))}else e(l,r+1);else if(l.length)for(var c=new RegExp(".{1,".concat(a,"}"),"g"),s=l.match(c);s.length>0;)n.push(s.shift().trim())}(e,0);var l=[];return n.forEach((function(e){l.length&&l[l.length-1].length+e.length+1<=a?l[l.length-1]+=" ".concat(e):l.push(e)})),l}},x=a(45),k=a.n(x),q=a(67),F=a.n(q),f=a(68),z=a.n(f),S=a(144),M=a(145),H=a(146),U=a(147),K=a(148),N=a(154),P=a(153),O=a(156),B=a(151),Y=a(157),D=a(46),I=a(69),j=a.n(I),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:"",result:[],logo:k.a,example:0,player:!1,playerLink:""},e.handleChange=function(t){return function(a){e.setState(Object(o.a)({},t,a.target.value))}},e.handleLoadClick=function(){var t=D.case[e.state.example].origin,a=b.splitTextV1(t,[".","!","?",":",";",","," "],90);e.setState({text:t,logo:k.a,player:!0,playerLink:D.case[e.state.example].link,result:a})},e.handleConverterClick=function(){if(""!==e.state.text)if("od9000"===e.state.text.toLowerCase())e.setState({player:!1,logo:F.a,text:"<message deleted>",result:["O\u4ec0\u9ebcO\u554a\uff0c\u4e0a\u4e00\u500bO\u7684\uff0c\u58b3\u982d\u7684\u8349\u5df2\u7d93\u8d77\u98db\u4e8687cm\u56c9\u3002(\u0e51\u2032\u072b`)/ http://i.imgur.com/dvPGYeA.jpg https://www.twitch.tv/tetristhegrandmaster3/v/66031829 [warning]"]});else{var t=b.splitTextV1(e.state.text,[".","!","?",":",";",","," "],90);e.setState({player:!1,logo:k.a,result:t})}},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{margin:"20px"}},l.a.createElement(S.a,{style:{backgroundColor:"#e0f2f1",margin:"12px auto",padding:"0px"}},l.a.createElement("div",{style:{backgroundColor:"#009688",padding:"15px"}},l.a.createElement("img",{src:this.state.logo,alt:"logo"})),l.a.createElement("div",null,l.a.createElement(M.a,{style:{margin:"20px"}},l.a.createElement(H.a,null,l.a.createElement(U.a,{variant:"subtitle2",component:"p"},"\u5c0f\u5947\u9ede\u6ce8\u97f3\u65b7\u53e5\u6a21\u64ec\u5668",l.a.createElement("br",null),"1.\u76ee\u524d\u50c5\u6709\u7d14\u6ce8\u97f3\u65b7\u53e5\uff0c\u6587\u5b57\u4e0a\u9650\u4ee5\u53ca\u6df7\u5408\u4e2d\u6587\u6216Emoji\u9084\u6709\u5f85\u6e2c\u8a66",l.a.createElement("br",null),"2.\u65b7\u53e5\u6c92\u6709\u5728\u81ea\u5df1\u60f3\u8981\u7684\u4f4d\u7f6e\u6642\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u6ce8\u97f3\u4f5c\u505c\u9813\uff1a",l.a.createElement("br",null),"\u3110\u02d9 / \u3110\u02d9\u3002 / \u3119\u311f / \u3119\u311f\u3002",l.a.createElement("br",null),"3.\u4e2d\u6587\u8f49\u6ce8\u97f3\u8f49\u63db\u5de5\u5177 ",l.a.createElement("a",{href:"https://www.chineseconverter.com/zh-tw/convert/zhuyin",target:"blank"},"https://www.chineseconverter.com/zh-tw/convert/zhuyin"),l.a.createElement("br",null),"4.\u6709\u8a08\u756b\u65b0\u589e\u5176\u4ed6\u529f\u80fd(ex.\u6574\u6bb5\u8a66\u807d)\uff0c\u4ec0\u9ebc\u6642\u5019\u4e0a\u7dda\u4e0d\u77e5\u9053\uff0c\u4f5c\u8005\u4e0b\u73ed\u4e5f\u662f\u6703\u60f3\u6253\u500b\u96fb\u52d5",l.a.createElement("img",{src:z.a,alt:"logo",style:{height:"32px",width:"32px",verticalAlign:"text-bottom"}})))),l.a.createElement(K.a,null,l.a.createElement(N.a,{id:"demo-simple-select-label"},"\u7bc4\u4f8b"),l.a.createElement(P.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.example,onChange:this.handleChange("example")},D.case.map((function(e,t){return l.a.createElement(O.a,{key:e.id,value:e.id},e.title)})))),l.a.createElement(B.a,{size:"small",variant:"contained",onClick:this.handleLoadClick,style:{color:"white",backgroundColor:"#009688",margin:"20px"}},"\u8f09\u5165"),l.a.createElement("div",{style:{padding:"20px"}},l.a.createElement(Y.a,{component:g.a,multiline:!0,variant:"outlined",rows:7,label:"Message",value:this.state.text,style:{width:"100%"},onChange:this.handleChange("text")})),l.a.createElement(B.a,{variant:"contained",onClick:this.handleConverterClick,style:{color:"white",backgroundColor:"#009688",margin:"20px"}},"\u8f49\u63db"),this.state.player?l.a.createElement(j.a,{style:{margin:"auto",padding:"20px"},url:this.state.playerLink,controls:!0}):"",l.a.createElement(C,{result:this.state.result}))))}}]),a}(n.Component),Q=a(71),J=a(152),L=a(70),V=a.n(L),G=Object(Q.a)({typography:{fontFamily:"Noto Sans TC,sans-serif"}});var W=function(){return l.a.createElement(J.a,{theme:G},l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"}),l.a.createElement(X,null),l.a.createElement(w.a,{size:"medium","aria-label":"GitHub",href:"https://github.com/m3ntru/tgm3-bit-simulator",target:"blank",style:{marginBottom:"15px"}},l.a.createElement(V.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t){e.exports="data:image/png;base64,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"},46:function(e){e.exports=JSON.parse('{"case":[{"id":0,"title":"\u9ad8\u7d1a\u8eca1","link":"https://youtu.be/I8YJLZ3qeU8","origin":"\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002 \u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02ca\u310d\u3128\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-","split":["\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002","\u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02ca\u310d\u3128","\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-"]},{"id":1,"title":"\u9ad8\u7d1a\u8eca2","link":"https://youtu.be/BpT77IZ3jss","origin":"\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002 \u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02cb\u3110\u02d9\u310d\u3128\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-","split":["\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002","\u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02cb\u3110\u02d9","\u310d\u3128\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-"]},{"id":2,"title":"\u865e\u7f8e\u4eba1","link":"https://youtu.be/Vu5cFA8x9ps","origin":"\u3129\u02ca \u3107\u311f\u02c7 \u3116\u3123\u02ca\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u310b\u3122\u02ca \u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7 \u310f\u3121\u02cb \u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3112\u3127\u3125 \u3113 \u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123 \u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b \u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3122 \u3128\u3122\u02cb \u3109\u3127 \u3105\u3127\u3120 \u310f\u3128\u311b\u02c7 \u3109\u311a\u02c7 \u3108\u3125 \u3002\u310a\u3120\u02ca\u3105\u3127\u3125 \u3105\u3128\u02cb\u310e\u3122 \u3110\u3127\u311a \u3105\u3122 \u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3114\u3128 \u3112\u3129\u3122\u02c7\u3115\u3128\u311a \u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122 \u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124 \u3109\u3120 \u310e\u3122\u02c7\u3002\u3119\u311f \u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b \u3110\u3127\u3121\u02c7\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121 \u310c\u3127\u3121 \u3002","split":["\u3129\u02ca \u3107\u311f\u02c7 \u3116\u3123\u02ca\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u310b\u3122\u02ca \u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7 \u310f\u3121\u02cb \u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3112\u3127\u3125 \u3113 \u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123 \u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b","\u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3122 \u3128\u3122\u02cb \u3109\u3127 \u3105\u3127\u3120 \u310f\u3128\u311b\u02c7 \u3109\u311a\u02c7 \u3108\u3125 \u3002\u310a\u3120\u02ca\u3105\u3127\u3125 \u3105\u3128\u02cb\u310e\u3122 \u3110\u3127\u311a \u3105\u3122","\u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3114\u3128 \u3112\u3129\u3122\u02c7\u3115\u3128\u311a \u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122 \u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124 \u3109\u3120 \u310e\u3122\u02c7\u3002\u3119\u311f","\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b","\u3110\u3127\u3121\u02c7\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121 \u310c\u3127\u3121 \u3002"]},{"id":3,"title":"\u865e\u7f8e\u4eba2","link":"https://youtu.be/zoe9gDS8-jQ","origin":"\u3129\u02ca-\u3107\u311f\u02c7-\u3116\u3123\u02ca\u3002\u3110\u02d9\u310b\u3122\u02ca-\u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7-\u310f\u3121\u02cb-\u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3110\u02d9\u3112\u3127\u3125-\u3113-\u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123-\u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3122-\u3128\u3122\u02cb-\u3109\u3127-\u3105\u3127\u3120-\u310f\u3128\u311b\u02c7-\u3109\u311a\u02c7-\u3108\u3125-\u3002\u310a\u3120\u02ca\u3105\u3127\u3125-\u3105\u3128\u02cb\u310e\u3122-\u3110\u3127\u311a-\u3105\u3122-\u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3114\u3128-\u3112\u3129\u3122\u02c7\u3115\u3128\u311a-\u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122-\u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124-\u3109\u3120-\u310e\u3122\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3110\u02d9\u3002\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3110\u3127\u3121\u02c7\u3110\u02d9\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121-\u310c\u3127\u3121-\u3002","split":["\u3129\u02ca-\u3107\u311f\u02c7-\u3116\u3123\u02ca\u3002\u3110\u02d9\u310b\u3122\u02ca-\u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7-\u310f\u3121\u02cb-\u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3110\u02d9\u3112\u3127\u3125-\u3113-\u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123-\u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002","\u3111\u3127\u3122-\u3128\u3122\u02cb-\u3109\u3127-\u3105\u3127\u3120-\u310f\u3128\u311b\u02c7-\u3109\u311a\u02c7-\u3108\u3125-\u3002\u310a\u3120\u02ca\u3105\u3127\u3125-\u3105\u3128\u02cb\u310e\u3122-\u3110\u3127\u311a-\u3105\u3122-\u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002","\u3114\u3128-\u3112\u3129\u3122\u02c7\u3115\u3128\u311a-\u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122-\u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124-\u3109\u3120-\u310e\u3122\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3110\u02d9\u3002\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-","\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3110\u3127\u3121\u02c7\u3110\u02d9\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121-\u310c\u3127\u3121-\u3002"]}]}')},67:function(e,t,a){e.exports=a.p+"static/media/tgm3OD.6ca8a749.png"},68:function(e,t,a){e.exports=a.p+"static/media/tgm3AMON.766af857.png"},81:function(e,t,a){e.exports=a(109)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.61549a9f.chunk.js.map