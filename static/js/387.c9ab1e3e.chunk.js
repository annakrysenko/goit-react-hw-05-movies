"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(861),c=n(439),r=n(757),o=n.n(r),u=n(791),i=n(87),s="Gallery_list__QACVh",l="Gallery_item__95Mj2",f="Gallery_link__Xrq3j",h=n(184),m=function(e){var t=e.movies,n=e.location,a=n.pathname+n.search;return(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:s,children:t.map((function(e){return(0,h.jsx)("li",{className:l,children:(0,h.jsx)(i.OL,{to:"".concat(e.id),state:{back:"".concat(a)},className:f,children:e.title})},e.id)}))})})},p=n(323),_=n(134),v="Searchbar_form__D-hp5",d="Searchbar_labelInput__Ozr2Y",g="Searchbar_input__19umw",x="Searchbar_submit__IGhcJ",b=function(e){var t=e.getMoviesFromInput,n=(0,u.useState)(""),a=(0,c.Z)(n,2),r=a[0],o=a[1],i=(0,u.useState)(1),s=(0,c.Z)(i,1)[0];return(0,h.jsxs)("form",{onClick:function(e){e.preventDefault(),""!==r.trim()&&t(r,s)},className:v,children:[(0,h.jsx)("label",{className:d,children:(0,h.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)},name:"searchInput",value:r,className:g})}),(0,h.jsx)("button",{type:"submit",className:x,children:(0,h.jsx)(_.RB5,{size:"20px",color:"white"})})]})},j=n(689),k=n(377),y=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],s=(0,j.TH)(),l=(0,u.useState)(!1),f=(0,c.Z)(l,2),_=f[0],v=f[1],d=(0,i.lr)(),g=(0,c.Z)(d,2),x=g[0],y=g[1],Z=x.get("query");return(0,u.useEffect)((function(){Z&&(0,a.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,(0,k.HI)(Z);case 4:t=e.sent,n=t.data,r(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))()}),[Z]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,{getMoviesFromInput:function(e){y({query:e})}}),_&&(0,h.jsx)(p.a,{}),(0,h.jsx)(m,{movies:n,location:s})]})}},377:function(e,t,n){n.d(t,{HI:function(){return u},Hg:function(){return o},TP:function(){return i},jP:function(){return l},zv:function(){return s}});var a=n(243),c="2a9019ab3cb7c560ad73000751e89f97",r="https://api.themoviedb.org/3",o=function(){return a.Z.get("".concat(r,"/trending/all/day?api_key=").concat(c))},u=function(e){return a.Z.get("".concat(r,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(e))},i=function(e){return a.Z.get("".concat(r,"/movie/").concat(e,"?api_key=").concat(c))},s=function(e){return a.Z.get("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(c))},l=function(e){return a.Z.get("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=387.c9ab1e3e.chunk.js.map