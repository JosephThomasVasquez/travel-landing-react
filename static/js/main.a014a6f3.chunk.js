(this["webpackJsonptravel-landing-react"]=this["webpackJsonptravel-landing-react"]||[]).push([[0],{11:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(5),o=r.n(s),i=(r(11),r(3)),l=r(2),c=r(0),d=function(){var e=Object(a.useState)({initial:!1,open:null,menuDisplay:"Menu"}),t=Object(i.a)(e,2),r=t[0],n=t[1],s=function(e,t,r,a,n){l.a.from([e,t,r,a,n],{duration:.15,y:100,delay:.25,ease:"power4.inOut",stagger:{amount:.25}})},o=Object(a.useRef)(null),d=Object(a.useRef)(null),x=Object(a.useRef)(null),b=Object(a.useRef)(null),m=Object(a.useRef)(null),g=Object(a.useRef)(null),h=Object(a.useRef)(null),j=Object(a.useRef)(null);Object(a.useEffect)((function(){var e,t;!1===r.open||!1===r.initial?(e=d,t=x,l.a.to([e,t],{duration:.25,height:0,ease:"power4.inOut",stagger:{amount:.25}}),l.a.to(o,{duration:.9,css:{display:"none"}}),l.a.to([d,x],{duration:1,opacity:1,height:"100%"}),s(b,m,g,h,j)):(!0===r.open||!0===r.open&&null===r.initial)&&(l.a.to(o,{duration:0,css:{display:"block"}}),l.a.to([d,x],{duration:0,opacity:1,height:"100%"}),function(e,t){l.a.from([e,t],{duration:.25,height:0,transformOrigin:"right top",ease:"power4.inOut",stagger:{amount:.25}})}(d,x),s(b,m,g,h,j))}),[r]);return Object(c.jsxs)("nav",{className:"flex justify-between items-center h-24 bg-sky-blue text-primary-orange relative",role:"navigation",children:[Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"/",className:"rounded font-semibold text-3xl text-primary-orange inline-block ml-10 p-4 hover:bg-primary-orange-100 transition-all duration-500 ease-in-out",children:"TravelRun"})}),Object(c.jsxs)("div",{className:"pr-8 mr-10 absolute inset-y-0 right-0 md:block hidden",children:[Object(c.jsx)("a",{href:"/",className:"font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out",children:"Home"}),Object(c.jsx)("a",{href:"/features",className:"font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out",children:"Features"}),Object(c.jsx)("a",{href:"/experiences",className:"font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out",children:"Experiences"}),Object(c.jsx)("a",{href:"/contact",className:"font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out",children:"Contact"}),Object(c.jsx)("a",{href:"/contact",className:"font-semibold bg-primary-orange text-gray-100 inline-block mt-7 ml-5 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out",children:"Login"})]}),Object(c.jsxs)("div",{className:"flex items-center justify-center mt-4 px-5 cursor-pointer absolute inset-y-0 right-0 w-16 h-16 md:hidden hover:bg-primary-orange-100 transition-all duration-500 ease-in-out rounded-full shadow select-none",onClick:function(){!1!==r.initial&&r.open||n({initial:null,open:!0,menuDisplay:"Close"}),!0===r.open&&n({open:!r.open,menuDisplay:"Menu"})},children:[Object(c.jsxs)("div",{ref:function(e){return o=e},className:"menu-wrapper bg-sky-blue z-50",children:[Object(c.jsx)("div",{ref:function(e){return d=e},className:"bg-red-500 w-full h-auto"}),Object(c.jsxs)("div",{ref:function(e){return x=e},className:"bg-sky-blue mt-20 absolute inset-y-0 right-0 w-screen z-50",children:[Object(c.jsx)("a",{ref:function(e){return b=e},href:"/",className:"bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out z-50",children:"Home"}),Object(c.jsx)("a",{ref:function(e){return m=e},href:"/features",className:"bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out z-50",children:"Features"}),Object(c.jsx)("a",{ref:function(e){return g=e},href:"/experiences",className:"bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out z-50",children:"Experiences"}),Object(c.jsx)("a",{ref:function(e){return h=e},href:"/contact",className:"bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out z-50",children:"Contact"}),Object(c.jsx)("a",{ref:function(e){return j=e},href:"/contact",className:"bg-sky-blue font-semibold text-center bg-primary-orange text-gray-100 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out z-50",children:"Login"})]})]}),Object(c.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})]})]})},x=r.p+"static/media/pexels-artem-beliaikin-2106776_Retouch_04.3a8604d8.jpg",b=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2);t[0],t[1];return Object(c.jsx)("div",{className:"flex items-center absolute top-64 right-0 mr-8",children:Object(c.jsxs)("div",{className:"container w-10",children:[Object(c.jsx)("div",{className:"font-bold text-2xl text-center text-gray-700 my-6",children:"01"}),Object(c.jsx)("div",{className:"bg-gray-700 w-3 h-3 rounded-full mx-auto my-6"}),Object(c.jsx)("div",{className:"bg-primary-orange w-3 h-3 rounded-full mx-auto my-6"}),Object(c.jsx)("div",{className:"bg-gray-700 w-3 h-3 rounded-full mx-auto my-6"}),Object(c.jsx)("div",{className:"font-bold text-2xl text-center text-gray-700 mt-6 mb-12",children:"05"}),Object(c.jsx)("div",{className:"",children:Object(c.jsx)("svg",{className:"w-6 h-6 mx-auto text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 15l7-7 7 7"})})}),Object(c.jsx)("div",{className:"",children:Object(c.jsx)("svg",{className:"w-6 h-6 mx-auto text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M19 9l-7 7-7-7"})})})]})})},m=function(){var e=Object(a.useState)({img:x}),t=Object(i.a)(e,2),r=t[0],n=(t[1],Object(a.useState)({begin:"2021/5/10",end:"2021/7/15"})),s=Object(i.a)(n,2),o=(s[0],s[1],function(e){});return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:r.img,alt:"",className:"static"}),Object(c.jsx)("div",{className:"flex ml-24 lg:w-4/6 md:w-6/12 sm:w-6/12 absolute lg:top-48 md:top-40 sm:top-32 h-80 ...",children:Object(c.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[Object(c.jsx)("h1",{className:"block font-serif font-bold text-gray-800 lg:text-7xl md:text-5xl sm:text-3xl h-48",children:"Get away for once and see what you're missing!"}),Object(c.jsx)("div",{className:"row-span-1 ...",children:Object(c.jsxs)("div",{className:"lg:mt-10 sm:mt-1",children:[Object(c.jsx)("i",{className:"fas fa-play text-primary-orange flex items-center justify-center rounded-full bg-sky-blue hover:bg-primary-orange hover:text-sky-blue w-16 h-16  transition-all duration-500 ease-in-out"}),Object(c.jsx)("div",{className:"font-bold relative bottom-11 left-20",children:"Watch Video"})]})})]})}),Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:"search-packages flex items-center float-right bg-sky-blue py-8 w-max relative bottom-32 h-32 ...",children:Object(c.jsxs)("div",{className:"grid grid-rows-3 grid-flow-col gap-4",children:[Object(c.jsxs)("div",{className:"row-span-3 col-span-3 ... px-8",children:[Object(c.jsxs)("h2",{className:"flex items-center",children:["Location",Object(c.jsx)("span",{children:Object(c.jsx)("svg",{className:"w-4 h-4 text-primary-orange",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),Object(c.jsx)("input",{type:"text",name:"location",id:"location",placeholder:"Italy"})]}),Object(c.jsxs)("div",{className:"row-span-3 col-span-3 ... px-8",children:[Object(c.jsxs)("h2",{className:"flex items-center",children:["Date",Object(c.jsx)("span",{children:Object(c.jsx)("svg",{className:"w-4 h-4 text-primary-orange",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),Object(c.jsxs)("div",{className:"grid grid-rows-1 grid-flow-col gap-4",children:[Object(c.jsx)("div",{children:" Begin: "}),Object(c.jsx)("input",{type:"date",name:"begin",id:"begin",className:"m-auto",palceholder:"2021/5/10",onChange:o})]}),Object(c.jsxs)("div",{className:"grid grid-rows-1 grid-flow-col gap-4",children:[Object(c.jsx)("div",{children:" End: "}),Object(c.jsx)("input",{type:"date",name:"end",id:"end",className:"m-auto",onChange:o})]})]}),Object(c.jsxs)("div",{className:"row-span-3 col-span-3 ... px-8 max-w-3/12",children:[Object(c.jsxs)("h2",{className:"flex items-center",children:["Average Price",Object(c.jsx)("span",{children:Object(c.jsx)("svg",{className:"w-4 h-4 text-primary-orange",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),Object(c.jsx)("input",{type:"text",name:"average-price",id:"average-price",placeholder:"$159 - $299"})]}),Object(c.jsx)("div",{className:"row-span-3 col-span-3 ... px-8 max-w-3/12",children:Object(c.jsx)("button",{className:"font-semibold bg-primary-orange text-gray-100 inline-block p-6 px-10 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out",children:"Search"})})]})})]})},g=r(6),h=r.p+"static/media/pexels-archie-binamira-672358.9ab4deef.jpg",j=r.p+"static/media/pexels-te-lensfix-1371360.964f4511.jpg";l.a.registerPlugin(g.a);var u=function(){var e=Object(a.useRef)(null),t=(Object(a.useRef)(null),Object(a.useRef)([]));t.current=[];var r=function(r){r&&!t.current.includes(r)&&t.current.push(r),console.log(t.current),console.log(e)};return Object(a.useEffect)((function(){t.current.forEach((function(e,t){t%2===0?l.a.fromTo(e,{x:-500,autoAlpha:0},{duration:1.5,autoAlpha:1,x:0,ease:"power1.inOut",scrollTrigger:{id:"section-".concat(t+1),trigger:e,start:"top center+=200",toggleActions:"play none none reverse",markers:!0}}):l.a.fromTo(e,{x:500,autoAlpha:0},{duration:1.5,autoAlpha:1,x:0,ease:"power1.inOut",scrollTrigger:{id:"section-".concat(t+1),trigger:e,start:"top center+=200",toggleActions:"play none none reverse",markers:!0}})}))}),[]),Object(c.jsx)("section",{className:"",children:Object(c.jsxs)("div",{className:"grid grid-rows-2 grid-cols-12 gap-8 w-screen",children:[Object(c.jsxs)("div",{className:"md:col-start-1 md:col-end-7 sm:col-span-12 ... h-96 h-auto",ref:r,children:[Object(c.jsx)("div",{className:"block font-mono font-bold text-primary-orange lg:text-2xl md:text-5xl sm:text-3xl mb-8 pl-16 ",children:"ABOUT US"}),Object(c.jsx)("div",{className:"block font-serif font-bold text-gray-800 lg:text-6xl md:text-5xl sm:text-3xl px-16",children:"Explore All Corners Of The World With Us"})]}),Object(c.jsxs)("div",{className:"md:col-start-7 md:col-end-13 sm:col-span-12 ... bg-primary-orange-100 h-96 p-16 h-auto",ref:r,children:[Object(c.jsx)("div",{className:"block font-bold text-gray-700 lg:text-2xl md:text-1xl sm:text-1xl mb-8 pl-8",children:"We enjoy creating a variety of destinations and creating experience packages so customers can always find something new and exciting or just a change of view for relaxation."}),Object(c.jsx)("div",{className:"block font-serif font-bold text-gray-800 lg:text-2xl md:text-2xl sm:text-2xl pl-8",children:Object(c.jsx)("button",{className:"font-semibold bg-primary-orange text-gray-100 inline-block p-6 px-10 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out",children:"Learn More"})})]}),Object(c.jsx)("div",{className:"md:col-start-1 md:col-end-7 sm:col-span-12 ...",children:Object(c.jsx)("div",{className:"",ref:r,children:Object(c.jsx)("img",{src:j,alt:""})})}),Object(c.jsx)("div",{className:"md:col-start-7 md:col-end-13 sm:col-span-12 ... bg-sky-blue shadow-lg static",ref:r,children:Object(c.jsxs)("div",{className:"rounded overflow-hidden",children:[Object(c.jsx)("img",{src:h,alt:"",className:"object-cover"}),Object(c.jsxs)("div",{className:"relative bottom-32 bg-sky-blue",children:[Object(c.jsx)("div",{className:"flex items-center justify-center font-bold font-serif text-8xl text-primary-orange bg-sky-blue rounded-full relative bottom-12 left-16 pt-6 w-24 h-24 shadow",children:Object(c.jsx)("div",{className:"mt-4",children:'"'})}),Object(c.jsx)("span",{className:"font-bold text-4xl text-gray-700",children:"The Green Mountains"}),Object(c.jsx)("span",{className:"block text-2xl text-gray-700",children:"Explore the land of vast lush greenery and clear skies."})]})]})})]})})};var p=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(m,{}),Object(c.jsx)(u,{})]})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;r(e),a(e),n(e),s(e),o(e)}))};o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.a014a6f3.chunk.js.map