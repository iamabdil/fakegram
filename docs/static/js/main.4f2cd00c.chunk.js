(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{33:function(e,t,a){e.exports=a(41)},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(32),l=a.n(c),i=(a(38),a(11)),o=a(29),s=a(26);a(42),a(44);s.a.initializeApp({apiKey:"AIzaSyDjtlylm_Spu1aPq8jEXffNmdA6v2fFrBU",authDomain:"fakegram-448b2.firebaseapp.com",projectId:"fakegram-448b2",storageBucket:"fakegram-448b2.appspot.com",messagingSenderId:"786720379594",appId:"1:786720379594:web:d61bc3ee0321a4a155da33"});var u=s.a.storage(),m=s.a.firestore(),d=s.a.firestore.FieldValue.serverTimestamp,f=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=m.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},p=a(20),g=function(e){var t=e.setSelectedImg,a=f("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(p.motion.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(p.motion.img,{src:e.url,alt:"the uploaded picture",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},b=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(p.motion.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(p.motion.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))},E=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FakeGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"100% Not Instagram."))},v=a(1),j=a.n(v),O=a(3),y=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],f=o[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),b=g[0],E=g[1];return Object(n.useEffect)((function(){var t=u.ref(e.name),a=m.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){f(e)}),Object(O.a)(j.a.mark((function e(){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=d(),a.add({url:n,createdAt:r}),E(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:s}},h=function(e){var t=e.file,a=e.setFile,c=y(t),l=c.url,i=c.progress;return console.log(i,l),Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(p.motion.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},S=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],u=o[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("Please select an image file (png or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"},s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(h,{file:a,setFile:c})))};var k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(S,null),r.a.createElement(g,{setSelectedImg:c}),a&&r.a.createElement(b,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4f2cd00c.chunk.js.map