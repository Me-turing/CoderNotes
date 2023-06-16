import{u as U,g as ee,m as B,n as M,X as le,p as ae,t as se,i as x,j as D,q as te,x as X,l as a,y as _,z as F,T as I,A as re,B as ue,D as ie,E as ne,R as oe,O as ce,s as ve,k as pe,F as he,G as ye,H as de,I as me,J as b,K as fe}from"./app-a48529f7.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=U(ge,[]),He=()=>{const{queryHistoryCount:r}=b,n=r>0;return{enabled:n,queryHistory:y,addQueryHistory:t=>{n&&(y.value.length<r?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,r-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:E}=b,d=U(Re,[]),Qe=()=>{const r=B(),n=E>0,t=s=>r.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:n,resultHistory:d,addResultHistory:s=>{if(n){const u={link:t(s),display:s.display};"header"in s&&(u.header=s.header),d.value.length<E?d.value=[u,...d.value]:d.value=[u,...d.value.slice(0,E-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=r=>{const n=oe(),t=M(),{search:s,terminate:u}=ce(),f=x(!1),g=ve([]);return pe(()=>{const m=()=>{g.value=[],f.value=!1},w=fe(H=>{f.value=!0,H?s({type:"search",query:H,locale:t.value,options:n}).then(h=>{g.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},b.searchDelay);X([r,t],()=>w(r.value),{immediate:!0}),he(()=>{u()})}),{searching:f,results:g}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(r,{emit:n}){const t=B(),s=M(),u=le(ae),{enabled:f,addQueryHistory:g,queryHistory:m,removeQueryHistory:w}=He(),{enabled:H,resultHistory:h,addResultHistory:O,removeResultHistory:Y}=Qe(),P=f||H,S=se(r,"query"),{results:R,searching:j}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),T=D(()=>P&&(m.value.length>0||h.value.length>0)),C=D(()=>R.value.length>0),q=D(()=>R.value[p.value]||null),$=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,z=()=>{const{isQuery:e,index:l}=o.value;l===0?o.value={isQuery:!e,index:e?h.value.length-1:m.value.length-1}:o.value={isQuery:e,index:l-1}},G=()=>{const{isQuery:e,index:l}=o.value;l===(e?m.value.length-1:h.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:l+1}},J=()=>{p.value=p.value>0?p.value-1:R.value.length-1,c.value=q.value.contents.length-1},K=()=>{p.value=p.value<R.value.length-1?p.value+1:0,c.value=0},V=()=>{c.value<q.value.contents.length-1?c.value=c.value+1:K()},N=()=>{c.value>0?c.value=c.value-1:J()},A=e=>e.map(l=>ye(l)?l:a(l[0],l[1])),W=e=>{if(e.type==="customField"){const l=de[e.index]||"$content",[i,k=""]=me(l)?l[s.value].split("$content"):l.split("$content");return e.display.map(v=>a("div",A([i,...v,k])))}return e.display.map(l=>a("div",A(l)))},Q=()=>{p.value=0,c.value=0,n("updateQuery",""),n("close")};return te("keydown",e=>{if(r.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const l=q.value.contents[c.value],i=$(l);g(r.query),O(l),t.push(i),Q()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:l}=o.value;o.value.isQuery?(n("updateQuery",m.value[l]),e.preventDefault()):(t.push(h.value[l].link),Q())}}}}),X([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:S.value?!C.value:!T.value}],id:"search-pro-results"},S.value===""?P?T.value?[f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.history),m.value.map((e,l)=>a("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===l}],onClick:()=>{n("updateQuery",e)}},[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(l)}})]))])):null,H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.history),h.value.map((e,l)=>a(I,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===l}],onClick:()=>{Q()}},()=>[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(i=>A(i)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),Y(l)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:j.value?a(re,{hint:u.value.searching}):C.value?a("ul",{class:"search-pro-result-list"},R.value.map(({title:e,contents:l},i)=>{const k=p.value===i;return a("li",{class:["search-pro-result-list-item",{active:k}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),l.map((v,Z)=>{const L=k&&c.value===Z;return a(I,{to:$(v),class:["search-pro-result-item",{active:L,"aria-selected":L}],onClick:()=>{g(r.query),O(v),Q()}},()=>[v.type==="text"?null:a(v.type==="title"?ue:v.type==="heading"?ie:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?a("div",{class:"content-header"},v.header):null,a("div",W(v))])])})])})):u.value.emptyResult)}});export{we as default};
