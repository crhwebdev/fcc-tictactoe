parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r,e,t,n={},o=[["","",""],["","",""],["","",""]];function u(){return o}function l(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return e&&e.length>0?e[0]:o}function a(){for(var r,e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t&&t.length>0)r=t[0];else if(o&&o.length>0)return o;for(var o=[],u=0;u<r.length;u++)for(var l=0;l<r[u].length;l++)o.length<l+1&&o.push([]),o[l].push(r[u][l]);return o}function f(){for(var r,e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t&&t.length>0)r=t[0];else if(o&&o.length>0)return o;for(var o=[],u=[],l=[],a=0,f=2;a<r.length;a++,f--)u.push(r[a][a]),l.push(r[a][f]);return o.push(u),o.push(l),o}function h(){for(var r=[],e=0;e<o.length;e++)r.push(o[e].slice());return r}function g(){for(var r=u(),e=0;e<r.length;e++)for(var t=0;t<r[e].length;t++)r[e][t]=""}function s(r,e){return!(e<1||r<1)&&(!(e>3||r>3)&&u()[r-1][e-1])}function i(r){var e=u(),t=r.row,n=r.column,o=r.piece;return!(n<1||t<1)&&(!(n>3||t>3)&&(e[t-1][n-1]=o,!0))}n.getBoard=u,n.getRows=l,n.getColumns=a,n.getDiagonals=f,n.makeCopyOfBoard=h,n.clearBoard=g,n.getBoardCell=s,n.setBoardCell=i,n.board=o,exports.default=n;
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(e){t(this,n),this.game=e;var r=document.querySelectorAll("#board button");if(r)for(var a=this,o=0;o<r.length;o++)r[o].addEventListener("click",function(e){a.game.update(this),e.preventDefault()})}return e(n,[{key:"reset",value:function(){for(var e=document.querySelectorAll("#board button"),t=document.getElementsByClassName("game-over"),n=0;n<e.length;n++)e[n].innerHTML="";for(var r=0;r<t.length;r++)t[r].classList.remove("show")}},{key:"update",value:function(e){var t=e.id;this.setSquare(this.getSquareById(t),e.piece)}},{key:"showMessage",value:function(e){var t=e.toLowerCase(),n=document.getElementById(t);n.classList.contains("show")||n.classList.add("show")}},{key:"getSquareById",value:function(e){return document.getElementById(e)}},{key:"setSquare",value:function(e,t){e.innerHTML=t}}]),n}();exports.default=n;
},{}],12:[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function t(s){var a=this;if(e(this,t),this.game=s,this.resetButton=document.getElementById("reset-btn"),this.gameModeSelect=document.getElementById("game-mode-select"),this.selectPieceBtns=document.getElementsByClassName("select-piece-btn"),this.resetButton){this.resetButton.addEventListener("click",function(e){a.game.reset(),e.preventDefault()}),this.gameModeSelect.addEventListener("change",function(e){a.game.setGameMode(parseInt(e.target.value)),parseInt(e.target.value),e.preventDefault()});for(var n=0;n<this.selectPieceBtns.length;n++)this.selectPieceBtns[n].addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("select-x"),a=document.getElementById("select-o");(s.getGameOver()||1===s.getTurn())&&("select-x"===e.target.id?"X"!==s.getPlayerPiece()&&(s.setPlayerPiece("X"),e.target.classList.add("is-active"),a.classList.remove("is-active")):"select-o"===e.target.id&&"O"!==s.getPlayerPiece()&&(s.setPlayerPiece("O"),e.target.classList.add("is-active"),t.classList.remove("is-active")))})}};exports.default=t;
},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,u,n){return u&&e(t.prototype,u),n&&e(t,n),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function u(){t(this,u),this.display=document.getElementById("message-display"),this.outputBuffer=[];var e=document.getElementById("message-panel");e.addEventListener("click",function(t){var u=e.classList,n=e.getElementsByTagName("h3")[0];u.contains("is-rolled-up")?(e.classList.remove("is-rolled-up"),n.innerHTML="Messages:"):(e.classList.add("is-rolled-up"),n.innerHTML="Click To Show More")})}return e(u,[{key:"send",value:function(e){var t=this.updateOutputBuffer(e);this.updateDisplay(t)}},{key:"reset",value:function(){var e=this.getOutputBuffer();e.splice(0,e.length),this.updateDisplay(e)}},{key:"updateOutputBuffer",value:function(e){var t=this.getOutputBuffer();return t.push(e),t}},{key:"updateDisplay",value:function(e){this.getDisplayWindow().innerHTML=this.getFormatedOutputText(e)}},{key:"getFormatedOutputText",value:function(e){for(var t="",u=e.length-1;u>=0;u--)t+="<p>"+e[u]+"</p>";return t}},{key:"getOutputBuffer",value:function(){return this.outputBuffer}},{key:"getDisplayWindow",value:function(){return this.display}}]),u}();exports.default=u;
},{}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./model.js"),r=l(e),t=require("./Board.js"),o=l(t),n=require("./Control.js"),i=l(n),u=require("./Message.js"),a=l(u);function l(e){return e&&e.__esModule?e:{default:e}}var c,s,f,g={},d=r.default,v="X",p="O",m=!0,h=!1,C=1,B=1;function M(){c=new o.default(this),s=new i.default(this),f=new a.default}function w(){d.clearBoard(),c.reset(),f.reset(),m=!0,h=!1,C=1}function O(e){var r=A(),t=R();if(r)return w(),!1;if(L()||0===t){var o=x(e);if(!P(o))return console.log("Cannot move there!"),f.send("Cannot move there!"),!1;y(o)}return!r&&(t>0&&S(),!0)}function y(e){f.send(e.piece+": moves "+e.row+", "+e.column),j(e)?(m?(console.log("You have WON!!!"),f.send("You have WON!!!"),c.showMessage("win")):(console.log("You have LOST :(((("),f.send("You have LOST :(((("),c.showMessage("loss")),h=!0):q(e)?(console.log("You have tied :|"),f.send("You have tied :|"),c.showMessage("tie"),h=!0):(m=!m,C++)}function P(e){return!!Y(e)&&(d.setBoardCell(e),c.update(e),!0)}function S(){var e={},r={};e.score=0,r.score=0;for(var t=0;t<3;t++)for(var o=0;o<3;o++)(r=G(t+1,o+1)).score=0,Y(r)&&(r.score=N(r),r.score>=e.score&&(e=JSON.parse(JSON.stringify(r))));e.hasOwnProperty("row")||(e=JSON.parse(JSON.stringify(r)),console.log("error! no best move!")),P(e)&&y(e)}function b(){}function N(e){for(var r=void 0,t=arguments.length,o=Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];var i=0;return(r=o&&o.length>0?o[0]:d.makeCopyOfBoard())[e.row-1][e.column-1]=e.piece,i+=T(d.getRows(r)),i+=T(d.getColumns(r)),i+=T(d.getDiagonals(r))}function T(e){return e.reduce(function(e,r){var t=r.reduce(function(e,r){return r===p?e<0?-100:e+=1:r===v?e>0?100:e-=1:""===r?e+0:void 0},0);return Math.abs(t)>3?e+0:e+function(e){var r=0;r=0===e?e:e<0?-Math.pow(10,Math.abs(e)-1):Math.pow(10,Math.abs(e)-1);return r}(t)},0)}function Y(e){return""===d.getBoardCell(e.row,e.column)&&!h}function j(e){var r=1,t=1,o=0,n=e.row.toString()+","+e.column.toString();for(r=1;r<=3;r++)d.getBoardCell(e.row,r)===e.piece&&o++;if(3===o)return!0;for(o=0,t=1;t<=3;t++)d.getBoardCell(t,e.column)===e.piece&&o++;if(3===o)return!0;if(o=0,"1,1"===n){if(d.getBoardCell(2,2)===e.piece&&d.getBoardCell(3,3)===e.piece)return!0}else if("1,3"===n){if(d.getBoardCell(2,2)===e.piece&&d.getBoardCell(3,1)===e.piece)return!0}else if("2,2"===n){if(d.getBoardCell(1,1)===e.piece&&d.getBoardCell(3,3)===e.piece)return!0;if(d.getBoardCell(1,3)===e.piece&&d.getBoardCell(3,1)===e.piece)return!0}else if("3,1"===n){if(d.getBoardCell(2,2)===e.piece&&d.getBoardCell(1,3)===e.piece)return!0}else if("3,3"===n&&d.getBoardCell(2,2)===e.piece&&d.getBoardCell(1,1)===e.piece)return!0;return!1}function q(e){for(var r=d.getBoard(),t=0;t<r.length;t++)for(var o=0;o<r[t].length;o++)if(""===r[t][o])return!1;return!0}function x(e){var r=e.getAttribute("id"),t=r.indexOf("x");return{id:r,row:Number.parseInt(r.substring(0,t)),column:Number.parseInt(r.substring(t+1)),piece:J()}}function G(e,r){return{id:e+"x"+r,row:e,column:r,piece:arguments.length>2&&void 0!==arguments[2]?arguments[2]:p}}function J(){return m?v:p}function _(){return v}function I(e){v=e,p="X"===e?"O":"X"}function W(){}function X(){return C}function k(){C++}function A(){return h}function F(){h=!h}function L(){return m}function D(){m=!m}function R(){return B}function V(e){B=e}g.start=M,g.update=O,g.reset=w,g.board=d,g.playerPiece=v,g.playerTurn=m,g.gameOver=h,g.turn=C,g.gameMode=B,g.determineGameState=y,g.makeMove=P,g.aiPlayerMove=S,g.getMoveScore=N,g.getScore=T,g.isMoveValid=Y,g.isWin=j,g.isTie=q,g.createMoveFromSquare=x,g.createMoveFromCoords=G,g.getPlayerPiece=_,g.setPlayerPiece=I,g.getCurrentPiece=J,g.toggleCurrentPiece=W,g.getTurn=X,g.incrementTurn=k,g.getGameOver=A,g.toggleGameOver=F,g.getIsPlayerTurn=L,g.togglePlayerTurn=D,g.getGameMode=R,g.setGameMode=V,exports.default=g;
},{"./model.js":10,"./Board.js":11,"./Control.js":12,"./Message.js":13}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./game.js"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}exports.default=t.default.start();
},{"./game.js":8}]},{},[6])
//# sourceMappingURL=/app.f156ab4b.map