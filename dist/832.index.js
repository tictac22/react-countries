"use strict";(self.webpackChunkreact_countries=self.webpackChunkreact_countries||[]).push([[832],{7522:function(n,e,t){t.d(e,{v9:function(){return m},C5:function(){return d},mx:function(){return g},Ik:function(){return f},x6:function(){return v}});var r,a,i,o,l=t(8687);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function c(n,e,t,r,a,i,o){try{var l=n[i](o),u=l.value}catch(n){return void t(n)}l.done?e(u):Promise.resolve(u).then(r,a)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){c(i,r,a,o,l,"next",n)}function l(n){c(i,r,a,o,l,"throw",n)}o(void 0)}))}}var p="https://react-countries-backend-production.up.railway.app/graphql",m=function(){var n=s(regeneratorRuntime.mark((function n(e,t){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.request)(p,(0,l.gql)(r||(r=u(["\n        query {\n            getAllCountries(offset:",",limit:",") {\n                name,population,region,capital,alpha2Code, flags {png}\n            }\n        }\n    "])),e,t));case 2:return a=n.sent,n.abrupt("return",a.getAllCountries);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=s(regeneratorRuntime.mark((function n(){var e,t,r,i=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:"",n.prev=2,n.next=5,(0,l.request)(p,(0,l.gql)(a||(a=u(['\n            query {\n                getCountriesByParams(name:"','",region:"','") {\n                    name,population,region,capital,alpha2Code, flags {png}\n                }\n            }\n        '])),e,t));case 5:return r=n.sent,n.abrupt("return",r.getCountriesByParams);case 9:return n.prev=9,n.t0=n.catch(2),n.abrupt("return",{error:!0});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=s(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.request)(p,(0,l.gql)(i||(i=u(['\n            query {\n                getCountryByAlpha(id:"','") {\n                    name,borders,flags {svg},nativeName,population,region,subregion,capital,languages {name},topLevelDomain,currencies {name}\n                }\n            }\n        '])),e));case 2:return t=n.sent,n.abrupt("return",t.getCountryByAlpha);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=s(regeneratorRuntime.mark((function n(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.join(","),console.log(t),n.next=4,(0,l.request)(p,(0,l.gql)(o||(o=u(['\n        query {\n            getCountriesName(countries:"','") {\n                alpha2Code,name\n            }\n        }\n    '])),t));case 4:return r=n.sent,n.abrupt("return",r.getCountriesName);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},4832:function(n,e,t){t.r(e);var r,a,i,o,l,u,c,s,p,m,d=t(7294),g=t(405),f=t(6974),v=t(9711),x=t(4142),h=t(8767),w=t(1288),b=t(7522);function E(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function y(n,e,t,r,a,i,o){try{var l=n[i](o),u=l.value}catch(n){return void t(n)}l.done?e(u):Promise.resolve(u).then(r,a)}function k(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){y(i,r,a,o,l,"next",n)}function l(n){y(i,r,a,o,l,"throw",n)}o(void 0)}))}}e.default=function(){var n,e,t=(0,f.UO)().code,r=(0,h.useQuery)(["country",t],k(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,b.mx)(t));case 1:case"end":return n.stop()}}),n)})))),a=r.isLoading,i=r.error,o=r.data,l=null==o?void 0:o.borders,u=(0,h.useQuery)(["countryNames",l],k(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,b.Ik)(l));case 1:case"end":return n.stop()}}),n)}))),{enabled:!!l}),c=u.isLoading,s=u.data;return d.createElement(d.Fragment,null,d.createElement(g.q,null,d.createElement("title",null,null==o?void 0:o.name),d.createElement("link",{rel:"shortcut icon",href:null==o||null===(n=o.flags)||void 0===n?void 0:n.svg})),d.createElement(P,null,d.createElement("div",{className:"container"},d.createElement(v.rU,{to:"/"},d.createElement(C,null,d.createElement(x.And,null),d.createElement("p",null,"Back"))),d.createElement(R,null,a||c?d.createElement(O,null):i?d.createElement(z,null,"Error on server side, please retry"):d.createElement(d.Fragment,null,d.createElement(q,null,d.createElement("img",{src:"".concat(o.flags.svg),alt:o.name})),d.createElement(j,null,d.createElement("h2",null,o.name),d.createElement(N,null,d.createElement("div",{id:"1"},d.createElement("p",null,"Native Name: ",d.createElement("span",null,o.nativeName)),d.createElement("p",null,"Population: ",d.createElement("span",null,(0,b.x6)(o.population))),d.createElement("p",null,"Region: ",d.createElement("span",null,o.region)),d.createElement("p",null,"Sub Region: ",d.createElement("span",null,o.subregion)),d.createElement("p",null,"Capital: ",d.createElement("span",null,o.capital||"No capital"))),d.createElement("div",null,d.createElement("p",null,"Top Level Domain: ",d.createElement("span",null,o.topLevelDomain[0])),d.createElement("p",null,"Currencies ",d.createElement("span",null,(null===(e=o.currencies)||void 0===e?void 0:e.length)>0?o.currencies[0].name:"No currency")),d.createElement("p",{style:{maxWidth:"300px"}},"Languages: ",d.createElement("span",null,o.languages.map((function(n){return n.name})).join(", "))))),d.createElement(Z,null,d.createElement("div",{style:{marginRight:"4px"}},"Border Countries:"),(null==s?void 0:s.length)>0?s.map((function(n){return d.createElement(v.rU,{to:"/".concat(n.alpha2Code),key:n.name},d.createElement(B,null,n.name))})):d.createElement("div",null,"There are no border countries"))))))))};var P=w.ZP.div(r||(r=E(["\n    margin-top:30px;\n\n"]))),C=w.ZP.button(a||(a=E(["\n    display: flex;\n    background-color: var(--color-bg);\n    box-shadow: var(--shadow);\n    align-items: center;\n    cursor: pointer;\n    border-radius: 8px;\n    padding: 7px 21px;\n    & p {\n        margin-left: 8px;\n        font-weight: 300;\n        font-size: 13px;\n        color: var(--color-text);\n\n    }\n    & svg {\n        fill:var( --color-search);\n    }\n"]))),R=w.ZP.div(i||(i=E(["\n    margin-top: 40px;\n    display: flex;\n    align-items: flex-start;\n    & img {\n        width: 600px;\n        height: 400px;\n        @media (max-width:975px) {\n            width: 400px;\n            object-fit: cover;\n            object-position:center;\n        }\n        @media(max-width:732px) {\n            width: 100%;\n            height: initial;\n        }\n    }\n    @media(max-width:732px) {\n        flex-direction: column;\n    }\n"]))),q=w.ZP.div(o||(o=E(["\n"]))),j=w.ZP.div(l||(l=E(["\n    flex: 0 1 50%;\n    \n    margin-top:62px;\n    @media(max-width:850px) {\n        margin-top: 15px;\n    }\n    @media(min-width:732px) {\n        margin-left: 30px;\n    }\n    & h2 {\n        color: var(--color-text);\n        font-weight: 900;\n        font-size: 25px;\n    }\n\n"]))),N=w.ZP.div(u||(u=E(["\n    display: flex;\n    margin-top: 23px;\n    @media(max-width:1080px) {\n        flex-direction: column;\n    }\n    & > div[id] {\n        margin-bottom: 20px;\n        @media(min-width:1080px) {\n            margin-right: 41px;\n            margin-bottom: 0;\n            \n    }\n    }\n    & p, & span {\n        color:var(--color-text);\n        \n    }\n    & p {\n        margin-top: 5px;\n        font-weight:bold;\n    }\n    & span {\n        font-weight: 300;\n    }\n\n"]))),Z=w.ZP.div(c||(c=E(["\n    color:var(--color-text);\n    display: flex;\n    align-items: center;\n    font-weight:bold;\n    max-width: 500px;\n    flex-wrap: wrap;\n    & div {\n        margin-top: 8px;\n    }\n"]))),B=w.ZP.div(s||(s=E(["\n    padding:3px 15px;\n    box-shadow:var(--shadow);\n    margin-right:5px;\n    color:var(--color-text);\n    font-weight:300;\n    transition: all 0.1s linear;\n    &:hover {\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    }\n"]))),O=w.ZP.div(p||(p=E(['\n    position: absolute;\n    left:50%;\n    transform: translate(-50%);\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n    &:after {\n        content: " ";\n        display: block;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border-radius: 50%;\n        border: 6px solid var(--color-search);\n        border-color: var(--color-search) transparent var(--color-search) transparent;\n        animation: lds-dual-ring 1.2s linear infinite;\n    }\n    @keyframes lds-dual-ring {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n']))),z=w.ZP.p(m||(m=E(["\n    position: absolute;\n    left:50%;\n    transform: translate(-50%);\n"])))}}]);