(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,t,a){"use strict";var n=a(113),c=a(2),r=a.n(c);Object(n.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},112:function(e,t,a){"use strict";var n=a(40),c=a(16),r=a(4),l=a.n(r),s=a(1),i=a.n(s),m=(a(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var t,a=e.tag,r=e.className,s=e.type,u=Object(c.a)(e,["tag","className","type"]),o=l()(Object(n.a)({},s,!!s),r);return t=a||(!a&&m[s]?m[s]:"p"),i.a.createElement(t,Object.assign({},u,{className:o}))};u.defaultProps={type:"p"},t.a=u},114:function(e,t,a){"use strict";var n=a(16),c=a(1),r=a.n(c),l=(a(111),a(18)),s=a(112),i=l.a.create("page"),m=function(e){var t=e.title,a=e.breadcrumbs,c=e.tag,l=e.className,m=e.children,u=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),o=i.b("px-3",l);return r.a.createElement(c,Object.assign({className:o},u),r.a.createElement("div",{className:i.e("header")},t&&"string"===typeof t?r.a.createElement(s.a,{type:"h4",className:i.e("title")},t):t,a&&a),m)};m.defaultProps={tag:"div",title:""},t.a=m},144:function(e,t,a){"use strict";a.r(t);var n=a(116),c=a.n(n),r=a(117),l=a(115),s=a(114),i=a(1),m=a.n(i),u=a(134),o=a(145),p=a(146),d=a(147),b=a(105),f=a(106),E=a(107),h=a(128),g=a(125),O=a(129),j=a(130),x=a(124),v=a(121),y=a(122),N=a(92),k=a(123);t.default=function(e){var t=Object(i.useState)(!1),a=Object(l.a)(t,2),n=a[0],S=a[1],w=Object(i.useState)(0),T=Object(l.a)(w,2),C=T[0],P=T[1],q=Object(i.useState)(0),D=Object(l.a)(q,2),H=D[0],I=D[1],J=Object(i.useState)(!1),F=Object(l.a)(J,2),G=F[0],L=F[1],R=Object(i.useState)(""),z=Object(l.a)(R,2),A=z[0],B=z[1],K=Object(i.useState)(A),M=Object(l.a)(K,2),Q=M[0],U=M[1],V=Object(i.useState)(""),W=Object(l.a)(V,2),X=W[0],Y=W[1],Z=function(){if(!G){var e=H===X.length-1?0:H+1;I(e)}},$=function(){if(!G){var e=0===H?X.length-1:H-1;I(e)}},_=Object(i.useState)(""),ee=Object(l.a)(_,2),te=ee[0],ae=ee[1];return Object(i.useEffect)(function(){""==A&&""==X&&""==Q&&Object(r.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/json/List",{method:"GET",headers:{"content-type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,B(a.items);case 8:return e.next=10,U(a.items);case 10:return e.next=12,Y(a.carousel);case 12:ae(a.carousel.map(function(e){return m.a.createElement(u.a,{onExiting:function(){return L(!0)},onExited:function(){return L(!1)},key:e.src},m.a.createElement("img",{src:e.src,alt:e.altText}))}));case 13:case"end":return e.stop()}},e)}))()}),m.a.createElement(s.a,{className:"DashboardPage"},""!==te&&0!==te.length?m.a.createElement(o.a,{style:{height:"300px"},activeIndex:H,next:Z,previous:$},m.a.createElement(p.a,{items:X,activeIndex:H,onClickHandler:function(e){G||I(e)}}),te,m.a.createElement(d.a,{direction:"prev",directionText:"Previous",onClickHandler:$}),m.a.createElement(d.a,{direction:"next",directionText:"Next",onClickHandler:Z})):"",""!==A&&0!==A.length?m.a.createElement(m.a.Fragment,null,m.a.createElement(b.a,{className:"mt-2 ml-2 mr-2"},A.map(function(e,t){return m.a.createElement(f.a,{md:2,sm:3,xs:6,className:"mb-3 pl-2 pr-2",key:t},m.a.createElement(E.a,{className:"list-products",onClick:function(){P(t),S(!0)}},m.a.createElement(h.a,{top:!0,src:e.img}),m.a.createElement(g.a,null,m.a.createElement(O.a,null,e.title),m.a.createElement(j.a,null,e.text))))})),m.a.createElement(b.a,null,m.a.createElement("div",{style:{height:"60px"}})),m.a.createElement(x.a,{isOpen:n,toggle:function(){return S(!n)},className:e.className},m.a.createElement(v.a,{toggle:function(){return S(!n)}},A[C].title),m.a.createElement(y.a,null,m.a.createElement(b.a,null,m.a.createElement("img",{src:A[C].img,className:"modal-image"})),m.a.createElement(b.a,{className:"list-product mt-2 ml-2 mr-2"},A[C].text),m.a.createElement(b.a,{className:"mt-2 ml-2 mr-2"},m.a.createElement(N.a,{color:"grey",disabled:!0},"Sold out"))),m.a.createElement(k.a,null,m.a.createElement(N.a,{color:"secondary",onClick:function(){return S(!n)}},"Close")))):"")}}}]);
//# sourceMappingURL=39.1da637fc.chunk.js.map