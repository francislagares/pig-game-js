!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/pig-game-js/",n(n.s=10)}({10:function(e,t){var n,o,c,r,l;function a(){n=[0,0],o=0,c=0,r=!0,d(),document.getElementById("score-0").textContent="0",document.getElementById("score-1").textContent="0",document.getElementById("current-0").textContent="0",document.getElementById("current-1").textContent="0",document.getElementById("name-0").textContent="Player 1",document.getElementById("name-1").textContent="Player 2",document.querySelector(".player-0-panel").classList.remove("winner"),document.querySelector(".player-1-panel").classList.remove("winner"),document.querySelector(".player-0-panel").classList.remove("active"),document.querySelector(".player-1-panel").classList.remove("active"),document.querySelector(".player-0-panel").classList.add("active")}function d(){document.getElementById("dice-1").style.display="block",document.getElementById("dice-2").style.display="block"}function u(){c=0===c?1:0,o=0,document.getElementById("current-0").textContent="0",document.getElementById("current-1").textContent="0",document.querySelector(".player-0-panel").classList.toggle("active"),document.querySelector(".player-1-panel").classList.toggle("active"),d()}a(),document.querySelector(".btn-roll").addEventListener("click",(function(){if(r){var e=Math.floor(6*Math.random())+1,t=Math.floor(6*Math.random())+1,n=window.location.pathname;console.log(n),document.getElementById("dice-1").style.display="block",document.getElementById("dice-2").style.display="block",document.getElementById("dice-1").src="".concat(n,"/img/dice-").concat(e,".png"),document.getElementById("dice-2").src="".concat(n,"/img/dice-").concat(t,".png"),1!==e&&1!==t?(o+=e+t,document.getElementById("current-".concat(c)).textContent=o):u()}})),document.querySelector(".btn-hold").addEventListener("click",(function(){if(r){n[c]+=o,document.getElementById("score-".concat(c)).textContent=n[c];var e=document.querySelector(".final-score").value;l=e||100,n[c]>=l?(document.getElementById("name-".concat(c)).textContent="WINNER!",d(),document.querySelector(".player-".concat(c,"-panel")).classList.add("winner"),document.querySelector(".player-".concat(c,"-panel")).classList.remove("active"),r=!1):u()}})),document.querySelector(".btn-new").addEventListener("click",a)}});