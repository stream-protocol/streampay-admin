import{a as Qe,R as m}from"./index-edbddc4c.js";const Hr=({size:e="48",...t})=>{const r=+e*.9375;return Qe("svg",{width:r,height:e,viewBox:"0 0 45 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Qe("path",{d:"M38.8535 7.79156L28.0165 1.5383C24.4707 -0.512767 20.1259 -0.512767 16.5802 1.5383L5.69318 7.79156C2.19737 9.84263 0 13.6446 0 17.6967V30.2533C0 34.3554 2.19737 38.1073 5.69318 40.1584L16.5302 46.4617C20.076 48.5128 24.4208 48.5128 27.9665 46.4617L38.8036 40.1584C42.3493 38.1073 44.4967 34.3554 44.4967 30.2533V17.6967C44.5966 13.6446 42.3992 9.84263 38.8535 7.79156ZM22.2733 35.1558C16.1307 35.1558 11.1367 30.1532 11.1367 24C11.1367 17.8468 16.1307 12.8442 22.2733 12.8442C28.416 12.8442 33.4599 17.8468 33.4599 24C33.4599 30.1532 28.4659 35.1558 22.2733 35.1558Z",fill:"#8B5CF6"})})};var oe=e=>e.type==="checkbox",se=e=>e instanceof Date,B=e=>e==null;const sr=e=>typeof e=="object";var T=e=>!B(e)&&!Array.isArray(e)&&sr(e)&&!se(e),ir=e=>T(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,kr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ar=(e,t)=>e.has(kr(t)),ae=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,c=(e,t,r)=>{if(!t||!T(e))return r;const i=ae(t.split(/[,[\].]+?/)).reduce((n,l)=>B(n)?n:n[l],e);return E(i)||i===e?E(e[t])?r:e[t]:i};const ye={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},nr=m.createContext(null),Fe=()=>m.useContext(nr),Kr=e=>{const{children:t,...r}=e;return m.createElement(nr.Provider,{value:r},t)};var ur=(e,t,r,i=!0)=>{const n={defaultValues:t._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const h=l;return t._proxyFormState[h]!==$.all&&(t._proxyFormState[h]=!i||$.all),r&&(r[h]=!0),e[h]}});return n},I=e=>T(e)&&!Object.keys(e).length,lr=(e,t,r)=>{const{name:i,...n}=e;return I(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find(l=>t[l]===(!r||$.all))},j=e=>Array.isArray(e)?e:[e],or=(e,t,r)=>r&&t?e===t:!e||!t||e===t||j(e).some(i=>i&&(i.startsWith(t)||t.startsWith(i)));function be(e){const t=m.useRef(e);t.current=e,m.useEffect(()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Sr(e){const t=Fe(),{control:r=t.control,disabled:i,name:n,exact:l}=e||{},[h,d]=m.useState(r._formState),v=m.useRef(!0),w=m.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),k=m.useRef(n);return k.current=n,be({disabled:i,callback:m.useCallback(F=>v.current&&or(k.current,F.name,l)&&lr(F,w.current)&&d({...r._formState,...F}),[r,l]),subject:r._subjects.state}),m.useEffect(()=>(v.current=!0,()=>{v.current=!1}),[]),ur(h,r,w.current,!1)}var Q=e=>typeof e=="string",cr=(e,t,r,i)=>{const n=Array.isArray(e);return Q(e)?(i&&t.watch.add(e),c(r,e)):n?e.map(l=>(i&&t.watch.add(l),c(r,l))):(i&&(t.watchAll=!0),r)},he=e=>typeof e=="function",qe=e=>{for(const t in e)if(he(e[t]))return!0;return!1};function Cr(e){const t=Fe(),{control:r=t.control,name:i,defaultValue:n,disabled:l,exact:h}=e||{},d=m.useRef(i);d.current=i,be({disabled:l,subject:r._subjects.watch,callback:m.useCallback(k=>{if(or(d.current,k.name,h)){const F=cr(d.current,r._names,k.values||r._formValues);w(E(d.current)||T(F)&&!qe(F)?{...F}:Array.isArray(F)?[...F]:E(F)?n:F)}},[r,h,n])});const[v,w]=m.useState(E(n)?r._getWatch(i):n);return m.useEffect(()=>r._removeUnmounted()),v}function Dr(e){const t=Fe(),{name:r,control:i=t.control,shouldUnregister:n}=e,l=ar(i._names.array,r),h=Cr({control:i,name:r,defaultValue:c(i._formValues,r,c(i._defaultValues,r,e.defaultValue)),exact:!0}),d=Sr({control:i,name:r}),v=m.useRef(i.register(r,{...e.rules,value:h}));return m.useEffect(()=>{const w=(k,F)=>{const x=c(i._fields,k);x&&(x._f.mount=F)};return w(r,!0),()=>{const k=i._options.shouldUnregister||n;(l?k&&!i._stateFlags.action:k)?i.unregister(r):w(r,!1)}},[r,i,l,n]),{field:{name:r,value:h,onChange:m.useCallback(w=>v.current.onChange({target:{value:ir(w),name:r},type:ye.CHANGE}),[r]),onBlur:m.useCallback(()=>v.current.onBlur({target:{value:c(i._formValues,r),name:r},type:ye.BLUR}),[r,i]),ref:w=>{const k=c(i._fields,r);k&&w&&(k._f.ref={focus:()=>w.focus(),select:()=>w.select(),setCustomValidity:F=>w.setCustomValidity(F),reportValidity:()=>w.reportValidity()})}},formState:d,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(d.touchedFields,r)},error:{enumerable:!0,get:()=>c(d.errors,r)}})}}const Zr=e=>e.render(Dr(e));var Er=(e,t,r,i,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:n||!0}}:{},We=e=>/^\w*$/.test(e),fr=e=>ae(e.replace(/["|']|\]/g,"").split(/\.|\[/));function D(e,t,r){let i=-1;const n=We(t)?[t]:fr(t),l=n.length,h=l-1;for(;++i<l;){const d=n[i];let v=r;if(i!==h){const w=e[d];v=T(w)||Array.isArray(w)?w:isNaN(+n[i+1])?{}:[]}e[d]=v,e=e[d]}return e}const ge=(e,t,r)=>{for(const i of r||Object.keys(e)){const n=c(e,i);if(n){const{_f:l,...h}=n;if(l&&t(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else T(h)&&ge(h,t)}}};var Y=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})},pe=(e,t,r={})=>r.shouldFocus||E(r.shouldFocus)?r.focusName||`${e}.${E(r.focusIndex)?t:r.focusIndex}.`:"",Be=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length)))),dr=(e,t,r)=>{const i=ae(c(e,r));return D(i,"root",t[r]),D(e,r,i),e},_e=e=>typeof e=="boolean",$e=e=>e.type==="file",de=e=>Q(e)||m.isValidElement(e),He=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const Xe={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var yr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Xe}return Xe};const ze={isValid:!1,value:null};var hr=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,ze):ze;function er(e,t,r="validate"){if(de(e)||Array.isArray(e)&&e.every(de)||_e(e)&&!e)return{type:r,message:de(e)?e:"",ref:t}}var te=e=>T(e)&&!Ae(e)?e:{value:e,message:""},Pe=async(e,t,r,i,n)=>{const{ref:l,refs:h,required:d,maxLength:v,minLength:w,min:k,max:F,pattern:x,validate:C,name:P,valueAsNumber:ee,mount:ne,disabled:G}=e._f;if(!ne||G)return{};const H=h?h[0]:l,K=b=>{i&&H.reportValidity&&(H.setCustomValidity(_e(b)?"":b||" "),H.reportValidity())},R={},z=He(l),_=oe(l),A=z||_,V=(ee||$e(l))&&!l.value||t===""||Array.isArray(t)&&!t.length,S=Er.bind(null,P,r,R),J=(b,p,O,M=X.maxLength,Z=X.minLength)=>{const q=b?p:O;R[P]={type:b?M:Z,message:q,ref:l,...S(b?M:Z,q)}};if(n?!Array.isArray(t)||!t.length:d&&(!A&&(V||B(t))||_e(t)&&!t||_&&!yr(h).isValid||z&&!hr(h).isValid)){const{value:b,message:p}=de(d)?{value:!!d,message:d}:te(d);if(b&&(R[P]={type:X.required,message:p,ref:H,...S(X.required,p)},!r))return K(p),R}if(!V&&(!B(k)||!B(F))){let b,p;const O=te(F),M=te(k);if(!B(t)&&!isNaN(t)){const Z=l.valueAsNumber||t&&+t;B(O.value)||(b=Z>O.value),B(M.value)||(p=Z<M.value)}else{const Z=l.valueAsDate||new Date(t),q=ce=>new Date(new Date().toDateString()+" "+ce),ue=l.type=="time",re=l.type=="week";Q(O.value)&&t&&(b=ue?q(t)>q(O.value):re?t>O.value:Z>new Date(O.value)),Q(M.value)&&t&&(p=ue?q(t)<q(M.value):re?t<M.value:Z<new Date(M.value))}if((b||p)&&(J(!!b,O.message,M.message,X.max,X.min),!r))return K(R[P].message),R}if((v||w)&&!V&&(Q(t)||n&&Array.isArray(t))){const b=te(v),p=te(w),O=!B(b.value)&&t.length>b.value,M=!B(p.value)&&t.length<p.value;if((O||M)&&(J(O,b.message,p.message),!r))return K(R[P].message),R}if(x&&!V&&Q(t)){const{value:b,message:p}=te(x);if(Ae(b)&&!t.match(b)&&(R[P]={type:X.pattern,message:p,ref:l,...S(X.pattern,p)},!r))return K(p),R}if(C){if(he(C)){const b=await C(t),p=er(b,H);if(p&&(R[P]={...p,...S(X.validate,p.message)},!r))return K(p.message),R}else if(T(C)){let b={};for(const p in C){if(!I(b)&&!r)break;const O=er(await C[p](t),H,p);O&&(b={...O,...S(p,O.message)},K(O.message),r&&(R[P]=b))}if(!I(b)&&(R[P]={ref:H,...b},!r))return R}}return K(!0),R};function ke(e,t){return[...e,...j(t)]}var Rr=e=>{const t=e.constructor&&e.constructor.prototype;return T(t)&&t.hasOwnProperty("isPrototypeOf")},Ne=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Ne&&(e instanceof Blob||e instanceof FileList))&&(r||T(e)))if(t=r?[]:{},!Array.isArray(e)&&!Rr(e))t=e;else for(const i in e)t[i]=W(e[i]);else return e;return t}var Se=e=>Array.isArray(e)?e.map(()=>{}):void 0,Ie=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched});function Ce(e,t,r){return[...e.slice(0,t),...j(r),...e.slice(t)]}var De=(e,t,r)=>Array.isArray(e)?(E(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function Ee(e,t){return[...j(t),...j(e)]}function Lr(e,t){let r=0;const i=[...e];for(const n of t)i.splice(n-r,1),r++;return ae(i).length?i:[]}var Re=(e,t)=>E(t)?[]:Lr(e,j(t).sort((r,i)=>r-i)),Le=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function Or(e,t){const r=t.slice(0,-1).length;let i=0;for(;i<r;)e=E(e)?i++:e[t[i++]];return e}function Tr(e){for(const t in e)if(!E(e[t]))return!1;return!0}function U(e,t){const r=We(t)?[t]:fr(t),i=r.length==1?e:Or(e,r),n=r[r.length-1];let l;i&&delete i[n];for(let h=0;h<r.slice(0,-1).length;h++){let d=-1,v;const w=r.slice(0,-(h+1)),k=w.length-1;for(h>0&&(l=e);++d<w.length;){const F=w[d];v=v?v[F]:e[F],k===d&&(T(v)&&I(v)||Array.isArray(v)&&Tr(v))&&(l?delete l[F]:delete e[F]),l=v}}return e}var rr=(e,t,r)=>(e[t]=r,e);function Gr(e){const t=Fe(),{control:r=t.control,name:i,keyName:n="id",shouldUnregister:l}=e,[h,d]=m.useState(r._getFieldArray(i)),v=m.useRef(r._getFieldArray(i).map(Y)),w=m.useRef(h),k=m.useRef(i),F=m.useRef(!1);k.current=i,w.current=h,r._names.array.add(i),e.rules&&r.register(i,e.rules);const x=m.useCallback(({values:_,name:A})=>{if(A===k.current||!A){const V=c(_,k.current);Array.isArray(V)&&(d(V),v.current=V.map(Y))}},[]);be({callback:x,subject:r._subjects.array});const C=m.useCallback(_=>{F.current=!0,r._updateFieldArray(i,_)},[r,i]),P=(_,A)=>{const V=j(W(_)),S=ke(r._getFieldArray(i),V);r._names.focus=pe(i,S.length-1,A),v.current=ke(v.current,V.map(Y)),C(S),d(S),r._updateFieldArray(i,S,ke,{argA:Se(_)})},ee=(_,A)=>{const V=j(W(_)),S=Ee(r._getFieldArray(i),V);r._names.focus=pe(i,0,A),v.current=Ee(v.current,V.map(Y)),C(S),d(S),r._updateFieldArray(i,S,Ee,{argA:Se(_)})},ne=_=>{const A=Re(r._getFieldArray(i),_);v.current=Re(v.current,_),C(A),d(A),r._updateFieldArray(i,A,Re,{argA:_})},G=(_,A,V)=>{const S=j(W(A)),J=Ce(r._getFieldArray(i),_,S);r._names.focus=pe(i,_,V),v.current=Ce(v.current,_,S.map(Y)),C(J),d(J),r._updateFieldArray(i,J,Ce,{argA:_,argB:Se(A)})},H=(_,A)=>{const V=r._getFieldArray(i);Le(V,_,A),Le(v.current,_,A),C(V),d(V),r._updateFieldArray(i,V,Le,{argA:_,argB:A},!1)},K=(_,A)=>{const V=r._getFieldArray(i);De(V,_,A),De(v.current,_,A),C(V),d(V),r._updateFieldArray(i,V,De,{argA:_,argB:A},!1)},R=(_,A)=>{const V=W(A),S=rr(r._getFieldArray(i),_,V);v.current=[...S].map((J,b)=>!J||b===_?Y():v.current[b]),C(S),d([...S]),r._updateFieldArray(i,S,rr,{argA:_,argB:V},!0,!1)},z=_=>{const A=j(W(_));v.current=A.map(Y),C([...A]),d([...A]),r._updateFieldArray(i,[...A],V=>V,{},!0,!1)};return m.useEffect(()=>{if(r._stateFlags.action=!1,Be(i,r._names)&&r._subjects.state.next({}),F.current&&(!Ie(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([i]).then(_=>{const A=c(_.errors,i),V=c(r._formState.errors,i);(V?!A&&V.type:A&&A.type)&&(A?D(r._formState.errors,i,A):U(r._formState.errors,i),r._subjects.state.next({errors:r._formState.errors}))});else{const _=c(r._fields,i);_&&_._f&&Pe(_,c(r._formValues,i),r._options.criteriaMode===$.all,r._options.shouldUseNativeValidation,!0).then(A=>!I(A)&&r._subjects.state.next({errors:dr(r._formState.errors,A,i)}))}r._subjects.watch.next({name:i,values:r._formValues}),r._names.focus&&ge(r._fields,_=>!!_&&_.startsWith(r._names.focus)),r._names.focus="",r._proxyFormState.isValid&&r._updateValid()},[h,i,r]),m.useEffect(()=>(!c(r._formValues,i)&&r._updateFieldArray(i),()=>{(r._options.shouldUnregister||l)&&r.unregister(i)}),[i,r,n,l]),{swap:m.useCallback(H,[C,i,r]),move:m.useCallback(K,[C,i,r]),prepend:m.useCallback(ee,[C,i,r]),append:m.useCallback(P,[C,i,r]),remove:m.useCallback(ne,[C,i,r]),insert:m.useCallback(G,[C,i,r]),update:m.useCallback(R,[C,i,r]),replace:m.useCallback(z,[C,i,r]),fields:m.useMemo(()=>h.map((_,A)=>({..._,[n]:v.current[A]||Y()})),[h,n])}}function Oe(){let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}}var ve=e=>B(e)||!sr(e);function ie(e,t){if(ve(e)||ve(t))return e===t;if(se(e)&&se(t))return e.getTime()===t.getTime();const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(const n of r){const l=e[n];if(!i.includes(n))return!1;if(n!=="ref"){const h=t[n];if(se(l)&&se(h)||T(l)&&T(h)||Array.isArray(l)&&Array.isArray(h)?!ie(l,h):l!==h)return!1}}return!0}var je=e=>{const t=e?e.ownerDocument:0,r=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof r},gr=e=>e.type==="select-multiple",Mr=e=>He(e)||oe(e),Te=e=>je(e)&&e.isConnected;function me(e,t={}){const r=Array.isArray(e);if(T(e)||r)for(const i in e)Array.isArray(e[i])||T(e[i])&&!qe(e[i])?(t[i]=Array.isArray(e[i])?[]:{},me(e[i],t[i])):B(e[i])||(t[i]=!0);return t}function _r(e,t,r){const i=Array.isArray(e);if(T(e)||i)for(const n in e)Array.isArray(e[n])||T(e[n])&&!qe(e[n])?E(t)||ve(r[n])?r[n]=Array.isArray(e[n])?me(e[n],[]):{...me(e[n])}:_r(e[n],B(t)?{}:t[n],r[n]):r[n]=!ie(e[n],t[n]);return r}var Me=(e,t)=>_r(e,t,me(t)),Ar=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>E(e)?e:t?e===""?NaN:e&&+e:r&&Q(e)?new Date(e):i?i(e):e;function Ue(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return $e(t)?t.files:He(t)?hr(e.refs).value:gr(t)?[...t.selectedOptions].map(({value:r})=>r):oe(t)?yr(e.refs).value:Ar(E(t.value)?e.ref.value:t.value,e)}var Ur=(e,t,r,i)=>{const n={};for(const l of e){const h=c(t,l);h&&D(n,l,h._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:i}},le=e=>E(e)?void 0:Ae(e)?e.source:T(e)?Ae(e.value)?e.value.source:e.value:e,Br=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function tr(e,t,r){const i=c(e,r);if(i||We(r))return{error:i,name:r};const n=r.split(".");for(;n.length;){const l=n.join("."),h=c(t,l),d=c(e,l);if(h&&!Array.isArray(h)&&r!==l)return{name:r};if(d&&d.type)return{name:l,error:d};n.pop()}return{name:r}}var Pr=(e,t,r,i,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(t||e):(r?i.isOnBlur:n.isOnBlur)?!e:(r?i.isOnChange:n.isOnChange)?e:!0,Nr=(e,t)=>!ae(c(e,t)).length&&U(e,t);const Ir={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function jr(e={}){let t={...Ir,...e},r={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},n=W(t.defaultValues)||{},l=t.shouldUnregister?{}:W(n),h={action:!1,mount:!1,watch:!1},d={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v,w=0,k={};const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={watch:Oe(),array:Oe(),state:Oe()},C=Ie(t.mode),P=Ie(t.reValidateMode),ee=t.criteriaMode===$.all,ne=s=>a=>{clearTimeout(w),w=window.setTimeout(s,a)},G=async s=>{let a=!1;return F.isValid&&(a=t.resolver?I((await A()).errors):await S(i,!0),!s&&a!==r.isValid&&(r.isValid=a,x.state.next({isValid:a}))),a},H=(s,a=[],u,f,y=!0,o=!0)=>{if(f&&u){if(h.action=!0,o&&Array.isArray(c(i,s))){const g=u(c(i,s),f.argA,f.argB);y&&D(i,s,g)}if(F.errors&&o&&Array.isArray(c(r.errors,s))){const g=u(c(r.errors,s),f.argA,f.argB);y&&D(r.errors,s,g),Nr(r.errors,s)}if(F.touchedFields&&o&&Array.isArray(c(r.touchedFields,s))){const g=u(c(r.touchedFields,s),f.argA,f.argB);y&&D(r.touchedFields,s,g)}F.dirtyFields&&(r.dirtyFields=Me(n,l)),x.state.next({isDirty:b(s,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else D(l,s,a)},K=(s,a)=>{D(r.errors,s,a),x.state.next({errors:r.errors})},R=(s,a,u,f)=>{const y=c(i,s);if(y){const o=c(l,s,E(u)?c(n,s):u);E(o)||f&&f.defaultChecked||a?D(l,s,a?o:Ue(y._f)):M(s,o),h.mount&&G()}},z=(s,a,u,f,y)=>{let o=!1;const g={name:s},L=c(r.touchedFields,s);if(F.isDirty){const N=r.isDirty;r.isDirty=g.isDirty=b(),o=N!==g.isDirty}if(F.dirtyFields&&(!u||f)){const N=c(r.dirtyFields,s);ie(c(n,s),a)?U(r.dirtyFields,s):D(r.dirtyFields,s,!0),g.dirtyFields=r.dirtyFields,o=o||N!==c(r.dirtyFields,s)}return u&&!L&&(D(r.touchedFields,s,u),g.touchedFields=r.touchedFields,o=o||F.touchedFields&&L!==u),o&&y&&x.state.next(g),o?g:{}},_=async(s,a,u,f)=>{const y=c(r.errors,s),o=F.isValid&&r.isValid!==a;if(e.delayError&&u?(v=ne(()=>K(s,u)),v(e.delayError)):(clearTimeout(w),v=null,u?D(r.errors,s,u):U(r.errors,s)),(u?!ie(y,u):y)||!I(f)||o){const g={...f,...o?{isValid:a}:{},errors:r.errors,name:s};r={...r,...g},x.state.next(g)}k[s]--,F.isValidating&&!Object.values(k).some(g=>g)&&(x.state.next({isValidating:!1}),k={})},A=async s=>t.resolver?await t.resolver({...l},t.context,Ur(s||d.mount,i,t.criteriaMode,t.shouldUseNativeValidation)):{},V=async s=>{const{errors:a}=await A();if(s)for(const u of s){const f=c(a,u);f?D(r.errors,u,f):U(r.errors,u)}else r.errors=a;return a},S=async(s,a,u={valid:!0})=>{for(const f in s){const y=s[f];if(y){const{_f:o,...g}=y;if(o){const L=d.array.has(o.name),N=await Pe(y,c(l,o.name),ee,t.shouldUseNativeValidation,L);if(N[o.name]&&(u.valid=!1,a))break;!a&&(c(N,o.name)?L?dr(r.errors,N,o.name):D(r.errors,o.name,N[o.name]):U(r.errors,o.name))}g&&await S(g,a,u)}}return u.valid},J=()=>{for(const s of d.unMount){const a=c(i,s);a&&(a._f.refs?a._f.refs.every(u=>!Te(u)):!Te(a._f.ref))&&xe(s)}d.unMount=new Set},b=(s,a)=>(s&&a&&D(l,s,a),!ie(ce(),n)),p=(s,a,u)=>{const f={...h.mount?l:E(a)?n:Q(s)?{[s]:a}:a};return cr(s,d,f,u)},O=s=>ae(c(h.mount?l:n,s,e.shouldUnregister?c(n,s,[]):[])),M=(s,a,u={})=>{const f=c(i,s);let y=a;if(f){const o=f._f;o&&(!o.disabled&&D(l,s,Ar(a,o)),y=Ne&&je(o.ref)&&B(a)?"":a,gr(o.ref)?[...o.ref.options].forEach(g=>g.selected=y.includes(g.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(y)?!!y.find(L=>L===g.value):y===g.value)):o.refs[0]&&(o.refs[0].checked=!!y):o.refs.forEach(g=>g.checked=g.value===y):$e(o.ref)?o.ref.value="":(o.ref.value=y,o.ref.type||x.watch.next({name:s})))}(u.shouldDirty||u.shouldTouch)&&z(s,y,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&re(s)},Z=(s,a,u)=>{for(const f in a){const y=a[f],o=`${s}.${f}`,g=c(i,o);(d.array.has(s)||!ve(y)||g&&!g._f)&&!se(y)?Z(o,y,u):M(o,y,u)}},q=(s,a,u={})=>{const f=c(i,s),y=d.array.has(s),o=W(a);D(l,s,o),y?(x.array.next({name:s,values:l}),(F.isDirty||F.dirtyFields)&&u.shouldDirty&&(r.dirtyFields=Me(n,l),x.state.next({name:s,dirtyFields:r.dirtyFields,isDirty:b(s,o)}))):f&&!f._f&&!B(o)?Z(s,o,u):M(s,o,u),Be(s,d)&&x.state.next({}),x.watch.next({name:s})},ue=async s=>{const a=s.target;let u=a.name;const f=c(i,u);if(f){let y,o;const g=a.type?Ue(f._f):ir(s),L=s.type===ye.BLUR||s.type===ye.FOCUS_OUT,N=!Br(f._f)&&!t.resolver&&!c(r.errors,u)&&!f._f.deps||Pr(L,c(r.touchedFields,u),r.isSubmitted,P,C),fe=Be(u,d,L);D(l,u,g),L?(f._f.onBlur&&f._f.onBlur(s),v&&v(0)):f._f.onChange&&f._f.onChange(s);const we=z(u,g,L,!1),wr=!I(we)||fe;if(!L&&x.watch.next({name:u,type:s.type}),N)return wr&&x.state.next({name:u,...fe?{}:we});if(!L&&fe&&x.state.next({}),k[u]=(k[u],1),x.state.next({isValidating:!0}),t.resolver){const{errors:Ge}=await A([u]),pr=tr(r.errors,i,u),Je=tr(Ge,i,pr.name||u);y=Je.error,u=Je.name,o=I(Ge)}else y=(await Pe(f,c(l,u),ee,t.shouldUseNativeValidation))[u],o=await G(!0);f._f.deps&&re(f._f.deps),_(u,o,y,we)}},re=async(s,a={})=>{let u,f;const y=j(s);if(x.state.next({isValidating:!0}),t.resolver){const o=await V(E(s)?s:y);u=I(o),f=s?!y.some(g=>c(o,g)):u}else s?(f=(await Promise.all(y.map(async o=>{const g=c(i,o);return await S(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!f&&!r.isValid)&&G()):f=u=await S(i);return x.state.next({...!Q(s)||F.isValid&&u!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:u}:{},errors:r.errors,isValidating:!1}),a.shouldFocus&&!f&&ge(i,o=>o&&c(r.errors,o),s?y:d.mount),f},ce=s=>{const a={...n,...h.mount?l:{}};return E(s)?a:Q(s)?c(a,s):s.map(u=>c(a,u))},Ke=(s,a)=>({invalid:!!c((a||r).errors,s),isDirty:!!c((a||r).dirtyFields,s),isTouched:!!c((a||r).touchedFields,s),error:c((a||r).errors,s)}),vr=s=>{s?j(s).forEach(a=>U(r.errors,a)):r.errors={},x.state.next({errors:r.errors})},mr=(s,a,u)=>{const f=(c(i,s,{_f:{}})._f||{}).ref;D(r.errors,s,{...a,ref:f}),x.state.next({name:s,errors:r.errors,isValid:!1}),u&&u.shouldFocus&&f&&f.focus&&f.focus()},Fr=(s,a)=>he(s)?x.watch.subscribe({next:u=>s(p(void 0,a),u)}):p(s,a,!0),xe=(s,a={})=>{for(const u of s?j(s):d.mount)d.mount.delete(u),d.array.delete(u),c(i,u)&&(a.keepValue||(U(i,u),U(l,u)),!a.keepError&&U(r.errors,u),!a.keepDirty&&U(r.dirtyFields,u),!a.keepTouched&&U(r.touchedFields,u),!t.shouldUnregister&&!a.keepDefaultValue&&U(n,u));x.watch.next({}),x.state.next({...r,...a.keepDirty?{isDirty:b()}:{}}),!a.keepIsValid&&G()},Ve=(s,a={})=>{let u=c(i,s);const f=_e(a.disabled);return D(i,s,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:s}},name:s,mount:!0,...a}}),d.mount.add(s),u?f&&D(l,s,a.disabled?void 0:c(l,s,Ue(u._f))):R(s,!0,a.value),{...f?{disabled:a.disabled}:{},...t.shouldUseNativeValidation?{required:!!a.required,min:le(a.min),max:le(a.max),minLength:le(a.minLength),maxLength:le(a.maxLength),pattern:le(a.pattern)}:{},name:s,onChange:ue,onBlur:ue,ref:y=>{if(y){Ve(s,a),u=c(i,s);const o=E(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,g=Mr(o),L=u._f.refs||[];if(g?L.find(N=>N===o):o===u._f.ref)return;D(i,s,{_f:{...u._f,...g?{refs:[...L.filter(Te),o,...Array.isArray(c(n,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),R(s,!1,void 0,o)}else u=c(i,s,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||a.shouldUnregister)&&!(ar(d.array,s)&&h.action)&&d.unMount.add(s)}}},Ze=()=>t.shouldFocusError&&ge(i,s=>s&&c(r.errors,s),d.mount),br=(s,a)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let f=!0,y=W(l);x.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:o,values:g}=await A();r.errors=o,y=g}else await S(i);I(r.errors)?(x.state.next({errors:{},isSubmitting:!0}),await s(y,u)):(a&&await a({...r.errors},u),Ze())}catch(o){throw f=!1,o}finally{r.isSubmitted=!0,x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(r.errors)&&f,submitCount:r.submitCount+1,errors:r.errors})}},xr=(s,a={})=>{c(i,s)&&(E(a.defaultValue)?q(s,c(n,s)):(q(s,a.defaultValue),D(n,s,a.defaultValue)),a.keepTouched||U(r.touchedFields,s),a.keepDirty||(U(r.dirtyFields,s),r.isDirty=a.defaultValue?b(s,c(n,s)):b()),a.keepError||(U(r.errors,s),F.isValid&&G()),x.state.next({...r}))},Vr=(s,a={})=>{const u=s||n,f=W(u),y=s&&!I(s)?f:n;if(a.keepDefaultValues||(n=u),!a.keepValues){if(a.keepDirtyValues)for(const o of d.mount)c(r.dirtyFields,o)?D(y,o,c(l,o)):q(o,c(y,o));else{if(Ne&&E(s))for(const o of d.mount){const g=c(i,o);if(g&&g._f){const L=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;try{if(je(L)){L.closest("form").reset();break}}catch{}}}i={}}l=e.shouldUnregister?a.keepDefaultValues?W(n):{}:f,x.array.next({values:y}),x.watch.next({values:y})}d={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!F.isValid||!!a.keepIsValid,h.watch=!!e.shouldUnregister,x.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?r.isDirty:!!(a.keepDefaultValues&&!ie(s,n)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:a.keepDirty||a.keepDirtyValues?r.dirtyFields:a.keepDefaultValues&&s?Me(n,s):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Ve,unregister:xe,getFieldState:Ke,_executeSchema:A,_focusError:Ze,_getWatch:p,_getDirty:b,_updateValid:G,_removeUnmounted:J,_updateFieldArray:H,_getFieldArray:O,_subjects:x,_proxyFormState:F,get _fields(){return i},get _formValues(){return l},get _stateFlags(){return h},set _stateFlags(s){h=s},get _defaultValues(){return n},get _names(){return d},set _names(s){d=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:re,register:Ve,handleSubmit:br,watch:Fr,setValue:q,getValues:ce,reset:(s,a)=>Vr(he(s)?s(l):s,a),resetField:xr,clearErrors:vr,unregister:xe,setError:mr,setFocus:(s,a={})=>{const u=c(i,s),f=u&&u._f;if(f){const y=f.refs?f.refs[0]:f.ref;y.focus&&(y.focus(),a.shouldSelect&&y.select())}},getFieldState:Ke}}function Jr(e={}){const t=m.useRef(),[r,i]=m.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...jr(e),formState:r});const n=t.current.control;return n._options=e,be({subject:n._subjects.state,callback:m.useCallback(l=>{lr(l,n._proxyFormState,!0)&&(n._formState={...n._formState,...l},i({...n._formState}))},[n])}),m.useEffect(()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()}),m.useEffect(()=>{r.submitCount&&n._focusError()},[n,r.submitCount]),t.current.formState=ur(r,n),t.current}export{Zr as C,Kr as F,Hr as M,Jr as a,Fe as b,Gr as c,c as g,Cr as u};
