(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const or="160",Yo=0,br=1,jo=2,so=1,ro=2,sn=3,_n=0,Lt=1,Bt=2,pn=0,ei=1,_i=2,Ar=3,wr=4,Ko=5,Rn=100,$o=101,Zo=102,Cr=103,Rr=104,Jo=200,Qo=201,ec=202,tc=203,$s=204,Zs=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,cc=212,lc=213,hc=214,uc=0,dc=1,fc=2,Ji=3,pc=4,mc=5,gc=6,_c=7,ao=0,vc=1,xc=2,mn=0,Mc=1,yc=2,Sc=3,Ec=4,Tc=5,bc=6,oo=300,ii=301,si=302,Js=303,Qs=304,os=306,er=1e3,qt=1001,tr=1002,At=1003,Pr=1004,ms=1005,Ct=1006,Ac=1007,xi=1008,gn=1009,wc=1010,Cc=1011,cr=1012,co=1013,dn=1014,fn=1015,Mi=1016,lo=1017,ho=1018,Ln=1020,Rc=1021,Gt=1023,Pc=1024,Lc=1025,In=1026,ri=1027,Ic=1028,uo=1029,Dc=1030,fo=1031,po=1033,gs=33776,_s=33777,vs=33778,xs=33779,Lr=35840,Ir=35841,Dr=35842,Ur=35843,mo=36196,Nr=37492,Fr=37496,Or=37808,Br=37809,Gr=37810,zr=37811,Vr=37812,Hr=37813,kr=37814,Wr=37815,Xr=37816,qr=37817,Yr=37818,jr=37819,Kr=37820,$r=37821,Ms=36492,Zr=36494,Jr=36495,Uc=36283,Qr=36284,ea=36285,ta=36286,go=3e3,Dn=3001,Nc=3200,Fc=3201,_o=0,Oc=1,zt="",gt="srgb",an="srgb-linear",lr="display-p3",cs="display-p3-linear",Qi="linear",nt="srgb",es="rec709",ts="p3",Nn=7680,na=519,Bc=512,Gc=513,zc=514,vo=515,Vc=516,Hc=517,kc=518,Wc=519,ia=35044,sa="300 es",nr=1035,rn=2e3,ns=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,is=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Xc(s,e){return(s%e+e)%e}function Ss(s,e,t){return(1-t)*s+t*e}function ra(s){return(s&s-1)===0&&s!==0}function ir(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],v=i[4],E=i[7],P=i[2],C=i[5],R=i[8];return r[0]=a*_+o*y+c*P,r[3]=a*m+o*v+c*C,r[6]=a*f+o*E+c*R,r[1]=l*_+u*y+h*P,r[4]=l*m+u*v+h*C,r[7]=l*f+u*E+h*R,r[2]=d*_+p*y+g*P,r[5]=d*m+p*v+g*C,r[8]=d*f+p*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new We;function xo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qc(){const s=ss("canvas");return s.style.display="block",s}const aa={};function vi(s){s in aa||(aa[s]=!0,console.warn(s))}const oa=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ca=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ai={[an]:{transfer:Qi,primaries:es,toReference:s=>s,fromReference:s=>s},[gt]:{transfer:nt,primaries:es,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[cs]:{transfer:Qi,primaries:ts,toReference:s=>s.applyMatrix3(ca),fromReference:s=>s.applyMatrix3(oa)},[lr]:{transfer:nt,primaries:ts,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ca),fromReference:s=>s.applyMatrix3(oa).convertLinearToSRGB()}},Yc=new Set([an,cs]),Ze={enabled:!0,_workingColorSpace:an,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Yc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ai[e].toReference,i=Ai[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ai[s].primaries},getTransfer:function(s){return s===zt?Qi:Ai[s].transfer}};function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fn;class Mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=ss("canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jc=0;class yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(bs(i[a].image)):r.push(bs(i[a]))}else r=bs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function bs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kc=0;class It extends oi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=qt,i=qt,r=Ct,a=xi,o=Gt,c=gn,l=It.DEFAULT_ANISOTROPY,u=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=yi(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Dn?gt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Dn:go}set encoding(e){vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dn?gt:zt}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=oo;It.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,E=(p+1)/2,P=(f+1)/2,C=(u+d)/4,R=(h+_)/4,O=(g+m)/4;return v>E&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=R/n):E>P?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=C/i,r=O/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=O/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $c extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(vi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dn?gt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends $c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class So extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zc extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-o;const f=c*d+l*p+u*g+h*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,f*y);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const E=o*y;if(c=c*m+d*E,l=l*m+p*E,u=u*m+g*E,h=h*m+_*E,m===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-o*p,e[t+2]=l*g+u*p+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(la.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(la.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return As.copy(this).projectOnVector(e),this.sub(As)}reflect(e){return this.sub(As.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new I,la=new ci;class Si{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vt):Vt.fromBufferAttribute(r,a),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wi.copy(n.boundingBox)),wi.applyMatrix4(e.matrixWorld),this.union(wi)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(di),Ci.subVectors(this.max,di),On.subVectors(e.a,di),Bn.subVectors(e.b,di),Gn.subVectors(e.c,di),on.subVectors(Bn,On),cn.subVectors(Gn,Bn),Sn.subVectors(On,Gn);let t=[0,-on.z,on.y,0,-cn.z,cn.y,0,-Sn.z,Sn.y,on.z,0,-on.x,cn.z,0,-cn.x,Sn.z,0,-Sn.x,-on.y,on.x,0,-cn.y,cn.x,0,-Sn.y,Sn.x,0];return!ws(t,On,Bn,Gn,Ci)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,On,Bn,Gn,Ci))?!1:(Ri.crossVectors(on,cn),t=[Ri.x,Ri.y,Ri.z],ws(t,On,Bn,Gn,Ci))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new I,new I,new I,new I,new I,new I,new I,new I],Vt=new I,wi=new Si,On=new I,Bn=new I,Gn=new I,on=new I,cn=new I,Sn=new I,di=new I,Ci=new I,Ri=new I,En=new I;function ws(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){En.fromArray(s,r);const o=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),c=e.dot(En),l=t.dot(En),u=n.dot(En);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Jc=new Si,fi=new I,Cs=new I;class Ei{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fi.subVectors(e,this.center);const t=fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fi.copy(e.center).add(Cs)),this.expandByPoint(fi.copy(e.center).sub(Cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new I,Rs=new I,Pi=new I,ln=new I,Ps=new I,Li=new I,Ls=new I;class ls{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rs.copy(e).add(t).multiplyScalar(.5),Pi.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Rs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Pi),o=ln.dot(this.direction),c=-ln.dot(Pi),l=ln.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Rs).addScaledVector(Pi,d),p}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),i=Qt.dot(Qt)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,i,r){Ps.subVectors(t,e),Li.subVectors(n,e),Ls.crossVectors(Ps,Li);let a=this.direction.dot(Ls),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ln.subVectors(this.origin,e);const c=o*this.direction.dot(Li.crossVectors(ln,Li));if(c<0)return null;const l=o*this.direction.dot(Ps.cross(ln));if(l<0||c+l>a)return null;const u=-o*ln.dot(Ls);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,a,o,c,l,u,h,d,p,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,p,g,_,m)}set(e,t,n,i,r,a,o,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zn.setFromMatrixColumn(e,0).length(),r=1/zn.setFromMatrixColumn(e,1).length(),a=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qc,e,el)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),hn.crossVectors(n,Ut),hn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),hn.crossVectors(n,Ut)),hn.normalize(),Ii.crossVectors(Ut,hn),i[0]=hn.x,i[4]=Ii.x,i[8]=Ut.x,i[1]=hn.y,i[5]=Ii.y,i[9]=Ut.y,i[2]=hn.z,i[6]=Ii.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],E=n[11],P=n[15],C=i[0],R=i[4],O=i[8],M=i[12],b=i[1],z=i[5],X=i[9],ie=i[13],D=i[2],B=i[6],Y=i[10],$=i[14],j=i[3],J=i[7],w=i[11],A=i[15];return r[0]=a*C+o*b+c*D+l*j,r[4]=a*R+o*z+c*B+l*J,r[8]=a*O+o*X+c*Y+l*w,r[12]=a*M+o*ie+c*$+l*A,r[1]=u*C+h*b+d*D+p*j,r[5]=u*R+h*z+d*B+p*J,r[9]=u*O+h*X+d*Y+p*w,r[13]=u*M+h*ie+d*$+p*A,r[2]=g*C+_*b+m*D+f*j,r[6]=g*R+_*z+m*B+f*J,r[10]=g*O+_*X+m*Y+f*w,r[14]=g*M+_*ie+m*$+f*A,r[3]=y*C+v*b+E*D+P*j,r[7]=y*R+v*z+E*B+P*J,r[11]=y*O+v*X+E*Y+P*w,r[15]=y*M+v*ie+E*$+P*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*p-n*c*p)+_*(+t*c*p-t*l*d+r*a*d-i*a*p+i*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=h*m*l-_*d*l+_*c*p-o*m*p-h*c*f+o*d*f,v=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,E=u*_*l-g*h*l+g*o*p-a*_*p-u*o*f+a*h*f,P=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,C=t*y+n*v+i*E+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=y*R,e[1]=(_*d*r-h*m*r-_*i*p+n*m*p+h*i*f-n*d*f)*R,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*R,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*p-n*c*p)*R,e[4]=v*R,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*R,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*f-t*c*f)*R,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*p+t*c*p)*R,e[8]=E*R,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*R,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*f+t*o*f)*R,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*R,e[12]=P*R,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*R,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*R,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,y=c*l,v=c*u,E=c*h,P=n.x,C=n.y,R=n.z;return i[0]=(1-(_+f))*P,i[1]=(p+E)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(p-E)*C,i[5]=(1-(d+f))*C,i[6]=(m+y)*C,i[7]=0,i[8]=(g+v)*R,i[9]=(m-y)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=zn.set(i[0],i[1],i[2]).length();const a=zn.set(i[4],i[5],i[6]).length(),o=zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const l=1/r,u=1/a,h=1/o;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=h,Ht.elements[9]*=h,Ht.elements[10]*=h,t.setFromRotationMatrix(Ht),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=rn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===rn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ns)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=rn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*l,p=(n+i)*u;let g,_;if(o===rn)g=(a+r)*h,_=-2*h;else if(o===ns)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zn=new I,Ht=new ot,Qc=new I(0,0,0),el=new I(1,1,1),hn=new I,Ii=new I,Ut=new I,ha=new ot,ua=new ci;class $t{constructor(e=0,t=0,n=0,i=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ua.setFromEuler(this),this.setFromQuaternion(ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class hr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tl=0;const da=new I,Vn=new ci,en=new ot,Di=new I,pi=new I,nl=new I,il=new ci,fa=new I(1,0,0),pa=new I(0,1,0),ma=new I(0,0,1),sl={type:"added"},rl={type:"removed"};class _t extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tl++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new I,t=new $t,n=new ci,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new We}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(fa,e)}rotateY(e){return this.rotateOnAxis(pa,e)}rotateZ(e){return this.rotateOnAxis(ma,e)}translateOnAxis(e,t){return da.copy(e).applyQuaternion(this.quaternion),this.position.add(da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fa,e)}translateY(e){return this.translateOnAxis(pa,e)}translateZ(e){return this.translateOnAxis(ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Di.copy(e):Di.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(pi,Di,this.up):en.lookAt(Di,pi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix(en),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,nl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,il,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new I(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new I,tn=new I,Is=new I,nn=new I,Hn=new I,kn=new I,ga=new I,Ds=new I,Us=new I,Ns=new I;let Ui=!1;class Xt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kt.subVectors(e,t),i.cross(kt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kt.subVectors(i,t),tn.subVectors(n,t),Is.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(tn),c=kt.dot(Is),l=tn.dot(tn),u=tn.dot(Is),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,i,r,a,o,c){return Ui===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ui=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,nn.x),c.addScaledVector(a,nn.y),c.addScaledVector(o,nn.z),c)}static isFrontFacing(e,t,n,i){return kt.subVectors(n,t),tn.subVectors(e,t),kt.cross(tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),kt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ui===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ui=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Hn.subVectors(i,n),kn.subVectors(r,n),Ds.subVectors(e,n);const c=Hn.dot(Ds),l=kn.dot(Ds);if(c<=0&&l<=0)return t.copy(n);Us.subVectors(e,i);const u=Hn.dot(Us),h=kn.dot(Us);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Hn,a);Ns.subVectors(e,r);const p=Hn.dot(Ns),g=kn.dot(Ns);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(kn,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return ga.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(ga,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Hn,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function Fs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Xc(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fs(a,r,e+1/3),this.g=Fs(a,r,e),this.b=Fs(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=Eo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ze.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Rt(Mt.r*255,0,255))*65536+Math.round(Rt(Mt.g*255,0,255))*256+Math.round(Rt(Mt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,r=Mt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=gt){Ze.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Ni);const n=Ss(un.h,Ni.h,t),i=Ss(un.s,Ni.s,t),r=Ss(un.l,Ni.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Xe;Xe.NAMES=Eo;let al=0;class Un extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ei,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$s,this.blendDst=Zs,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$s&&(n.blendSrc=this.blendSrc),this.blendDst!==Zs&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yt extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new I,Fi=new Oe;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix3(e),this.setXY(t,Fi.x,Fi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}}class To extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bo extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ol=0;const Ot=new ot,Os=new _t,Wn=new I,Nt=new Si,mi=new Si,pt=new I;class St extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ol++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xo(e)?bo:To)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Os.lookAt(e),Os.updateMatrix(),this.applyMatrix4(Os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Nt.min,mi.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,mi.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(mi.min),Nt.expandByPoint(mi.max))}Nt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)pt.fromBufferAttribute(o,l),c&&(Wn.fromBufferAttribute(e,l),pt.add(Wn)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new I,u[b]=new I;const h=new I,d=new I,p=new I,g=new Oe,_=new Oe,m=new Oe,f=new I,y=new I;function v(b,z,X){h.fromArray(i,b*3),d.fromArray(i,z*3),p.fromArray(i,X*3),g.fromArray(a,b*2),_.fromArray(a,z*2),m.fromArray(a,X*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const ie=1/(_.x*m.y-m.x*_.y);isFinite(ie)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(ie),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(ie),l[b].add(f),l[z].add(f),l[X].add(f),u[b].add(y),u[z].add(y),u[X].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,z=E.length;b<z;++b){const X=E[b],ie=X.start,D=X.count;for(let B=ie,Y=ie+D;B<Y;B+=3)v(n[B+0],n[B+1],n[B+2])}const P=new I,C=new I,R=new I,O=new I;function M(b){R.fromArray(r,b*3),O.copy(R);const z=l[b];P.copy(z),P.sub(R.multiplyScalar(R.dot(z))).normalize(),C.crossVectors(O,z);const ie=C.dot(u[b])<0?-1:1;c[b*4]=P.x,c[b*4+1]=P.y,c[b*4+2]=P.z,c[b*4+3]=ie}for(let b=0,z=E.length;b<z;++b){const X=E[b],ie=X.start,D=X.count;for(let B=ie,Y=ie+D;B<Y;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new ot,Tn=new ls,Oi=new Ei,va=new I,Xn=new I,qn=new I,Yn=new I,Bs=new I,Bi=new I,Gi=new Oe,zi=new Oe,Vi=new Oe,xa=new I,Ma=new I,ya=new I,Hi=new I,ki=new I;class ge extends _t{constructor(e=new St,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Bi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Bs.fromBufferAttribute(h,e),a?Bi.addScaledVector(Bs,u):Bi.addScaledVector(Bs.sub(t),u))}t.add(Bi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(r),Tn.copy(e.ray).recast(e.near),!(Oi.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Oi,va)===null||Tn.origin.distanceToSquared(va)>(e.far-e.near)**2))&&(_a.copy(r).invert(),Tn.copy(e.ray).applyMatrix4(_a),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,P=v;E<P;E+=3){const C=o.getX(E),R=o.getX(E+1),O=o.getX(E+2);i=Wi(this,f,e,n,l,u,h,C,R,O),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);i=Wi(this,a,e,n,l,u,h,y,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,P=v;E<P;E+=3){const C=E,R=E+1,O=E+2;i=Wi(this,f,e,n,l,u,h,C,R,O),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,v=m+1,E=m+2;i=Wi(this,a,e,n,l,u,h,y,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function cl(s,e,t,n,i,r,a,o){let c;if(e.side===Lt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===_n,o),c===null)return null;ki.copy(o),ki.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ki);return l<t.near||l>t.far?null:{distance:l,point:ki.clone(),object:s}}function Wi(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Xn),s.getVertexPosition(c,qn),s.getVertexPosition(l,Yn);const u=cl(s,e,t,n,Xn,qn,Yn,Hi);if(u){i&&(Gi.fromBufferAttribute(i,o),zi.fromBufferAttribute(i,c),Vi.fromBufferAttribute(i,l),u.uv=Xt.getInterpolation(Hi,Xn,qn,Yn,Gi,zi,Vi,new Oe)),r&&(Gi.fromBufferAttribute(r,o),zi.fromBufferAttribute(r,c),Vi.fromBufferAttribute(r,l),u.uv1=Xt.getInterpolation(Hi,Xn,qn,Yn,Gi,zi,Vi,new Oe),u.uv2=u.uv1),a&&(xa.fromBufferAttribute(a,o),Ma.fromBufferAttribute(a,c),ya.fromBufferAttribute(a,l),u.normal=Xt.getInterpolation(Hi,Xn,qn,Yn,xa,Ma,ya,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new I,materialIndex:0};Xt.getNormal(Xn,qn,Yn,h.normal),u.face=h}return u}class qe extends St{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(_,m,f,y,v,E,P,C,R,O,M){const b=E/R,z=P/O,X=E/2,ie=P/2,D=C/2,B=R+1,Y=O+1;let $=0,j=0;const J=new I;for(let w=0;w<Y;w++){const A=w*z-ie;for(let k=0;k<B;k++){const N=k*b-X;J[_]=N*y,J[m]=A*v,J[f]=D,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[f]=C>0?1:-1,u.push(J.x,J.y,J.z),h.push(k/R),h.push(1-w/O),$+=1}}for(let w=0;w<O;w++)for(let A=0;A<R;A++){const k=d+A+B*w,N=d+A+B*(w+1),H=d+(A+1)+B*(w+1),K=d+(A+1)+B*w;c.push(k,N,K),c.push(N,H,K),j+=6}o.addGroup(p,j,M),p+=j,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(s){const e={};for(let t=0;t<s.length;t++){const n=ai(s[t]);for(const i in n)e[i]=n[i]}return e}function ll(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ao(s){return s.getRenderTarget()===null?s.outputColorSpace:Ze.workingColorSpace}const hl={clone:ai,merge:bt};var ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ul,this.fragmentShader=dl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=ll(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wo extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,Kn=1;class fl extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pt(jn,Kn,e,t);i.layers=this.layers,this.add(i);const r=new Pt(jn,Kn,e,t);r.layers=this.layers,this.add(r);const a=new Pt(jn,Kn,e,t);a.layers=this.layers,this.add(a);const o=new Pt(jn,Kn,e,t);o.layers=this.layers,this.add(o);const c=new Pt(jn,Kn,e,t);c.layers=this.layers,this.add(c);const l=new Pt(jn,Kn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Co extends It{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pl extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(vi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dn?gt:zt),this.texture=new Co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qe(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:pn});r.uniforms.tEquirect.value=t;const a=new ge(i,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Ct),new fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Gs=new I,ml=new I,gl=new We;class wn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gs.subVectors(n,t).cross(ml.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gl.getNormalMatrix(e),i=this.coplanarPoint(Gs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new Ei,Xi=new I;class ur{constructor(e=new wn,t=new wn,n=new wn,i=new wn,r=new wn,a=new wn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],v=i[14],E=i[15];if(n[0].setComponents(c-r,d-l,m-p,E-f).normalize(),n[1].setComponents(c+r,d+l,m+p,E+f).normalize(),n[2].setComponents(c+a,d+u,m+g,E+y).normalize(),n[3].setComponents(c-a,d-u,m-g,E-y).normalize(),n[4].setComponents(c-o,d-h,m-_,E-v).normalize(),t===rn)n[5].setComponents(c+o,d+h,m+_,E+v).normalize();else if(t===ns)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(e){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xi.x=i.normal.x>0?e.max.x:e.min.x,Xi.y=i.normal.y>0?e.max.y:e.min.y,Xi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ro(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _l(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,p=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),p.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class ni extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*d-a;for(let v=0;v<l;v++){const E=v*h-r;g.push(E,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const v=y+l*f,E=y+l*(f+1),P=y+1+l*(f+1),C=y+1+l*f;p.push(v,E,C),p.push(E,P,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var vl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ml=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,El=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Al=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ll=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Il=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ol=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ql=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kl=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$l=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ql=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ah=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_h=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ah=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ch=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ph=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ih=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$h=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,su=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,au=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,du=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _u=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Au=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ou=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:vl,alphahash_pars_fragment:xl,alphamap_fragment:Ml,alphamap_pars_fragment:yl,alphatest_fragment:Sl,alphatest_pars_fragment:El,aomap_fragment:Tl,aomap_pars_fragment:bl,batching_pars_vertex:Al,batching_vertex:wl,begin_vertex:Cl,beginnormal_vertex:Rl,bsdfs:Pl,iridescence_fragment:Ll,bumpmap_pars_fragment:Il,clipping_planes_fragment:Dl,clipping_planes_pars_fragment:Ul,clipping_planes_pars_vertex:Nl,clipping_planes_vertex:Fl,color_fragment:Ol,color_pars_fragment:Bl,color_pars_vertex:Gl,color_vertex:zl,common:Vl,cube_uv_reflection_fragment:Hl,defaultnormal_vertex:kl,displacementmap_pars_vertex:Wl,displacementmap_vertex:Xl,emissivemap_fragment:ql,emissivemap_pars_fragment:Yl,colorspace_fragment:jl,colorspace_pars_fragment:Kl,envmap_fragment:$l,envmap_common_pars_fragment:Zl,envmap_pars_fragment:Jl,envmap_pars_vertex:Ql,envmap_physical_pars_fragment:uh,envmap_vertex:eh,fog_vertex:th,fog_pars_vertex:nh,fog_fragment:ih,fog_pars_fragment:sh,gradientmap_pars_fragment:rh,lightmap_fragment:ah,lightmap_pars_fragment:oh,lights_lambert_fragment:ch,lights_lambert_pars_fragment:lh,lights_pars_begin:hh,lights_toon_fragment:dh,lights_toon_pars_fragment:fh,lights_phong_fragment:ph,lights_phong_pars_fragment:mh,lights_physical_fragment:gh,lights_physical_pars_fragment:_h,lights_fragment_begin:vh,lights_fragment_maps:xh,lights_fragment_end:Mh,logdepthbuf_fragment:yh,logdepthbuf_pars_fragment:Sh,logdepthbuf_pars_vertex:Eh,logdepthbuf_vertex:Th,map_fragment:bh,map_pars_fragment:Ah,map_particle_fragment:wh,map_particle_pars_fragment:Ch,metalnessmap_fragment:Rh,metalnessmap_pars_fragment:Ph,morphcolor_vertex:Lh,morphnormal_vertex:Ih,morphtarget_pars_vertex:Dh,morphtarget_vertex:Uh,normal_fragment_begin:Nh,normal_fragment_maps:Fh,normal_pars_fragment:Oh,normal_pars_vertex:Bh,normal_vertex:Gh,normalmap_pars_fragment:zh,clearcoat_normal_fragment_begin:Vh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:kh,iridescence_pars_fragment:Wh,opaque_fragment:Xh,packing:qh,premultiplied_alpha_fragment:Yh,project_vertex:jh,dithering_fragment:Kh,dithering_pars_fragment:$h,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:Jh,shadowmap_pars_fragment:Qh,shadowmap_pars_vertex:eu,shadowmap_vertex:tu,shadowmask_pars_fragment:nu,skinbase_vertex:iu,skinning_pars_vertex:su,skinning_vertex:ru,skinnormal_vertex:au,specularmap_fragment:ou,specularmap_pars_fragment:cu,tonemapping_fragment:lu,tonemapping_pars_fragment:hu,transmission_fragment:uu,transmission_pars_fragment:du,uv_pars_fragment:fu,uv_pars_vertex:pu,uv_vertex:mu,worldpos_vertex:gu,background_vert:_u,background_frag:vu,backgroundCube_vert:xu,backgroundCube_frag:Mu,cube_vert:yu,cube_frag:Su,depth_vert:Eu,depth_frag:Tu,distanceRGBA_vert:bu,distanceRGBA_frag:Au,equirect_vert:wu,equirect_frag:Cu,linedashed_vert:Ru,linedashed_frag:Pu,meshbasic_vert:Lu,meshbasic_frag:Iu,meshlambert_vert:Du,meshlambert_frag:Uu,meshmatcap_vert:Nu,meshmatcap_frag:Fu,meshnormal_vert:Ou,meshnormal_frag:Bu,meshphong_vert:Gu,meshphong_frag:zu,meshphysical_vert:Vu,meshphysical_frag:Hu,meshtoon_vert:ku,meshtoon_frag:Wu,points_vert:Xu,points_frag:qu,shadow_vert:Yu,shadow_frag:ju,sprite_vert:Ku,sprite_frag:$u},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Kt={basic:{uniforms:bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:bt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:bt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:bt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:bt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:bt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:bt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:bt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:bt([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Kt.physical={uniforms:bt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const qi={r:0,b:0,g:0};function Zu(s,e,t,n,i,r,a){const o=new Xe(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),y=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===os)?(u===void 0&&(u=new ge(new qe(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ai(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(v.colorSpace)!==nt,(h!==v||d!==v.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ge(new ni(2,2),new xn({name:"BackgroundMaterial",uniforms:ai(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(qi,Ao(s)),n.buffers.color.setClear(qi.r,qi.g,qi.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function Ju(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(D,B,Y,$,j){let J=!1;if(a){const w=_($,Y,B);l!==w&&(l=w,p(l.object)),J=f(D,$,Y,j),J&&y(D,$,Y,j)}else{const w=B.wireframe===!0;(l.geometry!==$.id||l.program!==Y.id||l.wireframe!==w)&&(l.geometry=$.id,l.program=Y.id,l.wireframe=w,J=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,O(D,B,Y,$),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,B,Y){const $=Y.wireframe===!0;let j=o[D.id];j===void 0&&(j={},o[D.id]=j);let J=j[B.id];J===void 0&&(J={},j[B.id]=J);let w=J[$];return w===void 0&&(w=m(d()),J[$]=w),w}function m(D){const B=[],Y=[],$=[];for(let j=0;j<i;j++)B[j]=0,Y[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,B,Y,$){const j=l.attributes,J=B.attributes;let w=0;const A=Y.getAttributes();for(const k in A)if(A[k].location>=0){const H=j[k];let K=J[k];if(K===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;w++}return l.attributesNum!==w||l.index!==$}function y(D,B,Y,$){const j={},J=B.attributes;let w=0;const A=Y.getAttributes();for(const k in A)if(A[k].location>=0){let H=J[k];H===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(H=D.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),j[k]=K,w++}l.attributes=j,l.attributesNum=w,l.index=$}function v(){const D=l.newAttributes;for(let B=0,Y=D.length;B<Y;B++)D[B]=0}function E(D){P(D,0)}function P(D,B){const Y=l.newAttributes,$=l.enabledAttributes,j=l.attributeDivisors;Y[D]=1,$[D]===0&&(s.enableVertexAttribArray(D),$[D]=1),j[D]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),j[D]=B)}function C(){const D=l.newAttributes,B=l.enabledAttributes;for(let Y=0,$=B.length;Y<$;Y++)B[Y]!==D[Y]&&(s.disableVertexAttribArray(Y),B[Y]=0)}function R(D,B,Y,$,j,J,w){w===!0?s.vertexAttribIPointer(D,B,Y,j,J):s.vertexAttribPointer(D,B,Y,$,j,J)}function O(D,B,Y,$){if(n.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=$.attributes,J=Y.getAttributes(),w=B.defaultAttributeValues;for(const A in J){const k=J[A];if(k.location>=0){let N=j[A];if(N===void 0&&(A==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),A==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),N!==void 0){const H=N.normalized,K=N.itemSize,re=t.get(N);if(re===void 0)continue;const Z=re.buffer,ce=re.type,me=re.bytesPerElement,Q=n.isWebGL2===!0&&(ce===s.INT||ce===s.UNSIGNED_INT||N.gpuType===co);if(N.isInterleavedBufferAttribute){const ee=N.data,U=ee.stride,De=N.offset;if(ee.isInstancedInterleavedBuffer){for(let se=0;se<k.locationSize;se++)P(k.location+se,ee.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<k.locationSize;se++)E(k.location+se);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let se=0;se<k.locationSize;se++)R(k.location+se,K/k.locationSize,ce,H,U*me,(De+K/k.locationSize*se)*me,Q)}else{if(N.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)P(k.location+ee,N.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ee=0;ee<k.locationSize;ee++)E(k.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let ee=0;ee<k.locationSize;ee++)R(k.location+ee,K/k.locationSize,ce,H,K*me,K/k.locationSize*ee*me,Q)}}else if(w!==void 0){const H=w[A];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(k.location,H);break;case 3:s.vertexAttrib3fv(k.location,H);break;case 4:s.vertexAttrib4fv(k.location,H);break;default:s.vertexAttrib1fv(k.location,H)}}}}C()}function M(){X();for(const D in o){const B=o[D];for(const Y in B){const $=B[Y];for(const j in $)g($[j].object),delete $[j];delete B[Y]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;const B=o[D.id];for(const Y in B){const $=B[Y];for(const j in $)g($[j].object),delete $[j];delete B[Y]}delete o[D.id]}function z(D){for(const B in o){const Y=o[B];if(Y[D.id]===void 0)continue;const $=Y[D.id];for(const j in $)g($[j].object),delete $[j];delete Y[D.id]}}function X(){ie(),u=!0,l!==c&&(l=c,p(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:X,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:E,disableUnusedAttributes:C}}function Qu(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function ed(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=a||e.has("OES_texture_float"),P=v&&E,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:C}}function td(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new wn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,v=y*4;let E=f.clippingState||null;c.value=E,E=u(g,d,v,p);for(let P=0;P!==v;++P)E[P]=t[P];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,E=p;v!==_;++v,E+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function nd(s){let e=new WeakMap;function t(a,o){return o===Js?a.mapping=ii:o===Qs&&(a.mapping=si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Js||o===Qs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new pl(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Po extends wo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zn=4,Sa=[.125,.215,.35,.446,.526,.582],Pn=20,zs=new Po,Ea=new Xe;let Vs=null,Hs=0,ks=0;const Cn=(1+Math.sqrt(5))/2,$n=1/Cn,Ta=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Cn,$n),new I(0,Cn,-$n),new I($n,0,Cn),new I(-$n,0,Cn),new I(Cn,$n,0),new I(-Cn,$n,0)];class ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Hs,ks),e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Mi,format:Gt,colorSpace:an,depthBuffer:!1},i=Aa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Aa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=id(r)),this._blurMaterial=sd(r,e,t)}return i}_compileMaterial(e){const t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,n,i){const o=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ea),u.toneMapping=mn,u.autoClear=!1;const p=new yt({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new ge(new qe,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ea),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;Yi(i,y*v,f>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wa());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Yi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ta[(i-1)%Ta.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ge(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Pn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Pn;m>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pn}`);const f=[];let y=0;for(let R=0;R<Pn;++R){const O=R/_,M=Math.exp(-O*O/2);f.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[i],P=3*E*(i>v-Zn?i-v+Zn:0),C=4*(this._cubeSize-E);Yi(t,P,C,3*E,2*E),c.setRenderTarget(t),c.render(h,zs)}}function id(s){const e=[],t=[],n=[];let i=s;const r=s-Zn+1+Sa.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Zn?c=Sa[a-s+Zn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,O=C>2?0:-1,M=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];y.set(M,_*g*C),v.set(d,m*g*C);const b=[C,C,C,C,C,C];E.set(b,f*g*C)}const P=new St;P.setAttribute("position",new Yt(y,_)),P.setAttribute("uv",new Yt(v,m)),P.setAttribute("faceIndex",new Yt(E,f)),e.push(P),i>Zn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Aa(s,e,t){const n=new vn(s,e,t);return n.texture.mapping=os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function sd(s,e,t){const n=new Float32Array(Pn),i=new I(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function wa(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ca(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function dr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rd(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Js||c===Qs,u=c===ii||c===si;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new ba(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ba(s));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ad(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function od(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,E=y.length;v<E;v+=3){const P=y[v+0],C=y[v+1],R=y[v+2];d.push(P,C,C,R,R,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const P=v+0,C=v+1,R=v+2;d.push(P,C,C,R,R,P)}}else return;const m=new(xo(d)?bo:To)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function cd(s,e,t,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){s.drawElements(r,g,o,p*c),t.update(g,r,1)}function h(p,g,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*c,_),t.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function ld(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hd(s,e){return s[0]-e[0]}function ud(s,e){return Math.abs(e[1])-Math.abs(s[1])}function dd(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new it,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let B=function(){ie.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),P===!0&&(M=3);let b=u.attributes.position.count*M,z=1;b>e.maxTextureSize&&(z=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const X=new Float32Array(b*z*4*_),ie=new So(X,b,z,_);ie.type=fn,ie.needsUpdate=!0;const D=M*4;for(let Y=0;Y<_;Y++){const $=C[Y],j=R[Y],J=O[Y],w=b*z*4*Y;for(let A=0;A<$.count;A++){const k=A*D;v===!0&&(a.fromBufferAttribute($,A),X[w+k+0]=a.x,X[w+k+1]=a.y,X[w+k+2]=a.z,X[w+k+3]=0),E===!0&&(a.fromBufferAttribute(j,A),X[w+k+4]=a.x,X[w+k+5]=a.y,X[w+k+6]=a.z,X[w+k+7]=0),P===!0&&(a.fromBufferAttribute(J,A),X[w+k+8]=a.x,X[w+k+9]=a.y,X[w+k+10]=a.z,X[w+k+11]=J.itemSize===4?a.w:1)}}m={count:_,texture:ie,size:new Oe(b,z)},r.set(u,m),u.addEventListener("dispose",B)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<g;E++){const P=_[E];P[0]=E,P[1]=d[E]}_.sort(ud);for(let E=0;E<8;E++)E<g&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(hd);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let y=0;for(let E=0;E<8;E++){const P=o[E],C=P[0],R=P[1];C!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+E)!==m[C]&&u.setAttribute("morphTarget"+E,m[C]),f&&u.getAttribute("morphNormal"+E)!==f[C]&&u.setAttribute("morphNormal"+E,f[C]),i[E]=R,y+=R):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),f&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),i[E]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function fd(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Lo extends It{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:In,u!==In&&u!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===In&&(n=dn),n===void 0&&u===ri&&(n=Ln),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Io=new It,Do=new Lo(1,1);Do.compareFunction=vo;const Uo=new So,No=new Zc,Fo=new Co,Ra=[],Pa=[],La=new Float32Array(16),Ia=new Float32Array(9),Da=new Float32Array(4);function li(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ra[i];if(r===void 0&&(r=new Float32Array(i),Ra[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function hs(s,e){let t=Pa[e];t===void 0&&(t=new Int32Array(e),Pa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function pd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function md(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),ut(t,e)}}function gd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),ut(t,e)}}function _d(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),ut(t,e)}}function vd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Da.set(n),s.uniformMatrix2fv(this.addr,!1,Da),ut(t,n)}}function xd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Ia.set(n),s.uniformMatrix3fv(this.addr,!1,Ia),ut(t,n)}}function Md(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;La.set(n),s.uniformMatrix4fv(this.addr,!1,La),ut(t,n)}}function yd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),ut(t,e)}}function Ed(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),ut(t,e)}}function Td(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),ut(t,e)}}function bd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ad(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),ut(t,e)}}function wd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),ut(t,e)}}function Cd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),ut(t,e)}}function Rd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Do:Io;t.setTexture2D(e||r,i)}function Pd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||No,i)}function Ld(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fo,i)}function Id(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uo,i)}function Dd(s){switch(s){case 5126:return pd;case 35664:return md;case 35665:return gd;case 35666:return _d;case 35674:return vd;case 35675:return xd;case 35676:return Md;case 5124:case 35670:return yd;case 35667:case 35671:return Sd;case 35668:case 35672:return Ed;case 35669:case 35673:return Td;case 5125:return bd;case 36294:return Ad;case 36295:return wd;case 36296:return Cd;case 35678:case 36198:case 36298:case 36306:case 35682:return Rd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Id}}function Ud(s,e){s.uniform1fv(this.addr,e)}function Nd(s,e){const t=li(e,this.size,2);s.uniform2fv(this.addr,t)}function Fd(s,e){const t=li(e,this.size,3);s.uniform3fv(this.addr,t)}function Od(s,e){const t=li(e,this.size,4);s.uniform4fv(this.addr,t)}function Bd(s,e){const t=li(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Gd(s,e){const t=li(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zd(s,e){const t=li(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Vd(s,e){s.uniform1iv(this.addr,e)}function Hd(s,e){s.uniform2iv(this.addr,e)}function kd(s,e){s.uniform3iv(this.addr,e)}function Wd(s,e){s.uniform4iv(this.addr,e)}function Xd(s,e){s.uniform1uiv(this.addr,e)}function qd(s,e){s.uniform2uiv(this.addr,e)}function Yd(s,e){s.uniform3uiv(this.addr,e)}function jd(s,e){s.uniform4uiv(this.addr,e)}function Kd(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Io,r[a])}function $d(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||No,r[a])}function Zd(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Fo,r[a])}function Jd(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Uo,r[a])}function Qd(s){switch(s){case 5126:return Ud;case 35664:return Nd;case 35665:return Fd;case 35666:return Od;case 35674:return Bd;case 35675:return Gd;case 35676:return zd;case 5124:case 35670:return Vd;case 35667:case 35671:return Hd;case 35668:case 35672:return kd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return qd;case 36295:return Yd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Kd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}}class ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dd(t.type)}}class tf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qd(t.type)}}class nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function Ua(s,e){s.seq.push(e),s.map[e.id]=e}function sf(s,e,t){const n=s.name,i=n.length;for(Ws.lastIndex=0;;){const r=Ws.exec(n),a=Ws.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ua(t,l===void 0?new ef(o,s,e):new tf(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new nf(o),Ua(t,h)),t=h}}}class Zi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);sf(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Na(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const rf=37297;let af=0;function of(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cf(s){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(s);let n;switch(e===t?n="":e===ts&&t===es?n="LinearDisplayP3ToLinearSRGB":e===es&&t===ts&&(n="LinearSRGBToLinearDisplayP3"),s){case an:case cs:return[n,"LinearTransferOETF"];case gt:case lr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Fa(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+of(s.getShaderSource(e),a)}else return i}function lf(s,e){const t=cf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hf(s,e){let t;switch(e){case Mc:t="Linear";break;case yc:t="Reinhard";break;case Sc:t="OptimizedCineon";break;case Ec:t="ACESFilmic";break;case bc:t="AgX";break;case Tc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jn).join(`
`)}function df(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Jn).join(`
`)}function ff(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pf(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Jn(s){return s!==""}function Oa(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ba(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function sr(s){return s.replace(mf,_f)}const gf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _f(s,e){let t=Ge[e];if(t===void 0){const n=gf.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sr(t)}const vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ga(s){return s.replace(vf,xf)}function xf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function za(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===so?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function yf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ii:case si:e="ENVMAP_TYPE_CUBE";break;case os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function Ef(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ao:e="ENVMAP_BLENDING_MULTIPLY";break;case vc:e="ENVMAP_BLENDING_MIX";break;case xc:e="ENVMAP_BLENDING_ADD";break}return e}function Tf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bf(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Mf(t),l=yf(t),u=Sf(t),h=Ef(t),d=Tf(t),p=t.isWebGL2?"":uf(t),g=df(t),_=ff(r),m=i.createProgram();let f,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Jn).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Jn).join(`
`),y.length>0&&(y+=`
`)):(f=[za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),y=[p,za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==mn?hf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,lf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jn).join(`
`)),a=sr(a),a=Oa(a,t),a=Ba(a,t),o=sr(o),o=Oa(o,t),o=Ba(o,t),a=Ga(a),o=Ga(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=v+f+a,P=v+y+o,C=Na(i,i.VERTEX_SHADER,E),R=Na(i,i.FRAGMENT_SHADER,P);i.attachShader(m,C),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(X){if(s.debug.checkShaderErrors){const ie=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(C).trim(),B=i.getShaderInfoLog(R).trim();let Y=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,R);else{const j=Fa(i,C,"vertex"),J=Fa(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+j+`
`+J)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||B==="")&&($=!1);$&&(X.diagnostics={runnable:Y,programLog:ie,vertexShader:{log:D,prefix:f},fragmentShader:{log:B,prefix:y}})}i.deleteShader(C),i.deleteShader(R),M=new Zi(i,m),b=pf(i,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(m,rf)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=af++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=R,this}let Af=0;class wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cf(e),t.set(e,n)),n}}class Cf{constructor(e){this.id=Af++,this.code=e,this.usedTimes=0}}function Rf(s,e,t,n,i,r,a){const o=new hr,c=new wf,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,b,z,X,ie){const D=X.fog,B=ie.geometry,Y=M.isMeshStandardMaterial?X.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),j=$&&$.mapping===os?$.image.height:null,J=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const w=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,A=w!==void 0?w.length:0;let k=0;B.morphAttributes.position!==void 0&&(k=1),B.morphAttributes.normal!==void 0&&(k=2),B.morphAttributes.color!==void 0&&(k=3);let N,H,K,re;if(J){const Et=Kt[J];N=Et.vertexShader,H=Et.fragmentShader}else N=M.vertexShader,H=M.fragmentShader,c.update(M),K=c.getVertexShaderID(M),re=c.getFragmentShaderID(M);const Z=s.getRenderTarget(),ce=ie.isInstancedMesh===!0,me=ie.isBatchedMesh===!0,Q=!!M.map,ee=!!M.matcap,U=!!$,De=!!M.aoMap,se=!!M.lightMap,ve=!!M.bumpMap,de=!!M.normalMap,we=!!M.displacementMap,Se=!!M.emissiveMap,T=!!M.metalnessMap,x=!!M.roughnessMap,G=M.anisotropy>0,ae=M.clearcoat>0,ne=M.iridescence>0,oe=M.sheen>0,ye=M.transmission>0,ue=G&&!!M.anisotropyMap,xe=ae&&!!M.clearcoatMap,be=ae&&!!M.clearcoatNormalMap,Ue=ae&&!!M.clearcoatRoughnessMap,te=ne&&!!M.iridescenceMap,Ye=ne&&!!M.iridescenceThicknessMap,ze=oe&&!!M.sheenColorMap,Le=oe&&!!M.sheenRoughnessMap,Te=!!M.specularMap,Me=!!M.specularColorMap,Be=!!M.specularIntensityMap,Ke=ye&&!!M.transmissionMap,rt=ye&&!!M.thicknessMap,He=!!M.gradientMap,le=!!M.alphaMap,L=M.alphaTest>0,fe=!!M.alphaHash,pe=!!M.extensions,Pe=!!B.attributes.uv1,Ae=!!B.attributes.uv2,Je=!!B.attributes.uv3;let Qe=mn;return M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Qe=s.toneMapping),{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:N,fragmentShader:H,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:me,instancing:ce,instancingColor:ce&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:an,map:Q,matcap:ee,envMap:U,envMapMode:U&&$.mapping,envMapCubeUVHeight:j,aoMap:De,lightMap:se,bumpMap:ve,normalMap:de,displacementMap:d&&we,emissiveMap:Se,normalMapObjectSpace:de&&M.normalMapType===Oc,normalMapTangentSpace:de&&M.normalMapType===_o,metalnessMap:T,roughnessMap:x,anisotropy:G,anisotropyMap:ue,clearcoat:ae,clearcoatMap:xe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ue,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Ye,sheen:oe,sheenColorMap:ze,sheenRoughnessMap:Le,specularMap:Te,specularColorMap:Me,specularIntensityMap:Be,transmission:ye,transmissionMap:Ke,thicknessMap:rt,gradientMap:He,opaque:M.transparent===!1&&M.blending===ei,alphaMap:le,alphaTest:L,alphaHash:fe,combine:M.combine,mapUv:Q&&_(M.map.channel),aoMapUv:De&&_(M.aoMap.channel),lightMapUv:se&&_(M.lightMap.channel),bumpMapUv:ve&&_(M.bumpMap.channel),normalMapUv:de&&_(M.normalMap.channel),displacementMapUv:we&&_(M.displacementMap.channel),emissiveMapUv:Se&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:xe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(M.sheenRoughnessMap.channel),specularMapUv:Te&&_(M.specularMap.channel),specularColorMapUv:Me&&_(M.specularColorMap.channel),specularIntensityMapUv:Be&&_(M.specularIntensityMap.channel),transmissionMapUv:Ke&&_(M.transmissionMap.channel),thicknessMapUv:rt&&_(M.thicknessMap.channel),alphaMapUv:le&&_(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ae,vertexUv3s:Je,pointsUvs:ie.isPoints===!0&&!!B.attributes.uv&&(Q||le),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:k,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Q&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bt,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)b.push(z),b.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){const b=g[M.type];let z;if(b){const X=Kt[b];z=hl.clone(X.uniforms)}else z=M.uniforms;return z}function P(M,b){let z;for(let X=0,ie=l.length;X<ie;X++){const D=l[X];if(D.cacheKey===b){z=D,++z.usedTimes;break}}return z===void 0&&(z=new bf(s,b,M,r),l.push(z)),z}function C(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:P,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:O}}function Pf(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Lf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Va(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ha(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Lf),n.length>1&&n.sort(d||Va),i.length>1&&i.sort(d||Va)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function If(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ha,s.set(n,[a])):i>=r.length?(a=new Ha,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Df(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Uf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Nf=0;function Ff(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Of(s,e){const t=new Df,n=Uf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,a=new ot,o=new ot;function c(u,h){let d=0,p=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,m=0,f=0,y=0,v=0,E=0,P=0,C=0,R=0,O=0,M=0;u.sort(Ff);const b=h===!0?Math.PI:1;for(let X=0,ie=u.length;X<ie;X++){const D=u[X],B=D.color,Y=D.intensity,$=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*Y*b,p+=B.g*Y*b,g+=B.b*Y*b;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],Y);M++}else if(D.isDirectionalLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const w=D.shadow,A=n.get(D);A.shadowBias=w.bias,A.shadowNormalBias=w.normalBias,A.shadowRadius=w.radius,A.shadowMapSize=w.mapSize,i.directionalShadow[_]=A,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=D.shadow.matrix,E++}i.directional[_]=J,_++}else if(D.isSpotLight){const J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(B).multiplyScalar(Y*b),J.distance=$,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[f]=J;const w=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,w.updateMatrices(D),D.castShadow&&O++),i.spotLightMatrix[f]=w.matrix,D.castShadow){const A=n.get(D);A.shadowBias=w.bias,A.shadowNormalBias=w.normalBias,A.shadowRadius=w.radius,A.shadowMapSize=w.mapSize,i.spotShadow[f]=A,i.spotShadowMap[f]=j,C++}f++}else if(D.isRectAreaLight){const J=t.get(D);J.color.copy(B).multiplyScalar(Y),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=J,y++}else if(D.isPointLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*b),J.distance=D.distance,J.decay=D.decay,D.castShadow){const w=D.shadow,A=n.get(D);A.shadowBias=w.bias,A.shadowNormalBias=w.normalBias,A.shadowRadius=w.radius,A.shadowMapSize=w.mapSize,A.shadowCameraNear=w.camera.near,A.shadowCameraFar=w.camera.far,i.pointShadow[m]=A,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=D.shadow.matrix,P++}i.point[m]=J,m++}else if(D.isHemisphereLight){const J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(Y*b),J.groundColor.copy(D.groundColor).multiplyScalar(Y*b),i.hemi[v]=J,v++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==y||z.hemiLength!==v||z.numDirectionalShadows!==E||z.numPointShadows!==P||z.numSpotShadows!==C||z.numSpotMaps!==R||z.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=C+R-O,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,z.directionalLength=_,z.pointLength=m,z.spotLength=f,z.rectAreaLength=y,z.hemiLength=v,z.numDirectionalShadows=E,z.numPointShadows=P,z.numSpotShadows=C,z.numSpotMaps=R,z.numLightProbes=M,i.version=Nf++)}function l(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const P=i.directional[d];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(E.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const P=i.point[p];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function ka(s,e){const t=new Of(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Bf(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new ka(s,e),t.set(r,[c])):a>=o.length?(c=new ka(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Gf extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zf extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kf(s,e,t){let n=new ur;const i=new Oe,r=new Oe,a=new it,o=new Gf({depthPacking:Fc}),c=new zf,l={},u=t.maxTextureSize,h={[_n]:Lt,[Lt]:_n,[Bt]:Bt},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Vf,fragmentShader:Hf}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let f=this.type;this.render=function(C,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),X=s.state;X.setBlending(pn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ie=f!==sn&&this.type===sn,D=f===sn&&this.type!==sn;for(let B=0,Y=C.length;B<Y;B++){const $=C[B],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const J=j.getFrameExtents();if(i.multiply(J),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,j.mapSize.y=r.y)),j.map===null||ie===!0||D===!0){const A=this.type!==sn?{minFilter:At,magFilter:At}:{};j.map!==null&&j.map.dispose(),j.map=new vn(i.x,i.y,A),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const w=j.getViewportCount();for(let A=0;A<w;A++){const k=j.getViewport(A);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),X.viewport(a),j.updateMatrices($,A),n=j.getFrustum(),E(R,O,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===sn&&y(j,O),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,z)};function y(C,R){const O=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,O,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,O,p,_,null)}function v(C,R,O,M){let b=null;const z=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)b=z;else if(b=O.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=b.uuid,ie=R.uuid;let D=l[X];D===void 0&&(D={},l[X]=D);let B=D[ie];B===void 0&&(B=b.clone(),D[ie]=B,R.addEventListener("dispose",P)),b=B}if(b.visible=R.visible,b.wireframe=R.wireframe,M===sn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=s.properties.get(b);X.light=O}return b}function E(C,R,O,M,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===sn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const ie=e.update(C),D=C.material;if(Array.isArray(D)){const B=ie.groups;for(let Y=0,$=B.length;Y<$;Y++){const j=B[Y],J=D[j.materialIndex];if(J&&J.visible){const w=v(C,J,M,b);C.onBeforeShadow(s,C,R,O,ie,w,j),s.renderBufferDirect(O,null,ie,w,C,j),C.onAfterShadow(s,C,R,O,ie,w,j)}}}else if(D.visible){const B=v(C,D,M,b);C.onBeforeShadow(s,C,R,O,ie,B,null),s.renderBufferDirect(O,null,ie,B,C,null),C.onAfterShadow(s,C,R,O,ie,B,null)}}const X=C.children;for(let ie=0,D=X.length;ie<D;ie++)E(X[ie],R,O,M,b)}function P(C){C.target.removeEventListener("dispose",P);for(const O in l){const M=l[O],b=C.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Wf(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const fe=new it;let pe=null;const Pe=new it(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!L&&(s.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,Je,Qe,dt,Et){Et===!0&&(Ae*=dt,Je*=dt,Qe*=dt),fe.set(Ae,Je,Qe,dt),Pe.equals(fe)===!1&&(s.clearColor(Ae,Je,Qe,dt),Pe.copy(fe))},reset:function(){L=!1,pe=null,Pe.set(-1,0,0,0)}}}function r(){let L=!1,fe=null,pe=null,Pe=null;return{setTest:function(Ae){Ae?me(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(Ae){fe!==Ae&&!L&&(s.depthMask(Ae),fe=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case uc:s.depthFunc(s.NEVER);break;case dc:s.depthFunc(s.ALWAYS);break;case fc:s.depthFunc(s.LESS);break;case Ji:s.depthFunc(s.LEQUAL);break;case pc:s.depthFunc(s.EQUAL);break;case mc:s.depthFunc(s.GEQUAL);break;case gc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Pe!==Ae&&(s.clearDepth(Ae),Pe=Ae)},reset:function(){L=!1,fe=null,pe=null,Pe=null}}}function a(){let L=!1,fe=null,pe=null,Pe=null,Ae=null,Je=null,Qe=null,dt=null,Et=null;return{setTest:function(et){L||(et?me(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(et){fe!==et&&!L&&(s.stencilMask(et),fe=et)},setFunc:function(et,Tt,jt){(pe!==et||Pe!==Tt||Ae!==jt)&&(s.stencilFunc(et,Tt,jt),pe=et,Pe=Tt,Ae=jt)},setOp:function(et,Tt,jt){(Je!==et||Qe!==Tt||dt!==jt)&&(s.stencilOp(et,Tt,jt),Je=et,Qe=Tt,dt=jt)},setLocked:function(et){L=et},setClear:function(et){Et!==et&&(s.clearStencil(et),Et=et)},reset:function(){L=!1,fe=null,pe=null,Pe=null,Ae=null,Je=null,Qe=null,dt=null,Et=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,E=null,P=null,C=null,R=null,O=null,M=new Xe(0,0,0),b=0,z=!1,X=null,ie=null,D=null,B=null,Y=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const w=s.getParameter(s.VERSION);w.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(w)[1]),j=J>=1):w.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),j=J>=2);let A=null,k={};const N=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),K=new it().fromArray(N),re=new it().fromArray(H);function Z(L,fe,pe,Pe){const Ae=new Uint8Array(4),Je=s.createTexture();s.bindTexture(L,Je),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<pe;Qe++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(fe,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(fe+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Je}const ce={};ce[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),me(s.DEPTH_TEST),c.setFunc(Ji),Se(!1),T(br),me(s.CULL_FACE),de(pn);function me(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Q(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function ee(L,fe){return p[L]!==fe?(s.bindFramebuffer(L,fe),p[L]=fe,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=fe),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=fe)),!0):!1}function U(L,fe){let pe=_,Pe=!1;if(L)if(pe=g.get(fe),pe===void 0&&(pe=[],g.set(fe,pe)),L.isWebGLMultipleRenderTargets){const Ae=L.texture;if(pe.length!==Ae.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Je=0,Qe=Ae.length;Je<Qe;Je++)pe[Je]=s.COLOR_ATTACHMENT0+Je;pe.length=Ae.length,Pe=!0}}else pe[0]!==s.COLOR_ATTACHMENT0&&(pe[0]=s.COLOR_ATTACHMENT0,Pe=!0);else pe[0]!==s.BACK&&(pe[0]=s.BACK,Pe=!0);Pe&&(t.isWebGL2?s.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function De(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const se={[Rn]:s.FUNC_ADD,[$o]:s.FUNC_SUBTRACT,[Zo]:s.FUNC_REVERSE_SUBTRACT};if(n)se[Cr]=s.MIN,se[Rr]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(se[Cr]=L.MIN_EXT,se[Rr]=L.MAX_EXT)}const ve={[Jo]:s.ZERO,[Qo]:s.ONE,[ec]:s.SRC_COLOR,[$s]:s.SRC_ALPHA,[ac]:s.SRC_ALPHA_SATURATE,[sc]:s.DST_COLOR,[nc]:s.DST_ALPHA,[tc]:s.ONE_MINUS_SRC_COLOR,[Zs]:s.ONE_MINUS_SRC_ALPHA,[rc]:s.ONE_MINUS_DST_COLOR,[ic]:s.ONE_MINUS_DST_ALPHA,[oc]:s.CONSTANT_COLOR,[cc]:s.ONE_MINUS_CONSTANT_COLOR,[lc]:s.CONSTANT_ALPHA,[hc]:s.ONE_MINUS_CONSTANT_ALPHA};function de(L,fe,pe,Pe,Ae,Je,Qe,dt,Et,et){if(L===pn){f===!0&&(Q(s.BLEND),f=!1);return}if(f===!1&&(me(s.BLEND),f=!0),L!==Ko){if(L!==y||et!==z){if((v!==Rn||C!==Rn)&&(s.blendEquation(s.FUNC_ADD),v=Rn,C=Rn),et)switch(L){case ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _i:s.blendFunc(s.ONE,s.ONE);break;case Ar:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _i:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ar:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,P=null,R=null,O=null,M.set(0,0,0),b=0,y=L,z=et}return}Ae=Ae||fe,Je=Je||pe,Qe=Qe||Pe,(fe!==v||Ae!==C)&&(s.blendEquationSeparate(se[fe],se[Ae]),v=fe,C=Ae),(pe!==E||Pe!==P||Je!==R||Qe!==O)&&(s.blendFuncSeparate(ve[pe],ve[Pe],ve[Je],ve[Qe]),E=pe,P=Pe,R=Je,O=Qe),(dt.equals(M)===!1||Et!==b)&&(s.blendColor(dt.r,dt.g,dt.b,Et),M.copy(dt),b=Et),y=L,z=!1}function we(L,fe){L.side===Bt?Q(s.CULL_FACE):me(s.CULL_FACE);let pe=L.side===Lt;fe&&(pe=!pe),Se(pe),L.blending===ei&&L.transparent===!1?de(pn):de(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const Pe=L.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(L){X!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),X=L)}function T(L){L!==Yo?(me(s.CULL_FACE),L!==ie&&(L===br?s.cullFace(s.BACK):L===jo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),ie=L}function x(L){L!==D&&(j&&s.lineWidth(L),D=L)}function G(L,fe,pe){L?(me(s.POLYGON_OFFSET_FILL),(B!==fe||Y!==pe)&&(s.polygonOffset(fe,pe),B=fe,Y=pe)):Q(s.POLYGON_OFFSET_FILL)}function ae(L){L?me(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function ne(L){L===void 0&&(L=s.TEXTURE0+$-1),A!==L&&(s.activeTexture(L),A=L)}function oe(L,fe,pe){pe===void 0&&(A===null?pe=s.TEXTURE0+$-1:pe=A);let Pe=k[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},k[pe]=Pe),(Pe.type!==L||Pe.texture!==fe)&&(A!==pe&&(s.activeTexture(pe),A=pe),s.bindTexture(L,fe||ce[L]),Pe.type=L,Pe.texture=fe)}function ye(){const L=k[A];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(L){K.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function Ke(L){re.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function rt(L,fe){let pe=h.get(fe);pe===void 0&&(pe=new WeakMap,h.set(fe,pe));let Pe=pe.get(L);Pe===void 0&&(Pe=s.getUniformBlockIndex(fe,L.name),pe.set(L,Pe))}function He(L,fe){const Pe=h.get(fe).get(L);u.get(fe)!==Pe&&(s.uniformBlockBinding(fe,Pe,L.__bindingPointIndex),u.set(fe,Pe))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},A=null,k={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,E=null,P=null,C=null,R=null,O=null,M=new Xe(0,0,0),b=0,z=!1,X=null,ie=null,D=null,B=null,Y=null,K.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:me,disable:Q,bindFramebuffer:ee,drawBuffers:U,useProgram:De,setBlending:de,setMaterial:we,setFlipSided:Se,setCullFace:T,setLineWidth:x,setPolygonOffset:G,setScissorTest:ae,activeTexture:ne,bindTexture:oe,unbindTexture:ye,compressedTexImage2D:ue,compressedTexImage3D:xe,texImage2D:Te,texImage3D:Me,updateUBOMapping:rt,uniformBlockBinding:He,texStorage2D:ze,texStorage3D:Le,texSubImage2D:be,texSubImage3D:Ue,compressedTexSubImage2D:te,compressedTexSubImage3D:Ye,scissor:Be,viewport:Ke,reset:le}}function Xf(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):ss("canvas")}function _(T,x,G,ae){let ne=1;if((T.width>ae||T.height>ae)&&(ne=ae/Math.max(T.width,T.height)),ne<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const oe=x?ir:Math.floor,ye=oe(ne*T.width),ue=oe(ne*T.height);h===void 0&&(h=g(ye,ue));const xe=G?g(ye,ue):h;return xe.width=ye,xe.height=ue,xe.getContext("2d").drawImage(T,0,0,ye,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+ue+")."),xe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return ra(T.width)&&ra(T.height)}function f(T){return o?!1:T.wrapS!==qt||T.wrapT!==qt||T.minFilter!==At&&T.minFilter!==Ct}function y(T,x){return T.generateMipmaps&&x&&T.minFilter!==At&&T.minFilter!==Ct}function v(T){s.generateMipmap(T)}function E(T,x,G,ae,ne=!1){if(o===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let oe=x;if(x===s.RED&&(G===s.FLOAT&&(oe=s.R32F),G===s.HALF_FLOAT&&(oe=s.R16F),G===s.UNSIGNED_BYTE&&(oe=s.R8)),x===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(oe=s.R8UI),G===s.UNSIGNED_SHORT&&(oe=s.R16UI),G===s.UNSIGNED_INT&&(oe=s.R32UI),G===s.BYTE&&(oe=s.R8I),G===s.SHORT&&(oe=s.R16I),G===s.INT&&(oe=s.R32I)),x===s.RG&&(G===s.FLOAT&&(oe=s.RG32F),G===s.HALF_FLOAT&&(oe=s.RG16F),G===s.UNSIGNED_BYTE&&(oe=s.RG8)),x===s.RGBA){const ye=ne?Qi:Ze.getTransfer(ae);G===s.FLOAT&&(oe=s.RGBA32F),G===s.HALF_FLOAT&&(oe=s.RGBA16F),G===s.UNSIGNED_BYTE&&(oe=ye===nt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function P(T,x,G){return y(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==At&&T.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){return T===At||T===Pr||T===ms?s.NEAREST:s.LINEAR}function R(T){const x=T.target;x.removeEventListener("dispose",R),M(x),x.isVideoTexture&&u.delete(x)}function O(T){const x=T.target;x.removeEventListener("dispose",O),z(x)}function M(T){const x=n.get(T);if(x.__webglInit===void 0)return;const G=T.source,ae=d.get(G);if(ae){const ne=ae[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(T),Object.keys(ae).length===0&&d.delete(G)}n.remove(T)}function b(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const G=T.source,ae=d.get(G);delete ae[x.__cacheKey],a.memory.textures--}function z(T){const x=T.texture,G=n.get(T),ae=n.get(x);if(ae.__webglTexture!==void 0&&(s.deleteTexture(ae.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let oe=0;oe<G.__webglFramebuffer[ne].length;oe++)s.deleteFramebuffer(G.__webglFramebuffer[ne][oe]);else s.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)s.deleteFramebuffer(G.__webglFramebuffer[ne]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,oe=x.length;ne<oe;ne++){const ye=n.get(x[ne]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(x[ne])}n.remove(x),n.remove(T)}let X=0;function ie(){X=0}function D(){const T=X;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),X+=1,T}function B(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const G=n.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const ae=T.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,T,x);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+x)}function $(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){K(G,T,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+x)}function j(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){K(G,T,x);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+x)}function J(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){re(G,T,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+x)}const w={[er]:s.REPEAT,[qt]:s.CLAMP_TO_EDGE,[tr]:s.MIRRORED_REPEAT},A={[At]:s.NEAREST,[Pr]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[Ac]:s.LINEAR_MIPMAP_NEAREST,[xi]:s.LINEAR_MIPMAP_LINEAR},k={[Bc]:s.NEVER,[Wc]:s.ALWAYS,[Gc]:s.LESS,[vo]:s.LEQUAL,[zc]:s.EQUAL,[kc]:s.GEQUAL,[Vc]:s.GREATER,[Hc]:s.NOTEQUAL};function N(T,x,G){if(G?(s.texParameteri(T,s.TEXTURE_WRAP_S,w[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,w[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,w[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,A[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,A[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==qt||x.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,C(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==At&&x.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,k[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===At||x.minFilter!==ms&&x.minFilter!==xi||x.type===fn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Mi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(T,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function H(T,x){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const ae=x.source;let ne=d.get(ae);ne===void 0&&(ne={},d.set(ae,ne));const oe=B(x);if(oe!==T.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[oe].usedTimes++;const ye=ne[T.__cacheKey];ye!==void 0&&(ne[T.__cacheKey].usedTimes--,ye.usedTimes===0&&b(x)),T.__cacheKey=oe,T.__webglTexture=ne[oe].texture}return G}function K(T,x,G){let ae=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ae=s.TEXTURE_3D);const ne=H(T,x),oe=x.source;t.bindTexture(ae,T.__webglTexture,s.TEXTURE0+G);const ye=n.get(oe);if(oe.version!==ye.__version||ne===!0){t.activeTexture(s.TEXTURE0+G);const ue=Ze.getPrimaries(Ze.workingColorSpace),xe=x.colorSpace===zt?null:Ze.getPrimaries(x.colorSpace),be=x.colorSpace===zt||ue===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ue=f(x)&&m(x.image)===!1;let te=_(x.image,Ue,!1,i.maxTextureSize);te=Se(x,te);const Ye=m(te)||o,ze=r.convert(x.format,x.colorSpace);let Le=r.convert(x.type),Te=E(x.internalFormat,ze,Le,x.colorSpace,x.isVideoTexture);N(ae,x,Ye);let Me;const Be=x.mipmaps,Ke=o&&x.isVideoTexture!==!0&&Te!==mo,rt=ye.__version===void 0||ne===!0,He=P(x,te,Ye);if(x.isDepthTexture)Te=s.DEPTH_COMPONENT,o?x.type===fn?Te=s.DEPTH_COMPONENT32F:x.type===dn?Te=s.DEPTH_COMPONENT24:x.type===Ln?Te=s.DEPTH24_STENCIL8:Te=s.DEPTH_COMPONENT16:x.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===In&&Te===s.DEPTH_COMPONENT&&x.type!==cr&&x.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=dn,Le=r.convert(x.type)),x.format===ri&&Te===s.DEPTH_COMPONENT&&(Te=s.DEPTH_STENCIL,x.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ln,Le=r.convert(x.type))),rt&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Te,te.width,te.height,0,ze,Le,null));else if(x.isDataTexture)if(Be.length>0&&Ye){Ke&&rt&&t.texStorage2D(s.TEXTURE_2D,He,Te,Be[0].width,Be[0].height);for(let le=0,L=Be.length;le<L;le++)Me=Be[le],Ke?t.texSubImage2D(s.TEXTURE_2D,le,0,0,Me.width,Me.height,ze,Le,Me.data):t.texImage2D(s.TEXTURE_2D,le,Te,Me.width,Me.height,0,ze,Le,Me.data);x.generateMipmaps=!1}else Ke?(rt&&t.texStorage2D(s.TEXTURE_2D,He,Te,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,ze,Le,te.data)):t.texImage2D(s.TEXTURE_2D,0,Te,te.width,te.height,0,ze,Le,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,Te,Be[0].width,Be[0].height,te.depth);for(let le=0,L=Be.length;le<L;le++)Me=Be[le],x.format!==Gt?ze!==null?Ke?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,te.depth,ze,Me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Te,Me.width,Me.height,te.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,te.depth,ze,Le,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,Te,Me.width,Me.height,te.depth,0,ze,Le,Me.data)}else{Ke&&rt&&t.texStorage2D(s.TEXTURE_2D,He,Te,Be[0].width,Be[0].height);for(let le=0,L=Be.length;le<L;le++)Me=Be[le],x.format!==Gt?ze!==null?Ke?t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Me.width,Me.height,ze,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,le,Te,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(s.TEXTURE_2D,le,0,0,Me.width,Me.height,ze,Le,Me.data):t.texImage2D(s.TEXTURE_2D,le,Te,Me.width,Me.height,0,ze,Le,Me.data)}else if(x.isDataArrayTexture)Ke?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,Te,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ze,Le,te.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,ze,Le,te.data);else if(x.isData3DTexture)Ke?(rt&&t.texStorage3D(s.TEXTURE_3D,He,Te,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ze,Le,te.data)):t.texImage3D(s.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,ze,Le,te.data);else if(x.isFramebufferTexture){if(rt)if(Ke)t.texStorage2D(s.TEXTURE_2D,He,Te,te.width,te.height);else{let le=te.width,L=te.height;for(let fe=0;fe<He;fe++)t.texImage2D(s.TEXTURE_2D,fe,Te,le,L,0,ze,Le,null),le>>=1,L>>=1}}else if(Be.length>0&&Ye){Ke&&rt&&t.texStorage2D(s.TEXTURE_2D,He,Te,Be[0].width,Be[0].height);for(let le=0,L=Be.length;le<L;le++)Me=Be[le],Ke?t.texSubImage2D(s.TEXTURE_2D,le,0,0,ze,Le,Me):t.texImage2D(s.TEXTURE_2D,le,Te,ze,Le,Me);x.generateMipmaps=!1}else Ke?(rt&&t.texStorage2D(s.TEXTURE_2D,He,Te,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Le,te)):t.texImage2D(s.TEXTURE_2D,0,Te,ze,Le,te);y(x,Ye)&&v(ae),ye.__version=oe.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function re(T,x,G){if(x.image.length!==6)return;const ae=H(T,x),ne=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+G);const oe=n.get(ne);if(ne.version!==oe.__version||ae===!0){t.activeTexture(s.TEXTURE0+G);const ye=Ze.getPrimaries(Ze.workingColorSpace),ue=x.colorSpace===zt?null:Ze.getPrimaries(x.colorSpace),xe=x.colorSpace===zt||ye===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,Ue=x.image[0]&&x.image[0].isDataTexture,te=[];for(let le=0;le<6;le++)!be&&!Ue?te[le]=_(x.image[le],!1,!0,i.maxCubemapSize):te[le]=Ue?x.image[le].image:x.image[le],te[le]=Se(x,te[le]);const Ye=te[0],ze=m(Ye)||o,Le=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),Me=E(x.internalFormat,Le,Te,x.colorSpace),Be=o&&x.isVideoTexture!==!0,Ke=oe.__version===void 0||ae===!0;let rt=P(x,Ye,ze);N(s.TEXTURE_CUBE_MAP,x,ze);let He;if(be){Be&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Me,Ye.width,Ye.height);for(let le=0;le<6;le++){He=te[le].mipmaps;for(let L=0;L<He.length;L++){const fe=He[L];x.format!==Gt?Le!==null?Be?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,fe.width,fe.height,Le,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,fe.width,fe.height,Le,Te,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,Me,fe.width,fe.height,0,Le,Te,fe.data)}}}else{He=x.mipmaps,Be&&Ke&&(He.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Me,te[0].width,te[0].height));for(let le=0;le<6;le++)if(Ue){Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,te[le].width,te[le].height,Le,Te,te[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Me,te[le].width,te[le].height,0,Le,Te,te[le].data);for(let L=0;L<He.length;L++){const pe=He[L].image[le].image;Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,pe.width,pe.height,Le,Te,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,Me,pe.width,pe.height,0,Le,Te,pe.data)}}else{Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,Te,te[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Me,Le,Te,te[le]);for(let L=0;L<He.length;L++){const fe=He[L];Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,Le,Te,fe.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,Me,Le,Te,fe.image[le])}}}y(x,ze)&&v(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Z(T,x,G,ae,ne,oe){const ye=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),xe=E(G.internalFormat,ye,ue,G.colorSpace);if(!n.get(x).__hasExternalTextures){const Ue=Math.max(1,x.width>>oe),te=Math.max(1,x.height>>oe);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,xe,Ue,te,x.depth,0,ye,ue,null):t.texImage2D(ne,oe,xe,Ue,te,0,ye,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),de(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,ne,n.get(G).__webglTexture,0,ve(x)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,ne,n.get(G).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(T,x,G){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let ae=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||de(x)){const ne=x.depthTexture;ne&&ne.isDepthTexture&&(ne.type===fn?ae=s.DEPTH_COMPONENT32F:ne.type===dn&&(ae=s.DEPTH_COMPONENT24));const oe=ve(x);de(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,ae,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ae,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,ae,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const ae=ve(x);G&&de(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,x.width,x.height):de(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const ae=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ne=0;ne<ae.length;ne++){const oe=ae[ne],ye=r.convert(oe.format,oe.colorSpace),ue=r.convert(oe.type),xe=E(oe.internalFormat,ye,ue,oe.colorSpace),be=ve(x);G&&de(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,xe,x.width,x.height):de(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,xe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,xe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const ae=n.get(x.depthTexture).__webglTexture,ne=ve(x);if(x.depthTexture.format===In)de(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(x.depthTexture.format===ri)de(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Q(T){const x=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");me(x.__webglFramebuffer,T)}else if(G){x.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[ae]),x.__webglDepthbuffer[ae]=s.createRenderbuffer(),ce(x.__webglDepthbuffer[ae],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),ce(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(T,x,G){const ae=n.get(T);x!==void 0&&Z(ae.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Q(T)}function U(T){const x=T.texture,G=n.get(T),ae=n.get(x);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=x.version,a.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,oe=T.isWebGLMultipleRenderTargets===!0,ye=m(T)||o;if(ne){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let xe=0;xe<x.mipmaps.length;xe++)G.__webglFramebuffer[ue][xe]=s.createFramebuffer()}else G.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)G.__webglFramebuffer[ue]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(oe)if(i.drawBuffers){const ue=T.texture;for(let xe=0,be=ue.length;xe<be;xe++){const Ue=n.get(ue[xe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&de(T)===!1){const ue=oe?x:[x];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let xe=0;xe<ue.length;xe++){const be=ue[xe];G.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[xe]);const Ue=r.convert(be.format,be.colorSpace),te=r.convert(be.type),Ye=E(be.internalFormat,Ue,te,be.colorSpace,T.isXRRenderTarget===!0),ze=ve(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ye,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,G.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),N(s.TEXTURE_CUBE_MAP,x,ye);for(let ue=0;ue<6;ue++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Z(G.__webglFramebuffer[ue][xe],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else Z(G.__webglFramebuffer[ue],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);y(x,ye)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ue=T.texture;for(let xe=0,be=ue.length;xe<be;xe++){const Ue=ue[xe],te=n.get(Ue);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),N(s.TEXTURE_2D,Ue,ye),Z(G.__webglFramebuffer,T,Ue,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),y(Ue,ye)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ue=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ae.__webglTexture),N(ue,x,ye),o&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Z(G.__webglFramebuffer[xe],T,x,s.COLOR_ATTACHMENT0,ue,xe);else Z(G.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ue,0);y(x,ye)&&v(ue),t.unbindTexture()}T.depthBuffer&&Q(T)}function De(T){const x=m(T)||o,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0,ne=G.length;ae<ne;ae++){const oe=G[ae];if(y(oe,x)){const ye=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(oe).__webglTexture;t.bindTexture(ye,ue),v(ye),t.unbindTexture()}}}function se(T){if(o&&T.samples>0&&de(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,ae=T.height;let ne=s.COLOR_BUFFER_BIT;const oe=[],ye=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(T),xe=T.isWebGLMultipleRenderTargets===!0;if(xe)for(let be=0;be<x.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<x.length;be++){oe.push(s.COLOR_ATTACHMENT0+be),T.depthBuffer&&oe.push(ye);const Ue=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ue===!1&&(T.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),xe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[be]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ye]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ye])),xe){const te=n.get(x[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,G,ae,0,0,G,ae,ne,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<x.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);const Ue=n.get(x[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function ve(T){return Math.min(i.maxSamples,T.samples)}function de(T){const x=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Se(T,x){const G=T.colorSpace,ae=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===nr||G!==an&&G!==zt&&(Ze.getTransfer(G)===nt?o===!1?e.has("EXT_sRGB")===!0&&ae===Gt?(T.format=nr,T.minFilter=Ct,T.generateMipmaps=!1):x=Mo.sRGBToLinear(x):(ae!==Gt||ne!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=ee,this.setupRenderTarget=U,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=de}function qf(s,e,t){const n=t.isWebGL2;function i(r,a=zt){let o;const c=Ze.getTransfer(a);if(r===gn)return s.UNSIGNED_BYTE;if(r===lo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ho)return s.UNSIGNED_SHORT_5_5_5_1;if(r===wc)return s.BYTE;if(r===Cc)return s.SHORT;if(r===cr)return s.UNSIGNED_SHORT;if(r===co)return s.INT;if(r===dn)return s.UNSIGNED_INT;if(r===fn)return s.FLOAT;if(r===Mi)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Rc)return s.ALPHA;if(r===Gt)return s.RGBA;if(r===Pc)return s.LUMINANCE;if(r===Lc)return s.LUMINANCE_ALPHA;if(r===In)return s.DEPTH_COMPONENT;if(r===ri)return s.DEPTH_STENCIL;if(r===nr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ic)return s.RED;if(r===uo)return s.RED_INTEGER;if(r===Dc)return s.RG;if(r===fo)return s.RG_INTEGER;if(r===po)return s.RGBA_INTEGER;if(r===gs||r===_s||r===vs||r===xs)if(c===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===gs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===gs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lr||r===Ir||r===Dr||r===Ur)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Lr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ir)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ur)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mo)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nr||r===Fr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Nr)return c===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Fr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Or||r===Br||r===Gr||r===zr||r===Vr||r===Hr||r===kr||r===Wr||r===Xr||r===qr||r===Yr||r===jr||r===Kr||r===$r)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Or)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Br)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kr)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$r)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ms||r===Zr||r===Jr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ms)return c===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uc||r===Qr||r===ea||r===ta)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ms)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Qr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ea)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ta)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ln?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Yf extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Kf extends oi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],v=[],E=new Oe;let P=null;const C=new Pt;C.layers.enable(1),C.viewport=new it;const R=new Pt;R.layers.enable(2),R.viewport=new it;const O=[C,R],M=new Yf;M.layers.enable(1),M.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let H=y[N];return H===void 0&&(H=new Xs,y[N]=H),H.getTargetRaySpace()},this.getControllerGrip=function(N){let H=y[N];return H===void 0&&(H=new Xs,y[N]=H),H.getGripSpace()},this.getHand=function(N){let H=y[N];return H===void 0&&(H=new Xs,y[N]=H),H.getHandSpace()};function X(N){const H=v.indexOf(N.inputSource);if(H===-1)return;const K=y[H];K!==void 0&&(K.update(N.inputSource,N.frame,l||a),K.dispatchEvent({type:N.type,data:N.inputSource}))}function ie(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",ie),i.removeEventListener("inputsourceschange",D);for(let N=0;N<y.length;N++){const H=v[N];H!==null&&(v[N]=null,y[N].disconnect(H))}b=null,z=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,k.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",ie),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new vn(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,K=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=_.stencil?ri:In,K=_.stencil?Ln:dn);const Z={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Z),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new vn(d.textureWidth,d.textureHeight,{format:Gt,type:gn,depthTexture:new Lo(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ce=e.properties.get(f);ce.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(N){for(let H=0;H<N.removed.length;H++){const K=N.removed[H],re=v.indexOf(K);re>=0&&(v[re]=null,y[re].disconnect(K))}for(let H=0;H<N.added.length;H++){const K=N.added[H];let re=v.indexOf(K);if(re===-1){for(let ce=0;ce<y.length;ce++)if(ce>=v.length){v.push(K),re=ce;break}else if(v[ce]===null){v[ce]=K,re=ce;break}if(re===-1)break}const Z=y[re];Z&&Z.connect(K)}}const B=new I,Y=new I;function $(N,H,K){B.setFromMatrixPosition(H.matrixWorld),Y.setFromMatrixPosition(K.matrixWorld);const re=B.distanceTo(Y),Z=H.projectionMatrix.elements,ce=K.projectionMatrix.elements,me=Z[14]/(Z[10]-1),Q=Z[14]/(Z[10]+1),ee=(Z[9]+1)/Z[5],U=(Z[9]-1)/Z[5],De=(Z[8]-1)/Z[0],se=(ce[8]+1)/ce[0],ve=me*De,de=me*se,we=re/(-De+se),Se=we*-De;H.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Se),N.translateZ(we),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const T=me+we,x=Q+we,G=ve-Se,ae=de+(re-Se),ne=ee*Q/x*T,oe=U*Q/x*T;N.projectionMatrix.makePerspective(G,ae,ne,oe,T,x),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function j(N,H){H===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(H.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;M.near=R.near=C.near=N.near,M.far=R.far=C.far=N.far,(b!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,z=M.far);const H=N.parent,K=M.cameras;j(M,H);for(let re=0;re<K.length;re++)j(K[re],H);K.length===2?$(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),J(N,M,H)};function J(N,H,K){K===null?N.matrix.copy(H.matrixWorld):(N.matrix.copy(K.matrixWorld),N.matrix.invert(),N.matrix.multiply(H.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=is*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let w=null;function A(N,H){if(u=H.getViewerPose(l||a),g=H,u!==null){const K=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;K.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Z=0;Z<K.length;Z++){const ce=K[Z];let me=null;if(p!==null)me=p.getViewport(ce);else{const ee=h.getViewSubImage(d,ce);me=ee.viewport,Z===0&&(e.setRenderTargetTextures(f,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(f))}let Q=O[Z];Q===void 0&&(Q=new Pt,Q.layers.enable(Z),Q.viewport=new it,O[Z]=Q),Q.matrix.fromArray(ce.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ce.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(me.x,me.y,me.width,me.height),Z===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Q)}}for(let K=0;K<y.length;K++){const re=v[K],Z=y[K];re!==null&&Z!==void 0&&Z.update(re,H,l||a)}w&&w(N,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const k=new Ro;k.setAnimationLoop(A),this.setAnimationLoop=function(N){w=N},this.dispose=function(){}}}function $f(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ao(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Lt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Lt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zf(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function l(y,v){let E=i[y.id];E===void 0&&(g(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",m));const P=v.program;n.updateUBOMapping(y,P);const C=e.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function u(y){const v=h();y.__bindingPointIndex=v;const E=s.createBuffer(),P=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],E=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,R=E.length;C<R;C++){const O=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,b=O.length;M<b;M++){const z=O[M];if(p(z,C,M,P)===!0){const X=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let D=0;for(let B=0;B<ie.length;B++){const Y=ie[B],$=_(Y);typeof Y=="number"||typeof Y=="boolean"?(z.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,X+D,z.__data)):Y.isMatrix3?(z.__data[0]=Y.elements[0],z.__data[1]=Y.elements[1],z.__data[2]=Y.elements[2],z.__data[3]=0,z.__data[4]=Y.elements[3],z.__data[5]=Y.elements[4],z.__data[6]=Y.elements[5],z.__data[7]=0,z.__data[8]=Y.elements[6],z.__data[9]=Y.elements[7],z.__data[10]=Y.elements[8],z.__data[11]=0):(Y.toArray(z.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,v,E,P){const C=y.value,R=v+"_"+E;if(P[R]===void 0)return typeof C=="number"||typeof C=="boolean"?P[R]=C:P[R]=C.clone(),!0;{const O=P[R];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return P[R]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(y){const v=y.uniforms;let E=0;const P=16;for(let R=0,O=v.length;R<O;R++){const M=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,z=M.length;b<z;b++){const X=M[b],ie=Array.isArray(X.value)?X.value:[X.value];for(let D=0,B=ie.length;D<B;D++){const Y=ie[D],$=_(Y),j=E%P;j!==0&&P-j<$.boundary&&(E+=P-j),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=$.storage}}}const C=E%P;return C>0&&(E+=P-C),y.__size=E,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Oo{constructor(e={}){const{canvas:t=qc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const v=this;let E=!1,P=0,C=0,R=null,O=-1,M=null;const b=new it,z=new it;let X=null;const ie=new Xe(0);let D=0,B=t.width,Y=t.height,$=1,j=null,J=null;const w=new it(0,0,B,Y),A=new it(0,0,B,Y);let k=!1;const N=new ur;let H=!1,K=!1,re=null;const Z=new ot,ce=new Oe,me=new I,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return R===null?$:1}let U=n;function De(S,F){for(let W=0;W<S.length;W++){const q=S[W],V=t.getContext(q,F);if(V!==null)return V}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${or}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),U=De(F,S),U===null)throw De(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let se,ve,de,we,Se,T,x,G,ae,ne,oe,ye,ue,xe,be,Ue,te,Ye,ze,Le,Te,Me,Be,Ke;function rt(){se=new ad(U),ve=new ed(U,se,e),se.init(ve),Me=new qf(U,se,ve),de=new Wf(U,se,ve),we=new ld(U),Se=new Pf,T=new Xf(U,se,de,Se,ve,Me,we),x=new nd(v),G=new rd(v),ae=new _l(U,ve),Be=new Ju(U,se,ae,ve),ne=new od(U,ae,we,Be),oe=new fd(U,ne,ae,we),ze=new dd(U,ve,T),Ue=new td(Se),ye=new Rf(v,x,G,se,ve,Be,Ue),ue=new $f(v,Se),xe=new If,be=new Bf(se,ve),Ye=new Zu(v,x,G,de,oe,d,c),te=new kf(v,oe,ve),Ke=new Zf(U,we,ve,de),Le=new Qu(U,se,we,ve),Te=new cd(U,se,we,ve),we.programs=ye.programs,v.capabilities=ve,v.extensions=se,v.properties=Se,v.renderLists=xe,v.shadowMap=te,v.state=de,v.info=we}rt();const He=new Kf(v,U);this.xr=He,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(B,Y,!1))},this.getSize=function(S){return S.set(B,Y)},this.setSize=function(S,F,W=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,Y=F,t.width=Math.floor(S*$),t.height=Math.floor(F*$),W===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(B*$,Y*$).floor()},this.setDrawingBufferSize=function(S,F,W){B=S,Y=F,$=W,t.width=Math.floor(S*W),t.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(w)},this.setViewport=function(S,F,W,q){S.isVector4?w.set(S.x,S.y,S.z,S.w):w.set(S,F,W,q),de.viewport(b.copy(w).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(A)},this.setScissor=function(S,F,W,q){S.isVector4?A.set(S.x,S.y,S.z,S.w):A.set(S,F,W,q),de.scissor(z.copy(A).multiplyScalar($).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(S){de.setScissorTest(k=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(S=!0,F=!0,W=!0){let q=0;if(S){let V=!1;if(R!==null){const _e=R.texture.format;V=_e===po||_e===fo||_e===uo}if(V){const _e=R.texture.type,Ee=_e===gn||_e===dn||_e===cr||_e===Ln||_e===lo||_e===ho,Ce=Ye.getClearColor(),Ie=Ye.getClearAlpha(),Ve=Ce.r,Ne=Ce.g,Fe=Ce.b;Ee?(p[0]=Ve,p[1]=Ne,p[2]=Fe,p[3]=Ie,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Ve,g[1]=Ne,g[2]=Fe,g[3]=Ie,U.clearBufferiv(U.COLOR,0,g))}else q|=U.COLOR_BUFFER_BIT}F&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),xe.dispose(),be.dispose(),Se.dispose(),x.dispose(),G.dispose(),oe.dispose(),Be.dispose(),Ke.dispose(),ye.dispose(),He.dispose(),He.removeEventListener("sessionstart",Et),He.removeEventListener("sessionend",et),re&&(re.dispose(),re=null),Tt.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=we.autoReset,F=te.enabled,W=te.autoUpdate,q=te.needsUpdate,V=te.type;rt(),we.autoReset=S,te.enabled=F,te.autoUpdate=W,te.needsUpdate=q,te.type=V}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){const F=S.target;F.removeEventListener("dispose",pe),Pe(F)}function Pe(S){Ae(S),Se.remove(S)}function Ae(S){const F=Se.get(S).programs;F!==void 0&&(F.forEach(function(W){ye.releaseProgram(W)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,q,V,_e){F===null&&(F=Q);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,Ce=ko(S,F,W,q,V);de.setMaterial(q,Ee);let Ie=W.index,Ve=1;if(q.wireframe===!0){if(Ie=ne.getWireframeAttribute(W),Ie===void 0)return;Ve=2}const Ne=W.drawRange,Fe=W.attributes.position;let ct=Ne.start*Ve,Dt=(Ne.start+Ne.count)*Ve;_e!==null&&(ct=Math.max(ct,_e.start*Ve),Dt=Math.min(Dt,(_e.start+_e.count)*Ve)),Ie!==null?(ct=Math.max(ct,0),Dt=Math.min(Dt,Ie.count)):Fe!=null&&(ct=Math.max(ct,0),Dt=Math.min(Dt,Fe.count));const ft=Dt-ct;if(ft<0||ft===1/0)return;Be.setup(V,q,Ce,W,Ie);let Zt,st=Le;if(Ie!==null&&(Zt=ae.get(Ie),st=Te,st.setIndex(Zt)),V.isMesh)q.wireframe===!0?(de.setLineWidth(q.wireframeLinewidth*ee()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(V.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),de.setLineWidth(ke*ee()),V.isLineSegments?st.setMode(U.LINES):V.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else V.isPoints?st.setMode(U.POINTS):V.isSprite&&st.setMode(U.TRIANGLES);if(V.isBatchedMesh)st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)st.renderInstances(ct,ft,V.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,us=Math.min(W.instanceCount,ke);st.renderInstances(ct,ft,us)}else st.render(ct,ft)};function Je(S,F,W){S.transparent===!0&&S.side===Bt&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,bi(S,F,W),S.side=_n,S.needsUpdate=!0,bi(S,F,W),S.side=Bt):bi(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),m=be.get(W),m.init(),y.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),S!==W&&S.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights);const q=new Set;return S.traverse(function(V){const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const Ce=_e[Ee];Je(Ce,W,V),q.add(Ce)}else Je(_e,W,V),q.add(_e)}),y.pop(),m=null,q},this.compileAsync=function(S,F,W=null){const q=this.compile(S,F,W);return new Promise(V=>{function _e(){if(q.forEach(function(Ee){Se.get(Ee).currentProgram.isReady()&&q.delete(Ee)}),q.size===0){V(S);return}setTimeout(_e,10)}se.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Qe=null;function dt(S){Qe&&Qe(S)}function Et(){Tt.stop()}function et(){Tt.start()}const Tt=new Ro;Tt.setAnimationLoop(dt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(S){Qe=S,He.setAnimationLoop(S),S===null?Tt.stop():Tt.start()},He.addEventListener("sessionstart",Et),He.addEventListener("sessionend",et),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(F),F=He.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,F,R),m=be.get(S,y.length),m.init(),y.push(m),Z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),N.setFromProjectionMatrix(Z),K=this.localClippingEnabled,H=Ue.init(this.clippingPlanes,K),_=xe.get(S,f.length),_.init(),f.push(_),jt(S,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,J),this.info.render.frame++,H===!0&&Ue.beginShadows();const W=m.state.shadowsArray;if(te.render(W,S,F),H===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,S),m.setupLights(v._useLegacyLights),F.isArrayCamera){const q=F.cameras;for(let V=0,_e=q.length;V<_e;V++){const Ee=q[V];xr(_,S,Ee,Ee.viewport)}}else xr(_,S,F);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(v,S,F),Be.resetDefaultState(),O=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function jt(S,F,W,q){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||N.intersectsSprite(S)){q&&me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const Ee=oe.update(S),Ce=S.material;Ce.visible&&_.push(S,Ee,Ce,W,me.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||N.intersectsObject(S))){const Ee=oe.update(S),Ce=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),me.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),me.copy(Ee.boundingSphere.center)),me.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(Ce)){const Ie=Ee.groups;for(let Ve=0,Ne=Ie.length;Ve<Ne;Ve++){const Fe=Ie[Ve],ct=Ce[Fe.materialIndex];ct&&ct.visible&&_.push(S,Ee,ct,W,me.z,Fe)}}else Ce.visible&&_.push(S,Ee,Ce,W,me.z,null)}}const _e=S.children;for(let Ee=0,Ce=_e.length;Ee<Ce;Ee++)jt(_e[Ee],F,W,q)}function xr(S,F,W,q){const V=S.opaque,_e=S.transmissive,Ee=S.transparent;m.setupLightsView(W),H===!0&&Ue.setGlobalState(v.clippingPlanes,W),_e.length>0&&Ho(V,_e,F,W),q&&de.viewport(b.copy(q)),V.length>0&&Ti(V,F,W),_e.length>0&&Ti(_e,F,W),Ee.length>0&&Ti(Ee,F,W),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ho(S,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const _e=ve.isWebGL2;re===null&&(re=new vn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?Mi:gn,minFilter:xi,samples:_e?4:0})),v.getDrawingBufferSize(ce),_e?re.setSize(ce.x,ce.y):re.setSize(ir(ce.x),ir(ce.y));const Ee=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(ie),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=mn,Ti(S,W,q),T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re);let Ie=!1;for(let Ve=0,Ne=F.length;Ve<Ne;Ve++){const Fe=F[Ve],ct=Fe.object,Dt=Fe.geometry,ft=Fe.material,Zt=Fe.group;if(ft.side===Bt&&ct.layers.test(q.layers)){const st=ft.side;ft.side=Lt,ft.needsUpdate=!0,Mr(ct,W,q,Dt,ft,Zt),ft.side=st,ft.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re)),v.setRenderTarget(Ee),v.setClearColor(ie,D),v.toneMapping=Ce}function Ti(S,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let V=0,_e=S.length;V<_e;V++){const Ee=S[V],Ce=Ee.object,Ie=Ee.geometry,Ve=q===null?Ee.material:q,Ne=Ee.group;Ce.layers.test(W.layers)&&Mr(Ce,F,W,Ie,Ve,Ne)}}function Mr(S,F,W,q,V,_e){S.onBeforeRender(v,F,W,q,V,_e),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(v,F,W,q,S,_e),V.transparent===!0&&V.side===Bt&&V.forceSinglePass===!1?(V.side=Lt,V.needsUpdate=!0,v.renderBufferDirect(W,F,q,V,S,_e),V.side=_n,V.needsUpdate=!0,v.renderBufferDirect(W,F,q,V,S,_e),V.side=Bt):v.renderBufferDirect(W,F,q,V,S,_e),S.onAfterRender(v,F,W,q,V,_e)}function bi(S,F,W){F.isScene!==!0&&(F=Q);const q=Se.get(S),V=m.state.lights,_e=m.state.shadowsArray,Ee=V.state.version,Ce=ye.getParameters(S,V.state,_e,F,W),Ie=ye.getProgramCacheKey(Ce);let Ve=q.programs;q.environment=S.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(S.isMeshStandardMaterial?G:x).get(S.envMap||q.environment),Ve===void 0&&(S.addEventListener("dispose",pe),Ve=new Map,q.programs=Ve);let Ne=Ve.get(Ie);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===Ee)return Sr(S,Ce),Ne}else Ce.uniforms=ye.getUniforms(S),S.onBuild(W,Ce,v),S.onBeforeCompile(Ce,v),Ne=ye.acquireProgram(Ce,Ie),Ve.set(Ie,Ne),q.uniforms=Ce.uniforms;const Fe=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=Ue.uniform),Sr(S,Ce),q.needsLights=Xo(S),q.lightsStateVersion=Ee,q.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ne,q.uniformsList=null,Ne}function yr(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Zi.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Sr(S,F){const W=Se.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function ko(S,F,W,q,V){F.isScene!==!0&&(F=Q),T.resetTextureUnits();const _e=F.fog,Ee=q.isMeshStandardMaterial?F.environment:null,Ce=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:an,Ie=(q.isMeshStandardMaterial?G:x).get(q.envMap||Ee),Ve=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Dt=!!W.morphAttributes.color;let ft=mn;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ft=v.toneMapping);const Zt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=Zt!==void 0?Zt.length:0,ke=Se.get(q),us=m.state.lights;if(H===!0&&(K===!0||S!==M)){const Ft=S===M&&q.id===O;Ue.setState(q,S,Ft)}let at=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==us.state.version||ke.outputColorSpace!==Ce||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||ke.envMap!==Ie||q.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ue.numPlanes||ke.numIntersection!==Ue.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Ne||ke.morphTargets!==Fe||ke.morphNormals!==ct||ke.morphColors!==Dt||ke.toneMapping!==ft||ve.isWebGL2===!0&&ke.morphTargetsCount!==st)&&(at=!0):(at=!0,ke.__version=q.version);let Mn=ke.currentProgram;at===!0&&(Mn=bi(q,F,V));let Er=!1,hi=!1,ds=!1;const vt=Mn.getUniforms(),yn=ke.uniforms;if(de.useProgram(Mn.program)&&(Er=!0,hi=!0,ds=!0),q.id!==O&&(O=q.id,hi=!0),Er||M!==S){vt.setValue(U,"projectionMatrix",S.projectionMatrix),vt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Ft=vt.map.cameraPosition;Ft!==void 0&&Ft.setValue(U,me.setFromMatrixPosition(S.matrixWorld)),ve.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,hi=!0,ds=!0)}if(V.isSkinnedMesh){vt.setOptional(U,V,"bindMatrix"),vt.setOptional(U,V,"bindMatrixInverse");const Ft=V.skeleton;Ft&&(ve.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(U,"boneTexture",Ft.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(vt.setOptional(U,V,"batchingTexture"),vt.setValue(U,"batchingTexture",V._matricesTexture,T));const fs=W.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0&&ve.isWebGL2===!0)&&ze.update(V,W,Mn),(hi||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,vt.setValue(U,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(yn.envMap.value=Ie,yn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),hi&&(vt.setValue(U,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Wo(yn,ds),_e&&q.fog===!0&&ue.refreshFogUniforms(yn,_e),ue.refreshMaterialUniforms(yn,q,$,Y,re),Zi.upload(U,yr(ke),yn,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Zi.upload(U,yr(ke),yn,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(U,"center",V.center),vt.setValue(U,"modelViewMatrix",V.modelViewMatrix),vt.setValue(U,"normalMatrix",V.normalMatrix),vt.setValue(U,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ft=q.uniformsGroups;for(let ps=0,qo=Ft.length;ps<qo;ps++)if(ve.isWebGL2){const Tr=Ft[ps];Ke.update(Tr,Mn),Ke.bind(Tr,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Wo(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Xo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,F,W){Se.get(S.texture).__webglTexture=F,Se.get(S.depthTexture).__webglTexture=W;const q=Se.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){const W=Se.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,W=0){R=S,P=F,C=W;let q=!0,V=null,_e=!1,Ee=!1;if(S){const Ie=Se.get(S);Ie.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(U.FRAMEBUFFER,null),q=!1):Ie.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ie.__hasExternalTextures&&T.rebindTextures(S,Se.get(S.texture).__webglTexture,Se.get(S.depthTexture).__webglTexture);const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);const Ne=Se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?V=Ne[F][W]:V=Ne[F],_e=!0):ve.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?V=Se.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[W]:V=Ne,b.copy(S.viewport),z.copy(S.scissor),X=S.scissorTest}else b.copy(w).multiplyScalar($).floor(),z.copy(A).multiplyScalar($).floor(),X=k;if(de.bindFramebuffer(U.FRAMEBUFFER,V)&&ve.drawBuffers&&q&&de.drawBuffers(S,V),de.viewport(b),de.scissor(z),de.setScissorTest(X),_e){const Ie=Se.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,W)}else if(Ee){const Ie=Se.get(S.texture),Ve=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,W||0,Ve)}O=-1},this.readRenderTargetPixels=function(S,F,W,q,V,_e,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){de.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ie=S.texture,Ve=Ie.format,Ne=Ie.type;if(Ve!==Gt&&Me.convert(Ve)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===Mi&&(se.has("EXT_color_buffer_half_float")||ve.isWebGL2&&se.has("EXT_color_buffer_float"));if(Ne!==gn&&Me.convert(Ne)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===fn&&(ve.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-q&&W>=0&&W<=S.height-V&&U.readPixels(F,W,q,V,Me.convert(Ve),Me.convert(Ne),_e)}finally{const Ie=R!==null?Se.get(R).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(S,F,W=0){const q=Math.pow(2,-W),V=Math.floor(F.image.width*q),_e=Math.floor(F.image.height*q);T.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,S.x,S.y,V,_e),de.unbindTexture()},this.copyTextureToTexture=function(S,F,W,q=0){const V=F.image.width,_e=F.image.height,Ee=Me.convert(W.format),Ce=Me.convert(W.type);T.setTexture2D(W,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,q,S.x,S.y,V,_e,Ee,Ce,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,q,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Ee,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,q,S.x,S.y,Ee,Ce,F.image),q===0&&W.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(S,F,W,q,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=S.max.x-S.min.x+1,Ee=S.max.y-S.min.y+1,Ce=S.max.z-S.min.z+1,Ie=Me.convert(q.format),Ve=Me.convert(q.type);let Ne;if(q.isData3DTexture)T.setTexture3D(q,0),Ne=U.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)T.setTexture2DArray(q,0),Ne=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const Fe=U.getParameter(U.UNPACK_ROW_LENGTH),ct=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Dt=U.getParameter(U.UNPACK_SKIP_PIXELS),ft=U.getParameter(U.UNPACK_SKIP_ROWS),Zt=U.getParameter(U.UNPACK_SKIP_IMAGES),st=W.isCompressedTexture?W.mipmaps[V]:W.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?U.texSubImage3D(Ne,V,F.x,F.y,F.z,_e,Ee,Ce,Ie,Ve,st.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ne,V,F.x,F.y,F.z,_e,Ee,Ce,Ie,st.data)):U.texSubImage3D(Ne,V,F.x,F.y,F.z,_e,Ee,Ce,Ie,Ve,st),U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt),V===0&&q.generateMipmaps&&U.generateMipmap(Ne),de.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){P=0,C=0,R=null,de.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lr?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===cs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Dn:go}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dn?gt:an}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jf extends Oo{}Jf.prototype.isWebGL1Renderer=!0;class fr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new fr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wa extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bo extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xa=new I,qa=new I,Ya=new ot,qs=new ls,ji=new Ei;class Qf extends _t{constructor(e=new St,t=new Bo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xa.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xa.distanceTo(qa);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(i),ji.radius+=r,e.ray.intersectsSphere(ji)===!1)return;Ya.copy(i).invert(),qs.copy(e.ray).applyMatrix4(Ya);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=f,E=y-1;v<E;v+=p){const P=g.getX(v),C=g.getX(v+1);if(l.fromBufferAttribute(m,P),u.fromBufferAttribute(m,C),qs.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=f,E=y-1;v<E;v+=p){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),qs.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const ja=new I,Ka=new I;class ep extends Qf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ja.fromBufferAttribute(t,i),Ka.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ja.distanceTo(Ka);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Go extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $a=new ot,rr=new ls,Ki=new Ei,$i=new I;class tp extends _t{constructor(e=new St,t=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(i),Ki.radius+=r,e.ray.intersectsSphere(Ki)===!1)return;$a.copy(i).invert(),rr.copy(e.ray).applyMatrix4($a);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);$i.fromBufferAttribute(h,m),Za($i,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)$i.fromBufferAttribute(h,g),Za($i,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Za(s,e,t,n,i,r,a){const o=rr.distanceSqToPoint(s);if(o<t){const c=new I;rr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Ja extends It{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends St{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new I,u=new Oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mt extends St{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function y(){const E=new I,P=new I;let C=0;const R=(t-e)/n;for(let O=0;O<=r;O++){const M=[],b=O/r,z=b*(t-e)+e;for(let X=0;X<=i;X++){const ie=X/i,D=ie*c+o,B=Math.sin(D),Y=Math.cos(D);P.x=z*B,P.y=-b*n+m,P.z=z*Y,h.push(P.x,P.y,P.z),E.set(B,R,Y).normalize(),d.push(E.x,E.y,E.z),p.push(ie,1-b),M.push(g++)}_.push(M)}for(let O=0;O<i;O++)for(let M=0;M<r;M++){const b=_[M][O],z=_[M+1][O],X=_[M+1][O+1],ie=_[M][O+1];u.push(b,z,ie),u.push(z,X,ie),C+=6}l.addGroup(f,C,0),f+=C}function v(E){const P=g,C=new Oe,R=new I;let O=0;const M=E===!0?e:t,b=E===!0?1:-1;for(let X=1;X<=i;X++)h.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const z=g;for(let X=0;X<=i;X++){const D=X/i*c+o,B=Math.cos(D),Y=Math.sin(D);R.x=M*Y,R.y=m*b,R.z=M*B,h.push(R.x,R.y,R.z),d.push(0,b,0),C.x=B*.5+.5,C.y=Y*.5*b+.5,p.push(C.x,C.y),g++}for(let X=0;X<i;X++){const ie=P+X,D=z+X;E===!0?u.push(D,D+1,ie):u.push(D+1,D,ie),O+=3}l.addGroup(f,O,E===!0?1:2),f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends mt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gr extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new I,E=new I,P=new I;for(let C=0;C<t.length;C+=3)p(t[C+0],v),p(t[C+1],E),p(t[C+2],P),c(v,E,P,y)}function c(y,v,E,P){const C=P+1,R=[];for(let O=0;O<=C;O++){R[O]=[];const M=y.clone().lerp(E,O/C),b=v.clone().lerp(E,O/C),z=C-O;for(let X=0;X<=z;X++)X===0&&O===C?R[O][X]=M:R[O][X]=M.clone().lerp(b,X/z)}for(let O=0;O<C;O++)for(let M=0;M<2*(C-O)-1;M++){const b=Math.floor(M/2);M%2===0?(d(R[O][b+1]),d(R[O+1][b]),d(R[O][b])):(d(R[O][b+1]),d(R[O+1][b+1]),d(R[O+1][b]))}}function l(y){const v=new I;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(y),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function u(){const y=new I;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const E=m(y)/2/Math.PI+.5,P=f(y)/Math.PI+.5;a.push(E,1-P)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const v=a[y+0],E=a[y+2],P=a[y+4],C=Math.max(v,E,P),R=Math.min(v,E,P);C>.9&&R<.1&&(v<.2&&(a[y+0]+=1),E<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,v){const E=y*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function g(){const y=new I,v=new I,E=new I,P=new I,C=new Oe,R=new Oe,O=new Oe;for(let M=0,b=0;M<r.length;M+=9,b+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),C.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),O.set(a[b+4],a[b+5]),P.copy(y).add(v).add(E).divideScalar(3);const z=m(P);_(C,b+0,y,z),_(R,b+2,v,z),_(O,b+4,E,z)}}function _(y,v,E,P){P<0&&y.x===1&&(a[v]=y.x-1),E.x===0&&E.z===0&&(a[v]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.vertices,e.indices,e.radius,e.details)}}class rs extends gr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rs(e.radius,e.detail)}}class as extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let E=0;f===0&&a===0?E=.5/t:f===n&&c===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const C=P/t;h.x=-e*Math.cos(i+C*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+C*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+E,1-v),y.push(l++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const v=u[f][y+1],E=u[f][y],P=u[f+1][y],C=u[f+1][y+1];(f!==0||a>0)&&p.push(v,E,C),(f!==n-1||c<Math.PI)&&p.push(E,P,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qn extends St{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new I,h=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;a.push(_,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class je extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _r extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ys=new ot,Qa=new I,eo=new I;class zo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qa),eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eo),t.updateMatrixWorld(),Ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class np extends zo{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ip extends _r{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new np}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const to=new ot,gi=new I,js=new I;class sp extends zo{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gi.setFromMatrixPosition(e.matrixWorld),n.position.copy(gi),js.copy(n.position),js.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(js),n.updateMatrixWorld(),i.makeTranslation(-gi.x,-gi.y,-gi.z),to.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to)}}class Ks extends _r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rp extends _r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ap{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=no(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=no();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function no(){return(typeof performance>"u"?Date:performance).now()}class Vo{constructor(e,t,n=0,i=1/0){this.ray=new ls(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ar(e,this,n,t),n.sort(io),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ar(e[i],this,n,t);return n.sort(io),n}}function io(s,e){return s.distance-e.distance}function ar(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ar(i[r],e,t,!0)}}class op extends ep{constructor(e=10,t=10,n=4473924,i=8947848){n=new Xe(n),i=new Xe(i);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=d===r?n:i;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const u=new St;u.setAttribute("position",new tt(c,3)),u.setAttribute("color",new tt(l,3));const h=new Bo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:or}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=or);var vr={};(function s(e,t,n,i){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var w=new OffscreenCanvas(1,1),A=w.getContext("2d");A.fillRect(0,0,1,1);var k=w.transferToImageBitmap();A.createPattern(k,"no-repeat")}catch{return!1}return!0}();function c(){}function l(w){var A=t.exports.Promise,k=A!==void 0?A:e.Promise;return typeof k=="function"?new k(w):(w(c,c),null)}var u=function(w,A){return{transform:function(k){if(w)return k;if(A.has(k))return A.get(k);var N=new OffscreenCanvas(k.width,k.height),H=N.getContext("2d");return H.drawImage(k,0,0),A.set(k,N),N},clear:function(){A.clear()}}}(o,new Map),h=function(){var w=Math.floor(16.666666666666668),A,k,N={},H=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(K){var re=Math.random();return N[re]=requestAnimationFrame(function Z(ce){H===ce||H+w-1<ce?(H=ce,delete N[re],K()):N[re]=requestAnimationFrame(Z)}),re},k=function(K){N[K]&&cancelAnimationFrame(N[K])}):(A=function(K){return setTimeout(K,w)},k=function(K){return clearTimeout(K)}),{frame:A,cancel:k}}(),d=function(){var w,A,k={};function N(H){function K(re,Z){H.postMessage({options:re||{},callback:Z})}H.init=function(Z){var ce=Z.transferControlToOffscreen();H.postMessage({canvas:ce},[ce])},H.fire=function(Z,ce,me){if(A)return K(Z,null),A;var Q=Math.random().toString(36).slice(2);return A=l(function(ee){function U(De){De.data.callback===Q&&(delete k[Q],H.removeEventListener("message",U),A=null,u.clear(),me(),ee())}H.addEventListener("message",U),K(Z,Q),k[Q]=U.bind(null,{data:{callback:Q}})}),A},H.reset=function(){H.postMessage({reset:!0});for(var Z in k)k[Z](),delete k[Z]}}return function(){if(w)return w;if(!n&&r){var H=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{w=new Worker(URL.createObjectURL(new Blob([H])))}catch(K){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",K),null}N(w)}return w}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(w,A){return A?A(w):w}function _(w){return w!=null}function m(w,A,k){return g(w&&_(w[A])?w[A]:p[A],k)}function f(w){return w<0?0:Math.floor(w)}function y(w,A){return Math.floor(Math.random()*(A-w))+w}function v(w){return parseInt(w,16)}function E(w){return w.map(P)}function P(w){var A=String(w).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:v(A.substring(0,2)),g:v(A.substring(2,4)),b:v(A.substring(4,6))}}function C(w){var A=m(w,"origin",Object);return A.x=m(A,"x",Number),A.y=m(A,"y",Number),A}function R(w){w.width=document.documentElement.clientWidth,w.height=document.documentElement.clientHeight}function O(w){var A=w.getBoundingClientRect();w.width=A.width,w.height=A.height}function M(w){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=w,A}function b(w,A,k,N,H,K,re,Z,ce){w.save(),w.translate(A,k),w.rotate(K),w.scale(N,H),w.arc(0,0,1,re,Z,ce),w.restore()}function z(w){var A=w.angle*(Math.PI/180),k=w.spread*(Math.PI/180);return{x:w.x,y:w.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:w.startVelocity*.5+Math.random()*w.startVelocity,angle2D:-A+(.5*k-Math.random()*k),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:w.color,shape:w.shape,tick:0,totalTicks:w.ticks,decay:w.decay,drift:w.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:w.gravity*3,ovalScalar:.6,scalar:w.scalar,flat:w.flat}}function X(w,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var k=A.tick++/A.totalTicks,N=A.x+A.random*A.tiltCos,H=A.y+A.random*A.tiltSin,K=A.wobbleX+A.random*A.tiltCos,re=A.wobbleY+A.random*A.tiltSin;if(w.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-k)+")",w.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))w.fill($(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(K-N)*.1,Math.abs(re-H)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var Z=Math.PI/10*A.wobble,ce=Math.abs(K-N)*.1,me=Math.abs(re-H)*.1,Q=A.shape.bitmap.width*A.scalar,ee=A.shape.bitmap.height*A.scalar,U=new DOMMatrix([Math.cos(Z)*ce,Math.sin(Z)*ce,-Math.sin(Z)*me,Math.cos(Z)*me,A.x,A.y]);U.multiplySelf(new DOMMatrix(A.shape.matrix));var De=w.createPattern(u.transform(A.shape.bitmap),"no-repeat");De.setTransform(U),w.globalAlpha=1-k,w.fillStyle=De,w.fillRect(A.x-Q/2,A.y-ee/2,Q,ee),w.globalAlpha=1}else if(A.shape==="circle")w.ellipse?w.ellipse(A.x,A.y,Math.abs(K-N)*A.ovalScalar,Math.abs(re-H)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):b(w,A.x,A.y,Math.abs(K-N)*A.ovalScalar,Math.abs(re-H)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var se=Math.PI/2*3,ve=4*A.scalar,de=8*A.scalar,we=A.x,Se=A.y,T=5,x=Math.PI/T;T--;)we=A.x+Math.cos(se)*de,Se=A.y+Math.sin(se)*de,w.lineTo(we,Se),se+=x,we=A.x+Math.cos(se)*ve,Se=A.y+Math.sin(se)*ve,w.lineTo(we,Se),se+=x;else w.moveTo(Math.floor(A.x),Math.floor(A.y)),w.lineTo(Math.floor(A.wobbleX),Math.floor(H)),w.lineTo(Math.floor(K),Math.floor(re)),w.lineTo(Math.floor(N),Math.floor(A.wobbleY));return w.closePath(),w.fill(),A.tick<A.totalTicks}function ie(w,A,k,N,H){var K=A.slice(),re=w.getContext("2d"),Z,ce,me=l(function(Q){function ee(){Z=ce=null,re.clearRect(0,0,N.width,N.height),u.clear(),H(),Q()}function U(){n&&!(N.width===i.width&&N.height===i.height)&&(N.width=w.width=i.width,N.height=w.height=i.height),!N.width&&!N.height&&(k(w),N.width=w.width,N.height=w.height),re.clearRect(0,0,N.width,N.height),K=K.filter(function(De){return X(re,De)}),K.length?Z=h.frame(U):ee()}Z=h.frame(U),ce=ee});return{addFettis:function(Q){return K=K.concat(Q),me},canvas:w,promise:me,reset:function(){Z&&h.cancel(Z),ce&&ce()}}}function D(w,A){var k=!w,N=!!m(A||{},"resize"),H=!1,K=m(A,"disableForReducedMotion",Boolean),re=r&&!!m(A||{},"useWorker"),Z=re?d():null,ce=k?R:O,me=w&&Z?!!w.__confetti_initialized:!1,Q=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ee;function U(se,ve,de){for(var we=m(se,"particleCount",f),Se=m(se,"angle",Number),T=m(se,"spread",Number),x=m(se,"startVelocity",Number),G=m(se,"decay",Number),ae=m(se,"gravity",Number),ne=m(se,"drift",Number),oe=m(se,"colors",E),ye=m(se,"ticks",Number),ue=m(se,"shapes"),xe=m(se,"scalar"),be=!!m(se,"flat"),Ue=C(se),te=we,Ye=[],ze=w.width*Ue.x,Le=w.height*Ue.y;te--;)Ye.push(z({x:ze,y:Le,angle:Se,spread:T,startVelocity:x,color:oe[te%oe.length],shape:ue[y(0,ue.length)],ticks:ye,decay:G,gravity:ae,drift:ne,scalar:xe,flat:be}));return ee?ee.addFettis(Ye):(ee=ie(w,Ye,ce,ve,de),ee.promise)}function De(se){var ve=K||m(se,"disableForReducedMotion",Boolean),de=m(se,"zIndex",Number);if(ve&&Q)return l(function(x){x()});k&&ee?w=ee.canvas:k&&!w&&(w=M(de),document.body.appendChild(w)),N&&!me&&ce(w);var we={width:w.width,height:w.height};Z&&!me&&Z.init(w),me=!0,Z&&(w.__confetti_initialized=!0);function Se(){if(Z){var x={getBoundingClientRect:function(){if(!k)return w.getBoundingClientRect()}};ce(x),Z.postMessage({resize:{width:x.width,height:x.height}});return}we.width=we.height=null}function T(){ee=null,N&&(H=!1,e.removeEventListener("resize",Se)),k&&w&&(document.body.contains(w)&&document.body.removeChild(w),w=null,me=!1)}return N&&!H&&(H=!0,e.addEventListener("resize",Se,!1)),Z?Z.fire(se,we,T):U(se,we,T)}return De.reset=function(){Z&&Z.reset(),ee&&ee.reset()},De}var B;function Y(){return B||(B=D(null,{useWorker:!0,resize:!0})),B}function $(w,A,k,N,H,K,re){var Z=new Path2D(w),ce=new Path2D;ce.addPath(Z,new DOMMatrix(A));var me=new Path2D;return me.addPath(ce,new DOMMatrix([Math.cos(re)*H,Math.sin(re)*H,-Math.sin(re)*K,Math.cos(re)*K,k,N])),me}function j(w){if(!a)throw new Error("path confetti are not supported in this browser");var A,k;typeof w=="string"?A=w:(A=w.path,k=w.matrix);var N=new Path2D(A),H=document.createElement("canvas"),K=H.getContext("2d");if(!k){for(var re=1e3,Z=re,ce=re,me=0,Q=0,ee,U,De=0;De<re;De+=2)for(var se=0;se<re;se+=2)K.isPointInPath(N,De,se,"nonzero")&&(Z=Math.min(Z,De),ce=Math.min(ce,se),me=Math.max(me,De),Q=Math.max(Q,se));ee=me-Z,U=Q-ce;var ve=10,de=Math.min(ve/ee,ve/U);k=[de,0,0,de,-Math.round(ee/2+Z)*de,-Math.round(U/2+ce)*de]}return{type:"path",path:A,matrix:k}}function J(w){var A,k=1,N="#000000",H='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof w=="string"?A=w:(A=w.text,k="scalar"in w?w.scalar:k,H="fontFamily"in w?w.fontFamily:H,N="color"in w?w.color:N);var K=10*k,re=""+K+"px "+H,Z=new OffscreenCanvas(K,K),ce=Z.getContext("2d");ce.font=re;var me=ce.measureText(A),Q=Math.ceil(me.actualBoundingBoxRight+me.actualBoundingBoxLeft),ee=Math.ceil(me.actualBoundingBoxAscent+me.actualBoundingBoxDescent),U=2,De=me.actualBoundingBoxLeft+U,se=me.actualBoundingBoxAscent+U;Q+=U+U,ee+=U+U,Z=new OffscreenCanvas(Q,ee),ce=Z.getContext("2d"),ce.font=re,ce.fillStyle=N,ce.fillText(A,De,se);var ve=1/k;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[ve,0,0,ve,-Q*ve/2,-ee*ve/2]}}t.exports=function(){return Y().apply(this,arguments)},t.exports.reset=function(){Y().reset()},t.exports.create=D,t.exports.shapeFromPath=j,t.exports.shapeFromText=J})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),vr,!1);const cp=vr.exports;vr.exports.create;class lp{constructor(){this.players=[],this.useAccomplice=!1,this.cardsCollected={A:!1,B:!1,C:!1,D:!1,E:!1},this.cardConfigs={A:{audioId:"Audio_300_Window",role:"반지하 창문 구역 목격자",shoes:"쇠가죽 워커",isWet:!1,audioDesc:'쇠 긁는 소리("서걱... 서걱...")와 함께 이어진 쇠창살 강타음("쾅! 탕!").'},B:{audioId:"Audio_310_Forest",role:"숲길 구역 목격자",shoes:"고무 장화",isWet:!1,audioDesc:'낙엽 위를 질질 끄는 불규칙한 고무 발소리("지익- 잘칵-")와 올빼미 소리.'},C:{audioId:"Audio_Master_Timeline",role:"사이비 처형자 (살인마)",shoes:"젖은 고무 슬리퍼",isWet:!0,audioDesc:'물가 튀김 소리("팍! 푸하악!")와 익사 질식음("꼬르륵... 읍..."), 옷자락 찢기는 소리("투두둑...").'},D:{audioId:"Audio_330_Stairs",role:"철제 계단 구역 목격자",shoes:"방말형 전투화",isWet:!1,audioDesc:'철제 계단을 성급하게 뒤어오르는 둔탁한 발걸음("캉! 캉! 캉!")과 바람소리.'},E:{audioId:"Audio_340_Entrance",role:"지하실 입구 구역 목격자",shoes:"가죽 단화",isWet:!1,audioDesc:'대리석 복도를 또각거리는 가죽 단화 굽 소리("또각... 또각...")와 묵직한 목재문 닫히는 잔향("쿵! 덜컹").'}}}reset(){this.cardsCollected={A:!1,B:!1,C:!1,D:!1,E:!1},this.players=[{id:0,name:"나 (플레이어)",isBot:!1,isKiller:!1,isAccomplice:!1,cardId:null,shoes:"",audioId:"",audioDesc:""},{id:1,name:"임형사 (AI)",isBot:!0,isKiller:!1,isAccomplice:!1,cardId:null,shoes:"",audioId:"",audioDesc:""},{id:2,name:"박기자 (AI)",isBot:!0,isKiller:!1,isAccomplice:!1,cardId:null,shoes:"",audioId:"",audioDesc:""},{id:3,name:"최학자 (AI)",isBot:!0,isKiller:!1,isAccomplice:!1,cardId:null,shoes:"",audioId:"",audioDesc:""},{id:4,name:"김요원 (AI)",isBot:!0,isKiller:!1,isAccomplice:!1,cardId:null,shoes:"",audioId:"",audioDesc:""}]}setupAccomplice(){const e=Math.floor(Math.random()*5);if(this.players[e].isKiller=!0,this.useAccomplice){let t;do t=Math.floor(Math.random()*5);while(t===e);this.players[t].isAccomplice=!0}}assignCardToPlayer(e,t){const n=this.players.find(r=>r.id===e);if(!n)return null;const i=this.cardConfigs[t];if(!i)return null;if(n.cardId=t,this.cardsCollected[t]=!0,n.isKiller){const r=this.cardConfigs.C;n.shoes=r.shoes,n.audioId=r.audioId,n.audioDesc=r.audioDesc,n.role=r.role,n.isWet=!0}else n.shoes=i.shoes,n.audioId=i.audioId,n.audioDesc=i.audioDesc,n.role=i.role,n.isWet=i.isWet;return{role:n.role,shoes:n.shoes,audioId:n.audioId,audioDesc:n.audioDesc,isWet:n.isWet}}simulateBotLooting(){const e=this.players.filter(r=>r.isBot&&!r.cardId);if(e.length===0)return null;const t=Object.keys(this.cardsCollected).filter(r=>!this.cardsCollected[r]);if(t.length===0)return null;const n=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return this.assignCardToPlayer(n.id,i),{playerId:n.id,playerName:n.name,cardId:i}}allCardsCollected(){return Object.values(this.cardsCollected).every(e=>e===!0)}getKiller(){return this.players.find(e=>e.isKiller)}getAccomplice(){return this.players.find(e=>e.isAccomplice)}}const $e=new lp;class hp{constructor(){this.ctx=null,this.activeNodes=[],this.isPlaying=!1,this.loopInterval=null,this.clueInterval=null,this.clueNodes=[],this.cluePlaying=!1,this.spatialSources={},this.reverbInput=null,this.reverbDryWet=null,this.heartbeatTimer=null,this.heartbeatBpm=72,this.isHeartbeatPlaying=!1,this.whisperPanner=null,this.whisperInterval=null,this.whisperAngle=0}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume(),this.reverbInput||this.buildFDNReverb()}buildFDNReverb(){const e=this.ctx;this.reverbInput=e.createGain(),this.reverbDryWet=e.createGain(),this.reverbDryWet.gain.setValueAtTime(.35,e.currentTime);const t=[.031,.047,.067,.089],n=[],i=[];for(let r=0;r<4;r++){const a=e.createDelay(.5);a.delayTime.setValueAtTime(t[r],e.currentTime);const o=e.createGain();o.gain.setValueAtTime(.48,e.currentTime),n.push(a),i.push(o)}for(let r=0;r<4;r++)this.reverbInput.connect(n[r]);for(let r=0;r<4;r++)n[r].connect(i[r]),i[r].connect(n[(r+1)%4]),i[r].connect(n[(r+2)%4]),i[r].connect(this.reverbDryWet);this.reverbDryWet.connect(e.destination),this.activeNodes.push(this.reverbInput,this.reverbDryWet,...n,...i)}createNoiseBuffer(){if(!this.ctx)return null;const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;return t}playFilteredNoise(e,t,n,i,r,a,o=null){const c=this.ctx,l=c.createBufferSource();l.buffer=this.createNoiseBuffer(),l.loop=!0;const u=c.createBiquadFilter();u.type="bandpass",u.Q.setValueAtTime(r,e),u.frequency.setValueAtTime(n,e),n!==i&&u.frequency.exponentialRampToValueAtTime(i,e+t);const h=c.createGain();h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(a,e+.05),h.gain.setValueAtTime(a,e+t-.05),h.gain.linearRampToValueAtTime(0,e+t),l.connect(u),u.connect(h),h.connect(o||c.destination),this.reverbInput&&o&&h.connect(this.reverbInput),l.start(e),l.stop(e+t),this.activeNodes.push(l,u,h)}startWind(){this.init();const e=this.ctx,t=e.createBufferSource();t.buffer=this.createNoiseBuffer(),t.loop=!0;const n=e.createBiquadFilter();n.type="bandpass",n.Q.setValueAtTime(3,e.currentTime);const i=e.createGain();i.gain.setValueAtTime(.08,e.currentTime),t.connect(n),n.connect(i),i.connect(e.destination),this.reverbInput&&i.connect(this.reverbInput),t.start(0),this.activeNodes.push(t,n,i);const r=()=>{if(!this.isPlaying&&this.activeNodes.indexOf(t)===-1)return;const a=e.currentTime,o=150+Math.random()*600,c=2+Math.random()*3;n.frequency.exponentialRampToValueAtTime(o,a+c),i.gain.linearRampToValueAtTime(.04+Math.random()*.08,a+c),setTimeout(r,c*1e3)};r()}synthScrape(e,t,n=.5,i=null){const r=this.ctx,a=r.createBufferSource();a.buffer=this.createNoiseBuffer(),a.loop=!0;const o=r.createBiquadFilter();o.type="bandpass",o.Q.setValueAtTime(12,e);const c=r.createBiquadFilter();c.type="highpass",c.frequency.setValueAtTime(1e3,e);const l=r.createGain();l.gain.setValueAtTime(0,e);const u=t/2;l.gain.linearRampToValueAtTime(n,e+.1),o.frequency.setValueAtTime(1200,e),o.frequency.linearRampToValueAtTime(1500,e+u-.1),l.gain.setValueAtTime(n,e+u-.1),l.gain.linearRampToValueAtTime(0,e+u);const h=e+u+.05;l.gain.linearRampToValueAtTime(n*.8,h+.1),o.frequency.setValueAtTime(1100,h),o.frequency.linearRampToValueAtTime(1300,e+t-.1),l.gain.setValueAtTime(n*.8,e+t-.1),l.gain.linearRampToValueAtTime(0,e+t),a.connect(c),c.connect(o),o.connect(l),l.connect(i||r.destination),this.reverbInput&&i&&l.connect(this.reverbInput),a.start(e),a.stop(e+t),this.activeNodes.push(a,o,c,l)}synthMetalSlam(e,t=1,n=null){const i=this.ctx,r=[110,185,290,420,750,1100,1800],a=[],o=i.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(t,e+.01),o.gain.exponentialRampToValueAtTime(.001,e+2.5);const c=i.createWaveShaper(),l=(p=20)=>{const g=typeof p=="number"?p:50,_=44100,m=new Float32Array(_),f=Math.PI/180;for(let y=0;y<_;++y){const v=y*2/_-1;m[y]=(3+g)*v*20*f/(Math.PI+g*Math.abs(v))}return m};c.curve=l(35),c.oversample="4x";const u=i.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(350,e),u.Q.setValueAtTime(1.5,e),r.forEach((p,g)=>{const _=i.createOscillator();_.type=g%2===0?"sawtooth":"triangle",_.frequency.setValueAtTime(p,e);const m=i.createGain(),f=2/(g+1);m.gain.setValueAtTime(.15,e),m.gain.exponentialRampToValueAtTime(.001,e+f),_.connect(m),m.connect(c),a.push(_)});const h=i.createBufferSource();h.buffer=this.createNoiseBuffer();const d=i.createGain();d.gain.setValueAtTime(t*.7,e),d.gain.exponentialRampToValueAtTime(.001,e+.15),h.connect(d),d.connect(o),c.connect(u),u.connect(o),o.connect(n||i.destination),this.reverbInput&&n&&o.connect(this.reverbInput),a.forEach(p=>p.start(e)),h.start(e),a.forEach(p=>p.stop(e+2.5)),h.stop(e+2.5),this.activeNodes.push(...a,h,o,c,u,d)}synthWoodFootstep(e,t=.5,n=null){const i=this.ctx,r=i.createBufferSource();r.buffer=this.createNoiseBuffer();const a=i.createGain(),o=i.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(250,e),o.frequency.linearRampToValueAtTime(150,e+.4),a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(t*.5,e+.1),a.gain.linearRampToValueAtTime(0,e+.4),r.connect(o),o.connect(a),a.connect(n||i.destination),this.reverbInput&&n&&a.connect(this.reverbInput),r.start(e),r.stop(e+.4);const c=i.createOscillator();c.type="triangle",c.frequency.setValueAtTime(450,e+.15),c.frequency.exponentialRampToValueAtTime(280,e+.35);const l=i.createGain();l.gain.setValueAtTime(0,e),l.gain.setValueAtTime(t*.4,e+.15),l.gain.exponentialRampToValueAtTime(.001,e+.4);const u=i.createBiquadFilter();u.type="bandpass",u.Q.setValueAtTime(4,e),u.frequency.setValueAtTime(350,e),c.connect(u),u.connect(l),l.connect(n||i.destination),this.reverbInput&&n&&l.connect(this.reverbInput),c.start(e+.15),c.stop(e+.4),this.activeNodes.push(r,a,o,c,l,u)}synthMetalStep(e,t=.6,n=null){const i=this.ctx,r=i.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(240,e),r.frequency.exponentialRampToValueAtTime(80,e+.25);const a=i.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(450,e),a.Q.setValueAtTime(3,e);const o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(620,e);const c=i.createGain();c.gain.setValueAtTime(t*.3,e),c.gain.exponentialRampToValueAtTime(.001,e+.35);const l=i.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.3);const u=i.createBufferSource();u.buffer=this.createNoiseBuffer();const h=i.createBiquadFilter();h.type="highpass",h.frequency.setValueAtTime(800,e);const d=i.createGain();d.gain.setValueAtTime(t*.4,e),d.gain.exponentialRampToValueAtTime(.001,e+.05),r.connect(a),a.connect(l),o.connect(c),c.connect(l),u.connect(h),h.connect(d),d.connect(l),l.connect(n||i.destination),this.reverbInput&&n&&l.connect(this.reverbInput),r.start(e),o.start(e),u.start(e),r.stop(e+.4),o.stop(e+.4),u.stop(e+.4),this.activeNodes.push(r,a,o,c,l,u,h,d)}synthLeatherHeelsStep(e,t=.58,n=null){const i=this.ctx,r=i.createOscillator();r.type="sine",r.frequency.setValueAtTime(950,e),r.frequency.exponentialRampToValueAtTime(320,e+.08);const a=i.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.09);const o=i.createOscillator();o.type="triangle",o.frequency.setValueAtTime(140,e),o.frequency.linearRampToValueAtTime(70,e+.16);const c=i.createGain();c.gain.setValueAtTime(t*.6,e),c.gain.exponentialRampToValueAtTime(.001,e+.18),r.connect(a),o.connect(c),a.connect(n||i.destination),c.connect(n||i.destination),this.reverbInput&&n&&(a.connect(this.reverbInput),c.connect(this.reverbInput)),r.start(e),o.start(e),r.stop(e+.15),o.stop(e+.22),this.activeNodes.push(r,a,o,c)}synthHeavyThud(e,t=1,n=null){const i=this.ctx,r=i.createOscillator();r.type="sine",r.frequency.setValueAtTime(75,e),r.frequency.exponentialRampToValueAtTime(35,e+.4);const a=i.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.5);const o=i.createBufferSource();o.buffer=this.createNoiseBuffer();const c=i.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(100,e);const l=i.createGain();l.gain.setValueAtTime(t*.6,e),l.gain.exponentialRampToValueAtTime(.001,e+.35),r.connect(a),o.connect(c),c.connect(l),l.connect(a),a.connect(n||i.destination),this.reverbInput&&n&&a.connect(this.reverbInput),r.start(e),o.start(e),r.stop(e+.6),o.stop(e+.6),this.activeNodes.push(r,a,o,c,l)}synthSplash(e,t=1,n=null){const i=this.ctx,r=i.createBufferSource();r.buffer=this.createNoiseBuffer();const a=i.createBiquadFilter();a.type="bandpass",a.Q.setValueAtTime(1.5,e),a.frequency.setValueAtTime(800,e),a.frequency.exponentialRampToValueAtTime(200,e+1.2);const o=i.createBiquadFilter();o.type="highpass",o.frequency.setValueAtTime(250,e);const c=i.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t,e+.05),c.gain.exponentialRampToValueAtTime(.001,e+1.5),r.connect(o),o.connect(a),a.connect(c),c.connect(n||i.destination),this.reverbInput&&n&&c.connect(this.reverbInput),r.start(e),r.stop(e+1.5),this.activeNodes.push(r,a,o,c)}synthBubbles(e,t,n=.6,i=null){const r=this.ctx,a=e+t;let o=e;for(;o<a-.15;){const h=r.createOscillator();h.type="sine";const d=150+Math.random()*200,p=d+180+Math.random()*120,g=.08+Math.random()*.07;h.frequency.setValueAtTime(d,o),h.frequency.exponentialRampToValueAtTime(p,o+g);const _=r.createGain();_.gain.setValueAtTime(0,o),_.gain.linearRampToValueAtTime(n*.4,o+.02),_.gain.exponentialRampToValueAtTime(.001,o+g),h.connect(_),_.connect(i||r.destination),this.reverbInput&&i&&_.connect(this.reverbInput),h.start(o),h.stop(o+g),this.activeNodes.push(h,_),o+=.04+Math.random()*.05}const c=r.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(75,e);const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(140,e);const u=r.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(n*.3,e+.1),u.gain.exponentialRampToValueAtTime(.001,a),c.connect(l),l.connect(u),u.connect(i||r.destination),this.reverbInput&&i&&u.connect(this.reverbInput),c.start(e),c.stop(a),this.activeNodes.push(c,l,u)}synthButtons(e,t=.5,n=null){const i=this.ctx,r=.08,a=4;for(let h=0;h<a;h++){const d=e+h*r,p=i.createOscillator();p.type="sine",p.frequency.setValueAtTime(400-h*50,d);const g=i.createGain();g.gain.setValueAtTime(t*.6,d),g.gain.exponentialRampToValueAtTime(.001,d+.04),p.connect(g),g.connect(n||i.destination),this.reverbInput&&n&&g.connect(this.reverbInput),p.start(d),p.stop(d+.05),this.activeNodes.push(p,g)}const o=e+a*r+.05,c=i.createOscillator(),l=i.createOscillator();c.type="sine",c.frequency.setValueAtTime(2500,o),l.type="sine",l.frequency.setValueAtTime(3200,o);const u=i.createGain();u.gain.setValueAtTime(0,o),u.gain.linearRampToValueAtTime(t*.7,o+.005),u.gain.exponentialRampToValueAtTime(.001,o+1.2),c.connect(u),l.connect(u),u.connect(n||i.destination),this.reverbInput&&n&&u.connect(this.reverbInput),c.start(o),l.start(o),c.stop(o+1.25),l.stop(o+1.25),this.activeNodes.push(c,l,u)}playWindowLoop(e=.5,t=null){this.init(),t?this.isPlaying=!0:(this.stopClue(),this.cluePlaying=!0);const n=()=>{const r=this.ctx.currentTime,a=this.activeNodes.length;if(this.synthScrape(r,1.2,e*.7,t),this.synthScrape(r+1.8,1.2,e*.7,t),this.synthMetalSlam(r+3.8,e,t),!t){const o=this.activeNodes.splice(a);this.clueNodes.push(...o)}};n();const i=setInterval(()=>{(!t&&this.cluePlaying||t&&this.isPlaying)&&n()},8e3);return t||(this.clueInterval=i),i}playForestLoop(e=.5,t=null){this.init(),t?this.isPlaying=!0:(this.stopClue(),this.cluePlaying=!0);const n=()=>{const r=this.ctx.currentTime,a=this.activeNodes.length;if(this.synthWoodFootstep(r,e,t),this.synthWoodFootstep(r+.9,e*.9,t),this.synthWoodFootstep(r+2,e,t),this.synthWoodFootstep(r+2.9,e*.95,t),!t){const o=this.activeNodes.splice(a);this.clueNodes.push(...o)}};n();const i=setInterval(()=>{(!t&&this.cluePlaying||t&&this.isPlaying)&&n()},6e3);return t||(this.clueInterval=i),i}playStairsLoop(e=.5,t=null){this.init(),t?this.isPlaying=!0:(this.stopClue(),this.cluePlaying=!0);const n=()=>{const r=this.ctx.currentTime,a=this.activeNodes.length;if(this.synthMetalStep(r,e,t),this.synthMetalStep(r+.25,e*.95,t),this.synthMetalStep(r+.5,e,t),this.synthMetalStep(r+.75,e*.9,t),this.synthMetalStep(r+1,e*.95,t),this.synthMetalStep(r+1.25,e,t),this.synthHeavyThud(r+1.8,e*1.2,t),!t){const o=this.activeNodes.splice(a);this.clueNodes.push(...o)}};n();const i=setInterval(()=>{(!t&&this.cluePlaying||t&&this.isPlaying)&&n()},7e3);return t||(this.clueInterval=i),i}playEntranceLoop(e=.5,t=null){this.init(),t?this.isPlaying=!0:(this.stopClue(),this.cluePlaying=!0);const n=()=>{const r=this.ctx.currentTime,a=this.activeNodes.length;if(this.synthLeatherHeelsStep(r,e,t),this.synthLeatherHeelsStep(r+.8,e*.9,t),this.synthLeatherHeelsStep(r+1.6,e,t),this.synthHeavyThud(r+2.8,e*1.25,t),!t){const o=this.activeNodes.splice(a);this.clueNodes.push(...o)}};n();const i=setInterval(()=>{(!t&&this.cluePlaying||t&&this.isPlaying)&&n()},5500);return t||(this.clueInterval=i),i}playMasterTimeline(e=.5,t=null){this.init(),t?this.isPlaying=!0:(this.stopClue(),this.cluePlaying=!0);const n=()=>{const r=this.ctx.currentTime,a=this.activeNodes.length;if(this.synthScrape(r,1,e*.5,t),this.synthScrape(r+1.2,1,e*.5,t),this.synthMetalSlam(r+2.6,e*.7,t),this.synthWoodFootstep(r+4,e*.7,t),this.synthWoodFootstep(r+4.8,e*.6,t),this.synthWoodFootstep(r+5.8,e*.7,t),this.synthSplash(r+7.5,e*1.1,t),this.synthBubbles(r+8.2,3.8,e*.9,t),this.synthButtons(r+10,e*.85,t),this.synthMetalStep(r+13,e*.85,t),this.synthMetalStep(r+13.8,e*.8,t),this.synthMetalStep(r+14.8,e*.75,t),this.synthMetalStep(r+15.8,e*.7,t),this.synthHeavyThud(r+16.8,e*.8,t),this.synthLeatherHeelsStep(r+18,e*.8,t),this.synthLeatherHeelsStep(r+18.8,e*.8,t),!t){const o=this.activeNodes.splice(a);this.clueNodes.push(...o)}};n();const i=setInterval(()=>{(!t&&this.cluePlaying||t&&this.isPlaying)&&n()},21e3);return t||(this.clueInterval=i),i}createSpatialSource(e,t,n,i){this.init();const r=this.ctx,a=r.createPanner();a.panningModel="HRTF",a.distanceModel="inverse",a.refDistance=.8,a.maxDistance=25,a.rolloffFactor=2.4,a.positionX.setValueAtTime(t,r.currentTime),a.positionY.setValueAtTime(n,r.currentTime),a.positionZ.setValueAtTime(i,r.currentTime);let o=null;if(e==="A")o=this.playWindowLoop(.55,a);else if(e==="B")o=this.playForestLoop(.55,a);else if(e==="D")o=this.playStairsLoop(.55,a);else if(e==="E")o=this.playEntranceLoop(.55,a);else if(e==="C"){const c=()=>{const l=r.currentTime;this.synthBubbles(l,2.5,.5,a),Math.random()<.3&&this.synthSplash(l+2.8,.6,a)};c(),o=setInterval(c,4500)}a.connect(r.destination),this.reverbInput&&a.connect(this.reverbInput),this.spatialSources[e]={panner:a,intervalId:o}}updateSpatialSourcePosition(e,t,n,i){const r=this.spatialSources[e];if(r&&r.panner){const a=this.ctx.currentTime;r.panner.positionX.setValueAtTime(t,a),r.panner.positionY.setValueAtTime(n,a),r.panner.positionZ.setValueAtTime(i,a)}}updateListener(e,t){if(!this.ctx)return;const n=this.ctx,i=n.listener,r=n.currentTime,a=new I(0,0,-1).applyQuaternion(t),o=new I(0,1,0).applyQuaternion(t);i.positionX?(i.positionX.setValueAtTime(e.x,r),i.positionY.setValueAtTime(e.y,r),i.positionZ.setValueAtTime(e.z,r),i.forwardX.setValueAtTime(a.x,r),i.forwardY.setValueAtTime(a.y,r),i.forwardZ.setValueAtTime(a.z,r),i.upX.setValueAtTime(o.x,r),i.upY.setValueAtTime(o.y,r),i.upZ.setValueAtTime(o.z,r)):(i.setPosition(e.x,e.y,e.z),i.setOrientation(a.x,a.y,a.z,o.x,o.y,o.z))}removeSpatialSource(e){const t=this.spatialSources[e];if(t){clearInterval(t.intervalId);try{t.panner.disconnect()}catch{}delete this.spatialSources[e]}}playScanSuccessBeep(){this.init();const e=this.ctx,t=e.currentTime,n=i=>{const r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(950,i),r.frequency.exponentialRampToValueAtTime(1900,i+.12);const a=e.createGain();a.gain.setValueAtTime(.25,i),a.gain.exponentialRampToValueAtTime(.001,i+.15),r.connect(a),a.connect(e.destination),r.start(i),r.stop(i+.16)};n(t),n(t+.18)}playGlitchAudio(){this.init();const e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.createNoiseBuffer();const i=e.createBiquadFilter();i.type="peaking",i.frequency.setValueAtTime(2e3,t),i.Q.setValueAtTime(5,t);const r=e.createGain();r.gain.setValueAtTime(.3,t),r.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(i),i.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.4)}playJumpscareScream(){this.init();const e=this.ctx,t=e.currentTime,n=[880,1150,1550],i=[],r=e.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(1.8,t+.02),r.gain.exponentialRampToValueAtTime(.001,t+1.25);const a=e.createOscillator();a.frequency.setValueAtTime(45,t);const o=e.createGain();o.gain.setValueAtTime(320,t),a.connect(o);const c=e.createWaveShaper(),l=()=>{const g=new Float32Array(44100);for(let _=0;_<44100;++_){const m=_*2/44100-1;g[_]=Math.tanh(m*12)}return g};c.curve=l(),c.oversample="4x";const u=e.createBiquadFilter();u.type="highpass",u.frequency.setValueAtTime(600,t),n.forEach((p,g)=>{const _=e.createOscillator();_.type=g%2===0?"sawtooth":"sine",_.frequency.setValueAtTime(p,t),o.connect(_.frequency);const m=e.createGain();m.gain.setValueAtTime(.4,t),m.gain.exponentialRampToValueAtTime(.001,t+1.2),_.connect(m),m.connect(c),i.push(_)});const h=e.createBufferSource();h.buffer=this.createNoiseBuffer();const d=e.createGain();d.gain.setValueAtTime(.85,t),d.gain.exponentialRampToValueAtTime(.001,t+.7),h.connect(u),u.connect(d),d.connect(r),c.connect(r),r.connect(e.destination),this.reverbInput&&r.connect(this.reverbInput),a.start(t),i.forEach(p=>p.start(t)),h.start(t),a.stop(t+1.3),i.forEach(p=>p.stop(t+1.3)),h.stop(t+1.3),this.activeNodes.push(a,o,c,u,...i,h,d,r)}startHeartbeatLoop(){if(this.init(),this.isHeartbeatPlaying)return;this.isHeartbeatPlaying=!0;const e=()=>{if(!this.isHeartbeatPlaying)return;const t=this.ctx.currentTime,n=this.heartbeatBpm,i=(a,o)=>{const c=this.ctx.createOscillator();c.type="sine",c.frequency.setValueAtTime(55,a),c.frequency.exponentialRampToValueAtTime(.01,a+.16);const l=this.ctx.createGain();l.gain.setValueAtTime(o*.85,a),l.gain.exponentialRampToValueAtTime(.001,a+.15);const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(90,a),c.connect(u),u.connect(l),l.connect(this.ctx.destination),c.start(a),c.stop(a+.18),this.activeNodes.push(c,l,u)};i(t,.7),i(t+.16,.55);const r=60/n;this.heartbeatTimer=setTimeout(e,r*1e3)};e()}updateHeartbeatBPM(e){this.heartbeatBpm=Math.max(50,Math.min(e,180))}stopHeartbeatLoop(){this.isHeartbeatPlaying=!1,this.heartbeatTimer&&(clearTimeout(this.heartbeatTimer),this.heartbeatTimer=null)}startHorrorWhispers(){if(this.init(),this.whisperInterval)return;const e=this.ctx;this.whisperPanner=e.createPanner(),this.whisperPanner.panningModel="HRTF",this.whisperPanner.distanceModel="inverse",this.whisperPanner.connect(e.destination),this.reverbInput&&this.whisperPanner.connect(this.reverbInput),this.whisperAngle=0;const t=()=>{const n=e.currentTime,i=e.createOscillator();i.type="triangle",i.frequency.setValueAtTime(180,n),i.frequency.exponentialRampToValueAtTime(900+Math.random()*400,n+1.2);const r=e.createBiquadFilter();r.type="bandpass",r.Q.setValueAtTime(15,n),r.frequency.setValueAtTime(300,n),r.frequency.exponentialRampToValueAtTime(700,n+1.2);const a=e.createBufferSource();a.buffer=this.createNoiseBuffer();const o=e.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.09,n+.2),o.gain.exponentialRampToValueAtTime(.001,n+1.5),i.connect(r),a.connect(r),r.connect(o),o.connect(this.whisperPanner),i.start(n),a.start(n),i.stop(n+1.6),a.stop(n+1.6),this.activeNodes.push(i,a,r,o)};this.whisperInterval=setInterval(()=>{this.whisperAngle+=.14;const n=3.2,i=Math.sin(this.whisperAngle)*n,r=Math.cos(this.whisperAngle)*n,a=Math.sin(this.whisperAngle*.4)*2.2;this.whisperPanner.positionX.setValueAtTime(i,e.currentTime),this.whisperPanner.positionY.setValueAtTime(a,e.currentTime),this.whisperPanner.positionZ.setValueAtTime(r,e.currentTime),Math.random()<.28&&t()},150)}stopHorrorWhispers(){if(this.whisperInterval&&(clearInterval(this.whisperInterval),this.whisperInterval=null),this.whisperPanner){try{this.whisperPanner.disconnect()}catch{}this.whisperPanner=null}}stop(){this.isPlaying=!1,this.stopHeartbeatLoop(),this.stopHorrorWhispers(),this.loopInterval&&(clearInterval(this.loopInterval),this.loopInterval=null),this.activeNodes.forEach(e=>{try{e.stop()}catch{}try{e.disconnect()}catch{}}),this.activeNodes=[],this.reverbInput&&this.activeNodes.push(this.reverbInput,this.reverbDryWet)}stopClue(){this.cluePlaying=!1,this.clueInterval&&(clearInterval(this.clueInterval),this.clueInterval=null),this.clueNodes.forEach(e=>{try{e.stop()}catch{}try{e.disconnect()}catch{}}),this.clueNodes=[]}stopAllSpatial(){Object.keys(this.spatialSources).forEach(e=>this.removeSpatialSource(e)),this.spatialSources={}}async renderWavFile(e){this.init();const t=this.ctx,n=this.reverbInput;let i=6;e==="A"?i=5:e==="B"?i=4:e==="C"?i=20:e==="D"?i=3:e==="E"&&(i=4);const r=44100,a=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,r*i,r);this.ctx=a,this.reverbInput=null,e==="A"?(this.synthScrape(0,1.2,.7*.7,a.destination),this.synthScrape(1.8,1.2,.7*.7,a.destination),this.synthMetalSlam(3.8,.7,a.destination)):e==="B"?(this.synthWoodFootstep(0,.5,a.destination),this.synthWoodFootstep(.9,.5*.9,a.destination),this.synthWoodFootstep(2,.5,a.destination),this.synthWoodFootstep(2.9,.5*.95,a.destination)):e==="C"?(this.synthScrape(0,1,.5*.5,a.destination),this.synthScrape(1.2,1,.5*.5,a.destination),this.synthMetalSlam(2.6,.5*.7,a.destination),this.synthWoodFootstep(4,.5*.7,a.destination),this.synthWoodFootstep(4.8,.5*.6,a.destination),this.synthWoodFootstep(5.8,.5*.7,a.destination),this.synthSplash(7.5,.5*1.1,a.destination),this.synthBubbles(8.2,3.8,.5*.9,a.destination),this.synthButtons(10,.5*.85,a.destination),this.synthMetalStep(13,.5*.85,a.destination),this.synthMetalStep(13.8,.5*.8,a.destination),this.synthMetalStep(14.8,.5*.75,a.destination),this.synthMetalStep(15.8,.5*.7,a.destination),this.synthHeavyThud(16.8,.5*.8,a.destination),this.synthLeatherHeelsStep(18,.5*.8,a.destination),this.synthLeatherHeelsStep(18.8,.5*.8,a.destination)):e==="D"?(this.synthMetalStep(0,.5,a.destination),this.synthMetalStep(.25,.5*.95,a.destination),this.synthMetalStep(.5,.5,a.destination),this.synthMetalStep(.75,.5*.9,a.destination),this.synthMetalStep(1,.5*.95,a.destination),this.synthMetalStep(1.25,.5,a.destination),this.synthHeavyThud(1.8,.5*1.2,a.destination)):e==="E"&&(this.synthLeatherHeelsStep(0,.5,a.destination),this.synthLeatherHeelsStep(.8,.5*.9,a.destination),this.synthLeatherHeelsStep(1.6,.5,a.destination),this.synthHeavyThud(2.8,.5*1.25,a.destination));const o=await a.startRendering();return this.ctx=t,this.reverbInput=n,this.bufferToWav(o)}bufferToWav(e){const t=e.numberOfChannels,n=e.sampleRate,i=1,r=16,a=e.getChannelData(0),o=new ArrayBuffer(44+a.length*2),c=new DataView(o);this.writeString(c,0,"RIFF"),c.setUint32(4,36+a.length*2,!0),this.writeString(c,8,"WAVE"),this.writeString(c,12,"fmt "),c.setUint32(16,16,!0),c.setUint16(20,i,!0),c.setUint16(22,t,!0),c.setUint32(24,n,!0),c.setUint32(28,n*t*(r/8),!0),c.setUint16(32,t*(r/8),!0),c.setUint16(34,r,!0),this.writeString(c,36,"data"),c.setUint32(40,a.length*2,!0);let l=44;for(let u=0;u<a.length;u++,l+=2){const h=Math.max(-1,Math.min(1,a[u]));c.setInt16(l,h<0?h*32768:h*32767,!0)}return o}writeString(e,t,n){for(let i=0;i<n.length;i++)e.setUint8(t+i,n.charCodeAt(i))}playCameraShutterSound(){this.init();const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="triangle",n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(120,t+.1);const i=e.createGain();i.gain.setValueAtTime(.25,t),i.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.12);const r=e.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(150,t);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1e3,t),a.Q.setValueAtTime(3,t);const o=e.createGain();o.gain.setValueAtTime(.12,t+.02),o.gain.exponentialRampToValueAtTime(.001,t+.08),r.connect(a),a.connect(o),o.connect(e.destination),r.start(t+.02),r.stop(t+.09)}}const Re=new hp;class up{constructor(e,t,n){this.canvas=document.getElementById(e),this.onCardHover=t,this.onCardInteract=n,this.scene=null,this.camera=null,this.renderer=null,this.vhsScene=null,this.vhsCamera=null,this.vhsTarget=null,this.vhsMaterial=null,this.inspectMesh=null,this.keys={w:!1,a:!1,s:!1,d:!1,arrowup:!1,arrowdown:!1,arrowleft:!1,arrowright:!1},this.moveSpeed=5.6,this.velocity=new I,this.yaw=0,this.pitch=0,this.isLocked=!1,this.yVelocity=0,this.isJumping=!1,this.gravity=18,this.jumpStrength=6.8,this.defaultPlayerHeight=1.6,this.handGroup=null,this.lastYaw=0,this.lastPitch=0,this.handBobTimer=0,this.ghostGroup=null,this.jumpscareActive=!1,this.jumpscareTime=0,this.jumpscareTriggeredOnce=!1,this.flashlight=null,this.ambientLight=null,this.loungeLights=[],this.flashlightOn=!0,this.cards=[],this.chairs=[],this.arModeActive=!1,this.terrainMeshes=[],this.wetParticleSystem=null,this.isWetShaderActive=!1,this.stressLevel=0,this.clock=new ap,this.init(),this.buildMap(),this.createFirstPersonHand(),this.createJumpscareGhost(),this.createSpatialHUD(),this.setupVRControllers(),this.setupControls(),this.setupGyroControls(),this.animate()}init(){const e=window.innerWidth,t=window.innerHeight;this.scene=new Wa,this.scene.fog=new fr(198661,.025),this.camera=new Pt(65,e/t,.1,100),this.camera.position.set(0,1.6,0),this.renderer=new Oo({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ro,this.renderer.xr.enabled=!0,this.vhsTarget=new vn(e,t,{minFilter:Ct,magFilter:Ct,format:Gt}),this.vhsScene=new Wa,this.vhsCamera=new Po(-1,1,1,-1,0,1),this.vhsMaterial=new xn({uniforms:{tDiffuse:{value:this.vhsTarget.texture},uTime:{value:0},uResolution:{value:new Oe(e,t)},uGlitchIntensity:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform float uGlitchIntensity;
        varying vec2 vUv;

        float rand(vec2 co) {
          return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 uv = vUv;

          float glitch = sin(uv.y * 10.0 + uTime * 5.0) * 0.001 * uGlitchIntensity;
          glitch += (rand(vec2(uTime, uv.y)) - 0.5) * 0.005 * uGlitchIntensity;
          
          float shift = 0.003 + sin(uTime * 2.0) * 0.001 + (uGlitchIntensity * 0.01);
          float r = texture2D(tDiffuse, vec2(uv.x - shift + glitch, uv.y)).r;
          float g = texture2D(tDiffuse, vec2(uv.x + glitch, uv.y)).g;
          float b = texture2D(tDiffuse, vec2(uv.x + shift + glitch, uv.y)).b;

          vec3 color = vec3(r, g, b);

          float scanline = sin(uv.y * uResolution.y * 1.5) * 0.08;
          color -= scanline;

          float noise = (rand(uv + uTime) - 0.5) * 0.06;
          color += noise;

          // Standard vignette bypassed slightly in AR to prevent masking real-world cam feed
          float dist = distance(uv, vec2(0.5, 0.5));
          color *= mix(smoothstep(0.9, 0.35, dist), 1.0, 0.15);

          color = mix(color, vec3(color.r * 1.1, color.g * 0.95, color.b * 0.8), 0.3);

          gl_FragColor = vec4(color, 1.0);
        }
      `});const n=new ge(new ni(2,2),this.vhsMaterial);this.vhsScene.add(n),this.ambientLight=new rp(659467,.55),this.scene.add(this.ambientLight),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.vhsTarget.setSize(e,t),this.vhsMaterial.uniforms.uResolution.value.set(e,t)}createFirstPersonHand(){this.handGroup=new Wt,this.handGroup.position.set(-.35,-.38,-.55);const e=new mt(.08,.09,.65,6),t=new je({color:3622735,roughness:.95}),n=new ge(e,t);n.rotation.x=Math.PI/2.2,n.position.set(-.05,-.1,.15),n.castShadow=!0,this.handGroup.add(n);const i=new qe(.12,.13,.13),r=new je({color:1710618,roughness:.7,metalness:.1}),a=new ge(i,r);a.position.set(-.03,-.02,-.15),a.castShadow=!0,this.handGroup.add(a);const o=new Wt,c=new mt(.03,.03,.35,8),l=new je({color:1184789,roughness:.4,metalness:.8}),u=new ge(c,l);u.rotation.x=Math.PI/2,u.castShadow=!0,o.add(u);const h=new mt(.045,.03,.08,8),d=new ge(h,l);d.rotation.x=Math.PI/2,d.position.z=-.2,d.castShadow=!0,o.add(d);const p=new qe(.012,.015,.025),g=new yt({color:16755200}),_=new ge(p,g);_.position.set(0,.035,-.05),o.add(_);const m=new mt(.045,2.8,14,16,1,!0),f=new yt({color:16777215,transparent:!0,opacity:.14,depthWrite:!1,side:Bt,blending:_i}),y=new ge(m,f);y.rotation.x=Math.PI/2,y.position.set(0,0,-7.1),o.add(y),this.volumetricCone=y,o.position.set(-.01,.03,-.22),this.handGroup.add(o),this.flashlight=new ip(16777215,4.5,22,Math.PI/7,.5,1.2),this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.width=1024,this.flashlight.shadow.mapSize.height=1024,this.flashlight.shadow.bias=-.0015,this.flashlight.position.set(0,0,-.24),this.flashlight.target.position.set(0,0,-10),o.add(this.flashlight),o.add(this.flashlight.target),this.camera.add(this.handGroup),this.scene.add(this.camera)}createJumpscareGhost(){this.ghostGroup=new Wt,this.ghostGroup.position.set(0,0,-.45),this.ghostGroup.visible=!1;const e=new rs(.18,0),t=new yt({color:14737632,wireframe:!1}),n=new ge(e,t);this.ghostGroup.add(n);const i=new as(.022,5,5),r=new yt({color:16711680}),a=new ge(i,r);a.position.set(-.065,.045,.14);const o=new ge(i,r);o.position.set(.065,.045,.14),this.ghostGroup.add(a,o);const c=new qe(.12,.04,.03),l=new yt({color:458752}),u=new ge(c,l);u.position.set(0,-.06,.14),this.ghostGroup.add(u);const h=new yt({color:986123});for(let d=0;d<6;d++){const p=new ge(new qe(.02,.18,.02),h);p.position.set(-.12+Math.random()*.24,.1,-.05+Math.random()*.1),p.rotation.set(Math.random()*.5,Math.random()*.5,Math.random()*.5),this.ghostGroup.add(p)}for(let d=-.05;d<=.05;d+=.025){const p=new mt(.005,.005,.035,4),g=new yt({color:7996677}),_=new ge(p,g);_.position.set(d,-.075,.15),_.rotation.x=Math.PI/2.2,this.ghostGroup.add(_)}this.camera.add(this.ghostGroup)}triggerJumpscare(){if(this.jumpscareTriggeredOnce)return;this.jumpscareTriggeredOnce=!0,this.jumpscareActive=!0,this.jumpscareTime=0,this.ghostGroup.visible=!0,Re.playJumpscareScream(),this.spikeGlitch(15);let e=0;const t=setInterval(()=>{if(e<12){const n=e%2===0;this.flashlight.intensity=n?9.5:0,this.volumetricCone.visible=n,e++}else{clearInterval(t),this.jumpscareActive=!1,this.ghostGroup.visible=!1,this.flashlight.intensity=0,this.volumetricCone.visible=!1;let n=0;const i=setInterval(()=>{n+=.05,n>=2?(clearInterval(i),this.flashlight.intensity=4.5,this.volumetricCone.visible=!0):(this.flashlight.intensity=n/2*4.5,this.volumetricCone.visible=Math.random()<n/2)},50)}},100)}buildMap(){const e=new ni(100,100),t=new je({color:2370085,roughness:.68,metalness:.15}),n=new ge(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n),this.terrainMeshes.push(n);const i=new op(100,50,3800852,1326108);i.position.y=.015,i.material.opacity=.28,i.material.transparent=!0,this.scene.add(i),this.terrainMeshes.push(i);const r=this.createWall(0,0,-25,50,10,!0),a=this.createWall(0,0,25,50,10,!0),o=this.createWall(-25,0,0,50,10,!1),c=this.createWall(25,0,0,50,10,!1);this.terrainMeshes.push(r,a,o,c);const l=new qe(50,.3,.3),u=new je({color:1844255,roughness:.9}),h=new ge(l,u);h.position.set(0,5,-24.8);const d=new ge(l,u);d.position.set(0,5,24.8);const p=new qe(.3,.3,50),g=new ge(p,u);g.position.set(-24.8,5,0);const _=new ge(p,u);_.position.set(24.8,5,0),this.scene.add(h,d,g,_),this.terrainMeshes.push(h,d,g,_);const m=2.4,f=[0,Math.PI*.4,Math.PI*.8,Math.PI*1.2,Math.PI*1.6],y=[1783076,1320987,2243624,1716256,2043418];f.forEach((Q,ee)=>{const U=new Wt,De=new ge(new qe(.7,.1,.7),new je({color:y[ee],roughness:.8,metalness:.3}));De.position.y=.45,De.castShadow=!0,De.receiveShadow=!0,U.add(De);const se=new ge(new qe(.7,.6,.1),new je({color:y[ee],roughness:.8,metalness:.3}));se.position.set(0,.75,-.3),se.castShadow=!0,U.add(se);for(let we=-.3;we<=.3;we+=.6)for(let Se=-.3;Se<=.3;Se+=.6){const T=new ge(new mt(.03,.03,.45),new je({color:1118481,roughness:.5}));T.position.set(we,.225,Se),T.castShadow=!0,U.add(T)}const ve=Math.cos(Q)*m,de=Math.sin(Q)*m;U.position.set(ve,0,de),U.rotation.y=-Q+Math.PI/2,this.scene.add(U),this.chairs.push({position:new I(ve,0,de),rotation:-Q+Math.PI/2})});const v=new ge(new mt(.9,.9,.75,12),new je({color:2964015,roughness:.9,metalness:.4}));v.position.y=.375,v.castShadow=!0,v.receiveShadow=!0,this.scene.add(v),this.terrainMeshes.push(v);const E=new Ks(16755268,1.2,8);E.position.set(0,2.5,0),this.scene.add(E),this.loungeLights.push(E);const P=new qe(1.2,6,1.2),C=new je({color:1975840,roughness:.95});[[-6,-6],[-6,6],[6,-6],[6,6]].forEach(Q=>{const ee=new ge(P,C);ee.position.set(Q[0],3,Q[1]),ee.castShadow=!0,ee.receiveShadow=!0,this.scene.add(ee),this.terrainMeshes.push(ee)});const O=new I(-15,0,-15),M=this.createWall(O.x-2,0,O.z,.2,4,!0),b=this.createWall(O.x+2,0,O.z,.2,4,!0);this.terrainMeshes.push(M,b);const z=new ge(new qe(3,1.5,.2),new je({color:659211,roughness:.9}));z.position.set(O.x,.75,O.z-3),this.scene.add(z),this.terrainMeshes.push(z);for(let Q=-1.2;Q<=1.2;Q+=.4){const ee=new ge(new mt(.04,.04,1.5),new je({color:4010797,metalness:.8,roughness:.7}));ee.position.set(O.x+Q,.75,O.z-3),ee.castShadow=!0,this.scene.add(ee),this.terrainMeshes.push(ee)}this.createQRCard("A",O.x-.7,2.4,O.z-2.85);const X=new I(-16,0,14),ie=new ge(new qe(4,.15,12),new je({color:1708555,roughness:.9,metalness:.1}));ie.position.set(X.x,.075,X.z),ie.receiveShadow=!0,this.scene.add(ie),this.terrainMeshes.push(ie);for(let Q=-5;Q<=5;Q+=2.5){const ee=new ge(new qe(.2,1.2,.2),new je({color:854277,roughness:.9}));ee.position.set(X.x+1.9,.6,X.z+Q),ee.castShadow=!0,this.scene.add(ee),this.terrainMeshes.push(ee)}for(let Q=0;Q<8;Q++){const ee=new Wt,U=new ge(new mt(.15,.25,3),new je({color:656642,roughness:.95}));U.position.y=1.5,ee.add(U);const De=new ge(new mr(1.2,4,5),new je({color:331270,roughness:.98}));De.position.y=4,De.castShadow=!0,ee.add(De);const se=X.x-3-Math.random()*3,ve=X.z-5+Math.random()*10;ee.position.set(se,0,ve),this.scene.add(ee),this.terrainMeshes.push(ee)}this.createQRCard("B",X.x+1.7,.1,X.z+2.6);const D=new I(15,0,15),B=new ge(new pr(2.5,8),new je({color:662029,roughness:.1,metalness:.9}));B.rotation.x=-Math.PI/2,B.position.set(D.x,.02,D.z),this.scene.add(B),this.terrainMeshes.push(B);const Y=9;let $=null;for(let Q=0;Q<Y;Q++){const ee=Q/Y*Math.PI*2,U=2.5+Math.random()*.4,De=.8+Math.random()*.7,se=.5+Math.random()*1.2,ve=.8+Math.random()*.7,de=new je({color:1448980,roughness:.9}),we=new ge(new rs(.7,0),de);we.scale.set(De,se,ve);const Se=D.x+Math.cos(ee)*U,T=D.z+Math.sin(ee)*U;we.position.set(Se,se*.3,T),we.rotation.set(Math.random(),Math.random(),Math.random()),we.castShadow=!0,we.receiveShadow=!0,this.scene.add(we),this.terrainMeshes.push(we),(!$||se>$.scale.y)&&($=we)}$?this.createQRCard("C",$.position.x-.25,-.2,$.position.z-.15):this.createQRCard("C",D.x+2,-.2,D.z+1);const j=new I(14,0,-14),J=2.2,w=10,A=.35,k=.45;for(let Q=0;Q<w;Q++){const ee=new ge(new qe(J,.05,k),new je({color:2039587,roughness:.8,metalness:.8}));ee.position.set(j.x,(Q+1)*A-.025,j.z-Q*k),ee.castShadow=!0,ee.receiveShadow=!0,this.scene.add(ee),this.terrainMeshes.push(ee)}for(let Q=-1;Q<=1;Q+=2){const ee=new ge(new qe(.08,.08,w*k*1.3),new je({color:986898,roughness:.6,metalness:.9}));ee.position.set(j.x+Q*(J/2+.05),w*A/2+.9,j.z-w*k/2+.3),ee.rotation.x=-Math.atan2(w*A,w*k),this.scene.add(ee),this.terrainMeshes.push(ee)}this.createQRCard("D",j.x-.3,.1,j.z-2*k);const N=new I(0,0,-21),H=new ge(new qe(2.2,3.2,.15),new je({color:2825751,roughness:.9,metalness:.2}));H.position.set(N.x,1.6,N.z),H.castShadow=!0,this.scene.add(H),this.terrainMeshes.push(H),this.createQRCard("E",N.x+.5,1.6,N.z+1.8);const K=new mt(.1,.5,30,4),re=new yt({color:329734}),Z=new ge(K,re);Z.position.set(10,15,-45),this.scene.add(Z),this.terrainMeshes.push(Z);const ce=new Ks(16711680,10,30);ce.position.set(10,30,-45),this.scene.add(ce);const me=new ge(new as(.6,6,6),new yt({color:16711680}));me.position.copy(ce.position),this.scene.add(me),this.terrainMeshes.push(me),this.redBeacon=ce}createWall(e,t,n,i,r,a){const o=new qe(i,r,.4),c=new je({color:2962992,roughness:.7,metalness:.2}),l=new ge(o,c);return l.position.set(e,t+r/2,n),a&&(l.rotation.y=Math.PI/2),l.receiveShadow=!0,l.castShadow=!0,this.scene.add(l),l}createQRCard(e,t,n,i){const r=new Wt,a=new ge(new qe(.3,.02,.45),new je({color:5123882,roughness:.9,metalness:.1}));a.castShadow=!0,r.add(a);const o=new ge(new qe(.12,.021,.12),new yt({color:5899525}));o.position.set(.06,.001,-.1),r.add(o);const c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.fillStyle="#020603",l.fillRect(0,0,256,256),l.strokeStyle="#39ff14",l.lineWidth=6,l.strokeRect(6,6,244,244),l.lineWidth=1.5,l.strokeRect(14,14,228,228),l.fillStyle="#39ff14",l.fillRect(20,28,20,3),l.fillRect(28,20,3,20),l.fillRect(216,28,20,3),l.fillRect(225,20,3,20),l.fillStyle="#39ff14",l.font='bold 13px "Courier New", Courier, monospace',l.textAlign="center",l.fillText("NAMSAN CAFE 1993",128,48),l.font='bold 11px "Courier New", Courier, monospace',l.fillText("RADIO CLUE DOSSIER",128,68),l.strokeStyle="#39ff14",l.lineWidth=2.5,l.strokeRect(68,85,120,68),l.beginPath(),l.arc(104,114,10,0,2*Math.PI),l.stroke(),l.beginPath(),l.arc(152,114,10,0,2*Math.PI),l.stroke(),l.beginPath(),l.moveTo(92,153),l.lineTo(102,137),l.lineTo(154,137),l.lineTo(164,153),l.closePath(),l.stroke(),l.fillStyle="#39ff14",l.font='bold 36px "Courier New", Courier, monospace',l.fillText(`ZONE ${e}`,128,202),l.font='bold 11px "Courier New", Courier, monospace',l.fillText(">> STATUS: SECURE <<",128,230);const u=new Ja(c);u.colorSpace=gt;const h=new je({map:u,emissive:new Xe(3800852),emissiveMap:u,emissiveIntensity:.85,roughness:.3,metalness:.4}),d=new ge(new qe(.24,.022,.24),h);d.position.set(0,.005,.05),r.add(d);const p=new Ks(3800852,.8,1.8);p.position.y=.2,r.add(p);const g=new mt(.06,.18,25,5,1,!0),_=new yt({color:16724787,transparent:!0,opacity:.38,depthWrite:!1,side:Bt,blending:_i}),m=new ge(g,_);m.position.y=12.5,r.add(m),r.position.set(t,n,i),r.rotation.y=Math.random()*Math.PI,this.scene.add(r),this.cards.push({id:e,mesh:r,light:p,beacon:m,initialY:n,collected:!1,position:new I(t,n,i)}),Re.createSpatialSource(e,t,n,i)}toggleARMode(e){this.arModeActive=e,this.terrainMeshes.forEach(t=>{t.visible=!e}),e?(this.renderer.setClearColor(0,0),document.getElementById("ar-background-video").style.display="block"):(this.renderer.setClearColor(198661,1),document.getElementById("ar-background-video").style.display="none")}setupGyroControls(){window.addEventListener("deviceorientation",e=>{if(this.arModeActive&&e.alpha!==null){const t=e.alpha*(Math.PI/180),n=e.beta*(Math.PI/180);this.yaw=t,this.pitch=n-Math.PI/2,this.pitch=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,this.pitch)),this.camera.quaternion.setFromEuler(new $t(this.pitch,this.yaw,0,"YXZ"))}})}createSpatialHUD(){this.hudCanvas=document.createElement("canvas"),this.hudCanvas.width=512,this.hudCanvas.height=256,this.hudCtx=this.hudCanvas.getContext("2d"),this.hudTexture=new Ja(this.hudCanvas);const e=new ni(.85,.42),t=new yt({map:this.hudTexture,transparent:!0,opacity:.85,side:Bt});this.spatialHUD=new ge(e,t),this.spatialHUD.position.set(0,-.42,-.85),this.spatialHUD.rotation.x=-Math.PI/6,this.spatialHUD.visible=!1,this.camera.add(this.spatialHUD)}setupVRControllers(){this.controller=this.renderer.xr.getController(0),this.controller.addEventListener("connected",e=>{this.handGroup&&(this.controller.add(this.handGroup),this.handGroup.position.set(0,0,0),this.handGroup.rotation.set(0,0,0)),this.spatialHUD.visible=!0}),this.controller.addEventListener("disconnected",()=>{this.camera.add(this.handGroup),this.handGroup.position.set(-.35,-.38,-.55),this.spatialHUD.visible=!1}),this.scene.add(this.controller)}setupControls(){this.canvas.addEventListener("click",()=>{this.isLocked||this.canvas.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.canvas;const e=document.getElementById("hud-reticle");this.isLocked?e.classList.remove("hidden"):e.classList.add("hidden")}),document.addEventListener("mousemove",e=>{if(!this.isLocked)return;const t=.002;this.yaw-=e.movementX*t,this.pitch-=e.movementY*t,this.pitch=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,this.pitch))}),window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!0),e.key==="ArrowUp"&&(this.keys.arrowup=!0),e.key==="ArrowDown"&&(this.keys.arrowdown=!0),e.key==="ArrowLeft"&&(this.keys.arrowleft=!0),e.key==="ArrowRight"&&(this.keys.arrowright=!0),e.code==="Space"&&!(document.getElementById("camera-scanner-view")&&!document.getElementById("camera-scanner-view").classList.contains("hidden"))&&!this.isJumping&&(this.isJumping=!0,this.yVelocity=this.jumpStrength,typeof Re<"u"&&Re.playProceduralFootstep(.4)),e.key.toLowerCase()==="e"&&this.triggerInteraction()}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t in this.keys&&(this.keys[t]=!1),e.key==="ArrowUp"&&(this.keys.arrowup=!1),e.key==="ArrowDown"&&(this.keys.arrowdown=!1),e.key==="ArrowLeft"&&(this.keys.arrowleft=!1),e.key==="ArrowRight"&&(this.keys.arrowright=!1)})}triggerWetShaderEffect(){this.isWetShaderActive=!0;const e=45,t=new St,n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*1.5,n[r*3+1]=-.5-Math.random()*1,n[r*3+2]=-.8-Math.random()*.4;t.setAttribute("position",new Yt(n,3));const i=new Go({color:3800852,size:.025,transparent:!0,opacity:.8,blending:_i});this.wetParticleSystem=new tp(t,i),this.camera.add(this.wetParticleSystem),this.scene.add(this.camera)}triggerInteraction(){if(window.activeNearCardId){this.onCardInteract(window.activeNearCardId);return}const e=new Vo;e.setFromCamera(new Oe(0,0),this.camera);const t=this.cards.filter(i=>!i.collected).map(i=>i.mesh),n=e.intersectObjects(t,!0);if(n.length>0&&n[0].distance<4){let i=n[0].object;for(;i.parent&&i.parent!==this.scene;)i=i.parent;const r=this.cards.find(a=>a.mesh===i);r&&!r.collected&&this.onCardInteract(r.id)}}teleportToChair(e){if(e<0||e>=this.chairs.length)return;const t=this.chairs[e],n=1;this.camera.position.copy(t.position).y+=n,this.yaw=t.rotation,this.pitch=0,this.camera.quaternion.setFromEuler(new $t(this.pitch,this.yaw,0,"YXZ")),this.velocity.set(0,0,0)}setFlashlight(e){this.flashlightOn=e,this.flashlight&&(this.flashlight.intensity=e?4.5:0),this.volumetricCone&&(this.volumetricCone.visible=e)}setLoungeLights(e){this.loungeLights.forEach(t=>{t.intensity=e?1.2:0})}animate(){var u;requestAnimationFrame(this.animate.bind(this));const e=this.clock.getDelta(),t=this.clock.getElapsedTime();let n=0,i=0;if(this.moveSpeed>0){(this.keys.w||this.keys.arrowup)&&(n+=1),(this.keys.s||this.keys.arrowdown)&&(n-=1),(this.keys.d||this.keys.arrowright)&&(i+=1),(this.keys.a||this.keys.arrowleft)&&(i-=1),window.touchMoveVector&&window.touchMoving&&(n+=window.touchMoveVector.y,i+=window.touchMoveVector.x);const h=new I,d=new I(0,0,-1).applyQuaternion(this.camera.quaternion);d.y=0,d.normalize();const p=new I(1,0,0).applyQuaternion(this.camera.quaternion);p.y=0,p.normalize(),h.addScaledVector(d,n),h.addScaledVector(p,i),h.lengthSq()>.001&&h.normalize(),this.velocity.copy(h).multiplyScalar(this.moveSpeed),this.camera.position.addScaledVector(this.velocity,e),this.camera.position.x=Math.max(-23,Math.min(23,this.camera.position.x)),this.camera.position.z=Math.max(-23,Math.min(23,this.camera.position.z))}this.isJumping&&(this.camera.position.y+=this.yVelocity*e,this.yVelocity-=this.gravity*e,this.camera.position.y<=this.defaultPlayerHeight&&(this.camera.position.y=this.defaultPlayerHeight,this.yVelocity=0,this.isJumping=!1,typeof Re<"u"&&Re.playProceduralFootstep(.75)));const r=this.velocity.lengthSq()>.1;let a=1.6,o=0;if(r?(this.handBobTimer+=e*13.5,a=1.6+Math.sin(this.handBobTimer)*.055,o=Math.cos(this.handBobTimer)*.0065):(this.handBobTimer+=e*1.6,a=1.6+Math.sin(this.handBobTimer)*.008,o=0),this.isJumping||(this.camera.position.y=a),this.camera.quaternion.setFromEuler(new $t(this.pitch,this.yaw,o,"YXZ")),Re.updateListener(this.camera.position,this.camera.quaternion),this.handGroup&&this.flashlightOn){const h=this.yaw-this.lastYaw,d=this.pitch-this.lastPitch,p=new I(-.35,-.38,-.55);if(this.jumpscareActive){const m=Math.sin(t*68)*.05,f=Math.cos(t*78)*.05;p.x+=m,p.y+=f;const y=-.28;this.ghostGroup.position.z=y,this.ghostGroup.rotation.z=Math.sin(t*50)*.18}else p.x-=h*.45,p.y+=d*.45,r?(p.x+=Math.sin(this.handBobTimer)*.015,p.y+=Math.cos(this.handBobTimer*2)*.012):p.y+=Math.sin(this.handBobTimer)*.005;this.handGroup.position.lerp(p,.08);const g=new $t(0,0,0);g.y=-h*.8,g.x=d*.8;const _=new ci().setFromEuler(g);this.handGroup.quaternion.slerp(_,.1),this.lastYaw=this.yaw,this.lastPitch=this.pitch}this.cards.forEach(h=>{if(!h.collected){h.mesh.rotation.y+=e*1;const d=Math.sin(t*2)*.08;if(h.mesh.position.y=h.initialY+d,h.light.intensity=.5+Math.sin(t*5)*.4,h.beacon){h.beacon.material.opacity=.2+Math.sin(t*3.5)*.18;const p=1+Math.sin(t*2.5)*.1;h.beacon.scale.set(p,1,p)}}});const c=this.cards.find(h=>h.id==="D");if(c&&!c.collected){const h=(Math.sin(t*.9)+1)/2,d=.1+h*3.7,p=-12.2-h*4.3;Re.updateSpatialSourcePosition("D",14,d,p)}if(this.redBeacon&&(this.redBeacon.intensity=5+Math.sin(t*6)*5),this.isWetShaderActive&&this.wetParticleSystem){const h=this.wetParticleSystem.geometry.attributes.position,d=h.count;for(let p=0;p<d;p++){let g=h.getY(p);g-=e*(1.5+Math.random()*2),g<-1.8&&(g=-.5),h.setY(p,g)}h.needsUpdate=!0}if(this.flashlightOn){let h=null,d=3.8;this.cards.forEach(g=>{g.collected||this.camera.position.distanceTo(g.position)<d&&(h=g)});const p=document.getElementById("interaction-prompt");h?(p&&(p.style.display="block"),window.activeNearCardId=h.id):(p&&(p.style.display="none"),window.activeNearCardId=null)}if(this.spatialHUD&&this.spatialHUD.visible){const h=this.hudCtx,d=512,p=256;h.fillStyle="rgba(2, 12, 5, 0.96)",h.fillRect(0,0,d,p),h.strokeStyle="#39ff14",h.lineWidth=5,h.strokeRect(5,5,d-10,p-10),h.fillStyle="#ffb300",h.font="bold 22px Courier New",h.fillText("VR TACTICAL HUD (WebXR)",25,38);const g=((u=document.getElementById("hud-timer"))==null?void 0:u.textContent)||"05:00";h.fillStyle="#ffffff",h.font="bold 25px Courier New",h.fillText(`TIME REMAINING: ${g}`,25,82),h.fillStyle="#ff3333",h.fillText(`STRESS FACTOR: ${Math.floor(this.stressLevel)}%`,25,122);const _=this.cards.filter(m=>m.collected).length;h.fillStyle="#39ff14",h.font="bold 21px Courier New",h.fillText(`CLUES ACQUIRED: ${_} / 5`,25,162),h.strokeStyle="#39ff14",h.lineWidth=3,h.beginPath(),h.moveTo(25,215);for(let m=0;m<460;m+=4){let f=0;const y=(t*(1.2+this.stressLevel/100*2.2)*50+m)%120;y<8?f=-12:y<16?f=32:y<22&&(f=-8),h.lineTo(25+m,215+f+Math.sin(t*6+m*.05)*3)}h.stroke(),this.hudTexture.needsUpdate=!0}this.inspectMesh&&(this.inspectMesh.rotation.y+=e*1.5,this.inspectMesh.rotation.x+=e*.5,this.inspectMesh.position.y=-.1+Math.sin(t*3)*.02);const l=this.stressLevel/100*4.8;this.vhsMaterial.uniforms.uGlitchIntensity.value=Math.max(this.vhsMaterial.uniforms.uGlitchIntensity.value,l),this.vhsMaterial.uniforms.uTime.value=t,this.renderer.setRenderTarget(this.vhsTarget),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.vhsScene,this.vhsCamera)}removeCardGlobally(e){const t=this.cards.find(n=>n.id===e);t&&(t.collected=!0,this.scene.remove(t.mesh),Re.removeSpatialSource(e))}spikeGlitch(e=4.5){this.vhsMaterial.uniforms.uGlitchIntensity.value=e;let t=.35;const n=()=>{t>0?(t-=.05,this.vhsMaterial.uniforms.uGlitchIntensity.value=t*(e*2.2),setTimeout(n,50)):this.vhsMaterial.uniforms.uGlitchIntensity.value=0};n()}show3DInspectItem(e){this.hide3DInspectItem();const t=new Wt,n=new je({color:12951641,roughness:.8,metalness:.9}),i=new je({color:13421772,roughness:.2,metalness:.8}),r=new yt({color:9109504}),a=new je({color:1842204,roughness:.5}),o=new je({color:11122630,roughness:.1}),c=new je({color:4861467,roughness:.9}),l=new je({color:15262421,roughness:1});if(e==="A"){const u=new Qn(.04,.008,8,24),h=new ge(u,n);h.position.set(0,.08,0),t.add(h);const d=new mt(.007,.007,.12,12),p=new ge(d,n);p.position.set(0,0,0),t.add(p);const g=new qe(.025,.025,.007),_=new ge(g,n);_.position.set(.015,-.045,0),t.add(_)}else if(e==="B"){const u=new qe(.01,.14,.003),h=new ge(u,i);h.position.set(-.01,.02,0),h.rotation.z=.15,t.add(h);const d=new qe(.01,.14,.003),p=new ge(d,i);p.position.set(.01,.02,0),p.rotation.z=-.15,t.add(p);const g=new Qn(.02,.005,6,16),_=new ge(g,a);_.position.set(-.022,-.06,0),t.add(_);const m=new Qn(.02,.005,6,16),f=new ge(m,a);f.position.set(.022,-.06,0),t.add(f);const y=new mt(.006,.006,.01,8),v=new ge(y,n);v.rotation.x=Math.PI/2,v.position.set(0,-.01,0),t.add(v);const E=new qe(.012,.04,.004),P=new ge(E,r);P.position.set(-.014,.06,.001),P.rotation.z=.15,t.add(P)}else if(e==="C"){const u=new qe(.14,.08,.012),h=new ge(u,a);t.add(h);const d=new mt(.012,.012,.015,12),p=new ge(d,l);p.rotation.x=Math.PI/2,p.position.set(-.03,0,0),t.add(p);const g=new ge(d,l);g.rotation.x=Math.PI/2,g.position.set(.03,0,0),t.add(g);const _=new qe(.09,.05,.013),m=new ge(_,l);m.position.set(0,0,0),t.add(m)}else if(e==="D"){const u=new mt(.05,.04,.09,16),h=new ge(u,o);t.add(h);const d=new Qn(.025,.007,6,16),p=new ge(d,o);p.position.set(.045,0,0),t.add(p);const g=new qe(.004,.04,.051),_=new ge(g,r);_.position.set(-.02,.025,.02),_.rotation.z=-.15,t.add(_)}else if(e==="E"){const u=new qe(.09,.13,.018),h=new ge(u,c);t.add(h);const d=new qe(.082,.12,.014),p=new ge(d,l);p.position.set(.003,0,0),t.add(p);const g=new qe(.01,.135,.02),_=new ge(g,a);_.position.set(-.038,0,0),t.add(_)}t.position.set(0,-.1,-.55),t.scale.set(1.5,1.5,1.5),this.camera.add(t),this.inspectMesh=t;try{document.exitPointerLock()}catch{}this.isLocked=!1}hide3DInspectItem(){this.inspectMesh&&(this.camera.remove(this.inspectMesh),this.inspectMesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.inspectMesh=null)}}class dp{constructor(e,t,n){this.state=e,this.scene=t,this.onSystemMessage=n,this.chatLogEl=document.getElementById("chat-log"),this.chatInputEl=document.getElementById("chat-input"),this.chatSendEl=document.getElementById("chat-send-btn"),this.blacklist=["구두","슬리퍼","운동화","물","젖다","젖었","축축","키","크다","길쭉","단추","연못","창문","계단","숲"],this.isMuted=!1,this.botTurnIndex=0,this.dialogueTimer=null,this.setupUI()}setupUI(){this.chatSendEl.addEventListener("click",()=>this.handlePlayerSend()),this.chatInputEl.addEventListener("keydown",e=>{e.key==="Enter"&&this.handlePlayerSend()})}censorText(e){let t=!1,n=e;return this.blacklist.forEach(i=>{const r=new RegExp(i,"gi");r.test(n)&&(t=!0,n=n.replace(r,"`[검열됨 / GLITCH_STATIC]`"))}),{censored:t,text:n}}handlePlayerSend(){if(this.isMuted)return;const e=this.chatInputEl.value.trim();if(!e)return;this.chatInputEl.value="",this.addMessage(0,"나 (플레이어)",e,!1);const t=this.censorText(e);t.censored?(this.scene.spikeGlitch(),Re.playGlitchAudio(),setTimeout(()=>{this.addMessage(0,"나 (플레이어)",t.text,!0),this.applyMutePenalty()},200)):this.triggerBotReaction(e)}applyMutePenalty(){this.isMuted=!0,this.chatInputEl.disabled=!0,this.chatSendEl.disabled=!0;const e=document.createElement("div");e.className="chat-msg censored-mute",e.innerHTML="SYSTEM: 특정 금지 단어가 검출되었습니다. 주파수가 3초간 강제 차단됩니다.",this.chatLogEl.appendChild(e),this.scrollToBottom(),setTimeout(()=>{this.isMuted=!1,this.chatInputEl.disabled=!1,this.chatSendEl.disabled=!1,this.chatInputEl.placeholder="소리를 묘사하여 범인을 지목하십시오...",this.chatInputEl.focus()},3e3)}addMessage(e,t,n,i=!1){if(e===0&&!i){const c="temp-msg-"+Date.now(),l=document.createElement("div");l.className="chat-msg me",l.id=c,l.innerHTML=`<span class="msg-author">[${t}]:</span> <span class="msg-text">${n}</span>`,l.style.textShadow="0 0 4px rgba(76, 175, 80, 0.3)",this.chatLogEl.appendChild(l),this.scrollToBottom(),this.lastTempMsgId=c;return}if(i&&this.lastTempMsgId){const c=document.getElementById(this.lastTempMsgId);if(c){c.querySelector(".msg-text").innerHTML=n,c.querySelector(".msg-text").classList.add("censored");return}}const r=document.createElement("div");e===0?(r.className="chat-msg me",r.style.textShadow="0 0 4px rgba(76, 175, 80, 0.3)"):e===-1?r.className="chat-msg system":(r.className="chat-msg bot",r.style.textShadow="0 0 4px rgba(57, 255, 20, 0.25)");const a=e!==-1?`<span class="msg-author">[${t}]:</span> `:"",o=`<span class="msg-text ${i?"censored":""}">${n}</span>`;r.innerHTML=a+o,this.chatLogEl.appendChild(r),this.scrollToBottom()}scrollToBottom(){this.chatLogEl.scrollTop=this.chatLogEl.scrollHeight}clearChat(){this.chatLogEl.innerHTML=""}startAIDialogueLoop(){this.botTurnIndex=0,this.chatInputEl.disabled=!1,this.chatSendEl.disabled=!1,this.addMessage(-1,"SYSTEM","회의 단계가 개시되었습니다. 서로의 사운드 조각을 맞춰 타임라인을 완성하고 범인을 검거하십시오.",!1);const e=()=>{this.state.allCardsCollected()&&(this.executeBotSpeech(this.botTurnIndex),this.botTurnIndex=(this.botTurnIndex+1)%3),this.dialogueTimer=setTimeout(e,14e3+Math.random()*6e3)};setTimeout(e,4e3)}stopAIDialogueLoop(){this.dialogueTimer&&(clearTimeout(this.dialogueTimer),this.dialogueTimer=null)}executeBotSpeech(e){const n=this.state.players.filter(c=>c.isBot)[e];if(!n||!n.cardId)return;let i="";const r=n.name,a=Math.floor(this.botTurnIndex/3);n.cardId==="A"?a===0?i='제 쪽 구역에서 엄청 음침한 쇠 긁는 소리가 났어요. "서걱... 서걱..." 하더니 갑자기 "쾅! 탕!" 하고 쇠창살을 강하게 때렸습니다. 정말 심장이 내려앉을 뻔했어요.':a===1?i="제 소리는 03:00 즈음에 났던 것 같습니다. 누군가 철창... 아니, 창...[검열됨]을 뜯으려 하는 것 같았달까요?":i="타임라인상 창...[검열됨] 소리 다음은 어디선가 무언가를 끄는 소리가 났다고 하지 않았나요? 박기자 쪽이었던 것 같은데.":n.cardId==="B"?this.state.useAccomplice&&this.state.accompliceCard==="B"?a===0?i='저는 숲...[검열됨] 쪽에서 축축하고 끈적한 소리를 들었어요. "지익- 잘칵-" 하는 무겁고 음산한 발소리요. 그런데 이게 연못 소리랑 겹쳐 들렸던 것 같아서 헷갈리네요.':a===1?i="범인이 젖은 발을 하고 있다고요? 아까 다 같이 다녀서 바닥이 질척거려 다 젖었을 수도 있잖아요! 너무 억측하지 맙시다.":i="최학자님이 너무 의심스럽습니다. 아까부터 철제 계...[검열됨] 쪽 소리에 대해 숨기는 게 있는 것 같아요!":a===0?i='저는 나무 데크가 빽빽한 길 쪽에서 이상한 마찰음을 들었어요. "지익-, 잘칵-, 지익-" 하고 질질 끄는 생고무 발소리였는데, 뒤로 축축한 질감이 느껴져서 엄청 소름 돋았습니다.':a===1?i="가죽 구...[검열됨]나 운...[검열됨] 소리는 아닌 것 같았어요. 아주 무겁고 마찰이 심한 고무 재질 소리였는데... 설마 슬리...[검열됨]인가요?":i="타임라인을 맞추면 제 소리가 대략 03:10 부근일 겁니다. 창...[검열됨] 긁는 소리 바로 직후였거든요. 그 뒤에 더 끔찍한 물소리가 났던 거죠.":n.cardId==="D"?this.state.useAccomplice&&this.state.accompliceCard==="D"?a===0?i='제 단서는 철제 계...[검열됨]를 달리는 엇박자 발소리였어요. "캉! 캉!" 하는 금속성 울림이 엄청 크게 났고 밤바람이 거칠었죠. 근데 범인은 전혀 다른 방향으로 간 것 같습니다.':a===1?i="어쩌면 범인은 아예 물...[검열됨] 속에서 나온 게 아니라 위쪽 계...[검열됨]로 도망친 게 아닐까요? 03:30 계...[검열됨] 소리 낸 사람이 범인 같아요!":i="임형사님이 계속 03:00 소리만 고집하는 것도 좀 이상하네요. 물타기 하시는 건가요?":a===0?i='철제 프레임워크 아래에서 귀가 멍할 정도의 금속 공명음을 들었습니다. "캉! 캉! 캉!" 하고 급하게 계...[검열됨]단을 질주하다가 마지막에 "쿵!" 하고 무거운 물체가 둔탁하게 떨구어지는 소리요.':a===1?i="제 계...[검열됨]단 질주음은 맨 마지막인 03:30 경에 난 소리입니다. 03:20에 끔찍한 비명과 물 소리가 난 직후였으니까요. 범인이 위로 달린 것 같습니다!":i="가장 유력한 건 03:20에 살해를 저지른 처형자의 발소리가 젖어있을 거란 점입니다. 물...[검열됨]에 젖은 발을 한 사람을 찾아야 합니다!":n.cardId==="C"&&(a===0?i="저도 연...[검열됨] 주변을 서성이다 가벼운 바람 소리밖에 못 들었습니다. 제 단서 주파수 카드가 훼손된 건지 잘 들리지 않더군요. 그냥 물이 약간 잔잔하게 출렁이는 소리 정도?":a===1?i="03:20에 살인 사건이 난 것 같은데, 03:10에 데크 숲...[검열됨]길에서 질질 끄는 발소리를 낸 사람이 범인 아닌가요? 박기자님이 수상해요!":i="제 발이 축축하다고요? 카페 지하 내부 습기 때문에 젖은 것뿐입니다. 저는 무고한 수사관입니다!");const o=this.censorText(i);setTimeout(()=>{this.addMessage(n.id,r,o.text,o.censored)},1500)}triggerBotReaction(e){const t=e.toLowerCase();(t.includes("범인")||t.includes("살인마")||t.includes("누구"))&&setTimeout(()=>{this.addMessage(-1,"SYSTEM GUIDE","그날 밤 03:20경, 끔찍한 물소리와 함께 단추가 뜯어지며 살해당하는 현장을 본 자는 없습니다. 오직 젖은 발소리와 젖은 신체를 한 자만이 범인일 테죠. 각자의 신체 메쉬를 조사합시다!",!1)},1e3)}}class fp{constructor(e,t,n,i,r){this.video=e,this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.onStressIncrease=n,this.onVolumeUpdate=i,this.onInstUpdate=r,this.faceMesh=null,this.camera=null,this.isTracking=!1,this.lastMouthRatio=0,this.screamDetected=!1,this.audioContext=null,this.analyser=null,this.micStream=null,this.dataArray=null,this.init()}init(){if(typeof window.FaceMesh>"u"){console.error("MediaPipe FaceMesh not loaded from CDN.");return}this.faceMesh=new window.FaceMesh({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${e}`}),this.faceMesh.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.faceMesh.onResults(e=>this.processFaceResults(e))}async start(){if(!this.faceMesh)return!1;this.isTracking=!0;try{window.Camera&&(this.camera=new window.Camera(this.video,{onFrame:async()=>{this.isTracking&&await this.faceMesh.send({image:this.video})},width:140,height:110}),await this.camera.start())}catch(e){console.warn("PIP Webcam failed for face tracking: ",e)}try{this.micStream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.audioContext=new(window.AudioContext||window.webkitAudioContext);const e=this.audioContext.createMediaStreamSource(this.micStream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,e.connect(this.analyser);const t=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(t),this.startMicMonitor()}catch(e){console.warn("Microphone stream rejected or failed: ",e)}return!0}stopCameraOnly(){if(this.camera){try{this.camera.stop()}catch{}this.camera=null}}async restartCameraOnly(){if(!(!this.isTracking||!this.faceMesh)){this.stopCameraOnly();try{window.Camera&&(this.camera=new window.Camera(this.video,{onFrame:async()=>{this.isTracking&&await this.faceMesh.send({image:this.video})},width:140,height:110,facingMode:"user"}),await this.camera.start())}catch(e){console.warn("Failed restarting front camera for face tracking: ",e)}}}stop(){if(this.isTracking=!1,this.stopCameraOnly(),this.micStream&&(this.micStream.getTracks().forEach(e=>e.stop()),this.micStream=null),this.audioContext){try{this.audioContext.close()}catch{}this.audioContext=null}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}startMicMonitor(){const e=()=>{if(!this.isTracking||!this.analyser)return;this.analyser.getByteFrequencyData(this.dataArray);let t=0;for(let r=0;r<this.dataArray.length;r++)t+=this.dataArray[r]*this.dataArray[r];const n=Math.sqrt(t/this.dataArray.length),i=20*Math.log10(n||1);this.onVolumeUpdate&&this.onVolumeUpdate(i),i>68?(this.screamDetected=!0,this.onStressIncrease(12),this.onInstUpdate("🔊 비명이 감지되었습니다! 심박수가 가속됩니다!")):this.screamDetected=!1,setTimeout(e,120)};e()}processFaceResults(e){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),!e.multiFaceLandmarks||e.multiFaceLandmarks.length===0)return;const t=e.multiFaceLandmarks[0];this.drawFaceMesh(t);const n=t[13],i=t[14],r=t[10],a=t[152],o=Math.abs(n.y-i.y),c=Math.abs(r.y-a.y),l=o/(c||1);this.lastMouthRatio=l,l>.16&&(this.onStressIncrease(6),this.onInstUpdate("😱 놀람 감지! 심장 박동 주파수가 요동칩니다."))}drawFaceMesh(e){const t=this.ctx,n=this.canvas.width,i=this.canvas.height;t.fillStyle="#39ff14",t.shadowBlur=3,t.shadowColor="#39ff14",[0,13,14,17,37,39,40,61,78,80,81,82,84,87,88,91,95,105,107,267,269,270,291,308,310,311,312,314,317,318,321,324,334,336,33,133,159,144,362,263,386,373].forEach(a=>{const o=e[a];o&&(t.beginPath(),t.arc((1-o.x)*n,o.y*i,1.2,0,2*Math.PI),t.fill())}),t.shadowBlur=0}}class pp{constructor(){this.canvases=[],this.ctxs=[],this.animationId=null,this.bots=[{id:1,name:"임형사",stress:0,headOffset:0,blinkTimer:0,mouthSize:0,dead:!1},{id:2,name:"박기자",stress:0,headOffset:.5,blinkTimer:0,mouthSize:0,dead:!1},{id:3,name:"최학자",stress:0,headOffset:1.2,blinkTimer:0,mouthSize:0,dead:!1},{id:4,name:"김요원",stress:0,headOffset:2,blinkTimer:0,mouthSize:0,dead:!1}],this.glitchIntensity=0,this.active=!1}init(){this.canvases=[document.getElementById("bot-cam-1"),document.getElementById("bot-cam-2"),document.getElementById("bot-cam-3"),document.getElementById("bot-cam-4")],this.ctxs=this.canvases.map(e=>e?e.getContext("2d"):null)}start(){this.init(),this.active=!0,this.loop()}stop(){this.active=!1,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}setBotDead(e,t=!0){const n=this.bots.find(i=>i.id===e);if(n){n.dead=t;const i=document.getElementById(`cam-slot-${e}`);i&&(t?(i.classList.add("no-signal"),document.getElementById(`bot${e}-stress-status`).textContent="OFFLINE"):i.classList.remove("no-signal"))}}updateBotStress(e,t){const n=this.bots.find(i=>i.id===e);if(n&&!n.dead){n.stress=Math.min(100,Math.max(0,t));const i=document.getElementById(`bot${e}-stress-status`);i&&(i.textContent=`STRESS: ${Math.floor(n.stress)}%`)}}loop(){if(!this.active)return;const e=Date.now()*.001;this.bots.forEach((t,n)=>{const i=this.ctxs[n],r=this.canvases[n];if(!i||!r||t.dead)return;const a=r.width,o=r.height;i.fillStyle="#010502",i.fillRect(0,0,a,o);const c=i.createImageData(a,o),l=c.data,u=15+this.glitchIntensity*60+t.stress*.3;for(let E=0;E<l.length;E+=4){const P=(Math.random()-.5)*u;l[E]=57+P,l[E+1]=255+P,l[E+2]=20+P,l[E+3]=24+Math.random()*20}i.putImageData(c,0,0),i.strokeStyle="rgba(57, 255, 20, 0.06)",i.lineWidth=1;const h=e*25%o;if(i.beginPath(),i.moveTo(0,h),i.lineTo(a,h),i.stroke(),this.glitchIntensity>.1||Math.random()<.04){i.fillStyle="rgba(57, 255, 20, 0.4)";const E=Math.random()*o,P=2+Math.random()*4;i.fillRect(0,E,a,P)}i.strokeStyle="#39ff14",i.lineWidth=1.2,i.shadowBlur=2,i.shadowColor="#39ff14";const d=Math.sin(e*.8+t.headOffset)*6,p=a/2+Math.cos(e*.5+t.headOffset)*4,g=o/2-2;i.beginPath(),i.ellipse(p,g,16,20,d*Math.PI/180,0,2*Math.PI),i.stroke();const _={x:p-5.5,y:g-4},m={x:p+5.5,y:g-4};Math.floor(e+t.headOffset)%3===0&&e*10%30<2?(i.beginPath(),i.moveTo(_.x-3,_.y),i.lineTo(_.x+3,_.y),i.moveTo(m.x-3,m.y),i.lineTo(m.x+3,m.y),i.stroke()):(i.beginPath(),i.arc(_.x,_.y,2,0,2*Math.PI),i.arc(m.x,m.y,2,0,2*Math.PI),i.stroke()),i.beginPath(),i.moveTo(p,g-1),i.lineTo(p-1.5,g+3),i.lineTo(p+1.5,g+3),i.closePath(),i.stroke();const v=Math.floor(e*1.5+t.headOffset)%4<2?3+Math.sin(e*12)*2.5:0;i.beginPath(),v>.5?i.ellipse(p,g+8,4,v,0,0,2*Math.PI):(i.moveTo(p-4,g+8),i.lineTo(p+4,g+8)),i.stroke(),i.strokeStyle="rgba(57, 255, 20, 0.25)",i.beginPath(),i.moveTo(p-16,g),i.lineTo(p,g+20),i.lineTo(p+16,g),i.stroke(),i.shadowBlur=0}),this.animationId=requestAnimationFrame(()=>this.loop())}}const An=new pp;class mp{constructor(){this.gameScene=null,this.chatEngine=null,this.handsTracker=null,this.faceTracker=null,this.phase1Duration=300,this.phase2Duration=600,this.currentTimer=0,this.timerInterval=null,this.gamePhase="LOBBY",this.myRoleInfo=null,this.botLootInterval=null,this.votedPlayerId=null,this.botStressInterval=null,this.cameraStream=null,this.arBackgroundStream=null,this.fallbackActive=!1,this.fallbackProgress=0,this.jumpscareTriggered=!1,this.radarCanvas=null,this.radarCtx=null,this.radarSweepAngle=0,this.radarAnimationId=null,this.joystickBase=null,this.joystickKnob=null,this.isJoystickDragging=!1,this.isScreenDragging=!1,this.lastScreenX=0,this.lastScreenY=0,this.mentalStress=0,this.ecgCanvas=null,this.ecgCtx=null,this.ecgAnimationId=null,this.arModeActive=!1,this.cacheElements(),this.bindEvents()}cacheElements(){this.lobbyScreen=document.getElementById("lobby-screen"),this.endScreen=document.getElementById("end-screen"),this.hudOverlay=document.getElementById("game-hud"),this.timerDisplay=document.getElementById("hud-timer"),this.phaseNameDisplay=document.getElementById("hud-phase-name"),this.guidanceDisplay=document.getElementById("general-guidance"),this.inventoryStatus=document.getElementById("inv-card-status"),this.inventoryDetails=document.getElementById("inv-card-details"),this.invRoleTitle=document.getElementById("inv-role-title"),this.invMeshDesc=document.getElementById("inv-mesh-desc"),this.invAudioDesc=document.getElementById("inv-audio-desc"),this.downloadInventoryAudioBtn=document.getElementById("download-inventory-audio-btn"),this.playPrivateAudioBtn=document.getElementById("play-private-audio-btn"),this.audioWave=document.getElementById("audio-wave"),this.chatContainer=document.getElementById("hud-chat-container"),this.startBtn=document.getElementById("start-game-btn"),this.restartBtn=document.getElementById("restart-btn"),this.accompliceCheckbox=document.getElementById("accomplice-option"),this.lobbyDownloadBtn=document.getElementById("lobby-download-btn"),this.downloadModal=document.getElementById("download-modal"),this.closeDownloadModalBtn=document.getElementById("close-download-modal"),this.hudCaptureBtn=document.getElementById("hud-capture-btn"),this.cameraOverlay=document.getElementById("camera-scanner-view"),this.signalContainer=this.cameraOverlay?this.cameraOverlay.querySelector(".signal-container"):null,this.progressFill=document.getElementById("scan-progress"),this.scannerInstruction=document.getElementById("scanner-instruction"),this.radarCanvas=document.getElementById("radar-canvas"),this.radarCanvas&&(this.radarCtx=this.radarCanvas.getContext("2d")),this.joystickBase=document.getElementById("joystick-base"),this.joystickKnob=document.getElementById("joystick-knob"),this.arToggleBtn=document.getElementById("ar-toggle-btn"),this.pipVideo=document.getElementById("player-pip-video"),this.pipCanvas=document.getElementById("player-pip-canvas"),this.ecgCanvas=document.getElementById("ecg-canvas"),this.ecgCanvas&&(this.ecgCtx=this.ecgCanvas.getContext("2d"))}bindEvents(){var t,n;this.startBtn.addEventListener("click",()=>this.startGame()),this.restartBtn.addEventListener("click",()=>this.resetGame()),this.playPrivateAudioBtn.addEventListener("click",()=>this.togglePrivateAudio()),this.arToggleBtn.addEventListener("click",()=>this.toggleARMode()),this.hudCaptureBtn&&this.hudCaptureBtn.addEventListener("click",()=>this.triggerCapture()),this.lobbyDownloadBtn&&this.downloadModal&&this.lobbyDownloadBtn.addEventListener("click",()=>{this.downloadModal.classList.remove("hidden")}),this.closeDownloadModalBtn&&this.downloadModal&&this.closeDownloadModalBtn.addEventListener("click",()=>{this.downloadModal.classList.add("hidden")}),window.addEventListener("click",i=>{this.downloadModal&&!this.downloadModal.classList.contains("hidden")&&i.target===this.downloadModal&&this.downloadModal.classList.add("hidden")}),document.querySelectorAll(".download-clue-btn").forEach(i=>{i.addEventListener("click",r=>{const a=r.currentTarget.getAttribute("data-card");this.downloadClueWavFile(a)})}),this.downloadInventoryAudioBtn&&this.downloadInventoryAudioBtn.addEventListener("click",()=>{const i=$e.players[0].cardId;i?this.downloadClueWavFile(i):alert("획득한 단서가 없습니다.")});const e=async()=>{if(this.gameScene||this.startGame(),navigator.xr)try{const i=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});this.gameScene.renderer.xr.setSession(i),this.gameScene.canvas.classList.add("webxr-active-canvas"),i.addEventListener("end",()=>{this.gameScene.canvas.classList.remove("webxr-active-canvas");const o=document.getElementById("lobby-vr-btn"),c=document.getElementById("hud-vr-btn");o&&(o.textContent="🕶️ VR 모드"),c&&(c.textContent="VR 모드 [OFF]")});const r=document.getElementById("lobby-vr-btn"),a=document.getElementById("hud-vr-btn");r&&(r.textContent="🕶️ VR [ON]"),a&&(a.textContent="VR 모드 [ON]")}catch(i){alert("WebXR VR 세션 개설 실패: "+i.message)}else alert("현재 기기/브라우저가 WebXR VR 환경을 지원하지 않습니다.")};(t=document.getElementById("lobby-vr-btn"))==null||t.addEventListener("click",e),(n=document.getElementById("hud-vr-btn"))==null||n.addEventListener("click",e),this.cameraOverlay.addEventListener("mousedown",i=>this.startHoldScan(i)),this.cameraOverlay.addEventListener("touchstart",i=>this.startHoldScan(i)),window.addEventListener("mouseup",()=>this.stopHoldScan()),window.addEventListener("touchend",()=>this.stopHoldScan()),window.addEventListener("keydown",i=>{if(window.inspectingMode){i.key.toLowerCase()==="e"&&this.close3DInspectView();return}i.key.toLowerCase()==="e"&&window.activeNearCardId&&this.gamePhase==="PHASE1"&&this.onCardInteract(window.activeNearCardId),this.fallbackActive&&i.code==="Space"&&this.gamePhase==="PHASE1"&&this.startHoldScan(i)}),window.addEventListener("keyup",i=>{this.fallbackActive&&i.code==="Space"&&this.gamePhase==="PHASE1"&&this.stopHoldScan()}),window.addEventListener("click",()=>{if(window.inspectingMode){this.close3DInspectView();return}window.activeNearCardId&&this.gamePhase==="PHASE1"&&!this.cameraOverlay.classList.contains("active")&&this.onCardInteract(window.activeNearCardId)})}startGame(){this.jumpscareTriggered=!1,Re.init(),Re.startWind(),Re.startHeartbeatLoop(),Re.updateHeartbeatBPM(72),typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&DeviceOrientationEvent.requestPermission().then(r=>{r==="granted"&&console.log("Motion sensors permission granted.")}).catch(r=>{console.warn("Motion sensors permission request rejected or failed: ",r)}),$e.reset(),$e.useAccomplice=this.accompliceCheckbox.checked,$e.setupAccomplice();const e=document.getElementById("mic-level-container");e&&(e.style.display="flex");const t=document.querySelector(".hud-left-wrapper"),n=document.getElementById("multi-cam-grid-panel"),i=document.getElementById("hud-inventory");t&&t.classList.add("hidden-phase1"),n&&n.classList.add("minimal-hud"),i&&i.classList.add("hidden-phase1"),this.lobbyScreen.classList.add("hidden"),this.hudOverlay.classList.add("active"),this.gameScene=new up("game-canvas",r=>this.onCardHover(r),r=>this.onCardInteract(r)),this.chatEngine=new dp($e,this.gameScene,r=>{this.chatEngine.addMessage(-1,"SYSTEM",r,!1)}),this.setupVirtualJoystick(),this.setupDragToLook(),An.start(),this.startBotStressSimulation(),this.mentalStress=0,this.gameScene.stressLevel=0,this.startFaceAndAudioTracking(),this.startECGMonitor(),this.startPhase1(),this.startRadarHUD()}startPhase1(){this.gamePhase="PHASE1",this.phaseNameDisplay.textContent="PHASE 1: 밤 - 침묵의 탐색",this.guidanceDisplay.textContent="어두운 남산 카페를 수색하여 1개의 단서 카드를 획득하십시오. (E키를 누르거나 터치패드로 붉은 비콘 카드에 밀접 접촉)",this.timerDisplay.textContent="05:00",this.currentTimer=this.phase1Duration,this.gameScene.setLoungeLights(!1),this.gameScene.setFlashlight(!0),this.startTimer(()=>{this.startPhase2()}),this.scheduleBotLooting()}scheduleBotLooting(){const e=()=>{var n;if(this.gamePhase!=="PHASE1")return;const t=$e.simulateBotLooting();if(t){this.gameScene.removeCardGlobally(t.cardId);const i=t.playerId===((n=$e.getKiller())==null?void 0:n.id)?"젖은 고무 슬리퍼":"건조한 신발",r=`ai${t.playerId}-shoes-mesh`,a=document.getElementById(r);a&&(a.textContent=i),this.chatEngine.addMessage(-1,"SYSTEM",`${t.playerName}님이 단서 조각을 회수하였습니다.`,!1)}if($e.allCardsCollected()){setTimeout(()=>{this.startPhase2()},3e3);return}this.botLootInterval=setTimeout(e,2e4+Math.random()*2e4)};this.botLootInterval=setTimeout(e,15e3)}onCardHover(e){}startRadarHUD(){if(!this.radarCtx)return;const e=()=>{if(this.gamePhase!=="PHASE1"){this.radarCtx.clearRect(0,0,180,180);return}const t=this.radarCtx,n=180,i=180,r=n/2,a=i/2,o=25;t.clearRect(0,0,n,i),t.strokeStyle="rgba(57, 255, 20, 0.15)",t.lineWidth=1;for(let h=25;h<=80;h+=25)t.beginPath(),t.arc(r,a,h,0,2*Math.PI),t.stroke();t.beginPath(),t.moveTo(r-85,a),t.lineTo(r+85,a),t.moveTo(r,a-85),t.lineTo(r,a+85),t.stroke(),this.radarSweepAngle+=.038,this.radarSweepAngle>=Math.PI*2&&(this.radarSweepAngle=0);const c=r+Math.cos(this.radarSweepAngle)*85,l=a+Math.sin(this.radarSweepAngle)*85,u=t.createRadialGradient(r,a,5,r,a,85);if(u.addColorStop(0,"rgba(57, 255, 20, 0.05)"),u.addColorStop(1,"rgba(57, 255, 20, 0.35)"),t.strokeStyle=u,t.lineWidth=2.5,t.beginPath(),t.moveTo(r,a),t.lineTo(c,l),t.stroke(),this.gameScene&&this.gameScene.camera){const h=this.gameScene.camera.position,d=this.gameScene.camera.quaternion,g=new $t().setFromQuaternion(d,"YXZ").y;this.gameScene.cards.forEach(_=>{if(!_.collected){const m=_.position.x-h.x,f=_.position.z-h.z,y=Math.sqrt(m*m+f*f);let E=Math.atan2(f,m)-g-Math.PI/2;const P=Math.min(y/o*80,80),C=r+Math.cos(E)*P,R=a+Math.sin(E)*P,O=Math.abs(this.radarSweepAngle-(E<0?E+Math.PI*2:E)),M=O<.12||O>Math.PI*2-.12;if(t.shadowBlur=M?15:6,t.shadowColor="#ff3333",t.fillStyle=M?"#ff3333":"rgba(255, 51, 51, 0.7)",t.beginPath(),t.arc(C,R,M?5.5:3.5,0,2*Math.PI),t.fill(),y<3&&M){const b=Re.ctx.createOscillator();b.type="sine",b.frequency.setValueAtTime(450,Re.ctx.currentTime);const z=Re.ctx.createGain();z.gain.setValueAtTime(.04,Re.ctx.currentTime),z.gain.exponentialRampToValueAtTime(.001,Re.ctx.currentTime+.08),b.connect(z),z.connect(Re.ctx.destination),b.start(),b.stop(Re.ctx.currentTime+.1)}}}),t.shadowBlur=0}this.radarAnimationId=requestAnimationFrame(e)};e()}setupVirtualJoystick(){if(!this.joystickBase||!this.joystickKnob)return;window.touchMoving=!1,window.touchMoveVector=new Oe(0,0);const e=this.joystickBase.offsetWidth/2||50,t=(a,o)=>{this.isJoystickDragging=!0,window.touchMoving=!0,r(a,o)},n=(a,o)=>{this.isJoystickDragging&&r(a,o)},i=()=>{this.isJoystickDragging=!1,window.touchMoving=!1,window.touchMoveVector.set(0,0),this.joystickKnob.style.transform="translate(0px, 0px)"},r=(a,o)=>{const c=this.joystickBase.getBoundingClientRect(),l=c.left+c.width/2,u=c.top+c.height/2;let h=a-l,d=o-u;const p=Math.sqrt(h*h+d*d);p>e&&(h=h/p*e,d=d/p*e),this.joystickKnob.style.transform=`translate(${h}px, ${d}px)`,window.touchMoveVector.x=h/e,window.touchMoveVector.y=-d/e};this.joystickBase.addEventListener("touchstart",a=>{const o=a.touches[0];t(o.clientX,o.clientY),a.preventDefault()},{passive:!1}),window.addEventListener("touchmove",a=>{if(!this.isJoystickDragging)return;const o=a.touches[0];n(o.clientX,o.clientY)},{passive:!0}),window.addEventListener("touchend",()=>{this.isJoystickDragging&&i()}),this.joystickBase.addEventListener("mousedown",a=>{t(a.clientX,a.clientY)}),window.addEventListener("mousemove",a=>{this.isJoystickDragging&&n(a.clientX,a.clientY)}),window.addEventListener("mouseup",()=>{this.isJoystickDragging&&i()})}setupDragToLook(){const e=document.getElementById("game-canvas");if(!e)return;const t=(o,c)=>{this.gameScene&&!this.gameScene.isLocked&&(this.isScreenDragging=!0,this.lastScreenX=o,this.lastScreenY=c)},n=(o,c)=>{if(!this.isScreenDragging||!this.gameScene)return;const l=o-this.lastScreenX,u=c-this.lastScreenY,h=.005;this.gameScene.yaw-=l*h,this.gameScene.pitch-=u*h,this.gameScene.pitch=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,this.gameScene.pitch)),this.gameScene.camera.quaternion.setFromEuler(new $t(this.gameScene.pitch,this.gameScene.yaw,0,"YXZ")),this.lastScreenX=o,this.lastScreenY=c},i=()=>{this.isScreenDragging=!1};let r=null,a=null;e.addEventListener("touchstart",o=>{if(o.touches.length===2){o.preventDefault();const l=o.touches[0].clientX-o.touches[1].clientX,u=o.touches[0].clientY-o.touches[1].clientY;r=Math.hypot(l,u),this.gameScene&&this.gameScene.camera&&(a=this.gameScene.camera.fov);return}if(o.touches[0].clientX<150&&o.touches[0].clientY>window.innerHeight-150)return;const c=o.touches[0];t(c.clientX,c.clientY)},{passive:!1}),e.addEventListener("touchmove",o=>{if(o.touches.length===2&&r!==null&&a!==null){o.preventDefault();const l=o.touches[0].clientX-o.touches[1].clientX,u=o.touches[0].clientY-o.touches[1].clientY,d=Math.hypot(l,u)/r;if(this.gameScene&&this.gameScene.camera){const p=a/d;this.gameScene.camera.fov=Math.max(25,Math.min(85,p)),this.gameScene.camera.updateProjectionMatrix()}return}const c=o.touches[0];n(c.clientX,c.clientY)},{passive:!1}),e.addEventListener("touchend",o=>{o.touches.length<2&&(r=null,a=null),i()}),e.addEventListener("mousedown",o=>{t(o.clientX,o.clientY)}),e.addEventListener("mousemove",o=>{n(o.clientX,o.clientY)}),window.addEventListener("mouseup",i)}async toggleARMode(){if(this.gamePhase==="PHASE1")if(this.arModeActive=!this.arModeActive,this.arModeActive){this.arToggleBtn.textContent="AR 모드 전환 [ON]",this.arToggleBtn.classList.add("active"),this.faceTracker&&this.faceTracker.stopCameraOnly();try{if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const e=document.getElementById("ar-background-video");this.arBackgroundStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),e.srcObject=this.arBackgroundStream,e.play()}}catch(e){console.warn("AR backdrop stream failed: ",e)}this.gameScene&&this.gameScene.toggleARMode(!0)}else this.arToggleBtn.textContent="AR 모드 전환 [OFF]",this.arToggleBtn.classList.remove("active"),this.arBackgroundStream&&(this.arBackgroundStream.getTracks().forEach(e=>e.stop()),this.arBackgroundStream=null),document.getElementById("ar-background-video").srcObject=null,this.faceTracker&&this.faceTracker.restartCameraOnly(),this.gameScene&&this.gameScene.toggleARMode(!1)}startFaceAndAudioTracking(){this.faceTracker=new fp(this.pipVideo,this.pipCanvas,e=>this.increaseMentalStress(e),e=>this.updateMicLevelBar(e),e=>{}),this.faceTracker.start(),document.getElementById("cam-slot-0").addEventListener("click",()=>{this.increaseMentalStress(10)})}updateMicLevelBar(e){if(this.gamePhase!=="PHASE1")return;const t=document.getElementById("mic-level-bar");if(t){const r=Math.min(Math.max((e-42)/26*100,0),100);t.style.width=`${r}%`}}startBotStressSimulation(){this.botStressInterval=setInterval(()=>{this.gamePhase!=="END"&&An.bots.forEach(e=>{if(!e.dead){const t=this.mentalStress*.85,n=Math.min(100,Math.max(0,t+(Math.random()-.4)*15));An.updateBotStress(e.id,n),n>92&&Math.random()<.08&&(An.setBotDead(e.id,!0),this.chatEngine.addMessage(-1,"SYSTEM",`${e.name}님의 신호가 해제되었습니다. [NO SIGNAL]`,!1))}})},2e3)}increaseMentalStress(e){if(this.gamePhase==="END")return;this.mentalStress=Math.min(this.mentalStress+e*.08,100),this.gameScene&&(this.gameScene.stressLevel=this.mentalStress),An.glitchIntensity=this.mentalStress/100,document.getElementById("ecg-mental-text").textContent=`MY STRESS: ${Math.floor(this.mentalStress)}%`,document.getElementById("player-stress-status").textContent=`STRESS: ${Math.floor(this.mentalStress)}%`;const t=Math.floor(72+this.mentalStress/100*98);document.getElementById("ecg-rate-text").textContent=`HR: ${t} BPM`,Re.updateHeartbeatBPM(t),this.mentalStress>=50?Re.startHorrorWhispers():Re.stopHorrorWhispers(),this.mentalStress>=100&&this.triggerHeartAttackGameOver()}startECGMonitor(){if(!this.ecgCtx)return;const e=220,t=30,n=this.ecgCtx;n.lineWidth=1.8,n.strokeStyle="#39ff14",n.shadowBlur=3,n.shadowColor="#39ff14";let i=[];for(let o=0;o<e;o++)i.push(t/2);let r=0;const a=()=>{if(this.gamePhase==="END"||!this.ecgCtx)return;n.clearRect(0,0,e,t),n.fillStyle="#020603",n.fillRect(0,0,e,t);const c=60/Re.heartbeatBpm*60;r++;let l=t/2;r>=c&&(r=0);const u=r/c;u>.1&&u<.15?l=t/2-3:u>=.15&&u<.18?l=t/2+2:u>=.18&&u<.22?l=t/2-12:u>=.22&&u<.26?l=t/2+5:u>=.26&&u<.32&&(l=t/2-4),i.shift(),i.push(l),n.beginPath(),n.moveTo(0,i[0]);for(let h=1;h<e;h++)n.lineTo(h,i[h]);n.stroke(),this.ecgAnimationId=requestAnimationFrame(a)};a()}triggerHeartAttackGameOver(){this.gamePhase="END",this.stopTimer(),this.radarAnimationId&&(cancelAnimationFrame(this.radarAnimationId),this.radarAnimationId=null),this.ecgAnimationId&&(cancelAnimationFrame(this.ecgAnimationId),this.ecgAnimationId=null),this.botStressInterval&&(clearInterval(this.botStressInterval),this.botStressInterval=null),this.faceTracker&&(this.faceTracker.stop(),this.faceTracker=null),this.handsTracker&&(this.handsTracker.stop(),this.handsTracker=null),this.cameraStream&&(this.cameraStream.getTracks().forEach(n=>n.stop()),this.cameraStream=null),this.arBackgroundStream&&(this.arBackgroundStream.getTracks().forEach(n=>n.stop()),this.arBackgroundStream=null),An.stop(),Re.stop(),Re.stopAllSpatial();const e=Re.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(410,Re.ctx.currentTime);const t=Re.ctx.createGain();t.gain.setValueAtTime(.65,Re.ctx.currentTime),e.connect(t),t.connect(Re.ctx.destination),e.start(),e.stop(Re.ctx.currentTime+2.5),this.gameScene&&this.gameScene.spikeGlitch(25),this.hudOverlay.classList.remove("active"),document.exitPointerLock(),setTimeout(()=>{const n=document.getElementById("end-title"),i=document.getElementById("end-subtitle"),r=document.getElementById("end-details-log");n.textContent="HEART ATTACK",n.className="end-title-text lose",i.textContent="⚠️ 과도한 놀람과 비명으로 인해 심장마비사 하였습니다.",r.innerHTML=`
        <div class="timeline-step">
          <span class="timeline-time">[사망 분석]</span>
          <span class="timeline-desc">최종 측정 심박수: 170 BPM 초과. <br>
          MediaPipe 안면 랜드마크 분석결과 극심한 충격 표정이 감지되었으며, 마이크 센서에 한계 데시벨 이상의 비명 소동이 기록되었습니다. 
          오컬트 저주 에너지가 심장 평형 상태를 해제하여 평평선(Flatline)에 도달하였습니다.</span>
        </div>
      `,this.endScreen.classList.remove("hidden")},2e3)}async onCardInteract(e){if(this.gamePhase==="PHASE1"){if($e.players[0].cardId){this.chatEngine.addMessage(-1,"SYSTEM","이미 단서를 확보하였습니다. 지목된 단서 주파수는 인벤토리에 보존되어 있습니다.",!1);return}this.gameScene&&this.gameScene.triggerJumpscare(),document.exitPointerLock(),setTimeout(()=>{this.cameraOverlay.classList.remove("hidden"),this.progressFill.style.width="0%",this.fallbackActive=!1,this.activateScanFallback(e)},1200)}}activateScanFallback(e){this.fallbackActive=!0,this.fallbackProgress=0,this.progressFill.style.width="0%",this.scannerInstruction.innerHTML="🖐️ [단서 동기화 대기]: 화면을 꾹 누르고 있거나 스페이스바[Space]를 누르고 계십시오.",this.activeFallbackCardId=e}startHoldScan(e){if(e){if(e.code==="Space"&&e.repeat)return;e.preventDefault()}this.fallbackActive&&(this.decayInterval&&(clearInterval(this.decayInterval),this.decayInterval=null),!this.holdScanInterval&&(this.scannerInstruction.innerHTML="⚡ 단서 동기화 진행 중... 떼지 말고 꾹 누르십시오.",this.holdScanInterval=setInterval(()=>{if(this.faceTracker&&this.faceTracker.lastMouthRatio>.16||this.faceTracker&&this.faceTracker.screamDetected){this.fallbackProgress=Math.max(0,this.fallbackProgress-15),this.progressFill.style.width=`${Math.min(Math.floor(this.fallbackProgress),100)}%`,this.scannerInstruction.innerHTML='<span style="color:#ff3333; font-weight:bold; animation: blink 0.5s step-start infinite;">⚠️ [ 동기화 노이즈 간섭 발생! 침착하십시오! ]</span>',this.gameScene&&this.gameScene.spikeGlitch(7.5);return}this.fallbackProgress+=6.5;const n=Math.min(Math.floor(this.fallbackProgress),100);this.progressFill.style.width=`${n}%`,Math.random()<.22&&Re.playScanSuccessBeep(),this.fallbackProgress>=100&&(this.stopHoldScan(),this.fallbackActive=!1,setTimeout(()=>{this.finalizeScannedCard(this.activeFallbackCardId||"A")},300))},100)))}stopHoldScan(){this.holdScanInterval&&(clearInterval(this.holdScanInterval),this.holdScanInterval=null),this.fallbackActive&&(this.scannerInstruction.innerHTML="🖐️ [단서 분석 대기]: 화면을 꾹 누르고 있거나 스페이스바[Space]를 누르고 계십시오.",this.decayInterval&&clearInterval(this.decayInterval),this.decayInterval=setInterval(()=>{this.fallbackProgress>0?(this.fallbackProgress=Math.max(0,this.fallbackProgress-8),this.progressFill.style.width=`${Math.floor(this.fallbackProgress)}%`):(clearInterval(this.decayInterval),this.decayInterval=null)},50))}finalizeScannedCard(e){if(this.fallbackActive=!1,e||(e=Object.keys($e.cardsCollected).find(i=>!$e.cardsCollected[i])||"A"),Re.playScanSuccessBeep(),Math.random()<.33&&!this.jumpscareTriggered)this.jumpscareTriggered=!0,this.cameraOverlay.classList.add("hidden"),this.gameScene&&(this.gameScene.canvas.requestPointerLock(),this.gameScene.triggerJumpscare()),this.applyCardCollectionState(e);else{this.signalContainer&&(this.signalContainer.style.opacity="0"),this.progressFill.parentElement.style.opacity="0",this.gameScene&&this.gameScene.show3DInspectItem(e);const n=$e.assignCardToPlayer(0,e);this.myRoleInfo=n,this.gameScene&&this.gameScene.removeCardGlobally(e),document.getElementById("my-shoes-mesh").textContent=n.shoes,this.inventoryStatus.classList.add("hidden"),this.inventoryDetails.classList.remove("hidden"),this.invRoleTitle.textContent=`역할: ${n.role}`,this.invMeshDesc.textContent=`식별 메쉬: ${n.shoes}`,this.invAudioDesc.textContent=n.audioDesc,this.playPrivateAudio(n.audioId);const r={A:"녹슨 옛날 열쇠",B:"피 묻은 가위",C:"낡은 카세트테이프",D:"깨진 회색 찻잔",E:"가죽 다이어리"}[e]||"미상의 단서";this.scannerInstruction.innerHTML=`<span style="color:#39ff14; font-weight:bold; font-size:1.1rem; animation: pulse 1.5s infinite;">🔍 단서 분석 완료: [ ${r} ]</span><br><span style="color:#cccccc; font-size:0.85rem;">(화면을 클릭하거나 E 키를 눌러 획득을 완료하십시오.)</span>`,window.inspectingMode=!0,window.inspectingCardId=e}}applyCardCollectionState(e){const t=$e.assignCardToPlayer(0,e);t&&(this.myRoleInfo=t,this.gameScene&&this.gameScene.removeCardGlobally(e),document.getElementById("my-shoes-mesh").textContent=t.shoes,this.inventoryStatus.classList.add("hidden"),this.inventoryDetails.classList.remove("hidden"),this.invRoleTitle.textContent=`역할: ${t.role}`,this.invMeshDesc.textContent=`식별 메쉬: ${t.shoes}`,this.invAudioDesc.textContent=t.audioDesc,this.playPrivateAudio(t.audioId),this.gameScene&&this.gameScene.setFlashlight(!1),this.guidanceDisplay.textContent="⚠️ 단서 동기화: 전파 방해로 인해 5초간 전등이 암전됩니다. 사운드를 감상하십시오.",t.isWet&&this.gameScene&&this.gameScene.triggerWetShaderEffect(),setTimeout(()=>{this.gamePhase==="PHASE1"&&this.gameScene&&(this.gameScene.setFlashlight(!0),this.guidanceDisplay.textContent="단서 동기화 완료. 전등이 복구되었습니다. 탐색을 계속하십시오.")},5e3),$e.allCardsCollected()&&setTimeout(()=>{this.startPhase2()},4e3))}close3DInspectView(){window.inspectingMode&&(this.gameScene&&(this.gameScene.hide3DInspectItem(),this.gameScene.canvas.requestPointerLock()),this.signalContainer&&(this.signalContainer.style.opacity="1"),this.progressFill.parentElement.style.opacity="1",this.gameScene&&this.gameScene.setFlashlight(!1),this.guidanceDisplay.textContent="⚠️ 단서 동기화: 전파 방해로 인해 5초간 전등이 암전됩니다. 사운드를 감상하십시오.",this.myRoleInfo&&this.myRoleInfo.isWet&&this.gameScene&&this.gameScene.triggerWetShaderEffect(),setTimeout(()=>{this.gamePhase==="PHASE1"&&this.gameScene&&(this.gameScene.setFlashlight(!0),this.guidanceDisplay.textContent="단서 동기화 완료. 전등이 복구되었습니다. 탐색을 계속하십시오.")},5e3),$e.allCardsCollected()&&setTimeout(()=>{this.startPhase2()},4e3),this.cameraOverlay.classList.add("hidden"),window.inspectingMode=!1)}playPrivateAudio(e){this.playPrivateAudioBtn.textContent="■ 단서 소리 중지",this.playPrivateAudioBtn.classList.add("playing"),this.audioWave.classList.add("active"),e==="Audio_300_Window"?Re.playWindowLoop(.75):e==="Audio_310_Forest"?Re.playForestLoop(.75):e==="Audio_330_Stairs"?Re.playStairsLoop(.75):e==="Audio_340_Entrance"?Re.playEntranceLoop(.75):e==="Audio_Master_Timeline"&&Re.playMasterTimeline(.75)}togglePrivateAudio(){this.myRoleInfo&&(this.playPrivateAudioBtn.classList.contains("playing")?(Re.stopClue(),this.playPrivateAudioBtn.textContent="▶ 단서 소리 듣기",this.playPrivateAudioBtn.classList.remove("playing"),this.audioWave.classList.remove("active")):this.playPrivateAudio(this.myRoleInfo.audioId))}downloadClueWavFile(e){if(!e)return;let t=null;this.downloadModal&&!this.downloadModal.classList.contains("hidden")?t=this.downloadModal.querySelector(`.download-clue-btn[data-card="${e}"]`):t=this.downloadInventoryAudioBtn;const n=t?t.textContent:"";t&&(t.textContent="⏳ 내보내는 중...",t.style.pointerEvents="none",t.style.opacity="0.7"),Re.renderWavFile(e).then(i=>{const r=new Blob([i],{type:"audio/wav"}),a=URL.createObjectURL(r),o=document.createElement("a");o.href=a;const c={A:"Rusty_Key_ZoneA",B:"Bloody_Scissors_ZoneB",C:"Cassette_Tape_Killer_ZoneC",D:"Broken_Teacup_ZoneD",E:"Leather_Diary_ZoneE"};o.download=`Namsan_1993_Clue_${c[e]||e}.wav`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),t&&(t.textContent=n,t.style.pointerEvents="auto",t.style.opacity="1")}).catch(i=>{console.error(i),alert("오디오 내보내기 실패: "+i.message),t&&(t.textContent=n,t.style.pointerEvents="auto",t.style.opacity="1")})}triggerCapture(){Re.playCameraShutterSound();const e=document.getElementById("camera-flash");e&&(e.classList.remove("hidden"),e.classList.add("flash-active"),e.offsetHeight,setTimeout(()=>{e.classList.remove("flash-active"),setTimeout(()=>{e.classList.add("hidden")},150)},40));const t=document.getElementById("game-canvas");if(t&&this.gameScene)try{this.gameScene.renderer.render(this.gameScene.scene,this.gameScene.camera);const n=t.toDataURL("image/png"),i=document.createElement("a");i.href=n,i.download=`Namsan_1993_Capture_${Date.now()}.png`,document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(n){console.error("Screenshot capture failed: ",n)}}startPhase2(){if(this.gamePhase!=="PHASE1")return;this.gamePhase="PHASE2";const e=document.getElementById("mic-level-container");e&&(e.style.display="none"),document.querySelectorAll(".hidden-phase1").forEach(i=>{i.classList.remove("hidden-phase1")});const t=document.getElementById("multi-cam-grid-panel");t&&t.classList.remove("minimal-hud"),this.botLootInterval&&clearTimeout(this.botLootInterval),Re.stopAllSpatial(),this.radarAnimationId&&(cancelAnimationFrame(this.radarAnimationId),this.radarAnimationId=null),this.forceDistributeRemainingCards(),this.gameScene.teleportToChair(0),this.gameScene.setFlashlight(!1),this.gameScene.setLoungeLights(!1),this.gameScene.moveSpeed=0,this.phaseNameDisplay.textContent="PHASE 2: 낮 - 사운드 브레이크다운",this.timerDisplay.textContent="10:00",this.currentTimer=this.phase2Duration,this.chatContainer.classList.remove("hidden"),this.chatEngine.clearChat();const n=this.chatContainer.querySelector(".chat-header");if(!document.getElementById("bypass-vote-btn")){const i=document.createElement("button");i.id="bypass-vote-btn",i.className="retro-btn",i.style.padding="2px 8px",i.style.fontSize="0.75rem",i.style.marginLeft="15px",i.style.border="1px solid var(--neon-amber)",i.style.color="var(--neon-amber)",i.style.backgroundColor="transparent",i.innerHTML="투표 개시",i.addEventListener("click",()=>this.startPhase3()),n.appendChild(i)}this.guidanceDisplay.textContent="⚠️ 완전 암흑 상태. 대화 검열을 피해 의성어와 순서로 타임라인을 대조하십시오.",this.startTimer(()=>{this.startPhase3()}),this.chatEngine.startAIDialogueLoop()}forceDistributeRemainingCards(){$e.players.forEach(e=>{var t;if(!e.cardId){const n=Object.keys($e.cardsCollected).filter(i=>!$e.cardsCollected[i]);if(n.length>0){const i=n[0];$e.assignCardToPlayer(e.id,i),this.gameScene.removeCardGlobally(i);const a=e.id===((t=$e.getKiller())==null?void 0:t.id)?"젖은 고무 슬리퍼":"건조한 신발",o=e.id===0?"my-shoes-mesh":`ai${e.id}-shoes-mesh`,c=document.getElementById(o);c&&(c.textContent=a)}}})}startPhase3(){if(this.gamePhase!=="PHASE2")return;this.gamePhase="PHASE3",this.stopTimer(),this.chatEngine.stopAIDialogueLoop(),Re.stop(),this.chatContainer.classList.add("hidden"),this.gameScene.setFlashlight(!0),this.gameScene.flashlight.angle=Math.PI/18,this.gameScene.flashlight.intensity=5,this.phaseNameDisplay.textContent="PHASE 3: 투표 - 신체 검사 개시",this.guidanceDisplay.textContent="의심되는 플레이어의 의자 방향을 바라보고 클릭하여 손전등 투표를 완료하십시오.",this.timerDisplay.textContent="VOTE";const e=()=>{if(this.gamePhase!=="PHASE3")return;const t=new Vo;t.setFromCamera(new Oe(0,0),this.gameScene.camera);const n=this.gameScene.chairs.map((r,a)=>{const o=new qe(1.5,2,1.5),c=new yt({visible:!1}),l=new ge(o,c);return l.position.copy(r.position).y+=1,l.userData={playerId:a},this.gameScene.scene.add(l),l}),i=t.intersectObjects(n);if(i.length>0){const r=i[0].object.userData.playerId;n.forEach(a=>this.gameScene.scene.remove(a)),window.removeEventListener("click",e),this.processVoteResults(r)}};setTimeout(()=>{window.addEventListener("click",e)},1e3)}processVoteResults(e){var l,u,h,d;this.gamePhase="END",this.hudOverlay.classList.remove("active"),document.exitPointerLock();const t=$e.getKiller(),n=$e.getAccomplice(),i=$e.players.find(p=>p.id===e),r=document.getElementById("end-title"),a=document.getElementById("end-subtitle"),o=document.getElementById("end-details-log");if(i&&i.cardId==="C")r.textContent="INVESTIGATORS WIN",r.className="end-title-text win",a.textContent=`처형자(${i.name}) 검거 완료.`,cp({particleCount:150,spread:80,origin:{y:.6}});else{r.textContent="CULTISTS WIN",r.className="end-title-text lose";const p=i?i.name:"시간 초과";a.textContent=`사이비 처형자가 탈출했습니다. (지목된 대상: ${p})`}let c=`
      <div class="timeline-step">
        <span class="timeline-time">[03:00]</span> 
        <span class="timeline-desc">반지하 창문 구역: 철창 뒤에서 기분 나쁜 쇠 긁기("서걱... 서걱...")에 이어 "쾅! 탕!" 격렬한 강타음 발생. 
        <strong>(담당: ${(l=$e.players.find(p=>p.cardId==="A"))==null?void 0:l.name})</strong></span>
      </div>
      <div class="timeline-step">
        <span class="timeline-time">[03:10]</span> 
        <span class="timeline-desc">나무 숲길 구역: 빽빽한 낙엽길 위를 질질 끄는 무거운 고무 발소리("지익- 잘칵-")가 멀어짐. 
        <strong>(담당: ${(u=$e.players.find(p=>p.cardId==="B"))==null?void 0:u.name})</strong></span>
      </div>
      <div class="timeline-step">
        <span class="timeline-time">[03:20]</span> 
        <span class="timeline-desc">작은 연못 구역: 연못 물가에서 격렬한 물 튀김 소리("팍! 푸하악!")와 익사 질식음("꼬르륵... 읍..."). 옷자락이 강제로 찢기며 단추들이 우수수 튕겨나감("투두둑... 팅!"). 
        <strong>(처형자: ${t==null?void 0:t.name})</strong></span>
      </div>
      <div class="timeline-step">
        <span class="timeline-time">[03:30]</span> 
        <span class="timeline-desc">철제 계단 구역: 범인이 젖은 슬리퍼를 신은 채 철제 계단단을 무겁게 뛰어올라 도망침("캉! 캉! 캉!") 마지막에 쿵 떨어짐. 
        <strong>(담당: ${(h=$e.players.find(p=>p.cardId==="D"))==null?void 0:h.name})</strong></span>
      </div>
      <div class="timeline-step">
        <span class="timeline-time">[03:40]</span> 
        <span class="timeline-desc">지하 입구 복도 구역: 대리석 복도를 가죽 단화 굽이 또각또각 걷고("또각... 또각..."), 이어 무겁고 거대한 나무 문이 쿵 닫히며 덜컹거림. 
        <strong>(담당: ${(d=$e.players.find(p=>p.cardId==="E"))==null?void 0:d.name})</strong></span>
      </div>
    `;$e.useAccomplice&&n&&(c+=`
        <div class="timeline-step" style="margin-top: 15px; border-top: 1px dashed rgba(76, 175, 80, 0.4); padding-top: 10px;">
          <span class="timeline-time">[변형 정보]</span>
          <span class="timeline-desc">이 판은 공범 모드가 활성화되었습니다. 
          <strong>${n.name}</strong>님이 사이비 처형자의 조력자였습니다.</span>
        </div>
      `),o.innerHTML=c,this.endScreen.classList.remove("hidden")}startTimer(e){this.stopTimer(),this.timerInterval=setInterval(()=>{this.currentTimer--;const t=Math.floor(this.currentTimer/60).toString().padStart(2,"0"),n=(this.currentTimer%60).toString().padStart(2,"0");this.timerDisplay.textContent=`${t}:${n}`,this.currentTimer<=0&&(this.stopTimer(),e())},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}resetGame(){const e=document.getElementById("mic-level-container");e&&(e.style.display="none");const t=document.getElementById("multi-cam-grid-panel");t&&t.classList.remove("minimal-hud"),$e.reset(),this.jumpscareTriggered=!1,Re.stop(),Re.stopClue(),Re.stopAllSpatial(),An.stop(),this.myRoleInfo=null,this.cameraStream&&(this.cameraStream.getTracks().forEach(n=>n.stop()),this.cameraStream=null),this.handsTracker&&(this.handsTracker.stop(),this.handsTracker=null),this.faceTracker&&(this.faceTracker.stop(),this.faceTracker=null),this.arBackgroundStream&&(this.arBackgroundStream.getTracks().forEach(n=>n.stop()),this.arBackgroundStream=null),document.getElementById("ar-background-video").srcObject=null,document.getElementById("ar-background-video").style.display="none",document.getElementById("my-shoes-mesh").textContent="-",document.getElementById("ai1-shoes-mesh").textContent="-",document.getElementById("ai2-shoes-mesh").textContent="-",document.getElementById("ai3-shoes-mesh").textContent="-",document.getElementById("ai4-shoes-mesh").textContent="-",this.inventoryStatus.classList.remove("hidden"),this.inventoryDetails.classList.add("hidden"),this.playPrivateAudioBtn.textContent="▶ 단서 소리 듣기",this.playPrivateAudioBtn.classList.remove("playing"),this.audioWave.classList.remove("active");for(let n=1;n<=4;n++){const i=document.getElementById(`cam-slot-${n}`);i&&i.classList.remove("no-signal")}if(this.gameScene){this.gameScene.isLocked=!1,this.gameScene.setFlashlight(!1);const n=document.getElementById("game-canvas"),i=n.parentNode,r=n.cloneNode(!0);i.replaceChild(r,n),this.gameScene=null}this.radarAnimationId&&(cancelAnimationFrame(this.radarAnimationId),this.radarAnimationId=null),this.ecgAnimationId&&(cancelAnimationFrame(this.ecgAnimationId),this.ecgAnimationId=null),this.botStressInterval&&(clearInterval(this.botStressInterval),this.botStressInterval=null),this.endScreen.classList.add("hidden"),this.lobbyScreen.classList.remove("hidden"),this.cameraOverlay.classList.add("hidden"),this.fallbackActive=!1,this.arModeActive=!1,this.arToggleBtn.textContent="AR 모드 전환 [OFF]",this.arToggleBtn.classList.remove("active"),window.touchMoving=!1,window.touchMoveVector=null}}window.addEventListener("DOMContentLoaded",()=>{window.gameController=new mp});
//# sourceMappingURL=index-WRQA8Gor.js.map
