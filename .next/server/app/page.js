(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},410:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>l.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(2073),t(9498),t(4877);var n=t(3158),s=t(7768),i=t(9396),l=t.n(i),a=t(3751),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);t.d(r,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2073)),"/Users/sgn04088/vite-react-practice/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,9498)),"/Users/sgn04088/vite-react-practice/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,4877,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/sgn04088/vite-react-practice/app/page.tsx"],u="/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5088:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,9047,23)),Promise.resolve().then(t.t.bind(t,744,23)),Promise.resolve().then(t.t.bind(t,8461,23)),Promise.resolve().then(t.t.bind(t,6947,23)),Promise.resolve().then(t.t.bind(t,8796,23)),Promise.resolve().then(t.t.bind(t,6493,23))},5988:(e,r,t)=>{Promise.resolve().then(t.bind(t,9320))},4981:()=>{},9320:(e,r,t)=>{"use strict";t.d(r,{default:()=>f});var n=t(6348);function s({name:e,onClick:r}){return n.jsx("button",{className:"my-button",onClick:r,children:e})}t(8046);var i=t(768);t(4774);let l=(0,i.forwardRef)(({onClick:e},r)=>n.jsx("div",{className:"tic-tac-toe-square",onClick:e,ref:r})),a=()=>{let e=[];for(let r=0;r<9;r++)e.push((0,i.useRef)(null));let[r,t]=(0,i.useState)("X"),[s,a]=(0,i.useState)(null),o=n=>{""===e[n].current.innerText&&(e[n].current.innerText=r,t("X"===r?"O":"X"))},c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];return(0,i.useEffect)(()=>{for(let r of(console.log("useEffect"),c)){let t=e[r[0]].current.innerText,n=0;for(let s of r){let r=e[s].current.innerText;if(console.log(t,r),!t||!r||t!==r)break;if(t===r){t=r,n++;continue}}if(3===n){a(t);break}[...Array(9)].every((r,t)=>!!e[t].current.innerText)&&a("Tie")}},[r]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["Winner: ",s]}),n.jsx("div",{className:"board",children:[...Array(9)].map((r,t)=>n.jsx(l,{ref:e[t],onClick:s?()=>{}:()=>o(t)},t))}),n.jsx("button",{onClick:()=>{a(null),[...Array(9)].map((r,t)=>{e[t].current.innerText=""})},children:"Restart"})]})};t(3391);let o=({value:e,length:r,onSquareClick:t})=>(0,n.jsxs)("button",{className:"square",style:{width:`${100/r}%`,fontSize:`${10/r}rem`},onClick:t,children:[" ",e]});function c(e,r){let t=d(e,r);return t?e[t[0]]:null}function d(e,r){for(let t of function(e){let r=[],t=[],n=[];for(let s=0;s<e;s++)r.push([...Array(e)].map((r,t)=>e*s+t)),r.push([...Array(e)].map((r,t)=>s+e*t)),t.push(s*(e+1)),n.push((s+1)*(e-1));return r.push(t),r.push(n),r}(r))if(-1!==t.reduce((r,t)=>e[r]&&e[r]===e[t]?t:-1))return t;return null}t(7834);let u=({boardSize:e})=>{let r;let t=Array(e**2).fill(""),[s,l]=(0,i.useState)(t),[a,d]=(0,i.useState)([t]),[u,x]=(0,i.useState)(!0);(0,i.useEffect)(()=>{l(t),d([t]),x(!0)},[e]);let m=c(s,e);return r=m?"Winner: "+m:s.every(e=>["X","O"].includes(e))?"Tie":"Next player: "+(u?"X":"O"),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"board-info",children:[n.jsx("b",{children:r}),n.jsx("button",{onClick:()=>{l(t),d([t])},children:"Restart"})]}),(0,n.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[n.jsx("div",{className:"board",children:[...Array(e)].map((r,t)=>n.jsx("div",{className:"board-row",children:[...Array(e)].map((r,i)=>n.jsx(o,{value:s[e*t+i],length:e,onSquareClick:s[e*t+i]?()=>{}:()=>(function(r){if(s[r]||c(s,e))return;let t=[...s];u?t[r]="X":t[r]="O",x(!u),l(t),d([...a.slice(0,s.reduce((e,r)=>r?e+1:e,0)),t])})(e*t+i)},e*t+i))},t))}),n.jsx("div",{className:"history-board",children:a.map((e,r)=>0===r?n.jsx("button",{onClick:()=>{l(a[r])},children:"Go to start"},r):(0,n.jsxs)("button",{onClick:()=>{l(a[r])},children:["Go to #",r," move"]},r))})]})]})};t(9637);let x=({value:e,length:r,onSquareClick:t,isBingo:s})=>n.jsx("button",{className:"square",style:{width:`${100/r}%`,fontSize:`${10/r}rem`,backgroundColor:s?"#3498db":"white",transition:"background-color 0.2s ease"},onClick:t,children:e}),m=["X","O"];t(2394);let h=({xIsNext:e,squares:r,onPlay:t,boardSize:s})=>{let i;let l=c(r,s),a=d(r,s);return i=l?"Winner: "+l:r.every(e=>{m.includes(e)})?"Tie":"Next player: "+(e?m[0]:m[1]),(0,n.jsxs)(n.Fragment,{children:[n.jsx("div",{className:"status",children:n.jsx("b",{children:i})}),n.jsx("div",{className:"board",children:[...Array(s)].map((i,o)=>n.jsx("div",{className:"board-row",children:[...Array(s)].map((i,c)=>{let d=s*o+c;return n.jsx(x,{value:r[d],length:s,onSquareClick:r[d]?()=>{}:()=>(function(n,s){if(r[n]||null!==s)return;let i=[...r];e?i[n]=m[0]:i[n]=m[1],t(i,n)})(d,l),isBingo:!!a&&a.includes(d)},d)})},o))})]})},p=({boardSize:e=3})=>{let r=Array(e**2).fill(""),[t,s]=(0,i.useState)([[r,-1]]),[l,a]=(0,i.useState)(0),[o,c]=(0,i.useState)(!0),d=t[l][0];(0,i.useEffect)(()=>{s([[r,-1]]),a(0)},[e]);let u=t.map((r,t)=>{let s,i,o;let c=r[1];return(c>=0&&(s=c%e+1,i=Math.floor(c/e)+1),o=t===l?`You are at move #${t} ${c>=0?`(${i}, ${s})`:""}`:t>0?`Go to move #${t}  ${c>=0?`(${i}, ${s})`:""}`:"Go to game start",t===l)?n.jsx("li",{children:n.jsx("span",{children:o})},t):n.jsx("li",{children:n.jsx("button",{onClick:()=>{a(t)},children:o},t)},t)});return(0,n.jsxs)("div",{className:"game",children:[n.jsx("div",{className:"game-board",children:n.jsx(h,{xIsNext:l%2==0,squares:d,onPlay:function(e,r){let n=[...t.slice(0,l+1),[e,r]];s(n),a(n.length-1)},boardSize:e})}),(0,n.jsxs)("div",{className:"game-info",children:[(0,n.jsxs)("div",{className:"sort-buttons",children:[n.jsx("button",{onClick:()=>c(!0),children:"Ascending"}),n.jsx("button",{onClick:()=>c(!1),children:"Descending"})]}),n.jsx("ol",{children:o?u:[...u].reverse()})]})]})};function j(e,r){switch(r){case"increment":return e+1;case"decrement":if(1===e)return e;return e-1;default:return e}}function f(){let[e,r]=(0,i.useReducer)(j,3),t=[{title:"Cabbage",id:1},{title:"Garlic",id:2},{title:"Apple",id:3}].map(e=>n.jsx("li",{children:e.title},e.id));return(0,n.jsxs)(n.Fragment,{children:[n.jsx("h1",{children:e}),n.jsx("div",{children:n.jsx(s,{name:"Increment",onClick:()=>r("increment")})}),n.jsx("div",{children:n.jsx(s,{name:"Decrement",onClick:()=>r("decrement")})}),n.jsx("ul",{children:t}),n.jsx("div",{className:"my-game",children:n.jsx(a,{})}),n.jsx("div",{className:"my-game",children:n.jsx(u,{boardSize:e})}),n.jsx("div",{className:"game",children:n.jsx(p,{boardSize:e})})]})}t(5792)},9498:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>s});var n=t(8909);let s={title:"My Next App",description:"Generated by create next app"};function i({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[n.jsx("head",{children:n.jsx("title",{children:"My Next App"})}),n.jsx("body",{children:n.jsx("div",{id:"root",children:e})})]})}},2073:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l,generateStaticParams:()=>i});var n=t(8909);t(8056);let s=(0,t(8965).createProxy)(String.raw`/Users/sgn04088/vite-react-practice/components/MyApp.tsx#default`);function i(){return[{slug:[""]}]}function l(){return n.jsx(s,{})}},5792:()=>{},8046:()=>{},4774:()=>{},7834:()=>{},3391:()=>{},2394:()=>{},9637:()=>{},8056:()=>{}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[315],()=>t(410));module.exports=n})();