!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,(function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=(n(o(1)),o(6)),a=n(r),u=n(o(7)),c=n(o(8)),s=n(o(9)),d=n(o(10)),f=n(o(11)),l=n(o(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(m=!0),m)return p=(0,f.default)(p,b),(0,d.default)(p,b.once),p},y=function(){p=(0,l.default)(),v()};e.exports={init:function(e){b=i(b,e),p=(0,l.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&s.default.mobile()||"phone"===e&&s.default.phone()||"tablet"===e&&s.default.tablet()||"function"==typeof e&&!0===e()}(b.disable)||t?void p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})):(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,u.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,d.default)(p,b.once)}),b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",y),p)},refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function i(t){var o=l,n=p;return l=p=void 0,g=t,b=e.apply(n,o)}function a(e){return g=e,v=setTimeout(s,t),x?i(e):b}function c(e){var o=e-y;return void 0===y||o>=t||o<0||j&&e-g>=m}function s(){var e=k();return c(e)?d(e):void(v=setTimeout(s,function(e){var o=t-(e-y);return j?w(o,m-(e-g)):o}(e)))}function d(e){return v=void 0,O&&l?i(e):(l=p=void 0,b)}function f(){var e=k(),o=c(e);if(l=arguments,p=this,y=e,o){if(void 0===v)return a(y);if(j)return v=setTimeout(s,t),i(y)}return void 0===v&&(v=setTimeout(s,t)),b}var l,p,m,b,v,y,g=0,x=!1,j=!1,O=!0;if("function"!=typeof e)throw new TypeError(u);return t=r(t)||0,n(o)&&(x=!!o.leading,m=(j="maxWait"in o)?h(r(o.maxWait)||0,t):m,O="trailing"in o?!!o.trailing:O),f.cancel=function(){void 0!==v&&clearTimeout(v),g=0,l=y=p=v=void 0},f.flush=function(){return void 0===v?b:d(k())},f}function n(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function i(e){return"symbol"==(void 0===e?"undefined":a(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":a(e))}(e)&&g.call(e)==s}function r(e){if("number"==typeof e)return e;if(i(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var o=l.test(e);return o||p.test(e)?m(e.slice(2),o?2:8):f.test(e)?c:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",c=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,b="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,y=b||v||Function("return this")(),g=Object.prototype.toString,h=Math.max,w=Math.min,k=function(){return y.Date.now()};e.exports=function(e,t,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(u);return n(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),o(e,t,{leading:r,maxWait:t,trailing:a})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function n(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}(e)&&y.call(e)==c}function i(e){if("number"==typeof e)return e;if(n(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=f.test(e);return i||l.test(e)?p(e.slice(2),i?2:8):d.test(e)?u:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",u=NaN,c="[object Symbol]",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,p=parseInt,m="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,v=m||b||Function("return this")(),y=Object.prototype.toString,g=Math.max,h=Math.min,w=function(){return v.Date.now()};e.exports=function(e,t,n){function r(t){var o=l,n=p;return l=p=void 0,k=t,b=e.apply(n,o)}function u(e){return k=e,v=setTimeout(s,t),x?r(e):b}function c(e){var o=e-y;return void 0===y||o>=t||o<0||j&&e-k>=m}function s(){var e=w();return c(e)?d(e):void(v=setTimeout(s,function(e){var o=t-(e-y);return j?h(o,m-(e-k)):o}(e)))}function d(e){return v=void 0,O&&l?r(e):(l=p=void 0,b)}function f(){var e=w(),o=c(e);if(l=arguments,p=this,y=e,o){if(void 0===v)return u(y);if(j)return v=setTimeout(s,t),r(y)}return void 0===v&&(v=setTimeout(s,t)),b}var l,p,m,b,v,y,k=0,x=!1,j=!1,O=!0;if("function"!=typeof e)throw new TypeError(a);return t=i(t)||0,o(n)&&(x=!!n.leading,m=(j="maxWait"in n)?g(i(n.maxWait)||0,t):m,O="trailing"in n?!!n.trailing:O),f.cancel=function(){void 0!==v&&clearTimeout(v),k=0,l=y=p=v=void 0},f.flush=function(){return void 0===v?b:d(w())},f}}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(n)))return r()}))}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var o=window.document,a=new(n())(i);r=t,a.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=o();return!(!i.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!a.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var o=window.pageYOffset,n=window.innerHeight;e.forEach((function(e,i){!function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")}(e,n+o,t)}))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(12));t.default=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,n.default)(e.node,t.offset)})),e}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(13));t.default=function(e,t){var o=0,i=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(i=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),o=(0,n.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=r/2;break;case"bottom-center":o+=r/2+e.offsetHeight;break;case"center-center":o+=r/2+e.offsetHeight/2;break;case"top-top":o+=r;break;case"bottom-top":o+=e.offsetHeight+r;break;case"center-top":o+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(i=t),o+i}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))}}])}));
let seconds=document.querySelector(".seconds"),minutes=document.querySelector(".minutes"),play=document.querySelector(".fa-play"),pause=document.querySelector(".fa-pause"),stop=document.querySelector(".fa-stop"),countdown=-1,pomodoroTimer=1500,timerValue=pomodoroTimer;play.addEventListener("click",(()=>{-1==countdown&&timerValue>0&&(countdown=setInterval((()=>{let e=--timerValue,t=Math.floor(e/60),o=Math.floor(e%60);seconds.textContent=o.toString().padStart(2,"0"),minutes.textContent=t.toString().padStart(2,"0"),play.style.color="#7c8dfb",pause.style.color="#fff",stop.style.color="#fff",0==e&&clearInterval(countdown)}),1e3))})),pause.addEventListener("click",(()=>{clearInterval(countdown),countdown=-1,pause.style.color="#ffcf4A",play.style.color="#fff",stop.style.color="#fff"})),stop.addEventListener("click",(()=>{clearInterval(countdown),countdown=-1,timerValue=pomodoroTimer;let e=Math.floor(timerValue/60),t=Math.floor(timerValue%60);seconds.textContent=t.toString().padStart(2,"0"),minutes.textContent=e.toString().padStart(2,"0"),stop.style.color="#eb0000",play.style.color="#fff",pause.style.color="#fff"}));var myToDolist=document.getElementsByTagName("LI");for(i=0;i<myToDolist.length;i++){var span=document.createElement("SPAN"),txt=document.createTextNode("×");span.className="close",span.appendChild(txt),myToDolist[i].appendChild(span)}var i,close=document.getElementsByClassName("close");for(i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"};var list=document.querySelector("ul");function newItem(){var e=document.createElement("li"),t=document.getElementById("myAnswer").value,o=document.createTextNode(t);e.appendChild(o);var n=document.getElementById("alertModal"),l=document.getElementById("close-modal");""===t?n.style.display="block":document.getElementById("myUl").appendChild(e),document.getElementById("myAnswer").value="",l.onclick=function(){n.style.display="none"},window.onclick=function(e){e.target==n&&(n.style.display="none")};var c=document.createElement("SPAN"),a=document.createTextNode("×");for(c.className="close",c.appendChild(a),e.appendChild(c),i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"}}list.addEventListener("click",(function(e){"LI"===e.target.tagName&&e.target.classList.toggle("checked")}),!1);const checkbox=document.getElementById("checkbox");checkbox.addEventListener("change",(()=>{document.body.classList.toggle("light")})),AOS.init({duration:1200});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFvcy5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiQU9TIiwidGhpcyIsIm8iLCJuIiwiaSIsImlkIiwibG9hZGVkIiwiY2FsbCIsIm0iLCJjIiwicCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJhIiwidSIsInMiLCJkIiwiYiIsInkiLCJoIiwidyIsImsiLCJ4Iiwib2Zmc2V0IiwiZGVsYXkiLCJlYXNpbmciLCJkdXJhdGlvbiIsImRpc2FibGUiLCJvbmNlIiwic3RhcnRFdmVudCIsInRocm90dGxlRGVsYXkiLCJkZWJvdW5jZURlbGF5IiwiZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXIiLCJqIiwiTyIsImluaXQiLCJkb2N1bWVudCIsImFsbCIsIndpbmRvdyIsImF0b2IiLCJtb2JpbGUiLCJwaG9uZSIsInRhYmxldCIsIlMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlzU3VwcG9ydGVkIiwiY29uc29sZSIsImluZm8iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZHkiLCJyZWZyZXNoIiwicmVmcmVzaEhhcmQiLCJ2IiwiZyIsImFwcGx5IiwiciIsInNldFRpbWVvdXQiLCJmIiwiTSIsIl8iLCJUeXBlRXJyb3IiLCJsZWFkaW5nIiwibWF4V2FpdCIsInRyYWlsaW5nIiwiY2FuY2VsIiwiY2xlYXJUaW1lb3V0IiwiZmx1c2giLCJ2YWx1ZU9mIiwicmVwbGFjZSIsImwiLCJ0ZXN0Iiwic2xpY2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiTmFOIiwicGFyc2VJbnQiLCJzZWxmIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJEYXRlIiwibm93IiwiZGF0YXNldCIsImFvcyIsImNoaWxkcmVuIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwiQXJyYXkiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiY29uY2F0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm9ic2VydmUiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJzdWJzdHIiLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiZ2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhbmNob3IiLCJhbmNob3JQbGFjZW1lbnQiLCJpc05hTiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwidGFnTmFtZSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRQYXJlbnQiLCJsZWZ0IiwibWFwIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJwbGF5IiwicGF1c2UiLCJzdG9wIiwiY291bnRkb3duIiwicG9tb2Rvcm9UaW1lciIsInRpbWVyVmFsdWUiLCJzZXRJbnRlcnZhbCIsInJlc3QiLCJmbG9vciIsInNlYyIsInRleHRDb250ZW50IiwicGFkU3RhcnQiLCJzdHlsZSIsImNvbG9yIiwiY2xlYXJJbnRlcnZhbCIsIm15VG9Eb2xpc3QiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwidHh0IiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImNsb3NlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheSIsImxpc3QiLCJuZXdJdGVtIiwibGkiLCJpbnB1dFZhbHVlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2RhbCIsImV4aXQiLCJldmVudCIsInRhcmdldCIsImV2IiwidG9nZ2xlIiwiY2hlY2tib3giLCJib2R5Il0sIm1hcHBpbmdzIjoiQ0FBQyxTQUFTQSxFQUFFQyxHQUFHLGlCQUFpQkMsU0FBUyxpQkFBaUJDLE9BQU9BLE9BQU9ELFFBQVFELElBQUksbUJBQW1CRyxRQUFRQSxPQUFPQyxJQUFJRCxPQUFPLEdBQUdILEdBQUcsaUJBQWlCQyxRQUFRQSxRQUFRSSxJQUFJTCxJQUFJRCxFQUFFTSxJQUFJTCxHQUFHLENBQXhMLENBQTBMTSxNQUFLLFdBQVcsT0FBTyxTQUFTUCxHQUFHLFNBQVNDLEVBQUVPLEdBQUcsR0FBR0MsRUFBRUQsR0FBRyxPQUFPQyxFQUFFRCxHQUFHTixRQUFRLElBQUlRLEVBQUVELEVBQUVELEdBQUcsQ0FBQ04sUUFBUSxDQUFDLEVBQUVTLEdBQUdILEVBQUVJLFFBQU8sR0FBSSxPQUFPWixFQUFFUSxHQUFHSyxLQUFLSCxFQUFFUixRQUFRUSxFQUFFQSxFQUFFUixRQUFRRCxHQUFHUyxFQUFFRSxRQUFPLEVBQUdGLEVBQUVSLE9BQU8sQ0FBQyxJQUFJTyxFQUFFLENBQUMsRUFBRSxPQUFPUixFQUFFYSxFQUFFZCxFQUFFQyxFQUFFYyxFQUFFTixFQUFFUixFQUFFZSxFQUFFLFFBQVFmLEVBQUUsRUFBRSxDQUF6TSxDQUEyTSxDQUFDLFNBQVNELEVBQUVDLEVBQUVRLEdBQUcsYUFBYSxTQUFTRCxFQUFFUixHQUFHLE9BQU9BLEdBQUdBLEVBQUVpQixXQUFXakIsRUFBRSxDQUFDa0IsUUFBUWxCLEVBQUUsQ0FBQyxJQUFJVSxFQUFFUyxPQUFPQyxRQUFRLFNBQVNwQixHQUFHLElBQUksSUFBSUMsRUFBRSxFQUFFQSxFQUFFb0IsVUFBVUMsT0FBT3JCLElBQUksQ0FBQyxJQUFJUSxFQUFFWSxVQUFVcEIsR0FBRyxJQUFJLElB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