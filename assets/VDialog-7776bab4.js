import{p as y,aq as D,ar as b,g as x,D as h,as as S,x as w,at as B,y as v,o as F,u as I,au as R,av as T,aw as f,c as g,r as O,H as m,ax as A}from"./index-100b5b1d.js";const C=y({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...D({origin:"center center",scrollStrategy:"block",transition:{component:b},zIndex:2400})},"VDialog"),N=x()({name:"VDialog",props:C(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=h(a,"modelValue"),{scopeId:V}=S(),t=w();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=A(t.value.contentEl);if(!u.length)return;const d=u[0],P=u[u.length-1];e===d?P.focus():d.focus()}}B&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,o;await T(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const E=F(()=>m({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return I(()=>{const[l]=f.filterProps(a);return g(f,m({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(O,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),R({},t)}});export{N as V};
