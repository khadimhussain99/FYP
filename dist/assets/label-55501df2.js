import{g as V,a as _,s as z,$ as Z,_ as d,r as C,c as E,Q as ee,aP as oe,j as c,d as H,X as I,i as U,k as L,aR as te,Y as S,u as ne,p as w,b as ae,P as h}from"./index-d1c7a555.js";function se(e){return V("PrivateSwitchBase",e)}_("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ce=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],re=e=>{const{classes:o,checked:n,disabled:a,edge:t}=e,s={root:["root",n&&"checked",a&&"disabled",t&&`edge${I(t)}`],input:["input"]};return U(s,se,o)},ie=z(Z)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),le=z("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=C.forwardRef(function(o,n){const{autoFocus:a,checked:t,checkedIcon:s,className:i,defaultChecked:u,disabled:f,disableFocusRipple:r=!1,edge:y=!1,icon:$,id:x,inputProps:j,inputRef:P,name:v,onBlur:b,onChange:g,onFocus:k,readOnly:q,required:Q=!1,tabIndex:X,type:B,value:M}=o,Y=E(o,ce),[O,A]=ee({controlled:t,default:!!u,name:"SwitchBase",state:"checked"}),p=oe(),D=l=>{k&&k(l),p&&p.onFocus&&p.onFocus(l)},G=l=>{b&&b(l),p&&p.onBlur&&p.onBlur(l)},J=l=>{if(l.nativeEvent.defaultPrevented)return;const T=l.target.checked;A(T),g&&g(l,T)};let m=f;p&&typeof m>"u"&&(m=p.disabled);const K=B==="checkbox"||B==="radio",R=d({},o,{checked:O,disabled:m,disableFocusRipple:r,edge:y}),N=re(R);return c.jsxs(ie,d({component:"span",className:H(N.root,i),centerRipple:!0,focusRipple:!r,disabled:m,tabIndex:null,role:void 0,onFocus:D,onBlur:G,ownerState:R,ref:n},Y,{children:[c.jsx(le,d({autoFocus:a,checked:t,defaultChecked:u,className:N.input,disabled:m,id:K?x:void 0,name:v,onChange:J,readOnly:q,ref:P,required:Q,ownerState:R,tabIndex:X,type:B},B==="checkbox"&&M===void 0?{}:{value:M},j)),O?s:$]}))}),ue=de,pe=L(c.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),he=L(c.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),fe=L(c.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function xe(e){return V("MuiCheckbox",e)}const be=_("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),F=be,ge=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ke=e=>{const{classes:o,indeterminate:n,color:a,size:t}=e,s={root:["root",n&&"indeterminate",`color${I(a)}`,`size${I(t)}`]},i=U(s,xe,o);return d({},o,i)},me=z(ue,{shouldForwardProp:e=>te(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.indeterminate&&o.indeterminate,n.color!=="default"&&o[`color${I(n.color)}`]]}})(({theme:e,ownerState:o})=>d({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:S(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${F.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Ce=c.jsx(he,{}),ye=c.jsx(pe,{}),ve=c.jsx(fe,{}),Be=C.forwardRef(function(o,n){var a,t;const s=ne({props:o,name:"MuiCheckbox"}),{checkedIcon:i=Ce,color:u="primary",icon:f=ye,indeterminate:r=!1,indeterminateIcon:y=ve,inputProps:$,size:x="medium",className:j}=s,P=E(s,ge),v=r?y:f,b=r?y:i,g=d({},s,{color:u,indeterminate:r,size:x}),k=ke(g);return c.jsx(me,d({type:"checkbox",inputProps:d({"data-indeterminate":r},$),icon:C.cloneElement(v,{fontSize:(a=v.props.fontSize)!=null?a:x}),checkedIcon:C.cloneElement(b,{fontSize:(t=b.props.fontSize)!=null?t:x}),ownerState:g,ref:n,className:H(k.root,j)},P,{classes:k}))}),$e=Be,Ie=z(w)(({theme:e,ownerState:o})=>{const n=e.palette.mode==="light",a=o.variant==="filled",t=o.variant==="outlined",s=o.variant==="soft",i={...o.color==="default"&&{...a&&{color:n?e.palette.common.white:e.palette.grey[800],backgroundColor:e.palette.text.primary},...t&&{backgroundColor:"transparent",color:e.palette.text.primary,border:`2px solid ${e.palette.text.primary}`},...s&&{color:e.palette.text.secondary,backgroundColor:S(e.palette.grey[500],.16)}}},u={...o.color!=="default"&&{...a&&{color:e.palette[o.color].contrastText,backgroundColor:e.palette[o.color].main},...t&&{backgroundColor:"transparent",color:e.palette[o.color].main,border:`2px solid ${e.palette[o.color].main}`},...s&&{color:e.palette[o.color][n?"dark":"light"],backgroundColor:S(e.palette[o.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:e.spacing(0,.75),fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightBold,transition:e.transitions.create("all",{duration:e.transitions.duration.shorter}),...i,...u}}),W=C.forwardRef(({children:e,color:o="default",variant:n="soft",startIcon:a,endIcon:t,sx:s,...i},u)=>{const f=ae(),r={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return c.jsxs(Ie,{ref:u,component:"span",ownerState:{color:o,variant:n},sx:{...a&&{pl:.75},...t&&{pr:.75},...s},theme:f,...i,children:[a&&c.jsxs(w,{sx:{mr:.75,...r},children:[" ",a," "]}),e,t&&c.jsxs(w,{sx:{ml:.75,...r},children:[" ",t," "]})]})});W.propTypes={children:h.node,endIcon:h.object,startIcon:h.object,sx:h.object,variant:h.oneOf(["filled","outlined","ghost","soft"]),color:h.oneOf(["default","primary","secondary","info","success","warning","error"])};const je=W;export{$e as C,je as L,ue as S};
