(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"GtD+":function(l,e,t){"use strict";t.r(e),t.d(e,"DoctorDetailsModuleNgFactory",function(){return N});var n=t("8Y7J");class i{}var a=t("pMnS"),s=t("GQzH"),o=t("7ekq"),r=t("Ek5M"),c=t("8zIM"),u=t("SVse"),d=t("t5dm"),p=t("3RJ5"),g=t("iInd");let m=(()=>{class l{constructor(l){this.router=l,this.page=1,this.doctorblock=d,this.doctordetails=d,this.category=p,this.doctorcategory=p,this.favorite=!1}favoriteTrigger(l){l.favorite=!l.favorite}getCategories(l){return p.filter(e=>l.includes(e.id))}getAuthor(l){return d.filter(e=>l.includes(e.id))}getDoctor(l){this.doctordetails=d.filter(e=>e.id==l)}setCategory(l){this.doctorcategory=l}getCategory(){return this.doctorcategory}getDoctorsByCategory(l){return this.doctorblock=d.filter(e=>e.category.includes(parseInt(l)))}setDoctors(){var l=null!=this.getCategory()?this.getDoctorsByCategory(this.getCategory()):"";(""!=l||null!=l||null!=l)&&l.length>0&&(this.doctorblock=l)}ngAfterContentInit(){this.setCategory(this.router.snapshot.params.catId),this.setDoctors(),this.getDoctor(this.router.snapshot.params.id)}ngOnInit(){}}return l.\u0275prov=n.gc({factory:function(){return new l(n.hc(g.a))},token:l,providedIn:"root"}),l})(),h=(()=>{class l extends m{ngAfterContentInit(){this.setCategory(1),this.setDoctors(),this.getDoctor(1)}}return l.\u0275prov=n.gc({factory:function(){return new l(n.hc(g.a))},token:l,providedIn:"root"}),l})();var f=n.Bb({encapsulation:0,styles:[[""]],data:{}});function b(l){return n.fc(0,[(l()(),n.Db(0,0,null,null,47,"div",[["class","section sigma_post-details"]],null,null,null,null,null)),(l()(),n.Db(1,0,null,null,46,"div",[["class","container"]],null,null,null,null,null)),(l()(),n.Db(2,0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(l()(),n.Db(3,0,null,null,27,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),n.Db(4,0,null,null,26,"div",[["class","sigma_post-details-inner"]],null,null,null,null,null)),(l()(),n.Db(5,0,null,null,25,"div",[["class","entry-content"]],null,null,null,null,null)),(l()(),n.Db(6,0,null,null,20,"div",[["class","sigma_team style-17 mb-0"]],null,null,null,null,null)),(l()(),n.Db(7,0,null,null,19,"div",[["class","row no-gutters"]],null,null,null,null,null)),(l()(),n.Db(8,0,null,null,2,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),n.Db(9,0,null,null,1,"div",[["class","sigma_team-thumb"]],null,null,null,null,null)),(l()(),n.Db(10,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),n.Db(11,0,null,null,15,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),n.Db(12,0,null,null,14,"div",[["class","sigma_team-body"]],null,null,null,null,null)),(l()(),n.Db(13,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),n.cc(14,null,[" "," "])),(l()(),n.Db(15,0,null,null,1,"div",[["class","sigma_team-categories"]],null,null,null,null,null)),(l()(),n.cc(16,null,[" "," "])),(l()(),n.Db(17,0,null,null,9,"div",[["class","sigma_team-info mt-4"]],null,null,null,null,null)),(l()(),n.Db(18,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),n.Db(19,0,null,null,0,"i",[["class","fal fa-phone"]],null,null,null,null,null)),(l()(),n.cc(20,null,[" "," "])),(l()(),n.Db(21,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),n.Db(22,0,null,null,0,"i",[["class","fal fa-at"]],null,null,null,null,null)),(l()(),n.cc(23,null,[" "," "])),(l()(),n.Db(24,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),n.Db(25,0,null,null,0,"i",[["class","fal fa-building"]],null,null,null,null,null)),(l()(),n.cc(26,null,[" "," "])),(l()(),n.Db(27,0,null,null,3,"div",[["class","my-5"],["id","overview"]],null,null,null,null,null)),(l()(),n.Db(28,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),n.cc(29,null,["Sobre ",""])),(l()(),n.Db(30,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),n.Db(31,0,null,null,16,"div",[["class","row d-flex justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),n.Db(32,0,null,null,13,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),n.Db(33,0,null,null,12,"div",[["class","sigma_testimonial style-13 text-left bg-white"]],null,null,null,null,null)),(l()(),n.Db(34,0,null,null,8,"div",[["class","sigma_author-info"]],null,null,null,null,null)),(l()(),n.Db(35,0,null,null,2,"div",[["class","sigma_testimonial-thumb mr-4"]],null,null,null,null,null)),(l()(),n.Db(36,0,null,null,0,"img",[["alt","Dr. William Raymundo"],["src","assets/img/LOGO-3.jpg"]],null,null,null,null,null)),(l()(),n.Db(37,0,null,null,0,"span",[["class","fas fa-quote-left sigma_testimonial-icon"]],null,null,null,null,null)),(l()(),n.Db(38,0,null,null,4,"div",[["class","sigma_author-block"]],null,null,null,null,null)),(l()(),n.Db(39,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),n.cc(-1,null,[" Arist\xf3teles "])),(l()(),n.Db(41,0,null,null,1,"span",[["class","sigma_testimonial-category"]],null,null,null,null,null)),(l()(),n.cc(-1,null,["Fil\xf3sofo"])),(l()(),n.Db(43,0,null,null,2,"div",[["class","sigma_testimonial-body"]],null,null,null,null,null)),(l()(),n.Db(44,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),n.cc(-1,null,['"Somos lo que hacemos d\xeda a d\xeda. De modo que la excelencia no es un acto sino un habito."'])),(l()(),n.Db(46,0,null,null,1,"div",[["class","col-md-6 sigma_team-thumb"]],null,null,null,null,null)),(l()(),n.Db(47,0,null,null,0,"img",[["alt","Dr.William Raymundo"],["src","assets/img/home-2/dr-william-raymundo.jpeg"]],null,null,null,null,null))],null,function(l,e){l(e,10,0,e.context.$implicit.image,e.context.$implicit.name),l(e,14,0,e.context.$implicit.name),l(e,16,0,e.context.$implicit.specialist),l(e,20,0,e.context.$implicit.phone),l(e,23,0,e.context.$implicit.email),l(e,26,0,e.context.$implicit.location),l(e,29,0,e.context.$implicit.name),l(e,30,0,e.context.$implicit.htmltext)})}function y(l){return n.fc(0,[(l()(),n.mb(16777216,null,null,1,null,b)),n.Cb(1,278528,null,0,u.k,[n.W,n.T,n.x],{ngForOf:[0,"ngForOf"]},null)],function(l,e){l(e,1,0,e.component.doctordetails)},null)}var v=t("R8T8"),S=t("FezY");class w{constructor(){}ngOnInit(){}}var k=n.Bb({encapsulation:0,styles:[[""]],data:{}});function I(l){return n.fc(0,[(l()(),n.Db(0,0,null,null,1,"app-header-two",[],null,[["window","scroll"]],function(l,e,t){var i=!0;return"window:scroll"===e&&(i=!1!==n.Sb(l,1).onWindowScroll()&&i),i},s.b,s.a)),n.Cb(1,4308992,null,0,o.a,[],null,null),(l()(),n.Db(2,0,null,null,1,"app-breadcrumbs",[],null,null,null,r.b,r.a)),n.Cb(3,114688,null,0,c.a,[],null,null),(l()(),n.Db(4,0,null,null,1,"app-content",[],null,null,null,y,f)),n.Cb(5,1163264,null,0,h,[g.a],null,null),(l()(),n.Db(6,0,null,null,1,"app-footer",[],null,null,null,v.b,v.a)),n.Cb(7,1163264,null,0,S.a,[g.a],null,null)],function(l,e){l(e,1,0),l(e,3,0),l(e,5,0),l(e,7,0)},null)}function x(l){return n.fc(0,[(l()(),n.Db(0,0,null,null,1,"app-doctor-details",[],null,null,null,I,k)),n.Cb(1,114688,null,0,w,[],null,null)],function(l,e){l(e,1,0)},null)}var O=n.zb("app-doctor-details",w,x,{},{},[]),D=t("9AJC"),L=t("G0yt"),C=t("iryk"),T=t("lABs");class F{constructor(l){this.startScrollPosition=0,this.interruptListenersAttached=!1,this.timer=null,l.scrollViews&&0!==l.scrollViews.length?this.isInlineScrolling=!0:(l.scrollViews=[l.document.documentElement,l.document.body,l.document.body.parentNode],this.isInlineScrolling=!1),this.pageScrollOptions=l}static getScrollingTargetPosition(l,e){const t=l.document.body,n=l.document.documentElement,i=l.document.defaultView&&l.document.defaultView.pageYOffset||n.scrollTop||t.scrollTop,a=l.document.defaultView&&l.document.defaultView.pageXOffset||n.scrollLeft||t.scrollLeft,s=n.clientTop||t.clientTop||0,o=n.clientLeft||t.clientLeft||0;if(null==e)return{top:i,left:a};const r=e.getBoundingClientRect(),c=r.left+a-o;return{top:Math.round(r.top+i-s),left:Math.round(c)}}static getInlineScrollingTargetPosition(l,e){const t={top:e.offsetTop,left:e.offsetLeft};if(l.advancedInlineOffsetCalculation&&1===l.scrollViews.length){const n={top:0,left:0},i=e.ownerDocument.defaultView;let a=!1,s=e.parentElement;for(;!a&&null!=s;)"relative"===i.getComputedStyle(s).getPropertyValue("position")&&(n.top+=s.offsetTop,n.left+=s.offsetLeft),s=s.parentElement,a=s===l.scrollViews[0];a&&(t.top+=n.top,t.left+=n.left)}return t}getScrollPropertyValue(l){return this.pageScrollOptions.verticalScrolling?l.scrollTop:l.scrollLeft}getScrollClientPropertyValue(l){return this.pageScrollOptions.verticalScrolling?l.clientHeight:l.clientWidth}extractScrollTargetPosition(){const l=this.getScrollTargetElement();return null==l?{top:NaN,left:NaN}:this.isInlineScrolling?F.getInlineScrollingTargetPosition(this.pageScrollOptions,l):F.getScrollingTargetPosition(this.pageScrollOptions,l)}getCurrentOffset(){return this.pageScrollOptions.scrollOffset}setScrollPosition(l){return this.pageScrollOptions.scrollViews.reduce((e,t)=>{const n=this.getScrollPropertyValue(t);if(t&&null!=n){const e=Math.abs(n-l),i=e<this.pageScrollOptions._minScrollDistance;if(this.pageScrollOptions.verticalScrolling?t.scrollTop=l:t.scrollLeft=l,i||e>Math.abs(this.getScrollPropertyValue(t)-l))return!0}return e},!1)}fireEvent(l){this.pageScrollOptions.scrollFinishListener&&this.pageScrollOptions.scrollFinishListener.emit(l)}attachInterruptListeners(l){this.interruptListenersAttached&&this.detachInterruptListeners(),this.interruptListener=e=>{l.report(e,this)},this.pageScrollOptions.interruptEvents.forEach(l=>this.pageScrollOptions.document.body.addEventListener(l,this.interruptListener)),this.interruptListenersAttached=!0}detachInterruptListeners(){this.pageScrollOptions.interruptEvents.forEach(l=>this.pageScrollOptions.document.body.removeEventListener(l,this.interruptListener)),this.interruptListenersAttached=!1}getScrollTargetElement(){if("string"==typeof this.pageScrollOptions.scrollTarget){const l=this.pageScrollOptions.scrollTarget;return null!==l.match(/^#[^\s]+$/g)?this.pageScrollOptions.document.getElementById(l.substr(1)):this.pageScrollOptions.document.querySelector(l)}return this.pageScrollOptions.scrollTarget}}const M=new n.u("ngxps_config"),_={_interval:10,_minScrollDistance:2,_logLevel:1,namespace:"default",verticalScrolling:!0,duration:1250,scrollOffset:0,advancedInlineOffsetCalculation:!1,interruptEvents:["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],interruptKeys:[" ","Escape","Tab","Enter","PageUp","PageDown","Home","End","ArrowUp","ArrowRight","ArrowLeft","ArrowDown"],interruptible:!0,scrollInView:!0,easingLogic:(l,e,t,n)=>t*l/n+e};let Q=(()=>{class l{constructor(l){this.runningInstances=[],this.onInterrupted={report:(l,e)=>{if(!e.pageScrollOptions.interruptible)return;let t=!0;"keyup"===l.type?-1===this.config.interruptKeys.indexOf(l.key)&&(t=!1):"mousedown"===l.type&&(e.pageScrollOptions.scrollViews.some(e=>e.contains(l.target))||(t=!1)),t&&this.stopAll(e.pageScrollOptions.namespace)}},this.config=Object.assign(Object.assign({},_),l)}stopInternal(l,e){const t=this.runningInstances.indexOf(e);return t>=0&&this.runningInstances.splice(t,1),e.interruptListenersAttached&&e.detachInterruptListeners(),!!e.timer&&(clearInterval(e.timer),e.timer=void 0,e.fireEvent(!l),!0)}create(l){return new F(Object.assign(Object.assign({},this.config),l))}start(l){if(l.pageScrollOptions=Object.assign(Object.assign({},this.config),l.pageScrollOptions),this.stopAll(l.pageScrollOptions.namespace),null===l.pageScrollOptions.scrollViews||0===l.pageScrollOptions.scrollViews.length)return void((this.config._logLevel>=2||this.config._logLevel>=1&&Object(n.bb)())&&console.warn("No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll"));let e=!1,t=l.getScrollClientPropertyValue(l.pageScrollOptions.scrollViews[0]);l.startScrollPosition=0,l.pageScrollOptions.scrollViews.forEach(n=>{if(null==n)return;const i=l.getScrollPropertyValue(n);!e&&i&&(l.startScrollPosition=i,e=!0,t=l.getScrollClientPropertyValue(n))});const i=l.getCurrentOffset(),a=l.extractScrollTargetPosition();if(l.targetScrollPosition=Math.round((l.pageScrollOptions.verticalScrolling?a.top:a.left)-i),l.distanceToScroll=l.targetScrollPosition-l.startScrollPosition,isNaN(l.distanceToScroll))return(this.config._logLevel>=2||this.config._logLevel>=1&&Object(n.bb)())&&console.log("Scrolling not possible, as we can't find the specified target"),void l.fireEvent(!1);const s=Math.abs(l.distanceToScroll)<l.pageScrollOptions._minScrollDistance;return l.executionDuration=l.pageScrollOptions.duration,null!=l.pageScrollOptions.speed&&null==l.pageScrollOptions.duration&&(l.executionDuration=Math.abs(l.distanceToScroll)/l.pageScrollOptions.speed*1e3),s||l.executionDuration<=l.pageScrollOptions._interval?((this.config._logLevel>=2||this.config._logLevel>=1&&Object(n.bb)())&&(s?console.log("Scrolling not possible, as we can't get any closer to the destination"):console.log("Scroll duration shorter that interval length, jumping to target")),l.setScrollPosition(l.targetScrollPosition),void l.fireEvent(!0)):!l.pageScrollOptions.scrollInView&&l.targetScrollPosition>l.startScrollPosition&&l.targetScrollPosition<=l.startScrollPosition+t?((this.config._logLevel>=2||this.config._logLevel>=1&&Object(n.bb)())&&console.log("Not scrolling, as target already in view"),void l.fireEvent(!0)):(l.pageScrollOptions.interruptible&&l.attachInterruptListeners(this.onInterrupted),l.startTime=(new Date).getTime(),l.endTime=l.startTime+l.executionDuration,l.timer=setInterval(l=>{const e=(new Date).getTime();let t,i=!1;l.endTime<=e?(t=l.targetScrollPosition,i=!0):t=Math.round(l.pageScrollOptions.easingLogic(e-l.startTime,l.startScrollPosition,l.distanceToScroll,l.executionDuration)),this.config._logLevel>=5&&Object(n.bb)()&&console.warn("Scroll Position: "+t),l.setScrollPosition(t)||(i=!0),i&&this.stopInternal(!1,l)},this.config._interval,l),void this.runningInstances.push(l))}scroll(l){this.start(this.create(l))}stopAll(l){if(this.runningInstances.length>0){let e=!1;for(let t=0;t<this.runningInstances.length;++t){const n=this.runningInstances[t];l&&n.pageScrollOptions.namespace!==l||(e=!0,this.stopInternal(!0,n),t--)}return e}return!1}stop(l){return this.stopInternal(!0,l)}}return l.\u0275prov=Object(n.gc)({factory:function(){return new l(Object(n.hc)(M))},token:l,providedIn:"root"}),l})();class E{static forRoot(l){return{ngModule:E,providers:[Q,{provide:M,useValue:l}]}}}class P{}var A=t("s7LF"),V=t("fyIi"),j=t("SVLx"),G=t("hGdz");t("pLZG"),t("IzEk");class B{}var N=n.Ab(i,[],function(l){return n.Pb([n.Qb(512,n.l,n.eb,[[8,[a.a,O,D.a,D.b,D.h,D.i,D.e,D.f,D.g]],[3,n.l],n.D]),n.Qb(4608,u.n,u.m,[n.z]),n.Qb(4608,L.v,L.v,[n.l,n.v,L.ib,L.w]),n.Qb(5120,C.a,T.b,[g.n]),n.Qb(4608,Q,Q,[M]),n.Qb(1073742336,u.b,u.b,[]),n.Qb(1073742336,g.p,g.p,[[2,g.u],[2,g.n]]),n.Qb(1073742336,P,P,[]),n.Qb(1073742336,L.c,L.c,[]),n.Qb(1073742336,L.f,L.f,[]),n.Qb(1073742336,L.g,L.g,[]),n.Qb(1073742336,L.k,L.k,[]),n.Qb(1073742336,L.l,L.l,[]),n.Qb(1073742336,A.u,A.u,[]),n.Qb(1073742336,A.t,A.t,[]),n.Qb(1073742336,A.h,A.h,[]),n.Qb(1073742336,L.r,L.r,[]),n.Qb(1073742336,L.t,L.t,[]),n.Qb(1073742336,L.x,L.x,[]),n.Qb(1073742336,L.z,L.z,[]),n.Qb(1073742336,L.F,L.F,[]),n.Qb(1073742336,L.I,L.I,[]),n.Qb(1073742336,L.L,L.L,[]),n.Qb(1073742336,L.O,L.O,[]),n.Qb(1073742336,L.T,L.T,[]),n.Qb(1073742336,L.W,L.W,[]),n.Qb(1073742336,L.X,L.X,[]),n.Qb(1073742336,L.Y,L.Y,[]),n.Qb(1073742336,L.y,L.y,[]),n.Qb(1073742336,T.a,T.a,[]),n.Qb(1073742336,V.b,V.b,[]),n.Qb(1073742336,j.a,j.a,[]),n.Qb(1073742336,G.a,G.a,[]),n.Qb(1073742336,E,E,[]),n.Qb(1073742336,B,B,[]),n.Qb(1073742336,i,i,[]),n.Qb(1024,g.l,function(){return[[{path:"",component:w}]]},[]),n.Qb(256,M,{},[])])})},t5dm:function(l){l.exports=JSON.parse('[{"id":1,"name":"William Alexander Raymundo Reyes","image":"assets/img/home-2/contactame.jpg","rating":5,"specialist":"Doctor en Medicina","location":"El Salvador","qualification":"Graduado de Universidad de El Salvador","experience":5,"available":["Tue","Wed","Thu","Fri"],"gender":"Male","fees":100,"category":[1,2],"phone":"(503)6420-4810","email":"dr.william.raymundo@gmail.com","htmltext":"<p> Realizo su internado rotatorio en hospitales de tercer nivel (Hospital Nacional Rosales, Hospital Nacional de Ni\xf1os Benjam\xedn Bloom y Hospital Nacional de la Mujer Mar\xeda Isabel Rodr\xedguez).</p><p>Cuenta con amplia experiencia en el \xe1mbito privado as\xed como en el sistema nacional de salud.</p><div class=\'spacer\'></div><h4>Estudios de investigaci\xf3n cient\xedfica</h4><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <p class=\'ml-2\'>An\xe1lisis de Situaci\xf3n  de Salud Integral de la Unidad de Comunitaria de Salud Familiar \u201cpaso de Gualache\u201d, Tecapan, Usulutan. 2017</p></li><li> <i class=\'far fa-check\'></i> <p class=\'ml-2\'>Incidencia de Obesidad Asociada a Enfermedad Renal Cr\xf3nica en la poblaci\xf3n de 25 a 60 a\xf1os que consulta en Unidad Comunitaria de Salud Familiar Buenos Aires Tamanique, Durante marzo a junio 2017</p></li></ul></div><h4>Actualmente</h4><p>Se desempe\xf1a como Medico de planta del servicio privado del Hospital Militar Central y Medico agregado del Hospital M\xe9dico-Quir\xfargico del Instituto Salvadore\xf1o del Seguro Social. </p>","reviews":[{"user":[1],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[2],"commentdate":"07 March","rating":5,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[3],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"/"},{"icon":"fab fa-twitter","title":"Twitter","url":"/"},{"icon":"fab fa-instagram","title":"Instagram","url":"/"}]},{"id":2,"name":"Rebecca Gilbert","image":"assets/img/doctors-grid/348x350-1.jpg","rating":4,"specialist":"Obstetrics & Gynaecology","location":"Hong Kong","qualification":"University of California San Francisco Parnassus Campus","experience":5,"available":["Tue","Wed","Thu","Fri"],"gender":"Male","fees":"","category":[3,4],"phone":"(741)376-5672","email":"example@example.com","htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><div class=\'spacer\'></div><h4>Subspecialities</h4><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.</p><div class=\'row\'><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div></div>","reviews":[{"user":[1],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[2],"commentdate":"07 March","rating":5,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[3],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"/"},{"icon":"fab fa-twitter","title":"Twitter","url":"/"},{"icon":"fab fa-instagram","title":"Instagram","url":"/"}]},{"id":3,"name":"Bobby Stanley","image":"assets/img/doctors-grid/348x350-2.jpg","rating":5,"specialist":"Obstetrics & Gynaecology","location":"Hong Kong","qualification":"University of California San Francisco Parnassus Campus","experience":5,"available":["Tue","Wed","Thu","Fri"],"gender":"Female","fees":100,"category":[1,5],"phone":"(741)376-5672","email":"example@example.com","htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><div class=\'spacer\'></div><h4>Subspecialities</h4><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.</p><div class=\'row\'><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div></div>","reviews":[{"user":[1],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[2],"commentdate":"07 March","rating":5,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[3],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"/"},{"icon":"fab fa-twitter","title":"Twitter","url":"/"},{"icon":"fab fa-instagram","title":"Instagram","url":"/"}]},{"id":4,"name":"Kathryn Cooper","image":"assets/img/doctors-grid/348x350-3.jpg","rating":4,"specialist":"Obstetrics & Gynaecology","location":"Hong Kong","qualification":"University of California San Francisco Parnassus Campus","experience":5,"available":[],"gender":"Female","fees":100,"category":[2,3],"phone":"(741)376-5672","email":"example@example.com","htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><div class=\'spacer\'></div><h4>Subspecialities</h4><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.</p><div class=\'row\'><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div></div>","reviews":[{"user":[1],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[2],"commentdate":"07 March","rating":5,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[3],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"/"},{"icon":"fab fa-twitter","title":"Twitter","url":"/"},{"icon":"fab fa-instagram","title":"Instagram","url":"/"}]},{"id":5,"name":"Carmen Nelson","image":"assets/img/doctors-grid/348x350-4.jpg","rating":4,"specialist":"Obstetrics & Gynaecology","location":"Hong Kong","qualification":"University of California San Francisco Parnassus Campus","experience":5,"available":["Tue","Wed","Thu","Fri"],"gender":"Female","fees":"","category":[4,5],"phone":"(741)376-5672","email":"example@example.com","htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><div class=\'spacer\'></div><h4>Subspecialities</h4><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.</p><div class=\'row\'><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div></div>","reviews":[{"user":[1],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[2],"commentdate":"07 March","rating":5,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[3],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"/"},{"icon":"fab fa-twitter","title":"Twitter","url":"/"},{"icon":"fab fa-instagram","title":"Instagram","url":"/"}]},{"id":6,"name":"Janice Hughes","image":"assets/img/doctors-grid/348x350-5.jpg","rating":5,"specialist":"Obstetrics & Gynaecology","location":"Hong Kong","qualification":"University of California San Francisco Parnassus Campus","experience":5,"available":[],"gender":"Male","fees":100,"category":[1,2],"phone":"(741)376-5672","email":"example@example.com","htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><div class=\'spacer\'></div><h4>Subspecialities</h4><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.</p><div class=\'row\'><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div><div class=\'col-lg-6\'><div class=\'sigma_general-list style-3\'><ul><li> <i class=\'far fa-check\'></i> <span>Best Fitness Excercises</span></li><li> <i class=\'far fa-check\'></i> <span>Combine Fitness and Lifestyle</span></li><li> <i class=\'far fa-check\'></i> <span>Achieve a Specific Goal</span></li></ul></div></div></div>","reviews":[{"user":[1],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[2],"commentdate":"07 March","rating":5,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{"user":[3],"commentdate":"07 March","rating":4,"comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","url":"/"},{"icon":"fab fa-twitter","title":"Twitter","url":"/"},{"icon":"fab fa-instagram","title":"Instagram","url":"/"}]}]')}}]);