import{p as e,a as l,r as o,o as t,c as a,b as s,u as d,t as i,d as v,e as c,i as n,F as r,f,w as u,g as m,h as w,j as p,k as h,l as y,m as O,n as b}from"./vendor.9d943b50.js";const x={x:0,y:0};function g(){x.y=window.scrollY,x.x=window.scrollX,document.body.style.position="fixed",document.body.style.left=0,document.body.style.top=0,document.body.style.right=0,document.body.style.bottom=0,document.body.style.touchAction="none",x.x>0&&(document.body.style.left=`-${x.x}px`),x.y>0&&(document.body.style.top=`-${x.y}px`),document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&(document.body.parentNode.style.overflowY="scroll"),document.body.scrollWidth>(window.innerWidth||document.documentElement.clientWidth)&&(document.body.parentNode.style.overflowX="scroll")}e("data-v-6f35833c");const k={class:"header"};l();const L={expose:[],setup(e){o({lock:""});const l=location.search.includes("record=1"),n=location.pathname;if(l){const e=document.createElement("style");e.innerText="html,body,#app{overflow:visible;}\n#app{height:auto}",document.head.appendChild(e)}return v("onLock",(e=>{const o=document.getElementById("app");e?l?g():o.className="lock":l?(document.body.setAttribute("style",""),document.body.parentNode.setAttribute("style",""),window.scrollTo(x.x,x.y),x.x=0,x.y=0):o.className=""})),(e,o)=>{const v=c("router-view");return t(),a("div",{class:["scroll-column",{inline:!d(l)}]},[s("div",k,[s("a",{href:d(l)?d(n):d(n)+"?record=1"},"CHANGE SCROLL MODE RECORD: "+i(d(l)),9,["href"])]),s(v)],2)}},__scopeId:"data-v-6f35833c"};const T=w();e("data-v-0e44fe08");const _=p(" 1.Vertial Scroll Not Overflow "),A=p(" 2.Vertial Scroll Overflow "),C=s("div",null,"3. Flow Layout",-1),N={class:"flow"},S=s("div",null,"4. Flow Fill Layout And Reactive (Auto calcute height to equal width )",-1),B={class:"flow-fill"},E={class:"flow__fill"},R={key:0,class:"flow-bottom overflow-1"},F={key:1,class:"flow-bottom overflow-2"},H={key:2,class:"flow-bottom"},I=h('<div data-v-0e44fe08>5. Theme Base</div><div class="theme-app" data-v-0e44fe08><div class="theme-text" data-v-0e44fe08>Theme Text</div></div><div data-v-0e44fe08>6. Theme Light</div><div class="theme-app light" data-v-0e44fe08><div class="theme-text" data-v-0e44fe08>Theme Text</div></div><div data-v-0e44fe08>7. Theme Dark</div><div class="theme-app dark" data-v-0e44fe08><div class="theme-text" data-v-0e44fe08>Theme Text</div></div><div data-v-0e44fe08>8. Static Animation</div><div class="static-anim" data-v-0e44fe08><div class="static-image-anim" data-v-0e44fe08></div><div class="static-image-anim-rotate" data-v-0e44fe08></div></div><div data-v-0e44fe08>9. Image Animation</div><div class="image-anim" data-v-0e44fe08><div class="image-anim-vertial" data-v-0e44fe08></div><div class="image-anim-5x4" data-v-0e44fe08></div></div><div data-v-0e44fe08>10. Buttons, Labels</div><div class="buttons-labels" data-v-0e44fe08><div class="btn-1" data-v-0e44fe08>Button1</div><span class="label-1" data-v-0e44fe08>Label1</span><span class="label-1" data-v-0e44fe08>Label1</span><span class="label-1" data-v-0e44fe08>Label1</span><span class="text-1" data-v-0e44fe08>Text1</span></div><div data-v-0e44fe08>11. Scroll Row Overflow</div>',13),D={class:"scroll-row"},W=s("div",null,"12. Scroll Row Not Overflow",-1),M={class:"scroll-row"},j=s("div",null,"13. Full Screen Modal (For Test)",-1),V={class:"full-screen-modal"},X={key:0,class:"modal-touchstop"},Y=s("input",null,null,-1);l();const $={expose:[],setup(e){const l=new Array(20),v=o({active:""}),w=n("onLock"),h=e=>{v.active="",w(!1)};return(e,o)=>{const n=c("router-link");return t(),a(r,null,[s(n,{to:"/scroll"},{default:T((()=>[_])),_:1}),s(n,{to:"/scroll"},{default:T((()=>[A])),_:1}),C,s("div",N,[(t(!0),a(r,null,f(d(l).slice(0,8),((e,l)=>(t(),a("div",null,i(l+1),1)))),256))]),S,s("div",B,[(t(!0),a(r,null,f(d(l).slice(0,7),((e,l)=>(t(),a("div",null,[s("div",E,i(l+1),1),0===l?(t(),a("div",R," Bottom Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow ")):1===l?(t(),a("div",F," Bottom Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow ")):(t(),a("div",H,"Bottom"))])))),256))]),I,s("div",D,[(t(!0),a(r,null,f(d(l).slice(0,8),((e,l)=>(t(),a("div",null,i(l+1),1)))),256))]),W,s("div",M,[(t(!0),a(r,null,f(d(l).slice(0,3),((e,l)=>(t(),a("div",null,i(l+1),1)))),256))]),j,s("div",V,[s("span",{onClick:o[1]||(o[1]=e=>{return l="modal-scroll-notouch",v.active=l,void w(!0);var l})},"SHOW_SCROLL_MODAL_NOTOUCH")]),"modal-scroll-notouch"===d(v).active?(t(),a("div",X,[s("div",{class:"modal-backdrop-notouch",onClick:h},[s("div",{class:"modal-scroll",onClick:o[2]||(o[2]=u((()=>{}),["stop"]))},[(t(!0),a(r,null,f(d(l).slice(0,8),((e,l)=>(t(),a("div",null,[p(i(l+1),1),Y])))),256))])])])):m("",!0)],64)}},__scopeId:"data-v-0e44fe08"};e("data-v-c00f6f34");const q={class:"home"};l();const G={expose:[],setup:e=>(e,l)=>(t(),a("div",q,[s($)])),__scopeId:"data-v-c00f6f34"},U={};U.render=function(e,l){return" 232331231 "};var z=[{path:"/",component:G},{path:"/scroll",component:U}];const J=y({history:O(),routes:z});b(L).use(J).mount("#app");
