"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[4],{4:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(433),a=t(861),i=t(439),c=t(757),s=t.n(c),u=t(791),o=t(689),d=t(87),l={link:"TrendingList_link__dzam0"},p=t(184);var f=function(e){var n=(0,o.TH)(),t=e.movies;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:l.list,children:t.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(d.Link,{to:"/movies/".concat(e.id),state:{from:n,movieId:e.id},className:l.link,children:e.title})},e.id)}))})})},m=t(294),h=t(264),v="70889288bed820c103dd2607e35b8e54",k=function(){var e=(0,a.Z)(s().mark((function e(){var n,t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat(v),e.prev=1,e.next=4,m.Z.get("".concat(n));case 4:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),h.Notify.warning("Error downloading trending movie list"),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();var g="Home_header__jgN9+";var x=function(){var e=(0,u.useState)([]),n=(0,i.Z)(e,2),t=n[0],c=n[1];return(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:n=e.sent,c((0,r.Z)(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{className:g,children:"Trending today"}),t&&(0,p.jsx)(f,{movies:t})]})}}}]);
//# sourceMappingURL=4.4f4d0d32.chunk.js.map