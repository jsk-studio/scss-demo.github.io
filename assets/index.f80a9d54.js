import{p as e,a as l,r as o,o as t,c as a,b as d,u as s,d as c,e as i,i as v,F as n,f as r,w as m,g as u,h as w,j as f,k as p,t as h,l as y,m as O,n as b}from"./vendor.9d943b50.js";const x={x:0,y:0};function g(){x.y=window.scrollY,x.x=window.scrollX,document.body.style.position="fixed",document.body.style.left=0,document.body.style.top=0,document.body.style.right=0,document.body.style.bottom=0,x.x>0&&(document.body.style.left=`-${x.x}px`),x.y>0&&(document.body.style.top=`-${x.y}px`),document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&(document.body.style.overflowY="scroll"),document.body.scrollWidth>(window.innerWidth||document.documentElement.clientWidth)&&(document.body.style.overflowX="scroll")}e("data-v-6e998065");const k={class:"header"};l();const L={expose:[],setup(e){o({lock:""});const l=location.search.includes("record=1"),v=location.pathname;if(l){const e=document.createElement("style");e.innerText="html,body,#app{overflow:visible;}\n#app{height:auto}",document.head.appendChild(e)}return c("onLock",(e=>{e?l?g():document.getElementById("app").className="lock":l?(document.body.setAttribute("style",""),window.scrollTo(x.x,x.y),x.x=0,x.y=0):document.getElementById("app").className=""})),(e,o)=>{const c=i("router-view");return t(),a("div",{class:["scroll-column",{inline:!s(l)}]},[d("div",k,[d("a",{href:s(l)?s(v):s(v)+"?record=1"},"CHANGE SCROLL MODE",8,["href"])]),d(c)],2)}},__scopeId:"data-v-6e998065"};const T=w();e("data-v-d8c22e26");const _=f(" 1.Vertial Scroll Not Overflow "),S=f(" 2.Vertial Scroll Overflow "),A=d("div",null,"3. Flow Layout",-1),B={class:"flow"},C=d("div",null,"4. Flow Fill Layout And Reactive (Auto calcute height to equal width )",-1),E={class:"flow-fill"},F={class:"flow__fill"},H={key:0,class:"flow-bottom overflow-1"},I={key:1,class:"flow-bottom overflow-2"},N={key:2,class:"flow-bottom"},R=p('<div data-v-d8c22e26>5. Theme Base</div><div class="theme-app" data-v-d8c22e26><div class="theme-text" data-v-d8c22e26>Theme Text</div></div><div data-v-d8c22e26>6. Theme Light</div><div class="theme-app light" data-v-d8c22e26><div class="theme-text" data-v-d8c22e26>Theme Text</div></div><div data-v-d8c22e26>7. Theme Dark</div><div class="theme-app dark" data-v-d8c22e26><div class="theme-text" data-v-d8c22e26>Theme Text</div></div><div data-v-d8c22e26>8. Static Animation</div><div class="static-anim" data-v-d8c22e26><div class="static-image-anim" data-v-d8c22e26></div><div class="static-image-anim-rotate" data-v-d8c22e26></div></div><div data-v-d8c22e26>9. Image Animation</div><div class="image-anim" data-v-d8c22e26><div class="image-anim-vertial" data-v-d8c22e26></div><div class="image-anim-5x4" data-v-d8c22e26></div></div><div data-v-d8c22e26>10. Buttons, Labels</div><div class="buttons-labels" data-v-d8c22e26><div class="btn-1" data-v-d8c22e26>Button1</div><span class="label-1" data-v-d8c22e26>Label1</span><span class="label-1" data-v-d8c22e26>Label1</span><span class="label-1" data-v-d8c22e26>Label1</span><span class="text-1" data-v-d8c22e26>Text1</span></div><div data-v-d8c22e26>11. Scroll Row Overflow</div>',13),W={class:"scroll-row"},D=d("div",null,"12. Scroll Row Not Overflow",-1),M={class:"scroll-row"},j=d("div",null,"13. Full Screen Modal (For Test)",-1),V={class:"full-screen-modal"},X={key:0,class:"modal-touchstop"},Y=d("input",null,null,-1);l();const $={expose:[],setup(e){const l=new Array(20),c=o({active:""}),w=v("onLock"),p=e=>{c.active="",w(!1)};return(e,o)=>{const v=i("router-link");return t(),a(n,null,[d(v,{to:"/scroll"},{default:T((()=>[_])),_:1}),d(v,{to:"/scroll"},{default:T((()=>[S])),_:1}),A,d("div",B,[(t(!0),a(n,null,r(s(l).slice(0,8),((e,l)=>(t(),a("div",null,h(l+1),1)))),256))]),C,d("div",E,[(t(!0),a(n,null,r(s(l).slice(0,7),((e,l)=>(t(),a("div",null,[d("div",F,h(l+1),1),0===l?(t(),a("div",H," Bottom Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow ")):1===l?(t(),a("div",I," Bottom Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow Overflow ")):(t(),a("div",N,"Bottom"))])))),256))]),R,d("div",W,[(t(!0),a(n,null,r(s(l).slice(0,8),((e,l)=>(t(),a("div",null,h(l+1),1)))),256))]),D,d("div",M,[(t(!0),a(n,null,r(s(l).slice(0,3),((e,l)=>(t(),a("div",null,h(l+1),1)))),256))]),j,d("div",V,[d("span",{onClick:o[1]||(o[1]=e=>{return l="modal-scroll-notouch",c.active=l,void w(!0);var l})},"SHOW_SCROLL_MODAL_NOTOUCH")]),"modal-scroll-notouch"===s(c).active?(t(),a("div",X,[d("div",{class:"modal-backdrop-notouch",onClick:p},[d("div",{class:"modal-scroll",onClick:o[2]||(o[2]=m((()=>{}),["stop"]))},[(t(!0),a(n,null,r(s(l).slice(0,8),((e,l)=>(t(),a("div",null,[f(h(l+1),1),Y])))),256))])])])):u("",!0)],64)}},__scopeId:"data-v-d8c22e26"};e("data-v-c00f6f34");const q={class:"home"};l();const G={expose:[],setup:e=>(e,l)=>(t(),a("div",q,[d($)])),__scopeId:"data-v-c00f6f34"},U={};U.render=function(e,l){return" 232331231 "};var z=[{path:"/",component:G},{path:"/scroll",component:U}];const J=y({history:O(),routes:z});b(L).use(J).mount("#app");
