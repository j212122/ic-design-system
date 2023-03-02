"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7957],{308:function(e,t,n){n.d(t,{A:function(){return V},B:function(){return A},C:function(){return s},D:function(){return M},E:function(){return j},F:function(){return U},G:function(){return T},H:function(){return h},I:function(){return a},J:function(){return C},K:function(){return v},L:function(){return g},W:function(){return u},a:function(){return O},b:function(){return y},c:function(){return P},d:function(){return Q},e:function(){return b},f:function(){return f},g:function(){return I},h:function(){return k},i:function(){return Z},j:function(){return W},k:function(){return D},l:function(){return J},m:function(){return d},n:function(){return r},o:function(){return G},p:function(){return R},q:function(){return B},r:function(){return Y},s:function(){return F},t:function(){return S},u:function(){return w},v:function(){return N},w:function(){return L},x:function(){return x},y:function(){return E},z:function(){return $}});var i=n(9455),r=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],a={XS:576,S:768,M:992,L:1200,XL:99999},o=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],c=["ic-alert"],l={"ic-alert":["ic-link"]},s=136.701,u=130,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return t.forEach((function(t){e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(n[t]=e.getAttribute(t)),e.removeAttribute(t))})),n},h=function(e,t){var n=e._original||e;return{_original:e,emit:p(n.emit.bind(n),t)}},p=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];t=setTimeout.apply(void 0,[e,n].concat(r))}},b=function(e,t,n,i,r){if(void 0!==n&&(e||m(t))){var a=t.querySelectorAll("input.ic-input"),o=Array.from(a).filter((function(e){return t===e.parentElement}))[0];null==o&&((o=t.ownerDocument.createElement("input")).type="hidden",o.classList.add("ic-input"),t.appendChild(o)),o.disabled=r,o.name=n,o.value=i||""}},f=function(e){var t=e.querySelectorAll("input.ic-input"),n=Array.from(t).filter((function(t){return e===t.parentElement}))[0];null==n||n.remove()},m=function(e){return!!e.shadowRoot&&!!e.attachShadow},v=function(e){return e+"-helper-text"},g=function(e){return e+"-validation-text"},k=function(e,t,n){return"".concat(t?v(e):""," ").concat(n?g(e):"").trim()},y=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e.parentElement||e.getRootNode().host.parentElement,a=r.closest(o.join(","));if(null!==a){var s=a.tagName.toLowerCase(),u=e.tagName.toLowerCase();return(null===(t=l[s])||void 0===t?void 0:t.includes(u))?i.I.Default:null===n||c.includes(s)?a.classList.contains(i.I.Dark)?i.I.Dark:i.I.Light:n}return i.I.Default},x=function(){var e=!1;return"maxTouchPoints"in navigator&&(e=navigator.maxTouchPoints>0),e},w=function(e,t){var n=document.createElement("button");n.setAttribute("type",t.type),n.style.display="none",e.appendChild(n),n.click(),n.remove()},C=function(e){return 0===e.trim().length},L=function(e,t){var n,i=[];if(t.length>0)return t.map((function(e){e.children?e.children.map((function(e){return i.push(e)})):i.push(e)})),null===(n=i.find((function(t){return t.value===e})))||void 0===n?void 0:n.label},N=function(e,t,n,i){return"anywhere"===i?e.filter((function(e){var i;return t?e.label.toLowerCase().includes(n.toLowerCase())||(null===(i=e.description)||void 0===i?void 0:i.toLowerCase().includes(n.toLowerCase())):e.label.toLowerCase().includes(n.toLowerCase())})):e.filter((function(e){var i;return t?e.label.toLowerCase().startsWith(n.toLowerCase())||(null===(i=e.description)||void 0===i?void 0:i.toLowerCase().startsWith(n.toLowerCase())):e.label.toLowerCase().startsWith(n.toLowerCase())}))},z=function(e){return window.matchMedia("(max-width: ".concat(e,"px)")).matches},I=function(){return z(M.S)?M.S:z(M.M)?M.M:z(M.L)?M.L:z(M.XL)?M.XL:M.UNDEFINED},E=function(e){return getComputedStyle(document.documentElement).getPropertyValue(e)},A=function(){var e=E("--ic-theme-primary-r"),t=E("--ic-theme-primary-g"),n=E("--ic-theme-primary-b");return(299*parseInt(e)+587*parseInt(t)+114*parseInt(n))/1e3},D=function(){return A()>133.3505?i.I.Dark:i.I.Light},T=function(e,t){return e&&e.querySelector?e.querySelector('[slot="'.concat(t,'"]')):null},F=function(e,t){return null!==T(e,t)},S=function(e,t){var n=T(e,t);return n?q(n):null},q=function(e){var t=e.firstElementChild;if(null!==t){var n=t.assignedElements?t.assignedElements():t.childNodes;return n.length?n:null}return null===e?null:[e]},R=function e(t){var n={navType:"",parent:null};switch(B(t)){case"IC-NAVIGATION-GROUP":n=e(t.parentElement);break;case"IC-TOP-NAVIGATION":n={navType:"top",parent:H(t)};break;case"IC-SIDE-NAVIGATION":n={navType:"side",parent:H(t)};break;case"IC-PAGE-HEADER":n={navType:"page-header",parent:null}}return n},M={XS:Number(E("--ic-breakpoint-xs").replace("px","")),S:Number(E("--ic-breakpoint-sm").replace("px","")),M:Number(E("--ic-breakpoint-md").replace("px","")),L:Number(E("--ic-breakpoint-lg").replace("px","")),XL:Number(E("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},W=function(e,t){return""!==e&&!t},Z=function(e,t){return Array.from(e.children).some((function(e){return e.getAttribute("slot")===t}))},G=function(e,t,n){void 0===e&&t!==e&&n()},O=function(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=i.prop,a=i.propName;null==r&&console.error("No ".concat(a," specified for ").concat(t," component - prop '").concat(a,"' (web components) / '").concat(_(a),"' (react) required"))}},_=function(e){for(var t=(e=e.toLowerCase()).split("-"),n=t[0],i=1;i<t.length;i++)n+=t[i].substring(0,1).toUpperCase()+t[i].substring(1);return n},P=function(e){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&e()},X=function(e){return parseInt(e,16)},j=function(e){var t;return 4===e.length?(t=e.replace("#","").split(""),{r:X(t[0]+t[0]),g:X(t[1]+t[1]),b:X(t[2]+t[2]),a:1}):{r:X(e.slice(1,3)),g:X(e.slice(3,5)),b:X(e.slice(5)),a:1}},U=function(e){var t;if("a"===e.slice(3,4).toLowerCase()){t={r:null,g:null,b:null,a:null};var n=e.substring(5,e.length-1).replace(/ /g,"").split(",");t.r=Number(n[0]),t.g=Number(n[1]),t.b=Number(n[2]),t.a=Number(n[3])}else{t={r:null,g:null,b:null,a:1};var i=e.substring(4,e.length-1).replace(/ /g,"").split(",");t.r=Number(i[0]),t.g=Number(i[1]),t.b=Number(i[2])}return t},V=function(e){return e.scrollWidth>e.clientWidth},B=function(e){return e.parentElement.tagName},H=function(e){return e.parentElement},J=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},K=function(e){return e.closest("FORM")},Q=function(e,t){var n=K(e);null!==n&&n.addEventListener("reset",t)},Y=function(e,t){var n=K(e);null!==n&&n.removeEventListener("reset",t)},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=parseInt(e);return"".concat(1/t*n,"rem")}},7957:function(e,t,n){n.r(t),n.d(t,{ic_checkbox:function(){return d}});var i=n(4942),r=n(5861),a=n(5671),o=n(3144),c=n(4687),l=n.n(c),s=n(6902),u=n(308),d=(n(9455),function(){function e(t){var n=this;(0,a.Z)(this,e),(0,s.r)(this,t),this.checkboxChecked=(0,s.c)(this,"checkboxChecked",7),this.icCheck=(0,s.c)(this,"icCheck",7),this.handleClick=function(){n.checked=!n.checked,n.icCheck.emit(),n.checkboxChecked.emit()},this.handleFormReset=function(){n.checked=n.initiallyChecked},this.checked=!1,this.disabled=!1,this.label=void 0,this.value=void 0,this.name=void 0,this.groupLabel=void 0,this.dynamicText="This selection requires additional answers",this.additionalFieldDisplay="static",this.indeterminate=!1,this.initiallyChecked=this.checked}var t;return(0,o.Z)(e,[{key:"setFocus",value:(t=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.host.shadowRoot.querySelector(".checkbox"))&&t.focus();case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"componentDidRender",value:function(){if("static"===this.additionalFieldDisplay){var e=this.host.querySelector("ic-text-field");this.checked?e&&e.removeAttribute("disabled"):e&&e.setAttribute("disabled","")}else this.checked?this.additionalFieldContainer.style.display="flex":this.additionalFieldContainer.style.display="none"}},{key:"componentWillLoad",value:function(){(0,u.d)(this.host,this.handleFormReset)}},{key:"componentDidLoad",value:function(){(0,u.a)([{prop:this.label,propName:"label"},{prop:this.value,propName:"value"}],"Checkbox")}},{key:"disconnectedCallback",value:function(){(0,u.r)(this.host,this.handleFormReset)}},{key:"render",value:function(){var e,t,n=this,r="ic-checkbox-".concat(void 0!==this.label?this.label:this.value,"-").concat(this.groupLabel);return r=r.replace(/ /g,"-"),this.checked?(0,u.e)(!0,this.host,this.name,this.checked&&this.value,this.disabled):(0,u.f)(this.host),(0,s.h)(s.H,null,(0,s.h)("div",{class:(e={},(0,i.Z)(e,"container",!0),(0,i.Z)(e,"disabled",this.disabled),e)},this.checked&&!this.indeterminate&&(0,s.h)("svg",{class:"checkmark",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},(0,s.h)("title",null,"checkmark icon"),(0,s.h)("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})),this.checked&&this.indeterminate&&(0,s.h)("div",{class:"indeterminate-symbol"}),(0,s.h)("input",{role:"checkbox",class:(t={},(0,i.Z)(t,"checkbox",!0),(0,i.Z)(t,"checked",this.checked),(0,i.Z)(t,"indeterminate",this.indeterminate),t),type:"checkbox",name:this.name,id:r,value:this.value,disabled:!!this.disabled||null,checked:this.checked,indeterminate:this.indeterminate,onClick:this.handleClick}),(0,s.h)("ic-typography",{variant:"body"},(0,s.h)("label",{class:"checkbox-label",htmlFor:r},this.label))),(0,u.i)(this.host,"additional-field")&&(0,s.h)("div",{class:"dynamic-container",ref:function(e){return n.additionalFieldContainer=e}},"dynamic"===this.additionalFieldDisplay&&(0,s.h)("div",{class:"branch-corner"}),(0,s.h)("div",null,"dynamic"===this.additionalFieldDisplay&&(0,s.h)("ic-typography",{variant:"caption"},(0,s.h)("p",{class:"dynamic-text","aria-live":"polite"},this.dynamicText)),(0,s.h)("div",{class:{"additional-field-wrapper":"static"===this.additionalFieldDisplay}},(0,s.h)("slot",{name:"additional-field"})))))}},{key:"host",get:function(){return(0,s.g)(this)}}]),e}());d.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host([disabled]){color:var(--ic-architectural-200);pointer-events:none}.container{display:flex;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs);margin-bottom:var(--ic-space-xxs)}:host([small]) .container{margin-bottom:var(--ic-space-xxxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:transparent;border:0.063rem solid var(--ic-architectural-300);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast)}.checkbox:checked{background-color:var(--ic-action-default);border:0.063rem solid var(--ic-action-default);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-architectural-200)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:transparent;border:0.125rem solid var(--ic-action-default)}.checkbox:checked:hover{background-color:var(--ic-action-default-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-action-default-bg-hover);border:0.125rem solid var(--ic-action-default-hover)}.checkbox:checked:active{background-color:var(--ic-action-default-active)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-action-default-bg-active);border:0.125rem solid var(--ic-action-default-active)}.checkbox:hover{background-color:var(--ic-action-default-bg-hover);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:0.063rem solid var(--ic-action-default-hover)}.checkbox:active{background-color:var(--ic-action-default-bg-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active);border:0.063rem solid var(--ic-action-default-active)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:0.063rem dashed var(--ic-architectural-200)}.checkbox-label{padding-left:var(--ic-space-sm)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:white;z-index:1;background-color:transparent;pointer-events:none}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);top:0.688rem;right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-action-default);pointer-events:none}.container:hover .indeterminate-symbol{background-color:var(--ic-action-default-hover)}.container:active .indeterminate-symbol{background-color:var(--ic-action-default-active)}.additional-field-wrapper{margin-left:calc(var(--ic-space-md) + var(--ic-space-lg));margin-top:calc(var(--ic-space-sm) / 2)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default)}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-action-default);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}'},9455:function(e,t,n){var i,r;n.d(t,{I:function(){return r},a:function(){return i}}),function(e){e.Warning="warning",e.Error="error",e.Success="success"}(i||(i={})),function(e){e.Default="default",e.Dark="dark",e.Light="light"}(r||(r={}))}}]);
//# sourceMappingURL=7957-80117d46de814d1495f6.js.map