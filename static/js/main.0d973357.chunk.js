(this["webpackJsonpfriends-giving-2022"]=this["webpackJsonpfriends-giving-2022"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(6),c=n.n(a),r=(n(11),n(2)),o=(n(12),n(5),n(0));var l=function(e){var t=Object(i.useState)("label"),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(i.useEffect)((function(){e.id===e.activeId?a("labelActive"):a("label")}),[e.activeId]),Object(o.jsx)("div",{className:"tab",children:Object(o.jsx)("h1",{className:s,onClick:function(){return e.setActiveId(e.id)},children:e.label})})};var d=function(e){return Object(o.jsx)("div",{className:"tabList",children:e.labels.map((function(t,n){return Object(o.jsx)(l,{label:t,activeId:e.tabId,id:n,setActiveId:e.setTabId})}))})},b=n.p+"static/media/HappyFriendsgiving.9a13a386.png",u=n.p+"static/media/Menu.5b6febda.png",j=n.p+"static/media/Itinerary.0c21a3e1.png";var m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(i.useEffect)((function(){0===e.activeId?a(!0):a(!1)}),[e.activeId]),Object(o.jsx)("div",{className:"mainPage",children:s?Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"itemBox-heading",children:Object(o.jsxs)("h1",{className:"heading",children:["Welcome to the Official Site for ",Object(o.jsx)("br",{})," Friendsgiving 2022 Park City Edition"]})}),Object(o.jsx)("h4",{children:'"It\u2019s not like a *regular* thanksgiving, it\u2019s like a *really cool* friendsgiving."'}),Object(o.jsx)("h4",{children:"- Everyone who wishes they were at this friendsgiving"}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{className:"heading2",children:"Hello "+e.user+"! Please use this site to learn more about the everyone's roles for this weekend"}),Object(o.jsx)("h2",{className:"heading2",children:"You can also find your specific packing lists and meals within your tab"}),Object(o.jsx)("h2",{className:"heading2",children:"Finally check out the Menu and Itinerary Below"}),Object(o.jsx)("img",{src:u}),Object(o.jsx)("img",{src:j}),Object(o.jsx)("img",{src:b})]}):null})};var h=function(e){var t,n=Object(i.useState)(!1),s=Object(r.a)(n,2),a=s[0],c=s[1],l=[["Crispy Potato Skins"],["Homeamde Butter","Turkey","Gravy"],["Turkey","Stuffing"],["Green Beans"],["Cranberry Sauce"],["Mashed Potatoes"],["Salad"],["Salad"],["Cocktails"]];return Object(i.useEffect)((function(){0!==e.activeId?c(!0):c(!1)}),[e.activeId]),Object(o.jsx)("div",{className:"personalPage",children:a?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:e.labels[e.activeId]}),Object(o.jsx)("h2",{children:"Title: "+["Head of Lodging","Sourcer of Sources","Kitchen Director","VP Logistrator","Co Adventure Coordinator","Quality Assurance","Co Adventure Coordinator","Garner of Games","Resident Resident","Co Activation Specialist","Co Activation Specialist"][e.activeId-1]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"itemBox",children:[Object(o.jsx)("h2",{children:"Essentials to Bring to Park City:"}),["Bathing Suit","Warm Clothes (Average Temps 20F-30F)","Comfortable Walking Shoes","Friendsgiving Outfit"].map((function(e){return Object(o.jsx)("h3",{children:"- "+e})}))]}),(null===(t=l[e.activeId-1])||void 0===t?void 0:t.length)>0?Object(o.jsxs)("div",{className:"itemBox",children:[Object(o.jsx)("h2",{children:"What you're making Saturday:"}),l[e.activeId-1].map((function(e){return Object(o.jsx)("h3",{children:"- "+e})}))]}):null]}):null})};var g=function(e){return Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)(m,{activeId:e.tabId,user:e.user}),Object(o.jsx)(h,{activeId:e.tabId,labels:e.labels})]})};var v=function(e){var t,n,s=Object(i.useState)(null),a=Object(r.a)(s,2),c=a[0],l=a[1],d=Object(i.useState)(!1),b=Object(r.a)(d,2),u=b[0],j=b[1],m=Object(i.useState)(!1),h=Object(r.a)(m,2),g=h[0],v=h[1],p=["glina1999","reckers1999","chan1998","breaux1999","floyd1998","garsia1999","reynolds1999","dunne1998","mckinstry1999","dunne2000","carton2000"],O=new Map([["glina1999","Jujy"],["reckers1999","D Dog"],["garsia1999","Chris"],["floyd1998","E Monster"],["breaux1999","Leon the Prof"],["reynolds1999","Sambo"],["dunne1998","Libster"],["mckinstry1999","Thomas the Tank"],["carton","Colt45"],["dunne2000","Trashley"]]);return Object(o.jsxs)("div",{className:"inner-container",children:[Object(o.jsx)("div",{className:"header",children:"Login"}),Object(o.jsxs)("div",{className:"box",children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("input",{type:"password",name:"password",className:"login-input",placeholder:"Password",value:c,onChange:function(e){return function(e){l(e.target.value)}(e)}}),u||g?Object(o.jsx)("label",{children:(t=u,n=g,n?"I told you not to try logging in on mobile :| Retry on desktop":t?"Password Invalid":void 0)}):null]}),Object(o.jsx)("button",{type:"button",className:"login-btn",onClick:function(t){null!==c?(!function(){var e=navigator.userAgent||navigator.vendor||window.opera;return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))}()?v(!1):v(!0),p.includes(c.toLowerCase())?(j(!1),e.setUser(O.get(c.toLowerCase())),console.log(O),console.log(c.toLowerCase()),console.log(O.get(c.toLowerCase)),e.setLoggedIn(!0)):j(!0)):j(!0)},children:"Login"})]})]})},p=n(4),O=n.n(p);function f(e,t){return k(t.diff(e,"seconds")%60,2)}function x(e,t){return k(t.diff(e,"minutes")%60,2)}function w(e,t){return k(t.diff(e,"hours")%24,2)}function y(e,t){return t.diff(e,"days").toString()}function k(e,t){var n=e.toString();return n.length>=t?n:"0".repeat(t-n.length)+n}var I={seconds:"00",minutes:"00",hours:"00",days:"00"},C=function(e){var t=e.countdownTimestampMs,n=Object(i.useState)(I),s=Object(r.a)(n,2),a=s[0],c=s[1];return Object(i.useEffect)((function(){var e=setInterval((function(){c(function(e){var t=O()(e),n=O()();return t.isBefore(n)?{seconds:"00",minutes:"00",hours:"00",days:"00"}:{seconds:f(n,t),minutes:x(n,t),hours:w(n,t),days:y(n,t)}}(t))}),1e3);return function(){return clearInterval(e)}}),[t]),Object(o.jsxs)("div",{className:"countdown-div",children:[Object(o.jsx)("h1",{className:"h1-timer",children:"Countdown to Friendsgiving!"}),Object(o.jsxs)("div",{className:"countdown-timer",children:[Object(o.jsx)("span",{children:a.days}),Object(o.jsx)("span",{children:"days"}),Object(o.jsx)("span",{className:"two-numbers",children:a.hours}),Object(o.jsx)("span",{children:"hours"}),Object(o.jsx)("span",{className:"two-numbers",children:a.minutes}),Object(o.jsx)("span",{children:"minutes"}),Object(o.jsx)("span",{className:"two-numbers",children:a.seconds}),Object(o.jsx)("span",{children:"seconds"})]})]})};var S=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(null),c=Object(r.a)(a,2),l=c[0],b=c[1],u=Object(i.useState)(0),j=Object(r.a)(u,2),m=j[0],h=j[1],p=["Main","Libby","Elinor","Chris","Thomas","Sam","Dawson","Julian","Danielle","Leon","Colter","Ashley"];return Object(o.jsxs)("div",{className:"App",children:[n?Object(o.jsxs)("div",{children:[Object(o.jsx)(C,{countdownTimestampMs:16682274e5}),Object(o.jsx)(d,{setTabId:h,tabId:m,labels:p}),Object(o.jsx)(g,{setTabId:h,tabId:m,labels:p,user:l})]}):Object(o.jsx)("div",{className:"box-container",children:Object(o.jsx)(v,{setLoggedIn:s,setUser:b})}),Object(o.jsx)("h3",{children:"\xa9 2022 | Chris Garsia"})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),N()},5:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.0d973357.chunk.js.map