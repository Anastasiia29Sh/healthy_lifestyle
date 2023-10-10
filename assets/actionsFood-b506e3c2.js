import{g as y,m as b,q,u as S,c as n,a3 as p,p as V,a4 as f,a5 as P,a6 as h,r as k,b as H,a7 as $,d as z,a8 as G,a9 as K,aa as Q,e as U,ab as W,a as X,f as Y,ac as Z,ad as ee,l as ae,i as te,ae as ne,af as de,ag as ie,j as se,ah as le,ai as oe,aj as ce,k as re,ak as ue,o as A,al as ve,am as me,V as ge,an as fe,ao as ke,ap as ye,x as v}from"./index-100b5b1d.js";const be=y()({name:"VCardActions",props:b(),setup(e,d){let{slots:t}=d;return q({VBtn:{variant:"text"}}),S(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Se=p("v-card-subtitle"),pe=p("v-card-title"),Ie=V({appendAvatar:String,appendIcon:f,prependAvatar:String,prependIcon:f,subtitle:String,title:String,...b(),...P()},"VCardItem"),Ce=y()({name:"VCardItem",props:Ie(),setup(e,d){let{slots:t}=d;return S(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),r=!!(i||t.append),c=!!(e.title||t.title),u=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(h,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[c&&n(pe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),u&&n(Se,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),r&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&n(h,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),he=p("v-card-text"),Ae=V({appendAvatar:String,appendIcon:f,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:f,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...H(),...b(),...P(),...$(),...z(),...G(),...K(),...Q(),...U(),...W(),...X(),...Y(),...Z({variant:"elevated"})},"VCard"),Pe=y()({name:"VCard",directives:{Ripple:ee},props:Ae(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:o}=ae(e),{borderClasses:i}=te(e),{colorClasses:r,colorStyles:c,variantClasses:u}=ne(e),{densityClasses:s}=de(e),{dimensionStyles:l}=ie(e),{elevationClasses:F}=se(e),{loaderClasses:x}=le(e),{locationStyles:D}=oe(e),{positionClasses:N}=ce(e),{roundedClasses:T}=re(e),m=ue(e,t),w=A(()=>e.link!==!1&&m.isLink.value),g=A(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return S(()=>{const B=w.value?"a":e.tag,L=!!(a.title||e.title),_=!!(a.subtitle||e.subtitle),O=L||_,J=!!(a.append||e.appendAvatar||e.appendIcon),R=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),E=O||R||J,M=!!(a.text||e.text);return ve(n(B,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},o.value,i.value,r.value,s.value,F.value,x.value,N.value,T.value,u.value,e.class],style:[c.value,l.value,D.value,e.style],href:m.href.value,onClick:g.value&&m.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),E&&n(Ce,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),M&&n(he,{key:"text"},{default:()=>{var C;return[((C=a.text)==null?void 0:C.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(be,null,{default:a.actions}),ke(g.value,"v-card")]}}),[[me("ripple"),g.value&&e.ripple]])}),{}}}),Fe=ye("actionsFood",()=>{const e=v({id:0,name:"",weight:0,section:"",date:""}),d=v({id:0,name:"",calories:0,proteins:0,fats:0,carbs:0}),t=v(JSON.parse(localStorage.getItem("addedFood")||"[]")),a=v(JSON.parse(localStorage.getItem("addedNewFood")||"[]")),o=v();function i(){t.value.push(e.value),localStorage.setItem("addedFood",JSON.stringify(t.value))}function r(s){e.value.weight=s,c(),i()}function c(){t.value=t.value.filter(s=>s.id!==o.value),localStorage.setItem("addedFood",JSON.stringify(t.value))}function u(){a.value.push(d.value),localStorage.setItem("addedNewFood",JSON.stringify(a.value))}return{infaAddedFoodSectionDate:e,addedFoodSectionDate:t,addFoodSectionDate:i,idFood:o,editFoodSectionDate:r,deleteFoodSectionDate:c,infaAddedNewFood:d,addNewFood:u}});export{Pe as V,Fe as u};
