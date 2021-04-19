(this["webpackJsonp@fluuuid/nft-marketplace"]=this["webpackJsonp@fluuuid/nft-marketplace"]||[]).push([[0],{118:function(e,t){},153:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),i=n(98),o=n.n(i),s=n(167),u=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,651)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},l=n(166),d=n(28),b=n(4),h=n.n(b),f=n(16),p=n(36),j=n(165),x=n(69),O=n(21);!function(e){e.UPDATE_USER="Update User",e.SIGN_OUT="Sign out",e.CONTRACT="Contract",e.LOAD_TOKEN_SALE="Load tokens on Sale",e.ETH_PRICE="Eth price",e.SET_CONNECTOR="Set Connector"}(r||(r={}));var v,g=function(e,t){switch(t.type){case r.ETH_PRICE:return Object(O.a)(Object(O.a)({},e),{},{ethPrice:t.payload});case r.SET_CONNECTOR:return Object(O.a)(Object(O.a)({},e),{},{activatingConnector:t.payload});case r.UPDATE_USER:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,user:t.payload});case r.SIGN_OUT:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1,user:void 0});case r.LOAD_TOKEN_SALE:return Object(O.a)(Object(O.a)({},e),{},{tokensOnSale:t.payload});case r.CONTRACT:return Object(O.a)(Object(O.a)({},e),{},{contract:t.payload});default:throw new Error("Not among actions")}},m=n(5),y={isAuthenticated:!1},k=Object(a.createContext)({state:y,dispatch:function(){}}),w=function(){return Object(a.useContext)(k)},S=function(e){var t=e.children,n=Object(a.useReducer)(g,y),r=Object(p.a)(n,2),c=r[0],i=r[1];return Object(m.jsx)(k.Provider,{value:{state:c,dispatch:i},children:t})},C=function(e){return fetch(e).then((function(e){return e.json().then((function(e){return e.result.ethusd}))}))},E=function(e){return fetch(e).then((function(e){return e.json()}))},T=function(e,t){return new Promise(function(){var n=Object(f.a)(h.a.mark((function n(r,a){var c,i,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e&&t||a("Contract or address not found"),n.prev=1,c=e.filters.Transfer(null,t),n.next=5,e.queryFilter(c,0,"latest");case 5:return i=n.sent,o=new Map,n.next=9,Promise.all(i.map(function(){var n=Object(f.a)(h.a.mark((function n(r){var a,c,i,s,u,l,d,b;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.ownerOf(null===(a=r.args)||void 0===a?void 0:a.tokenId);case 2:if(n.sent!==t){n.next=14;break}return n.next=6,e.tokenMeta(null===(c=r.args)||void 0===c?void 0:c.tokenId);case 6:return s=n.sent,u=s.id,l=s.name,d=s.price,n.next=12,e.tokenURI(null===(i=r.args)||void 0===i?void 0:i.tokenId);case 12:b=n.sent,o.set(b,{id:u,name:l,price:d,uri:b});case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 9:r(Array.from(o).map((function(e){var t=Object(p.a)(e,2);t[0];return t[1]}))),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e,t){return n.apply(this,arguments)}}())},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Math.round(e.length/t);return"".concat(e.substr(0,n),"...").concat(e.substr(e.length-n,e.length))},F="https://api.nft.fluuu.id/prod",N="".concat(F,"/ethusd"),I=function(e){var t=e.token,n=e.isOnSale,r=e.onTransfer,c=e.onBuy,i=e.onSale,o=Object(a.useState)(!1),s=Object(p.a)(o,2),u=s[0],d=s[1],b=Object(a.useState)(!1),O=Object(p.a)(b,2),v=O[0],g=O[1],y=Object(a.useState)(""),k=Object(p.a)(y,2),S=k[0],C=k[1],T=Object(a.useState)(""),A=Object(p.a)(T,2),F=A[0],N=A[1],I=w().state,R=I.user,U=I.ethPrice,z=I.contract,W=function(){var e=Object(f.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!j.b.isAddress(S)||!r){e.next=7;break}return e.next=5,r({id:t.id,address:S});case 5:e.sent&&g(!1);case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,i({id:t.id,price:j.b.parseEther(F),onSale:!0});case 6:e.sent&&g(!1),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(3),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),P=Object(x.a)("".concat("https://api.nft.fluuu.id/prod","/token/").concat(t.id),E).data,H=new Intl.NumberFormat("us-GB",{style:"currency",currency:"USD"}).format(Number(j.b.formatEther(t.price))*Number(U));return P?Object(m.jsxs)(l.c,{variant:"nft",children:[Object(m.jsx)(l.i,{sx:{width:"100%",bg:"white",borderBottom:"1px solid black"},src:P.image}),Object(m.jsxs)(l.a,{p:3,pt:2,children:[Object(m.jsx)(l.h,{as:"h2",children:P.name}),Object(m.jsx)(l.e,{variant:"divider.nft"}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.n,{sx:{color:"lightBlue",fontSize:1,fontWeight:"bold"},children:"Price"}),Object(m.jsxs)(l.h,{as:"h3",sx:{color:"green",m:0,fontWeight:"bold"},children:[j.a.EtherSymbol," ",Number(j.b.formatEther(t.price)).toFixed(2)," ",Object(m.jsxs)(l.n,{sx:{color:"navy"},as:"span",variant:"text.body",children:["(",H,")"]})]}),Object(m.jsx)(l.l,{target:"_blank",href:"https://testnets.opensea.io/assets/".concat(null===z||void 0===z?void 0:z.details.address,"/").concat(t.id),variant:"openSea",children:"View on Opensea.io"})]}),r&&Object(m.jsxs)(l.f,{mt:3,sx:{justifyContent:"center"},children:[u&&Object(m.jsxs)(l.a,{sx:{width:"100%"},children:[Object(m.jsx)(l.f,{onSubmit:W,sx:{width:"100%",flexDirection:"column"},as:"form",children:Object(m.jsx)(l.j,{onChange:function(e){return C(e.currentTarget.value)},placeholder:"ETH Address 0x0..."})}),Object(m.jsxs)(l.f,{mt:2,children:[Object(m.jsx)(l.b,{sx:{bg:"green"},onClick:W,variant:"quartiary",children:"Confirm"}),Object(m.jsx)(l.b,{sx:{bg:"red"},ml:2,onClick:function(){return d(!1)},variant:"quartiary",children:"Cancel"})]})]}),v&&Object(m.jsxs)(l.a,{sx:{width:"100%"},children:[Object(m.jsx)(l.f,{onSubmit:W,sx:{width:"100%",flexDirection:"column"},as:"form",children:Object(m.jsx)(l.j,{onChange:function(e){return N(e.currentTarget.value)},placeholder:"Token Price in ETH"})}),Object(m.jsxs)(l.f,{mt:2,children:[Object(m.jsx)(l.b,{sx:{bg:"green"},onClick:_,variant:"quartiary",children:"Confirm"}),Object(m.jsx)(l.b,{sx:{bg:"red"},ml:2,onClick:function(){return g(!1)},variant:"quartiary",children:"Cancel"})]})]}),!u&&!v&&Object(m.jsxs)(l.f,{sx:{flexDirection:"column",width:"100%",justifyContent:"center"},children:[Object(m.jsx)(l.b,{onClick:function(){return d(!u)},variant:"tertiary",children:"Transfer"}),n?Object(m.jsx)(l.b,{mt:2,onClick:function(){return i&&i({id:t.id,price:t.price,onSale:!1})},variant:"tertiary",children:"Remove from Sale"}):Object(m.jsx)(l.b,{mt:2,onClick:function(){return g(!v)},variant:"tertiary",children:"Put Token for Sale"})]})]}),c&&Object(m.jsx)(l.f,{mt:3,sx:{justifyContent:"center",width:"100%"},children:Object(m.jsx)(l.b,{sx:{opacity:(null===R||void 0===R?void 0:R.ownedTokens.find((function(e){return j.b.formatUnits(e.id)===j.b.formatUnits(t.id)})))?.5:1,pointerEvents:(null===R||void 0===R?void 0:R.ownedTokens.find((function(e){return j.b.formatUnits(e.id)===j.b.formatUnits(t.id)})))?"none":"visible"},onClick:function(e){e.preventDefault(),c&&c({id:t.id,price:t.price})},variant:"quartiary",children:"Buy Token"})})]})]}):Object(m.jsx)(l.c,{variant:"nft",children:Object(m.jsx)(l.m,{})})},R=n(14),U=function(){var e=Object(R.g)();return Object(m.jsxs)(l.f,{sx:{alignItems:"center",bg:"black",p:3},as:"nav",children:[Object(m.jsx)(l.i,{onClick:function(){e.push("/")},sx:{width:50,cursor:"pointer"},src:"/static/logo.png"}),Object(m.jsxs)(l.h,{sx:{ml:[1,2],color:"white"},as:"h4",children:["ERC721 Marketplace"," ",Object(m.jsx)(l.n,{sx:{display:["none","block"]},children:"+ OpenSea.io on Rinkeby Network"})]}),Object(m.jsx)(B,{})]})},z=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,c,i,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.contract,a=t.userAccount,c=t.library,i=t.dispatch,e.prev=1,e.t0=j.b,e.next=5,c.getBalance(a);case 5:return e.t1=e.sent,o=e.t0.formatEther.call(e.t0,e.t1),e.next=9,T(n,a);case 9:s=e.sent,i({type:r.UPDATE_USER,payload:{address:a,balance:o,ownedTokens:s}}),e.next=17;break;case 13:throw e.prev=13,e.t2=e.catch(1),console.log(e.t2),new Error(e.t2);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),W=n(81),_=n(74),P=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,c,i,o,s,u,l,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.dispatch,a=t.library,c=t.chainId,a){e.next=3;break}throw new Error("No Web3 Found");case 3:if(i=function(e){switch(e){case 1337:return 5777;default:return e}},e.prev=4,o=W.networks[String(i(c))]){e.next=8;break}throw new Error("The network you selected is no supported yet.");case 8:return s=o.address,u=new _.a(s,W.abi,a.getSigner()),e.next=12,u.name();case 12:return l=e.sent,e.next=15,u.symbol();case 15:return d=e.sent,n({type:r.CONTRACT,payload:{payload:u,details:{address:s,name:l,symbol:d}}}),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(4),console.log(e.t0),new Error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.contract,a=t.dispatch,e.prev=1,e.next=4,n.getAllOnSale();case 4:c=e.sent.reduce((function(e,t){return""!==t.uri&&e.push({id:t.id,price:t.price,name:t.name,uri:t.uri}),e}),[]),a({type:r.LOAD_TOKEN_SALE,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=w(),t=e.state,n=e.dispatch,r=t.contract,a=t.user,c=t.tokensOnSale,i=Object(d.c)().library;if(!a)return null;var o=a.address,s=a.balance,u=a.ownedTokens,b=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&a.address&&i){e.next=2;break}return e.abrupt("return",!1);case 2:return e.prev=2,e.next=5,z({contract:null===r||void 0===r?void 0:r.payload,userAccount:a.address,library:i,dispatch:n});case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.id,c=t.address,null===r||void 0===r?void 0:r.payload){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,r.payload["safeTransferFrom(address,address,uint256)"](a.address,c,n,{from:a.address});case 6:return i=e.sent,e.next=9,i.wait();case 9:if(!(e.sent.confirmations>=1)){e.next=14;break}return e.abrupt("return",b());case 14:return e.abrupt("return",!1);case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(h.a.mark((function e(t){var c,i,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.id,i=t.price,o=t.onSale,s=void 0===o||o,(null===r||void 0===r?void 0:r.payload)&&(null===a||void 0===a?void 0:a.address)){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,r.payload.setTokenSale(c,s,i,{from:a.address});case 6:return e.next=8,H({dispatch:n,contract:null===r||void 0===r?void 0:r.payload});case 8:return e.next=10,b();case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.h,{as:"h1",children:"My Profile"}),Object(m.jsxs)(l.g,{columns:["1fr","1fr 1fr"],sx:{overflow:"hidden",gap:"0 20px"},children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.h,{as:"h4",sx:{color:"green"},children:"Address"}),Object(m.jsx)(l.n,{children:o})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.h,{as:"h4",sx:{color:"green"},children:"Balance"}),Object(m.jsxs)(l.n,{children:["\u039e ",s]})]})]}),Object(m.jsx)(l.e,{variant:"divider.nft",sx:{my:7}}),Object(m.jsx)(l.a,{my:5,children:u&&u.length>0?Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(l.h,{as:"h2",children:["My items"," ",Object(m.jsxs)(l.n,{variant:"text.body",as:"span",children:["(",u.length," item)"]})]}),Object(m.jsx)(l.g,{gap:4,columns:["1fr 1fr","1fr 1fr 1fr"],children:u.map((function(e,t){return Object(m.jsx)(I,{isOnSale:!!(null===c||void 0===c?void 0:c.find((function(t){return j.b.formatUnits(t.id)===j.b.formatUnits(e.id)}))),onSale:x,onTransfer:p,token:e},t)}))})]}):u&&Object(m.jsx)(l.a,{children:Object(m.jsx)(l.h,{as:"h2",children:"You don't own any NFT tokens"})})})]})},D=function(){var e=w(),t=e.state,n=e.dispatch,r=Object(d.c)().library,c=t.contract,i=t.user,o=t.tokensOnSale,s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&i.address){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,z({contract:null===c||void 0===c?void 0:c.payload,userAccount:i.address,library:r,dispatch:n});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,r,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.id,r=t.price,null===c||void 0===c?void 0:c.payload){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,c.payload.purchaseToken(n,{value:r});case 6:return a=e.sent,e.next=9,a.wait();case 9:if(!((i=e.sent).confirmations>=1)){e.next=14;break}s(),e.next=15;break;case 14:throw new Error(i);case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(3),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}(),b=Object(a.useCallback)(Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&(null===c||void 0===c?void 0:c.payload)){e.next=2;break}return e.abrupt("return");case 2:H({dispatch:n,contract:c.payload});case 3:case"end":return e.stop()}}),e)}))),[n,c]),p=function(e){var t=e.id,n=e.price;u&&u({id:t,price:n})};return Object(a.useEffect)((function(){b()}),[b,null===i||void 0===i?void 0:i.ownedTokens]),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(l.h,{as:"h1",children:"Market"}),Object(m.jsx)(l.g,{gap:4,columns:["1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr"],children:null===o||void 0===o?void 0:o.map((function(e,t){return Object(m.jsx)(I,{onBuy:p,token:e},t)}))})]})},L=n(164),B=function(){var e=w().state,t=e.user,n=e.isAuthenticated,r=Object(R.g)();return Object(m.jsx)(l.f,{sx:{ml:"auto",justifySelf:"flex-end"},children:n&&t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(l.a,{sx:{display:["none","block"]},children:[Object(m.jsx)(l.h,{sx:{p:0,color:"white"},as:"h4",children:A(t.address)}),Object(m.jsxs)(l.h,{sx:{p:0,mt:1,textAlign:"right",color:"white"},as:"h5",children:[L.a,t.balance]})]}),Object(m.jsx)(l.a,{onClick:function(){r.push("/profile")},sx:{cursor:"pointer",ml:[0,3],height:30,width:30,borderRadius:"100%"},children:Object(m.jsx)(K,{size:30,address:t.address})})]})})},q=function(e){var t=e.component,n=e.path,r=w().state.isAuthenticated;return Object(m.jsx)(R.b,{path:n,render:function(e){return r?Object(m.jsx)(t,Object(O.a)({},e)):Object(m.jsx)(R.a,{to:"/"})}})},G=n(103),Y=n.n(G),K=function(e){var t=e.address,n=e.size,r=void 0===n?16:n,c=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(c.current)try{c.current.innerHTML="",c.current.appendChild(Y()(r,parseInt(t.slice(2,10),16)))}catch(e){console.log(e)}}),[t,r]),Object(m.jsx)(l.f,{ref:c,sx:{justifyContent:"center",width:r+2}})},J=n(64),V=n(61);!function(e){e.Metamask="Metamask"}(v||(v={}));var X=new V.a({supportedChainIds:[5777,1337,4]}),Q=Object(J.a)({},v.Metamask,X),Z=function(){var e=w(),t=e.dispatch,n=e.state,a=n.user,c=n.activatingConnector,i=Object(d.c)(),o=i.connector,s=i.activate;return Object(m.jsx)(l.d,{children:a?Object(m.jsx)(D,{}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.f,{sx:{justifyContent:"center"},children:Object.keys(Q).map((function(e){var n=Q[e],a=n===c,i=n===o;return Object(m.jsxs)(l.b,{mt:2,variant:"connect",sx:{borderColor:a?"orange":i?"green":"unset",position:"relative",maxWidth:250},onClick:function(){t({type:r.SET_CONNECTOR,payload:n}),s(Q[e])},children:[n===Q.Metamask&&Object(m.jsx)(l.i,{sx:{width:35,height:35},mr:3,src:"https://docs.metamask.io/metamask-fox.svg"}),e,a&&Object(m.jsx)(l.m,{size:20,color:"white",sx:{ml:3}})]},e)}))})})})},$=n(76),ee=n(168);function te(e){var t=new ee.a(e);return t.pollingInterval=12e3,t}var ne=function(){return Object(m.jsxs)($.a,{basename:"",children:[Object(m.jsx)(U,{}),Object(m.jsx)(d.b,{getLibrary:te,children:Object(m.jsx)(ie,{children:Object(m.jsxs)(R.d,{children:[Object(m.jsx)(q,{path:"/profile",component:re}),Object(m.jsx)(R.b,{exact:!0,path:"/",component:Z})]})})})]})},re=function(){return Object(m.jsx)(l.d,{children:Object(m.jsx)(M,{})})},ae=n(104);function ce(e){return e instanceof V.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof d.a?"You're connected to an unsupported network.":e instanceof V.c||e instanceof ae.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var ie=function(e){var t=e.children,n=w(),c=n.dispatch,i=n.state.activatingConnector,o=Object(d.c)(),s=o.connector,u=o.library,b=o.chainId,j=o.account,O=o.error,v=Object(x.a)(N,C).data;return Object(a.useEffect)((function(){c({type:r.ETH_PRICE,payload:v})}),[v,c]),Object(a.useEffect)((function(){b&&j&&u&&function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P({dispatch:c,library:u,chainId:b});case 3:return t=e.sent,console.log(t),e.next=7,z({contract:t,userAccount:j,library:u,dispatch:c});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[b,j,u,c]),Object(a.useEffect)((function(){i&&i===s&&c({type:r.SET_CONNECTOR,payload:void 0})}),[i,s,c]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(d.c)(),n=t.active,r=t.error;Object(a.useEffect)((function(){var e=window.ethereum;e&&(e.autoRefreshOnNetworkChange=!0)}),[n,r,e])}(!function(){var e=Object(d.c)(),t=e.activate,n=e.active,r=Object(a.useState)(!1),c=Object(p.a)(r,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){X.isAuthorized().then((function(e){e?t(X,void 0,!0).catch((function(){o(!0)})):o(!0)}))}),[t]),Object(a.useEffect)((function(){!i&&n&&o(!0)}),[i,n]),i}()||!!i),Object(m.jsx)(m.Fragment,{children:O?Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.h,{as:"h2",children:"\u274c Something is not right"}),Object(m.jsx)(l.n,{sx:{mt:3},children:ce(O)})]}):t})},oe={breakpoints:["40em","52em","64em"],space:[0,4,10,16,20,30,42,56,78,125,150],fontSizes:[10,12,16,26,36,50,75],fonts:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',heading:"inherit"},layout:{container:{py:4,px:3,pb:10}},sizes:Object(O.a)({},{header:60,container:1020,button:[100,250],logo:60,sidemenu:240,chart:950}),cards:{nft:{bg:"background",border:"1px solid",borderColor:"muted",textAlign:"left"}},links:{openSea:{color:"green",fontSize:1,opacity:.5,"&:after":{content:"url(\"data:image/svg+xml,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.262 0l2.529 2.524L0 6.314 1.685 8l3.79-3.79L8 6.732V0z' fill='rgb(99, 255, 203)' fill-rule='nonzero' /%3E%3C/svg%3E\")",ml:1},transition:"all .2s ease-out","&:hover":{filter:"brightness(1.2)",color:"green"}}},buttons:{primary:Object(O.a)(Object(O.a)({},{border:0,fontFamily:"body",fontWeight:"normal",lineHeight:"body",fontSize:[1,2],paddingX:3,paddingY:2,outline:"none",whiteSpace:"nowrap",cursor:"pointer",transition:"all 0.1s ease-out","&:hover":{opacity:.7}}),{},{fontWeight:"bold",minWidth:"button",bg:"primary",color:"white",textAlign:"center",display:"flex",width:"100%",alignItems:"center",justifyContent:"center"}),secondary:{cursor:"pointer",variant:"buttons.primary",bg:"secondary",fontWeight:"body"},tertiary:{variant:"buttons.secondary",color:"white",bg:"primary"},quartiary:{variant:"buttons.tertiary",bg:"green",color:"black",minWidth:"auto",py:2},connect:{variant:"buttons.tertiary",py:4,px:5}},fontWeights:{heading:300,body:400,bold:700},lineHeights:{body:1.333333333,heading:1.066666667,subheading:2},colors:Object(O.a)({},{text:"#FFF",white:"#fff",background:"#333",primary:"#111",secondary:"#333",gray:"#F7F9FA",lightGray:"#e0e0e0",midGray:"#333",lightBlue:"#EFF7FF",navy:"#e0e0e0",green:"rgb(99, 255, 203)",amber:"#D58408",red:"#999",muted:"#999",transparent:"transparent",white20:"rgba(255, 255, 255, .2)",black66:"rgba(0, 0, 0, .66)"}),divider:{nft:{color:"muted",height:1,my:2}},forms:{input:{paddingX:2,paddingY:2,borderRadius:"5px",bg:"white",color:"primary"}},text:{body:{fontFamily:"body",fontWeight:"body",lineHeight:"body",fontSize:1},heading:{py:2},bold:{fontWeight:"bold"},paragraph:{fontFamily:"body",fontWeight:"body",lineHeight:2,fontSize:2,letterSpacing:.44,color:"white"},h1:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:6,letterSpacing:-.44},h2:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5,letterSpacing:-.44},h3:{fontFamily:"heading",lineHeight:"subheading",fontWeight:"heading",fontSize:3},h4:{fontFamily:"heading",lineHeight:"subheading",fontWeight:"bold",fontSize:[1,2]},h5:{fontFamily:"heading",fontWeight:"bold",lineHeight:1.6,fontSize:0,letterSpacing:1.5}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},a:{color:"primary","&:hover":{color:"inherit"}},hr:{height:1,opacity:.5,bg:"black",color:"black",my:6}}};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(s.a,{theme:oe,children:Object(m.jsx)(S,{children:Object(m.jsx)(ne,{})})})}),document.getElementById("root")),u()}},[[153,1,3]]]);
//# sourceMappingURL=main.db0a4328.chunk.js.map