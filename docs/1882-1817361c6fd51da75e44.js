"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1882],{1882:function(i,e,t){t.r(e),t.d(e,{ic_switch:function(){return l}});var c=t(4942),a=t(5671),s=t(3144),o=t(6902),n=t(9132),r=(t(9455),0),l=function(){function i(e){var t=this;(0,a.Z)(this,i),(0,o.r)(this,e),this.icChange=(0,o.c)(this,"icChange",7),this.icFocus=(0,o.c)(this,"icFocus",7),this.icBlur=(0,o.c)(this,"icBlur",7),this.inputId="ic-switch-input-".concat(r++),this.handleChange=function(){t.checkedState=!t.checkedState,t.icChange.emit({checked:t.checkedState,value:t.value})},this.onFocus=function(){t.icFocus.emit()},this.onBlur=function(){t.icBlur.emit()},this.label=void 0,this.hideLabel=!1,this.helperText="",this.checked=null,this.small=!1,this.disabled=!1,this.name=this.inputId,this.showState=!1,this.value="on",this.checkedState=!1}return(0,s.Z)(i,[{key:"componentDidLoad",value:function(){(0,n.a)([{prop:this.label,propName:"label"}],"Switch")}},{key:"render",value:function(){var i,e,t=this.label,a=this.checked,s=this.checkedState,r=this.small,l=this.disabled,h=this.name,d=this.showState,u=this.value,b=this.hideLabel,p=this.helperText,g=this.inputId,w=null==a?s:a;(0,n.r)(!0,this.el,h,w?u:"",l);var m=(0,n.d)(g,""!==p,!1);return(0,o.h)(o.H,null,(0,o.h)("label",{class:(i={},(0,c.Z)(i,"ic-switch-container",!0),(0,c.Z)(i,"ic-switch-disabled",l),(0,c.Z)(i,"ic-switch-small",r),i),htmlFor:g},!b&&(0,o.h)("ic-input-label",{for:g,label:t,helperText:p,readonly:!0,disabled:l,class:(e={},(0,c.Z)(e,"ic-switch-label",!0),(0,c.Z)(e,"ic-switch-label-small",r),e)}),!b&&(0,o.h)("span",{class:"ic-switch-line-break"}),(0,o.h)("input",{checked:w,disabled:l,"aria-label":t,"aria-checked":w?"true":"false","aria-describedby":m,role:"switch",class:"ic-switch-input",type:"checkbox",name:"toggle",id:g,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange}),(0,o.h)("span",{class:"ic-switch-toggle"},(0,o.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,o.h)("line",{class:"ic-switch-icon-line",x1:"9",y1:r?"2":"1",x2:"9",y2:r?"8":"9"})),(0,o.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,o.h)("circle",{class:"ic-switch-icon-circle",fill:"none",cx:"5",cy:"5",r:r?"3.335":"4.445"}))),(0,o.h)("slot",{name:"right-adornment"}),d&&(0,o.h)("ic-typography",{"aria-hidden":"true",variant:"label",class:"ic-switch-checked-status"},w?"On":"Off")))}},{key:"el",get:function(){return(0,o.g)(this)}}]),i}();l.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}input{overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.ic-switch-container{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ic-space-xxs);cursor:pointer}.ic-switch-label{margin-left:var(--ic-space-xxs);margin-bottom:var(--ic-space-sm)}.ic-switch-label-small{margin-bottom:10px}.ic-switch-toggle{display:flex;align-items:center;justify-content:space-around;width:64px;height:var(--ic-space-xl);position:relative;border-radius:100vw;background-color:var(--ic-architectural-200);border:1px solid var(--ic-architectural-700);box-sizing:border-box;transition:var(--ic-transition-duration-fast)}.ic-switch-line-break{flex:1 0 100%}.ic-switch-checked-status{padding-left:var(--ic-space-xxs)}.ic-switch-toggle::before{content:"";width:21.33px;height:21.33px;border-radius:50%;position:absolute;z-index:2;top:50%;left:5.33px;transform:translate(0, -50%);background-color:var(--ic-architectural-700);transition:var(--ic-transition-duration-slow)}.ic-switch-icon{display:inline-block;vertical-align:middle;width:10px;height:10px}.ic-switch-icon-circle,.ic-switch-icon-line{stroke-width:1}.ic-switch-icon-circle{stroke:var(--ic-architectural-700)}.ic-switch-icon-line{stroke:var(--ic-architectural-white)}@media (prefers-reduced-motion: reduce){.ic-switch-toggle::before{transition-duration:0ms}}.ic-switch-input:checked+.ic-switch-toggle{background-color:var(--ic-action-default);border:none}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-xl), -50%);background-color:var(--ic-architectural-white)}.ic-switch-input:not([disabled])+.ic-switch-toggle:hover::before{box-shadow:0 0 0 12px var(--ic-action-dark-bg-hover)}.ic-switch-input:not([disabled])+.ic-switch-toggle:active::before{box-shadow:0 0 0 12px var(--ic-action-dark-bg-active)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:hover::before{box-shadow:0 0 0 12px var(--ic-action-default-bg-hover)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:active::before{box-shadow:0 0 0 12px var(--ic-action-default-bg-active)}.ic-switch-input:focus:not([disabled])+.ic-switch-toggle,.ic-switch-input:focus-visible:not([disabled])+.ic-switch-toggle{box-shadow:0 0 0 1px var(--ic-architectural-white),\n    0 0 0 3px var(--ic-action-default),\n    0 0 0 8px var(--ic-action-default-active-alpha)}.ic-switch-disabled{cursor:default}.ic-switch-disabled .ic-switch-icon-circle{stroke:var(--ic-architectural-300)}.ic-switch-disabled .ic-switch-icon-line{stroke:var(--ic-action-default-bg-active)}.ic-switch-input:disabled+.ic-switch-toggle{background-color:var(--ic-architectural-80);border:1px dashed var(--ic-architectural-300)}.ic-switch-input:disabled~.ic-switch-checked-status{color:var(--ic-architectural-300)}.ic-switch-input:disabled+.ic-switch-toggle::before{background-color:var(--ic-architectural-300)}.ic-switch-input:disabled:checked+.ic-switch-toggle{background-color:var(--ic-status-info-background);border:1px dashed #98c9f5}.ic-switch-input:disabled:checked+.ic-switch-toggle::before{background-color:var(--ic-architectural-white)}.ic-switch-small{gap:var(--ic-space-xxxs)}.ic-switch-small .ic-switch-checked-status{padding-left:6px}.ic-switch-small .ic-switch-toggle{width:var(--ic-space-xxl);height:var(--ic-space-lg)}.ic-switch-small .ic-switch-toggle::before{width:var(--ic-space-md);height:var(--ic-space-md);left:var(--ic-space-xxs)}.ic-switch-small .ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-lg), -50%)}::slotted(*){margin-left:var(--ic-space-sm)}'}}]);
//# sourceMappingURL=1882-1817361c6fd51da75e44.js.map