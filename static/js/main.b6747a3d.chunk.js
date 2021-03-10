(this["webpackJsonpreact-certification-2020"]=this["webpackJsonpreact-certification-2020"]||[]).push([[0],{18:function(e,t,i){e.exports=i(37)},37:function(e,t,i){"use strict";i.r(t);var n,a=i(0),l=i.n(a),o=i(9),d=i.n(o),r=i(3),u=i(1),h=i(2),c=i(16),s=i.n(c),m=h.a.div(n||(n=Object(u.a)(["\n  height: 100%;\n  vertical-align: middle;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media (max-width: 40em) {\n    display: none;\n  }\n"])));var p,g,f,b,v,w,y=function(){return l.a.createElement(m,null,l.a.createElement(s.a,{fontSize:"large"}))},T=h.a.ul(p||(p=Object(u.a)(["\n  flex-flow: column nowrap;\n  background-color: #0d2538;\n  position: fixed;\n  transform: ",";\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 300px;\n  padding-top: 3.5rem;\n  transition: transform 0.3s ease-in-out;\n  li {\n    color: #fff;\n    padding: 18px 10px;\n  }\n"])),(function(e){return e.open?"translateX(0)":"translateX(-100%)"})),j=function(e){var t=e.open;return l.a.createElement(T,{open:t},l.a.createElement("ul",null,l.a.createElement("li",null,"Home"),l.a.createElement("li",null,"About Us"),l.a.createElement("li",null,"Contact Us"),l.a.createElement("li",null,"Sign In"),l.a.createElement("li",null,"Sign Up")))},x=h.a.nav(g||(g=Object(u.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: relative;\n  top: 15px;\n  left: 20px;\n  z-index: 20;\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n  color: white;\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(e){return e.open?"#ccc":"#333"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),z=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{open:i,onClick:function(){return n(!i)}},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement(j,{open:i}))},W=h.a.div(f||(f=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media (max-width: 40em) {\n    display: none;\n  }\n"]))),C=h.a.div(b||(b=Object(u.a)(["\n  position: relative;\n"]))),k=h.a.label(v||(v=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 42px;\n  height: 26px;\n  border-radius: 15px;\n  background: #bebebe;\n  cursor: pointer;\n  &::after {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: #ffffff;\n    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n    transition: 0.2s;\n  }\n"]))),E=h.a.input(w||(w=Object(u.a)(["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 42px;\n  height: 26px;\n  &:checked + "," {\n    background: #4fbe79;\n    &::after {\n      content: '';\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n"])),k);var I,q,O=function(e){var t=e.label;return l.a.createElement(W,null,l.a.createElement(C,null,l.a.createElement(E,{id:"checkbox",type:"checkbox"}),l.a.createElement(k,{htmlFor:"checkbox"})),t)},B=h.a.input(I||(I=Object(u.a)(["\n  height: 40px;\n  font-size: 25px;\n  width: 100%;\n  border: 2px solid #aaa;\n  border-radius: 4px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  padding-left: 50px;\n  cursor: pointer;\n\n  &:focus {\n    border-color: dodgerBlue;\n    box-shadow: 0 0 8px 0 dodgerBlue;\n  }\n\n  :focus + .left-icon {\n    svg {\n      fill: dodgerBlue;\n    }\n  }\n"]))),A=h.a.div(q||(q=Object(u.a)(["\n  &.inputWithIcon {\n    position: relative;\n    width: 250px;\n  }\n\n  .left-icon {\n    position: absolute;\n    left: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n    svg {\n      fill: black;\n      transition: 0.3s;\n    }\n  }\n\n  button.right-icon {\n    background: none;\n    border: none;\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n    svg {\n      fill: black;\n      transition: 0.3s;\n    }\n  }\n  @media (max-width: 40em) {\n    width: 100%;\n  }\n"])));var M,Z,P,R,H,G,U,N,S,X,V,Y,D,Q,F,K,_=function(e){var t=e.placeholder,i=e.updateQuery,n=Object(a.useState)(""),o=Object(r.a)(n,2),d=o[0],u=o[1];return l.a.createElement("form",{onSubmit:function(e){i(d),e.preventDefault()}},l.a.createElement(A,{className:"inputWithIcon"},l.a.createElement(B,{type:"text",value:d,onChange:function(e){u(e.target.value)},placeholder:t}),l.a.createElement("div",{className:"left-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30px",height:"30px"},l.a.createElement("path",{d:"M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z"}))),l.a.createElement("button",{type:"button",className:"right-icon",onClick:function(){u(""),""!=d&&i("")}},l.a.createElement("svg",{width:"24pt",height:"24pt",viewBox:"0 0 24 24",version:"1.1"},l.a.createElement("g",{id:"surface1"},l.a.createElement("path",{d:"M 12 1.546875 C 6.203125 1.546875 1.5 6.25 1.5 12.046875 C 1.5 17.84375 6.203125 22.546875 12 22.546875 C 17.796875 22.546875 22.5 17.84375 22.5 12.046875 C 22.5 6.25 17.796875 1.546875 12 1.546875 Z M 17.078125 15.585938 C 17.148438 15.65625 17.183594 15.75 17.183594 15.847656 C 17.183594 15.945312 17.148438 16.046875 17.078125 16.109375 L 16.0625 17.128906 C 15.988281 17.203125 15.894531 17.234375 15.800781 17.234375 C 15.707031 17.234375 15.609375 17.199219 15.539062 17.128906 L 12 13.585938 L 8.464844 17.132812 C 8.394531 17.207031 8.296875 17.242188 8.203125 17.242188 C 8.109375 17.242188 8.011719 17.203125 7.941406 17.132812 L 6.929688 16.117188 C 6.859375 16.046875 6.820312 15.953125 6.820312 15.851562 C 6.820312 15.753906 6.859375 15.65625 6.929688 15.589844 L 10.476562 12.027344 L 6.917969 8.511719 C 6.773438 8.367188 6.773438 8.128906 6.917969 7.984375 L 7.929688 6.964844 C 8 6.894531 8.09375 6.859375 8.195312 6.859375 C 8.292969 6.859375 8.386719 6.894531 8.457031 6.964844 L 12.003906 10.46875 L 15.554688 6.964844 C 15.625 6.894531 15.71875 6.859375 15.816406 6.859375 C 15.914062 6.859375 16.007812 6.894531 16.078125 6.964844 L 17.089844 7.984375 C 17.234375 8.128906 17.234375 8.367188 17.089844 8.511719 L 13.53125 12.027344 Z M 17.078125 15.585938 "}))))))},L=h.a.nav(M||(M=Object(u.a)(["\n  width: 100%;\n  height: 55px;\n  border-bottom: 2px solid #f1f1f1;\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  background-color: #8989c2;\n  color: white;\n"]))),J=function(e){var t=e.updateQuery;return l.a.createElement(L,null,l.a.createElement(z,null),l.a.createElement(_,{placeholder:"wizeline",updateQuery:t}),l.a.createElement(O,{label:"Dark Mode"}),l.a.createElement(y,null))},$=h.a.div(Z||(Z=Object(u.a)(["\n\noverflow: hidden;\nposition: relative;\nwidth:100%;\n\n\n&:after {\n    padding-top: 56.25%;\n    display: block;\n    content: '';\n}\n\niframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 700px;\n}\n"]))),ee=h.a.div(P||(P=Object(u.a)(["\ndisplay:flex;\nflex-direction: column;\n"]))),te=function(e){var t=e.detailVideoId,i=e.detailTitle,n=e.detailDescription;return l.a.createElement(ee,null,l.a.createElement("h1",null,i),l.a.createElement("h4",null,n),l.a.createElement("br",null),l.a.createElement($,null,l.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?autoplay=0")})))},ie=function(e){var t=e.children;return l.a.createElement("div",null,t)},ne=i(6),ae=h.a.div(R||(R=Object(u.a)(["\n    background: #fff;\n    border-radius: 14px;\n    margin: 18px;\n    margin-top: 20px;\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\n"]))),le=h.a.div(H||(H=Object(u.a)(["\n  width: 100%;\n  height: 100px;\n  border-top-left-radius: 14px;\n  border-top-right-radius: 14px;\n  overflow: hidden;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),(function(e){return e.img})),oe=h.a.div(G||(G=Object(u.a)(["\n  color: #3c4560;\n  font-size: 20px;\n  font-weight: 300;\n"]))),de=h.a.div(U||(U=Object(u.a)(["\n  margin: 10px;\n  padding-top: 10px;\n  flex-direction: column;\n  align-items: center;\n  height: 60px;\n  background-image: url(",");\n"])),(function(e){return e.img})),re=function(e){var t=e.videoId,i=e.image,n=e.title,a=e.description,o=e.gotodetail;return l.a.createElement(ae,{onClick:function(){o(!0,t,n,a)}},l.a.createElement(le,{img:i}),l.a.createElement(de,null,l.a.createElement(oe,null,Object(ne.decode)(n))))},ue=i(7),he=h.a.button(N||(N=Object(u.a)(["\n    height: 50px;\n    margin: 5px;\n    padding:5px;\n"]))),ce=h.a.div(S||(S=Object(u.a)(["\n    display: flex;\n    flex-direction:row;\n"]))),se=function(e){var t=e.gotodetail;return l.a.createElement(he,{onClick:function(){t(!1)}},"Go back")},me=function(e){var t=e.gotodetail,i=e.detailVideoId,n=e.detailTitle,o=e.detailDescription,d=Object(a.useState)([]),u=Object(r.a)(d,2),h=u[0],c=u[1];Object(a.useEffect)((function(){console.log("detail loaded");var e="https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyBt65BxSmMrXBrziomK4ldf_QSN86rsCeo","&part=snippet&maxResults=10&order=date&type=video&relatedToVideoId=").concat(i);console.log("relatedUrl: ".concat(e)),fetch(e).then((function(e){return e.json()})).then((function(e){e.items?c(e.items):c(ue.a)}))}),[]);var s=h.map((function(e){return l.a.createElement(re,{videoId:e.id.videoId,title:e.snippet.title,image:e.snippet.thumbnails.high.url,gotodetail:t})}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(se,{gotodetail:function(){t(!1,"")}})),l.a.createElement(ce,null,l.a.createElement(te,{detailVideoId:i,detailTitle:n,detailDescription:o}),l.a.createElement("div",null,l.a.createElement(ie,null,s))))},pe=h.a.div(X||(X=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n"]))),ge=h.a.h1(V||(V=Object(u.a)(["\n  width: 100%;\n  text-align: center;\n  font-size: 4em;\n  margin: 10px;\n"]))),fe=function(e){var t=e.children,i=e.inDetail,n=e.gotodetail,a=e.detailVideoId,o=e.detailTitle,d=e.detailDescription,r=i?l.a.createElement(me,{gotodetail:n,detailVideoId:a,detailTitle:o,detailDescription:d}):l.a.createElement(pe,null,l.a.createElement(ge,null,"Welcome to the Challenge!"),t);return l.a.createElement(l.a.Fragment,null,r)},be=h.a.div(Y||(Y=Object(u.a)(["\n  background: #fff;\n  height: 345px;\n  width: 345px;\n  border-radius: 14px;\n  margin: 18px;\n  margin-top: 20px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\n"]))),ve=h.a.div(D||(D=Object(u.a)(["\n  width: 100%;\n  height: 160px;\n  border-top-left-radius: 14px;\n  border-top-right-radius: 14px;\n  overflow: hidden;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),(function(e){return e.img})),we=h.a.div(Q||(Q=Object(u.a)(["\n  margin: 10px;\n  padding-top: 10px;\n  flex-direction: column;\n  align-items: center;\n  height: 60px;\n  background-image: url(",");\n"])),(function(e){return e.img})),ye=h.a.div(F||(F=Object(u.a)(["\n  color: #3c4560;\n  font-size: 20px;\n  font-weight: 300;\n"]))),Te=h.a.p(K||(K=Object(u.a)(["\n  color: #b8b3c3;\n  font-size: 15px;\n  font-weight: 200;\n  margin-top: 4px;\n"]))),je=function(e){var t=e.videoId,i=e.image,n=e.title,a=e.description,o=e.gotodetail;return l.a.createElement(be,{onClick:function(){!function(e,t,i){console.log("Clicked detail: ".concat(e)),o(!0,e,t,i)}(t,n,a)}},l.a.createElement(ve,{img:i}),l.a.createElement(we,null,l.a.createElement(ye,null,Object(ne.decode)(n)),l.a.createElement(Te,null,Object(ne.decode)(a))))};var xe=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),i=t[0],n=t[1],o=Object(a.useState)("wizeline"),d=Object(r.a)(o,2),u=(d[0],d[1],Object(a.useState)(!1)),h=Object(r.a)(u,2),c=h[0],s=h[1],m=Object(a.useState)(""),p=Object(r.a)(m,2),g=p[0],f=p[1],b=Object(a.useState)(""),v=Object(r.a)(b,2),w=v[0],y=v[1],T=Object(a.useState)(""),j=Object(r.a)(T,2),x=j[0],z=j[1];Object(a.useEffect)((function(){console.log("useEffect"),fetch("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyBt65BxSmMrXBrziomK4ldf_QSN86rsCeo","&q=wizeline&part=snippet&maxResults=50&order=date&type=video")).then((function(e){return e.json()})).then((function(e){e.items?n(e.items):n(ue.a)})).catch((function(e){}))}),[]);var W=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;console.log("title: ".concat(i)),console.log("description: ".concat(n)),s(e),f(t),y(i),z(n)};return l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,{updateQuery:function(e){console.log("New query: ".concat(e)),fetch("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyBt65BxSmMrXBrziomK4ldf_QSN86rsCeo","&q=").concat(e,"&part=snippet&maxResults=50&order=date&type=video")).then((function(e){return e.json()})).then((function(e){e.items?n(e.items):n(ue.a),s(!1)}))}}),l.a.createElement(fe,{inDetail:c,detailVideoId:g,gotodetail:W,detailTitle:w,detailDescription:x},i?i.map((function(e){return l.a.createElement(je,{key:e.etag,videoId:e.id.videoId,title:e.snippet.title,description:e.snippet.description,image:e.snippet.thumbnails.high.url,gotodetail:W})})):null))};console.log("AIzaSyB8BF9jgGoo60DB2UOU8SYzt90AVs_GLdU");var ze=l.a.createElement(xe);d.a.render(ze,document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"a":[{"kind":"youtube#searchResult","etag":"_PVKwNJf_qw9nukFeRFOtQ837o0","id":{"kind":"youtube#channel","channelId":"UCPGzT4wecuWM0BH9mPiulXg"},"snippet":{"publishedAt":"2014-09-27T01:39:18Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline","description":"Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline\'s ...","thumbnails":{"default":{"url":"https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo"},"medium":{"url":"https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo"},"high":{"url":"https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"}},"channelTitle":"Wizeline","liveBroadcastContent":"upcoming","publishTime":"2014-09-27T01:39:18Z"}},{"kind":"youtube#searchResult","etag":"erqeM78PZDWIBe8qOGHGM2WdSE8","id":{"kind":"youtube#video","videoId":"nmXMgqjQzls"},"snippet":{"publishedAt":"2019-09-30T23:54:32Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Video Tour | Welcome to Wizeline Guadalajara","description":"Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-09-30T23:54:32Z"}},{"kind":"youtube#searchResult","etag":"7VY0u60YdqamyHOCAufd7r6qTsQ","id":{"kind":"youtube#video","videoId":"HYyRZiwBWc8"},"snippet":{"publishedAt":"2019-04-18T18:48:04Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline Guadalajara | Bringing Silicon Valley to Mexico","description":"Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-04-18T18:48:04Z"}},{"kind":"youtube#searchResult","etag":"by0t_nrT2TB-IQkQpgSWUVUwpKI","id":{"kind":"youtube#video","videoId":"Po3VwR_NNGk"},"snippet":{"publishedAt":"2019-03-05T03:52:55Z","channelId":"UCXmAOGwFYxIq5qrScJeeV4g","title":"Wizeline hace sentir a empleados como en casa","description":"En el 2014, Bismarck fund\xf3 Wizeline, compa\xf1\xeda tecnol\xf3gica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg","width":480,"height":360}},"channelTitle":"El Economista TV","liveBroadcastContent":"none","publishTime":"2019-03-05T03:52:55Z"}},{"kind":"youtube#searchResult","etag":"9-Ag8hUNYBLTjuli6eECa5GXV1Y","id":{"kind":"youtube#video","videoId":"7PtYNO6g7eI"},"snippet":{"publishedAt":"2019-04-12T20:00:45Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"We Are Wizeline","description":"Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/7PtYNO6g7eI/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/7PtYNO6g7eI/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/7PtYNO6g7eI/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-04-12T20:00:45Z"}},{"kind":"youtube#searchResult","etag":"pVQGVs72zHvpgl0ewNKX2DTOH6w","id":{"kind":"youtube#video","videoId":"YuW0CE_8i1I"},"snippet":{"publishedAt":"2018-12-13T21:51:39Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline Thrives in Mexico City","description":"Our vibrant Mexico City office is home to agile software engineers, talented UX designers, and brilliant data scientists. Learn about the rich history of Mexico City.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/YuW0CE_8i1I/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/YuW0CE_8i1I/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/YuW0CE_8i1I/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2018-12-13T21:51:39Z"}},{"kind":"youtube#searchResult","etag":"HlSqzTYW4HGFDNAOPCs6nIRXdq8","id":{"kind":"youtube#video","videoId":"CHzlSGRvWPs"},"snippet":{"publishedAt":"2017-03-08T22:41:43Z","channelId":"UCUsm-fannqOY02PNN67C0KA","title":"Wizeline","description":"El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el pa\xeds, a trav\xe9s de cursos ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/CHzlSGRvWPs/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/CHzlSGRvWPs/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/CHzlSGRvWPs/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Noticieros Televisa","liveBroadcastContent":"none","publishTime":"2017-03-08T22:41:43Z"}},{"kind":"youtube#searchResult","etag":"S1Ewc2IMjGC1VE5mH3AryZ43IPQ","id":{"kind":"youtube#video","videoId":"cjO2fJy8asM"},"snippet":{"publishedAt":"2018-09-25T17:45:19Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"A Day in the Life of an Engineering Manager at Wizeline","description":"Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando\'s passions ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2018-09-25T17:45:19Z"}},{"kind":"youtube#searchResult","etag":"jZZv6Ufu43kg1KzFlBOWDVKfPkY","id":{"kind":"youtube#video","videoId":"zClI9OjgKXM"},"snippet":{"publishedAt":"2020-04-24T20:22:17Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline Technical Writing Academy | Featuring Eduardo Ocejo","description":"","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/zClI9OjgKXM/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/zClI9OjgKXM/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/zClI9OjgKXM/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2020-04-24T20:22:17Z"}},{"kind":"youtube#searchResult","etag":"z5o2tIUROuWNZU5-1pzMPjoqQC8","id":{"kind":"youtube#video","videoId":"8bz9R61oY5o"},"snippet":{"publishedAt":"2019-09-26T15:28:46Z","channelId":"UCUP6qv-_EIL0hwTsJaKYnvw","title":"Silicon Valley en M\xe9xico","description":"Empresas de Silicon Valley buscan establecerse en M\xe9xico por el gran talento que hay en nuestro pa\xeds. Es una investigaci\xf3n de Roberto Dom\xednguez.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/8bz9R61oY5o/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/8bz9R61oY5o/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/8bz9R61oY5o/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Azteca Noticias","liveBroadcastContent":"none","publishTime":"2019-09-26T15:28:46Z"}},{"kind":"youtube#searchResult","etag":"Q4bqsw7kAYe6PV1sh494TQ-UJ8c","id":{"kind":"youtube#video","videoId":"7dJFraOqcoQ"},"snippet":{"publishedAt":"2019-07-02T17:40:20Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Why Wizeline? featuring Juan Pablo Villa in Mexico City","description":"Juan Pablo, known as Gianpa at Wizeline, is a software engineer in our Mexico City office. Gianpa focuses on Android apps, is an integral part of our culture, ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/7dJFraOqcoQ/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/7dJFraOqcoQ/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/7dJFraOqcoQ/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-07-02T17:40:20Z"}},{"kind":"youtube#searchResult","etag":"cXSMV8jX2lv1ue3UUnbW3xCmIU4","id":{"kind":"youtube#video","videoId":"w-Qwc_XJrWc"},"snippet":{"publishedAt":"2020-12-31T16:26:44Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline&#39;s 2020 Year in Review","description":"There\'s no doubt that 2020 has been an unprecedented year. However, amidst all the chaos, we achieved remarkable growth in various areas of our business.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/w-Qwc_XJrWc/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/w-Qwc_XJrWc/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/w-Qwc_XJrWc/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2020-12-31T16:26:44Z"}},{"kind":"youtube#searchResult","etag":"j9q9-dcRhTRDr0MCkJUMKdYt7u8","id":{"kind":"youtube#video","videoId":"rjir_cHTl5w"},"snippet":{"publishedAt":"2019-04-29T20:37:26Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Why Wizeline? featuring Hugo Lopez in Mexico City","description":"","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/rjir_cHTl5w/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/rjir_cHTl5w/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/rjir_cHTl5w/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-04-29T20:37:26Z"}},{"kind":"youtube#searchResult","etag":"MYfT5K8aZNvalrm2RR_HtylFffc","id":{"kind":"youtube#video","videoId":"DcFK1x3NHGY"},"snippet":{"publishedAt":"2016-09-01T18:02:11Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Why Wizeline? (We&#39;re Hiring in Mexico!)","description":"A quick look at why people join Wizeline, what motivates us as a team and what it\'s like to work in our Guadalajara office. Learn more and apply here: ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/DcFK1x3NHGY/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/DcFK1x3NHGY/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2016-09-01T18:02:11Z"}},{"kind":"youtube#searchResult","etag":"8dssV5QkZWEMmoo4DIq0k27aoIg","id":{"kind":"youtube#video","videoId":"3BzYWAqZgFw"},"snippet":{"publishedAt":"2019-07-02T17:45:28Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Why Wizeline? featuring Oswaldo Herrera in Mexico City","description":"Oswaldo is a software engineering in Wizeline\'s Mexico City office. He joined Wizeline because of the camaraderie and deep sense of commitment of our teams.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/3BzYWAqZgFw/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/3BzYWAqZgFw/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/3BzYWAqZgFw/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-07-02T17:45:28Z"}},{"kind":"youtube#searchResult","etag":"FMbfPlflDyPx4UgcA42igb97xlk","id":{"kind":"youtube#video","videoId":"3KVFmT-Tp2w"},"snippet":{"publishedAt":"2019-02-11T17:55:19Z","channelId":"UCd6MoB9NC6uYN2grvUNT-Zg","title":"Caso de \xc9xito AWS: Wizeline [Spanish]","description":"Central de socios de APN - https://amzn.to/2S7tIXM Fundada en 2014, Wizeline es una compa\xf1\xeda joven e innovadora que naci\xf3 en la nube para ofrecer soporte ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/3KVFmT-Tp2w/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/3KVFmT-Tp2w/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/3KVFmT-Tp2w/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Amazon Web Services","liveBroadcastContent":"none","publishTime":"2019-02-11T17:55:19Z"}},{"kind":"youtube#searchResult","etag":"0ww3Jk-j4d4TMsFNL213EhE0gGg","id":{"kind":"youtube#video","videoId":"aKuPmY2m1Ro"},"snippet":{"publishedAt":"2019-12-27T20:47:29Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline&#39;s 2019 Year in Review","description":"","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/aKuPmY2m1Ro/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/aKuPmY2m1Ro/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/aKuPmY2m1Ro/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-12-27T20:47:29Z"}},{"kind":"youtube#searchResult","etag":"8q-ajUMnXZm4gQzfSIiyrG2tA7A","id":{"kind":"youtube#video","videoId":"24sTHUyWhRM"},"snippet":{"publishedAt":"2016-10-05T00:03:32Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"[1 of 2] Wizeline CEO shares career lessons from Google","description":"Founder & CEO Bismarck Lepe on growth opportunities at Wizeline and his career-path experience as an early Google employee. Join our team!","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/24sTHUyWhRM/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/24sTHUyWhRM/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/24sTHUyWhRM/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2016-10-05T00:03:32Z"}},{"kind":"youtube#searchResult","etag":"4QA9Eisz9-HncD9EENUm0LV7hXI","id":{"kind":"youtube#video","videoId":"IxGc1gSqB3A"},"snippet":{"publishedAt":"2021-02-04T17:45:11Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline Data Engineering featuring Tania Reyes","description":"Tania discovered her interest in Big Data while working at Wizeline and took Wizeline Academy courses to skill up and join the data team. Now, she works on ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/IxGc1gSqB3A/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/IxGc1gSqB3A/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/IxGc1gSqB3A/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2021-02-04T17:45:11Z"}},{"kind":"youtube#searchResult","etag":"5_OftJlDpcfykudIpO7nn92Pq6s","id":{"kind":"youtube#video","videoId":"NP1gAnbeNno"},"snippet":{"publishedAt":"2019-11-12T20:45:18Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Wizeline Quere\u0301taro | Mexico&#39;s New Knowledge Economy (We&#39;re hiring!)","description":"A small but mighty (and growing) team, the Queretaro crew has taken ownership of growing the office and brand, speaking at university events, hosting tech ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/NP1gAnbeNno/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/NP1gAnbeNno/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/NP1gAnbeNno/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-11-12T20:45:18Z"}},{"kind":"youtube#searchResult","etag":"0XmhUGwmJNRilJR1S6VgOmdO9ho","id":{"kind":"youtube#video","videoId":"F6Krwu6lUc8"},"snippet":{"publishedAt":"2020-10-23T04:15:31Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Miriam Godinez | Women in Leadership at Wizeline","description":"Science and technology always caught Miriam\'s attention. One of her ultimate goals as a Senior Engineer Manager and Lead from the Mobile Team at Wizeline ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/F6Krwu6lUc8/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/F6Krwu6lUc8/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/F6Krwu6lUc8/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2020-10-23T04:15:31Z"}},{"kind":"youtube#searchResult","etag":"mM9qAwvNhFKGUv6mCIamuWVo0NE","id":{"kind":"youtube#video","videoId":"RFq7gfvhtCk"},"snippet":{"publishedAt":"2020-05-23T00:11:23Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Welcome Back to Wizeline Vietnam | Extended Version","description":"Thanks to swift government action, the COVID-19 situation in Vietnam has reached a point where businesses are able to return to work and reopen offices.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/RFq7gfvhtCk/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/RFq7gfvhtCk/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/RFq7gfvhtCk/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2020-05-23T00:11:23Z"}},{"kind":"youtube#searchResult","etag":"sVz5aNJZHehOf7qJCTLOLh1V40M","id":{"kind":"youtube#video","videoId":"E1Vq_A3WKK8"},"snippet":{"publishedAt":"2017-12-09T18:46:07Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"How does Wizeline work?","description":"Wizeline builds teams with a mix of technical and non-technical talent to deliver better products, faster. Learn more about our consulting services: ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/E1Vq_A3WKK8/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/E1Vq_A3WKK8/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/E1Vq_A3WKK8/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2017-12-09T18:46:07Z"}},{"kind":"youtube#searchResult","etag":"kiG9Z-CXE-mbZVBeom4qLurWb4w","id":{"kind":"youtube#video","videoId":"ZmkslANDz0Q"},"snippet":{"publishedAt":"2019-12-18T19:22:44Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"12 Wishes from Wizeline | Happy Holidays 2019","description":"","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/ZmkslANDz0Q/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/ZmkslANDz0Q/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/ZmkslANDz0Q/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-12-18T19:22:44Z"}},{"kind":"youtube#searchResult","etag":"bzZZYb96wT_IQHNp5sXm3VDUbXA","id":{"kind":"youtube#video","videoId":"Nss3EmTDD3s"},"snippet":{"publishedAt":"2017-12-08T18:13:27Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Why Wizeline?","description":"Hear from our employees directly about what excites them about their roles here at Wizeline. Wizeline wants to hire the best and the brightest to accelerate their ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/Nss3EmTDD3s/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/Nss3EmTDD3s/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/Nss3EmTDD3s/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2017-12-08T18:13:27Z"}}]}')}},[[18,1,2]]]);
//# sourceMappingURL=main.b6747a3d.chunk.js.map