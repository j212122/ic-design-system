"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[4966],{7606:function(e,t,n){n.d(t,{c:function(){return r}});var r='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},308:function(e,t,n){n.d(t,{A:function(){return H},B:function(){return z},C:function(){return s},D:function(){return R},E:function(){return G},F:function(){return X},G:function(){return S},H:function(){return h},I:function(){return a},J:function(){return E},K:function(){return g},L:function(){return v},W:function(){return u},a:function(){return P},b:function(){return x},c:function(){return _},d:function(){return Q},e:function(){return f},f:function(){return b},g:function(){return N},h:function(){return y},i:function(){return M},j:function(){return W},k:function(){return T},l:function(){return J},m:function(){return d},n:function(){return i},o:function(){return O},p:function(){return F},q:function(){return U},r:function(){return Y},s:function(){return D},t:function(){return Z},u:function(){return w},v:function(){return I},w:function(){return L},x:function(){return k},y:function(){return A},z:function(){return $}});var r=n(9455),i=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],a={XS:576,S:768,M:992,L:1200,XL:99999},o=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],c=["ic-alert"],l={"ic-alert":["ic-link"]},s=136.701,u=130,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return t.forEach((function(t){e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(n[t]=e.getAttribute(t)),e.removeAttribute(t))})),n},h=function(e,t){var n=e._original||e;return{_original:e,emit:p(n.emit.bind(n),t)}},p=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];t=setTimeout.apply(void 0,[e,n].concat(i))}},f=function(e,t,n,r,i){if(void 0!==n&&(e||m(t))){var a=t.querySelectorAll("input.ic-input"),o=Array.from(a).filter((function(e){return t===e.parentElement}))[0];null==o&&((o=t.ownerDocument.createElement("input")).type="hidden",o.classList.add("ic-input"),t.appendChild(o)),o.disabled=i,o.name=n,o.value=r||""}},b=function(e){var t=e.querySelectorAll("input.ic-input"),n=Array.from(t).filter((function(t){return e===t.parentElement}))[0];null==n||n.remove()},m=function(e){return!!e.shadowRoot&&!!e.attachShadow},g=function(e){return e+"-helper-text"},v=function(e){return e+"-validation-text"},y=function(e,t,n){return"".concat(t?g(e):""," ").concat(n?v(e):"").trim()},x=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=e.parentElement||e.getRootNode().host.parentElement,a=i.closest(o.join(","));if(null!==a){var s=a.tagName.toLowerCase(),u=e.tagName.toLowerCase();return(null===(t=l[s])||void 0===t?void 0:t.includes(u))?r.I.Default:null===n||c.includes(s)?a.classList.contains(r.I.Dark)?r.I.Dark:r.I.Light:n}return r.I.Default},k=function(){var e=!1;return"maxTouchPoints"in navigator&&(e=navigator.maxTouchPoints>0),e},w=function(e,t){var n=document.createElement("button");n.setAttribute("type",t.type),n.style.display="none",e.appendChild(n),n.click(),n.remove()},E=function(e){return 0===e.trim().length},L=function(e,t){var n,r=[];if(t.length>0)return t.map((function(e){e.children?e.children.map((function(e){return r.push(e)})):r.push(e)})),null===(n=r.find((function(t){return t.value===e})))||void 0===n?void 0:n.label},I=function(e,t,n,r){return"anywhere"===r?e.filter((function(e){var r;return t?e.label.toLowerCase().includes(n.toLowerCase())||(null===(r=e.description)||void 0===r?void 0:r.toLowerCase().includes(n.toLowerCase())):e.label.toLowerCase().includes(n.toLowerCase())})):e.filter((function(e){var r;return t?e.label.toLowerCase().startsWith(n.toLowerCase())||(null===(r=e.description)||void 0===r?void 0:r.toLowerCase().startsWith(n.toLowerCase())):e.label.toLowerCase().startsWith(n.toLowerCase())}))},C=function(e){return window.matchMedia("(max-width: ".concat(e,"px)")).matches},N=function(){return C(R.S)?R.S:C(R.M)?R.M:C(R.L)?R.L:C(R.XL)?R.XL:R.UNDEFINED},A=function(e){return getComputedStyle(document.documentElement).getPropertyValue(e)},z=function(){var e=A("--ic-theme-primary-r"),t=A("--ic-theme-primary-g"),n=A("--ic-theme-primary-b");return(299*parseInt(e)+587*parseInt(t)+114*parseInt(n))/1e3},T=function(){return z()>133.3505?r.I.Dark:r.I.Light},S=function(e,t){return e&&e.querySelector?e.querySelector('[slot="'.concat(t,'"]')):null},D=function(e,t){return null!==S(e,t)},Z=function(e,t){var n=S(e,t);return n?q(n):null},q=function(e){var t=e.firstElementChild;if(null!==t){var n=t.assignedElements?t.assignedElements():t.childNodes;return n.length?n:null}return null===e?null:[e]},F=function e(t){var n={navType:"",parent:null};switch(U(t)){case"IC-NAVIGATION-GROUP":n=e(t.parentElement);break;case"IC-TOP-NAVIGATION":n={navType:"top",parent:V(t)};break;case"IC-SIDE-NAVIGATION":n={navType:"side",parent:V(t)};break;case"IC-PAGE-HEADER":n={navType:"page-header",parent:null}}return n},R={XS:Number(A("--ic-breakpoint-xs").replace("px","")),S:Number(A("--ic-breakpoint-sm").replace("px","")),M:Number(A("--ic-breakpoint-md").replace("px","")),L:Number(A("--ic-breakpoint-lg").replace("px","")),XL:Number(A("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},W=function(e,t){return""!==e&&!t},M=function(e,t){return Array.from(e.children).some((function(e){return e.getAttribute("slot")===t}))},O=function(e,t,n){void 0===e&&t!==e&&n()},P=function(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=r.prop,a=r.propName;null==i&&console.error("No ".concat(a," specified for ").concat(t," component - prop '").concat(a,"' (web components) / '").concat(j(a),"' (react) required"))}},j=function(e){for(var t=(e=e.toLowerCase()).split("-"),n=t[0],r=1;r<t.length;r++)n+=t[r].substring(0,1).toUpperCase()+t[r].substring(1);return n},_=function(e){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&e()},B=function(e){return parseInt(e,16)},G=function(e){var t;return 4===e.length?(t=e.replace("#","").split(""),{r:B(t[0]+t[0]),g:B(t[1]+t[1]),b:B(t[2]+t[2]),a:1}):{r:B(e.slice(1,3)),g:B(e.slice(3,5)),b:B(e.slice(5)),a:1}},X=function(e){var t;if("a"===e.slice(3,4).toLowerCase()){t={r:null,g:null,b:null,a:null};var n=e.substring(5,e.length-1).replace(/ /g,"").split(",");t.r=Number(n[0]),t.g=Number(n[1]),t.b=Number(n[2]),t.a=Number(n[3])}else{t={r:null,g:null,b:null,a:1};var r=e.substring(4,e.length-1).replace(/ /g,"").split(",");t.r=Number(r[0]),t.g=Number(r[1]),t.b=Number(r[2])}return t},H=function(e){return e.scrollWidth>e.clientWidth},U=function(e){return e.parentElement.tagName},V=function(e){return e.parentElement},J=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},K=function(e){return e.closest("FORM")},Q=function(e,t){var n=K(e);null!==n&&n.addEventListener("reset",t)},Y=function(e,t){var n=K(e);null!==n&&n.removeEventListener("reset",t)},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=parseInt(e);return"".concat(1/t*n,"rem")}},4966:function(e,t,n){n.r(t),n.d(t,{ic_card:function(){return p}});var r=n(4942),i=n(5861),a=n(5671),o=n(3144),c=n(4687),l=n.n(c),s=n(6902),u=n(308),d=n(9455),h=n(7606),p=function(){function e(t){var n=this;(0,a.Z)(this,e),(0,s.r)(this,t),this.parentFocussed=function(){n.isFocussed=!0},this.parentBlurred=function(){n.isFocussed=!1},this.toggleExpanded=function(){n.areaExpanded=!n.areaExpanded},this.clickable=!1,this.href=void 0,this.hreflang="",this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0,this.heading=void 0,this.subheading=void 0,this.message="",this.disabled=!1,this.fullWidth=!1,this.expandable=!1,this.parentIsAnchorTag=!1,this.isFocussed=!1,this.parentEl=null,this.appearance="default",this.areaExpanded=!1}var t;return(0,o.Z)(e,[{key:"setFocus",value:(t=(0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.el.shadowRoot.querySelector("a")?this.el.shadowRoot.querySelector("a").focus():this.el.shadowRoot.querySelector("button")&&this.el.shadowRoot.querySelector("button").focus();case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"handleHostClick",value:function(e){this.disabled&&e.stopImmediatePropagation()}},{key:"themeChangeHandler",value:function(e){var t=e.detail;this.updateTheme(t.mode)}},{key:"updateTheme",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=(0,u.b)(this.el,e||null);t!==d.I.Default&&(this.appearance=t)}},{key:"componentWillLoad",value:function(){this.parentEl=this.el.parentElement,"A"===this.parentEl.tagName&&(this.clickable=!0,this.parentIsAnchorTag=!0,this.parentEl.classList.add("ic-card-wrapper-link"),this.parentEl.addEventListener("focus",this.parentFocussed),this.parentEl.addEventListener("blur",this.parentBlurred))}},{key:"disconnectedCallback",value:function(){this.parentIsAnchorTag&&(this.parentEl.removeEventListener("focus",this.parentFocussed),this.parentEl.removeEventListener("blur",this.parentBlurred))}},{key:"componentDidLoad",value:function(){(0,u.a)([{prop:this.heading,propName:"heading"}],"Card"),this.updateTheme()}},{key:"render",value:function(){var e,t,n=this.clickable,i=this.disabled,a=this.expandable,o=this.heading,c=this.message,l=this.href,p=this.hreflang,f=this.referrerpolicy,b=this.rel,m=this.subheading,g=this.target,v=this.fullWidth,y=this.parentIsAnchorTag,x=this.isFocussed,k=y?"div":n?void 0===this.href?"button":"a":"div",w="a"==k&&{href:l,hrefLang:p,referrerPolicy:f,rel:b,target:g};return(0,s.h)(k,Object.assign({class:(e={},(0,r.Z)(e,"card",!0),(0,r.Z)(e,"clickable",n&&!i),(0,r.Z)(e,"disabled",i),(0,r.Z)(e,"fullwidth",v),(0,r.Z)(e,"focussed",x),(0,r.Z)(e,"dark",this.appearance===d.I.Dark),e),tabindex:n&&!y?0:null,"aria-disabled":i?"true":null,disabled:!!i||null},w),(0,u.i)(this.el,"image-top")&&(0,s.h)("div",{class:"image-top"},(0,s.h)("slot",{name:"image-top"})),(0,s.h)("div",{class:"card-header"},(0,u.i)(this.el,"icon")&&(0,s.h)("div",{class:"icon"},(0,s.h)("slot",{name:"icon"})),(0,s.h)("div",{class:"card-title"},(0,s.h)("slot",{name:"heading"},(0,s.h)("ic-typography",{variant:"h4"},(0,s.h)("p",null,o)))),(0,u.i)(this.el,"interaction-button")&&(0,s.h)("div",{class:"interaction-button"},(0,s.h)("slot",{name:"interaction-button"}))),(m||(0,u.i)(this.el,"subheading"))&&(0,s.h)("div",{class:"subheading"},(0,s.h)("slot",{name:"subheading"},(0,s.h)("ic-typography",{variant:"subtitle-small"},m))),(0,u.i)(this.el,"adornment")&&(0,s.h)("div",{class:"adornment"},(0,s.h)("slot",{name:"adornment"})),(0,u.i)(this.el,"image-mid")&&(0,s.h)("div",{class:"image-mid"},(0,s.h)("slot",{name:"image-mid"})),(c||(0,u.i)(this.el,"message"))&&(0,s.h)("div",{class:(0,r.Z)({},"card-message",!0)},(0,s.h)("slot",{name:"message"},(0,s.h)("ic-typography",{variant:"body"},c))),((0,u.i)(this.el,"interaction-controls")||a)&&(0,s.h)("div",{class:"interaction-controls"},(0,s.h)("slot",{name:"interaction-controls"}),a&&(0,s.h)("ic-button",{class:(t={},(0,r.Z)(t,"toggle-button",!0),(0,r.Z)(t,"toggle-button-closed",!this.areaExpanded),(0,r.Z)(t,"toggle-button-expanded",this.areaExpanded),t),variant:"icon",disableTooltip:!0,"aria-label":"Toggle expandable area","aria-expanded":this.areaExpanded,"aria-controls":"expanded-content-area",onClick:this.toggleExpanded,innerHTML:h.c})),(0,u.i)(this.el,"expanded-content")&&this.areaExpanded&&(0,s.h)("div",{class:"expanded-content",id:"expanded-content-area"},(0,s.h)("slot",{name:"expanded-content"})))}},{key:"el",get:function(){return(0,s.g)(this)}}]),e}();p.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex}a{text-decoration:none !important;color:var(--ic-architechtural-black) !important}button{border:none;background-color:transparent;outline:var(--ic-hc-focus-outline)}.card,.card.clickable{border:0.063rem solid var(--ic-architectural-300);border-radius:var(--ic-border-radius);box-sizing:border-box;padding:var(--ic-space-md);text-align:left;color:var(--ic-architechtural-black);transition:var(--ic-easing-transition-fast)}.dark.card,.dark.card.clickable{border:0.063rem solid var(--ic-architectural-700)}.card.clickable:hover{background-color:var(--ic-action-default-bg-hover);border-color:var(--ic-action-default-hover);cursor:pointer}.card.clickable:focus,.card.clickable.focussed{background-color:var(--ic-action-default-bg-hover);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline)}.card.clickable:active{background-color:var(--ic-action-default-bg-active);box-shadow:var(--ic-border-focus)}.card.disabled{border:var(--ic-border-disabled)}.card.fullwidth,:host([full-width="true"]){width:100%}.card-header{display:flex;align-items:center}.icon{display:flex;align-items:center;padding-right:var(--ic-space-xs)}.card.disabled ::slotted(svg){fill:var(--ic-color-tertiary-text)}.card.clickable .card-title{color:var(--ic-hyperlink);text-decoration:underline;text-decoration-thickness:0.063rem}.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{text-decoration-thickness:25%;text-underline-offset:25%}.card.clickable:active .card-title{text-decoration:none}.card.disabled .card-title{text-decoration:underline;text-decoration-thickness:0.063rem;text-decoration-color:var(--ic-color-tertiary-text);color:var(--ic-color-tertiary-text)}.subheading{margin-top:var(--ic-space-xxs)}.adornment{margin-top:var(--ic-space-xxs)}.card-message{margin-top:var(--ic-space-md);align-items:left}.card.disabled .card-message,.card.disabled .subheading{color:var(--ic-color-tertiary-text)}.interaction-button{margin-left:auto}.image-top{margin-bottom:var(--ic-space-md);display:flex;justify-content:center}.image-mid{margin-top:var(--ic-space-md);display:flex;justify-content:center}.interaction-controls{margin-top:var(--ic-space-md);display:flex;align-items:center}.toggle-button{margin-left:auto}.toggle-button-closed svg{transform:rotate(90deg)}.toggle-button-expanded svg{transform:rotate(-90deg)}.expanded-content{margin-top:var(--ic-space-md)}'},9455:function(e,t,n){var r,i;n.d(t,{I:function(){return i},a:function(){return r}}),function(e){e.Warning="warning",e.Error="error",e.Success="success"}(r||(r={})),function(e){e.Default="default",e.Dark="dark",e.Light="light"}(i||(i={}))}}]);
//# sourceMappingURL=4966-8ab86817eb2fdcd1149d.js.map