!function(e){function t(t){for(var n,a,d=t[0],l=t[1],s=t[2],m=0,c=[];m<d.length;m++)a=d[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&c.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(t);c.length;)c.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,d=1;d<o.length;d++){var l=o[d];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},i={1:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var p=l;r.push([18,2,4,3,0]),o()}({10:function(e,t,o){var n=o(11),i=o(12),r=o(13),a=o(14),d=o(15);(t=n(!1)).push([e.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var l=i(r),s=i(a),p=i(d);t.push([e.i,"[data-theme=light]{--primary-color: #EEEEEE;--primary-dark-color: #d5d5d5;--primary-light-color: #f4f4f4;--secondary-color: #171332;--tertiary-color: #4AE3B5;--danger-color: #d72323;--accent-color: #000000}[data-theme=dark]{--primary-color: #171332;--primary-dark-color: #221c49;--primary-light-color: #120f28;--secondary-color:#EEEEEE;--tertiary-color: #4AE3B5;--danger-color: #d72323;--accent-color: #f4f4f4}a{color:#000;text-decoration:none;cursor:pointer}h1,h2,h3,h4,h5,h6{margin:0}ul{margin:0;padding:0;list-style:none}figure{margin:0}button,input,textarea{border:none;outline:none}button{cursor:pointer}nav{padding:15px 5%;position:fixed;top:0;height:45px;width:90%;z-index:998;background:var(--primary-color);box-shadow:0 5px 4px rgba(0,0,0,.25)}nav .nav-wrapper{position:relative;height:100%}nav .logo{position:absolute;left:50%;transform:translateX(-50%);line-height:50px;color:var(--secondary-color);font-family:Merriweather serif;font-size:30px;font-weight:bold}nav .logo.nav-title{width:180px;height:100%;text-align:left;font-size:30px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media only screen and (min-width: 601px)and (max-width: 992px){nav .logo.nav-title{font-size:36px;width:400px}}@media only screen and (min-width: 993px){nav .logo.nav-title{font-size:36px;width:fit-content;left:50%}}@media only screen and (min-width: 993px){nav .logo{left:7.5%;font-size:36px}}nav .material-icons{color:var(--secondary-color)}nav .sidenav-trigger,nav .fav-btn,nav .back-btn,nav .delete-btn{position:absolute;transform:translate(-50%);font-size:48px}nav .sidenav-trigger{left:7.5%}@media only screen and (min-width: 993px){nav .sidenav-trigger{display:none}}nav .back-btn{left:7.5%}@media only screen and (min-width: 993px){nav .back-btn{left:5%}}nav .fav-btn{left:90%}@media only screen and (min-width: 993px){nav .fav-btn{left:95%}}nav .delete-btn{color:#ff304f;left:90%}@media only screen and (min-width: 993px){nav .delete-btn{left:95%}}nav ul{position:absolute;top:0;right:0}@media only screen and (max-width: 600px){nav ul{display:none}}@media only screen and (min-width: 601px)and (max-width: 992px){nav ul{display:none}}@media only screen and (min-width: 993px){nav ul{display:flex;align-items:center;justify-content:right}}nav ul li{display:flex;justify-content:center;align-items:center}nav ul li>a{color:var(--secondary-color);text-align:center;font-style:Roboto sans-serif;font-size:24px;font-weight:normal;line-height:50px;width:150px;height:fit-content;transition:.3s}nav ul li>a:hover{font-weight:bold}.dropdown-content{box-shadow:0 0 7px 2px rgba(0,0,0,.32);pointer-events:none;opacity:0;transition:.3s all;margin-top:50px;position:absolute;transform:translate(-50%, 0);display:block;width:fit-content}.dropdown-content li{width:160px;border-top:.25px;border-color:var(--secondary-color);margin:auto;background:var(--primary-color)}.dropdown-content li:nth-child(1){border-top:none}.dropdown-content li>a{color:var(--secondary-color);display:flex;align-items:center;padding:0 15px;text-align:left}.dropdown-content li>a>i{margin-right:10px;margin-left:10px}.dropdown-content li>a>.active-icons{display:none}.dropdown-content li>.active>.active-icons{display:initial}#favor-dropdown{left:50%}#theme-dropdown{left:70%}.review-btn{position:fixed;right:5%;bottom:10%;width:75px;height:75px;border-radius:100%;background:var(--tertiary-color);color:#171332;box-shadow:0 4px 4px 0 #000 25%}@media only screen and (min-width: 993px){.review-btn:hover{background:var(--secondary-color)}.review-btn:hover i{color:var(--tertiary-color)}}.review-btn i{line-height:32px;font-size:32px}.modal{visibility:hidden;background:rgba(13,165,116,.4);position:fixed;width:100%;height:100%;left:0;top:0;display:flex;justify-content:center;align-items:center;z-index:1000}.modal .modal-content{position:relative;background:var(--primary-color);padding-bottom:0;height:fit-content;overflow:auto}@media only screen and (max-width: 600px){.modal .modal-content{border-radius:20px;padding:30px 20px;width:280px}}@media only screen and (min-width: 601px)and (max-width: 992px){.modal .modal-content{border-radius:40px;padding:60px 30px;width:400px}}@media only screen and (min-width: 993px){.modal .modal-content{border-radius:40px;padding:60px 30px;width:480px}}.modal .close-btn{background:#ff304f;position:absolute;right:5%;top:5%;width:fit-content;height:fit-content;padding:10px}.modal .close-btn i{color:#f6f6f6;font-size:36px}.modal .close-btn:hover{border:none;background:var(--tertiary-color)}.modal .close-btn:hover i{color:#ff304f}@media only screen and (max-width: 600px){.modal .close-btn{background:transparent;top:0;right:0}.modal .close-btn i{color:#ff304f}}.modal .input-group{text-align:center;margin-bottom:30px;display:grid;justify-content:center}.modal .input-group label{font-weight:Roboto sans-serif;font-weight:700;justify-self:start;margin-bottom:15px;margin-left:20px;color:var(--accent-color)}@media only screen and (max-width: 600px){.modal .input-group label{font-size:18px}}@media only screen and (min-width: 601px){.modal .input-group label{font-size:20px}}@media only screen and (min-width: 601px){.modal .input-group:nth-last-child(1){margin-top:30px;margin-bottom:0}}.modal h2{text-align:center;color:var(--accent-color);margin-bottom:30px}.modal input{background:var(--primary-dark-color);color:var(--accent-color);border-radius:20px;font-family:Roboto sans-serif}@media only screen and (max-width: 600px){.modal input{padding:0 20px;font-size:18px;width:210px;height:50px}}@media only screen and (min-width: 601px){.modal input{padding:0 30px;height:50px;width:290px;font-size:20px}}.modal input:focus{border:2px solid var(--accent-color)}.modal textarea{background:var(--primary-dark-color);color:var(--accent-color);border-radius:20px;resize:none;font-family:Roboto sans-serif}@media only screen and (max-width: 600px){.modal textarea{font-size:18px;padding:10px 20px;width:210px;height:130px}}@media only screen and (min-width: 601px){.modal textarea{font-size:20px;padding:20px 30px;width:290px;height:110px}}.modal textarea:focus{border:2px solid var(--accent-color)}.modal button{color:#000;font-family:Roboto sans-serif;font-weight:bold;font-size:24px;border-radius:15px;background:var(--tertiary-color);width:fit-content;height:fit-content;padding:20px;margin:auto;box-shadow:0px 4px 4px 0px #000 25%}.modal button:hover{border:2px solid var(--accent-color)}@keyframes openModal{from{transform:scale(0, 0)}to{transform:scale(100%, 100%)}}@keyframes closeModal{from{transform:scale(100%, 100%)}to{transform:scale(0, 0)}}.resto-description,.resto-menu,.resto-reviews{width:80%;color:var(--secondary-color);margin:40px 10%}.resto-description .food,.resto-description .drink,.resto-menu .food,.resto-menu .drink,.resto-reviews .food,.resto-reviews .drink{margin:50px 0}.resto-description ul,.resto-menu ul,.resto-reviews ul{margin:18px 0;list-style-type:square;list-style-position:inside}.resto-description ul>li,.resto-menu ul>li,.resto-reviews ul>li{margin:10px 0}.resto-description h3,.resto-menu h3,.resto-reviews h3{font-family:Merriweather serif;font-size:20px;text-align:center;font-weight:bold}.resto-description p,.resto-description ul>li,.resto-menu p,.resto-menu ul>li,.resto-reviews p,.resto-reviews ul>li{color:var(--accent-color);font-family:Roboto sans-serif;font-size:18px;font-weight:500}@media only screen and (max-width: 600px){.resto-description p,.resto-menu p,.resto-reviews p{line-height:30px}}@media only screen and (min-width: 601px){.resto-description,.resto-menu,.resto-reviews{margin:40px 5%;border:2px solid var(--accent-color);border-radius:20px;padding:40px 5%}.resto-description.resto-menu,.resto-menu.resto-menu,.resto-reviews.resto-menu{width:540px;margin:auto;display:flex;justify-content:center;justify-content:space-around}.resto-description.resto-menu>.food,.resto-description.resto-menu>.drink,.resto-menu.resto-menu>.food,.resto-menu.resto-menu>.drink,.resto-reviews.resto-menu>.food,.resto-reviews.resto-menu>.drink{margin:0}.resto-description h3,.resto-menu h3,.resto-reviews h3{font-size:24px}.resto-description p,.resto-description ul>li,.resto-menu p,.resto-menu ul>li,.resto-reviews p,.resto-reviews ul>li{font-size:20px}.resto-description p,.resto-menu p,.resto-reviews p{line-height:40px}}@media only screen and (min-width: 601px){.resto-reviews{border:none}}.resto-reviews .review{color:var(--accent-color);margin:20px;width:90%;height:fit-content;padding:20px 5%;border:2px solid var(--accent-color);text-align:center;border-radius:15px}@media only screen and (min-width: 601px){.resto-reviews .review{width:320px;padding:20px}}.resto-reviews .consumer-review{margin:20px 0;display:flex;justify-content:center;flex-wrap:wrap}@media only screen and (min-width: 601px){.resto-reviews .consumer-review{margin:40px 0}}.resto-reviews .review>h4{font-family:Roboto sans-serif;font-weight:400;margin:10px 0}@media only screen and (min-width: 601px){.resto-reviews .review>h4{font-size:20px}}.resto-reviews .review>h3:nth-child(3){font-weight:300;font-family:Roboto sans-serif}.meal-instruction,.meal-ingredient{width:60%;color:var(--secondary-color);margin:40px auto}.meal-instruction .ingredient>ul,.meal-ingredient .ingredient>ul{list-style-type:square}.meal-instruction ul,.meal-ingredient ul{list-style-type:none;margin:18px 0}.meal-instruction ul>li,.meal-ingredient ul>li{margin:10px 0}.meal-instruction ol>li,.meal-ingredient ol>li{margin:10px 0;line-height:30px}.meal-instruction h3,.meal-ingredient h3{font-family:Merriweather serif;font-size:20px;text-align:center;font-weight:bold}.meal-instruction ol>li,.meal-instruction ul>li,.meal-ingredient ol>li,.meal-ingredient ul>li{color:var(--accent-color);font-family:Roboto sans-serif;font-size:18px;font-weight:500}@media only screen and (min-width: 601px)and (max-width: 992px){.meal-instruction,.meal-ingredient{width:70%}}@media only screen and (min-width: 601px){.meal-instruction,.meal-ingredient{margin:40px auto;border:2px solid var(--accent-color);border-radius:20px;padding:40px 5%}.meal-instruction.meal-ingredient,.meal-ingredient.meal-ingredient{margin-bottom:50px;width:540px;display:flex;justify-content:space-around}.meal-instruction.meal-ingredient>.ingredient,.meal-instruction.meal-ingredient>.measure,.meal-ingredient.meal-ingredient>.ingredient,.meal-ingredient.meal-ingredient>.measure{margin:0}.meal-instruction h3,.meal-ingredient h3{font-size:24px}.meal-instruction ol>li,.meal-instruction ul>li,.meal-ingredient ol>li,.meal-ingredient ul>li{font-size:20px}}@media only screen and (max-width: 600px){.meal-instruction,.meal-ingredient{width:85%}.meal-instruction ol,.meal-ingredient ol{padding-left:15px}.meal-instruction.meal-ingredient,.meal-ingredient.meal-ingredient{display:flex;justify-content:space-around}}#sidenav-overlay{position:fixed;left:0;right:0;top:0;height:100%;width:100%;z-index:998;background:rgba(0,0,0,.5);display:none;transition:.2s}.sidenav{width:300px;position:fixed;left:0;top:0;margin:0;transform:translateX(-100%);height:100%;height:calc(100% + 60px);width:getSidenav(width);z-index:999;background:var(--primary-color);transition:.2s ease;overflow-y:auto;will-change:transform;backface-visibility:hidden;transform:translateX(-105%)}.sidenav li>a{color:var(--secondary-color);font-weight:bold;line-height:75px;font-size:24px;display:flex;height:75px;width:100%}.sidenav li>a>i{display:flex;justify-content:center;align-items:center;font-size:30px;text-align:center;height:75px;width:75px}.sidenav li>a>.active-icons{position:absolute;right:0%;display:none;background:var(--tertiary-color);width:75px;height:75px;color:#171332;font-size:36px}.sidenav li>a.active>.active-icons{display:flex;justify-content:center;align-items:center}.sidenav-header{position:relative;width:100%;height:200px;background:var(--tertiary-color)}.sidenav-header h1{color:#171332;font-family:Merriweather serif;font-size:36px;font-weight:bold;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.theme-header,.favor-header{margin-bottom:50px}.close-nav{cursor:pointer;color:#eee;background:var(--danger-color);z-index:50;position:absolute;right:0;top:0;width:50px;height:50px}.back-nav{width:140px;height:50px;display:flex;justify-content:center;align-items:center;font-family:Merriweather serif;font-weight:bold;font-size:24px;color:#171332;background:var(--tertiary-color);position:absolute;left:0;top:0}.jumbotron{background:var(--primary-dark-color);margin-top:75px;position:relative;display:flex;justify-content:center}@media only screen and (min-width: 993px){.jumbotron{margin-top:60px;padding:50px 0}}.jumbotron .resto-cover,.jumbotron .meal-cover{position:relative;width:fit-content;height:fit-content}@media only screen and (min-width: 601px)and (max-width: 992px){.jumbotron .resto-cover,.jumbotron .meal-cover{margin:40px 0}}@media only screen and (min-width: 993px){.jumbotron .resto-cover,.jumbotron .meal-cover{margin:0}}.jumbotron .resto-info,.jumbotron .meal-info{position:absolute;left:10%;bottom:10%;display:block;color:#eee}.jumbotron .resto-info h1,.jumbotron .meal-info h1{font-family:Merriweather serif}.jumbotron .resto-info h3,.jumbotron .resto-info h4,.jumbotron .resto-info h5,.jumbotron .meal-info h3,.jumbotron .meal-info h4,.jumbotron .meal-info h5{font-family:Roboto sans-serif;font-weight:500}.jumbotron .resto-info h4,.jumbotron .resto-info h5,.jumbotron .meal-info h4,.jumbotron .meal-info h5{margin:5px 0}.jumbotron .resto-info h3,.jumbotron .meal-info h3{display:flex;align-items:center}.jumbotron .resto-info i,.jumbotron .meal-info i{font-size:20px;margin-left:5px}@media only screen and (min-width: 601px)and (max-width: 992px){.jumbotron .resto-info,.jumbotron .meal-info{bottom:20%}.jumbotron .resto-info h1,.jumbotron .meal-info h1{font-size:36px;margin-bottom:5px}.jumbotron .resto-info h3,.jumbotron .meal-info h3{font-size:24px}.jumbotron .resto-info h4,.jumbotron .meal-info h4{font-size:20px}.jumbotron .resto-info h5,.jumbotron .meal-info h5{font-size:18px}.jumbotron .resto-info i,.jumbotron .meal-info i{font-size:20px}}@media only screen and (min-width: 601px)and (max-width: 992px){.jumbotron .resto-info,.jumbotron .meal-info{bottom:10%}.jumbotron .resto-info h1,.jumbotron .meal-info h1{font-size:48px;margin-bottom:5px}.jumbotron .resto-info h3,.jumbotron .meal-info h3{font-size:32px}.jumbotron .resto-info h4,.jumbotron .meal-info h4{font-size:24px}.jumbotron .resto-info h5,.jumbotron .meal-info h5{font-size:20px}.jumbotron .resto-info i,.jumbotron .meal-info i{font-size:24px}}@media only screen and (min-width: 993px){.jumbotron .resto-info,.jumbotron .meal-info{left:5%;bottom:10%}.jumbotron .resto-info h1,.jumbotron .meal-info h1{font-size:54px;margin-bottom:5px}.jumbotron .resto-info h3,.jumbotron .meal-info h3{font-size:32px}.jumbotron .resto-info h4,.jumbotron .meal-info h4{font-size:32px}.jumbotron .resto-info h5,.jumbotron .meal-info h5{font-size:24px}.jumbotron .resto-info i,.jumbotron .meal-info i{font-size:32px}}.jumbotron img,.jumbotron .jumbotron-background{width:100%;height:66.66vw;filter:brightness(50%)}.jumbotron .jumbotron-background{background:url("+l+") center;background-size:cover}@media only screen and (min-width: 601px)and (max-width: 992px){.jumbotron .jumbotron-background{background:url("+s+") center;background-size:cover}}@media only screen and (min-width: 993px){.jumbotron .jumbotron-background{background:url("+p+') center;background-size:cover;height:500px}}.jumbotron img{filter:brightness(40%)}@media only screen and (min-width: 601px)and (max-width: 992px){.jumbotron img{width:540px;height:360px;border-radius:20px}}@media only screen and (min-width: 993px){.jumbotron img{width:900px;height:480px;border-radius:20px}}.jumbotron .copywriter{font-size:28px;font-family:Merriweather serif;color:#eee;text-align:center;position:absolute;width:90%;top:50%;left:50%;transform:translate(-50%, -50%)}@media only screen and (min-width: 601px)and (max-width: 992px){.jumbotron .copywriter{font-size:48px}}@media only screen and (min-width: 993px){.jumbotron .copywriter{width:90%;max-width:900px;font-size:56px}}.container{width:95%;margin:auto}@media only screen and (max-width: 600px){.container{margin-top:80px;margin-bottom:50px;overflow-x:hidden}}@media only screen and (min-width: 601px)and (max-width: 992px){.container{margin-top:75px;margin-bottom:75px}}@media only screen and (min-width: 993px){.container{margin-top:100px;margin-bottom:100px}}.container h2{color:var(--secondary-color);text-align:center;margin-bottom:20px}@media only screen and (min-width: 601px){.container h2{font-size:32px;margin-bottom:30px}}.container .resto-loader,.container .meal-loader{width:100%;height:fit-content;display:flex;justify-content:center}@media only screen and (min-width: 601px){.restaurant-list,.meal-list{display:flex;justify-content:center;flex-wrap:wrap;align-items:center}}.restaurant-list h1,.meal-list h1{text-align:center;color:var(--secondary-color);margin:auto}@media only screen and (max-width: 600px){.restaurant-list h1,.meal-list h1{margin-top:35vh;width:90%}}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant-list h1,.meal-list h1{margin-top:40vh}}@media only screen and (min-width: 993px){.restaurant-list h1,.meal-list h1{margin-top:30vh}}.meal{display:flex;justify-content:flex-start;align-items:center;border-color:var(--secondary-color)}@media only screen and (max-width: 600px){.meal{margin:auto;padding:10px 15px;height:100px;width:95%;border-bottom:.5px solid;border-color:var(--secondary-color)}.meal:nth-child(1){border-top:.5px solid;border-color:var(--secondary-color)}}@media only screen and (min-width: 601px)and (max-width: 992px){.meal{background:var(--primary-light-color);display:block;border-radius:20px;width:200px;height:160px;border:2px solid;padding:20px;margin:20px 30px;border-color:var(--secondary-color)}}@media only screen and (min-width: 993px){.meal{background:var(--primary-light-color);display:block;border-radius:20px;width:220px;height:190px;border:2px solid;padding:20px;margin:20px 20px;border-color:var(--secondary-color)}}.meal figure{display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 600px){.meal figure{margin-right:20px;height:100%}}@media only screen and (min-width: 601px)and (max-width: 992px){.meal figure{margin:0;height:fit-content}}@media only screen and (min-width: 993px){.meal figure{margin:0;height:fit-content}}.meal figure img{image-rendering:optimizeSpeed;box-sizing:border-box;border:1px solid;border-color:var(--secondary-color);border-radius:10px;filter:brightness(90%)}@media only screen and (max-width: 600px){.meal figure img{width:90px;height:90px}}@media only screen and (min-width: 601px)and (max-width: 992px){.meal figure img{width:180px;height:120px}}@media only screen and (min-width: 993px){.meal figure img{width:210px;height:140px}}@media only screen and (min-width: 601px)and (max-width: 992px){.meal .meal-detail{text-align:center}}@media only screen and (min-width: 993px){.meal .meal-detail{text-align:center}}.meal .meal-detail .title{font-family:Merriweather serif;font-size:18px;font-weight:bold;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--secondary-color)}@media only screen and (max-width: 600px){.meal .meal-detail .title{white-space:normal;width:200px}}@media only screen and (min-width: 601px)and (max-width: 992px){.meal .meal-detail .title{width:190px}}@media only screen and (min-width: 993px){.meal .meal-detail .title{width:210px}}.meal .meal-detail .title a{color:var(--secondary-color);padding:12px;transition:.3s}@media only screen and (max-width: 600px){.meal .meal-detail .title a{padding-left:0}}.meal .meal-detail .title a:hover{text-decoration:underline}@media only screen and (min-width: 601px)and (max-width: 992px){.meal .meal-detail .title{font-size:20px;margin-top:20px;margin-bottom:10px}}@media only screen and (min-width: 993px){.meal .meal-detail .title{font-size:24px;margin-top:20px;margin-bottom:5px}}.restaurant{display:flex;justify-content:space-between;align-items:center;border-color:var(--secondary-color)}@media only screen and (max-width: 600px){.restaurant{margin:auto;padding:0 15px;height:150px;width:95%;border-bottom:.5px solid;border-color:var(--secondary-color)}.restaurant:nth-child(1){border-top:.5px solid;border-color:var(--secondary-color)}}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant{background:var(--primary-light-color);display:block;border-radius:20px;width:200px;height:280px;border:2px solid;padding:20px;margin:20px 30px;border-color:var(--secondary-color)}}@media only screen and (min-width: 993px){.restaurant{background:var(--primary-light-color);display:block;border-radius:20px;width:220px;height:320px;border:2px solid;padding:20px;margin:20px 20px;border-color:var(--secondary-color)}}.restaurant figure{display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 600px){.restaurant figure{margin-right:20px;height:100%}}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant figure{margin:0;height:fit-content}}@media only screen and (min-width: 993px){.restaurant figure{margin:0;height:fit-content}}.restaurant figure img{image-rendering:optimizeSpeed;box-sizing:border-box;border:1px solid;border-color:var(--secondary-color);border-radius:10px;filter:brightness(90%)}@media only screen and (max-width: 600px){.restaurant figure img{width:90px;height:90px}}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant figure img{width:180px;height:120px}}@media only screen and (min-width: 993px){.restaurant figure img{width:210px;height:140px}}.restaurant .restaurant-detail{display:flex;justify-content:center;align-items:center}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant .restaurant-detail{text-align:center}}@media only screen and (min-width: 993px){.restaurant .restaurant-detail{text-align:center}}.restaurant .restaurant-detail .title{font-family:Merriweather serif;font-size:18px;font-weight:bold;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--secondary-color)}@media only screen and (max-width: 600px){.restaurant .restaurant-detail .title{width:150px}}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant .restaurant-detail .title{width:180px}}@media only screen and (min-width: 993px){.restaurant .restaurant-detail .title{width:210px}}.restaurant .restaurant-detail .title a{color:var(--secondary-color);padding:12px;transition:.3s}@media only screen and (max-width: 600px){.restaurant .restaurant-detail .title a{padding-left:0}}.restaurant .restaurant-detail .title a:hover{text-decoration:underline}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant .restaurant-detail .title{font-size:20px;margin-top:20px;margin-bottom:10px}}@media only screen and (min-width: 993px){.restaurant .restaurant-detail .title{font-size:24px;margin-top:20px;margin-bottom:5px}}.restaurant .restaurant-detail .rating,.restaurant .restaurant-detail .description{color:var(--accent-color);text-align:left;display:flex;font-size:14px;font-weight:300;font-family:Roboto sans-serif}.restaurant .restaurant-detail .rating i,.restaurant .restaurant-detail .description i{line-height:14px;color:var(--secondary-color);font-size:18px}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant .restaurant-detail .rating i,.restaurant .restaurant-detail .description i{line-height:18px}}@media only screen and (min-width: 993px){.restaurant .restaurant-detail .rating i,.restaurant .restaurant-detail .description i{line-height:18px}}@media only screen and (max-width: 600px){.restaurant .restaurant-detail .rating,.restaurant .restaurant-detail .description{margin-bottom:5px}}@media only screen and (min-width: 601px)and (max-width: 992px){.restaurant .restaurant-detail .rating,.restaurant .restaurant-detail .description{justify-content:center;font-size:16px;margin-bottom:10px}}@media only screen and (min-width: 993px){.restaurant .restaurant-detail .rating,.restaurant .restaurant-detail .description{margin-bottom:15px;justify-content:center;font-size:16px}}.swal-overlay{background-color:rgba(13,165,116,.4)}.swal-modal{background-color:var(--primary-color);border-radius:20px}.swal-text,.swal-title{font-family:Roboto sans-serif;font-weight:500;color:var(--accent-color)}@media only screen and (min-width: 601px){.swal-text,.swal-title{font-size:18px}}.swal-button{font-family:Roboto sans-serif;font-weight:bold}@media only screen and (min-width: 601px){.swal-button{font-size:18px}}.swal-button--confirm{background-color:var(--tertiary-color);color:#000}.swal-button--confirm:focus{outline:2px dashed var(--accent-color)}.swal-button--danger{background-color:var(--danger-color);color:#f6f6f6}.swal-button--danger:focus{outline:2px dashed var(--accent-color)}.swal-button--cancel{border:2px solid var(--secondary-color);background-color:transparent;color:var(--accent-color)}.swal-button--cancel:not([disabled]):hover,.swal-button--cancel:hover{background-color:var(--secondary-color);color:var(--primary-color)}.swal-button--cancel:focus{outline:2px dashed var(--accent-color)}.swal-icon--success::after,.swal-icon--success__hide-corners,.swal-icon--success::before{background:transparent}@keyframes ldio-0as4myltz1ws{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}.loader-wrapper{position:fixed;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.ldio-0as4myltz1ws div{position:absolute;width:60px;height:60px;border:10px solid var(--secondary-color);border-top-color:transparent;border-radius:50%}.ldio-0as4myltz1ws div{animation:ldio-0as4myltz1ws 1s linear infinite;top:100px;left:100px}.loadingio-spinner-rolling-s1fw21anmf{width:200px;height:200px;display:inline-block;overflow:hidden;background:transparent}.ldio-0as4myltz1ws{width:100%;height:100%;position:relative;transform:translateZ(0) scale(1);backface-visibility:hidden;transform-origin:0 0}.ldio-0as4myltz1ws div{box-sizing:content-box}.page-not-found{position:absolute;left:50%;top:50%;width:100%;height:fit-content;transform:translate(-50%, -50%);text-align:center}.page-not-found .not-found{margin:auto;text-align:center;background:var(--secondary-color);font-family:Merriweather serif;font-weight:bold;color:var(--primary-color);border-radius:50px}@media only screen and (max-width: 600px){.page-not-found .not-found{width:80%;padding:10px 0;font-size:64px}}@media only screen and (min-width: 601px){.page-not-found .not-found{width:fit-content;font-size:110px;padding:20px 20vw}}.page-not-found .message{text-align:center;color:var(--accent-color);font-family:Merriweather serif;font-weight:bold}@media only screen and (max-width: 600px){.page-not-found .message{margin:30px 0;font-size:28px}}@media only screen and (min-width: 601px){.page-not-found .message{margin:50px 0;font-size:48px}}.page-not-found a{border-radius:15px;background:var(--tertiary-color);color:#0f0a3c;font-size:24px;font-family:Merriweather serif;font-weight:bold;box-shadow:0px 4px 4px 0px #000 25%}.page-not-found a:hover{background:var(--secondary-color);color:var(--primary-color)}@media only screen and (max-width: 600px){.page-not-found a{padding:20px}}@media only screen and (min-width: 601px){.page-not-found a{padding:20px 40px}}.about-us{display:grid;position:absolute;left:50%;top:50%;width:90%;height:fit-content;transform:translate(-50%, -50%)}.about-us .logo{grid-area:logo}.about-us .logo .logo-content{margin:0 auto;height:200px;width:200px;line-height:200px;text-align:center;background:var(--secondary-color);font-family:Merriweather serif;font-weight:bold;color:var(--primary-color);border-radius:30px;padding:0}@media only screen and (max-width: 600px){.about-us .logo .logo-content{height:150px;width:150px;line-height:150px;font-size:100px}}@media only screen and (min-width: 601px){.about-us .logo .logo-content{font-size:160px}}.about-us .title{grid-area:title;font-family:Merriweather serif;font-weight:bold;color:var(--accent-color)}@media only screen and (max-width: 600px){.about-us .title{text-align:center;font-size:28px}}@media only screen and (min-width: 601px)and (max-width: 992px){.about-us .title{text-align:center}}@media only screen and (min-width: 601px){.about-us .title{font-size:48px}}.about-us .message{grid-area:message;color:var(--accent-color);font-family:Roboto sans-serif;font-weight:500}@media only screen and (max-width: 600px){.about-us .message{font-size:20px}}@media only screen and (min-width: 601px){.about-us .message{line-height:40px;font-size:28px}}@media only screen and (min-width: 993px){.about-us{grid-template-areas:"title title title logo logo" "message message message logo logo";grid-template-columns:1fr 1fr 1fr 1fr 1fr}}@media only screen and (min-width: 601px)and (max-width: 992px){.about-us{grid-gap:40px;grid-template-areas:"title" "logo" "message"}}@media only screen and (max-width: 600px){.about-us{grid-gap:30px;grid-template-areas:"title" "logo" "message"}}.error{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.error h1{text-align:center;color:var(--secondary-color);font-family:Roboto sans-serif;font-weight:bold}@media only screen and (max-width: 600px){.error h1{font-size:28px}}.error .svg-wrapper{display:flex;width:100%;justify-content:center;margin:30px 0}.error .error-icon{width:200px;height:200px}@media only screen and (max-width: 600px){.error .error-icon{width:150px;height:150px}}.error .error-icon circle,.error .error-icon line{stroke:var(--secondary-color)}footer{color:var(--secondary-color);width:90%;margin:auto;margin-bottom:20px;background:transparent;border:2px solid;border-color:var(--secondary-color);font-size:16px;font-family:Merriweather serif;font-weight:bold;text-align:center;padding:20px 0}@media only screen and (min-width: 601px)and (max-width: 992px){footer{font-size:20px}}html{scroll-behavior:smooth}body{margin:0;width:100%;background:var(--primary-color)}html.transition,html.transition *,html.transition *:before,html.transition *:after{transition:all 750ms;transition-delay:0}::-webkit-scrollbar{width:15px}::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{background:var(--secondary-color)}.skip-link{font-family:Roboto sans-serif;font-weight:bold;font-size:18px;position:absolute;top:-40px;left:80px;background-color:var(--tertiary-color);color:#171332;padding:12px;z-index:997}.skip-link:focus{top:15%}',""]),e.exports=t},8:function(e,t,o){var n=o(9),i=o(10);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(i,r);e.exports=i.locals||{}}});
//# sourceMappingURL=main~d8e4105f.bundle.js.map