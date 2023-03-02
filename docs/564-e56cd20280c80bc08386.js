"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[564],{7606:function(t,i,e){e.d(i,{c:function(){return n}});var n='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},308:function(t,i,e){e.d(i,{A:function(){return U},B:function(){return z},C:function(){return c},D:function(){return q},E:function(){return P},F:function(){return X},G:function(){return A},H:function(){return u},I:function(){return o},J:function(){return N},K:function(){return f},L:function(){return b},W:function(){return d},a:function(){return B},b:function(){return y},c:function(){return W},d:function(){return Q},e:function(){return m},f:function(){return g},g:function(){return C},h:function(){return k},i:function(){return O},j:function(){return H},k:function(){return S},l:function(){return J},m:function(){return v},n:function(){return a},o:function(){return j},p:function(){return R},q:function(){return V},r:function(){return Y},s:function(){return D},t:function(){return Z},u:function(){return x},v:function(){return L},w:function(){return E},x:function(){return w},y:function(){return I},z:function(){return $}});var n=e(9455),a=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],o={XS:576,S:768,M:992,L:1200,XL:99999},r=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],s=["ic-alert"],l={"ic-alert":["ic-link"]},c=136.701,d=130,v=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e={};return i.forEach((function(i){t.hasAttribute(i)&&(null!==t.getAttribute(i)&&(e[i]=t.getAttribute(i)),t.removeAttribute(i))})),e},u=function(t,i){var e=t._original||t;return{_original:t,emit:h(e.emit.bind(e),i)}},h=function(t){var i,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];i=setTimeout.apply(void 0,[t,e].concat(a))}},m=function(t,i,e,n,a){if(void 0!==e&&(t||p(i))){var o=i.querySelectorAll("input.ic-input"),r=Array.from(o).filter((function(t){return i===t.parentElement}))[0];null==r&&((r=i.ownerDocument.createElement("input")).type="hidden",r.classList.add("ic-input"),i.appendChild(r)),r.disabled=a,r.name=e,r.value=n||""}},g=function(t){var i=t.querySelectorAll("input.ic-input"),e=Array.from(i).filter((function(i){return t===i.parentElement}))[0];null==e||e.remove()},p=function(t){return!!t.shadowRoot&&!!t.attachShadow},f=function(t){return t+"-helper-text"},b=function(t){return t+"-validation-text"},k=function(t,i,e){return"".concat(i?f(t):""," ").concat(e?b(t):"").trim()},y=function(t){var i,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=t.parentElement||t.getRootNode().host.parentElement,o=a.closest(r.join(","));if(null!==o){var c=o.tagName.toLowerCase(),d=t.tagName.toLowerCase();return(null===(i=l[c])||void 0===i?void 0:i.includes(d))?n.I.Default:null===e||s.includes(c)?o.classList.contains(n.I.Dark)?n.I.Dark:n.I.Light:e}return n.I.Default},w=function(){var t=!1;return"maxTouchPoints"in navigator&&(t=navigator.maxTouchPoints>0),t},x=function(t,i){var e=document.createElement("button");e.setAttribute("type",i.type),e.style.display="none",t.appendChild(e),e.click(),e.remove()},N=function(t){return 0===t.trim().length},E=function(t,i){var e,n=[];if(i.length>0)return i.map((function(t){t.children?t.children.map((function(t){return n.push(t)})):n.push(t)})),null===(e=n.find((function(i){return i.value===t})))||void 0===e?void 0:e.label},L=function(t,i,e,n){return"anywhere"===n?t.filter((function(t){var n;return i?t.label.toLowerCase().includes(e.toLowerCase())||(null===(n=t.description)||void 0===n?void 0:n.toLowerCase().includes(e.toLowerCase())):t.label.toLowerCase().includes(e.toLowerCase())})):t.filter((function(t){var n;return i?t.label.toLowerCase().startsWith(e.toLowerCase())||(null===(n=t.description)||void 0===n?void 0:n.toLowerCase().startsWith(e.toLowerCase())):t.label.toLowerCase().startsWith(e.toLowerCase())}))},T=function(t){return window.matchMedia("(max-width: ".concat(t,"px)")).matches},C=function(){return T(q.S)?q.S:T(q.M)?q.M:T(q.L)?q.L:T(q.XL)?q.XL:q.UNDEFINED},I=function(t){return getComputedStyle(document.documentElement).getPropertyValue(t)},z=function(){var t=I("--ic-theme-primary-r"),i=I("--ic-theme-primary-g"),e=I("--ic-theme-primary-b");return(299*parseInt(t)+587*parseInt(i)+114*parseInt(e))/1e3},S=function(){return z()>133.3505?n.I.Dark:n.I.Light},A=function(t,i){return t&&t.querySelector?t.querySelector('[slot="'.concat(i,'"]')):null},D=function(t,i){return null!==A(t,i)},Z=function(t,i){var e=A(t,i);return e?M(e):null},M=function(t){var i=t.firstElementChild;if(null!==i){var e=i.assignedElements?i.assignedElements():i.childNodes;return e.length?e:null}return null===t?null:[t]},R=function t(i){var e={navType:"",parent:null};switch(V(i)){case"IC-NAVIGATION-GROUP":e=t(i.parentElement);break;case"IC-TOP-NAVIGATION":e={navType:"top",parent:F(i)};break;case"IC-SIDE-NAVIGATION":e={navType:"side",parent:F(i)};break;case"IC-PAGE-HEADER":e={navType:"page-header",parent:null}}return e},q={XS:Number(I("--ic-breakpoint-xs").replace("px","")),S:Number(I("--ic-breakpoint-sm").replace("px","")),M:Number(I("--ic-breakpoint-md").replace("px","")),L:Number(I("--ic-breakpoint-lg").replace("px","")),XL:Number(I("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},H=function(t,i){return""!==t&&!i},O=function(t,i){return Array.from(t.children).some((function(t){return t.getAttribute("slot")===i}))},j=function(t,i,e){void 0===t&&i!==t&&e()},B=function(t,i){for(var e=0;e<t.length;e++){var n=t[e],a=n.prop,o=n.propName;null==a&&console.error("No ".concat(o," specified for ").concat(i," component - prop '").concat(o,"' (web components) / '").concat(G(o),"' (react) required"))}},G=function(t){for(var i=(t=t.toLowerCase()).split("-"),e=i[0],n=1;n<i.length;n++)e+=i[n].substring(0,1).toUpperCase()+i[n].substring(1);return e},W=function(t){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&t()},_=function(t){return parseInt(t,16)},P=function(t){var i;return 4===t.length?(i=t.replace("#","").split(""),{r:_(i[0]+i[0]),g:_(i[1]+i[1]),b:_(i[2]+i[2]),a:1}):{r:_(t.slice(1,3)),g:_(t.slice(3,5)),b:_(t.slice(5)),a:1}},X=function(t){var i;if("a"===t.slice(3,4).toLowerCase()){i={r:null,g:null,b:null,a:null};var e=t.substring(5,t.length-1).replace(/ /g,"").split(",");i.r=Number(e[0]),i.g=Number(e[1]),i.b=Number(e[2]),i.a=Number(e[3])}else{i={r:null,g:null,b:null,a:1};var n=t.substring(4,t.length-1).replace(/ /g,"").split(",");i.r=Number(n[0]),i.g=Number(n[1]),i.b=Number(n[2])}return i},U=function(t){return t.scrollWidth>t.clientWidth},V=function(t){return t.parentElement.tagName},F=function(t){return t.parentElement},J=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},K=function(t){return t.closest("FORM")},Q=function(t,i){var e=K(t);null!==e&&e.addEventListener("reset",i)},Y=function(t,i){var e=K(t);null!==e&&e.removeEventListener("reset",i)},$=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,e=parseInt(t);return"".concat(1/i*e,"rem")}},564:function(t,i,e){e.r(i),e.d(i,{ic_navigation_item:function(){return u}});var n=e(4942),a=e(5861),o=e(5671),r=e(3144),s=e(4687),l=e.n(s),c=e(6902),d=e(308),v=e(7606),u=(e(9455),function(){function t(i){var e=this;(0,o.Z)(this,t),(0,c.r)(this,i),this.childBlur=(0,c.c)(this,"childBlur",7),this.navItemClicked=(0,c.c)(this,"navItemClicked",7),this.topNavResizedHandler=function(t){var i=t.detail.size;i!==e.deviceSize&&(e.deviceSize=i,e.inTopNavSideMenu=i<=d.D.L)},this.sideNavExpandHandler=function(t){var i=t.detail,n=i.sideNavExpanded,a=i.sideNavMobile;e.sideNavExpanded=n,e.isSideNavMobile=a},this.handleBlur=function(t){if(null!==t.relatedTarget&&"IC-NAVIGATION-ITEM"===t.relatedTarget.tagName)return;e.childBlur.emit()},this.handleClick=function(){e.navItemClicked.emit()},this.isInitialRender=!0,this.displayDefaultNavigationItem=function(t,i){var n=e.isTopNavChild||e.inTopNavSideMenu?"body":"label",a="ic-tooltip-navigation-item",o=e.expandable&&(0,c.h)("div",{class:{svg:!0},innerHTML:v.c}),r=e.el.querySelector('[slot="icon"]')&&(0,c.h)("div",{class:"icon"}," ",(0,c.h)("slot",{name:"icon"})," ");return""!==t?(0,c.h)("a",{href:t,class:"link",ref:function(t){return e.itemEl=t},part:"link","aria-labelledby":a},r,(0,c.h)("ic-typography",{variant:n},i),o):(0,c.h)("div",{tabindex:"0",class:"link",ref:function(t){return e.itemEl=t},"aria-labelledby":a},r,(0,c.h)("ic-typography",{variant:n},i),o)},this.label=void 0,this.href="",this.selected=!1,this.expandable=!1,this.displayNavigationTooltip=!1,this.collapsedIconLabel=!1,this.isTopNavChild=!1,this.inTopNavSideMenu=!1,this.deviceSize=d.D.XL,this.focusStyle=(0,d.k)(),this.navigationType=void 0,this.parentEl=void 0,this.sideNavExpanded=!1,this.isSideNavMobile=!1}var i;return(0,r.Z)(t,[{key:"themeChangeHandler",value:function(t){var i=t.detail;this.focusStyle=i.mode}},{key:"setFocus",value:(i=(0,a.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.itemEl&&this.itemEl.focus();case 1:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"componentWillLoad",value:function(){var t=(0,d.p)(this.el);this.navigationType=t.navType,this.parentEl=t.parent,"side"===this.navigationType?this.parentEl.addEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.addEventListener("topNavResized",this.topNavResizedHandler),"IC-NAVIGATION-GROUP"===(0,d.q)(this.el)&&"top"===this.navigationType&&(this.isTopNavChild=!0),this.deviceSize=(0,d.g)(),this.deviceSize<=d.D.L&&"top"===this.navigationType&&(this.inTopNavSideMenu=!0),this.navigationSlot=this.el.querySelector('[slot="navigation-item"]'),this.navigationSlot&&(this.navigationSlot.ariaLabel=this.navigationSlot.textContent.trim())}},{key:"componentDidUpdate",value:function(){this.isInitialRender=!1}},{key:"disconnectedCallback",value:function(){"side"===this.navigationType?this.parentEl.removeEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.removeEventListener("topNavResized",this.topNavResizedHandler)}},{key:"render",value:function(){var t,i,e=this.href,a=this.label,o=this.inTopNavSideMenu,r=this.isTopNavChild,s=this.selected,l=this.navigationSlot;return(0,c.h)(c.H,{class:(t={},(0,n.Z)(t,"navigation-item",!0),(0,n.Z)(t,"navigation-item-top-nav",!o&&"top"===this.navigationType),(0,n.Z)(t,"navigation-item-top-nav-child-selected",r&&!o&&s),(0,n.Z)(t,this.focusStyle,!o&&!r||"side"===this.navigationType&&r),(0,n.Z)(t,"navigation-item-selected",!r&&s),(0,n.Z)(t,"navigation-item-side-menu",o),(0,n.Z)(t,"navigation-item-side-menu-selected",o&&s),(0,n.Z)(t,"navigation-item-top-nav-child",r&&!o),(0,n.Z)(t,"navigation-item-page-header","page-header"===this.navigationType),(0,n.Z)(t,"with-transition",!this.isInitialRender),(0,n.Z)(t,"navigation-item-side-nav","side"===this.navigationType),(0,n.Z)(t,"navigation-item-side-nav-collapsed",(!this.sideNavExpanded||this.displayNavigationTooltip)&&"side"===this.navigationType),(0,n.Z)(t,"navigation-item-side-nav-collapsed-with-label",!this.sideNavExpanded&&"side"===this.navigationType&&this.collapsedIconLabel&&!this.isSideNavMobile),t),onBlur:r&&!o?this.handleBlur:null,onClick:this.handleClick,"aria-current":s?"page":null,role:"listitem"},(0,c.h)("ic-tooltip",{label:a||l.textContent,target:"navigation-item",placement:"right",class:(i={},(0,n.Z)(i,"tooltip-navigation-item",!0),(0,n.Z)(i,"tooltip-navigation-item-side-nav-collapsed",(!this.sideNavExpanded||this.displayNavigationTooltip)&&"side"===this.navigationType),(0,n.Z)(i,"tooltip-long-label-navigation-item-side-nav-expanded",this.el.hasAttribute("[display-navigation-tooltip = 'true']")),i)},l?(0,c.h)("slot",{name:"navigation-item"}):this.displayDefaultNavigationItem(e,a)))}},{key:"el",get:function(){return(0,c.g)(this)}}]),t}());u.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(:focus-within){z-index:1}svg{width:var(--ic-space-xl);fill:var(--ic-theme-text)}ic-typography{flex:1}:host([expandable].navigation-item) .link,:host([expandable].navigation-item) ::slotted(a){padding-right:0}:host(.navigation-item) .link,:host(.navigation-item) ::slotted(a){height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-theme-text);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md);text-decoration:none;transition:var(--ic-easing-transition-fast);position:relative}:host(.navigation-item) ::slotted(a){font:var(--ic-font-label) !important;letter-spacing:var(--ic-font-letter-spacing-0pt025) !important;padding:0 var(--ic-space-md) !important}:host(.navigation-item-selected) .link::after,:host(.navigation-item-selected) ::slotted(a.active)::after,:host(.navigation-item-top-nav) ::slotted(a.active)::after{content:"";height:0.25rem;width:100%;position:absolute;bottom:0;background-color:var(--ic-theme-text)}:host(.navigation-item-selected.navigation-item-page-header) ::slotted(a.active)::after,:host(.navigation-item-selected.navigation-item-page-header) .link::after,:host(.navigation-item.navigation-item-page-header) ::slotted(a.active)::after,:host(.navigation-item-top-nav-child) ::slotted(a.active)::after{content:none}:host(.navigation-item-side-menu-selected) .link,:host(.navigation-item-side-menu) ::slotted(a.active),:host(.navigation-item-top-nav-child) ::slotted(a.active){box-shadow:none}:host(.navigation-item) .link:hover:not(:focus){background-color:var(--ic-theme-hover);cursor:pointer}:host(.navigation-item:not(.navigation-item-page-header,.navigation-item-side-menu)) ::slotted(a:hover:not(:focus)){background-color:var(--ic-theme-hover) !important}:host(.navigation-item:not(.navigation-item-top-nav-child,.navigation-item-side-menu,.navigation-item-top-nav-child-selected .navigation-item-side-menu-selected)) .focus-indicator:focus-within{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius)}:host(.navigation-item) .link:focus,:host(.navigation-item) ::slotted(a:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item-selected) .link:focus,:host(.navigation-item) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item-selected.dark) .link:focus,:host(.navigation-item.dark) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item) .link:active:not(:focus),:host(.navigation-item) ::slotted(a:active:not(:focus)){background-color:var(--ic-theme-active)}:host(.navigation-item-side-menu) .link,:host(.navigation-item-side-menu) ::slotted(a){height:2.5rem;width:100%;color:var(--ic-color-primary-text);display:flex;align-items:center;justify-content:flex-start;text-decoration:none;transition:var(--ic-transition-duration-fast)}:host(.navigation-item-side-menu) ::slotted(a){font:var(--ic-font-body) !important;letter-spacing:var(--ic-font-letter-spacing-0pt005) !important;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast)}:host(.navigation-item-side-menu) .link:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover)}:host(.navigation-item-side-menu) ::slotted(a:hover:not(:focus)){background-color:var(--ic-action-dark-bg-hover) !important}:host(.navigation-item-side-menu) .focus-indicator:focus-within{box-shadow:none}:host(.navigation-item-side-menu) .link:focus,:host(.navigation-item-side-menu) ::slotted(a:focus){box-shadow:var(--ic-border-focus-inset) !important;padding-right:var(--ic-space-lg);width:auto;border-radius:var(--ic-border-radius-inset) !important}:host(.navigation-item-side-menu-selected) .link,:host(.navigation-item-side-menu-selected) ::slotted(a){transition:box-shadow var(--ic-easing-transition-slow),\n    background-color var(--ic-easing-transition-slow)}:host(.navigation-item-side-menu-selected) .link:focus,:host(.navigation-item-side-menu) ::slotted(a.active:focus),:host(.navigation-item-top-nav-child) ::slotted(a.active:focus){margin-left:var(--ic-space-xs) !important;padding-left:var(--ic-space-xs) !important}:host(.navigation-item-top-nav-child) .link,:host(.navigation-item-top-nav-child) ::slotted(a){height:2.5rem;width:-moz-fit-content;width:fit-content;min-width:9.063rem;color:var(--ic-color-primary-text);display:flex;align-items:center;justify-content:flex-start;padding:0 var(--ic-space-md) !important;text-decoration:none;position:relative;transition:box-shadow var(--ic-transition-duration-fast),\n    border-radius var(--ic-transition-duration-slow)}:host(.navigation-item-top-nav-child) ::slotted(a){font:var(--ic-font-body) !important;letter-spacing:var(--ic-font-letter-spacing-0pt005) !important}:host(.navigation-item-top-nav-child) .link:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover) !important}:host(.navigation-item-top-nav-child) ::slotted(a:hover):not(:focus){background-color:var(--ic-action-dark-bg-hover) !important}:host(.navigation-item-top-nav-child) .link:focus,:host(.navigation-item-top-nav-child) ::slotted(a:focus){z-index:1;outline:var(--ic-hc-focus-outline);border-radius:var(--ic-border-radius-inset);box-shadow:var(--ic-border-focus-inset);transition:border-radius 0s, box-shadow var(--ic-transition-duration-fast)}:host(.navigation-item-top-nav-child) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset)}:host(.navigation-item-side-menu) .link:active:not(:focus){background-color:var(--ic-action-dark-bg-active)}:host(.navigation-item-top-nav-child) .link:active:not(:focus),:host(.navigation-item-top-nav-child) ::slotted(a:active):not(:focus){outline:var(--ic-hc-focus-outline);background-color:var(--ic-action-dark-bg-active)}:host(.navigation-item-top-nav-child) ::slotted(a:active):not(:focus),:host(.navigation-item-side-menu) ::slotted(a:active):not(:focus){background-color:var(--ic-action-dark-bg-active) !important}:host(.navigation-item-side-menu-selected) *,:host(.navigation-item-top-nav-child-selected) *,:host(.navigation-item-side-menu) ::slotted(a.active),:host(.navigation-item-top-nav-child) ::slotted(a.active){font-weight:700 !important}:host(.navigation-item-top-nav-child) ::slotted(a.active)::before,:host(.navigation-item-top-nav-child-selected) .link::before,:host(.navigation-item-side-menu-selected) .link::before,:host(.navigation-item-side-menu) ::slotted(a.active)::before,:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before{content:"";position:absolute;left:0;width:var(--ic-space-xs);height:2.5rem;margin-right:0.313rem;background-color:var(--ic-action-default);transition:left 0s}:host(.navigation-item-top-nav-child-selected) .link:focus{margin-left:var(--ic-space-xs);margin-right:calc(-1 * var(--ic-space-xs));padding-left:var(--ic-space-xs) !important}:host(.navigation-item-top-nav-child-selected) .link:focus::before{left:calc(-1 * var(--ic-space-xs));z-index:1}:host(.navigation-item-side-menu-selected) .link::before,:host(.navigation-item-side-menu) ::slotted(a.active)::before,:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before{z-index:1}:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before,:host(.navigation-item-top-nav-child) ::slotted(a.active:focus)::before{left:calc(-1 * var(--ic-space-xs))}:host(.navigation-item-side-menu-selected) .link::after{display:none}:host(.navigation-item-side-nav-collapsed) .link{height:100%}:host(.navigation-item-side-nav-collapsed) ::slotted(svg),:host(.navigation-item-side-nav-collapsed-with-label) ::slotted(svg){margin:auto;pointer-events:none}:host(.navigation-item-side-nav-collapsed) .icon,:host(.navigation-item-side-nav-collapsed-with-label) .icon,:host(.navigation-item-side-nav-collapsed-with-label) ic-typography{align-items:center;padding:0;margin:auto 0;width:-moz-fit-content;width:fit-content;pointer-events:none}:host(.navigation-item-side-nav-collapsed-with-label) ic-typography{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:center}:host(.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:flex;flex-direction:column;height:-moz-fit-content;height:fit-content;padding:var(--ic-space-xs) !important;gap:var(--ic-space-xxs)}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) ::slotted(a){height:auto !important;gap:0}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:block;text-align:center}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link ic-typography{opacity:1}:host(.navigation-item-side-nav-collapsed) svg,:host(.navigation-item-side-nav-collapsed-with-label) svg{display:none}::slotted(svg){fill:var(--ic-theme-text);width:var(--ic-space-lg);margin-left:var(--ic-space-md)}.icon{width:var(--ic-space-xxl);margin-left:calc(-1 * var(--ic-space-md));flex:0 1 0%}.icon>::slotted(*){margin-left:var(--ic-space-md) !important}:host(.navigation-item-side-nav-collapsed) .icon>::slotted(*){margin:auto !important}:host(.navigation-item-side-nav) .link,:host(.navigation-item-side-nav) ::slotted(a){height:var(--navigation-item-height);width:var(--navigation-item-width);justify-content:var(--navigation-item-justify-content);display:flex;gap:var(--ic-space-xs);box-sizing:border-box;color:var(--navigation-item-child-color) !important;text-decoration:none !important;white-space:nowrap}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a){height:var(--navigation-item-child-height);width:var(--navigation-group-width);color:var(--navigation-item-child-color) !important;display:flex;gap:0.625rem;box-sizing:border-box;min-width:0;transition:box-shadow var(--ic-easing-transition-fast);text-decoration:none !important;white-space:nowrap}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link:focus,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a:focus){box-shadow:var(--ic-border-focus-dark)}:host(.navigation-item-side-nav.navigation-item-side-menu) .link:active{background-color:var(--navigation-item-child-active)}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link:active,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a:active){background-color:var(--navigation-item-child-active)}:host(.navigation-item-side-nav) a.link ic-typography,:host(.navigation-item-side-nav.navigation-item-top-nav-child) a.link ic-typography,.navigation-item-side-nav-slotted-text{opacity:var(--navigation-item-label-opacity);transition:opacity var(--ic-easing-transition-slow);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}:host(.navigation-item-side-nav.navigation-item-selected) .link,:host(.navigation-item-side-nav.navigation-item) ::slotted(a.active){box-shadow:inset 0.313rem 0 0 var(--ic-theme-text)}:host(.navigation-item-side-nav.navigation-item-selected) .link::before,:host(.navigation-item-side-nav) ::slotted(a.active)::before{content:"";display:block;position:absolute;top:0;right:0;left:0.313rem;border-radius:0.688rem !important;bottom:0;transition:var(--ic-easing-transition-slow)}:host(.navigation-item-side-nav.navigation-item-selected) .link:focus::before,:host(.navigation-item-side-nav) ::slotted(a.active:focus)::before{box-shadow:var(--ic-border-focus-inset)}:host(:not(.navigation-item-side-nav-collapsed).navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link{opacity:var(--navigation-item-label-opacity);height:auto}:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) ::slotted(a){min-width:var(--navigation-group-item-min-width);padding:var(--ic-space-xs) !important;height:auto;gap:0}:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:block}:host(.navigation-item-side-nav.navigation-item-selected) .link::after,:host(.navigation-item-side-nav) ::slotted(a.active)::after{display:none}:host(.navigation-item-side-nav.navigation-item) .link:focus,:host(.navigation-item-side-nav.navigation-item) ::slotted(a:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.navigation-item-side-nav.navigation-item-selected) .link:focus,:host(.navigation-item-side-nav) ::slotted(a.active:focus){margin:0 auto;box-shadow:inset 0.313rem 0 0 var(--ic-theme-text);border-radius:0}:host(.navigation-item-side-nav.navigation-item) .link:hover:not(:focus){background-color:var(--ic-theme-hover) !important}:host(.navigation-item-page-header).link,:host(.navigation-item-page-header) a,:host(.navigation-item-page-header) ::slotted(a){height:2.75rem !important;color:var(--ic-color-primary-text) !important;transition:all var(--ic-easing-transition-fast) !important;box-shadow:rgba(23 89 188 / 0%) !important}:host(.navigation-item-page-header.navigation-item-selected) .link,:host(.navigation-item-page-header) ::slotted(a.active){box-shadow:inset 0 calc(-1 * var(--ic-space-xxs)) 0 var(--ic-action-default)}:host(.navigation-item-page-header) .link:hover,:host(.navigation-item-page-header) ::slotted(.link:hover),:host(.navigation-item-page-header) ::slotted(a:hover),:host(.navigation-item-page-header) .link:hover:not(:focus){background-color:var(--ic-action-default-bg-hover) !important;cursor:pointer}:host(.navigation-item-page-header) .link:focus,:host(.navigation-item-page-header) ::slotted(a:focus){box-shadow:var(--ic-border-focus)}:host(.navigation-item-page-header) .link:active,:host(.navigation-item-page-header) ::slotted(a:active){background-color:var(--ic-action-default-bg-active) !important}:host(.navigation-item-page-header.navigation-item-selected) .link:focus,:host(.navigation-item-page-header) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus),\n    inset 0 calc(-1 * var(--ic-space-xxs)) 0 var(--ic-action-default)}:host(.navigation-item-page-header.navigation-item-selected.with-transition) .link,:host(.navigation-item-page-header.navigation-item-selected.with-transition) ::slotted(a.active){transition:all var(--ic-easing-transition-fast),\n    border-color var(--ic-transition-duration-fast)}:host(.navigation-item-page-header) ::slotted(a.active)::before,:host(.navigation-item-page-header) ::slotted(a.active:focus)::before,:host(.navigation-item-page-header.navigation-item-selected) .link:focus::before{display:none}'},9455:function(t,i,e){var n,a;e.d(i,{I:function(){return a},a:function(){return n}}),function(t){t.Warning="warning",t.Error="error",t.Success="success"}(n||(n={})),function(t){t.Default="default",t.Dark="dark",t.Light="light"}(a||(a={}))}}]);
//# sourceMappingURL=564-e56cd20280c80bc08386.js.map