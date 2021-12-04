(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1,title:"Introduction",slug:"/"},c=void 0,l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Time series is one of the fastest growing and richest types of data. In a variety of domains including dynamical systems, healthcare, climate science and economics, there have been increasing amounts of complex dynamic data due to a shift away from parsimonious, infrequent measurements to nearly continuous real-time monitoring and recording. This burgeoning amount of new data calls for novel theoretical and algorithmic tools and insights.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/torchTS/docs/",editUrl:"https://github.com/Rose-STL-Lab/torchTS/edit/main/website/docs/intro.md",version:"current",lastUpdatedBy:"Kevin Lane",lastUpdatedAt:1638597191,formattedLastUpdatedAt:"12/4/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Autoregressive Model (AR)",permalink:"/torchTS/docs/autoregressive"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Time series is one of the fastest growing and richest types of data. In a variety of domains including dynamical systems, healthcare, climate science and economics, there have been increasing amounts of complex dynamic data due to a shift away from parsimonious, infrequent measurements to nearly continuous real-time monitoring and recording. This burgeoning amount of new data calls for novel theoretical and algorithmic tools and insights."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://rose-stl-lab.github.io/torchTS/"},"TorchTS")," is a deep learning library for time series forecasting built on ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/"},"Pytorch"),". The tools in this library mostly come out the research from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Rose-STL-Lab"},"Spatiotemporal Machine Learning Lab"),". The library is designed with minimal dependencies and user-friendly interfaces. A particular emphasis of the library is scalability, which exploits auto-differentiation and various inductive biases in the data."))}d.isMDXComponent=!0}}]);