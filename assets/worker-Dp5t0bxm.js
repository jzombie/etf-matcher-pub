let c;const m=new Array(128).fill(void 0);m.push(void 0,null,!0,!1);function o(e){return m[e]}let E=m.length;function U(e){e<132||(m[e]=E,E=e)}function a(e){const n=o(e);return U(e),n}const $=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&$.decode();let p=null;function T(){return(p===null||p.byteLength===0)&&(p=new Uint8Array(c.memory.buffer)),p}function y(e,n){return e=e>>>0,$.decode(T().subarray(e,e+n))}function s(e){E===m.length&&m.push(m.length+1);const n=E;return E=m[n],m[n]=e,n}let g=0;const F=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},C=typeof F.encodeInto=="function"?function(e,n){return F.encodeInto(e,n)}:function(e,n){const t=F.encode(e);return n.set(t),{read:e.length,written:t.length}};function w(e,n,t){if(t===void 0){const f=F.encode(e),h=n(f.length,1)>>>0;return T().subarray(h,h+f.length).set(f),g=f.length,h}let r=e.length,_=n(r,1)>>>0;const i=T();let u=0;for(;u<r;u++){const f=e.charCodeAt(u);if(f>127)break;i[_+u]=f}if(u!==r){u!==0&&(e=e.slice(u)),_=t(_,r,r=u+e.length*3,1)>>>0;const f=T().subarray(_+u,_+r),h=C(e,f);u+=h.written,_=t(_,r,u,1)>>>0}return g=u,_}function j(e){return e==null}let k=null;function l(){return(k===null||k.byteLength===0)&&(k=new Int32Array(c.memory.buffer)),k}let A=null;function z(){return(A===null||A.byteLength===0)&&(A=new Float64Array(c.memory.buffer)),A}function N(e){const n=typeof e;if(n=="number"||n=="boolean"||e==null)return`${e}`;if(n=="string")return`"${e}"`;if(n=="symbol"){const _=e.description;return _==null?"Symbol":`Symbol(${_})`}if(n=="function"){const _=e.name;return typeof _=="string"&&_.length>0?`Function(${_})`:"Function"}if(Array.isArray(e)){const _=e.length;let i="[";_>0&&(i+=N(e[0]));for(let u=1;u<_;u++)i+=", "+N(e[u]);return i+="]",i}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(t.length>1)r=t[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}const M=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>{c.__wbindgen_export_2.get(e.dtor)(e.a,e.b)});function x(e,n,t,r){const _={a:e,b:n,cnt:1,dtor:t},i=(...u)=>{_.cnt++;const f=_.a;_.a=0;try{return r(f,_.b,...u)}finally{--_.cnt===0?(c.__wbindgen_export_2.get(_.dtor)(f,_.b),M.unregister(_)):_.a=f}};return i.original=_,M.register(i,_,_),i}function D(e,n){c._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h891e2428c21147d2(e,n)}function H(e,n,t){c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd9325d32b799d01f(e,n,s(t))}function B(){c.main()}function J(e){try{const _=c.__wbindgen_add_to_stack_pointer(-16),i=w(e,c.__wbindgen_malloc,c.__wbindgen_realloc),u=g;c.generate_qr_code(_,i,u);var n=l()[_/4+0],t=l()[_/4+1],r=l()[_/4+2];if(r)throw a(t);return a(n)}finally{c.__wbindgen_add_to_stack_pointer(16)}}function Q(e){const n=c.get_symbol_and_exchange_by_ticker_id(e);return a(n)}function V(){const e=c.get_data_build_info();return a(e)}function X(){const e=c.preload_symbol_search_cache();return a(e)}function G(e,n,t,r){const _=w(e,c.__wbindgen_malloc,c.__wbindgen_realloc),i=g,u=c.search_tickers(_,i,n,t,j(r)?16777215:r?1:0);return a(u)}function Y(e){const n=c.get_ticker_detail(e);return a(n)}function Z(e){const n=c.get_ticker_10k_detail(e);return a(n)}function P(e,n,t){const r=c.get_etf_holders_aggregate_detail_by_ticker_id(e,n,t);return a(r)}function K(e){const n=c.get_etf_aggregate_detail_by_ticker_id(e);return a(n)}function ee(e,n,t){const r=c.get_etf_holdings_by_etf_ticker_id(e,n,t);return a(r)}function ne(e,n){const t=c.get_etf_holding_weight(e,n);return a(t)}function te(e){const n=w(e,c.__wbindgen_malloc,c.__wbindgen_realloc),t=g,r=c.get_image_info(n,t);return a(r)}function re(e,n){const t=w(e,c.__wbindgen_malloc,c.__wbindgen_realloc),r=g,_=w(n,c.__wbindgen_malloc,c.__wbindgen_realloc),i=g,u=c.get_ticker_id(t,r,_,i);return a(u)}function _e(){const e=c.get_all_major_sectors();return a(e)}function ce(e){const n=c.get_euclidean_by_ticker(e);return a(n)}function oe(e){const n=c.get_euclidean_by_ticker_bucket(s(e));return a(n)}function ie(e){const n=c.get_cosine_by_ticker(e);return a(n)}function se(e){const n=c.get_cosine_by_ticker_bucket(s(e));return a(n)}function ue(e){const n=c.ticker_buckets_to_csv(s(e));return a(n)}function ae(e){const n=w(e,c.__wbindgen_malloc,c.__wbindgen_realloc),t=g,r=c.csv_to_ticker_buckets(n,t);return a(r)}function fe(){return c.get_cache_size()>>>0}function be(){const e=c.get_cache_details();return a(e)}function ge(e){const n=w(e,c.__wbindgen_malloc,c.__wbindgen_realloc),t=g;c.remove_cache_entry(n,t)}function le(){c.clear_cache()}function b(e,n){try{return e.apply(this,n)}catch(t){c.__wbindgen_exn_store(s(t))}}function de(e,n,t,r){c.wasm_bindgen__convert__closures__invoke2_mut__h254c94c6813276ee(e,n,s(t),s(r))}async function we(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function q(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){a(n)},e.wbg.__wbindgen_string_new=function(n,t){const r=y(n,t);return s(r)},e.wbg.__wbindgen_number_new=function(n){return s(n)},e.wbg.__wbindgen_string_get=function(n,t){const r=o(t),_=typeof r=="string"?r:void 0;var i=j(_)?0:w(_,c.__wbindgen_malloc,c.__wbindgen_realloc),u=g;l()[n/4+1]=u,l()[n/4+0]=i},e.wbg.__wbg_rustNotifyCallback_b4c9f6bfc53744f1=function(n,t,r){rustNotifyCallback(y(n,t),o(r))},e.wbg.__wbindgen_object_clone_ref=function(n){const t=o(n);return s(t)},e.wbg.__wbindgen_cb_drop=function(n){const t=a(n).original;return t.cnt--==1?(t.a=0,!0):!1},e.wbg.__wbindgen_number_get=function(n,t){const r=o(t),_=typeof r=="number"?r:void 0;z()[n/8+1]=j(_)?0:_,l()[n/4+0]=!j(_)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const n=new Error;return s(n)},e.wbg.__wbg_stack_658279fe44541cf6=function(n,t){const r=o(t).stack,_=w(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=g;l()[n/4+1]=i,l()[n/4+0]=_},e.wbg.__wbg_error_f851667af71bcfc6=function(n,t){let r,_;try{r=n,_=t,console.error(y(n,t))}finally{c.__wbindgen_free(r,_,1)}},e.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=function(n){queueMicrotask(o(n))},e.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=function(n){const t=o(n).queueMicrotask;return s(t)},e.wbg.__wbindgen_is_function=function(n){return typeof o(n)=="function"},e.wbg.__wbg_debug_5fb96680aecf5dc8=function(n){console.debug(o(n))},e.wbg.__wbg_error_8e3928cfb8a43e2b=function(n){console.error(o(n))},e.wbg.__wbg_warn_1982e858bdcc0c42=function(n,t){console.warn(o(n),o(t))},e.wbg.__wbg_status_d485fb5a478426fb=function(){return b(function(n){return o(n).status},arguments)},e.wbg.__wbg_setresponseType_c50d8f6cb4236ef5=function(n,t){o(n).responseType=a(t)},e.wbg.__wbg_response_7c2e2759084f7279=function(){return b(function(n){const t=o(n).response;return s(t)},arguments)},e.wbg.__wbg_new_71801a555ad9f2aa=function(){return b(function(){const n=new XMLHttpRequest;return s(n)},arguments)},e.wbg.__wbg_open_85f3205b02464bad=function(){return b(function(n,t,r,_,i){o(n).open(y(t,r),y(_,i))},arguments)},e.wbg.__wbg_send_80d29985093c1ec5=function(){return b(function(n){o(n).send()},arguments)},e.wbg.__wbg_setRequestHeader_44d235e7a239a771=function(){return b(function(n,t,r,_,i){o(n).setRequestHeader(y(t,r),y(_,i))},arguments)},e.wbg.__wbg_setonerror_667bee7dd2dad2ed=function(n,t){o(n).onerror=o(t)},e.wbg.__wbg_setonload_7d69e0bcecfa1d8a=function(n,t){o(n).onload=o(t)},e.wbg.__wbindgen_is_object=function(n){const t=o(n);return typeof t=="object"&&t!==null},e.wbg.__wbindgen_is_null=function(n){return o(n)===null},e.wbg.__wbindgen_is_undefined=function(n){return o(n)===void 0},e.wbg.__wbindgen_boolean_get=function(n){const t=o(n);return typeof t=="boolean"?t?1:0:2},e.wbg.__wbg_String_1c522c3233f70723=function(n,t){const r=String(o(t)),_=w(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=g;l()[n/4+1]=i,l()[n/4+0]=_},e.wbg.__wbg_new_6efc6d7d421dd087=function(){const n=new Object;return s(n)},e.wbg.__wbg_set_479bff999f0fe59d=function(n,t,r){o(n)[a(t)]=a(r)},e.wbg.__wbg_new_16b304a2cfa7ff4a=function(){const n=new Array;return s(n)},e.wbg.__wbg_newnoargs_e258087cd0daa0ea=function(n,t){const r=new Function(y(n,t));return s(r)},e.wbg.__wbg_new_d9bc3a0147634640=function(){return s(new Map)},e.wbg.__wbg_next_40fc327bfc8770e6=function(n){const t=o(n).next;return s(t)},e.wbg.__wbg_next_196c84450b364254=function(){return b(function(n){const t=o(n).next();return s(t)},arguments)},e.wbg.__wbg_done_298b57d23c0fc80c=function(n){return o(n).done},e.wbg.__wbg_value_d93c65011f51a456=function(n){const t=o(n).value;return s(t)},e.wbg.__wbg_iterator_2cee6dadfd956dfa=function(){return s(Symbol.iterator)},e.wbg.__wbg_get_e3c254076557e348=function(){return b(function(n,t){const r=Reflect.get(o(n),o(t));return s(r)},arguments)},e.wbg.__wbg_call_27c0f87801dedf93=function(){return b(function(n,t){const r=o(n).call(o(t));return s(r)},arguments)},e.wbg.__wbg_new_72fb9a18b5ae2624=function(){const n=new Object;return s(n)},e.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return b(function(){const n=self.self;return s(n)},arguments)},e.wbg.__wbg_window_c6fb939a7f436783=function(){return b(function(){const n=window.window;return s(n)},arguments)},e.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return b(function(){const n=globalThis.globalThis;return s(n)},arguments)},e.wbg.__wbg_global_207b558942527489=function(){return b(function(){const n=global.global;return s(n)},arguments)},e.wbg.__wbg_isArray_2ab64d95e09ea0ae=function(n){return Array.isArray(o(n))},e.wbg.__wbg_push_a5b05aedc7234f9f=function(n,t){return o(n).push(o(t))},e.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2=function(n){let t;try{t=o(n)instanceof ArrayBuffer}catch{t=!1}return t},e.wbg.__wbg_values_839f3396d5aac002=function(n){const t=o(n).values();return s(t)},e.wbg.__wbg_new_28c511d9baebfa89=function(n,t){const r=new Error(y(n,t));return s(r)},e.wbg.__wbg_call_b3ca7c6051f9bec1=function(){return b(function(n,t,r){const _=o(n).call(o(t),o(r));return s(_)},arguments)},e.wbg.__wbg_set_8417257aaedc936b=function(n,t,r){const _=o(n).set(o(t),o(r));return s(_)},e.wbg.__wbg_isSafeInteger_f7b04ef02296c4d2=function(n){return Number.isSafeInteger(o(n))},e.wbg.__wbg_now_3014639a94423537=function(){return Date.now()},e.wbg.__wbg_new_81740750da40724f=function(n,t){try{var r={a:n,b:t},_=(u,f)=>{const h=r.a;r.a=0;try{return de(h,r.b,u,f)}finally{r.a=h}};const i=new Promise(_);return s(i)}finally{r.a=r.b=0}},e.wbg.__wbg_resolve_b0083a7967828ec8=function(n){const t=Promise.resolve(o(n));return s(t)},e.wbg.__wbg_then_0c86a60e8fcfe9f6=function(n,t){const r=o(n).then(o(t));return s(r)},e.wbg.__wbg_then_a73caa9a87991566=function(n,t,r){const _=o(n).then(o(t),o(r));return s(_)},e.wbg.__wbg_buffer_12d079cc21e14bdb=function(n){const t=o(n).buffer;return s(t)},e.wbg.__wbg_new_63b92bc8671ed464=function(n){const t=new Uint8Array(o(n));return s(t)},e.wbg.__wbg_set_a47bac70306a19a7=function(n,t,r){o(n).set(o(t),r>>>0)},e.wbg.__wbg_length_c20a40f15020d68a=function(n){return o(n).length},e.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6=function(n){let t;try{t=o(n)instanceof Uint8Array}catch{t=!1}return t},e.wbg.__wbg_byteLength_58f7b4fab1919d44=function(n){return o(n).byteLength},e.wbg.__wbg_set_1f9b04f170055d33=function(){return b(function(n,t,r){return Reflect.set(o(n),o(t),o(r))},arguments)},e.wbg.__wbindgen_debug_string=function(n,t){const r=N(o(t)),_=w(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=g;l()[n/4+1]=i,l()[n/4+0]=_},e.wbg.__wbindgen_throw=function(n,t){throw new Error(y(n,t))},e.wbg.__wbindgen_memory=function(){const n=c.memory;return s(n)},e.wbg.__wbindgen_closure_wrapper608=function(n,t,r){const _=x(n,t,258,D);return s(_)},e.wbg.__wbindgen_closure_wrapper804=function(n,t,r){const _=x(n,t,299,H);return s(_)},e}function L(e,n){return c=e.exports,I.__wbindgen_wasm_module=n,A=null,k=null,p=null,c.__wbindgen_start(),c}function ye(e){if(c!==void 0)return c;const n=q();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));const t=new WebAssembly.Instance(e,n);return L(t,e)}async function I(e){if(c!==void 0)return c;typeof e>"u"&&(e=new URL("/assets/etf_matcher_bg-DEr8_Fee.wasm",import.meta.url));const n=q();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await we(await e,n);return L(t,r)}var W=Object.freeze({__proto__:null,clear_cache:le,csv_to_ticker_buckets:ae,default:I,generate_qr_code:J,get_all_major_sectors:_e,get_cache_details:be,get_cache_size:fe,get_cosine_by_ticker:ie,get_cosine_by_ticker_bucket:se,get_data_build_info:V,get_etf_aggregate_detail_by_ticker_id:K,get_etf_holders_aggregate_detail_by_ticker_id:P,get_etf_holding_weight:ne,get_etf_holdings_by_etf_ticker_id:ee,get_euclidean_by_ticker:ce,get_euclidean_by_ticker_bucket:oe,get_image_info:te,get_symbol_and_exchange_by_ticker_id:Q,get_ticker_10k_detail:Z,get_ticker_detail:Y,get_ticker_id:re,initSync:ye,main:B,preload_symbol_search_cache:X,remove_cache_entry:ge,search_tickers:G,ticker_buckets_to_csv:ue});const me=["warn","error"];function he(e){return me.includes(e)?Function.prototype.bind?Function.prototype.bind.call(globalThis.console[e],console):function(...n){Function.prototype.apply.call(globalThis.console[e],console,n)}:()=>null}function pe(){const e={};return Object.keys(console).forEach(n=>{typeof globalThis.console[n]=="function"&&(e[n]=he(n))}),e}const ke=pe();var R=(e=>(e[e.Function=1]="Function",e[e.NotifiyEvent=2]="NotifiyEvent",e))(R||{}),d=(e=>(e[e.EnvelopeType=1]="EnvelopeType",e[e.Success=2]="Success",e[e.Result=3]="Result",e[e.MessageId=4]="MessageId",e[e.Error=5]="Error",e[e.NotifierEventType=6]="NotifierEventType",e[e.NotifierArgs=7]="NotifierArgs",e))(d||{});let S=!1,v=null;const O=[];async function Ae(){S||(v?await v:(v=I().then(()=>{S=!0}),await v))}function Ee(e,n=50){const t="... (truncated)";if(typeof e=="string")return e.length>n?`${e.slice(0,n)}${t}`:e;if(typeof e=="object")try{const r=JSON.stringify(e);return r.length>n?`${r.slice(0,n)}${t}`:r}catch{return"[Unserializable Object]"}return e}async function ve(){for(;O.length>0;){const e=O.shift();if(e){const{functionName:n,args:t,resolve:r,reject:_}=e;try{if(await Ae(),typeof W[n]!="function")throw new Error(`Unknown function: ${n}`);const i=await W[n](...t);r(i)}catch(i){const u=t.map(f=>Ee(f));ke.error(`Worker encountered an error @ function "${n}" [${u.join(", ")}]:`,i),_(i)}}}}self.onmessage=async e=>{const{functionName:n,args:t,messageId:r}=e.data;new Promise((i,u)=>{O.push({functionName:n,args:t,resolve:i,reject:u}),O.length===1&&ve()}).then(i=>{self.postMessage({[d.EnvelopeType]:R.Function,[d.Success]:!0,[d.Result]:i,[d.MessageId]:r})}).catch(i=>{const u=i instanceof Error?i.message:i;self.postMessage({[d.EnvelopeType]:R.Function,[d.Success]:!1,[d.Error]:u,[d.MessageId]:r})})};self.rustNotifyCallback=function(e,n){self.postMessage({[d.EnvelopeType]:R.NotifiyEvent,[d.NotifierEventType]:e,[d.NotifierArgs]:n})};