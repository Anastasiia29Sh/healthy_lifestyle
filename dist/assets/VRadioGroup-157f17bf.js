import{p as m,aZ as k,g as V,u as f,c as a,H as n,a_ as b,a$ as C,aF as O,b0 as A,a4 as c,b1 as h,o as F,D as U,b2 as _,b3 as p,O as x,b4 as D,b5 as N}from"./index-b646c7ae.js";const H=m({...k({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),j=V()({name:"VRadio",props:H(),setup(e,l){let{slots:s}=l;return f(()=>a(b,n(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const L=m({height:{type:[Number,String],default:"auto"},...C(),...O(A(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),q=V()({name:"VRadioGroup",inheritAttrs:!1,props:L(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:o}=l;const y=h(),i=F(()=>e.id||`radio-group-${y}`),t=U(e,"modelValue");return f(()=>{const[v,I]=_(s),[g,M]=p.filterProps(e),[R,T]=b.filterProps(e),r=o.label?o.label({label:e.label,props:{for:i.value}}):e.label;return a(p,n({class:["v-radio-group",e.class],style:e.style},v,g,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,id:i.value}),{...o,default:u=>{let{id:d,messagesId:P,isDisabled:G,isReadonly:$}=u;return a(x,null,[r&&a(D,{id:d.value},{default:()=>[r]}),a(N,n(R,{id:d.value,"aria-describedby":P.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:$.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:t.value,"onUpdate:modelValue":S=>t.value=S}),o)])}})}),{}}});export{q as V,j as a};
