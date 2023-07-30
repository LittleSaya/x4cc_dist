(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="151",Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qd=0,Kl=1,ef=2,_h=1,tf=2,Fr=3,ri=0,$t=1,dn=2,ei=0,ar=1,Jl=2,Ql=3,ec=4,nf=5,Qi=100,rf=101,sf=102,tc=103,nc=104,of=200,af=201,lf=202,cf=203,xh=204,vh=205,uf=206,hf=207,df=208,ff=209,pf=210,mf=0,gf=1,_f=2,Va=3,xf=4,vf=5,yf=6,wf=7,yh=0,Mf=1,Sf=2,Hn=0,bf=1,Ef=2,Af=3,Cf=4,Tf=5,wh=300,gr=301,_r=302,Ga=303,Wa=304,So=306,qa=1e3,fn=1001,Xa=1002,Wt=1003,ic=1004,jo=1005,rn=1006,Pf=1007,Yr=1008,Pi=1009,Lf=1010,Rf=1011,Mh=1012,If=1013,Si=1014,bi=1015,Zr=1016,Df=1017,Of=1018,lr=1020,Nf=1021,pn=1023,Uf=1024,Ff=1025,Ai=1026,xr=1027,zf=1028,kf=1029,Bf=1030,Hf=1031,Vf=1033,Yo=33776,Zo=33777,Ko=33778,Jo=33779,rc=35840,sc=35841,oc=35842,ac=35843,Gf=36196,lc=37492,cc=37496,uc=37808,hc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,yc=37818,wc=37819,Mc=37820,Sc=37821,Qo=36492,Wf=36283,bc=36284,Ec=36285,Ac=36286,Li=3e3,rt=3001,qf=3200,Xf=3201,$f=0,jf=1,bn="srgb",Kr="srgb-linear",Sh="display-p3",ea=7680,Yf=519,Cc=35044,Tc="300 es",$a=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,ja=180/Math.PI;function br(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function Zf(i,e){return(i%e+e)%e}function na(i,e,t){return(1-t)*i+t*e}function Pc(i){return(i&i-1)===0&&i!==0}function Kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _s(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=r[0],m=r[3],h=r[6],y=r[1],_=r[4],v=r[7],S=r[2],L=r[5],O=r[8];return s[0]=o*x+a*y+l*S,s[3]=o*m+a*_+l*L,s[6]=o*h+a*v+l*O,s[1]=c*x+u*y+d*S,s[4]=c*m+u*_+d*L,s[7]=c*h+u*v+d*O,s[2]=f*x+p*y+g*S,s[5]=f*m+p*_+g*L,s[8]=f*h+p*v+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new Ye;function bh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jf=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Qf=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ep(i){return i.convertSRGBToLinear().applyMatrix3(Qf)}function tp(i){return i.applyMatrix3(Jf).convertLinearToSRGB()}const np={[Kr]:i=>i,[bn]:i=>i.convertSRGBToLinear(),[Sh]:ep},ip={[Kr]:i=>i,[bn]:i=>i.convertLinearToSRGB(),[Sh]:tp},Kt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Kr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=np[e],r=ip[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Ui;class Eh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=fo("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ah{constructor(e=null){this.isSource=!0,this.uuid=br(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sa(r[o].image)):s.push(sa(r[o]))}else s=sa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class en extends Oi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=fn,r=fn,s=rn,o=Yr,a=pn,l=Pi,c=en.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=br(),this.name="",this.source=new Ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=wh;en.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(p+1)/2,S=(h+1)/2,L=(u+f)/4,O=(d+x)/4,I=(g+m)/4;return _>v&&_>S?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=L/n,s=O/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=L/r,s=I/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=O/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ri extends Oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new en(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ch extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sp extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*x,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const S=Math.sqrt(_),L=Math.atan2(S,h*y);m=Math.sin(m*L)/S,a=Math.sin(a*L)/S}const v=a*y;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,d=d*m+x*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-a*p,e[t+2]=c*g+u*p+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,d=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-d*-o,this.y=u*l+f*-o+d*-s-c*-a,this.z=d*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new P,Lc=new Pt;class hs{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Fi.copy(e.boundingBox),Fi.applyMatrix4(e.matrixWorld),this.union(Fi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)In.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else r.boundingBox===null&&r.computeBoundingBox(),Fi.copy(r.boundingBox),Fi.applyMatrix4(e.matrixWorld),this.union(Fi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),xs.subVectors(this.max,Lr),zi.subVectors(e.a,Lr),ki.subVectors(e.b,Lr),Bi.subVectors(e.c,Lr),qn.subVectors(ki,zi),Xn.subVectors(Bi,ki),ci.subVectors(zi,Bi);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-ci.z,ci.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,ci.z,0,-ci.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-ci.y,ci.x,0];return!aa(t,zi,ki,Bi,xs)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,zi,ki,Bi,xs))?!1:(vs.crossVectors(qn,Xn),t=[vs.x,vs.y,vs.z],aa(t,zi,ki,Bi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new P,new P,new P,new P,new P,new P,new P,new P],In=new P,Fi=new hs,zi=new P,ki=new P,Bi=new P,qn=new P,Xn=new P,ci=new P,Lr=new P,xs=new P,vs=new P,ui=new P;function aa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ui.fromArray(i,s);const a=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const op=new hs,Rr=new P,la=new P;class bo{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(la)),this.expandByPoint(Rr.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new P,ca=new P,ys=new P,$n=new P,ua=new P,ws=new P,ha=new P;class gl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ca.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=$n.dot(this.direction),l=-$n.dot(ys),c=$n.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ca).addScaledVector(ys,f),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,r,s){ua.subVectors(t,e),ws.subVectors(n,e),ha.crossVectors(ua,ws);let o=this.direction.dot(ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(ws.crossVectors($n,ws));if(l<0)return null;const c=a*this.direction.dot(ua.cross($n));if(c<0||l+c>o)return null;const u=-a*$n.dot(ha);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,d,f,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,x=c*d;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ap,e,lp)}lookAt(e,t,n){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(n,Jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(n,Jt)),jn.normalize(),Ms.crossVectors(Jt,jn),r[0]=jn.x,r[4]=Ms.x,r[8]=Jt.x,r[1]=jn.y,r[5]=Ms.y,r[9]=Jt.y,r[2]=jn.z,r[6]=Ms.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],h=n[14],y=n[3],_=n[7],v=n[11],S=n[15],L=r[0],O=r[4],I=r[8],w=r[12],b=r[1],U=r[5],W=r[9],F=r[13],N=r[2],G=r[6],ie=r[10],ee=r[14],j=r[3],re=r[7],de=r[11],Me=r[15];return s[0]=o*L+a*b+l*N+c*j,s[4]=o*O+a*U+l*G+c*re,s[8]=o*I+a*W+l*ie+c*de,s[12]=o*w+a*F+l*ee+c*Me,s[1]=u*L+d*b+f*N+p*j,s[5]=u*O+d*U+f*G+p*re,s[9]=u*I+d*W+f*ie+p*de,s[13]=u*w+d*F+f*ee+p*Me,s[2]=g*L+x*b+m*N+h*j,s[6]=g*O+x*U+m*G+h*re,s[10]=g*I+x*W+m*ie+h*de,s[14]=g*w+x*F+m*ee+h*Me,s[3]=y*L+_*b+v*N+S*j,s[7]=y*O+_*U+v*G+S*re,s[11]=y*I+_*W+v*ie+S*de,s[15]=y*w+_*F+v*ee+S*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*p-n*l*p)+x*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*u-n*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],y=d*m*c-x*f*c+x*l*p-a*m*p-d*l*h+a*f*h,_=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,v=u*x*c-g*d*c+g*a*p-o*x*p-u*a*h+o*d*h,S=g*d*l-u*x*l-g*a*f+o*x*f+u*a*m-o*d*m,L=t*y+n*_+r*v+s*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=y*O,e[1]=(x*f*s-d*m*s-x*r*p+n*m*p+d*r*h-n*f*h)*O,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*h+n*l*h)*O,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*p-n*l*p)*O,e[4]=_*O,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*O,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*O,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*O,e[8]=v*O,e[9]=(g*d*s-u*x*s-g*n*p+t*x*p+u*n*h-t*d*h)*O,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*h+t*a*h)*O,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*p-t*a*p)*O,e[12]=S*O,e[13]=(u*x*r-g*d*r+g*n*f-t*x*f-u*n*m+t*d*m)*O,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*O,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*f+t*a*f)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,x=o*u,m=o*d,h=a*d,y=l*c,_=l*u,v=l*d,S=n.x,L=n.y,O=n.z;return r[0]=(1-(x+h))*S,r[1]=(p+v)*S,r[2]=(g-_)*S,r[3]=0,r[4]=(p-v)*L,r[5]=(1-(f+h))*L,r[6]=(m+y)*L,r[7]=0,r[8]=(g+_)*O,r[9]=(m-y)*O,r[10]=(1-(f+x))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),a=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),d=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new P,an=new _t,ap=new P(0,0,0),lp=new P(1,1,1),jn=new P,Ms=new P,Jt=new P,Rc=new _t,Ic=new Pt;class ds{constructor(e=0,t=0,n=0,r=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cp=0;const Dc=new P,Vi=new Pt,On=new _t,Ss=new P,Ir=new P,up=new P,hp=new Pt,Oc=new P(1,0,0),Nc=new P(0,1,0),Uc=new P(0,0,1),dp={type:"added"},Fc={type:"removed"};class yt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new P,t=new ds,n=new Pt,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ye}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ir,Ss,this.up):On.lookAt(Ss,Ir,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(On),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Fc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new P(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new P,Nn=new P,da=new P,Un=new P,Gi=new P,Wi=new P,zc=new P,fa=new P,pa=new P,ma=new P;let bs=!1;class hn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ln.subVectors(r,t),Nn.subVectors(n,t),da.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Nn),l=ln.dot(da),c=Nn.dot(Nn),u=Nn.dot(da),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,r,s,o,a,l){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Un),l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l}static isFrontFacing(e,t,n,r){return ln.subVectors(n,t),Nn.subVectors(e,t),ln.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),hn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Gi.subVectors(r,n),Wi.subVectors(s,n),fa.subVectors(e,n);const l=Gi.dot(fa),c=Wi.dot(fa);if(l<=0&&c<=0)return t.copy(n);pa.subVectors(e,r);const u=Gi.dot(pa),d=Wi.dot(pa);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gi,o);ma.subVectors(e,s);const p=Gi.dot(ma),g=Wi.dot(ma);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wi,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return zc.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(zc,a);const h=1/(m+x+f);return o=x*h,a=f*h,t.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fp=0;class fs extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=br(),this.name="",this.type="Material",this.blending=ar,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function ga(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Kt.workingColorSpace){if(e=Zf(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ga(o,s,e+1/3),this.g=ga(o,s,e),this.b=ga(o,s,e-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Kt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Kt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Kt.fromWorkingColorSpace(Ot.copy(this),e),Lt(Ot.r*255,0,255)<<16^Lt(Ot.g*255,0,255)<<8^Lt(Ot.b*255,0,255)<<0}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=bn){Kt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,r=Ot.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(cn),cn.h+=e,cn.s+=t,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Es);const n=na(cn.h,Es.h,t),r=na(cn.s,Es.s,t),s=na(cn.l,Es.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Te;Te.NAMES=Th;class Re extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new P,As=new ge;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ph extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lh extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Je extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pp=0;const nn=new _t,_a=new yt,qi=new P,Qt=new hs,Dr=new hs,Et=new P;class Ct extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?Lh:Ph)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Qt.min,Dr.min),Qt.expandByPoint(Et),Et.addVectors(Qt.max,Dr.max),Qt.expandByPoint(Et)):(Qt.expandByPoint(Dr.min),Qt.expandByPoint(Dr.max))}Qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(e,c),Et.add(qi)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new P,u[b]=new P;const d=new P,f=new P,p=new P,g=new ge,x=new ge,m=new ge,h=new P,y=new P;function _(b,U,W){d.fromArray(r,b*3),f.fromArray(r,U*3),p.fromArray(r,W*3),g.fromArray(o,b*2),x.fromArray(o,U*2),m.fromArray(o,W*2),f.sub(d),p.sub(d),x.sub(g),m.sub(g);const F=1/(x.x*m.y-m.x*x.y);isFinite(F)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(F),y.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(F),c[b].add(h),c[U].add(h),c[W].add(h),u[b].add(y),u[U].add(y),u[W].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let b=0,U=v.length;b<U;++b){const W=v[b],F=W.start,N=W.count;for(let G=F,ie=F+N;G<ie;G+=3)_(n[G+0],n[G+1],n[G+2])}const S=new P,L=new P,O=new P,I=new P;function w(b){O.fromArray(s,b*3),I.copy(O);const U=c[b];S.copy(U),S.sub(O.multiplyScalar(O.dot(U))).normalize(),L.crossVectors(I,U);const F=L.dot(u[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=F}for(let b=0,U=v.length;b<U;++b){const W=v[b],F=W.start,N=W.count;for(let G=F,ie=F+N;G<ie;G+=3)w(n[G+0]),w(n[G+1]),w(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Tn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new _t,wn=new gl,Cs=new bo,Bc=new P,Xi=new P,$i=new P,ji=new P,xa=new P,Ts=new P,Ps=new ge,Ls=new ge,Rs=new ge,Hc=new P,Vc=new P,Gc=new P,Is=new P,Ds=new P;class we extends yt{constructor(e=new Ct,t=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ts.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(xa.fromBufferAttribute(d,e),o?Ts.addScaledVector(xa,u):Ts.addScaledVector(xa.sub(t),u))}t.add(Ts)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),wn.copy(e.ray).recast(e.near),Cs.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Cs,Bc)===null||wn.origin.distanceToSquared(Bc)>(e.far-e.near)**2))||(kc.copy(s).invert(),wn.copy(e.ray).applyMatrix4(kc),n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.attributes.normal,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=r[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,S=_;v<S;v+=3){const L=a.getX(v),O=a.getX(v+1),I=a.getX(v+2);o=Os(this,h,e,wn,c,u,d,L,O,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);o=Os(this,r,e,wn,c,u,d,y,_,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=r[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,S=_;v<S;v+=3){const L=v,O=v+1,I=v+2;o=Os(this,h,e,wn,c,u,d,L,O,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const y=m,_=m+1,v=m+2;o=Os(this,r,e,wn,c,u,d,y,_,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function mp(i,e,t,n,r,s,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ri,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:i}}function Os(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Xi),i.getVertexPosition(l,$i),i.getVertexPosition(c,ji);const u=mp(i,e,t,n,Xi,$i,ji,Is);if(u){r&&(Ps.fromBufferAttribute(r,a),Ls.fromBufferAttribute(r,l),Rs.fromBufferAttribute(r,c),u.uv=hn.getInterpolation(Is,Xi,$i,ji,Ps,Ls,Rs,new ge)),s&&(Ps.fromBufferAttribute(s,a),Ls.fromBufferAttribute(s,l),Rs.fromBufferAttribute(s,c),u.uv2=hn.getInterpolation(Is,Xi,$i,ji,Ps,Ls,Rs,new ge)),o&&(Hc.fromBufferAttribute(o,a),Vc.fromBufferAttribute(o,l),Gc.fromBufferAttribute(o,c),u.normal=hn.getInterpolation(Is,Xi,$i,ji,Hc,Vc,Gc,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};hn.getNormal(Xi,$i,ji,d.normal),u.face=d}return u}class pt extends Ct{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function g(x,m,h,y,_,v,S,L,O,I,w){const b=v/O,U=S/I,W=v/2,F=S/2,N=L/2,G=O+1,ie=I+1;let ee=0,j=0;const re=new P;for(let de=0;de<ie;de++){const Me=de*U-F;for(let me=0;me<G;me++){const te=me*b-W;re[x]=te*y,re[m]=Me*_,re[h]=N,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[h]=L>0?1:-1,u.push(re.x,re.y,re.z),d.push(me/O),d.push(1-de/I),ee+=1}}for(let de=0;de<I;de++)for(let Me=0;Me<O;Me++){const me=f+Me+G*de,te=f+Me+G*(de+1),ue=f+(Me+1)+G*(de+1),ve=f+(Me+1)+G*de;l.push(me,te,ve),l.push(te,ue,ve),j+=6}a.addGroup(p,j,w),p+=j,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=vr(i[t]);for(const r in n)e[r]=n[r]}return e}function gp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rh(i){return i.getRenderTarget()===null&&i.outputEncoding===rt?bn:Kr}const _p={clone:vr,merge:Vt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ih extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Ih{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Zi=1;class yp extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new sn(Yi,Zi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new sn(Yi,Zi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new sn(Yi,Zi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new sn(Yi,Zi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new sn(Yi,Zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new sn(Yi,Zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Hn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Dh extends en{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wp extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Dh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pt(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ei});s.uniforms.tEquirect.value=t;const o=new we(r,s),a=t.minFilter;return t.minFilter===Yr&&(t.minFilter=rn),new yp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const va=new P,Mp=new P,Sp=new Ye;class mi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=va.subVectors(n,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sp.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new bo,Ns=new P;class Oh{constructor(e=new mi,t=new mi,n=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],p=n[9],g=n[10],x=n[11],m=n[12],h=n[13],y=n[14],_=n[15];return t[0].setComponents(a-r,d-l,x-f,_-m).normalize(),t[1].setComponents(a+r,d+l,x+f,_+m).normalize(),t[2].setComponents(a+s,d+c,x+p,_+h).normalize(),t[3].setComponents(a-s,d-c,x-p,_-h).normalize(),t[4].setComponents(a-o,d-u,x-g,_-y).normalize(),t[5].setComponents(a+o,d+u,x+g,_+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bp(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,p=u.updateRange;i.bindBuffer(d,c),p.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Eo extends Ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const y=h*f-o;for(let _=0;_<c;_++){const v=_*d-s;g.push(v,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const _=y+c*h,v=y+c*(h+1),S=y+1+c*(h+1),L=y+1+c*h;p.push(_,v,L),p.push(v,S,L)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp="vec3 transformed = vec3( position );",Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Op=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,pm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,ym=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,wm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s0=`float getShadowMask() {
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
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,g0=`#ifdef USE_UV
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
#endif`,_0=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,x0=`#ifdef USE_UV
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,A0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,C0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,T0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,P0=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,F0=`#define LAMBERT
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,k0=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,H0=`#define NORMAL
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
}`,V0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,G0=`#define PHONG
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,q0=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,$0=`#define TOON
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,K0=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,J0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:Ep,alphamap_pars_fragment:Ap,alphatest_fragment:Cp,alphatest_pars_fragment:Tp,aomap_fragment:Pp,aomap_pars_fragment:Lp,begin_vertex:Rp,beginnormal_vertex:Ip,bsdfs:Dp,iridescence_fragment:Op,bumpmap_pars_fragment:Np,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:kp,color_fragment:Bp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:Gp,common:Wp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:$p,displacementmap_vertex:jp,emissivemap_fragment:Yp,emissivemap_pars_fragment:Zp,encodings_fragment:Kp,encodings_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:em,envmap_pars_fragment:tm,envmap_pars_vertex:nm,envmap_physical_pars_fragment:pm,envmap_vertex:im,fog_vertex:rm,fog_pars_vertex:sm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:lm,lightmap_fragment:cm,lightmap_pars_fragment:um,lights_lambert_fragment:hm,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:vm,lights_physical_pars_fragment:ym,lights_fragment_begin:wm,lights_fragment_maps:Mm,lights_fragment_end:Sm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Cm,map_fragment:Tm,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Rm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Dm,morphcolor_vertex:Om,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:zm,normal_fragment_maps:km,normal_pars_fragment:Bm,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:$m,output_fragment:jm,packing:Ym,premultiplied_alpha_fragment:Zm,project_vertex:Km,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:e0,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:r0,shadowmask_pars_fragment:s0,skinbase_vertex:o0,skinning_pars_vertex:a0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:u0,specularmap_pars_fragment:h0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:_0,uv_vertex:x0,worldpos_vertex:v0,background_vert:y0,background_frag:w0,backgroundCube_vert:M0,backgroundCube_frag:S0,cube_vert:b0,cube_frag:E0,depth_vert:A0,depth_frag:C0,distanceRGBA_vert:T0,distanceRGBA_frag:P0,equirect_vert:L0,equirect_frag:R0,linedashed_vert:I0,linedashed_frag:D0,meshbasic_vert:O0,meshbasic_frag:N0,meshlambert_vert:U0,meshlambert_frag:F0,meshmatcap_vert:z0,meshmatcap_frag:k0,meshnormal_vert:B0,meshnormal_frag:H0,meshphong_vert:V0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:q0,meshtoon_vert:X0,meshtoon_frag:$0,points_vert:j0,points_frag:Y0,shadow_vert:Z0,shadow_frag:K0,sprite_vert:J0,sprite_frag:Q0},ye={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaTest:{value:0}}},En={basic:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Te(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Vt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Vt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Te(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Vt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Vt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Vt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Vt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Vt([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Vt([ye.lights,ye.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};En.physical={uniforms:Vt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Us={r:0,b:0,g:0};function eg(i,e,t,n,r,s,o){const a=new Te(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(m,h){let y=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_));const v=i.xr,S=v.getSession&&v.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?x(a,l):_&&_.isColor&&(x(_,1),y=!0),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===So)?(u===void 0&&(u=new we(new pt(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:vr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=_.encoding!==rt,(d!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new we(new Eo(2,2),new Ii({name:"BackgroundMaterial",uniforms:vr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=_.encoding!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(Us,Rh(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function tg(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(N,G,ie,ee,j){let re=!1;if(o){const de=x(ee,ie,G);c!==de&&(c=de,p(c.object)),re=h(N,ee,ie,j),re&&y(N,ee,ie,j)}else{const de=G.wireframe===!0;(c.geometry!==ee.id||c.program!==ie.id||c.wireframe!==de)&&(c.geometry=ee.id,c.program=ie.id,c.wireframe=de,re=!0)}j!==null&&t.update(j,34963),(re||u)&&(u=!1,I(N,G,ie,ee),j!==null&&i.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,G,ie){const ee=ie.wireframe===!0;let j=a[N.id];j===void 0&&(j={},a[N.id]=j);let re=j[G.id];re===void 0&&(re={},j[G.id]=re);let de=re[ee];return de===void 0&&(de=m(f()),re[ee]=de),de}function m(N){const G=[],ie=[],ee=[];for(let j=0;j<r;j++)G[j]=0,ie[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ie,attributeDivisors:ee,object:N,attributes:{},index:null}}function h(N,G,ie,ee){const j=c.attributes,re=G.attributes;let de=0;const Me=ie.getAttributes();for(const me in Me)if(Me[me].location>=0){const ue=j[me];let ve=re[me];if(ve===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;de++}return c.attributesNum!==de||c.index!==ee}function y(N,G,ie,ee){const j={},re=G.attributes;let de=0;const Me=ie.getAttributes();for(const me in Me)if(Me[me].location>=0){let ue=re[me];ue===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),j[me]=ve,de++}c.attributes=j,c.attributesNum=de,c.index=ee}function _(){const N=c.newAttributes;for(let G=0,ie=N.length;G<ie;G++)N[G]=0}function v(N){S(N,0)}function S(N,G){const ie=c.newAttributes,ee=c.enabledAttributes,j=c.attributeDivisors;ie[N]=1,ee[N]===0&&(i.enableVertexAttribArray(N),ee[N]=1),j[N]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),j[N]=G)}function L(){const N=c.newAttributes,G=c.enabledAttributes;for(let ie=0,ee=G.length;ie<ee;ie++)G[ie]!==N[ie]&&(i.disableVertexAttribArray(ie),G[ie]=0)}function O(N,G,ie,ee,j,re){n.isWebGL2===!0&&(ie===5124||ie===5125)?i.vertexAttribIPointer(N,G,ie,j,re):i.vertexAttribPointer(N,G,ie,ee,j,re)}function I(N,G,ie,ee){if(n.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=ee.attributes,re=ie.getAttributes(),de=G.defaultAttributeValues;for(const Me in re){const me=re[Me];if(me.location>=0){let te=j[Me];if(te===void 0&&(Me==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),Me==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){const ue=te.normalized,ve=te.itemSize,xe=t.get(te);if(xe===void 0)continue;const $=xe.buffer,Ne=xe.type,Le=xe.bytesPerElement;if(te.isInterleavedBufferAttribute){const pe=te.data,Ce=pe.stride,E=te.offset;if(pe.isInstancedInterleavedBuffer){for(let C=0;C<me.locationSize;C++)S(me.location+C,pe.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let C=0;C<me.locationSize;C++)v(me.location+C);i.bindBuffer(34962,$);for(let C=0;C<me.locationSize;C++)O(me.location+C,ve/me.locationSize,Ne,ue,Ce*Le,(E+ve/me.locationSize*C)*Le)}else{if(te.isInstancedBufferAttribute){for(let pe=0;pe<me.locationSize;pe++)S(me.location+pe,te.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<me.locationSize;pe++)v(me.location+pe);i.bindBuffer(34962,$);for(let pe=0;pe<me.locationSize;pe++)O(me.location+pe,ve/me.locationSize,Ne,ue,ve*Le,ve/me.locationSize*pe*Le)}}else if(de!==void 0){const ue=de[Me];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(me.location,ue);break;case 3:i.vertexAttrib3fv(me.location,ue);break;case 4:i.vertexAttrib4fv(me.location,ue);break;default:i.vertexAttrib1fv(me.location,ue)}}}}L()}function w(){W();for(const N in a){const G=a[N];for(const ie in G){const ee=G[ie];for(const j in ee)g(ee[j].object),delete ee[j];delete G[ie]}delete a[N]}}function b(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const ie in G){const ee=G[ie];for(const j in ee)g(ee[j].object),delete ee[j];delete G[ie]}delete a[N.id]}function U(N){for(const G in a){const ie=a[G];if(ie[N.id]===void 0)continue;const ee=ie[N.id];for(const j in ee)g(ee[j].object),delete ee[j];delete ie[N.id]}}function W(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:v,disableUnusedAttributes:L}}function ng(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function ig(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),x=i.getParameter(34921),m=i.getParameter(36347),h=i.getParameter(36348),y=i.getParameter(36349),_=f>0,v=o||e.has("OES_texture_float"),S=_&&v,L=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:L}}function rg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new mi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,_=y*4;let v=h.clippingState||null;l.value=v,v=u(g,f,_,p);for(let S=0;S!==_;++S)v[S]=t[S];h.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,v=p;_!==x;++_,v+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function sg(i){let e=new WeakMap;function t(o,a){return a===Ga?o.mapping=gr:a===Wa&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ga||a===Wa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wp(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class og extends Ih{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,Wc=[.125,.215,.35,.446,.526,.582],xi=20,ya=new og,qc=new Te;let wa=null;const gi=(1+Math.sqrt(5))/2,Ki=1/gi,Xc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,gi,Ki),new P(0,gi,-Ki),new P(Ki,0,gi),new P(-Ki,0,gi),new P(gi,Ki,0),new P(-gi,Ki,0)];class $c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa),e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Zr,format:pn,encoding:Li,depthBuffer:!1},r=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(s)),this._blurMaterial=lg(s,e,t)}return r}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,r){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(qc),u.toneMapping=Hn,u.autoClear=!1;const p=new Re({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new we(new pt,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(qc),x=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;Fs(r,y*_,h>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xc[(r-1)%Xc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new we(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xi-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const h=[];let y=0;for(let O=0;O<xi;++O){const I=O/x,w=Math.exp(-I*I/2);h.push(w),O===0?y+=w:O<m&&(y+=2*w)}for(let O=0;O<h.length;O++)h[O]=h[O]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const v=this._sizeLods[r],S=3*v*(r>_-er?r-_+er:0),L=4*(this._cubeSize-v);Fs(t,S,L,3*v,2*v),l.setRenderTarget(t),l.render(d,ya)}}function ag(i){const e=[],t=[],n=[];let r=i;const s=i-er+1+Wc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-er?l=Wc[o-i+er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,h=1,y=new Float32Array(x*g*p),_=new Float32Array(m*g*p),v=new Float32Array(h*g*p);for(let L=0;L<p;L++){const O=L%3*2/3-1,I=L>2?0:-1,w=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];y.set(w,x*g*L),_.set(f,m*g*L);const b=[L,L,L,L,L,L];v.set(b,h*g*L)}const S=new Ct;S.setAttribute("position",new Tn(y,x)),S.setAttribute("uv",new Tn(_,m)),S.setAttribute("faceIndex",new Tn(v,h)),e.push(S),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jc(i,e,t){const n=new Ri(i,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lg(i,e,t){const n=new Float32Array(xi),r=new P(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Yc(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Zc(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}function cg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===Wa,u=l===gr||l===_r;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new $c(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new $c(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ug(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hg(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,h=x.length;m<h;m++)e.update(x[m],34962)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let _=0,v=y.length;_<v;_+=3){const S=y[_+0],L=y[_+1],O=y[_+2];f.push(S,L,L,O,O,S)}}else{const y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const S=_+0,L=_+1,O=_+2;f.push(S,L,L,O,O,S)}}const m=new(bh(f)?Lh:Ph)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function dg(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function d(f,p,g){if(g===0)return;let x,m;if(r)x=i,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function fg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pg(i,e){return i[0]-e[0]}function mg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function gg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==g){let N=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",N)};x!==void 0&&x.texture.dispose();const y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let I=0;y===!0&&(I=1),_===!0&&(I=2),v===!0&&(I=3);let w=u.attributes.position.count*I,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*b*4*g),W=new Ch(U,w,b,g);W.type=bi,W.needsUpdate=!0;const F=I*4;for(let G=0;G<g;G++){const ie=S[G],ee=L[G],j=O[G],re=w*b*4*G;for(let de=0;de<ie.count;de++){const Me=de*F;y===!0&&(o.fromBufferAttribute(ie,de),U[re+Me+0]=o.x,U[re+Me+1]=o.y,U[re+Me+2]=o.z,U[re+Me+3]=0),_===!0&&(o.fromBufferAttribute(ee,de),U[re+Me+4]=o.x,U[re+Me+5]=o.y,U[re+Me+6]=o.z,U[re+Me+7]=0),v===!0&&(o.fromBufferAttribute(j,de),U[re+Me+8]=o.x,U[re+Me+9]=o.y,U[re+Me+10]=o.z,U[re+Me+11]=j.itemSize===4?o.w:1)}}x={count:g,texture:W,size:new ge(w,b)},s.set(u,x),u.addEventListener("dispose",N)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];const h=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",h),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const p=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<p;_++){const v=g[_];v[0]=_,v[1]=f[_]}g.sort(mg);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(pg);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let h=0;for(let _=0;_<8;_++){const v=a[_],S=v[0],L=v[1];S!==Number.MAX_SAFE_INTEGER&&L?(x&&u.getAttribute("morphTarget"+_)!==x[S]&&u.setAttribute("morphTarget"+_,x[S]),m&&u.getAttribute("morphNormal"+_)!==m[S]&&u.setAttribute("morphNormal"+_,m[S]),r[_]=L,h+=L):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const y=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function _g(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Uh=new en,Fh=new Ch,zh=new sp,kh=new Dh,Kc=[],Jc=[],Qc=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Er(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Kc[r];if(s===void 0&&(s=new Float32Array(r),Kc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ao(i,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(wt(t,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),Mt(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(wt(t,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),Mt(t,n)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(wt(t,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Mt(t,n)}}function Eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Uh,r)}function Og(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zh,r)}function Ng(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kh,r)}function Ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fh,r)}function Fg(i){switch(i){case 5126:return xg;case 35664:return vg;case 35665:return yg;case 35666:return wg;case 35674:return Mg;case 35675:return Sg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Tg;case 5125:return Pg;case 36294:return Lg;case 36295:return Rg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}function zg(i,e){i.uniform1fv(this.addr,e)}function kg(i,e){const t=Er(e,this.size,2);i.uniform2fv(this.addr,t)}function Bg(i,e){const t=Er(e,this.size,3);i.uniform3fv(this.addr,t)}function Hg(i,e){const t=Er(e,this.size,4);i.uniform4fv(this.addr,t)}function Vg(i,e){const t=Er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gg(i,e){const t=Er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wg(i,e){const t=Er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function $g(i,e){i.uniform3iv(this.addr,e)}function jg(i,e){i.uniform4iv(this.addr,e)}function Yg(i,e){i.uniform1uiv(this.addr,e)}function Zg(i,e){i.uniform2uiv(this.addr,e)}function Kg(i,e){i.uniform3uiv(this.addr,e)}function Jg(i,e){i.uniform4uiv(this.addr,e)}function Qg(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Uh,s[o])}function e_(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function t_(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kh,s[o])}function n_(i,e,t){const n=this.cache,r=e.length,s=Ao(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fh,s[o])}function i_(i){switch(i){case 5126:return zg;case 35664:return kg;case 35665:return Bg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return qg;case 35667:case 35671:return Xg;case 35668:case 35672:return $g;case 35669:case 35673:return jg;case 5125:return Yg;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Fg(t.type)}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=i_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function nu(i,e){i.seq.push(e),i.map[e.id]=e}function a_(i,e,t){const n=i.name,r=n.length;for(Ma.lastIndex=0;;){const s=Ma.exec(n),o=Ma.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nu(t,c===void 0?new r_(a,i,e):new s_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new o_(a),nu(t,d)),t=d}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);a_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function iu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let l_=0;function c_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function u_(i){switch(i){case Li:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ru(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+c_(i.getShaderSource(e),o)}else return r}function h_(i,e){const t=u_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function d_(i,e){let t;switch(e){case bf:t="Linear";break;case Ef:t="Reinhard";break;case Af:t="OptimizedCineon";break;case Cf:t="ACESFilmic";break;case Tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function f_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zr).join(`
`)}function p_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m_(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zr(i){return i!==""}function su(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(g_,__)}function __(i,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ya(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(i){return i.replace(x_,v_)}function v_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function w_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function S_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case Mf:e="ENVMAP_BLENDING_MIX";break;case Sf:e="ENVMAP_BLENDING_ADD";break}return e}function b_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function E_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=y_(t),c=w_(t),u=M_(t),d=S_(t),f=b_(t),p=t.isWebGL2?"":f_(t),g=p_(s),x=r.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(zr).join(`
`),m.length>0&&(m+=`
`),h=[p,g].filter(zr).join(`
`),h.length>0&&(h+=`
`)):(m=[lu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),h=[p,lu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Hn?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,h_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=Ya(o),o=su(o,t),o=ou(o,t),a=Ya(a),a=su(a,t),a=ou(a,t),o=au(o),a=au(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=y+m+o,v=y+h+a,S=iu(r,35633,_),L=iu(r,35632,v);if(r.attachShader(x,S),r.attachShader(x,L),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(x).trim(),b=r.getShaderInfoLog(S).trim(),U=r.getShaderInfoLog(L).trim();let W=!0,F=!0;if(r.getProgramParameter(x,35714)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,S,L);else{const N=ru(r,S,"vertex"),G=ru(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,35715)+`

Program Info Log: `+w+`
`+N+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(b===""||U==="")&&(F=!1);F&&(this.diagnostics={runnable:W,programLog:w,vertexShader:{log:b,prefix:m},fragmentShader:{log:U,prefix:h}})}r.deleteShader(S),r.deleteShader(L);let O;this.getUniforms=function(){return O===void 0&&(O=new io(r,x)),O};let I;return this.getAttributes=function(){return I===void 0&&(I=m_(r,x)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=L,this}let A_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new T_(e),t.set(e,n)),n}}class T_{constructor(e){this.id=A_++,this.code=e,this.usedTimes=0}}function P_(i,e,t,n,r,s,o){const a=new _l,l=new C_,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===1?"uv2":"uv"}function m(w,b,U,W,F){const N=W.fog,G=F.geometry,ie=w.isMeshStandardMaterial?W.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||ie),j=ee&&ee.mapping===So?ee.image.height:null,re=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const de=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=de!==void 0?de.length:0;let me=0;G.morphAttributes.position!==void 0&&(me=1),G.morphAttributes.normal!==void 0&&(me=2),G.morphAttributes.color!==void 0&&(me=3);let te,ue,ve,xe;if(re){const Ee=En[re];te=Ee.vertexShader,ue=Ee.fragmentShader}else te=w.vertexShader,ue=w.fragmentShader,l.update(w),ve=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);const $=i.getRenderTarget(),Ne=F.isInstancedMesh===!0,Le=!!w.map,pe=!!w.matcap,Ce=!!ee,E=!!w.aoMap,C=!!w.lightMap,D=!!w.bumpMap,H=!!w.normalMap,B=!!w.displacementMap,K=!!w.emissiveMap,se=!!w.metalnessMap,Z=!!w.roughnessMap,le=w.clearcoat>0,ne=w.iridescence>0,A=w.sheen>0,M=w.transmission>0,z=le&&!!w.clearcoatMap,Y=le&&!!w.clearcoatNormalMap,Q=le&&!!w.clearcoatRoughnessMap,he=ne&&!!w.iridescenceMap,R=ne&&!!w.iridescenceThicknessMap,J=A&&!!w.sheenColorMap,q=A&&!!w.sheenRoughnessMap,_e=!!w.specularMap,Ae=!!w.specularColorMap,Pe=!!w.specularIntensityMap,be=M&&!!w.transmissionMap,Se=M&&!!w.thicknessMap,Ie=!!w.gradientMap,He=!!w.alphaMap,dt=w.alphaTest>0,k=!!w.extensions,ae=!!G.attributes.uv2;return{isWebGL2:u,shaderID:re,shaderName:w.type,vertexShader:te,fragmentShader:ue,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?i.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Li,map:Le,matcap:pe,envMap:Ce,envMapMode:Ce&&ee.mapping,envMapCubeUVHeight:j,aoMap:E,lightMap:C,bumpMap:D,normalMap:H,displacementMap:f&&B,emissiveMap:K,normalMapObjectSpace:H&&w.normalMapType===jf,normalMapTangentSpace:H&&w.normalMapType===$f,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&w.map.encoding===rt,metalnessMap:se,roughnessMap:Z,clearcoat:le,clearcoatMap:z,clearcoatNormalMap:Y,clearcoatRoughnessMap:Q,iridescence:ne,iridescenceMap:he,iridescenceThicknessMap:R,sheen:A,sheenColorMap:J,sheenRoughnessMap:q,specularMap:_e,specularColorMap:Ae,specularIntensityMap:Pe,transmission:M,transmissionMap:be,thicknessMap:Se,gradientMap:Ie,opaque:w.transparent===!1&&w.blending===ar,alphaMap:He,alphaTest:dt,combine:w.combine,mapUv:Le&&x(w.map.channel),aoMapUv:E&&x(w.aoMap.channel),lightMapUv:C&&x(w.lightMap.channel),bumpMapUv:D&&x(w.bumpMap.channel),normalMapUv:H&&x(w.normalMap.channel),displacementMapUv:B&&x(w.displacementMap.channel),emissiveMapUv:K&&x(w.emissiveMap.channel),metalnessMapUv:se&&x(w.metalnessMap.channel),roughnessMapUv:Z&&x(w.roughnessMap.channel),clearcoatMapUv:z&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Y&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:R&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:J&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:q&&x(w.sheenRoughnessMap.channel),specularMapUv:_e&&x(w.specularMap.channel),specularColorMapUv:Ae&&x(w.specularColorMap.channel),specularIntensityMapUv:Pe&&x(w.specularIntensityMap.channel),transmissionMapUv:be&&x(w.transmissionMap.channel),thicknessMapUv:Se&&x(w.thicknessMap.channel),alphaMapUv:He&&x(w.alphaMap.channel),vertexTangents:H&&!!G.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUvs2:ae,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Le||He),fog:!!N,useFog:w.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:w.toneMapped?i.toneMapping:Hn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===dn,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:k&&w.extensions.derivatives===!0,extensionFragDepth:k&&w.extensions.fragDepth===!0,extensionDrawBuffers:k&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:k&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)b.push(U),b.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(i.outputEncoding)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputEncoding),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUvs2&&a.enable(13),b.vertexTangents&&a.enable(14),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.decodeVideoTexture&&a.enable(17),b.opaque&&a.enable(18),b.pointsUvs&&a.enable(19),w.push(a.mask)}function v(w){const b=g[w.type];let U;if(b){const W=En[b];U=_p.clone(W.uniforms)}else U=w.uniforms;return U}function S(w,b){let U;for(let W=0,F=c.length;W<F;W++){const N=c[W];if(N.cacheKey===b){U=N,++U.usedTimes;break}}return U===void 0&&(U=new E_(i,b,w,s),c.push(U)),U}function L(w){if(--w.usedTimes===0){const b=c.indexOf(w);c[b]=c[c.length-1],c.pop(),w.destroy()}}function O(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:S,releaseProgram:L,releaseShaderCache:O,programs:c,dispose:I}}function L_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function R_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,g,x,m){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function a(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||R_),n.length>1&&n.sort(f||cu),r.length>1&&r.sort(f||cu)}function u(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function I_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new uu,i.set(n,[o])):r>=s.length?(o=new uu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function D_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Te};break;case"SpotLight":t={position:new P,direction:new P,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function O_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let N_=0;function U_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F_(i,e){const t=new D_,n=O_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new P);const s=new P,o=new _t,a=new _t;function l(u,d){let f=0,p=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,m=0,h=0,y=0,_=0,v=0,S=0,L=0,O=0,I=0;u.sort(U_);const w=d===!0?Math.PI:1;for(let U=0,W=u.length;U<W;U++){const F=u[U],N=F.color,G=F.intensity,ie=F.distance,ee=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=N.r*G*w,p+=N.g*G*w,g+=N.b*G*w;else if(F.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(F.sh.coefficients[j],G);else if(F.isDirectionalLight){const j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const re=F.shadow,de=n.get(F);de.shadowBias=re.bias,de.shadowNormalBias=re.normalBias,de.shadowRadius=re.radius,de.shadowMapSize=re.mapSize,r.directionalShadow[x]=de,r.directionalShadowMap[x]=ee,r.directionalShadowMatrix[x]=F.shadow.matrix,v++}r.directional[x]=j,x++}else if(F.isSpotLight){const j=t.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(N).multiplyScalar(G*w),j.distance=ie,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,r.spot[h]=j;const re=F.shadow;if(F.map&&(r.spotLightMap[O]=F.map,O++,re.updateMatrices(F),F.castShadow&&I++),r.spotLightMatrix[h]=re.matrix,F.castShadow){const de=n.get(F);de.shadowBias=re.bias,de.shadowNormalBias=re.normalBias,de.shadowRadius=re.radius,de.shadowMapSize=re.mapSize,r.spotShadow[h]=de,r.spotShadowMap[h]=ee,L++}h++}else if(F.isRectAreaLight){const j=t.get(F);j.color.copy(N).multiplyScalar(G),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=j,y++}else if(F.isPointLight){const j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity*w),j.distance=F.distance,j.decay=F.decay,F.castShadow){const re=F.shadow,de=n.get(F);de.shadowBias=re.bias,de.shadowNormalBias=re.normalBias,de.shadowRadius=re.radius,de.shadowMapSize=re.mapSize,de.shadowCameraNear=re.camera.near,de.shadowCameraFar=re.camera.far,r.pointShadow[m]=de,r.pointShadowMap[m]=ee,r.pointShadowMatrix[m]=F.shadow.matrix,S++}r.point[m]=j,m++}else if(F.isHemisphereLight){const j=t.get(F);j.skyColor.copy(F.color).multiplyScalar(G*w),j.groundColor.copy(F.groundColor).multiplyScalar(G*w),r.hemi[_]=j,_++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==x||b.pointLength!==m||b.spotLength!==h||b.rectAreaLength!==y||b.hemiLength!==_||b.numDirectionalShadows!==v||b.numPointShadows!==S||b.numSpotShadows!==L||b.numSpotMaps!==O)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=y,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=L+O-I,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=I,b.directionalLength=x,b.pointLength=m,b.spotLength=h,b.rectAreaLength=y,b.hemiLength=_,b.numDirectionalShadows=v,b.numPointShadows=S,b.numSpotShadows=L,b.numSpotMaps=O,r.version=N_++)}function c(u,d){let f=0,p=0,g=0,x=0,m=0;const h=d.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const v=u[y];if(v.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),f++}else if(v.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),g++}else if(v.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(h),a.identity(),o.copy(v.matrixWorld),o.premultiply(h),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(h),p++}else if(v.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function hu(i,e){const t=new F_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function z_(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hu(i,e),t.set(s,[l])):o>=a.length?(l=new hu(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class k_ extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B_ extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;function G_(i,e,t){let n=new Oh;const r=new ge,s=new ge,o=new Rt,a=new k_({depthPacking:Xf}),l=new B_,c={},u=t.maxTextureSize,d={[ri]:$t,[$t]:ri,[dn]:dn},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:H_,fragmentShader:V_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new we(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h,this.render=function(v,S,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const O=i.getRenderTarget(),I=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),b=i.state;b.setBlending(ei),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let U=0,W=v.length;U<W;U++){const F=v[U],N=F.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const G=N.getFrameExtents();if(r.multiply(G),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,N.mapSize.y=s.y)),N.map===null){const ee=this.type!==Fr?{minFilter:Wt,magFilter:Wt}:{};N.map=new Ri(r.x,r.y,ee),N.map.texture.name=F.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const ie=N.getViewportCount();for(let ee=0;ee<ie;ee++){const j=N.getViewport(ee);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),b.viewport(o),N.updateMatrices(F,ee),n=N.getFrustum(),_(S,L,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===Fr&&h(N,L),N.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(O,I,w)};function h(v,S){const L=e.update(x);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ri(r.x,r.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(S,null,L,f,x,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(S,null,L,p,x,null)}function y(v,S,L,O){let I=null;const w=L.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)I=w;else if(I=L.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const b=I.uuid,U=S.uuid;let W=c[b];W===void 0&&(W={},c[b]=W);let F=W[U];F===void 0&&(F=I.clone(),W[U]=F),I=F}if(I.visible=S.visible,I.wireframe=S.wireframe,O===Fr?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:d[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.map=S.map,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const b=i.properties.get(I);b.light=L}return I}function _(v,S,L,O,I){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&I===Fr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);const U=e.update(v),W=v.material;if(Array.isArray(W)){const F=U.groups;for(let N=0,G=F.length;N<G;N++){const ie=F[N],ee=W[ie.materialIndex];if(ee&&ee.visible){const j=y(v,ee,O,I);i.renderBufferDirect(L,null,U,j,v,ie)}}}else if(W.visible){const F=y(v,W,O,I);i.renderBufferDirect(L,null,U,F,v,null)}}const b=v.children;for(let U=0,W=b.length;U<W;U++)_(b[U],S,L,O,I)}}function W_(i,e,t){const n=t.isWebGL2;function r(){let k=!1;const ae=new Rt;let fe=null;const Ee=new Rt(0,0,0,0);return{setMask:function(De){fe!==De&&!k&&(i.colorMask(De,De,De,De),fe=De)},setLocked:function(De){k=De},setClear:function(De,it,ut,It,Wn){Wn===!0&&(De*=It,it*=It,ut*=It),ae.set(De,it,ut,It),Ee.equals(ae)===!1&&(i.clearColor(De,it,ut,It),Ee.copy(ae))},reset:function(){k=!1,fe=null,Ee.set(-1,0,0,0)}}}function s(){let k=!1,ae=null,fe=null,Ee=null;return{setTest:function(De){De?$(2929):Ne(2929)},setMask:function(De){ae!==De&&!k&&(i.depthMask(De),ae=De)},setFunc:function(De){if(fe!==De){switch(De){case mf:i.depthFunc(512);break;case gf:i.depthFunc(519);break;case _f:i.depthFunc(513);break;case Va:i.depthFunc(515);break;case xf:i.depthFunc(514);break;case vf:i.depthFunc(518);break;case yf:i.depthFunc(516);break;case wf:i.depthFunc(517);break;default:i.depthFunc(515)}fe=De}},setLocked:function(De){k=De},setClear:function(De){Ee!==De&&(i.clearDepth(De),Ee=De)},reset:function(){k=!1,ae=null,fe=null,Ee=null}}}function o(){let k=!1,ae=null,fe=null,Ee=null,De=null,it=null,ut=null,It=null,Wn=null;return{setTest:function(ft){k||(ft?$(2960):Ne(2960))},setMask:function(ft){ae!==ft&&!k&&(i.stencilMask(ft),ae=ft)},setFunc:function(ft,tn,yn){(fe!==ft||Ee!==tn||De!==yn)&&(i.stencilFunc(ft,tn,yn),fe=ft,Ee=tn,De=yn)},setOp:function(ft,tn,yn){(it!==ft||ut!==tn||It!==yn)&&(i.stencilOp(ft,tn,yn),it=ft,ut=tn,It=yn)},setLocked:function(ft){k=ft},setClear:function(ft){Wn!==ft&&(i.clearStencil(ft),Wn=ft)},reset:function(){k=!1,ae=null,fe=null,Ee=null,De=null,it=null,ut=null,It=null,Wn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},p={},g=new WeakMap,x=[],m=null,h=!1,y=null,_=null,v=null,S=null,L=null,O=null,I=null,w=!1,b=null,U=null,W=null,F=null,N=null;const G=i.getParameter(35661);let ie=!1,ee=0;const j=i.getParameter(7938);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),ie=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ie=ee>=2);let re=null,de={};const Me=i.getParameter(3088),me=i.getParameter(2978),te=new Rt().fromArray(Me),ue=new Rt().fromArray(me);function ve(k,ae,fe){const Ee=new Uint8Array(4),De=i.createTexture();i.bindTexture(k,De),i.texParameteri(k,10241,9728),i.texParameteri(k,10240,9728);for(let it=0;it<fe;it++)i.texImage2D(ae+it,0,6408,1,1,0,6408,5121,Ee);return De}const xe={};xe[3553]=ve(3553,3553,1),xe[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(2929),l.setFunc(Va),B(!1),K(Kl),$(2884),D(ei);function $(k){f[k]!==!0&&(i.enable(k),f[k]=!0)}function Ne(k){f[k]!==!1&&(i.disable(k),f[k]=!1)}function Le(k,ae){return p[k]!==ae?(i.bindFramebuffer(k,ae),p[k]=ae,n&&(k===36009&&(p[36160]=ae),k===36160&&(p[36009]=ae)),!0):!1}function pe(k,ae){let fe=x,Ee=!1;if(k)if(fe=g.get(ae),fe===void 0&&(fe=[],g.set(ae,fe)),k.isWebGLMultipleRenderTargets){const De=k.texture;if(fe.length!==De.length||fe[0]!==36064){for(let it=0,ut=De.length;it<ut;it++)fe[it]=36064+it;fe.length=De.length,Ee=!0}}else fe[0]!==36064&&(fe[0]=36064,Ee=!0);else fe[0]!==1029&&(fe[0]=1029,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Ce(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const E={[Qi]:32774,[rf]:32778,[sf]:32779};if(n)E[tc]=32775,E[nc]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(E[tc]=k.MIN_EXT,E[nc]=k.MAX_EXT)}const C={[of]:0,[af]:1,[lf]:768,[xh]:770,[pf]:776,[df]:774,[uf]:772,[cf]:769,[vh]:771,[ff]:775,[hf]:773};function D(k,ae,fe,Ee,De,it,ut,It){if(k===ei){h===!0&&(Ne(3042),h=!1);return}if(h===!1&&($(3042),h=!0),k!==nf){if(k!==y||It!==w){if((_!==Qi||L!==Qi)&&(i.blendEquation(32774),_=Qi,L=Qi),It)switch(k){case ar:i.blendFuncSeparate(1,771,1,771);break;case Jl:i.blendFunc(1,1);break;case Ql:i.blendFuncSeparate(0,769,0,1);break;case ec:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ar:i.blendFuncSeparate(770,771,1,771);break;case Jl:i.blendFunc(770,1);break;case Ql:i.blendFuncSeparate(0,769,0,1);break;case ec:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,S=null,O=null,I=null,y=k,w=It}return}De=De||ae,it=it||fe,ut=ut||Ee,(ae!==_||De!==L)&&(i.blendEquationSeparate(E[ae],E[De]),_=ae,L=De),(fe!==v||Ee!==S||it!==O||ut!==I)&&(i.blendFuncSeparate(C[fe],C[Ee],C[it],C[ut]),v=fe,S=Ee,O=it,I=ut),y=k,w=!1}function H(k,ae){k.side===dn?Ne(2884):$(2884);let fe=k.side===$t;ae&&(fe=!fe),B(fe),k.blending===ar&&k.transparent===!1?D(ei):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const Ee=k.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Z(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?$(32926):Ne(32926)}function B(k){b!==k&&(k?i.frontFace(2304):i.frontFace(2305),b=k)}function K(k){k!==Qd?($(2884),k!==U&&(k===Kl?i.cullFace(1029):k===ef?i.cullFace(1028):i.cullFace(1032))):Ne(2884),U=k}function se(k){k!==W&&(ie&&i.lineWidth(k),W=k)}function Z(k,ae,fe){k?($(32823),(F!==ae||N!==fe)&&(i.polygonOffset(ae,fe),F=ae,N=fe)):Ne(32823)}function le(k){k?$(3089):Ne(3089)}function ne(k){k===void 0&&(k=33984+G-1),re!==k&&(i.activeTexture(k),re=k)}function A(k,ae,fe){fe===void 0&&(re===null?fe=33984+G-1:fe=re);let Ee=de[fe];Ee===void 0&&(Ee={type:void 0,texture:void 0},de[fe]=Ee),(Ee.type!==k||Ee.texture!==ae)&&(re!==fe&&(i.activeTexture(fe),re=fe),i.bindTexture(k,ae||xe[k]),Ee.type=k,Ee.texture=ae)}function M(){const k=de[re];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function R(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(k){te.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),te.copy(k))}function Se(k){ue.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ue.copy(k))}function Ie(k,ae){let fe=d.get(ae);fe===void 0&&(fe=new WeakMap,d.set(ae,fe));let Ee=fe.get(k);Ee===void 0&&(Ee=i.getUniformBlockIndex(ae,k.name),fe.set(k,Ee))}function He(k,ae){const Ee=d.get(ae).get(k);u.get(ae)!==Ee&&(i.uniformBlockBinding(ae,Ee,k.__bindingPointIndex),u.set(ae,Ee))}function dt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,de={},p={},g=new WeakMap,x=[],m=null,h=!1,y=null,_=null,v=null,S=null,L=null,O=null,I=null,w=!1,b=null,U=null,W=null,F=null,N=null,te.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$,disable:Ne,bindFramebuffer:Le,drawBuffers:pe,useProgram:Ce,setBlending:D,setMaterial:H,setFlipSided:B,setCullFace:K,setLineWidth:se,setPolygonOffset:Z,setScissorTest:le,activeTexture:ne,bindTexture:A,unbindTexture:M,compressedTexImage2D:z,compressedTexImage3D:Y,texImage2D:Ae,texImage3D:Pe,updateUBOMapping:Ie,uniformBlockBinding:He,texStorage2D:q,texStorage3D:_e,texSubImage2D:Q,texSubImage3D:he,compressedTexSubImage2D:R,compressedTexSubImage3D:J,scissor:be,viewport:Se,reset:dt}}function q_(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return h?new OffscreenCanvas(A,M):fo("canvas")}function _(A,M,z,Y){let Q=1;if((A.width>Y||A.height>Y)&&(Q=Y/Math.max(A.width,A.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const he=M?Kf:Math.floor,R=he(Q*A.width),J=he(Q*A.height);x===void 0&&(x=y(R,J));const q=z?y(R,J):x;return q.width=R,q.height=J,q.getContext("2d").drawImage(A,0,0,R,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+R+"x"+J+")."),q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Pc(A.width)&&Pc(A.height)}function S(A){return a?!1:A.wrapS!==fn||A.wrapT!==fn||A.minFilter!==Wt&&A.minFilter!==rn}function L(A,M){return A.generateMipmaps&&M&&A.minFilter!==Wt&&A.minFilter!==rn}function O(A){i.generateMipmap(A)}function I(A,M,z,Y,Q=!1){if(a===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he=M;return M===6403&&(z===5126&&(he=33326),z===5131&&(he=33325),z===5121&&(he=33321)),M===33319&&(z===5126&&(he=33328),z===5131&&(he=33327),z===5121&&(he=33323)),M===6408&&(z===5126&&(he=34836),z===5131&&(he=34842),z===5121&&(he=Y===rt&&Q===!1?35907:32856),z===32819&&(he=32854),z===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function w(A,M,z){return L(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){return A===Wt||A===ic||A===jo?9728:9729}function U(A){const M=A.target;M.removeEventListener("dispose",U),F(M),M.isVideoTexture&&g.delete(M)}function W(A){const M=A.target;M.removeEventListener("dispose",W),G(M)}function F(A){const M=n.get(A);if(M.__webglInit===void 0)return;const z=A.source,Y=m.get(z);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(A),Object.keys(Y).length===0&&m.delete(z)}n.remove(A)}function N(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const z=A.source,Y=m.get(z);delete Y[M.__cacheKey],o.memory.textures--}function G(A){const M=A.texture,z=n.get(A),Y=n.get(M);if(Y.__webglTexture!==void 0&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(z.__webglFramebuffer[Q]),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[Q]);else{if(i.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,he=M.length;Q<he;Q++){const R=n.get(M[Q]);R.__webglTexture&&(i.deleteTexture(R.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(A)}let ie=0;function ee(){ie=0}function j(){const A=ie;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),ie+=1,A}function re(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function de(A,M){const z=n.get(A);if(A.isVideoTexture&&le(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(z,A,M);return}}t.bindTexture(3553,z.__webglTexture,33984+M)}function Me(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Ne(z,A,M);return}t.bindTexture(35866,z.__webglTexture,33984+M)}function me(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Ne(z,A,M);return}t.bindTexture(32879,z.__webglTexture,33984+M)}function te(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Le(z,A,M);return}t.bindTexture(34067,z.__webglTexture,33984+M)}const ue={[qa]:10497,[fn]:33071,[Xa]:33648},ve={[Wt]:9728,[ic]:9984,[jo]:9986,[rn]:9729,[Pf]:9985,[Yr]:9987};function xe(A,M,z){if(z?(i.texParameteri(A,10242,ue[M.wrapS]),i.texParameteri(A,10243,ue[M.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,ue[M.wrapR]),i.texParameteri(A,10240,ve[M.magFilter]),i.texParameteri(A,10241,ve[M.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(M.wrapS!==fn||M.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,b(M.magFilter)),i.texParameteri(A,10241,b(M.minFilter)),M.minFilter!==Wt&&M.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Wt||M.minFilter!==jo&&M.minFilter!==Yr||M.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Zr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",U));const Y=M.source;let Q=m.get(Y);Q===void 0&&(Q={},m.set(Y,Q));const he=re(M);if(he!==A.__cacheKey){Q[he]===void 0&&(Q[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[he].usedTimes++;const R=Q[A.__cacheKey];R!==void 0&&(Q[A.__cacheKey].usedTimes--,R.usedTimes===0&&N(M)),A.__cacheKey=he,A.__webglTexture=Q[he].texture}return z}function Ne(A,M,z){let Y=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=35866),M.isData3DTexture&&(Y=32879);const Q=$(A,M),he=M.source;t.bindTexture(Y,A.__webglTexture,33984+z);const R=n.get(he);if(he.version!==R.__version||Q===!0){t.activeTexture(33984+z),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const J=S(M)&&v(M.image)===!1;let q=_(M.image,J,!1,u);q=ne(M,q);const _e=v(q)||a,Ae=s.convert(M.format,M.encoding);let Pe=s.convert(M.type),be=I(M.internalFormat,Ae,Pe,M.encoding,M.isVideoTexture);xe(Y,M,_e);let Se;const Ie=M.mipmaps,He=a&&M.isVideoTexture!==!0,dt=R.__version===void 0||Q===!0,k=w(M,q,_e);if(M.isDepthTexture)be=6402,a?M.type===bi?be=36012:M.type===Si?be=33190:M.type===lr?be=35056:be=33189:M.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ai&&be===6402&&M.type!==Mh&&M.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Si,Pe=s.convert(M.type)),M.format===xr&&be===6402&&(be=34041,M.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=lr,Pe=s.convert(M.type))),dt&&(He?t.texStorage2D(3553,1,be,q.width,q.height):t.texImage2D(3553,0,be,q.width,q.height,0,Ae,Pe,null));else if(M.isDataTexture)if(Ie.length>0&&_e){He&&dt&&t.texStorage2D(3553,k,be,Ie[0].width,Ie[0].height);for(let ae=0,fe=Ie.length;ae<fe;ae++)Se=Ie[ae],He?t.texSubImage2D(3553,ae,0,0,Se.width,Se.height,Ae,Pe,Se.data):t.texImage2D(3553,ae,be,Se.width,Se.height,0,Ae,Pe,Se.data);M.generateMipmaps=!1}else He?(dt&&t.texStorage2D(3553,k,be,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,Ae,Pe,q.data)):t.texImage2D(3553,0,be,q.width,q.height,0,Ae,Pe,q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&dt&&t.texStorage3D(35866,k,be,Ie[0].width,Ie[0].height,q.depth);for(let ae=0,fe=Ie.length;ae<fe;ae++)Se=Ie[ae],M.format!==pn?Ae!==null?He?t.compressedTexSubImage3D(35866,ae,0,0,0,Se.width,Se.height,q.depth,Ae,Se.data,0,0):t.compressedTexImage3D(35866,ae,be,Se.width,Se.height,q.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(35866,ae,0,0,0,Se.width,Se.height,q.depth,Ae,Pe,Se.data):t.texImage3D(35866,ae,be,Se.width,Se.height,q.depth,0,Ae,Pe,Se.data)}else{He&&dt&&t.texStorage2D(3553,k,be,Ie[0].width,Ie[0].height);for(let ae=0,fe=Ie.length;ae<fe;ae++)Se=Ie[ae],M.format!==pn?Ae!==null?He?t.compressedTexSubImage2D(3553,ae,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(3553,ae,be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(3553,ae,0,0,Se.width,Se.height,Ae,Pe,Se.data):t.texImage2D(3553,ae,be,Se.width,Se.height,0,Ae,Pe,Se.data)}else if(M.isDataArrayTexture)He?(dt&&t.texStorage3D(35866,k,be,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,Ae,Pe,q.data)):t.texImage3D(35866,0,be,q.width,q.height,q.depth,0,Ae,Pe,q.data);else if(M.isData3DTexture)He?(dt&&t.texStorage3D(32879,k,be,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,Ae,Pe,q.data)):t.texImage3D(32879,0,be,q.width,q.height,q.depth,0,Ae,Pe,q.data);else if(M.isFramebufferTexture){if(dt)if(He)t.texStorage2D(3553,k,be,q.width,q.height);else{let ae=q.width,fe=q.height;for(let Ee=0;Ee<k;Ee++)t.texImage2D(3553,Ee,be,ae,fe,0,Ae,Pe,null),ae>>=1,fe>>=1}}else if(Ie.length>0&&_e){He&&dt&&t.texStorage2D(3553,k,be,Ie[0].width,Ie[0].height);for(let ae=0,fe=Ie.length;ae<fe;ae++)Se=Ie[ae],He?t.texSubImage2D(3553,ae,0,0,Ae,Pe,Se):t.texImage2D(3553,ae,be,Ae,Pe,Se);M.generateMipmaps=!1}else He?(dt&&t.texStorage2D(3553,k,be,q.width,q.height),t.texSubImage2D(3553,0,0,0,Ae,Pe,q)):t.texImage2D(3553,0,be,Ae,Pe,q);L(M,_e)&&O(Y),R.__version=he.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Le(A,M,z){if(M.image.length!==6)return;const Y=$(A,M),Q=M.source;t.bindTexture(34067,A.__webglTexture,33984+z);const he=n.get(Q);if(Q.version!==he.__version||Y===!0){t.activeTexture(33984+z),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const R=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,q=[];for(let ae=0;ae<6;ae++)!R&&!J?q[ae]=_(M.image[ae],!1,!0,c):q[ae]=J?M.image[ae].image:M.image[ae],q[ae]=ne(M,q[ae]);const _e=q[0],Ae=v(_e)||a,Pe=s.convert(M.format,M.encoding),be=s.convert(M.type),Se=I(M.internalFormat,Pe,be,M.encoding),Ie=a&&M.isVideoTexture!==!0,He=he.__version===void 0||Y===!0;let dt=w(M,_e,Ae);xe(34067,M,Ae);let k;if(R){Ie&&He&&t.texStorage2D(34067,dt,Se,_e.width,_e.height);for(let ae=0;ae<6;ae++){k=q[ae].mipmaps;for(let fe=0;fe<k.length;fe++){const Ee=k[fe];M.format!==pn?Pe!==null?Ie?t.compressedTexSubImage2D(34069+ae,fe,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(34069+ae,fe,Se,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+ae,fe,0,0,Ee.width,Ee.height,Pe,be,Ee.data):t.texImage2D(34069+ae,fe,Se,Ee.width,Ee.height,0,Pe,be,Ee.data)}}}else{k=M.mipmaps,Ie&&He&&(k.length>0&&dt++,t.texStorage2D(34067,dt,Se,q[0].width,q[0].height));for(let ae=0;ae<6;ae++)if(J){Ie?t.texSubImage2D(34069+ae,0,0,0,q[ae].width,q[ae].height,Pe,be,q[ae].data):t.texImage2D(34069+ae,0,Se,q[ae].width,q[ae].height,0,Pe,be,q[ae].data);for(let fe=0;fe<k.length;fe++){const De=k[fe].image[ae].image;Ie?t.texSubImage2D(34069+ae,fe+1,0,0,De.width,De.height,Pe,be,De.data):t.texImage2D(34069+ae,fe+1,Se,De.width,De.height,0,Pe,be,De.data)}}else{Ie?t.texSubImage2D(34069+ae,0,0,0,Pe,be,q[ae]):t.texImage2D(34069+ae,0,Se,Pe,be,q[ae]);for(let fe=0;fe<k.length;fe++){const Ee=k[fe];Ie?t.texSubImage2D(34069+ae,fe+1,0,0,Pe,be,Ee.image[ae]):t.texImage2D(34069+ae,fe+1,Se,Pe,be,Ee.image[ae])}}}L(M,Ae)&&O(34067),he.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,z,Y,Q){const he=s.convert(z.format,z.encoding),R=s.convert(z.type),J=I(z.internalFormat,he,R,z.encoding);n.get(M).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,J,M.width,M.height,M.depth,0,he,R,null):t.texImage2D(Q,0,J,M.width,M.height,0,he,R,null)),t.bindFramebuffer(36160,A),Z(M)?f.framebufferTexture2DMultisampleEXT(36160,Y,Q,n.get(z).__webglTexture,0,se(M)):(Q===3553||Q>=34069&&Q<=34074)&&i.framebufferTexture2D(36160,Y,Q,n.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(A,M,z){if(i.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let Y=33189;if(z||Z(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===bi?Y=36012:Q.type===Si&&(Y=33190));const he=se(M);Z(M)?f.renderbufferStorageMultisampleEXT(36161,he,Y,M.width,M.height):i.renderbufferStorageMultisample(36161,he,Y,M.width,M.height)}else i.renderbufferStorage(36161,Y,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const Y=se(M);z&&Z(M)===!1?i.renderbufferStorageMultisample(36161,Y,35056,M.width,M.height):Z(M)?f.renderbufferStorageMultisampleEXT(36161,Y,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const Y=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<Y.length;Q++){const he=Y[Q],R=s.convert(he.format,he.encoding),J=s.convert(he.type),q=I(he.internalFormat,R,J,he.encoding),_e=se(M);z&&Z(M)===!1?i.renderbufferStorageMultisample(36161,_e,q,M.width,M.height):Z(M)?f.renderbufferStorageMultisampleEXT(36161,_e,q,M.width,M.height):i.renderbufferStorage(36161,q,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function E(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture,Q=se(M);if(M.depthTexture.format===Ai)Z(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,Q):i.framebufferTexture2D(36160,36096,3553,Y,0);else if(M.depthTexture.format===xr)Z(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,Q):i.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function C(A){const M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");E(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ce(M.__webglDepthbuffer[Y],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ce(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function D(A,M,z){const Y=n.get(A);M!==void 0&&pe(Y.__webglFramebuffer,A,A.texture,36064,3553),z!==void 0&&C(A)}function H(A){const M=A.texture,z=n.get(A),Y=n.get(M);A.addEventListener("dispose",W),A.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,he=A.isWebGLMultipleRenderTargets===!0,R=v(A)||a;if(Q){z.__webglFramebuffer=[];for(let J=0;J<6;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(z.__webglFramebuffer=i.createFramebuffer(),he)if(r.drawBuffers){const J=A.texture;for(let q=0,_e=J.length;q<_e;q++){const Ae=n.get(J[q]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Z(A)===!1){const J=he?M:[M];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const _e=J[q];z.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,z.__webglColorRenderbuffer[q]);const Ae=s.convert(_e.format,_e.encoding),Pe=s.convert(_e.type),be=I(_e.internalFormat,Ae,Pe,_e.encoding,A.isXRRenderTarget===!0),Se=se(A);i.renderbufferStorageMultisample(36161,Se,be,A.width,A.height),i.framebufferRenderbuffer(36160,36064+q,36161,z.__webglColorRenderbuffer[q])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,Y.__webglTexture),xe(34067,M,R);for(let J=0;J<6;J++)pe(z.__webglFramebuffer[J],A,M,36064,34069+J);L(M,R)&&O(34067),t.unbindTexture()}else if(he){const J=A.texture;for(let q=0,_e=J.length;q<_e;q++){const Ae=J[q],Pe=n.get(Ae);t.bindTexture(3553,Pe.__webglTexture),xe(3553,Ae,R),pe(z.__webglFramebuffer,A,Ae,36064+q,3553),L(Ae,R)&&O(3553)}t.unbindTexture()}else{let J=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?J=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,Y.__webglTexture),xe(J,M,R),pe(z.__webglFramebuffer,A,M,36064,J),L(M,R)&&O(J),t.unbindTexture()}A.depthBuffer&&C(A)}function B(A){const M=v(A)||a,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Y=0,Q=z.length;Y<Q;Y++){const he=z[Y];if(L(he,M)){const R=A.isWebGLCubeRenderTarget?34067:3553,J=n.get(he).__webglTexture;t.bindTexture(R,J),O(R),t.unbindTexture()}}}function K(A){if(a&&A.samples>0&&Z(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,Y=A.height;let Q=16384;const he=[],R=A.stencilBuffer?33306:36096,J=n.get(A),q=A.isWebGLMultipleRenderTargets===!0;if(q)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,J.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,J.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){he.push(36064+_e),A.depthBuffer&&he.push(R);const Ae=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(Ae===!1&&(A.depthBuffer&&(Q|=256),A.stencilBuffer&&(Q|=1024)),q&&i.framebufferRenderbuffer(36008,36064,36161,J.__webglColorRenderbuffer[_e]),Ae===!0&&(i.invalidateFramebuffer(36008,[R]),i.invalidateFramebuffer(36009,[R])),q){const Pe=n.get(M[_e]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Pe,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,9728),p&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,J.__webglColorRenderbuffer[_e]);const Ae=n.get(M[_e]).__webglTexture;t.bindFramebuffer(36160,J.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,Ae,0)}t.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}}function se(A){return Math.min(d,A.samples)}function Z(A){const M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function le(A){const M=o.render.frame;g.get(A)!==M&&(g.set(A,M),A.update())}function ne(A,M){const z=A.encoding,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===$a||z!==Li&&(z===rt?a===!1?e.has("EXT_sRGB")===!0&&Y===pn?(A.format=$a,A.minFilter=rn,A.generateMipmaps=!1):M=Eh.sRGBToLinear(M):(Y!==pn||Q!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),M}this.allocateTextureUnit=j,this.resetTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=Me,this.setTexture3D=me,this.setTextureCube=te,this.rebindTextures=D,this.setupRenderTarget=H,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Z}function X_(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Pi)return 5121;if(s===Df)return 32819;if(s===Of)return 32820;if(s===Lf)return 5120;if(s===Rf)return 5122;if(s===Mh)return 5123;if(s===If)return 5124;if(s===Si)return 5125;if(s===bi)return 5126;if(s===Zr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Nf)return 6406;if(s===pn)return 6408;if(s===Uf)return 6409;if(s===Ff)return 6410;if(s===Ai)return 6402;if(s===xr)return 34041;if(s===$a)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zf)return 6403;if(s===kf)return 36244;if(s===Bf)return 33319;if(s===Hf)return 33320;if(s===Vf)return 36249;if(s===Yo||s===Zo||s===Ko||s===Jo)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rc||s===sc||s===oc||s===ac)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lc||s===cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lc)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uc||s===hc||s===dc||s===fc||s===pc||s===mc||s===gc||s===_c||s===xc||s===vc||s===yc||s===wc||s===Mc||s===Sc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===uc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_c)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sc)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qo)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Wf||s===bc||s===Ec||s===Ac)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===bc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ec)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ac)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class $_ extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zs extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Y_ extends en{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ai,u!==Ai&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ai&&(n=Si),n===void 0&&u===xr&&(n=lr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1}}class Z_ extends Oi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const x=t.getContextAttributes();let m=null,h=null;const y=[],_=[],v=new Set,S=new Map,L=new sn;L.layers.enable(1),L.viewport=new Rt;const O=new sn;O.layers.enable(2),O.viewport=new Rt;const I=[L,O],w=new $_;w.layers.enable(1),w.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=y[te];return ue===void 0&&(ue=new Sa,y[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=y[te];return ue===void 0&&(ue=new Sa,y[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=y[te];return ue===void 0&&(ue=new Sa,y[te]=ue),ue.getHandSpace()};function W(te){const ue=_.indexOf(te.inputSource);if(ue===-1)return;const ve=y[ue];ve!==void 0&&ve.dispatchEvent({type:te.type,data:te.inputSource})}function F(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",N);for(let te=0;te<y.length;te++){const ue=_[te];ue!==null&&(_[te]=null,y[te].disconnect(ue))}b=null,U=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,h=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",F),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),h=new Ri(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Pi,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let ue=null,ve=null,xe=null;x.depth&&(xe=x.stencil?35056:33190,ue=x.stencil?xr:Ai,ve=x.stencil?lr:Si);const $={colorFormat:32856,depthFormat:xe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer($),r.updateRenderState({layers:[f]}),h=new Ri(f.textureWidth,f.textureHeight,{format:pn,type:Pi,depthTexture:new Y_(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Ne=e.properties.get(h);Ne.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(te){for(let ue=0;ue<te.removed.length;ue++){const ve=te.removed[ue],xe=_.indexOf(ve);xe>=0&&(_[xe]=null,y[xe].disconnect(ve))}for(let ue=0;ue<te.added.length;ue++){const ve=te.added[ue];let xe=_.indexOf(ve);if(xe===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=_.length){_.push(ve),xe=Ne;break}else if(_[Ne]===null){_[Ne]=ve,xe=Ne;break}if(xe===-1)break}const $=y[xe];$&&$.connect(ve)}}const G=new P,ie=new P;function ee(te,ue,ve){G.setFromMatrixPosition(ue.matrixWorld),ie.setFromMatrixPosition(ve.matrixWorld);const xe=G.distanceTo(ie),$=ue.projectionMatrix.elements,Ne=ve.projectionMatrix.elements,Le=$[14]/($[10]-1),pe=$[14]/($[10]+1),Ce=($[9]+1)/$[5],E=($[9]-1)/$[5],C=($[8]-1)/$[0],D=(Ne[8]+1)/Ne[0],H=Le*C,B=Le*D,K=xe/(-C+D),se=K*-C;ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(se),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const Z=Le+K,le=pe+K,ne=H-se,A=B+(xe-se),M=Ce*pe/le*Z,z=E*pe/le*Z;te.projectionMatrix.makePerspective(ne,A,M,z,Z,le),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function j(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;w.near=O.near=L.near=te.near,w.far=O.far=L.far=te.far,(b!==w.near||U!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,U=w.far);const ue=te.parent,ve=w.cameras;j(w,ue);for(let xe=0;xe<ve.length;xe++)j(ve[xe],ue);ve.length===2?ee(w,L,O):w.projectionMatrix.copy(L.projectionMatrix),re(te,w,ue)};function re(te,ue,ve){ve===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0);const xe=te.children;for(let $=0,Ne=xe.length;$<Ne;$++)xe[$].updateMatrixWorld(!0);te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ja*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.getPlanes=function(){return v};let de=null;function Me(te,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let xe=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,xe=!0);for(let $=0;$<ve.length;$++){const Ne=ve[$];let Le=null;if(p!==null)Le=p.getViewport(Ne);else{const Ce=d.getViewSubImage(f,Ne);Le=Ce.viewport,$===0&&(e.setRenderTargetTextures(h,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(h))}let pe=I[$];pe===void 0&&(pe=new sn,pe.layers.enable($),pe.viewport=new Rt,I[$]=pe),pe.matrix.fromArray(Ne.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ne.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Le.x,Le.y,Le.width,Le.height),$===0&&(w.matrix.copy(pe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),xe===!0&&w.cameras.push(pe)}}for(let ve=0;ve<y.length;ve++){const xe=_[ve],$=y[ve];xe!==null&&$!==void 0&&$.update(xe,ue,c||o)}if(de&&de(te,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let ve=null;for(const xe of v)ue.detectedPlanes.has(xe)||(ve===null&&(ve=[]),ve.push(xe));if(ve!==null)for(const xe of ve)v.delete(xe),S.delete(xe),n.dispatchEvent({type:"planeremoved",data:xe});for(const xe of ue.detectedPlanes)if(!v.has(xe))v.add(xe),S.set(xe,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:xe});else{const $=S.get(xe);xe.lastChangedTime>$&&(S.set(xe,xe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:xe}))}}g=null}const me=new Nh;me.setAnimationLoop(Me),this.setAnimationLoop=function(te){de=te},this.dispose=function(){}}}function K_(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Rh(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,_,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,v)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===$t&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===$t&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===$t&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function J_(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(y,S);const L=e.render.frame;s[y.id]!==L&&(f(y),s[y.id]=L)}function u(y){const _=d();y.__bindingPointIndex=_;const v=i.createBuffer(),S=y.__size,L=y.usage;return i.bindBuffer(35345,v),i.bufferData(35345,S,L),i.bindBuffer(35345,null),i.bindBufferBase(35345,_,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=r[y.id],v=y.uniforms,S=y.__cache;i.bindBuffer(35345,_);for(let L=0,O=v.length;L<O;L++){const I=v[L];if(p(I,L,S)===!0){const w=I.__offset,b=Array.isArray(I.value)?I.value:[I.value];let U=0;for(let W=0;W<b.length;W++){const F=b[W],N=x(F);typeof F=="number"?(I.__data[0]=F,i.bufferSubData(35345,w+U,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=F.elements[0],I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=F.elements[0],I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=F.elements[0]):(F.toArray(I.__data,U),U+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,w,I.__data)}}i.bindBuffer(35345,null)}function p(y,_,v){const S=y.value;if(v[_]===void 0){if(typeof S=="number")v[_]=S;else{const L=Array.isArray(S)?S:[S],O=[];for(let I=0;I<L.length;I++)O.push(L[I].clone());v[_]=O}return!0}else if(typeof S=="number"){if(v[_]!==S)return v[_]=S,!0}else{const L=Array.isArray(v[_])?v[_]:[v[_]],O=Array.isArray(S)?S:[S];for(let I=0;I<L.length;I++){const w=L[I];if(w.equals(O[I])===!1)return w.copy(O[I]),!0}}return!1}function g(y){const _=y.uniforms;let v=0;const S=16;let L=0;for(let O=0,I=_.length;O<I;O++){const w=_[O],b={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let W=0,F=U.length;W<F;W++){const N=U[W],G=x(N);b.boundary+=G.boundary,b.storage+=G.storage}if(w.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,O>0){L=v%S;const W=S-L;L!==0&&W-b.boundary<0&&(v+=S-L,w.__offset=v)}v+=b.storage}return L=v%S,L>0&&(v+=S-L),y.__size=v,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}function Q_(){const i=fo("canvas");return i.style.display="block",i}class Bh{constructor(e={}){const{canvas:t=Q_(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=null,g=null;const x=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.useLegacyLights=!0,this.toneMapping=Hn,this.toneMappingExposure=1;const h=this;let y=!1,_=0,v=0,S=null,L=-1,O=null;const I=new Rt,w=new Rt;let b=null,U=t.width,W=t.height,F=1,N=null,G=null;const ie=new Rt(0,0,U,W),ee=new Rt(0,0,U,W);let j=!1;const re=new Oh;let de=!1,Me=!1,me=null;const te=new _t,ue=new P,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return S===null?F:1}let $=n;function Ne(T,X){for(let oe=0;oe<T.length;oe++){const V=T[oe],ce=t.getContext(V,X);if(ce!==null)return ce}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",He,!1),$===null){const X=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&X.shift(),$=Ne(X,T),$===null)throw Ne(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Le,pe,Ce,E,C,D,H,B,K,se,Z,le,ne,A,M,z,Y,Q,he,R,J,q,_e,Ae;function Pe(){Le=new ug($),pe=new ig($,Le,e),Le.init(pe),q=new X_($,Le,pe),Ce=new W_($,Le,pe),E=new fg,C=new L_,D=new q_($,Le,Ce,C,pe,q,E),H=new sg(h),B=new cg(h),K=new bp($,pe),_e=new tg($,Le,K,pe),se=new hg($,K,E,_e),Z=new _g($,se,K,E),he=new gg($,pe,D),z=new rg(C),le=new P_(h,H,B,Le,pe,_e,z),ne=new K_(h,C),A=new I_,M=new z_(Le,pe),Q=new eg(h,H,B,Ce,Z,f,l),Y=new G_(h,Z,pe),Ae=new J_($,E,pe,Ce),R=new ng($,Le,E,pe),J=new dg($,Le,E,pe),E.programs=le.programs,h.capabilities=pe,h.extensions=Le,h.properties=C,h.renderLists=A,h.shadowMap=Y,h.state=Ce,h.info=E}Pe();const be=new Z_(h,$);this.xr=be,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=Le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(U,W,!1))},this.getSize=function(T){return T.set(U,W)},this.setSize=function(T,X,oe=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,W=X,t.width=Math.floor(T*F),t.height=Math.floor(X*F),oe===!0&&(t.style.width=T+"px",t.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(U*F,W*F).floor()},this.setDrawingBufferSize=function(T,X,oe){U=T,W=X,F=oe,t.width=Math.floor(T*oe),t.height=Math.floor(X*oe),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,X,oe,V){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,X,oe,V),Ce.viewport(I.copy(ie).multiplyScalar(F).floor())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,X,oe,V){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,X,oe,V),Ce.scissor(w.copy(ee).multiplyScalar(F).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){Ce.setScissorTest(j=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,X=!0,oe=!0){let V=0;T&&(V|=16384),X&&(V|=256),oe&&(V|=1024),$.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",He,!1),A.dispose(),M.dispose(),C.dispose(),H.dispose(),B.dispose(),Z.dispose(),_e.dispose(),Ae.dispose(),le.dispose(),be.dispose(),be.removeEventListener("sessionstart",De),be.removeEventListener("sessionend",it),me&&(me.dispose(),me=null),ut.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=E.autoReset,X=Y.enabled,oe=Y.autoUpdate,V=Y.needsUpdate,ce=Y.type;Pe(),E.autoReset=T,Y.enabled=X,Y.autoUpdate=oe,Y.needsUpdate=V,Y.type=ce}function He(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){const X=T.target;X.removeEventListener("dispose",dt),k(X)}function k(T){ae(T),C.remove(T)}function ae(T){const X=C.get(T).programs;X!==void 0&&(X.forEach(function(oe){le.releaseProgram(oe)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,oe,V,ce,Ue){X===null&&(X=ve);const ze=ce.isMesh&&ce.matrixWorld.determinant()<0,Be=Yd(T,X,oe,V,ce);Ce.setMaterial(V,ze);let We=oe.index,Xe=1;V.wireframe===!0&&(We=se.getWireframeAttribute(oe),Xe=2);const $e=oe.drawRange,je=oe.attributes.position;let tt=$e.start*Xe,kt=($e.start+$e.count)*Xe;Ue!==null&&(tt=Math.max(tt,Ue.start*Xe),kt=Math.min(kt,(Ue.start+Ue.count)*Xe)),We!==null?(tt=Math.max(tt,0),kt=Math.min(kt,We.count)):je!=null&&(tt=Math.max(tt,0),kt=Math.min(kt,je.count));const on=kt-tt;if(on<0||on===1/0)return;_e.setup(ce,V,Be,oe,We);let oi,xt=R;if(We!==null&&(oi=K.get(We),xt=J,xt.setIndex(oi)),ce.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*xe()),xt.setMode(1)):xt.setMode(4);else if(ce.isLine){let Ze=V.linewidth;Ze===void 0&&(Ze=1),Ce.setLineWidth(Ze*xe()),ce.isLineSegments?xt.setMode(1):ce.isLineLoop?xt.setMode(2):xt.setMode(3)}else ce.isPoints?xt.setMode(0):ce.isSprite&&xt.setMode(4);if(ce.isInstancedMesh)xt.renderInstances(tt,on,ce.count);else if(oe.isInstancedBufferGeometry){const Ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Wo=Math.min(oe.instanceCount,Ze);xt.renderInstances(tt,on,Wo)}else xt.render(tt,on)},this.compile=function(T,X){function oe(V,ce,Ue){V.transparent===!0&&V.side===dn&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,gs(V,ce,Ue),V.side=ri,V.needsUpdate=!0,gs(V,ce,Ue),V.side=dn):gs(V,ce,Ue)}g=M.get(T),g.init(),m.push(g),T.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights(h.useLegacyLights),T.traverse(function(V){const ce=V.material;if(ce)if(Array.isArray(ce))for(let Ue=0;Ue<ce.length;Ue++){const ze=ce[Ue];oe(ze,T,V)}else oe(ce,T,V)}),m.pop(),g=null};let fe=null;function Ee(T){fe&&fe(T)}function De(){ut.stop()}function it(){ut.start()}const ut=new Nh;ut.setAnimationLoop(Ee),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(T){fe=T,be.setAnimationLoop(T),T===null?ut.stop():ut.start()},be.addEventListener("sessionstart",De),be.addEventListener("sessionend",it),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(X),X=be.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,X,S),g=M.get(T,m.length),g.init(),m.push(g),te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(te),Me=this.localClippingEnabled,de=z.init(this.clippingPlanes,Me),p=A.get(T,x.length),p.init(),x.push(p),It(T,X,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(N,G),de===!0&&z.beginShadows();const oe=g.state.shadowsArray;if(Y.render(oe,T,X),de===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(p,T),g.setupLights(h.useLegacyLights),X.isArrayCamera){const V=X.cameras;for(let ce=0,Ue=V.length;ce<Ue;ce++){const ze=V[ce];Wn(p,T,ze,ze.viewport)}}else Wn(p,T,X);S!==null&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(h,T,X),_e.resetDefaultState(),L=-1,O=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function It(T,X,oe,V){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||re.intersectsSprite(T)){V&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const ze=Z.update(T),Be=T.material;Be.visible&&p.push(T,ze,Be,oe,ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==E.render.frame&&(T.skeleton.update(),T.skeleton.frame=E.render.frame),!T.frustumCulled||re.intersectsObject(T))){V&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const ze=Z.update(T),Be=T.material;if(Array.isArray(Be)){const We=ze.groups;for(let Xe=0,$e=We.length;Xe<$e;Xe++){const je=We[Xe],tt=Be[je.materialIndex];tt&&tt.visible&&p.push(T,ze,tt,oe,ue.z,je)}}else Be.visible&&p.push(T,ze,Be,oe,ue.z,null)}}const Ue=T.children;for(let ze=0,Be=Ue.length;ze<Be;ze++)It(Ue[ze],X,oe,V)}function Wn(T,X,oe,V){const ce=T.opaque,Ue=T.transmissive,ze=T.transparent;g.setupLightsView(oe),de===!0&&z.setGlobalState(h.clippingPlanes,oe),Ue.length>0&&ft(ce,Ue,X,oe),V&&Ce.viewport(I.copy(V)),ce.length>0&&tn(ce,X,oe),Ue.length>0&&tn(Ue,X,oe),ze.length>0&&tn(ze,X,oe),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ft(T,X,oe,V){if(me===null){const Be=pe.isWebGL2;me=new Ri(1024,1024,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Zr:Pi,minFilter:Yr,samples:Be&&a===!0?4:0})}const ce=h.getRenderTarget();h.setRenderTarget(me),h.clear();const Ue=h.toneMapping;h.toneMapping=Hn,tn(T,oe,V),D.updateMultisampleRenderTarget(me),D.updateRenderTargetMipmap(me);let ze=!1;for(let Be=0,We=X.length;Be<We;Be++){const Xe=X[Be],$e=Xe.object,je=Xe.geometry,tt=Xe.material,kt=Xe.group;if(tt.side===dn&&$e.layers.test(V.layers)){const on=tt.side;tt.side=$t,tt.needsUpdate=!0,yn($e,oe,V,je,tt,kt),tt.side=on,tt.needsUpdate=!0,ze=!0}}ze===!0&&(D.updateMultisampleRenderTarget(me),D.updateRenderTargetMipmap(me)),h.setRenderTarget(ce),h.toneMapping=Ue}function tn(T,X,oe){const V=X.isScene===!0?X.overrideMaterial:null;for(let ce=0,Ue=T.length;ce<Ue;ce++){const ze=T[ce],Be=ze.object,We=ze.geometry,Xe=V===null?ze.material:V,$e=ze.group;Be.layers.test(oe.layers)&&yn(Be,X,oe,We,Xe,$e)}}function yn(T,X,oe,V,ce,Ue){T.onBeforeRender(h,X,oe,V,ce,Ue),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ce.onBeforeRender(h,X,oe,V,T,Ue),ce.transparent===!0&&ce.side===dn&&ce.forceSinglePass===!1?(ce.side=$t,ce.needsUpdate=!0,h.renderBufferDirect(oe,X,V,ce,T,Ue),ce.side=ri,ce.needsUpdate=!0,h.renderBufferDirect(oe,X,V,ce,T,Ue),ce.side=dn):h.renderBufferDirect(oe,X,V,ce,T,Ue),T.onAfterRender(h,X,oe,V,ce,Ue)}function gs(T,X,oe){X.isScene!==!0&&(X=ve);const V=C.get(T),ce=g.state.lights,Ue=g.state.shadowsArray,ze=ce.state.version,Be=le.getParameters(T,ce.state,Ue,X,oe),We=le.getProgramCacheKey(Be);let Xe=V.programs;V.environment=T.isMeshStandardMaterial?X.environment:null,V.fog=X.fog,V.envMap=(T.isMeshStandardMaterial?B:H).get(T.envMap||V.environment),Xe===void 0&&(T.addEventListener("dispose",dt),Xe=new Map,V.programs=Xe);let $e=Xe.get(We);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===ze)return jl(T,Be),$e}else Be.uniforms=le.getUniforms(T),T.onBuild(oe,Be,h),T.onBeforeCompile(Be,h),$e=le.acquireProgram(Be,We),Xe.set(We,$e),V.uniforms=Be.uniforms;const je=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=z.uniform),jl(T,Be),V.needsLights=Kd(T),V.lightsStateVersion=ze,V.needsLights&&(je.ambientLightColor.value=ce.state.ambient,je.lightProbe.value=ce.state.probe,je.directionalLights.value=ce.state.directional,je.directionalLightShadows.value=ce.state.directionalShadow,je.spotLights.value=ce.state.spot,je.spotLightShadows.value=ce.state.spotShadow,je.rectAreaLights.value=ce.state.rectArea,je.ltc_1.value=ce.state.rectAreaLTC1,je.ltc_2.value=ce.state.rectAreaLTC2,je.pointLights.value=ce.state.point,je.pointLightShadows.value=ce.state.pointShadow,je.hemisphereLights.value=ce.state.hemi,je.directionalShadowMap.value=ce.state.directionalShadowMap,je.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,je.spotShadowMap.value=ce.state.spotShadowMap,je.spotLightMatrix.value=ce.state.spotLightMatrix,je.spotLightMap.value=ce.state.spotLightMap,je.pointShadowMap.value=ce.state.pointShadowMap,je.pointShadowMatrix.value=ce.state.pointShadowMatrix);const tt=$e.getUniforms(),kt=io.seqWithValue(tt.seq,je);return V.currentProgram=$e,V.uniformsList=kt,$e}function jl(T,X){const oe=C.get(T);oe.outputEncoding=X.outputEncoding,oe.instancing=X.instancing,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function Yd(T,X,oe,V,ce){X.isScene!==!0&&(X=ve),D.resetTextureUnits();const Ue=X.fog,ze=V.isMeshStandardMaterial?X.environment:null,Be=S===null?h.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Li,We=(V.isMeshStandardMaterial?B:H).get(V.envMap||ze),Xe=V.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!V.normalMap&&!!oe.attributes.tangent,je=!!oe.morphAttributes.position,tt=!!oe.morphAttributes.normal,kt=!!oe.morphAttributes.color,on=V.toneMapped?h.toneMapping:Hn,oi=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,xt=oi!==void 0?oi.length:0,Ze=C.get(V),Wo=g.state.lights;if(de===!0&&(Me===!0||T!==O)){const Yt=T===O&&V.id===L;z.setState(V,T,Yt)}let bt=!1;V.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Wo.state.version||Ze.outputEncoding!==Be||ce.isInstancedMesh&&Ze.instancing===!1||!ce.isInstancedMesh&&Ze.instancing===!0||ce.isSkinnedMesh&&Ze.skinning===!1||!ce.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==We||V.fog===!0&&Ze.fog!==Ue||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==z.numPlanes||Ze.numIntersection!==z.numIntersection)||Ze.vertexAlphas!==Xe||Ze.vertexTangents!==$e||Ze.morphTargets!==je||Ze.morphNormals!==tt||Ze.morphColors!==kt||Ze.toneMapping!==on||pe.isWebGL2===!0&&Ze.morphTargetsCount!==xt)&&(bt=!0):(bt=!0,Ze.__version=V.version);let ai=Ze.currentProgram;bt===!0&&(ai=gs(V,X,ce));let Yl=!1,Pr=!1,qo=!1;const Bt=ai.getUniforms(),li=Ze.uniforms;if(Ce.useProgram(ai.program)&&(Yl=!0,Pr=!0,qo=!0),V.id!==L&&(L=V.id,Pr=!0),Yl||O!==T){if(Bt.setValue($,"projectionMatrix",T.projectionMatrix),pe.logarithmicDepthBuffer&&Bt.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),O!==T&&(O=T,Pr=!0,qo=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Yt=Bt.map.cameraPosition;Yt!==void 0&&Yt.setValue($,ue.setFromMatrixPosition(T.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Bt.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||ce.isSkinnedMesh)&&Bt.setValue($,"viewMatrix",T.matrixWorldInverse)}if(ce.isSkinnedMesh){Bt.setOptional($,ce,"bindMatrix"),Bt.setOptional($,ce,"bindMatrixInverse");const Yt=ce.skeleton;Yt&&(pe.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Bt.setValue($,"boneTexture",Yt.boneTexture,D),Bt.setValue($,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xo=oe.morphAttributes;if((Xo.position!==void 0||Xo.normal!==void 0||Xo.color!==void 0&&pe.isWebGL2===!0)&&he.update(ce,oe,ai),(Pr||Ze.receiveShadow!==ce.receiveShadow)&&(Ze.receiveShadow=ce.receiveShadow,Bt.setValue($,"receiveShadow",ce.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(li.envMap.value=We,li.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Pr&&(Bt.setValue($,"toneMappingExposure",h.toneMappingExposure),Ze.needsLights&&Zd(li,qo),Ue&&V.fog===!0&&ne.refreshFogUniforms(li,Ue),ne.refreshMaterialUniforms(li,V,F,W,me),io.upload($,Ze.uniformsList,li,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(io.upload($,Ze.uniformsList,li,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Bt.setValue($,"center",ce.center),Bt.setValue($,"modelViewMatrix",ce.modelViewMatrix),Bt.setValue($,"normalMatrix",ce.normalMatrix),Bt.setValue($,"modelMatrix",ce.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Yt=V.uniformsGroups;for(let $o=0,Jd=Yt.length;$o<Jd;$o++)if(pe.isWebGL2){const Zl=Yt[$o];Ae.update(Zl,ai),Ae.bind(Zl,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function Zd(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Kd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,X,oe){C.get(T.texture).__webglTexture=X,C.get(T.depthTexture).__webglTexture=oe;const V=C.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=oe===void 0,V.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,X){const oe=C.get(T);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,oe=0){S=T,_=X,v=oe;let V=!0,ce=null,Ue=!1,ze=!1;if(T){const We=C.get(T);We.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(36160,null),V=!1):We.__webglFramebuffer===void 0?D.setupRenderTarget(T):We.__hasExternalTextures&&D.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ze=!0);const $e=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ce=$e[X],Ue=!0):pe.isWebGL2&&T.samples>0&&D.useMultisampledRTT(T)===!1?ce=C.get(T).__webglMultisampledFramebuffer:ce=$e,I.copy(T.viewport),w.copy(T.scissor),b=T.scissorTest}else I.copy(ie).multiplyScalar(F).floor(),w.copy(ee).multiplyScalar(F).floor(),b=j;if(Ce.bindFramebuffer(36160,ce)&&pe.drawBuffers&&V&&Ce.drawBuffers(T,ce),Ce.viewport(I),Ce.scissor(w),Ce.setScissorTest(b),Ue){const We=C.get(T.texture);$.framebufferTexture2D(36160,36064,34069+X,We.__webglTexture,oe)}else if(ze){const We=C.get(T.texture),Xe=X||0;$.framebufferTextureLayer(36160,36064,We.__webglTexture,oe||0,Xe)}L=-1},this.readRenderTargetPixels=function(T,X,oe,V,ce,Ue,ze){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Be=Be[ze]),Be){Ce.bindFramebuffer(36160,Be);try{const We=T.texture,Xe=We.format,$e=We.type;if(Xe!==pn&&q.convert(Xe)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=$e===Zr&&(Le.has("EXT_color_buffer_half_float")||pe.isWebGL2&&Le.has("EXT_color_buffer_float"));if($e!==Pi&&q.convert($e)!==$.getParameter(35738)&&!($e===bi&&(pe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-V&&oe>=0&&oe<=T.height-ce&&$.readPixels(X,oe,V,ce,q.convert(Xe),q.convert($e),Ue)}finally{const We=S!==null?C.get(S).__webglFramebuffer:null;Ce.bindFramebuffer(36160,We)}}},this.copyFramebufferToTexture=function(T,X,oe=0){const V=Math.pow(2,-oe),ce=Math.floor(X.image.width*V),Ue=Math.floor(X.image.height*V);D.setTexture2D(X,0),$.copyTexSubImage2D(3553,oe,0,0,T.x,T.y,ce,Ue),Ce.unbindTexture()},this.copyTextureToTexture=function(T,X,oe,V=0){const ce=X.image.width,Ue=X.image.height,ze=q.convert(oe.format),Be=q.convert(oe.type);D.setTexture2D(oe,0),$.pixelStorei(37440,oe.flipY),$.pixelStorei(37441,oe.premultiplyAlpha),$.pixelStorei(3317,oe.unpackAlignment),X.isDataTexture?$.texSubImage2D(3553,V,T.x,T.y,ce,Ue,ze,Be,X.image.data):X.isCompressedTexture?$.compressedTexSubImage2D(3553,V,T.x,T.y,X.mipmaps[0].width,X.mipmaps[0].height,ze,X.mipmaps[0].data):$.texSubImage2D(3553,V,T.x,T.y,ze,Be,X.image),V===0&&oe.generateMipmaps&&$.generateMipmap(3553),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,X,oe,V,ce=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=T.max.x-T.min.x+1,ze=T.max.y-T.min.y+1,Be=T.max.z-T.min.z+1,We=q.convert(V.format),Xe=q.convert(V.type);let $e;if(V.isData3DTexture)D.setTexture3D(V,0),$e=32879;else if(V.isDataArrayTexture)D.setTexture2DArray(V,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,V.flipY),$.pixelStorei(37441,V.premultiplyAlpha),$.pixelStorei(3317,V.unpackAlignment);const je=$.getParameter(3314),tt=$.getParameter(32878),kt=$.getParameter(3316),on=$.getParameter(3315),oi=$.getParameter(32877),xt=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;$.pixelStorei(3314,xt.width),$.pixelStorei(32878,xt.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),oe.isDataTexture||oe.isData3DTexture?$.texSubImage3D($e,ce,X.x,X.y,X.z,Ue,ze,Be,We,Xe,xt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D($e,ce,X.x,X.y,X.z,Ue,ze,Be,We,xt.data)):$.texSubImage3D($e,ce,X.x,X.y,X.z,Ue,ze,Be,We,Xe,xt),$.pixelStorei(3314,je),$.pixelStorei(32878,tt),$.pixelStorei(3316,kt),$.pixelStorei(3315,on),$.pixelStorei(32877,oi),ce===0&&V.generateMipmaps&&$.generateMipmap($e),Ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){_=0,v=0,S=null,Ce.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class ex extends Bh{}ex.prototype.isWebGL1Renderer=!0;class tx extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vl extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new P,fu=new P,pu=new _t,ba=new gl,ks=new bo;class zn extends yt{constructor(e=new Ct,t=new vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)du.fromBufferAttribute(t,r-1),fu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=du.distanceTo(fu);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;pu.copy(r).invert(),ba.copy(e.ray).applyMatrix4(pu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,d=new P,f=new P,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const h=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=h,v=y-1;_<v;_+=p){const S=g.getX(_),L=g.getX(_+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,L),ba.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let _=h,v=y-1;_<v;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ba.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const mu=new P,gu=new P;class nx extends zn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)mu.fromBufferAttribute(t,r),gu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+mu.distanceTo(gu);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,r=[],s=[],o=[],a=new P,l=new _t;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Lt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Lt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yl extends Ln{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ge,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ix extends yl{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Bs=new P,Ea=new wl,Aa=new wl,Ca=new wl;class rx extends Ln{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Bs.subVectors(r[0],r[1]).add(r[0]),c=Bs);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Bs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ea.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,x,m),Aa.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,x,m),Ca.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Aa.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Ca.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(Ea.calc(l),Aa.calc(l),Ca.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _u(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function sx(i,e){const t=1-i;return t*t*e}function ox(i,e){return 2*(1-i)*i*e}function ax(i,e){return i*i*e}function Gr(i,e,t,n){return sx(i,e)+ox(i,t)+ax(i,n)}function lx(i,e){const t=1-i;return t*t*t*e}function cx(i,e){const t=1-i;return 3*t*t*i*e}function ux(i,e){return 3*(1-i)*i*i*e}function hx(i,e){return i*i*i*e}function Wr(i,e,t,n,r){return lx(i,e)+cx(i,t)+ux(i,n)+hx(i,r)}class Hh extends Ln{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dx extends Ln{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y),Wr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ml extends Ln{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fx extends Ln{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends Ln{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Gr(e,r.x,s.x,o.x),Gr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class px extends Ln{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Gr(e,r.x,s.x,o.x),Gr(e,r.y,s.y,o.y),Gr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gh extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(_u(a,l.x,c.x,u.x,d.x),_u(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var Wh=Object.freeze({__proto__:null,ArcCurve:ix,CatmullRomCurve3:rx,CubicBezierCurve:Hh,CubicBezierCurve3:dx,EllipseCurve:yl,LineCurve:Ml,LineCurve3:fx,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:px,SplineCurve:Gh});class mx extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ml(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Wh[r.type]().fromJSON(r))}return this}}class Za extends mx{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ml(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Vh(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Hh(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new yl(e,t,n,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qr extends Ct{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new P,u=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=n+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nt extends Ct{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const x=[],m=n/2;let h=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function y(){const v=new P,S=new P;let L=0;const O=(t-e)/n;for(let I=0;I<=s;I++){const w=[],b=I/s,U=b*(t-e)+e;for(let W=0;W<=r;W++){const F=W/r,N=F*l+a,G=Math.sin(N),ie=Math.cos(N);S.x=U*G,S.y=-b*n+m,S.z=U*ie,d.push(S.x,S.y,S.z),v.set(G,O,ie).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-b),w.push(g++)}x.push(w)}for(let I=0;I<r;I++)for(let w=0;w<s;w++){const b=x[w][I],U=x[w+1][I],W=x[w+1][I+1],F=x[w][I+1];u.push(b,U,F),u.push(U,W,F),L+=6}c.addGroup(h,L,0),h+=L}function _(v){const S=g,L=new ge,O=new P;let I=0;const w=v===!0?e:t,b=v===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;const U=g;for(let W=0;W<=r;W++){const N=W/r*l+a,G=Math.cos(N),ie=Math.sin(N);O.x=w*ie,O.y=m*b,O.z=w*G,d.push(O.x,O.y,O.z),f.push(0,b,0),L.x=G*.5+.5,L.y=ie*.5*b+.5,p.push(L.x,L.y),g++}for(let W=0;W<r;W++){const F=S+W,N=U+W;v===!0?u.push(N,N+1,F):u.push(N+1,N,F),I+=3}c.addGroup(h,I,v===!0?1:2),h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends Ct{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new P,v=new P,S=new P;for(let L=0;L<t.length;L+=3)p(t[L+0],_),p(t[L+1],v),p(t[L+2],S),l(_,v,S,y)}function l(y,_,v,S){const L=S+1,O=[];for(let I=0;I<=L;I++){O[I]=[];const w=y.clone().lerp(v,I/L),b=_.clone().lerp(v,I/L),U=L-I;for(let W=0;W<=U;W++)W===0&&I===L?O[I][W]=w:O[I][W]=w.clone().lerp(b,W/U)}for(let I=0;I<L;I++)for(let w=0;w<2*(L-I)-1;w++){const b=Math.floor(w/2);w%2===0?(f(O[I][b+1]),f(O[I+1][b]),f(O[I][b])):(f(O[I][b+1]),f(O[I+1][b+1]),f(O[I+1][b]))}}function c(y){const _=new P;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(y),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function u(){const y=new P;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const v=m(y)/2/Math.PI+.5,S=h(y)/Math.PI+.5;o.push(v,1-S)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const _=o[y+0],v=o[y+2],S=o[y+4],L=Math.max(_,v,S),O=Math.min(_,v,S);L>.9&&O<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function p(y,_){const v=y*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){const y=new P,_=new P,v=new P,S=new P,L=new ge,O=new ge,I=new ge;for(let w=0,b=0;w<s.length;w+=9,b+=6){y.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),L.set(o[b+0],o[b+1]),O.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),S.copy(y).add(_).add(v).divideScalar(3);const U=m(S);x(L,b+0,y,U),x(O,b+2,_,U),x(I,b+4,v,U)}}function x(y,_,v,S){S<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.vertices,e.indices,e.radius,e.details)}}class ro extends Za{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Za().fromJSON(r))}return this}}const gx={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=qh(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,f,p;if(n&&(s=wx(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)d=i[g],f=i[g+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Jr(s,o,t,a,l,p,0),o}};function qh(i,e,t,n,r){let s,o;if(r===Ix(i,e,t,n)>0)for(s=e;s<t;s+=n)o=xu(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=xu(s,i[s],i[s+1],o);return o&&Co(o,o.next)&&(es(o),o=o.next),o}function Di(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Co(t,t.next)||ht(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Ax(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?xx(i,n,r,s):_x(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),es(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=vx(Di(i),e,t),Jr(i,e,t,n,r,s,2)):o===2&&yx(i,e,t,n,r,s):Jr(Di(i),e,t,n,r,s,1);break}}}function _x(i){const e=i.prev,t=i,n=i.next;if(ht(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=p&&tr(r,a,s,l,o,c,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xx(i,e,t,n){const r=i.prev,s=i,o=i.next;if(ht(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<d?u<f?u:f:d<f?d:f,x=a>l?a>c?a:c:l>c?l:c,m=u>d?u>f?u:f:d>f?d:f,h=Ka(p,g,e,t,n),y=Ka(x,m,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=h&&v&&v.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&tr(a,u,l,d,c,f,_.x,_.y)&&ht(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&tr(a,u,l,d,c,f,v.x,v.y)&&ht(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=h;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&tr(a,u,l,d,c,f,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&tr(a,u,l,d,c,f,v.x,v.y)&&ht(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vx(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Co(r,s)&&Xh(r,n,n.next,s)&&Qr(r,s)&&Qr(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),es(n),es(n.next),n=i=s),n=n.next}while(n!==i);return Di(n)}function yx(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Px(o,a)){let l=$h(o,a);o=Di(o,o.next),l=Di(l,l.next),Jr(o,e,t,n,r,s,0),Jr(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function wx(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=qh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Tx(c));for(r.sort(Mx),s=0;s<r.length;s++)t=Sx(r[s],t);return t}function Mx(i,e){return i.x-e.x}function Sx(i,e){const t=bx(i,e);if(!t)return e;const n=$h(t,i);return Di(n,n.next),Di(t,t.next)}function bx(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&tr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),Qr(t,i)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&Ex(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function Ex(i,e){return ht(i.prev,i,e.prev)<0&&ht(e.next,i,i.next)<0}function Ax(i,e,t,n){let r=i;do r.z===0&&(r.z=Ka(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Cx(r)}function Cx(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Ka(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Px(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Lx(i,e)&&(Qr(i,e)&&Qr(e,i)&&Rx(i,e)&&(ht(i.prev,i,e.prev)||ht(i,e.prev,e))||Co(i,e)&&ht(i.prev,i,i.next)>0&&ht(e.prev,e,e.next)>0)}function ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Co(i,e){return i.x===e.x&&i.y===e.y}function Xh(i,e,t,n){const r=Vs(ht(i,e,t)),s=Vs(ht(i,e,n)),o=Vs(ht(t,n,i)),a=Vs(ht(t,n,e));return!!(r!==s&&o!==a||r===0&&Hs(i,t,e)||s===0&&Hs(i,n,e)||o===0&&Hs(t,i,n)||a===0&&Hs(t,e,n))}function Hs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vs(i){return i>0?1:i<0?-1:0}function Lx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qr(i,e){return ht(i.prev,i,i.next)<0?ht(i,e,i.next)>=0&&ht(i,i.prev,e)>=0:ht(i,e,i.prev)<0||ht(i,i.next,e)<0}function Rx(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $h(i,e){const t=new Ja(i.i,i.x,i.y),n=new Ja(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function xu(i,e,t,n){const r=new Ja(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ja(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ix(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class ur{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return ur.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];vu(e),yu(n,e);let o=e.length;t.forEach(vu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,yu(n,t[l]);const a=gx.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function vu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class bl extends Ct{constructor(e=new ro([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Je(r,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Dx;let _,v=!1,S,L,O,I;h&&(_=h.getSpacedPoints(u),v=!0,f=!1,S=h.computeFrenetFrames(u,!1),L=new P,O=new P,I=new P),f||(m=0,p=0,g=0,x=0);const w=a.extractPoints(c);let b=w.shape;const U=w.holes;if(!ur.isClockWise(b)){b=b.reverse();for(let E=0,C=U.length;E<C;E++){const D=U[E];ur.isClockWise(D)&&(U[E]=D.reverse())}}const F=ur.triangulateShape(b,U),N=b;for(let E=0,C=U.length;E<C;E++){const D=U[E];b=b.concat(D)}function G(E,C,D){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().addScaledVector(C,D)}const ie=b.length,ee=F.length;function j(E,C,D){let H,B,K;const se=E.x-C.x,Z=E.y-C.y,le=D.x-E.x,ne=D.y-E.y,A=se*se+Z*Z,M=se*ne-Z*le;if(Math.abs(M)>Number.EPSILON){const z=Math.sqrt(A),Y=Math.sqrt(le*le+ne*ne),Q=C.x-Z/z,he=C.y+se/z,R=D.x-ne/Y,J=D.y+le/Y,q=((R-Q)*ne-(J-he)*le)/(se*ne-Z*le);H=Q+se*q-E.x,B=he+Z*q-E.y;const _e=H*H+B*B;if(_e<=2)return new ge(H,B);K=Math.sqrt(_e/2)}else{let z=!1;se>Number.EPSILON?le>Number.EPSILON&&(z=!0):se<-Number.EPSILON?le<-Number.EPSILON&&(z=!0):Math.sign(Z)===Math.sign(ne)&&(z=!0),z?(H=-Z,B=se,K=Math.sqrt(A)):(H=se,B=Z,K=Math.sqrt(A/2))}return new ge(H/K,B/K)}const re=[];for(let E=0,C=N.length,D=C-1,H=E+1;E<C;E++,D++,H++)D===C&&(D=0),H===C&&(H=0),re[E]=j(N[E],N[D],N[H]);const de=[];let Me,me=re.concat();for(let E=0,C=U.length;E<C;E++){const D=U[E];Me=[];for(let H=0,B=D.length,K=B-1,se=H+1;H<B;H++,K++,se++)K===B&&(K=0),se===B&&(se=0),Me[H]=j(D[H],D[K],D[se]);de.push(Me),me=me.concat(Me)}for(let E=0;E<m;E++){const C=E/m,D=p*Math.cos(C*Math.PI/2),H=g*Math.sin(C*Math.PI/2)+x;for(let B=0,K=N.length;B<K;B++){const se=G(N[B],re[B],H);$(se.x,se.y,-D)}for(let B=0,K=U.length;B<K;B++){const se=U[B];Me=de[B];for(let Z=0,le=se.length;Z<le;Z++){const ne=G(se[Z],Me[Z],H);$(ne.x,ne.y,-D)}}}const te=g+x;for(let E=0;E<ie;E++){const C=f?G(b[E],me[E],te):b[E];v?(O.copy(S.normals[0]).multiplyScalar(C.x),L.copy(S.binormals[0]).multiplyScalar(C.y),I.copy(_[0]).add(O).add(L),$(I.x,I.y,I.z)):$(C.x,C.y,0)}for(let E=1;E<=u;E++)for(let C=0;C<ie;C++){const D=f?G(b[C],me[C],te):b[C];v?(O.copy(S.normals[E]).multiplyScalar(D.x),L.copy(S.binormals[E]).multiplyScalar(D.y),I.copy(_[E]).add(O).add(L),$(I.x,I.y,I.z)):$(D.x,D.y,d/u*E)}for(let E=m-1;E>=0;E--){const C=E/m,D=p*Math.cos(C*Math.PI/2),H=g*Math.sin(C*Math.PI/2)+x;for(let B=0,K=N.length;B<K;B++){const se=G(N[B],re[B],H);$(se.x,se.y,d+D)}for(let B=0,K=U.length;B<K;B++){const se=U[B];Me=de[B];for(let Z=0,le=se.length;Z<le;Z++){const ne=G(se[Z],Me[Z],H);v?$(ne.x,ne.y+_[u-1].y,_[u-1].x+D):$(ne.x,ne.y,d+D)}}}ue(),ve();function ue(){const E=r.length/3;if(f){let C=0,D=ie*C;for(let H=0;H<ee;H++){const B=F[H];Ne(B[2]+D,B[1]+D,B[0]+D)}C=u+m*2,D=ie*C;for(let H=0;H<ee;H++){const B=F[H];Ne(B[0]+D,B[1]+D,B[2]+D)}}else{for(let C=0;C<ee;C++){const D=F[C];Ne(D[2],D[1],D[0])}for(let C=0;C<ee;C++){const D=F[C];Ne(D[0]+ie*u,D[1]+ie*u,D[2]+ie*u)}}n.addGroup(E,r.length/3-E,0)}function ve(){const E=r.length/3;let C=0;xe(N,C),C+=N.length;for(let D=0,H=U.length;D<H;D++){const B=U[D];xe(B,C),C+=B.length}n.addGroup(E,r.length/3-E,1)}function xe(E,C){let D=E.length;for(;--D>=0;){const H=D;let B=D-1;B<0&&(B=E.length-1);for(let K=0,se=u+m*2;K<se;K++){const Z=ie*K,le=ie*(K+1),ne=C+H+Z,A=C+B+Z,M=C+B+le,z=C+H+le;Le(ne,A,M,z)}}}function $(E,C,D){l.push(E),l.push(C),l.push(D)}function Ne(E,C,D){pe(E),pe(C),pe(D);const H=r.length/3,B=y.generateTopUV(n,r,H-3,H-2,H-1);Ce(B[0]),Ce(B[1]),Ce(B[2])}function Le(E,C,D,H){pe(E),pe(C),pe(H),pe(C),pe(D),pe(H);const B=r.length/3,K=y.generateSideWallUV(n,r,B-6,B-3,B-2,B-1);Ce(K[0]),Ce(K[1]),Ce(K[3]),Ce(K[1]),Ce(K[2]),Ce(K[3])}function pe(E){r.push(l[E*3+0]),r.push(l[E*3+1]),r.push(l[E*3+2])}function Ce(E){s.push(E.x),s.push(E.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ox(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Wh[r.type]().fromJSON(r)),new bl(n,e.options)}}const Dx={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-d),new ge(f,1-g),new ge(x,1-h)]:[new ge(a,1-l),new ge(u,1-d),new ge(p,1-g),new ge(m,1-h)]}};function Ox(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nr extends Sl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nr(e.radius,e.detail)}}class ir extends Ct{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/r,p=new P,g=new ge;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const h=s+m/n*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let x=0;x<r;x++){const m=x*(n+1);for(let h=0;h<n;h++){const y=h+m,_=y,v=y+n+1,S=y+n+2,L=y+1;a.push(_,v,L),a.push(v,S,L)}}this.setIndex(a),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class El extends Ct{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,f=new P,p=[],g=[],x=[],m=[];for(let h=0;h<=n;h++){const y=[],_=h/n;let v=0;h===0&&o===0?v=.5/t:h===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const L=S/t;d.x=-e*Math.cos(r+L*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+L*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(L+v,1-_),y.push(c++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const _=u[h][y+1],v=u[h][y],S=u[h+1][y],L=u[h+1][y+1];(h!==0||o>0)&&p.push(_,v,L),(h!==n-1||l<Math.PI)&&p.push(v,S,L)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vi extends Ct{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new P,d=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,y=(r+1)*p+g;o.push(x,m,y),o.push(m,h,y)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const wu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nx{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ux=new Nx;class jh{constructor(e){this.manager=e!==void 0?e:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Fn={};class Fx extends Error{constructor(e,t){super(e),this.response=t}}class zx extends jh{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wu.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:r});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fn[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let x=0;const m=new ReadableStream({start(h){y();function y(){d.read().then(({done:_,value:v})=>{if(_)h.close();else{x+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let L=0,O=u.length;L<O;L++){const I=u[L];I.onProgress&&I.onProgress(S)}h.enqueue(v),y()}})}}});return new Response(m)}else throw new Fx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{wu.add(e,c);const u=Fn[e];delete Fn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yh{constructor(e,t,n=0,r=1/0){this.ray=new gl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qa(e,this,n,t),n.sort(Mu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Qa(e[r],this,n,t);return n.sort(Mu),n}}function Mu(i,e){return i.distance-e.distance}function Qa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Qa(r[s],e,t,!0)}}class Su{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kx extends nx{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ct;r.setAttribute("position",new Je(t,3)),r.setAttribute("color",new Je(n,3));const s=new vl({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new Te,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bx{constructor(){this.type="ShapePath",this.color=new Te,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Za,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const y=[];for(let _=0,v=h.length;_<v;_++){const S=h[_],L=new ro;L.curves=S.curves,y.push(L)}return y}function n(h,y){const _=y.length;let v=!1;for(let S=_-1,L=0;L<_;S=L++){let O=y[S],I=y[L],w=I.x-O.x,b=I.y-O.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(O=y[L],w=-w,I=y[S],b=-b),h.y<O.y||h.y>I.y)continue;if(h.y===O.y){if(h.x===O.x)return!0}else{const U=b*(h.x-O.x)-w*(h.y-O.y);if(U===0)return!0;if(U<0)continue;v=!v}}else{if(h.y!==O.y)continue;if(I.x<=h.x&&h.x<=O.x||O.x<=h.x&&h.x<=I.x)return!0}}return v}const r=ur.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ro,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const d=[],f=[];let p=[],g=0,x;f[g]=void 0,p[g]=[];for(let h=0,y=s.length;h<y;h++)a=s[h],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new ro,p:x},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:x[0]});if(!f[0])return t(s);if(f.length>1){let h=!1,y=0;for(let _=0,v=f.length;_<v;_++)d[_]=[];for(let _=0,v=f.length;_<v;_++){const S=p[_];for(let L=0;L<S.length;L++){const O=S[L];let I=!0;for(let w=0;w<f.length;w++)n(O.p,f[w].p)&&(_!==w&&y++,I?(I=!1,d[w].push(O)):h=!0);I&&d[_].push(O)}}y>0&&h===!1&&(p=d)}let m;for(let h=0,y=f.length;h<y;h++){l=f[h].s,c.push(l),m=p[h];for(let _=0,v=m.length;_<v;_++)l.holes.push(m[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);const Hx={coordinate:[0,0,0],sectors:{Cluster_01_Sector001:{coordinate:[0,0,0],name:"Grand Exchange｜大交易所 I",ownership:"tel"},Cluster_01_Sector002:{coordinate:[-1,0,.5],name:"Grand Exchange｜大交易所 III",ownership:"tel"},Cluster_01_Sector003:{coordinate:[0,0,1],name:"Grand Exchange｜大交易所 IV",ownership:"tel"}},ownership:"tel"},Vx={coordinate:[15e6,0,2598e4],sectors:{Cluster_02_Sector001:{coordinate:[0,0,0],name:"Eighteen Billion｜一百八十亿",ownership:"tel"}},ownership:"tel"},Gx={coordinate:[3e7,0,1732e4],sectors:{Cluster_03_Sector001:{coordinate:[0,0,0],name:"Memory of Profit｜利润的回忆 IX",ownership:"tel"}},ownership:"tel"},Wx={coordinate:[3e7,0,-1732e4],sectors:{Cluster_04_Sector001:{coordinate:[0,0,0],name:"Nopileos' Fortune｜诺皮利奥的财富 II",ownership:"unclaimed"},Cluster_04_Sector002:{coordinate:[1,0,-1],name:"Nopileos' Fortune｜诺皮利奥的财富 VI",ownership:"unclaimed"}},ownership:"unclaimed"},qx={coordinate:[0,0,-1732e4],sectors:{Cluster_05_Sector001:{coordinate:[0,0,0],name:"Path to Profit｜财富之路",ownership:"tel"}},ownership:"tel"},Xx={coordinate:[-15e6,0,-866e4],sectors:{Cluster_06_Sector001:{coordinate:[0,0,0],name:"Black Hole Sun｜黑洞太阳 IV",ownership:"arg"},Cluster_06_Sector002:{coordinate:[1,0,-1],name:"Black Hole Sun｜黑洞太阳 V",ownership:"arg"}},ownership:"arg"},$x={coordinate:[-6e7,0,3464e4],sectors:{Cluster_07_Sector001:{coordinate:[0,0,0],name:"The Reach｜抵达",ownership:"arg"}},ownership:"arg"},jx={coordinate:[0,0,5196e4],sectors:{Cluster_08_Sector001:{coordinate:[0,0,0],name:"Silent Witness｜沉默的证人 I",ownership:"arg"}},ownership:"arg"},Yx={coordinate:[6e7,0,3464e4],sectors:{Cluster_09_Sector001:{coordinate:[0,0,0],name:"Bright Promise｜鲜明的承诺",ownership:"tel"}},ownership:"tel"},Zx={coordinate:[6e7,0,-1732e4],sectors:{Cluster_10_Sector001:{coordinate:[0,0,0],name:"Unholy Retribution｜邪恶的报复",ownership:"par"}},ownership:"par"},Kx={coordinate:[0,0,-5196e4],sectors:{Cluster_11_Sector001:{coordinate:[0,0,0],name:"Pontifex\\'s Claim｜教皇的声明",ownership:"hop"}},ownership:"hop"},Jx={coordinate:[-3e7,0,-3464e4],sectors:{Cluster_12_Sector001:{coordinate:[0,0,0],name:"True Sight｜真视",ownership:"hop"}},ownership:"hop"},Qx={coordinate:[-3e7,0,0],sectors:{Cluster_13_Sector001:{coordinate:[0,0,0],name:"Second Contact｜第二次接触 II Flashpoint｜闪点",ownership:"ant"}},ownership:"ant"},ev={coordinate:[-45e6,0,2598e4],sectors:{Cluster_14_Sector001:{coordinate:[0,0,0],name:"Argon Prime｜Argon之都",ownership:"arg"}},ownership:"arg"},tv={coordinate:[105e6,0,2598e4],sectors:{Cluster_15_Sector001:{coordinate:[0,0,0],name:"Ianamus Zura｜依阿那姆斯祖拉 IV",ownership:"tel"},Cluster_15_Sector002:{coordinate:[1,0,1],name:"Ianamus Zura｜依阿那姆斯祖拉 VII",ownership:"tel"}},ownership:"tel"},nv={coordinate:[105e6,0,4331e4],sectors:{Cluster_16_Sector001:{coordinate:[0,0,0],name:"矩阵 #451",ownership:"xen"}},ownership:"xen"},iv={coordinate:[9e7,0,5196e4],sectors:{Cluster_17_Sector001:{coordinate:[0,0,0],name:"矩阵 #9",ownership:"xen"}},ownership:"xen"},rv={coordinate:[6e7,0,0],sectors:{Cluster_18_Sector001:{coordinate:[0,0,0],name:"Trinity Sanctum｜三圣殿 III",ownership:"par"}},ownership:"par"},sv={coordinate:[75e6,0,-866e4],sectors:{Cluster_19_Sector001:{coordinate:[0,0,0],name:"Hewa's Twin｜赫瓦双子 I",ownership:"tel"},Cluster_19_Sector002:{coordinate:[1,0,1],name:"Hewa's Twin｜赫瓦双子 II",ownership:"tel"}},ownership:"tel"},ov={coordinate:[9e7,0,-1733e4],sectors:{Cluster_20_Sector001:{coordinate:[0,0,0],name:"Company Regard｜公司关注",ownership:"tel"}},ownership:"tel"},av={coordinate:[9e7,0,-3464e4],sectors:{Cluster_21_Sector001:{coordinate:[0,0,0],name:"Scale Plate Green｜鳞片之绿 I",ownership:"xen"},Cluster_21_Sector002:{coordinate:[-1,0,1],name:"Scale Plate Green｜鳞片之绿 VII",ownership:"xen"}},ownership:"xen"},lv={coordinate:[3e7,0,-3465e4],sectors:{Cluster_22_Sector001:{coordinate:[0,0,0],name:"Pious Mists｜虔诚之雾 II",ownership:"par"}},ownership:"par"},cv={coordinate:[45e6,0,-6064e4],sectors:{Cluster_23_Sector001:{coordinate:[0,0,0],name:"Sacred Relic｜神圣遗迹",ownership:"par"}},ownership:"par"},uv={coordinate:[-15e6,0,-4331e4],sectors:{Cluster_24_Sector001:{coordinate:[0,0,0],name:"Holy Vision｜神圣眼光",ownership:"hop"}},ownership:"hop"},hv={coordinate:[-3e7,0,-5196e4],sectors:{Cluster_25_Sector001:{coordinate:[0,0,0],name:"Faulty Logic｜错误逻辑 I",ownership:"xen"},Cluster_25_Sector002:{coordinate:[-1,0,-1],name:"Faulty Logic｜错误逻辑 VII",ownership:"xen"}},ownership:"xen"},dv={coordinate:[-6e7,0,-5197e4],sectors:{Cluster_26_Sector001:{coordinate:[0,0,0],name:"Atiya's Misfortune｜安提亚的不幸 I",ownership:"xen"},Cluster_26_Sector002:{coordinate:[1,0,-1],name:"Atiya's Misfortune｜安提亚的不幸 III",ownership:"xen"}},ownership:"xen"},fv={coordinate:[-9e7,0,1732e4],sectors:{Cluster_27_Sector001:{coordinate:[0,0,0],name:"The Void｜虚空",ownership:"ant"}},ownership:"ant"},pv={coordinate:[-105e6,0,866e4],sectors:{Cluster_28_Sector001:{coordinate:[0,0,0],name:"Antigone Memorial｜安提戈涅纪念碑",ownership:"ant"}},ownership:"ant"},mv={coordinate:[-3e7,0,3465e4],sectors:{Cluster_29_Sector001:{coordinate:[0,0,0],name:"Hatikvah's Choice｜希望之歌的选择 I",ownership:"hat"},Cluster_29_Sector002:{coordinate:[1,0,1],name:"Hatikvah's Choice｜希望之歌的选择 III",ownership:"arg"}},ownership:"mix"},gv={coordinate:[-45e6,0,433e5],sectors:{Cluster_30_Sector001:{coordinate:[0,0,0],name:"Morning Star｜晨星 III",ownership:"arg"}},ownership:"arg"},_v={coordinate:[-75e6,0,6063e4],sectors:{Cluster_31_Sector001:{coordinate:[0,0,0],name:"Heretic's End｜异端的终结",ownership:"unclaimed"}},ownership:"unclaimed"},xv={coordinate:[-3e7,0,6928e4],sectors:{Cluster_32_Sector001:{coordinate:[0,0,0],name:"Tharka's Cascade｜塔卡的瀑布 XV",ownership:"xen"},Cluster_32_Sector002:{coordinate:[-1,0,1],name:"Tharka's Cascade｜塔卡的瀑布 XVII",ownership:"xen"}},ownership:"xen"},vv={coordinate:[-45e6,0,7794e4],sectors:{Cluster_33_Sector001:{coordinate:[0,0,0],name:"矩阵 #79B",ownership:"xen"}},ownership:"xen"},yv={coordinate:[45e6,0,4331e4],sectors:{Cluster_34_Sector001:{coordinate:[0,0,0],name:"Profit Center Alpha｜利润中心阿尔法",ownership:"tel"}},ownership:"tel"},wv={coordinate:[0,0,-6928e4],sectors:{Cluster_35_Sector001:{coordinate:[0,0,0],name:"Lasting Vengeance｜无尽的复仇",ownership:"hop"}},ownership:"hop"},Mv={coordinate:[-15e6,0,-6064e4],sectors:{Cluster_36_Sector001:{coordinate:[0,0,0],name:"Cardinal's Redress｜主教的平反",ownership:"hop"}},ownership:"hop"},Sv={coordinate:[45e6,0,-4331e4],sectors:{Cluster_37_Sector001:{coordinate:[0,0,0],name:"Pious Mists｜虔诚之雾 IV",ownership:"par"}},ownership:"par"},bv={coordinate:[3e7,0,-5197e4],sectors:{Cluster_38_Sector001:{coordinate:[0,0,0],name:"Pious Mists｜虔诚之雾 XI",ownership:"par"}},ownership:"par"},Ev={coordinate:[3e7,0,0],sectors:{Cluster_39_Sector001:{coordinate:[0,0,0],name:"Memory of Profit｜利润的回忆 X",ownership:"tel"}},ownership:"tel"},Av={coordinate:[-45e6,0,-866e4],sectors:{Cluster_40_Sector001:{coordinate:[0,0,0],name:"Second Contact｜第二次接触 VII",ownership:"ant"}},ownership:"ant"},Cv={coordinate:[-45e6,0,866e4],sectors:{Cluster_41_Sector001:{coordinate:[0,0,0],name:"Second Contact｜第二次接触 XI",ownership:"ant"}},ownership:"ant"},Tv={coordinate:[9e7,0,0],sectors:{Cluster_42_Sector001:{coordinate:[0,0,0],name:"Hewa's Twin｜赫瓦双子 III",ownership:"tel"},Cluster_42_Sector002:{coordinate:[1,0,-1],name:"Hewa's Twin｜赫瓦双子 IV The Cove｜海湾",ownership:"unclaimed"}},ownership:"mix"},Pv={coordinate:[9e7,0,1732e4],sectors:{Cluster_43_Sector001:{coordinate:[0,0,0],name:"Hewa's Twin｜赫瓦双子 V",ownership:"tel"}},ownership:"tel"},Lv={coordinate:[15e6,0,6062e4],sectors:{Cluster_44_Sector001:{coordinate:[0,0,0],name:"Silent Witness｜沉默的证人 XI",ownership:"unclaimed"}},ownership:"unclaimed"},Rv={coordinate:[0,0,6928e4],sectors:{Cluster_45_Sector001:{coordinate:[0,0,0],name:"Silent Witness｜沉默的证人 XII",ownership:"unclaimed"}},ownership:"unclaimed"},Iv={coordinate:[-45e6,0,6062e4],sectors:{Cluster_46_Sector001:{coordinate:[0,0,0],name:"Morning Star｜晨星 IV",ownership:"arg"}},ownership:"arg"},Dv={coordinate:[45e6,0,866e4],sectors:{Cluster_47_Sector001:{coordinate:[0,0,0],name:"Trinity Sanctum｜三圣殿 VII",ownership:"par"}},ownership:"par"},Ov={coordinate:[-75e6,0,-866e4],sectors:{Cluster_49_Sector001:{coordinate:[0,0,0],name:"Frontier Edge｜疆域边陲",ownership:"unclaimed"}},ownership:"unclaimed"},Nv={coordinate:[-9e7,0,3465e4],sectors:{Cluster_48_Sector001:{coordinate:[0,0,0],name:"Getsu Fune｜月之舟",ownership:"unclaimed"}},ownership:"unclaimed"},Uv={coordinate:[105000016,0,-2599e4],sectors:{Cluster_50_Sector001:{coordinate:[0,0,0],name:"Turquoise Sea｜绿宝石之海 IX",ownership:"unclaimed"},Cluster_50_Sector002:{coordinate:[1,0,-1],name:"Turquoise Sea｜绿宝石之海 X",ownership:"unclaimed"}},ownership:"unclaimed"},Fv={coordinate:[-12e7,0,5196e4],sectors:{Cluster_602_Sector001:{coordinate:[0,0,0],name:"Barren Shores｜贫瘠海岸",ownership:"bor"}},ownership:"bor"},zv={coordinate:[-135e6,0,433e5],sectors:{Cluster_603_Sector001:{coordinate:[0,0,0],name:"Great Reef｜大暗礁",ownership:"bor"}},ownership:"bor"},kv={coordinate:[-15e7,0,6928e4],sectors:{Cluster_605_Sector001:{coordinate:[0,0,0],name:"Sanctuary of Darkness｜黑暗庇护所",ownership:"unclaimed"}},ownership:"unclaimed"},Bv={coordinate:[-18e7,0,866e5],sectors:{Cluster_606_Sector001:{coordinate:[0,0,0],name:"Kingdom End｜王国末路 I",ownership:"bor"},Cluster_606_Sector002:{coordinate:[0,0,-1],name:"Reflected Stars｜反射星",ownership:"bor"},Cluster_606_Sector003:{coordinate:[1,0,-.5],name:"Towering Wave｜滔天巨浪",ownership:"bor"}},ownership:"bor"},Hv={coordinate:[-135e6,0,2598e4],sectors:{Cluster_604_Sector001:{coordinate:[0,0,0],name:"Ocean of Fantasy｜梦幻海洋",ownership:"bor"}},ownership:"bor"},Vv={coordinate:[-195e6,0,7794e4],sectors:{Cluster_607_Sector001:{coordinate:[0,0,0],name:"Rolk's Demise｜洛克的消亡",ownership:"bor"}},ownership:"bor"},Gv={coordinate:[-105e6,0,6063e4],sectors:{Cluster_601_Sector001:{coordinate:[0,0,0],name:"Watchful Gaze｜警惕凝视",ownership:"unclaimed"}},ownership:"unclaimed"},Wv={coordinate:[-18e7,0,6928e4],sectors:{Cluster_608_Sector001:{coordinate:[0,0,0],name:"Atreus' Clouds｜阿特柔斯之云",ownership:"bor"}},ownership:"bor"},qv={coordinate:[-195e6,0,6063e4],sectors:{Cluster_609_Sector001:{coordinate:[0,0,0],name:"Menelaus' Oasis｜梅涅劳斯绿洲",ownership:"bor"}},ownership:"bor"},Xv={coordinate:[-3e7,0,866e5],sectors:{Cluster_401_Sector001:{coordinate:[0,0,0],name:"Family Zhin | 金氏家族",ownership:"zya"}},ownership:"zya"},$v={coordinate:[-3e7,0,10392e4],sectors:{Cluster_402_Sector001:{coordinate:[0,0,0],name:"Family Kritt | 科瑞特家族",ownership:"zya"}},ownership:"zya"},jv={coordinate:[-75e6,0,7794e4],sectors:{Cluster_403_Sector001:{coordinate:[0,0,0],name:"Wretched Skies｜悲惨的天空 V Family Phi | 菲氏家族",ownership:"zya"}},ownership:"zya"},Yv={coordinate:[-6e7,0,866e5],sectors:{Cluster_400_Sector001:{coordinate:[0,0,0],name:"Wretched Skies｜悲惨的天空 IV Family Valka | 维尔卡家族",ownership:"zya"}},ownership:"zya"},Zv={coordinate:[12e7,0,3464e4],sectors:{Cluster_408_Sector001:{coordinate:[0,0,0],name:"Thuruk's Demise｜苏鲁克的消亡 III",ownership:"frf"},Cluster_408_Sector002:{coordinate:[-1,0,1],name:"Thuruk's Demise｜苏鲁克的消亡 II 首次冲撞",ownership:"frf"}},ownership:"frf"},Kv={coordinate:[12e7,0,5196e4],sectors:{Cluster_407_Sector001:{coordinate:[0,0,0],name:"Family Tkr｜提克家族",ownership:"frf"}},ownership:"frf"},Jv={coordinate:[135e6,0,6062e4],sectors:{Cluster_409_Sector001:{coordinate:[0,0,0],name:"Tharka's Ravine｜塔卡的溪谷 XXIV",ownership:"frf"}},ownership:"frf"},Qv={coordinate:[15e7,0,6928e4],sectors:{Cluster_410_Sector001:{coordinate:[0,0,0],name:"Tharka's Ravine｜塔卡的溪谷 XVI",ownership:"frf"}},ownership:"frf"},ey={coordinate:[15e7,0,866e5],sectors:{Cluster_411_Sector001:{coordinate:[0,0,0],name:"Heart of Acrimony｜刻薄之心 II",ownership:"frf"}},ownership:"frf"},ty={coordinate:[45e6,0,9526e4],sectors:{Cluster_405_Sector001:{coordinate:[0,0,0],name:"Zyarth's Dominion｜扎亚斯的领土 IV",ownership:"zya"}},ownership:"zya"},ny={coordinate:[45e6,0,11258e4],sectors:{Cluster_406_Sector001:{coordinate:[0,0,0],name:"Zyarth's Dominion｜扎亚斯的领土 X",ownership:"zya"}},ownership:"zya"},iy={coordinate:[3e7,0,10392e4],sectors:{Cluster_404_Sector001:{coordinate:[0,0,0],name:"Zyarth's Dominion｜扎亚斯的领土 I",ownership:"zya"}},ownership:"zya"},ry={coordinate:[3e7,0,866e5],sectors:{Cluster_418_Sector001:{coordinate:[0,0,0],name:"Family Nhuut | 纽特家族",ownership:"zya"}},ownership:"zya"},sy={coordinate:[45e6,0,7794e4],sectors:{Cluster_419_Sector001:{coordinate:[0,0,0],name:"Open Market｜开放市场",ownership:"tel"}},ownership:"tel"},oy={coordinate:[6e7,0,6928e4],sectors:{Cluster_420_Sector001:{coordinate:[0,0,0],name:"Two Grand｜两千元大钞",ownership:"tel"}},ownership:"tel"},ay={coordinate:[75e6,0,9526e4],sectors:{Cluster_416_Sector001:{coordinate:[0,0,0],name:"Guiding Star｜引导之星 V",ownership:"arg"},Cluster_416_Sector002:{coordinate:[-1,0,1],name:"Guiding Star｜引导之星 VII",ownership:"arg"}},ownership:"arg"},ly={coordinate:[75e6,0,1299e5],sectors:{Cluster_417_Sector001:{coordinate:[0,0,0],name:"Eleventh Hour｜第十一小时",ownership:"arg"}},ownership:"arg"},cy={coordinate:[12e7,0,6928e4],sectors:{Cluster_421_Sector001:{coordinate:[0,0,0],name:"失败之火",ownership:"frf"}},ownership:"frf"},uy={coordinate:[-9e7,0,866e5],sectors:{Cluster_422_Sector001:{coordinate:[0,0,0],name:"Wretched Skies｜悲惨的天空 X",ownership:"par"}},ownership:"par"},hy={coordinate:[-12e7,0,866e5],sectors:{Cluster_423_Sector001:{coordinate:[0,0,0],name:"Litany of Fury｜愤怒祷文 IX",ownership:"par"},Cluster_423_Sector002:{coordinate:[-1,0,1],name:"Litany of Fury｜愤怒祷文 XII",ownership:"par"}},ownership:"par"},dy={coordinate:[165e6,0,6062e4],sectors:{Cluster_412_Sector001:{coordinate:[0,0,0],name:"Tharka's Ravine｜塔卡的溪谷 VIII",ownership:"frf"}},ownership:"frf"},fy={coordinate:[18e7,0,6928e4],sectors:{Cluster_413_Sector001:{coordinate:[0,0,0],name:"Tharka's Ravine｜塔卡的溪谷 IV Tharka's Fall｜塔卡的堕落",ownership:"xen"}},ownership:"xen"},py={coordinate:[-3e7,0,12124e4],sectors:{Cluster_414_Sector001:{coordinate:[0,0,0],name:"Rhy's Defiance｜雷氏的挑战",ownership:"xen"}},ownership:"xen"},my={coordinate:[-15e6,0,1299e5],sectors:{Cluster_415_Sector001:{coordinate:[0,0,0],name:"矩阵 #598",ownership:"xen"}},ownership:"xen"},gy={coordinate:[-135e6,0,9526e4],sectors:{Cluster_424_Sector001:{coordinate:[0,0,0],name:"Emperor's Pride｜帝王的骄傲 IV",ownership:"xen"},Cluster_424_Sector002:{coordinate:[1,0,1],name:"Emperor's Pride｜帝王的骄傲 VI",ownership:"xen"}},ownership:"xen"},_y={coordinate:[135e6,0,9526e4],sectors:{Cluster_425_Sector001:{coordinate:[0,0,0],name:"Heart of Acrimony｜刻薄之心 I The Boneyard | 埋骨之地",ownership:"unclaimed"}},ownership:"unclaimed"},xy={coordinate:[-15e7,0,0],sectors:{Cluster_100_Sector001:{coordinate:[0,0,0],name:"Asteroid Belt｜小行星带",ownership:"ter"}},ownership:"ter"},vy={coordinate:[-165e6,0,866e4],sectors:{Cluster_101_Sector001:{coordinate:[0,0,0],name:"Mars｜火星",ownership:"ter"}},ownership:"ter"},yy={coordinate:[-18e7,0,1732e4],sectors:{Cluster_102_Sector001:{coordinate:[0,0,0],name:"Venus｜金星",ownership:"ter"}},ownership:"ter"},wy={coordinate:[-165e6,0,2598e4],sectors:{Cluster_104_Sector001:{coordinate:[0,0,0],name:"Earth｜地球",ownership:"ter"},Cluster_104_Sector002:{coordinate:[1,0,-1],name:"The Moon | 月球",ownership:"ter"}},ownership:"ter"},My={coordinate:[-18e7,0,3464e4],sectors:{Cluster_106_Sector001:{coordinate:[0,0,0],name:"Mercury｜水星",ownership:"ter"}},ownership:"ter"},Sy={coordinate:[-165e6,0,-2598e4],sectors:{Cluster_107_Sector001:{coordinate:[0,0,0],name:"Jupiter｜木星",ownership:"ter"}},ownership:"ter"},by={coordinate:[-18e7,0,-3464e4],sectors:{Cluster_108_Sector001:{coordinate:[0,0,0],name:"Saturn｜土星 1",ownership:"ter"},Cluster_108_Sector002:{coordinate:[-1,0,-1],name:"Titan｜土卫六泰坦",ownership:"ter"},Cluster_108_Sector003:{coordinate:[-1,0,1],name:"Saturn｜土星 2",ownership:"ter"}},ownership:"ter"},Ey={coordinate:[-195e6,0,-433e5],sectors:{Cluster_109_Sector001:{coordinate:[0,0,0],name:"Uranus｜天王星",ownership:"ter"}},ownership:"ter"},Ay={coordinate:[-18e7,0,-5197e4],sectors:{Cluster_110_Sector001:{coordinate:[0,0,0],name:"Neptune｜海王星",ownership:"ter"}},ownership:"ter"},Cy={coordinate:[-195e6,0,-6062e4],sectors:{Cluster_111_Sector001:{coordinate:[0,0,0],name:"Pluto｜冥王星",ownership:"ter"}},ownership:"ter"},Ty={coordinate:[-75e6,0,433e5],sectors:{Cluster_112_Sector001:{coordinate:[0,0,0],name:"Savage Spur | 野蛮疾驰 I",ownership:"xen"},Cluster_112_Sector002:{coordinate:[-1,0,-1],name:"Savage Spur | 野蛮疾驰 II",ownership:"xen"}},ownership:"xen"},Py={coordinate:[-105e6,0,-6062e4],sectors:{Cluster_113_Sector001:{coordinate:[0,0,0],name:"Segaris | 赛格瑞斯",ownership:"pio"}},ownership:"pio"},Ly={coordinate:[-12e7,0,-6928e4],sectors:{Cluster_114_Sector001:{coordinate:[0,0,0],name:"Gaian Prophecy｜盖安预言",ownership:"pio"}},ownership:"pio"},Ry={coordinate:[-135e6,0,-6062e4],sectors:{Cluster_115_Sector001:{coordinate:[0,0,0],name:"Brennan's Triumph｜布伦南的凯旋",ownership:"pio"}},ownership:"pio"},Iy={coordinate:[-21e7,0,-6928e4],sectors:{Cluster_116_Sector001:{coordinate:[0,0,0],name:"Oort Cloud | 奥尔特云",ownership:"ter"}},ownership:"ter"},Dy={coordinate:[0,0,1732e4],sectors:{Cluster_500_Sector001:{coordinate:[1,0,1],name:"Avarice｜贪婪 I",ownership:"rip"},Cluster_500_Sector002:{coordinate:[1,0,-1],name:"Avarice｜贪婪 V Dead End | 死胡同",ownership:"rip"},Cluster_500_Sector003:{coordinate:[-1,0,0],name:"Avarice｜贪婪 IV",ownership:"rip"}},ownership:"rip"},Oy={coordinate:[0,0,3465e4],sectors:{Cluster_501_Sector001:{coordinate:[0,0,0],name:"Windfall | 横财 I Union Summit | 联盟峰会",ownership:"vig"}},ownership:"vig"},Ny={coordinate:[-15e6,0,2598e4],sectors:{Cluster_502_Sector001:{coordinate:[0,0,0],name:"Windfall | 横财 III The Hoard | 囤积居奇",ownership:"vig"}},ownership:"vig"},Uy={coordinate:[-15e6,0,866e4],sectors:{Cluster_503_Sector001:{coordinate:[0,0,0],name:"Windfall | 横财 IV Aurora's Dream | 欧若拉幻梦",ownership:"vig"}},ownership:"vig"},Fy={coordinate:[15e6,0,866e4],sectors:{Cluster_504_Sector001:{coordinate:[0,0,0],name:"未知星系",ownership:"unclaimed"}},ownership:"unclaimed"},bu={Cluster_01:Hx,Cluster_02:Vx,Cluster_03:Gx,Cluster_04:Wx,Cluster_05:qx,Cluster_06:Xx,Cluster_07:$x,Cluster_08:jx,Cluster_09:Yx,Cluster_10:Zx,Cluster_11:Kx,Cluster_12:Jx,Cluster_13:Qx,Cluster_14:ev,Cluster_15:tv,Cluster_16:nv,Cluster_17:iv,Cluster_18:rv,Cluster_19:sv,Cluster_20:ov,Cluster_21:av,Cluster_22:lv,Cluster_23:cv,Cluster_24:uv,Cluster_25:hv,Cluster_26:dv,Cluster_27:fv,Cluster_28:pv,Cluster_29:mv,Cluster_30:gv,Cluster_31:_v,Cluster_32:xv,Cluster_33:vv,Cluster_34:yv,Cluster_35:wv,Cluster_36:Mv,Cluster_37:Sv,Cluster_38:bv,Cluster_39:Ev,Cluster_40:Av,Cluster_41:Cv,Cluster_42:Tv,Cluster_43:Pv,Cluster_44:Lv,Cluster_45:Rv,Cluster_46:Iv,Cluster_47:Dv,Cluster_49:Ov,Cluster_48:Nv,Cluster_50:Uv,Cluster_602:Fv,Cluster_603:zv,Cluster_605:kv,Cluster_606:Bv,Cluster_604:Hv,Cluster_607:Vv,Cluster_601:Gv,Cluster_608:Wv,Cluster_609:qv,Cluster_401:Xv,Cluster_402:$v,Cluster_403:jv,Cluster_400:Yv,Cluster_408:Zv,Cluster_407:Kv,Cluster_409:Jv,Cluster_410:Qv,Cluster_411:ey,Cluster_405:ty,Cluster_406:ny,Cluster_404:iy,Cluster_418:ry,Cluster_419:sy,Cluster_420:oy,Cluster_416:ay,Cluster_417:ly,Cluster_421:cy,Cluster_422:uy,Cluster_423:hy,Cluster_412:dy,Cluster_413:fy,Cluster_414:py,Cluster_415:my,Cluster_424:gy,Cluster_425:_y,Cluster_100:xy,Cluster_101:vy,Cluster_102:yy,Cluster_104:wy,Cluster_106:My,Cluster_107:Sy,Cluster_108:by,Cluster_109:Ey,Cluster_110:Ay,Cluster_111:Cy,Cluster_112:Ty,Cluster_113:Py,Cluster_114:Ly,Cluster_115:Ry,Cluster_116:Iy,Cluster_500:Dy,Cluster_501:Oy,Cluster_502:Ny,Cluster_503:Uy,Cluster_504:Fy};class zy{coordinate;name;ownership;constructor(e,t,n){this.coordinate=e,this.name=t,this.ownership=n}}class ky{coordinate;sectors;ownership;constructor(e,t,n){this.coordinate=e,this.sectors=t,this.ownership=n}}let Gs;function By(){if(Gs)return Gs;console.log("Parsing map data");const i=new Map;for(const e in bu){const t=bu[e],n=new Map,r=t.coordinate,s=t.ownership,o=t.sectors;for(const a in o){const l=o[a],c=l.coordinate,u=l.name,d=l.ownership;n.set(a,new zy(new P(c[0],c[1],c[2]),u,d))}i.set(e,new ky(new P(r[0],r[1],r[2]),n,s))}return Gs=i,Gs}const el=Math.cos(Math.PI/6),Hy=1/el,Zh=1e-4,Vy=100,Gy=100,Wy=50,qy=50;class Xr{rawClusterRadius;clusterRadius;sectorRadius1;sectorRadius2;sectorRadius3;constructor(e){const t="Cluster_14",n="Cluster_14_Sector001",r="Cluster_07",s="Cluster_07_Sector001",o=e.get(t),a=e.get(r);if(!o||!a)throw new Error(`The constructor of '${Xr.name}' requires parameter 'galaxyMap' contains key '${t}' and key '${r}'`);const l=o.sectors.get(n),c=a.sectors.get(s);if(!l||!c)throw new Error(`The constructor of '${Xr.name}' requires cluster '${t}' has sector '${l}, and cluster '${r} has sector '${s}'`);if(l.name.toLowerCase().indexOf("argon prime")===-1||c.name.toLowerCase().indexOf("the reach")===-1)throw new Error(`The constructor of '${Xr.name}' requires '${o}' is 'argon prime' and '${a}' is 'the reach'`);const u=o.coordinate,d=a.coordinate,p=u.distanceTo(d)/2*Hy;this.rawClusterRadius=p,this.clusterRadius=p*Zh,this.sectorRadius1=this.clusterRadius,this.sectorRadius2=this.sectorRadius3=this.clusterRadius/2}}function Kh(i,e){e(i);for(const t of i.children)Kh(t,e)}function Xy(i,e){let t=i.parent;for(;t&&t!==e;)t=t.parent;return t===e}function $y(i,e){for(const t of i.children)Kh(t,e)}function Ta(i,e){const t=[];return $y(i,n=>{e(n)&&t.push(n)}),t}const Oe=dn,ke={unclaimed:{hexagonEdge:new Te().setHSL(137/255,13/255,136/255),hexagonPlane:new Te().setHSL(137/255,13/255,136/255/10)},xen:{hexagonEdge:new Te().setHSL(220/255,111/255,127/255),hexagonPlane:new Te().setHSL(220/255,111/255,127/255/10)},arg:{hexagonEdge:new Te().setHSL(131/255,240/255,85/255),hexagonPlane:new Te().setHSL(131/255,240/255,85/255/10)},ant:{hexagonEdge:new Te().setHSL(131/255,124/255,138/255),hexagonPlane:new Te().setHSL(131/255,124/255,138/255/10)},hat:{hexagonEdge:new Te().setHSL(124/255,240/255,68/255),hexagonPlane:new Te().setHSL(124/255,240/255,68/255/10)},par:{hexagonEdge:new Te().setHSL(194/255,44/255,113/255),hexagonPlane:new Te().setHSL(194/255,44/255,113/255/10)},hop:{hexagonEdge:new Te().setHSL(228/255,97/255,142/255),hexagonPlane:new Te().setHSL(228/255,97/255,142/255/10)},tel:{hexagonEdge:new Te().setHSL(44/255,173/255,90/255),hexagonPlane:new Te().setHSL(44/255,173/255,90/255/10)},zya:{hexagonEdge:new Te().setHSL(13/255,185/255,106/255),hexagonPlane:new Te().setHSL(13/255,185/255,106/255/10)},frf:{hexagonEdge:new Te().setHSL(25/255,198/255,106/255),hexagonPlane:new Te().setHSL(25/255,198/255,106/255/10)},ter:{hexagonEdge:new Te().setHSL(147/255,55/255,158/255),hexagonPlane:new Te().setHSL(147/255,55/255,158/255/10)},pio:{hexagonEdge:new Te().setHSL(113/255,71/255,106/255),hexagonPlane:new Te().setHSL(113/255,71/255,106/255/10)},vig:{hexagonEdge:new Te().setHSL(170/255,72/255,160/255),hexagonPlane:new Te().setHSL(170/255,72/255,160/255/10)},rip:{hexagonEdge:new Te().setHSL(136/255,75/255,64/255),hexagonPlane:new Te().setHSL(136/255,75/255,64/255/10)},bor:{hexagonEdge:new Te().setHSL(125/255,240/255,93/255),hexagonPlane:new Te().setHSL(125/255,240/255,93/255/10)}},jy=new Re({color:16777215,side:Oe}),Yy={unclaimed:new Re({color:ke.unclaimed.hexagonEdge,side:Oe}),xen:new Re({color:ke.xen.hexagonEdge,side:Oe}),arg:new Re({color:ke.arg.hexagonEdge,side:Oe}),ant:new Re({color:ke.ant.hexagonEdge,side:Oe}),hat:new Re({color:ke.hat.hexagonEdge,side:Oe}),par:new Re({color:ke.par.hexagonEdge,side:Oe}),hop:new Re({color:ke.hop.hexagonEdge,side:Oe}),tel:new Re({color:ke.tel.hexagonEdge,side:Oe}),zya:new Re({color:ke.zya.hexagonEdge,side:Oe}),frf:new Re({color:ke.frf.hexagonEdge,side:Oe}),ter:new Re({color:ke.ter.hexagonEdge,side:Oe}),pio:new Re({color:ke.pio.hexagonEdge,side:Oe}),vig:new Re({color:ke.vig.hexagonEdge,side:Oe}),rip:new Re({color:ke.rip.hexagonEdge,side:Oe}),bor:new Re({color:ke.bor.hexagonEdge,side:Oe}),undefined:new Re({color:new Te(1,1,1),side:Oe}),mix:new Re({color:new Te(1,1,1),side:Oe})},Pa={unclaimed:new Re({color:ke.unclaimed.hexagonEdge,side:Oe}),xen:new Re({color:ke.xen.hexagonEdge,side:Oe}),arg:new Re({color:ke.arg.hexagonEdge,side:Oe}),ant:new Re({color:ke.ant.hexagonEdge,side:Oe}),hat:new Re({color:ke.hat.hexagonEdge,side:Oe}),par:new Re({color:ke.par.hexagonEdge,side:Oe}),hop:new Re({color:ke.hop.hexagonEdge,side:Oe}),tel:new Re({color:ke.tel.hexagonEdge,side:Oe}),zya:new Re({color:ke.zya.hexagonEdge,side:Oe}),frf:new Re({color:ke.frf.hexagonEdge,side:Oe}),ter:new Re({color:ke.ter.hexagonEdge,side:Oe}),pio:new Re({color:ke.pio.hexagonEdge,side:Oe}),vig:new Re({color:ke.vig.hexagonEdge,side:Oe}),rip:new Re({color:ke.rip.hexagonEdge,side:Oe}),bor:new Re({color:ke.bor.hexagonEdge,side:Oe}),undefined:new Re({color:new Te(1,1,1),side:Oe}),mix:new Re({color:new Te(1,1,1),side:Oe})},La={unclaimed:new Re({color:ke.unclaimed.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),xen:new Re({color:ke.xen.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),arg:new Re({color:ke.arg.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),ant:new Re({color:ke.ant.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),hat:new Re({color:ke.hat.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),par:new Re({color:ke.par.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),hop:new Re({color:ke.hop.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),tel:new Re({color:ke.tel.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),zya:new Re({color:ke.zya.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),frf:new Re({color:ke.frf.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),ter:new Re({color:ke.ter.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),pio:new Re({color:ke.pio.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),vig:new Re({color:ke.vig.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),rip:new Re({color:ke.rip.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),bor:new Re({color:ke.bor.hexagonPlane,transparent:!0,opacity:.25,side:Oe}),undefined:new Re({color:new Te(1,1,1),transparent:!0,opacity:.25,side:Oe}),mix:new Re({color:new Te(1,1,1),transparent:!0,opacity:.25,side:Oe})},Zy=new Re({color:65280,side:Oe,transparent:!0,opacity:.5});class Ky{name;habitatModules;productionModules;storageModules;currentWorkforce;bannedWaresIdArray;constructor(e){this.name=e,this.habitatModules=[],this.productionModules=[],this.storageModules=[],this.currentWorkforce=0,this.bannedWaresIdArray=[]}}var et=(i=>(i[i.Cluster=0]="Cluster",i[i.ClusterHexagonEdge=1]="ClusterHexagonEdge",i[i.Sector=2]="Sector",i[i.SectorHexagonEdge=3]="SectorHexagonEdge",i[i.SectorHexagonPlane=4]="SectorHexagonPlane",i[i.SectorName=5]="SectorName",i[i.Factory=6]="Factory",i))(et||{});const Eu={type:"change"},Ra={type:"start"},Au={type:"end"};class Jy extends Oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=3,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",le),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Eu),n.update(),s=r.NONE},this.update=function(){const R=new P,J=new Pt().setFromUnitVectors(e.up,new P(0,1,0)),q=J.clone().invert(),_e=new P,Ae=new Pt,Pe=2*Math.PI;return function(){const Se=n.object.position;R.copy(Se).sub(n.target),R.applyQuaternion(J),a.setFromVector3(R),n.autoRotate&&s===r.NONE&&w(O()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ie=n.minAzimuthAngle,He=n.maxAzimuthAngle;return isFinite(Ie)&&isFinite(He)&&(Ie<-Math.PI?Ie+=Pe:Ie>Math.PI&&(Ie-=Pe),He<-Math.PI?He+=Pe:He>Math.PI&&(He-=Pe),Ie<=He?a.theta=Math.max(Ie,Math.min(He,a.theta)):a.theta=a.theta>(Ie+He)/2?Math.max(Ie,a.theta):Math.min(He,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(q),Se.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||_e.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o?(n.dispatchEvent(Eu),_e.copy(n.object.position),Ae.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",M),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",le),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Su,l=new Su;let c=1;const u=new P;let d=!1;const f=new ge,p=new ge,g=new ge,x=new ge,m=new ge,h=new ge,y=new ge,_=new ge,v=new ge,S=[],L={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function w(R){l.theta-=R}function b(R){l.phi-=R}const U=function(){const R=new P;return function(q,_e){R.setFromMatrixColumn(_e,0),R.multiplyScalar(-q),u.add(R)}}(),W=function(){const R=new P;return function(q,_e){n.screenSpacePanning===!0?R.setFromMatrixColumn(_e,1):(R.setFromMatrixColumn(_e,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(q),u.add(R)}}(),F=function(){const R=new P;return function(q,_e){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;R.copy(Pe).sub(n.target);let be=R.length();be*=Math.tan(n.object.fov/2*Math.PI/180),U(2*q*be/Ae.clientHeight,n.object.matrix),W(2*_e*be/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(q*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),W(_e*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();this.pan=F;function N(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(R){f.set(R.clientX,R.clientY)}function ee(R){y.set(R.clientX,R.clientY)}function j(R){x.set(R.clientX,R.clientY)}function re(R){p.set(R.clientX,R.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const J=n.domElement;w(2*Math.PI*g.x/J.clientHeight),b(2*Math.PI*g.y/J.clientHeight),f.copy(p),n.update()}function de(R){_.set(R.clientX,R.clientY),v.subVectors(_,y),v.y>0?N(I()):v.y<0&&G(I()),y.copy(_),n.update()}function Me(R){m.set(R.clientX,R.clientY),h.subVectors(m,x).multiplyScalar(n.panSpeed),F(h.x,h.y),x.copy(m),n.update()}function me(R){R.deltaY<0?G(I()):R.deltaY>0&&N(I()),n.update()}function te(R){let J=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),J=!0;break}J&&(R.preventDefault(),n.update())}function ue(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);f.set(R,J)}}function ve(){if(S.length===1)x.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);x.set(R,J)}}function xe(){const R=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,q=Math.sqrt(R*R+J*J);y.set(0,q)}function $(){n.enableZoom&&xe(),n.enablePan&&ve()}function Ne(){n.enableZoom&&xe(),n.enableRotate&&ue()}function Le(R){if(S.length==1)p.set(R.pageX,R.pageY);else{const q=he(R),_e=.5*(R.pageX+q.x),Ae=.5*(R.pageY+q.y);p.set(_e,Ae)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const J=n.domElement;w(2*Math.PI*g.x/J.clientHeight),b(2*Math.PI*g.y/J.clientHeight),f.copy(p)}function pe(R){if(S.length===1)m.set(R.pageX,R.pageY);else{const J=he(R),q=.5*(R.pageX+J.x),_e=.5*(R.pageY+J.y);m.set(q,_e)}h.subVectors(m,x).multiplyScalar(n.panSpeed),F(h.x,h.y),x.copy(m)}function Ce(R){const J=he(R),q=R.pageX-J.x,_e=R.pageY-J.y,Ae=Math.sqrt(q*q+_e*_e);_.set(0,Ae),v.set(0,Math.pow(_.y/y.y,n.zoomSpeed)),N(v.y),y.copy(_)}function E(R){n.enableZoom&&Ce(R),n.enablePan&&pe(R)}function C(R){n.enableZoom&&Ce(R),n.enableRotate&&Le(R)}function D(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",B)),z(R),R.pointerType==="touch"?ne(R):K(R))}function H(R){n.enabled!==!1&&(R.pointerType==="touch"?A(R):se(R))}function B(R){Y(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(Au),s=r.NONE}function K(R){let J;switch(R.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Bn.DOLLY:if(n.enableZoom===!1)return;ee(R),s=r.DOLLY;break;case Bn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;j(R),s=r.PAN}else{if(n.enableRotate===!1)return;ie(R),s=r.ROTATE}break;case Bn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ie(R),s=r.ROTATE}else{if(n.enablePan===!1)return;j(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ra)}function se(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;re(R);break;case r.DOLLY:if(n.enableZoom===!1)return;de(R);break;case r.PAN:if(n.enablePan===!1)return;Me(R);break}}function Z(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(Ra),me(R),n.dispatchEvent(Au))}function le(R){n.enabled===!1||n.enablePan===!1||te(R)}function ne(R){switch(Q(R),S.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;ve(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(),s=r.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ra)}function A(R){switch(Q(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Le(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;C(R),n.update();break;default:s=r.NONE}}function M(R){n.enabled!==!1&&R.preventDefault()}function z(R){S.push(R)}function Y(R){delete L[R.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==R.pointerId){S.splice(J,1);return}}function Q(R){let J=L[R.pointerId];J===void 0&&(J=new ge,L[R.pointerId]=J),J.set(R.pageX,R.pageY)}function he(R){const J=R.pointerId===S[0].pointerId?S[1]:S[0];return L[J.pointerId]}n.domElement.addEventListener("contextmenu",M),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",Z,{passive:!1}),this.update()}}class Qy extends Jy{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Bn.PAN,MIDDLE:Bn.DOLLY,RIGHT:Bn.ROTATE},this.touches={ONE:Kn.PAN,TWO:Kn.DOLLY_ROTATE}}}class ew extends bl{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class tw extends jh{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new zx(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new nw(e)}}class nw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=iw(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function iw(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const d=rw(u,r,a,l,t);a+=d.offsetX,o.push(d.path)}}return o}function rw(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new Bx;let a,l,c,u,d,f,p,g;if(s.o){const x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,h=x.length;m<h;)switch(x[m++]){case"m":a=x[m++]*e+t,l=x[m++]*e+n,o.moveTo(a,l);break;case"l":a=x[m++]*e+t,l=x[m++]*e+n,o.lineTo(a,l);break;case"q":c=x[m++]*e+t,u=x[m++]*e+n,d=x[m++]*e+t,f=x[m++]*e+n,o.quadraticCurveTo(d,f,c,u);break;case"b":c=x[m++]*e+t,u=x[m++]*e+n,d=x[m++]*e+t,f=x[m++]*e+n,p=x[m++]*e+t,g=x[m++]*e+n,o.bezierCurveTo(d,f,p,g,c,u);break}}return{offsetX:s.ha*e,path:o}}const di=new Yh,Xt=new P,Yn=new P,lt=new Pt,Cu={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},Ia={type:"change"},Tu={type:"mouseDown"},Pu={type:"mouseUp",mode:null},Lu={type:"objectChange"};class sw extends yt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new hw;this._gizmo=n,this.add(n);const r=new dw;this._plane=r,this.add(r);const s=this;function o(y,_){let v=_;Object.defineProperty(s,y,{get:function(){return v!==void 0?v:_},set:function(S){v!==S&&(v=S,r[y]=S,n[y]=S,s.dispatchEvent({type:y+"-changed",value:S}),s.dispatchEvent(Ia))}}),s[y]=_,r[y]=_,n[y]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new P,l=new P,c=new Pt,u=new Pt,d=new P,f=new Pt,p=new P,g=new P,x=new P,m=0,h=new P;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",d),o("cameraQuaternion",f),o("pointStart",p),o("pointEnd",g),o("rotationAxis",x),o("rotationAngle",m),o("eye",h),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new Pt,this._parentQuaternionInv=new Pt,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new Pt,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new Pt,this._scaleStart=new P,this._getPointer=ow.bind(this),this._onPointerDown=lw.bind(this),this._onPointerHover=aw.bind(this),this._onPointerMove=cw.bind(this),this._onPointerUp=uw.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;di.setFromCamera(e,this.camera);const t=Da(this._gizmo.picker[this.mode],di);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){di.setFromCamera(e,this.camera);const t=Da(this._plane,di,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Tu.mode=this.mode,this.dispatchEvent(Tu)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;di.setFromCamera(e,this.camera);const o=Da(this._plane,di,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(lt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Xt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Xt.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Yn.set(a,a,a)}else Xt.copy(this.pointStart),Yn.copy(this.pointEnd),Xt.applyQuaternion(this._worldQuaternionInv),Yn.applyQuaternion(this._worldQuaternionInv),Yn.divide(Xt),t.search("X")===-1&&(Yn.x=1),t.search("Y")===-1&&(Yn.y=1),t.search("Z")===-1&&(Yn.z=1);r.scale.copy(this._scaleStart).multiply(Yn),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Xt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Xt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Cu[t]),Xt.copy(Cu[t]),s==="local"&&Xt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Xt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(lt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(lt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ia),this.dispatchEvent(Lu)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Pu.mode=this.mode,this.dispatchEvent(Pu)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ia),this.dispatchEvent(Lu),this.pointStart.copy(this.pointEnd))}getRaycaster(){return di}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function ow(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function aw(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function lw(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function cw(i){this.enabled&&this.pointerMove(this._getPointer(i))}function uw(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Da(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const Ws=new ds,nt=new P(0,1,0),Ru=new P(0,0,0),Iu=new _t,qs=new Pt,so=new Pt,Mn=new P,Du=new _t,kr=new P(1,0,0),_i=new P(0,1,0),Br=new P(0,0,1),Xs=new P,Or=new P,Nr=new P;class hw extends yt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Re({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new vl({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const d=e.clone();d.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const x=new Nt(0,.04,.1,12);x.translate(0,.05,0);const m=new pt(.08,.08,.08);m.translate(0,.04,0);const h=new Ct;h.setAttribute("position",new Je([0,0,0,1,0,0],3));const y=new Nt(.0075,.0075,.5,3);y.translate(0,.25,0);function _(G,ie){const ee=new vi(G,.0075,3,64,ie*Math.PI*2);return ee.rotateY(Math.PI/2),ee.rotateX(Math.PI/2),ee}function v(){const G=new Ct;return G.setAttribute("position",new Je([0,0,0,1,1,1],3)),G}const S={X:[[new we(x,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(x,s),[-.5,0,0],[0,0,Math.PI/2]],[new we(y,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new we(x,o),[0,.5,0]],[new we(x,o),[0,-.5,0],[Math.PI,0,0]],[new we(y,o)]],Z:[[new we(x,a),[0,0,.5],[Math.PI/2,0,0]],[new we(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new we(y,a),null,[Math.PI/2,0,0]]],XYZ:[[new we(new nr(.1,0),d.clone()),[0,0,0]]],XY:[[new we(new pt(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new we(new pt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new pt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},L={X:[[new we(new Nt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new we(new Nt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new Nt(.2,0,.6,4),n),[0,.3,0]],[new we(new Nt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new Nt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new we(new Nt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new we(new nr(.2,0),n)]],XY:[[new we(new pt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new we(new pt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new pt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},O={START:[[new we(new nr(.01,2),r),null,null,null,"helper"]],END:[[new we(new nr(.01,2),r),null,null,null,"helper"]],DELTA:[[new zn(v(),r),null,null,null,"helper"]],X:[[new zn(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new zn(h,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new zn(h,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new we(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new we(_(.5,.5),s)]],Y:[[new we(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new we(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new we(_(.75,1),f),null,[0,Math.PI/2,0]]]},w={AXIS:[[new zn(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new we(new El(.25,10,8),n)]],X:[[new we(new vi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new we(new vi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new we(new vi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new we(new vi(.75,.1,2,24),n)]]},U={X:[[new we(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(y,s),[0,0,0],[0,0,-Math.PI/2]],[new we(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new we(m,o),[0,.5,0]],[new we(y,o)],[new we(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new we(m,a),[0,0,.5],[Math.PI/2,0,0]],[new we(y,a),[0,0,0],[Math.PI/2,0,0]],[new we(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new we(new pt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new we(new pt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new pt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new pt(.1,.1,.1),d.clone())]]},W={X:[[new we(new Nt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new we(new Nt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new Nt(.2,0,.6,4),n),[0,.3,0]],[new we(new Nt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new Nt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new we(new Nt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new we(new pt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new we(new pt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new pt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new pt(.2,.2,.2),n),[0,0,0]]]},F={X:[[new zn(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new zn(h,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new zn(h,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function N(G){const ie=new yt;for(const ee in G)for(let j=G[ee].length;j--;){const re=G[ee][j][0].clone(),de=G[ee][j][1],Me=G[ee][j][2],me=G[ee][j][3],te=G[ee][j][4];re.name=ee,re.tag=te,de&&re.position.set(de[0],de[1],de[2]),Me&&re.rotation.set(Me[0],Me[1],Me[2]),me&&re.scale.set(me[0],me[1],me[2]),re.updateMatrix();const ue=re.geometry.clone();ue.applyMatrix4(re.matrix),re.geometry=ue,re.renderOrder=1/0,re.position.set(0,0,0),re.rotation.set(0,0,0),re.scale.set(1,1,1),ie.add(re)}return ie}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=N(S)),this.add(this.gizmo.rotate=N(I)),this.add(this.gizmo.scale=N(U)),this.add(this.picker.translate=N(L)),this.add(this.picker.rotate=N(b)),this.add(this.picker.scale=N(W)),this.add(this.helper.translate=N(O)),this.add(this.helper.rotate=N(w)),this.add(this.helper.scale=N(F)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:so;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(lt.setFromEuler(Ws.set(0,0,0)),o.quaternion.copy(n).multiply(lt),Math.abs(nt.copy(kr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(lt.setFromEuler(Ws.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(lt),Math.abs(nt.copy(_i).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(lt.setFromEuler(Ws.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(lt),Math.abs(nt.copy(Br).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(lt.setFromEuler(Ws.set(0,Math.PI/2,0)),nt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Iu.lookAt(Ru,nt,_i)),o.quaternion.multiply(lt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Xt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Xt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Xt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(nt.copy(kr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(nt.copy(_i).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(nt.copy(Br).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(nt.copy(Br).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(nt.copy(kr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(nt.copy(_i).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(qs.copy(n),nt.copy(this.eye).applyQuaternion(lt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Iu.lookAt(this.eye,Ru,_i)),o.name==="X"&&(lt.setFromAxisAngle(kr,Math.atan2(-nt.y,nt.z)),lt.multiplyQuaternions(qs,lt),o.quaternion.copy(lt)),o.name==="Y"&&(lt.setFromAxisAngle(_i,Math.atan2(nt.x,nt.z)),lt.multiplyQuaternions(qs,lt),o.quaternion.copy(lt)),o.name==="Z"&&(lt.setFromAxisAngle(Br,Math.atan2(nt.y,nt.x)),lt.multiplyQuaternions(qs,lt),o.quaternion.copy(lt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class dw extends we{constructor(){super(new Eo(1e5,1e5,2,2),new Re({visible:!1,wireframe:!0,side:dn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Xs.copy(kr).applyQuaternion(t==="local"?this.worldQuaternion:so),Or.copy(_i).applyQuaternion(t==="local"?this.worldQuaternion:so),Nr.copy(Br).applyQuaternion(t==="local"?this.worldQuaternion:so),nt.copy(Or),this.mode){case"translate":case"scale":switch(this.axis){case"X":nt.copy(this.eye).cross(Xs),Mn.copy(Xs).cross(nt);break;case"Y":nt.copy(this.eye).cross(Or),Mn.copy(Or).cross(nt);break;case"Z":nt.copy(this.eye).cross(Nr),Mn.copy(Nr).cross(nt);break;case"XY":Mn.copy(Nr);break;case"YZ":Mn.copy(Xs);break;case"XZ":nt.copy(Nr),Mn.copy(Or);break;case"XYZ":case"E":Mn.set(0,0,0);break}break;case"rotate":default:Mn.set(0,0,0)}Mn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Du.lookAt(Xt.set(0,0,0),Mn,nt),this.quaternion.setFromRotationMatrix(Du)),super.updateMatrixWorld(e)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class Pn{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Pn.nextNameID=Pn.nextNameID||0,this.$name.id=`lil-gui-name-${++Pn.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class fw extends Pn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function tl(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const pw={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:tl,toHexString:tl},ts={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},mw={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=ts.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return ts.toHexString(r)}},gw={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=ts.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return ts.toHexString(r)}},_w=[pw,ts,mw,gw];function xw(i){return _w.find(e=>e.match(i))}class vw extends Pn{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=xw(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=tl(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Oa extends Pn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class yw extends Pn{constructor(e,t,n,r,s,o){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))},t=h=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+h),this.$input.value=this.getValue())},n=h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h)*-1))},r=h=>{this._inputFocused&&(h.preventDefault(),t(this._step*this._normalizeMouseWheel(h)))};let s=!1,o,a,l,c,u;const d=5,f=h=>{o=h.clientX,a=l=h.clientY,s=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=h=>{if(s){const y=h.clientX-o,_=h.clientY-a;Math.abs(_)>d?(h.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&g()}if(!s){const y=h.clientY-l;u-=y*this._step*this._arrowKeyMultiplier(h),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=h.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},x=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(h,y,_,v,S)=>(h-y)/(_-y)*(S-v)+v,t=h=>{const y=this.$slider.getBoundingClientRect();let _=e(h,y.left,y.right,this._min,this._max);this._snapClampSetValue(_)},n=h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=h=>{t(h.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),o=!1},u=h=>{h.touches.length>1||(this._hasScrollBar?(a=h.touches[0].clientX,l=h.touches[0].clientY,o=!0):c(h),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=h=>{if(o){const y=h.touches[0].clientX-a,_=h.touches[0].clientY-l;Math.abs(y)>Math.abs(_)?c(h):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else h.preventDefault(),t(h.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),g=400;let x;const m=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const _=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ww extends Pn{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Mw extends Pn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Sw=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function bw(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Ou=!1;class Al{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),l&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Ou&&a&&(bw(Sw),Ou=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,r,s){if(Object(n)===n)return new ww(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new yw(this,e,t,n,r,s);case"boolean":return new fw(this,e,t);case"string":return new Mw(this,e,t);case"function":return new Oa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new vw(this,e,t,n)}addFolder(e){const t=new Al({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Oa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Oa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ew=Al,Aw=75,Nu=100,Uu=1e5,Na=new P(0,-2e4,-100),Fu=2e3,Cw=-20,Tw=-10,zu=-30;class Pw{renderer;scene;camera;mapControls;raycaster;pointer;pointerRaw;font;constructor(){const e=new Bh({antialias:!0,logarithmicDepthBuffer:!0});e.setSize(window.innerWidth,window.innerHeight),this.renderer=e;const t=new tx;this.scene=t;const n=new sn(Aw,window.innerWidth/window.innerHeight,Nu,Uu);n.position.set(Na.x,Na.y,Na.z),n.up=new P(0,-1,0),n.lookAt(0,0,0),this.camera=n;const r=new Qy(n,e.domElement);r.screenSpacePanning=!1,r.minDistance=Nu,r.maxDistance=Uu,r.maxPolarAngle=Math.PI/2,this.mapControls=r,this.raycaster=new Yh,this.pointer=new ge,this.pointerRaw=new ge,this.font=void 0}async loadFont(){if(this.font)return;const e=new tw;this.font=await e.loadAsync("/assets/Alibaba PuHuiTi_Regular.json")}}class rr{galaxyMap;threeContext;mapMetaData;boundRenderLoop;currentIntersectSector;currentIntersectSectorPosition;lastIntersectSector;eventQueue;inputStatus;_operationMode;set operationMode(e){this._operationMode=e,this.updateStatusText(),this.disableWASDMove=e===2}get operationMode(){return this._operationMode}guiObj;gui;statusEl;currentIntersectFactory;factoryNameEl;transformControls;isMouseOnTransformControls;selectedFactory;cameraMove;lastTimestamp;disableWASDMove;constructor(e){this.galaxyMap=e,this.threeContext=new Pw,this.mapMetaData=new Xr(e),this.boundRenderLoop=this.renderLoop.bind(this),this.currentIntersectSector=void 0,this.currentIntersectSectorPosition=void 0,this.lastIntersectSector=void 0,this.eventQueue=new Array,window.addEventListener("mousemove",r=>this.eventQueue.push(r)),this.threeContext.renderer.domElement.addEventListener("mousedown",r=>this.eventQueue.push(r)),this.threeContext.renderer.domElement.addEventListener("mouseup",r=>this.eventQueue.push(r)),window.addEventListener("keydown",r=>this.eventQueue.push(r)),window.addEventListener("keyup",r=>this.eventQueue.push(r)),this.inputStatus={type:0},this._operationMode=0,this.guiObj={enterViewMode:()=>{this.unselectFactory(0)},enterPutFactoryMode:()=>{this.unselectFactory(1)},editFactory:()=>{if(!this.selectedFactory){alert("请先选中一个工厂");return}const r=this.selectedFactory.userData;if(r.type!==et.Factory)throw console.error(this.selectedFactory),new Error("Function 'editFactory' requires selected factory is a factory");window.postMessage({type:"START_EDIT_FACTORY",factory:r.factory}),this.hide()},export:()=>{const r=[];Ta(this.threeContext.scene,o=>o.userData.type===et.Sector).forEach(o=>{const a=o.userData;if(a.type!==et.Sector)throw console.error(o),new Error("Function 'export' requires a sector is a sector");const l=a.id;for(const c of o.children){const u=c.userData;if(u.type!==et.Factory)continue;const d=c.position,f=u.factory;r.push({sectorId:l,position:d,factoryData:f})}});const s=JSON.stringify(r,void 0,2);window.postMessage({type:"START_EXPORT",exportedString:s}),this.hide()},import:()=>{window.postMessage({type:"START_IMPORT"}),this.hide()},clusterAnalyze:()=>{const r=Ta(this.threeContext.scene,o=>o.userData.type===et.Factory),s=[];for(const o of r){const a=o.userData;if(a.type!==et.Factory)throw new Error("Function 'clusterAnalyze' requires a factory is a factory");s.push(a.factory)}window.postMessage({type:"START_CLUSTER_ANALYZE",factoryDataArray:s}),this.hide()}},window.addEventListener("message",r=>{if(r.data.type==="FINISH_EDIT_FACTORY"){if(this.show(),!this.selectedFactory)throw new Error("Message handler of 'FINISH_EDIT_FACTORY' message requires a selected factory");const s=this.selectedFactory.userData;if(s.type!==et.Factory)throw console.error(this.selectedFactory),new Error("Message handler of 'FINISH_EDIT_FACTORY' message requires the selected factory is a factory");s.factory=r.data.factory}else if(r.data.type==="FINISH_EXPORT")this.show();else if(r.data.type==="FINISH_IMPORT"){const s=r.data.importedString;if(!s){this.show();return}const o=JSON.parse(s),a=new Map;for(const l of o)a.has(l.sectorId)?a.get(l.sectorId).push(l):a.set(l.sectorId,[l]);Ta(this.threeContext.scene,l=>l.userData.type===et.Sector).forEach(l=>{const c=l.userData;if(c.type!==et.Sector)throw console.error(l),new Error("Message handler of 'FINISH_IMPORT' message requires a sector is a sector");a.has(c.id)&&a.get(c.id).forEach(u=>{this.putFactory(l,u.position,u.factoryData)})}),this.show()}else r.data.type==="FINISH_CLUSTER_ANALYZE"&&this.show()}),this.gui=new Ew,this.gui.add(this.guiObj,"enterViewMode"),this.gui.add(this.guiObj,"enterPutFactoryMode"),this.gui.add(this.guiObj,"editFactory"),this.gui.add(this.guiObj,"export"),this.gui.add(this.guiObj,"import"),this.gui.add(this.guiObj,"clusterAnalyze");const t=document.createElement("div");t.id="status",t.style.padding="0 4px 0 4px",t.style.margin="4px 0 4px 0",this.gui.$title.after(t),this.statusEl=t,this.updateStatusText(),this.currentIntersectFactory=void 0;const n=document.createElement("div");n.id="factoryName",n.style.display="none",n.style.position="fixed",n.style.zIndex="1",n.style.padding="0.25em 0.5em",n.style.backgroundColor="rgba(0, 0, 0, 0.5)",n.style.color="white",n.innerText="（工厂）",document.body.append(n),this.factoryNameEl=n,this.transformControls=new sw(this.threeContext.camera,this.threeContext.renderer.domElement),this.transformControls.space="local",this.isMouseOnTransformControls=!1,this.selectedFactory=void 0,this.cameraMove={w:!1,a:!1,s:!1,d:!1},this.lastTimestamp=performance.now(),this.disableWASDMove=!1}async loadAssets(){await this.threeContext.loadFont()}getCanvas(){return this.threeContext.renderer.domElement}updateStatusText(){let e;switch(this.operationMode){case 0:e="当前模式：通用模式";break;case 1:e="当前模式：摆放工厂模式";break;case 2:e="当前模式：选择工厂模式";break;default:e="错误：无法识别的模式："+this.operationMode}this.statusEl.innerText=e}renderLoop(e){this.render(e),requestAnimationFrame(this.boundRenderLoop)}render(e){this.threeContext.raycaster.setFromCamera(this.threeContext.pointer,this.threeContext.camera);const t=this.threeContext.raycaster.intersectObjects(this.threeContext.scene.children);this.updateIntersects(t),this.updateSectorName(),this.updateFactoryName(),this.processInput(),this.updateCameraPosition((e-this.lastTimestamp)/1e3),this.threeContext.renderer.render(this.threeContext.scene,this.threeContext.camera),this.lastIntersectSector=this.currentIntersectSector,this.lastTimestamp=e}updateIntersects(e){let t,n,r,s=!1;for(let o=0;o<e.length;o++){const a=e[o].object,l=a.userData;if(l.type===et.SectorHexagonPlane){if(!a.parent)throw console.error(a),new Error("Sector plane should have parent");t=a.parent,n=a.parent.worldToLocal(e[o].point)}else l.type===et.Factory&&(r=a);this.transformControls.visible&&!s&&a instanceof we&&Xy(a,this.transformControls)&&(a.name==="X"||a.name==="Y"||a.name==="Z"||a.name==="XY"||a.name==="YZ"||a.name==="XZ"||a.name==="XYZ")&&(s=!0)}this.currentIntersectSector=t,this.currentIntersectSectorPosition=n,this.currentIntersectFactory=r,this.isMouseOnTransformControls=s}updateSectorName(){if(this.currentIntersectSector){if(this.currentIntersectSector!==this.lastIntersectSector){const e=this.currentIntersectSector.children.find(t=>t.userData.type===et.SectorName);if(!e)throw console.error(this.currentIntersectSector),new Error("Sector should have sector name (current intersect sector)");if(e.visible=!0,this.lastIntersectSector){const t=this.lastIntersectSector.children.find(n=>n.userData.type===et.SectorName);if(!t)throw console.error(this.lastIntersectSector),new Error("Sector should have sector name (last intersect sector)");t.visible=!1}}}else if(this.lastIntersectSector){const e=this.lastIntersectSector.children.find(t=>t.userData.type===et.SectorName);if(!e)throw console.error(this.lastIntersectSector),new Error("Sector should have sector name (last intersect sector)");e.visible=!1}if(this.currentIntersectSector){const e=this.currentIntersectSector.userData;if(e.type!==et.Sector)throw new Error(`Unexpected userData.type: ${e.type} (calculate possible locations)`);let t=[{vector:new P(0,0,e.radius),rotation:0},{vector:new P(0,0,e.radius).applyAxisAngle(new P(0,1,0),Math.PI/3),rotation:Math.PI/3},{vector:new P(0,0,e.radius).applyAxisAngle(new P(0,1,0),Math.PI/3*2),rotation:Math.PI/3*2},{vector:new P(0,0,e.radius).applyAxisAngle(new P(0,1,0),Math.PI),rotation:Math.PI},{vector:new P(0,0,e.radius).applyAxisAngle(new P(0,1,0),-Math.PI/3),rotation:-Math.PI/3},{vector:new P(0,0,e.radius).applyAxisAngle(new P(0,1,0),-Math.PI/3*2),rotation:-Math.PI/3*2}];const n=new P(0,0,-1);n.applyQuaternion(this.threeContext.camera.quaternion);const r=new ge(n.x,n.z).normalize();let s=0,o=Number.NEGATIVE_INFINITY;for(let f=0;f<t.length;++f){const p=t[f],g=new ge(p.vector.x,p.vector.z).normalize(),x=r.x*g.x+r.y*g.y;x>o&&(s=f,o=x)}const a=t[s].vector,l=this.currentIntersectSector.children.find(f=>f.userData.type===et.SectorName);if(!l)throw console.error(this.currentIntersectSector),new Error("Sector should have sector name (last intersect sector)");l.position.set(a.x,a.y,a.z),l.setRotationFromAxisAngle(new P(0,1,0),t[s].rotation);const c=new P;l.getWorldPosition(c);const u=new P;this.threeContext.camera.getWorldPosition(u);const d=c.distanceTo(u)/8e3;l.scale.set(d,d,d),l.position.y=zu}}updateFactoryName(){if(this.currentIntersectFactory){this.factoryNameEl.style.display="inline-block",this.factoryNameEl.style.left=this.threeContext.pointerRaw.x+12+"px",this.factoryNameEl.style.top=this.threeContext.pointerRaw.y+12+"px";const e=this.currentIntersectFactory.userData;if(e.type!==et.Factory)throw console.error(this.currentIntersectFactory),new Error(`${rr.name}.${this.updateFactoryName.name} requires member 'currentIntersectFactory' is a factory`);this.factoryNameEl.innerText=e.factory.name}else this.factoryNameEl.style.display="none"}processInput(){for(;this.eventQueue.length;){const e=this.eventQueue[0];if(this.eventQueue.splice(0,1),e.type==="mousemove")this.threeContext.pointer.x=e.clientX/window.innerWidth*2-1,this.threeContext.pointer.y=-(e.clientY/window.innerHeight)*2+1,this.threeContext.pointerRaw.x=e.clientX,this.threeContext.pointerRaw.y=e.clientY,this.inputStatus.type===1&&(this.inputStatus.type=2);else if(e.type==="mousedown")this.inputStatus.type===0&&(this.inputStatus.type=1),this.operationMode===2&&this.isMouseOnTransformControls&&(this.threeContext.mapControls.enabled=!1);else if(e.type==="mouseup")this.inputStatus.type===2?this.inputStatus.type=0:this.inputStatus.type===1&&(this.inputStatus.type=0,this.operationMode===1?this.currentIntersectSector&&this.currentIntersectSectorPosition&&!this.currentIntersectFactory&&this.putFactory(this.currentIntersectSector,this.currentIntersectSectorPosition):this.operationMode===0?this.currentIntersectFactory&&this.selectFactory(this.currentIntersectFactory):this.operationMode===2&&!this.currentIntersectFactory&&!this.isMouseOnTransformControls&&this.unselectFactory(0)),this.operationMode===2&&(this.threeContext.mapControls.enabled=!0);else if(e.type==="keydown")switch(e.key){case"w":this.cameraMove.w=!0;break;case"a":this.cameraMove.a=!0;break;case"s":this.cameraMove.s=!0;break;case"d":this.cameraMove.d=!0;break}else if(e.type==="keyup"){if(e.key==="Delete"&&this.operationMode===2){if(!this.selectedFactory)throw new Error("Property 'selectedFactory' should have a valid value when 'operationMode' is 'SelectFactory'");this.selectedFactory.removeFromParent(),this.unselectFactory(0)}switch(e.key){case"w":this.cameraMove.w=!1;break;case"a":this.cameraMove.a=!1;break;case"s":this.cameraMove.s=!1;break;case"d":this.cameraMove.d=!1;break}}}}updateCameraPosition(e){if(this.disableWASDMove)return;const t=(this.cameraMove.a?-1:0)+(this.cameraMove.d?1:0),n=(this.cameraMove.s?-1:0)+(this.cameraMove.w?1:0);this.threeContext.mapControls.pan(-t*e*Fu,n*e*Fu),this.threeContext.mapControls.update()}putFactory(e,t,n=void 0){const r=e.userData;if(r.type!==et.Sector)throw console.error(e),new Error(`${rr.name}.${this.putFactory.name} only accepts a Sector as its first parameter`);const s=r.factoryCubeSize,o=new pt(s,s,s),a=new we(o,Zy),l=e.children.filter(f=>f.userData.type===et.Factory).length,u=r.name+" 工厂 "+(l+1),d={type:et.Factory,factory:n||new Ky(u)};a.userData=d,a.position.copy(t),e.add(a)}initializeScene(){this.threeContext.scene.clear();const e=new ir(this.mapMetaData.clusterRadius-Vy,this.mapMetaData.clusterRadius,6,1);e.rotateX(Math.PI/2);const t=new ir(this.mapMetaData.sectorRadius1-Gy,this.mapMetaData.sectorRadius1,6,1);t.rotateX(Math.PI/2);const n=new qr(this.mapMetaData.sectorRadius1,6);n.rotateX(Math.PI/2);const r=new ir(this.mapMetaData.sectorRadius2-Wy,this.mapMetaData.sectorRadius2,6,1);r.rotateX(Math.PI/2);const s=new qr(this.mapMetaData.sectorRadius2,6);s.rotateX(Math.PI/2);const o=new ir(this.mapMetaData.sectorRadius3-qy,this.mapMetaData.sectorRadius3,6,1);o.rotateX(Math.PI/2);const a=new qr(this.mapMetaData.sectorRadius3,6);a.rotateX(Math.PI/2),this.galaxyMap.forEach((c,u)=>{const d=new yt,f=c.coordinate.clone().multiplyScalar(Zh);d.position.copy(f);const p={type:et.Cluster,ownership:c.ownership};d.userData=p,this.threeContext.scene.add(d);const g=new we(e,Yy[c.ownership]),x={type:et.ClusterHexagonEdge};g.userData=x,d.add(g);let m=0;c.sectors.forEach((y,_)=>{const v=new yt,S=y.coordinate.clone();v.position.copy(S);const L={type:et.Sector,ownership:y.ownership,name:y.name,radius:-1,factoryCubeSize:-1,id:_};if(v.userData=L,d.add(v),this.threeContext.font===void 0)throw new Error(`${rr.name}.${this.initializeScene.name} requires threeContext.font been initialized first`);const O=new ew(y.name,{font:this.threeContext.font,size:160,height:1});O.rotateX(Math.PI/2),O.computeBoundingBox();const I=new P;O.boundingBox.getCenter(I),O.translate(-I.x,0,-I.z);const w=new we(O,jy),b={type:et.SectorName};w.userData=b,w.position.y=zu,w.visible=!1,v.add(w),++m});for(const y of d.children){const _=y.userData;if(_.type!==et.Sector)continue;const v=y;let S,L;if(m===1)S=new we(t,Pa[_.ownership]),L=new we(n,La[_.ownership]),_.radius=this.mapMetaData.sectorRadius1,_.factoryCubeSize=_.radius/20;else if(m===2)S=new we(r,Pa[_.ownership]),L=new we(s,La[_.ownership]),_.radius=this.mapMetaData.sectorRadius2,_.factoryCubeSize=_.radius/20;else if(m===3)S=new we(o,Pa[_.ownership]),L=new we(a,La[_.ownership]),_.radius=this.mapMetaData.sectorRadius3,_.factoryCubeSize=_.radius/20;else throw new Error(`${rr.name}.${this.initializeScene.name} requires a cluster has 1~3 sectors, but ${u} has ${m} sectors`);S.position.y=Cw;const O={type:et.SectorHexagonEdge};S.userData=O,v.add(S),L.position.y=Tw;const I={type:et.SectorHexagonPlane};L.userData=I,v.add(L)}const h=[];for(const y of d.children)y.userData.type===et.Sector&&h.push({sectorRef:y});if(h.length===1)h[0].newCoordinate=new P(0,0,0);else if(h.length===2){const y=h[0].sectorRef.position.z,_=h[1].sectorRef.position.z,v=h[0].sectorRef.position.x,S=h[1].sectorRef.position.x,L=(_-y)/(S-v),O=-this.mapMetaData.clusterRadius/4,I=-O,w=el*this.mapMetaData.clusterRadius/2,b=-w;L>=0?v<=S?(h[0].newCoordinate=new P(O,0,b),h[1].newCoordinate=new P(I,0,w)):(h[0].newCoordinate=new P(I,0,w),h[1].newCoordinate=new P(O,0,b)):v<=S?(h[0].newCoordinate=new P(O,0,w),h[1].newCoordinate=new P(I,0,b)):(h[0].newCoordinate=new P(I,0,b),h[1].newCoordinate=new P(O,0,w))}else if(h.length===3){h.sort((w,b)=>w.sectorRef.position.z-b.sectorRef.position.z);const y=-el*this.mapMetaData.clusterRadius/2,_=0,v=-y;let S,L,O;const I=(h[0].sectorRef.position.x+h[2].sectorRef.position.x)/2;h[1].sectorRef.position.x>I?(S=-this.mapMetaData.clusterRadius/4,L=this.mapMetaData.clusterRadius/2,O=S):(S=this.mapMetaData.clusterRadius/4,L=-this.mapMetaData.clusterRadius/2,O=S),h[0].newCoordinate=new P(S,0,y),h[1].newCoordinate=new P(L,0,_),h[2].newCoordinate=new P(O,0,v)}else throw console.error(h),new Error(`Variable 'sectorArray' has a length of ${h.length}, which is unexpected`);for(const y of h){if(!y.newCoordinate)throw console.error(h),new Error("Expression 'i.newCoordinate' is equivalent to false, which is unexpected");y.sectorRef.position.copy(y.newCoordinate)}});const l=new kx(5e3);l.position.y-=5e3,this.threeContext.scene.add(l),this.threeContext.scene.add(this.transformControls)}hide(){this.threeContext.renderer.domElement.style.display="none",this.gui.domElement.style.display="none",this.disableWASDMove=!0}show(){this.threeContext.renderer.domElement.style.display="block",this.gui.domElement.style.display="flex",this.disableWASDMove=!1}selectFactory(e){this.transformControls.attach(e),this.selectedFactory=e,this.operationMode=2}unselectFactory(e){this.transformControls.detach(),this.selectedFactory=void 0,this.operationMode=e}}const Lw=By(),To=new rr(Lw);await To.loadAssets();To.initializeScene();document.body.append(To.getCanvas());To.renderLoop(performance.now());function Cl(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const ot={},hr=[],xn=()=>{},Rw=()=>!1,Iw=/^on[^a-z]/,Po=i=>Iw.test(i),Tl=i=>i.startsWith("onUpdate:"),Tt=Object.assign,Pl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Dw=Object.prototype.hasOwnProperty,Ke=(i,e)=>Dw.call(i,e),Fe=Array.isArray,dr=i=>ps(i)==="[object Map]",Lo=i=>ps(i)==="[object Set]",ku=i=>ps(i)==="[object Date]",Ge=i=>typeof i=="function",St=i=>typeof i=="string",ns=i=>typeof i=="symbol",at=i=>i!==null&&typeof i=="object",Jh=i=>at(i)&&Ge(i.then)&&Ge(i.catch),Qh=Object.prototype.toString,ps=i=>Qh.call(i),Ow=i=>ps(i).slice(8,-1),ed=i=>ps(i)==="[object Object]",Ll=i=>St(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,oo=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Nw=/-(\w)/g,yr=Ro(i=>i.replace(Nw,(e,t)=>t?t.toUpperCase():"")),Uw=/\B([A-Z])/g,Ar=Ro(i=>i.replace(Uw,"-$1").toLowerCase()),td=Ro(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ua=Ro(i=>i?`on${td(i)}`:""),is=(i,e)=>!Object.is(i,e),ao=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},po=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},mo=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Bu;const nl=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=St(n)?Bw(n):Ni(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(St(i))return i;if(at(i))return i}}const Fw=/;(?![^(]*\))/g,zw=/:([^]+)/,kw=new RegExp("\\/\\*.*?\\*\\/","gs");function Bw(i){const e={};return i.replace(kw,"").split(Fw).forEach(t=>{if(t){const n=t.split(zw);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Rl(i){let e="";if(St(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=Rl(i[t]);n&&(e+=n+" ")}else if(at(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Hw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vw=Cl(Hw);function nd(i){return!!i||i===""}function Gw(i,e){if(i.length!==e.length)return!1;let t=!0;for(let n=0;t&&n<i.length;n++)t=Io(i[n],e[n]);return t}function Io(i,e){if(i===e)return!0;let t=ku(i),n=ku(e);if(t||n)return t&&n?i.getTime()===e.getTime():!1;if(t=ns(i),n=ns(e),t||n)return i===e;if(t=Fe(i),n=Fe(e),t||n)return t&&n?Gw(i,e):!1;if(t=at(i),n=at(e),t||n){if(!t||!n)return!1;const r=Object.keys(i).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Io(i[o],e[o]))return!1}}return String(i)===String(e)}function Ww(i,e){return i.findIndex(t=>Io(t,e))}const Gt=i=>St(i)?i:i==null?"":Fe(i)||at(i)&&(i.toString===Qh||!Ge(i.toString))?JSON.stringify(i,id,2):String(i),id=(i,e)=>e&&e.__v_isRef?id(i,e.value):dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:Lo(e)?{[`Set(${e.size})`]:[...e.values()]}:at(e)&&!Fe(e)&&!ed(e)?String(e):e;let un;class qw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=un;try{return un=this,e()}finally{un=t}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Xw(i,e=un){e&&e.active&&e.effects.push(i)}function $w(){return un}const Il=i=>{const e=new Set(i);return e.w=0,e.n=0,e},rd=i=>(i.w&si)>0,sd=i=>(i.n&si)>0,jw=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=si},Yw=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];rd(r)&&!sd(r)?r.delete(i):e[t++]=r,r.w&=~si,r.n&=~si}e.length=t}},il=new WeakMap;let Hr=0,si=1;const rl=30;let mn;const Ci=Symbol(""),sl=Symbol("");class Dl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Xw(this,n)}run(){if(!this.active)return this.fn();let e=mn,t=ti;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mn,mn=this,ti=!0,si=1<<++Hr,Hr<=rl?jw(this):Hu(this),this.fn()}finally{Hr<=rl&&Yw(this),si=1<<--Hr,mn=this.parent,ti=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mn===this?this.deferStop=!0:this.active&&(Hu(this),this.onStop&&this.onStop(),this.active=!1)}}function Hu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let ti=!0;const od=[];function Cr(){od.push(ti),ti=!1}function Tr(){const i=od.pop();ti=i===void 0?!0:i}function jt(i,e,t){if(ti&&mn){let n=il.get(i);n||il.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Il()),ad(r)}}function ad(i,e){let t=!1;Hr<=rl?sd(i)||(i.n|=si,t=!rd(i)):t=!i.has(mn),t&&(i.add(mn),mn.deps.push(i))}function Vn(i,e,t,n,r,s){const o=il.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(i)?Ll(t)&&a.push(o.get("length")):(a.push(o.get(Ci)),dr(i)&&a.push(o.get(sl)));break;case"delete":Fe(i)||(a.push(o.get(Ci)),dr(i)&&a.push(o.get(sl)));break;case"set":dr(i)&&a.push(o.get(Ci));break}if(a.length===1)a[0]&&ol(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ol(Il(l))}}function ol(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&Vu(n);for(const n of t)n.computed||Vu(n)}function Vu(i,e){(i!==mn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Zw=Cl("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ns)),Kw=Ol(),Jw=Ol(!1,!0),Qw=Ol(!0),Gu=eM();function eM(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Qe(this);for(let s=0,o=this.length;s<o;s++)jt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Cr();const n=Qe(this)[e].apply(this,t);return Tr(),n}}),i}function tM(i){const e=Qe(this);return jt(e,"has",i),e.hasOwnProperty(i)}function Ol(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?_M:fd:e?dd:hd).get(n))return n;const o=Fe(n);if(!i){if(o&&Ke(Gu,r))return Reflect.get(Gu,r,s);if(r==="hasOwnProperty")return tM}const a=Reflect.get(n,r,s);return(ns(r)?ld.has(r):Zw(r))||(i||jt(n,"get",r),e)?a:zt(a)?o&&Ll(r)?a:a.value:at(a)?i?pd(a):Fl(a):a}}const nM=cd(),iM=cd(!0);function cd(i=!1){return function(t,n,r,s){let o=t[n];if(wr(o)&&zt(o)&&!zt(r))return!1;if(!i&&(!go(r)&&!wr(r)&&(o=Qe(o),r=Qe(r)),!Fe(t)&&zt(o)&&!zt(r)))return o.value=r,!0;const a=Fe(t)&&Ll(n)?Number(n)<t.length:Ke(t,n),l=Reflect.set(t,n,r,s);return t===Qe(s)&&(a?is(r,o)&&Vn(t,"set",n,r):Vn(t,"add",n,r)),l}}function rM(i,e){const t=Ke(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Vn(i,"delete",e,void 0),n}function sM(i,e){const t=Reflect.has(i,e);return(!ns(e)||!ld.has(e))&&jt(i,"has",e),t}function oM(i){return jt(i,"iterate",Fe(i)?"length":Ci),Reflect.ownKeys(i)}const ud={get:Kw,set:nM,deleteProperty:rM,has:sM,ownKeys:oM},aM={get:Qw,set(i,e){return!0},deleteProperty(i,e){return!0}},lM=Tt({},ud,{get:Jw,set:iM}),Nl=i=>i,Do=i=>Reflect.getPrototypeOf(i);function $s(i,e,t=!1,n=!1){i=i.__v_raw;const r=Qe(i),s=Qe(e);t||(e!==s&&jt(r,"get",e),jt(r,"get",s));const{has:o}=Do(r),a=n?Nl:t?kl:rs;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function js(i,e=!1){const t=this.__v_raw,n=Qe(t),r=Qe(i);return e||(i!==r&&jt(n,"has",i),jt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Ys(i,e=!1){return i=i.__v_raw,!e&&jt(Qe(i),"iterate",Ci),Reflect.get(i,"size",i)}function Wu(i){i=Qe(i);const e=Qe(this);return Do(e).has.call(e,i)||(e.add(i),Vn(e,"add",i,i)),this}function qu(i,e){e=Qe(e);const t=Qe(this),{has:n,get:r}=Do(t);let s=n.call(t,i);s||(i=Qe(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?is(e,o)&&Vn(t,"set",i,e):Vn(t,"add",i,e),this}function Xu(i){const e=Qe(this),{has:t,get:n}=Do(e);let r=t.call(e,i);r||(i=Qe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Vn(e,"delete",i,void 0),s}function $u(){const i=Qe(this),e=i.size!==0,t=i.clear();return e&&Vn(i,"clear",void 0,void 0),t}function Zs(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Qe(o),l=e?Nl:i?kl:rs;return!i&&jt(a,"iterate",Ci),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Ks(i,e,t){return function(...n){const r=this.__v_raw,s=Qe(r),o=dr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Nl:e?kl:rs;return!e&&jt(s,"iterate",l?sl:Ci),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Zn(i){return function(...e){return i==="delete"?!1:this}}function cM(){const i={get(s){return $s(this,s)},get size(){return Ys(this)},has:js,add:Wu,set:qu,delete:Xu,clear:$u,forEach:Zs(!1,!1)},e={get(s){return $s(this,s,!1,!0)},get size(){return Ys(this)},has:js,add:Wu,set:qu,delete:Xu,clear:$u,forEach:Zs(!1,!0)},t={get(s){return $s(this,s,!0)},get size(){return Ys(this,!0)},has(s){return js.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Zs(!0,!1)},n={get(s){return $s(this,s,!0,!0)},get size(){return Ys(this,!0)},has(s){return js.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Ks(s,!1,!1),t[s]=Ks(s,!0,!1),e[s]=Ks(s,!1,!0),n[s]=Ks(s,!0,!0)}),[i,t,e,n]}const[uM,hM,dM,fM]=cM();function Ul(i,e){const t=e?i?fM:dM:i?hM:uM;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ke(t,r)&&r in n?t:n,r,s)}const pM={get:Ul(!1,!1)},mM={get:Ul(!1,!0)},gM={get:Ul(!0,!1)},hd=new WeakMap,dd=new WeakMap,fd=new WeakMap,_M=new WeakMap;function xM(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vM(i){return i.__v_skip||!Object.isExtensible(i)?0:xM(Ow(i))}function Fl(i){return wr(i)?i:zl(i,!1,ud,pM,hd)}function yM(i){return zl(i,!1,lM,mM,dd)}function pd(i){return zl(i,!0,aM,gM,fd)}function zl(i,e,t,n,r){if(!at(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=vM(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function fr(i){return wr(i)?fr(i.__v_raw):!!(i&&i.__v_isReactive)}function wr(i){return!!(i&&i.__v_isReadonly)}function go(i){return!!(i&&i.__v_isShallow)}function md(i){return fr(i)||wr(i)}function Qe(i){const e=i&&i.__v_raw;return e?Qe(e):i}function gd(i){return po(i,"__v_skip",!0),i}const rs=i=>at(i)?Fl(i):i,kl=i=>at(i)?pd(i):i;function _d(i){ti&&mn&&(i=Qe(i),ad(i.dep||(i.dep=Il())))}function xd(i,e){i=Qe(i);const t=i.dep;t&&ol(t)}function zt(i){return!!(i&&i.__v_isRef===!0)}function st(i){return wM(i,!1)}function wM(i,e){return zt(i)?i:new MM(i,e)}class MM{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Qe(e),this._value=t?e:rs(e)}get value(){return _d(this),this._value}set value(e){const t=this.__v_isShallow||go(e)||wr(e);e=t?e:Qe(e),is(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:rs(e),xd(this))}}function SM(i){return zt(i)?i.value:i}const bM={get:(i,e,t)=>SM(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return zt(r)&&!zt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function vd(i){return fr(i)?i:new Proxy(i,bM)}class EM{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Dl(e,()=>{this._dirty||(this._dirty=!0,xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Qe(this);return _d(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function AM(i,e,t=!1){let n,r;const s=Ge(i);return s?(n=i,r=xn):(n=i.get,r=i.set),new EM(n,r,s||!r,t)}function ni(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Oo(s,e,t)}return r}function vn(i,e,t,n){if(Ge(i)){const s=ni(i,e,t,n);return s&&Jh(s)&&s.catch(o=>{Oo(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(vn(i[s],e,t,n));return r}function Oo(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ni(l,null,10,[i,o,a]);return}}CM(i,t,r,n)}function CM(i,e,t,n=!0){console.error(i)}let ss=!1,al=!1;const Ut=[];let Cn=0;const pr=[];let kn=null,yi=0;const yd=Promise.resolve();let Bl=null;function wd(i){const e=Bl||yd;return i?e.then(this?i.bind(this):i):e}function TM(i){let e=Cn+1,t=Ut.length;for(;e<t;){const n=e+t>>>1;os(Ut[n])<i?e=n+1:t=n}return e}function Hl(i){(!Ut.length||!Ut.includes(i,ss&&i.allowRecurse?Cn+1:Cn))&&(i.id==null?Ut.push(i):Ut.splice(TM(i.id),0,i),Md())}function Md(){!ss&&!al&&(al=!0,Bl=yd.then(bd))}function PM(i){const e=Ut.indexOf(i);e>Cn&&Ut.splice(e,1)}function LM(i){Fe(i)?pr.push(...i):(!kn||!kn.includes(i,i.allowRecurse?yi+1:yi))&&pr.push(i),Md()}function ju(i,e=ss?Cn+1:0){for(;e<Ut.length;e++){const t=Ut[e];t&&t.pre&&(Ut.splice(e,1),e--,t())}}function Sd(i){if(pr.length){const e=[...new Set(pr)];if(pr.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((t,n)=>os(t)-os(n)),yi=0;yi<kn.length;yi++)kn[yi]();kn=null,yi=0}}const os=i=>i.id==null?1/0:i.id,RM=(i,e)=>{const t=os(i)-os(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function bd(i){al=!1,ss=!0,Ut.sort(RM);const e=xn;try{for(Cn=0;Cn<Ut.length;Cn++){const t=Ut[Cn];t&&t.active!==!1&&ni(t,null,14)}}finally{Cn=0,Ut.length=0,Sd(),ss=!1,Bl=null,(Ut.length||pr.length)&&bd()}}function IM(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ot;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=n[u]||ot;f&&(r=t.map(p=>St(p)?p.trim():p)),d&&(r=t.map(mo))}let a,l=n[a=Ua(e)]||n[a=Ua(yr(e))];!l&&s&&(l=n[a=Ua(Ar(e))]),l&&vn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,vn(c,i,6,r)}}function Ed(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ge(i)){const l=c=>{const u=Ed(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(at(i)&&n.set(i,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Tt(o,s),at(i)&&n.set(i,o),o)}function No(i,e){return!i||!Po(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(i,e[0].toLowerCase()+e.slice(1))||Ke(i,Ar(e))||Ke(i,e))}let gn=null,Uo=null;function _o(i){const e=gn;return gn=i,Uo=i&&i.type.__scopeId||null,e}function Ad(i){Uo=i}function Cd(){Uo=null}function DM(i,e=gn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&rh(-1);const s=_o(e);let o;try{o=i(...r)}finally{_o(s),n._d&&rh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Fa(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:x}=i;let m,h;const y=_o(i);try{if(t.shapeFlag&4){const v=r||n;m=An(u.call(v,v,d,s,p,f,g)),h=l}else{const v=e;m=An(v.length>1?v(s,{attrs:l,slots:a,emit:c}):v(s,null)),h=e.props?l:OM(l)}}catch(v){jr.length=0,Oo(v,i,1),m=ii(as)}let _=m;if(h&&x!==!1){const v=Object.keys(h),{shapeFlag:S}=_;v.length&&S&7&&(o&&v.some(Tl)&&(h=NM(h,o)),_=Mr(_,h))}return t.dirs&&(_=Mr(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),m=_,_o(y),m}const OM=i=>{let e;for(const t in i)(t==="class"||t==="style"||Po(t))&&((e||(e={}))[t]=i[t]);return e},NM=(i,e)=>{const t={};for(const n in i)(!Tl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function UM(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Yu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==n[f]&&!No(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Yu(n,o,c):!0:!!o;return!1}function Yu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!No(t,s))return!0}return!1}function FM({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const zM=i=>i.__isSuspense;function kM(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):LM(i)}const Js={};function mr(i,e,t){return Td(i,e,t)}function Td(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=ot){var a;const l=$w()===((a=Ft)==null?void 0:a.scope)?Ft:null;let c,u=!1,d=!1;if(zt(i)?(c=()=>i.value,u=go(i)):fr(i)?(c=()=>i,n=!0):Fe(i)?(d=!0,u=i.some(v=>fr(v)||go(v)),c=()=>i.map(v=>{if(zt(v))return v.value;if(fr(v))return Ei(v);if(Ge(v))return ni(v,l,2)})):Ge(i)?e?c=()=>ni(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),vn(i,l,3,[p])}:c=xn,e&&n){const v=c;c=()=>Ei(v())}let f,p=v=>{f=y.onStop=()=>{ni(v,l,4)}},g;if(cs)if(p=xn,e?t&&vn(e,l,3,[c(),d?[]:void 0,p]):c(),r==="sync"){const v=OS();g=v.__watcherHandles||(v.__watcherHandles=[])}else return xn;let x=d?new Array(i.length).fill(Js):Js;const m=()=>{if(y.active)if(e){const v=y.run();(n||u||(d?v.some((S,L)=>is(S,x[L])):is(v,x)))&&(f&&f(),vn(e,l,3,[v,x===Js?void 0:d&&x[0]===Js?[]:x,p]),x=v)}else y.run()};m.allowRecurse=!!e;let h;r==="sync"?h=m:r==="post"?h=()=>qt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),h=()=>Hl(m));const y=new Dl(c,h);e?t?m():x=y.run():r==="post"?qt(y.run.bind(y),l&&l.suspense):y.run();const _=()=>{y.stop(),l&&l.scope&&Pl(l.scope.effects,y)};return g&&g.push(_),_}function BM(i,e,t){const n=this.proxy,r=St(i)?i.includes(".")?Pd(n,i):()=>n[i]:i.bind(n,n);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=Ft;Sr(this);const a=Td(r,s.bind(n),t);return o?Sr(o):Ti(),a}function Pd(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Ei(i,e){if(!at(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),zt(i))Ei(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)Ei(i[t],e);else if(Lo(i)||dr(i))i.forEach(t=>{Ei(t,e)});else if(ed(i))for(const t in i)Ei(i[t],e);return i}function sr(i,e){const t=gn;if(t===null)return i;const n=Bo(t)||t.proxy,r=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ot]=e[s];o&&(Ge(o)&&(o={mounted:o,updated:o}),o.deep&&Ei(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return i}function fi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Cr(),vn(l,t,8,[i.el,a,i,e]),Tr())}}function ms(i,e){return Ge(i)?(()=>Tt({name:i.name},e,{setup:i}))():i}const lo=i=>!!i.type.__asyncLoader,Ld=i=>i.type.__isKeepAlive;function HM(i,e){Rd(i,"a",e)}function VM(i,e){Rd(i,"da",e)}function Rd(i,e,t=Ft){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Fo(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Ld(r.parent.vnode)&&GM(n,e,t,r),r=r.parent}}function GM(i,e,t,n){const r=Fo(e,i,n,!0);Id(()=>{Pl(n[e],r)},t)}function Fo(i,e,t=Ft,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Cr(),Sr(t);const a=vn(e,t,i,o);return Ti(),Tr(),a});return n?r.unshift(s):r.push(s),s}}const Gn=i=>(e,t=Ft)=>(!cs||i==="sp")&&Fo(i,(...n)=>e(...n),t),WM=Gn("bm"),qM=Gn("m"),XM=Gn("bu"),$M=Gn("u"),jM=Gn("bum"),Id=Gn("um"),YM=Gn("sp"),ZM=Gn("rtg"),KM=Gn("rtc");function JM(i,e=Ft){Fo("ec",i,e)}const QM=Symbol.for("v-ndc");function Jn(i,e,t,n){let r;const s=t&&t[n];if(Fe(i)||St(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(at(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const ll=i=>i?Vd(i)?Bo(i)||i.proxy:ll(i.parent):null,$r=Tt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ll(i.parent),$root:i=>ll(i.root),$emit:i=>i.emit,$options:i=>Vl(i),$forceUpdate:i=>i.f||(i.f=()=>Hl(i.update)),$nextTick:i=>i.n||(i.n=wd.bind(i.proxy)),$watch:i=>BM.bind(i)}),za=(i,e)=>i!==ot&&!i.__isScriptSetup&&Ke(i,e),eS={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(za(n,e))return o[e]=1,n[e];if(r!==ot&&Ke(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==ot&&Ke(t,e))return o[e]=4,t[e];cl&&(o[e]=0)}}const u=$r[e];let d,f;if(u)return e==="$attrs"&&jt(i,"get",e),u(i);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ot&&Ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return za(r,e)?(r[e]=t,!0):n!==ot&&Ke(n,e)?(n[e]=t,!0):Ke(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==ot&&Ke(i,o)||za(e,o)||(a=s[0])&&Ke(a,o)||Ke(n,o)||Ke($r,o)||Ke(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ke(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Zu(i){return Fe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let cl=!0;function tS(i){const e=Vl(i),t=i.proxy,n=i.ctx;cl=!1,e.beforeCreate&&Ku(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:_,unmounted:v,render:S,renderTracked:L,renderTriggered:O,errorCaptured:I,serverPrefetch:w,expose:b,inheritAttrs:U,components:W,directives:F,filters:N}=e;if(c&&nS(c,n,null),o)for(const ee in o){const j=o[ee];Ge(j)&&(n[ee]=j.bind(t))}if(r){const ee=r.call(t,t);at(ee)&&(i.data=Fl(ee))}if(cl=!0,s)for(const ee in s){const j=s[ee],re=Ge(j)?j.bind(t,t):Ge(j.get)?j.get.bind(t,t):xn,de=!Ge(j)&&Ge(j.set)?j.set.bind(t):xn,Me=IS({get:re,set:de});Object.defineProperty(n,ee,{enumerable:!0,configurable:!0,get:()=>Me.value,set:me=>Me.value=me})}if(a)for(const ee in a)Dd(a[ee],n,t,ee);if(l){const ee=Ge(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(j=>{lS(j,ee[j])})}u&&Ku(u,i,"c");function ie(ee,j){Fe(j)?j.forEach(re=>ee(re.bind(t))):j&&ee(j.bind(t))}if(ie(WM,d),ie(qM,f),ie(XM,p),ie($M,g),ie(HM,x),ie(VM,m),ie(JM,I),ie(KM,L),ie(ZM,O),ie(jM,y),ie(Id,v),ie(YM,w),Fe(b))if(b.length){const ee=i.exposed||(i.exposed={});b.forEach(j=>{Object.defineProperty(ee,j,{get:()=>t[j],set:re=>t[j]=re})})}else i.exposed||(i.exposed={});S&&i.render===xn&&(i.render=S),U!=null&&(i.inheritAttrs=U),W&&(i.components=W),F&&(i.directives=F)}function nS(i,e,t=xn){Fe(i)&&(i=ul(i));for(const n in i){const r=i[n];let s;at(r)?"default"in r?s=co(r.from||n,r.default,!0):s=co(r.from||n):s=co(r),zt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function Ku(i,e,t){vn(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Dd(i,e,t,n){const r=n.includes(".")?Pd(t,n):()=>t[n];if(St(i)){const s=e[i];Ge(s)&&mr(r,s)}else if(Ge(i))mr(r,i.bind(t));else if(at(i))if(Fe(i))i.forEach(s=>Dd(s,e,t,n));else{const s=Ge(i.handler)?i.handler.bind(t):e[i.handler];Ge(s)&&mr(r,s,i)}}function Vl(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>xo(l,c,o,!0)),xo(l,e,o)),at(e)&&s.set(e,l),l}function xo(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&xo(i,s,t,!0),r&&r.forEach(o=>xo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=iS[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const iS={data:Ju,props:Qu,emits:Qu,methods:Vr,computed:Vr,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Vr,directives:Vr,watch:sS,provide:Ju,inject:rS};function Ju(i,e){return e?i?function(){return Tt(Ge(i)?i.call(this,this):i,Ge(e)?e.call(this,this):e)}:e:i}function rS(i,e){return Vr(ul(i),ul(e))}function ul(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ht(i,e){return i?[...new Set([].concat(i,e))]:e}function Vr(i,e){return i?Tt(Object.create(null),i,e):e}function Qu(i,e){return i?Fe(i)&&Fe(e)?[...new Set([...i,...e])]:Tt(Object.create(null),Zu(i),Zu(e??{})):e}function sS(i,e){if(!i)return e;if(!e)return i;const t=Tt(Object.create(null),i);for(const n in e)t[n]=Ht(i[n],e[n]);return t}function Od(){return{app:null,config:{isNativeTag:Rw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oS=0;function aS(i,e){return function(n,r=null){Ge(n)||(n=Tt({},n)),r!=null&&!at(r)&&(r=null);const s=Od(),o=new Set;let a=!1;const l=s.app={_uid:oS++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:NS,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(l,...u)):Ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const f=ii(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Bo(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){vo=l;try{return c()}finally{vo=null}}};return l}}let vo=null;function lS(i,e){if(Ft){let t=Ft.provides;const n=Ft.parent&&Ft.parent.provides;n===t&&(t=Ft.provides=Object.create(n)),t[i]=e}}function co(i,e,t=!1){const n=Ft||gn;if(n||vo){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:vo._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ge(e)?e.call(n&&n.proxy):e}}function cS(i,e,t,n=!1){const r={},s={};po(s,ko,1),i.propsDefaults=Object.create(null),Nd(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:yM(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function uS(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Qe(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(No(i.emitsOptions,f))continue;const p=e[f];if(l)if(Ke(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=yr(f);r[g]=hl(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Nd(i,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Ke(e,d)&&((u=Ar(d))===d||!Ke(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=hl(l,a,d,void 0,i,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Ke(e,d))&&(delete s[d],c=!0)}c&&Vn(i,"set","$attrs")}function Nd(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(oo(l))continue;const c=e[l];let u;r&&Ke(r,u=yr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:No(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Qe(t),c=a||ot;for(let u=0;u<s.length;u++){const d=s[u];t[d]=hl(r,l,d,c[d],i,!Ke(c,d))}}return o}function hl(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ke(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Sr(r),n=c[t]=l.call(null,e),Ti())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Ar(t))&&(n=!0))}return n}function Ud(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ge(i)){const u=d=>{l=!0;const[f,p]=Ud(d,e,!0);Tt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return at(i)&&n.set(i,hr),hr;if(Fe(s))for(let u=0;u<s.length;u++){const d=yr(s[u]);eh(d)&&(o[d]=ot)}else if(s)for(const u in s){const d=yr(u);if(eh(d)){const f=s[u],p=o[d]=Fe(f)||Ge(f)?{type:f}:Tt({},f);if(p){const g=ih(Boolean,p.type),x=ih(String,p.type);p[0]=g>-1,p[1]=x<0||g<x,(g>-1||Ke(p,"default"))&&a.push(d)}}}const c=[o,a];return at(i)&&n.set(i,c),c}function eh(i){return i[0]!=="$"}function th(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function nh(i,e){return th(i)===th(e)}function ih(i,e){return Fe(e)?e.findIndex(t=>nh(t,i)):Ge(e)&&nh(e,i)?0:-1}const Fd=i=>i[0]==="_"||i==="$stable",Gl=i=>Fe(i)?i.map(An):[An(i)],hS=(i,e,t)=>{if(e._n)return e;const n=DM((...r)=>Gl(e(...r)),t);return n._c=!1,n},zd=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Fd(r))continue;const s=i[r];if(Ge(s))e[r]=hS(r,s,n);else if(s!=null){const o=Gl(s);e[r]=()=>o}}},kd=(i,e)=>{const t=Gl(e);i.slots.default=()=>t},dS=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Qe(e),po(e,"_",t)):zd(e,i.slots={})}else i.slots={},e&&kd(i,e);po(i.slots,ko,1)},fS=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=ot;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Tt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,zd(e,r)),o=e}else e&&(kd(i,e),o={default:1});if(s)for(const a in r)!Fd(a)&&!(a in o)&&delete r[a]};function dl(i,e,t,n,r=!1){if(Fe(i)){i.forEach((f,p)=>dl(f,e&&(Fe(e)?e[p]:e),t,n,r));return}if(lo(n)&&!r)return;const s=n.shapeFlag&4?Bo(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,Ke(d,c)&&(d[c]=null)):zt(c)&&(c.value=null)),Ge(l))ni(l,a,12,[o,u]);else{const f=St(l),p=zt(l);if(f||p){const g=()=>{if(i.f){const x=f?Ke(d,l)?d[l]:u[l]:l.value;r?Fe(x)&&Pl(x,s):Fe(x)?x.includes(s)||x.push(s):f?(u[l]=[s],Ke(d,l)&&(d[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Ke(d,l)&&(d[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,qt(g,t)):g()}}}const qt=kM;function pS(i){return mS(i)}function mS(i,e){const t=nl();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=xn,insertStaticContent:g}=i,x=(E,C,D,H=null,B=null,K=null,se=!1,Z=null,le=!!C.dynamicChildren)=>{if(E===C)return;E&&!Ur(E,C)&&(H=$(E),me(E,B,K,!0),E=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:ne,ref:A,shapeFlag:M}=C;switch(ne){case zo:m(E,C,D,H);break;case as:h(E,C,D,H);break;case ka:E==null&&y(C,D,H,se);break;case At:W(E,C,D,H,B,K,se,Z,le);break;default:M&1?S(E,C,D,H,B,K,se,Z,le):M&6?F(E,C,D,H,B,K,se,Z,le):(M&64||M&128)&&ne.process(E,C,D,H,B,K,se,Z,le,Le)}A!=null&&B&&dl(A,E&&E.ref,K,C||E,!C)},m=(E,C,D,H)=>{if(E==null)n(C.el=a(C.children),D,H);else{const B=C.el=E.el;C.children!==E.children&&c(B,C.children)}},h=(E,C,D,H)=>{E==null?n(C.el=l(C.children||""),D,H):C.el=E.el},y=(E,C,D,H)=>{[E.el,E.anchor]=g(E.children,C,D,H,E.el,E.anchor)},_=({el:E,anchor:C},D,H)=>{let B;for(;E&&E!==C;)B=f(E),n(E,D,H),E=B;n(C,D,H)},v=({el:E,anchor:C})=>{let D;for(;E&&E!==C;)D=f(E),r(E),E=D;r(C)},S=(E,C,D,H,B,K,se,Z,le)=>{se=se||C.type==="svg",E==null?L(C,D,H,B,K,se,Z,le):w(E,C,B,K,se,Z,le)},L=(E,C,D,H,B,K,se,Z)=>{let le,ne;const{type:A,props:M,shapeFlag:z,transition:Y,dirs:Q}=E;if(le=E.el=o(E.type,K,M&&M.is,M),z&8?u(le,E.children):z&16&&I(E.children,le,null,H,B,K&&A!=="foreignObject",se,Z),Q&&fi(E,null,H,"created"),O(le,E,E.scopeId,se,H),M){for(const R in M)R!=="value"&&!oo(R)&&s(le,R,null,M[R],K,E.children,H,B,xe);"value"in M&&s(le,"value",null,M.value),(ne=M.onVnodeBeforeMount)&&Sn(ne,H,E)}Q&&fi(E,null,H,"beforeMount");const he=(!B||B&&!B.pendingBranch)&&Y&&!Y.persisted;he&&Y.beforeEnter(le),n(le,C,D),((ne=M&&M.onVnodeMounted)||he||Q)&&qt(()=>{ne&&Sn(ne,H,E),he&&Y.enter(le),Q&&fi(E,null,H,"mounted")},B)},O=(E,C,D,H,B)=>{if(D&&p(E,D),H)for(let K=0;K<H.length;K++)p(E,H[K]);if(B){let K=B.subTree;if(C===K){const se=B.vnode;O(E,se,se.scopeId,se.slotScopeIds,B.parent)}}},I=(E,C,D,H,B,K,se,Z,le=0)=>{for(let ne=le;ne<E.length;ne++){const A=E[ne]=Z?Qn(E[ne]):An(E[ne]);x(null,A,C,D,H,B,K,se,Z)}},w=(E,C,D,H,B,K,se)=>{const Z=C.el=E.el;let{patchFlag:le,dynamicChildren:ne,dirs:A}=C;le|=E.patchFlag&16;const M=E.props||ot,z=C.props||ot;let Y;D&&pi(D,!1),(Y=z.onVnodeBeforeUpdate)&&Sn(Y,D,C,E),A&&fi(C,E,D,"beforeUpdate"),D&&pi(D,!0);const Q=B&&C.type!=="foreignObject";if(ne?b(E.dynamicChildren,ne,Z,D,H,Q,K):se||j(E,C,Z,null,D,H,Q,K,!1),le>0){if(le&16)U(Z,C,M,z,D,H,B);else if(le&2&&M.class!==z.class&&s(Z,"class",null,z.class,B),le&4&&s(Z,"style",M.style,z.style,B),le&8){const he=C.dynamicProps;for(let R=0;R<he.length;R++){const J=he[R],q=M[J],_e=z[J];(_e!==q||J==="value")&&s(Z,J,q,_e,B,E.children,D,H,xe)}}le&1&&E.children!==C.children&&u(Z,C.children)}else!se&&ne==null&&U(Z,C,M,z,D,H,B);((Y=z.onVnodeUpdated)||A)&&qt(()=>{Y&&Sn(Y,D,C,E),A&&fi(C,E,D,"updated")},H)},b=(E,C,D,H,B,K,se)=>{for(let Z=0;Z<C.length;Z++){const le=E[Z],ne=C[Z],A=le.el&&(le.type===At||!Ur(le,ne)||le.shapeFlag&70)?d(le.el):D;x(le,ne,A,null,H,B,K,se,!0)}},U=(E,C,D,H,B,K,se)=>{if(D!==H){if(D!==ot)for(const Z in D)!oo(Z)&&!(Z in H)&&s(E,Z,D[Z],null,se,C.children,B,K,xe);for(const Z in H){if(oo(Z))continue;const le=H[Z],ne=D[Z];le!==ne&&Z!=="value"&&s(E,Z,ne,le,se,C.children,B,K,xe)}"value"in H&&s(E,"value",D.value,H.value)}},W=(E,C,D,H,B,K,se,Z,le)=>{const ne=C.el=E?E.el:a(""),A=C.anchor=E?E.anchor:a("");let{patchFlag:M,dynamicChildren:z,slotScopeIds:Y}=C;Y&&(Z=Z?Z.concat(Y):Y),E==null?(n(ne,D,H),n(A,D,H),I(C.children,D,A,B,K,se,Z,le)):M>0&&M&64&&z&&E.dynamicChildren?(b(E.dynamicChildren,z,D,B,K,se,Z),(C.key!=null||B&&C===B.subTree)&&Bd(E,C,!0)):j(E,C,D,A,B,K,se,Z,le)},F=(E,C,D,H,B,K,se,Z,le)=>{C.slotScopeIds=Z,E==null?C.shapeFlag&512?B.ctx.activate(C,D,H,se,le):N(C,D,H,B,K,se,le):G(E,C,le)},N=(E,C,D,H,B,K,se)=>{const Z=E.component=AS(E,H,B);if(Ld(E)&&(Z.ctx.renderer=Le),CS(Z),Z.asyncDep){if(B&&B.registerDep(Z,ie),!E.el){const le=Z.subTree=ii(as);h(null,le,C,D)}return}ie(Z,E,C,D,B,K,se)},G=(E,C,D)=>{const H=C.component=E.component;if(UM(E,C,D))if(H.asyncDep&&!H.asyncResolved){ee(H,C,D);return}else H.next=C,PM(H.update),H.update();else C.el=E.el,H.vnode=C},ie=(E,C,D,H,B,K,se)=>{const Z=()=>{if(E.isMounted){let{next:A,bu:M,u:z,parent:Y,vnode:Q}=E,he=A,R;pi(E,!1),A?(A.el=Q.el,ee(E,A,se)):A=Q,M&&ao(M),(R=A.props&&A.props.onVnodeBeforeUpdate)&&Sn(R,Y,A,Q),pi(E,!0);const J=Fa(E),q=E.subTree;E.subTree=J,x(q,J,d(q.el),$(q),E,B,K),A.el=J.el,he===null&&FM(E,J.el),z&&qt(z,B),(R=A.props&&A.props.onVnodeUpdated)&&qt(()=>Sn(R,Y,A,Q),B)}else{let A;const{el:M,props:z}=C,{bm:Y,m:Q,parent:he}=E,R=lo(C);if(pi(E,!1),Y&&ao(Y),!R&&(A=z&&z.onVnodeBeforeMount)&&Sn(A,he,C),pi(E,!0),M&&Ce){const J=()=>{E.subTree=Fa(E),Ce(M,E.subTree,E,B,null)};R?C.type.__asyncLoader().then(()=>!E.isUnmounted&&J()):J()}else{const J=E.subTree=Fa(E);x(null,J,D,H,E,B,K),C.el=J.el}if(Q&&qt(Q,B),!R&&(A=z&&z.onVnodeMounted)){const J=C;qt(()=>Sn(A,he,J),B)}(C.shapeFlag&256||he&&lo(he.vnode)&&he.vnode.shapeFlag&256)&&E.a&&qt(E.a,B),E.isMounted=!0,C=D=H=null}},le=E.effect=new Dl(Z,()=>Hl(ne),E.scope),ne=E.update=()=>le.run();ne.id=E.uid,pi(E,!0),ne()},ee=(E,C,D)=>{C.component=E;const H=E.vnode.props;E.vnode=C,E.next=null,uS(E,C.props,H,D),fS(E,C.children,D),Cr(),ju(),Tr()},j=(E,C,D,H,B,K,se,Z,le=!1)=>{const ne=E&&E.children,A=E?E.shapeFlag:0,M=C.children,{patchFlag:z,shapeFlag:Y}=C;if(z>0){if(z&128){de(ne,M,D,H,B,K,se,Z,le);return}else if(z&256){re(ne,M,D,H,B,K,se,Z,le);return}}Y&8?(A&16&&xe(ne,B,K),M!==ne&&u(D,M)):A&16?Y&16?de(ne,M,D,H,B,K,se,Z,le):xe(ne,B,K,!0):(A&8&&u(D,""),Y&16&&I(M,D,H,B,K,se,Z,le))},re=(E,C,D,H,B,K,se,Z,le)=>{E=E||hr,C=C||hr;const ne=E.length,A=C.length,M=Math.min(ne,A);let z;for(z=0;z<M;z++){const Y=C[z]=le?Qn(C[z]):An(C[z]);x(E[z],Y,D,null,B,K,se,Z,le)}ne>A?xe(E,B,K,!0,!1,M):I(C,D,H,B,K,se,Z,le,M)},de=(E,C,D,H,B,K,se,Z,le)=>{let ne=0;const A=C.length;let M=E.length-1,z=A-1;for(;ne<=M&&ne<=z;){const Y=E[ne],Q=C[ne]=le?Qn(C[ne]):An(C[ne]);if(Ur(Y,Q))x(Y,Q,D,null,B,K,se,Z,le);else break;ne++}for(;ne<=M&&ne<=z;){const Y=E[M],Q=C[z]=le?Qn(C[z]):An(C[z]);if(Ur(Y,Q))x(Y,Q,D,null,B,K,se,Z,le);else break;M--,z--}if(ne>M){if(ne<=z){const Y=z+1,Q=Y<A?C[Y].el:H;for(;ne<=z;)x(null,C[ne]=le?Qn(C[ne]):An(C[ne]),D,Q,B,K,se,Z,le),ne++}}else if(ne>z)for(;ne<=M;)me(E[ne],B,K,!0),ne++;else{const Y=ne,Q=ne,he=new Map;for(ne=Q;ne<=z;ne++){const Se=C[ne]=le?Qn(C[ne]):An(C[ne]);Se.key!=null&&he.set(Se.key,ne)}let R,J=0;const q=z-Q+1;let _e=!1,Ae=0;const Pe=new Array(q);for(ne=0;ne<q;ne++)Pe[ne]=0;for(ne=Y;ne<=M;ne++){const Se=E[ne];if(J>=q){me(Se,B,K,!0);continue}let Ie;if(Se.key!=null)Ie=he.get(Se.key);else for(R=Q;R<=z;R++)if(Pe[R-Q]===0&&Ur(Se,C[R])){Ie=R;break}Ie===void 0?me(Se,B,K,!0):(Pe[Ie-Q]=ne+1,Ie>=Ae?Ae=Ie:_e=!0,x(Se,C[Ie],D,null,B,K,se,Z,le),J++)}const be=_e?gS(Pe):hr;for(R=be.length-1,ne=q-1;ne>=0;ne--){const Se=Q+ne,Ie=C[Se],He=Se+1<A?C[Se+1].el:H;Pe[ne]===0?x(null,Ie,D,He,B,K,se,Z,le):_e&&(R<0||ne!==be[R]?Me(Ie,D,He,2):R--)}}},Me=(E,C,D,H,B=null)=>{const{el:K,type:se,transition:Z,children:le,shapeFlag:ne}=E;if(ne&6){Me(E.component.subTree,C,D,H);return}if(ne&128){E.suspense.move(C,D,H);return}if(ne&64){se.move(E,C,D,Le);return}if(se===At){n(K,C,D);for(let M=0;M<le.length;M++)Me(le[M],C,D,H);n(E.anchor,C,D);return}if(se===ka){_(E,C,D);return}if(H!==2&&ne&1&&Z)if(H===0)Z.beforeEnter(K),n(K,C,D),qt(()=>Z.enter(K),B);else{const{leave:M,delayLeave:z,afterLeave:Y}=Z,Q=()=>n(K,C,D),he=()=>{M(K,()=>{Q(),Y&&Y()})};z?z(K,Q,he):he()}else n(K,C,D)},me=(E,C,D,H=!1,B=!1)=>{const{type:K,props:se,ref:Z,children:le,dynamicChildren:ne,shapeFlag:A,patchFlag:M,dirs:z}=E;if(Z!=null&&dl(Z,null,D,E,!0),A&256){C.ctx.deactivate(E);return}const Y=A&1&&z,Q=!lo(E);let he;if(Q&&(he=se&&se.onVnodeBeforeUnmount)&&Sn(he,C,E),A&6)ve(E.component,D,H);else{if(A&128){E.suspense.unmount(D,H);return}Y&&fi(E,null,C,"beforeUnmount"),A&64?E.type.remove(E,C,D,B,Le,H):ne&&(K!==At||M>0&&M&64)?xe(ne,C,D,!1,!0):(K===At&&M&384||!B&&A&16)&&xe(le,C,D),H&&te(E)}(Q&&(he=se&&se.onVnodeUnmounted)||Y)&&qt(()=>{he&&Sn(he,C,E),Y&&fi(E,null,C,"unmounted")},D)},te=E=>{const{type:C,el:D,anchor:H,transition:B}=E;if(C===At){ue(D,H);return}if(C===ka){v(E);return}const K=()=>{r(D),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:se,delayLeave:Z}=B,le=()=>se(D,K);Z?Z(E.el,K,le):le()}else K()},ue=(E,C)=>{let D;for(;E!==C;)D=f(E),r(E),E=D;r(C)},ve=(E,C,D)=>{const{bum:H,scope:B,update:K,subTree:se,um:Z}=E;H&&ao(H),B.stop(),K&&(K.active=!1,me(se,E,C,D)),Z&&qt(Z,C),qt(()=>{E.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},xe=(E,C,D,H=!1,B=!1,K=0)=>{for(let se=K;se<E.length;se++)me(E[se],C,D,H,B)},$=E=>E.shapeFlag&6?$(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),Ne=(E,C,D)=>{E==null?C._vnode&&me(C._vnode,null,null,!0):x(C._vnode||null,E,C,null,null,null,D),ju(),Sd(),C._vnode=E},Le={p:x,um:me,m:Me,r:te,mt:N,mc:I,pc:j,pbc:b,n:$,o:i};let pe,Ce;return e&&([pe,Ce]=e(Le)),{render:Ne,hydrate:pe,createApp:aS(Ne,pe)}}function pi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Bd(i,e,t=!1){const n=i.children,r=e.children;if(Fe(n)&&Fe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Qn(r[s]),a.el=o.el),t||Bd(o,a)),a.type===zo&&(a.el=o.el)}}function gS(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const _S=i=>i.__isTeleport,At=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),as=Symbol.for("v-cmt"),ka=Symbol.for("v-stc"),jr=[];let _n=null;function mt(i=!1){jr.push(_n=i?null:[])}function xS(){jr.pop(),_n=jr[jr.length-1]||null}let ls=1;function rh(i){ls+=i}function vS(i){return i.dynamicChildren=ls>0?_n||hr:null,xS(),ls>0&&_n&&_n.push(i),i}function gt(i,e,t,n,r,s){return vS(Ve(i,e,t,n,r,s,!0))}function yS(i){return i?i.__v_isVNode===!0:!1}function Ur(i,e){return i.type===e.type&&i.key===e.key}const ko="__vInternal",Hd=({key:i})=>i??null,uo=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?St(i)||zt(i)||Ge(i)?{i:gn,r:i,k:e,f:!!t}:i:null);function Ve(i,e=null,t=null,n=0,r=null,s=i===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Hd(e),ref:e&&uo(e),scopeId:Uo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gn};return a?(Wl(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),ls>0&&!o&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const ii=wS;function wS(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===QM)&&(i=as),yS(i)){const a=Mr(i,e,!0);return t&&Wl(a,t),ls>0&&!s&&_n&&(a.shapeFlag&6?_n[_n.indexOf(i)]=a:_n.push(a)),a.patchFlag|=-2,a}if(RS(i)&&(i=i.__vccOpts),e){e=MS(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Rl(a)),at(l)&&(md(l)&&!Fe(l)&&(l=Tt({},l)),e.style=Ni(l))}const o=St(i)?1:zM(i)?128:_S(i)?64:at(i)?4:Ge(i)?2:0;return Ve(i,e,t,n,r,o,s,!0)}function MS(i){return i?md(i)||ko in i?Tt({},i):i:null}function Mr(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?SS(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Hd(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(uo(e)):[r,uo(e)]:uo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==At?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Mr(i.ssContent),ssFallback:i.ssFallback&&Mr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function or(i=" ",e=0){return ii(zo,null,i,e)}function An(i){return i==null||typeof i=="boolean"?ii(as):Fe(i)?ii(At,null,i.slice()):typeof i=="object"?Qn(i):ii(zo,null,String(i))}function Qn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Mr(i)}function Wl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Wl(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ko in e)?e._ctx=gn:r===3&&gn&&(gn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),n&64?(t=16,e=[or(e)]):t=8);i.children=e,i.shapeFlag|=t}function SS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Rl([e.class,n.class]));else if(r==="style")e.style=Ni([e.style,n.style]);else if(Po(r)){const s=e[r],o=n[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Sn(i,e,t,n=null){vn(i,e,7,[t,n])}const bS=Od();let ES=0;function AS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||bS,s={uid:ES++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ud(n,r),emitsOptions:Ed(n,r),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:n.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=IM.bind(null,s),i.ce&&i.ce(s),s}let Ft=null,ql,Ji,sh="__VUE_INSTANCE_SETTERS__";(Ji=nl()[sh])||(Ji=nl()[sh]=[]),Ji.push(i=>Ft=i),ql=i=>{Ji.length>1?Ji.forEach(e=>e(i)):Ji[0](i)};const Sr=i=>{ql(i),i.scope.on()},Ti=()=>{Ft&&Ft.scope.off(),ql(null)};function Vd(i){return i.vnode.shapeFlag&4}let cs=!1;function CS(i,e=!1){cs=e;const{props:t,children:n}=i.vnode,r=Vd(i);cS(i,t,r,e),dS(i,n);const s=r?TS(i,e):void 0;return cs=!1,s}function TS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=gd(new Proxy(i.ctx,eS));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?LS(i):null;Sr(i),Cr();const s=ni(n,i,0,[i.props,r]);if(Tr(),Ti(),Jh(s)){if(s.then(Ti,Ti),e)return s.then(o=>{oh(i,o,e)}).catch(o=>{Oo(o,i,0)});i.asyncDep=s}else oh(i,s,e)}else Gd(i,e)}function oh(i,e,t){Ge(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:at(e)&&(i.setupState=vd(e)),Gd(i,t)}let ah;function Gd(i,e,t){const n=i.type;if(!i.render){if(!e&&ah&&!n.render){const r=n.template||Vl(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Tt(Tt({isCustomElement:s,delimiters:a},o),l);n.render=ah(r,c)}}i.render=n.render||xn}Sr(i),Cr(),tS(i),Tr(),Ti()}function PS(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return jt(i,"get","$attrs"),e[t]}}))}function LS(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return PS(i)},slots:i.slots,emit:i.emit,expose:e}}function Bo(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(vd(gd(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in $r)return $r[t](i)},has(e,t){return t in e||t in $r}}))}function RS(i){return Ge(i)&&"__vccOpts"in i}const IS=(i,e)=>AM(i,e,cs),DS=Symbol.for("v-scx"),OS=()=>co(DS),NS="3.3.2",US="http://www.w3.org/2000/svg",wi=typeof document<"u"?document:null,lh=wi&&wi.createElement("template"),FS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?wi.createElementNS(US,i):wi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>wi.createTextNode(i),createComment:i=>wi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>wi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{lh.innerHTML=n?`<svg>${i}</svg>`:i;const a=lh.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function zS(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function kS(i,e,t){const n=i.style,r=St(t);if(t&&!r){if(e&&!St(e))for(const s in e)t[s]==null&&fl(n,s,"");for(const s in t)fl(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const ch=/\s*!important$/;function fl(i,e,t){if(Fe(t))t.forEach(n=>fl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=BS(i,e);ch.test(t)?i.setProperty(Ar(n),t.replace(ch,""),"important"):i[n]=t}}const uh=["Webkit","Moz","ms"],Ba={};function BS(i,e){const t=Ba[e];if(t)return t;let n=yr(e);if(n!=="filter"&&n in i)return Ba[e]=n;n=td(n);for(let r=0;r<uh.length;r++){const s=uh[r]+n;if(s in i)return Ba[e]=s}return e}const hh="http://www.w3.org/1999/xlink";function HS(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(hh,e.slice(6,e.length)):i.setAttributeNS(hh,e,t);else{const s=Vw(e);t==null||s&&!nd(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function VS(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=nd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function Mi(i,e,t,n){i.addEventListener(e,t,n)}function GS(i,e,t,n){i.removeEventListener(e,t,n)}function WS(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=qS(e);if(n){const c=s[e]=jS(n,r);Mi(i,a,c,l)}else o&&(GS(i,a,o,l),s[e]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;function qS(i){let e;if(dh.test(i)){e={};let n;for(;n=i.match(dh);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ar(i.slice(2)),e]}let Ha=0;const XS=Promise.resolve(),$S=()=>Ha||(XS.then(()=>Ha=0),Ha=Date.now());function jS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;vn(YS(n,t.value),e,5,[n])};return t.value=i,t.attached=$S(),t}function YS(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const fh=/^on[a-z]/,ZS=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?zS(i,n,r):e==="style"?kS(i,t,n):Po(e)?Tl(e)||WS(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KS(i,e,n,r))?VS(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),HS(i,e,n,r))};function KS(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&fh.test(e)&&Ge(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||fh.test(e)&&St(t)?!1:e in i}const yo=i=>{const e=i.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>ao(e,t):e};function JS(i){i.target.composing=!0}function ph(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wd={created(i,{modifiers:{lazy:e,trim:t,number:n}},r){i._assign=yo(r);const s=n||r.props&&r.props.type==="number";Mi(i,e?"change":"input",o=>{if(o.target.composing)return;let a=i.value;t&&(a=a.trim()),s&&(a=mo(a)),i._assign(a)}),t&&Mi(i,"change",()=>{i.value=i.value.trim()}),e||(Mi(i,"compositionstart",JS),Mi(i,"compositionend",ph),Mi(i,"change",ph))},mounted(i,{value:e}){i.value=e??""},beforeUpdate(i,{value:e,modifiers:{lazy:t,trim:n,number:r}},s){if(i._assign=yo(s),i.composing||document.activeElement===i&&i.type!=="range"&&(t||n&&i.value.trim()===e||(r||i.type==="number")&&mo(i.value)===e))return;const o=e??"";i.value!==o&&(i.value=o)}},ho={deep:!0,created(i,{value:e,modifiers:{number:t}},n){const r=Lo(e);Mi(i,"change",()=>{const s=Array.prototype.filter.call(i.options,o=>o.selected).map(o=>t?mo(wo(o)):wo(o));i._assign(i.multiple?r?new Set(s):s:s[0])}),i._assign=yo(n)},mounted(i,{value:e}){mh(i,e)},beforeUpdate(i,e,t){i._assign=yo(t)},updated(i,{value:e}){mh(i,e)}};function mh(i,e){const t=i.multiple;if(!(t&&!Fe(e)&&!Lo(e))){for(let n=0,r=i.options.length;n<r;n++){const s=i.options[n],o=wo(s);if(t)Fe(e)?s.selected=Ww(e,o)>-1:s.selected=e.has(o);else if(Io(wo(s),e)){i.selectedIndex!==n&&(i.selectedIndex=n);return}}!t&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function wo(i){return"_value"in i?i._value:i.value}const QS=Tt({patchProp:ZS},FS);let gh;function e1(){return gh||(gh=pS(QS))}const Ho=(...i)=>{const e=e1().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=t1(n);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function t1(i){return St(i)?document.querySelector(i):i}const n1={hab_arg_l_01_macro:{name:"Argon L 居住区",race:"argon",capacity:1e3},hab_arg_m_01_macro:{name:"Argon M 居住区",race:"argon",capacity:500},hab_arg_s_01_macro:{name:"Argon S 居住区",race:"argon",capacity:250},hab_bor_l_01_macro:{name:"Boron L 绿洲",race:"boron",capacity:1e3},hab_bor_m_01_macro:{name:"Boron M 绿洲",race:"boron",capacity:500},hab_bor_s_01_macro:{name:"Boron S 绿洲",race:"boron",capacity:250},hab_par_l_01_macro:{name:"Paranid L 穹顶",race:"paranid",capacity:999},hab_par_m_01_macro:{name:"Paranid M 穹顶",race:"paranid",capacity:666},hab_par_m_02_macro:{name:"Paranid M 穹顶",race:"paranid",capacity:488},hab_par_s_01_macro:{name:"Paranid S 穹顶",race:"paranid",capacity:333},hab_par_s_02_macro:{name:"Paranid S 穹顶",race:"paranid",capacity:243},hab_par_s_03_macro:{name:"Paranid S 穹顶",race:"paranid",capacity:123},hab_pir_l_01_macro:{name:"Argon L 宿舍",race:"argon",capacity:1e3},hab_pir_m_01_macro:{name:"Argon M 宿舍",race:"argon",capacity:500},hab_pir_s_01_macro:{name:"Argon S 宿舍",race:"argon",capacity:250},hab_spl_l_01_macro:{name:"Split L 客厅",race:"split",capacity:1e3},hab_spl_m_01_macro:{name:"Split M 客厅",race:"split",capacity:500},hab_spl_s_01_macro:{name:"Split S 客厅",race:"split",capacity:250},hab_tel_l_01_macro:{name:"Teladi L 生物群落",race:"teladi",capacity:1e3},hab_tel_m_01_macro:{name:"Teladi M 生物群落",race:"teladi",capacity:500},hab_tel_s_01_macro:{name:"Teladi S 生物群落",race:"teladi",capacity:250},hab_ter_l_01_macro:{name:"Terran L 生活舱室",race:"terran",capacity:500},hab_ter_m_01_macro:{name:"Terran M 生活舱室",race:"terran",capacity:250},hab_ter_s_01_macro:{name:"Terran S 生活舱室",race:"terran",capacity:100}},i1={prod_arg_foodrations_macro:{name:"食品配给产线",production_queue:[{ware:"foodrations",method:"argon"}],max_workforce:90},prod_arg_meat_macro:{name:"食用肉产线",production_queue:[{ware:"meat",method:"argon"}],max_workforce:75},prod_arg_medicalsupplies_macro:{name:"Argon 医疗物资产线",production_queue:[{ware:"medicalsupplies"}],max_workforce:90},prod_arg_spacefuel_macro:{name:"太空燃料产线",production_queue:[{ware:"spacefuel",method:"argon"}],max_workforce:225},prod_arg_wheat_macro:{name:"小麦产线",production_queue:[{ware:"wheat",method:"argon"}],max_workforce:75},prod_bor_bofu_macro:{name:"Bo腐产线",production_queue:[{ware:"bofu"}],max_workforce:125},prod_bor_bogas_macro:{name:"Bo气产线",production_queue:[{ware:"bogas"}],max_workforce:100},prod_bor_medicalsupplies_macro:{name:"Boron 医疗物资产线",production_queue:[{ware:"medicalsupplies",method:"boron"}],max_workforce:90},prod_bor_plankton_macro:{name:"浮游生物产线",production_queue:[{ware:"plankton"}],max_workforce:40},prod_gen_advancedcomposites_macro:{name:"先进复合材料产线",production_queue:[{ware:"advancedcomposites"}],max_workforce:315},prod_gen_advancedelectronics_macro:{name:"先进电子设备产线",production_queue:[{ware:"advancedelectronics"}],max_workforce:540},prod_gen_antimattercells_macro:{name:"反物质单元产线",production_queue:[{ware:"antimattercells"}],max_workforce:180},prod_gen_antimatterconverters_macro:{name:"反物质转换器产线",production_queue:[{ware:"antimatterconverters"}],max_workforce:1080},prod_gen_claytronics_macro:{name:"电子黏土产线",production_queue:[{ware:"claytronics"}],max_workforce:1215},prod_gen_dronecomponents_macro:{name:"无人机组件产线",production_queue:[{ware:"dronecomponents"}],max_workforce:675},prod_gen_energycells_macro:{name:"能量电池产线",production_queue:[{ware:"energycells"}],max_workforce:90},prod_gen_engineparts_macro:{name:"引擎部件产线",production_queue:[{ware:"engineparts"}],max_workforce:225},prod_gen_fieldcoils_macro:{name:"励磁线圈产线",production_queue:[{ware:"fieldcoils"}],max_workforce:810},prod_gen_graphene_macro:{name:"石墨产线",production_queue:[{ware:"graphene"}],max_workforce:180},prod_gen_hullparts_macro:{name:"船体部件产线",production_queue:[{ware:"hullparts"}],max_workforce:270},prod_gen_microchips_macro:{name:"微芯片产线",production_queue:[{ware:"microchips"}],max_workforce:450},prod_gen_missilecomponents_macro:{name:"导弹部件产线",production_queue:[{ware:"missilecomponents"}],max_workforce:22},prod_gen_plasmaconductors_macro:{name:"等离子导体产线",production_queue:[{ware:"plasmaconductors"}],max_workforce:225},prod_gen_quantumtubes_macro:{name:"量子管产线",production_queue:[{ware:"quantumtubes"}],max_workforce:225},prod_gen_refinedmetals_macro:{name:"精炼金属产线",production_queue:[{ware:"refinedmetals"}],max_workforce:225},prod_gen_scanningarrays_macro:{name:"扫描阵列产线",production_queue:[{ware:"scanningarrays"}],max_workforce:315},prod_gen_scrap_recycler_macro:{name:"废料再生设施",production_queue:[{ware:"claytronics",method:"recycling"},{ware:"hullparts",method:"recycling"}],max_workforce:1250},prod_gen_shieldcomponents_macro:{name:"护盾部件产线",production_queue:[{ware:"shieldcomponents"}],max_workforce:225},prod_gen_siliconwafers_macro:{name:"硅晶片产线",production_queue:[{ware:"siliconwafers"}],max_workforce:225},prod_gen_smartchips_macro:{name:"智能芯片产线",production_queue:[{ware:"smartchips"}],max_workforce:60},prod_gen_spices_macro:{name:"香料产线",production_queue:[{ware:"spices"}],max_workforce:60},prod_gen_superfluidcoolant_macro:{name:"超流体冷却剂产线",production_queue:[{ware:"superfluidcoolant"}],max_workforce:180},prod_gen_turretcomponents_macro:{name:"炮塔部件产线",production_queue:[{ware:"turretcomponents"}],max_workforce:225},prod_gen_water_macro:{name:"水产线",production_queue:[{ware:"water"}],max_workforce:180},prod_gen_weaponcomponents_macro:{name:"武器部件产线",production_queue:[{ware:"weaponcomponents"}],max_workforce:225},prod_par_majadust_macro:{name:"艳耀星尘产线",production_queue:[{ware:"majadust",method:"paranid"}],max_workforce:123},prod_par_majasnails_macro:{name:"艳耀蜗牛产线",production_queue:[{ware:"majasnails",method:"paranid"}],max_workforce:175},prod_par_medicalsupplies_macro:{name:"Paranid 医疗物资产线",production_queue:[{ware:"medicalsupplies",method:"paranid"}],max_workforce:90},prod_par_sojabeans_macro:{name:"白豆产线",production_queue:[{ware:"sojabeans",method:"paranid"}],max_workforce:175},prod_par_sojahusk_macro:{name:"白豆荚产线",production_queue:[{ware:"sojahusk",method:"paranid"}],max_workforce:99},prod_spl_cheltmeat_macro:{name:"钳鱼产线",production_queue:[{ware:"cheltmeat"}],max_workforce:90},prod_spl_medicalsupplies_macro:{name:"Split 医疗物资产线",production_queue:[{ware:"medicalsupplies",method:"split"}],max_workforce:90},prod_spl_scruffinfruit_macro:{name:"颈鳍果产线",production_queue:[{ware:"scruffinfruits"}],max_workforce:90},prod_tel_advancedcomposites_macro:{name:"Teladi 先进复合材料产线",production_queue:[{ware:"advancedcomposites",method:"teladi"}],max_workforce:315},prod_tel_engineparts_macro:{name:"Teladi 引擎部件产线",production_queue:[{ware:"engineparts",method:"teladi"}],max_workforce:225},prod_tel_hullparts_macro:{name:"Teladi 船体部件产线",production_queue:[{ware:"hullparts",method:"teladi"}],max_workforce:270},prod_tel_medicalsupplies_macro:{name:"Teladi 医疗物资产线",production_queue:[{ware:"medicalsupplies",method:"teladi"}],max_workforce:90},prod_tel_nostropoil_macro:{name:"滋养油产线",production_queue:[{ware:"nostropoil",method:"teladi"}],max_workforce:120},prod_tel_scanningarrays_macro:{name:"Teladi 扫描阵列产线",production_queue:[{ware:"scanningarrays",method:"teladi"}],max_workforce:315},prod_tel_spaceweed_macro:{name:"太空烟草产线",production_queue:[{ware:"spaceweed",method:"teladi"}],max_workforce:90},prod_tel_sunriseflowers_macro:{name:"日出花产线",production_queue:[{ware:"sunriseflowers",method:"teladi"}],max_workforce:50},prod_tel_swampplant_macro:{name:"沼泽植物产线",production_queue:[{ware:"swampplant",method:"teladi"}],max_workforce:50},prod_tel_teladianium_macro:{name:"T材料产线",production_queue:[{ware:"teladianium",method:"teladi"}],max_workforce:225},prod_ter_computronicsubstrate_macro:{name:"电子基质生产线",production_queue:[{ware:"computronicsubstrate"}],max_workforce:1500},prod_ter_energycells_macro:{name:"Terran 能量电池产线",production_queue:[{ware:"energycells",method:"terran"}],max_workforce:45},prod_ter_medicalsupplies_macro:{name:"Terran 医疗物资产线",production_queue:[{ware:"medicalsupplies",method:"terran"}],max_workforce:90},prod_ter_metallicmicrolattice_macro:{name:"金属微晶产线",production_queue:[{ware:"metallicmicrolattice"}],max_workforce:120},prod_ter_mre_macro:{name:"地球即食餐产线",production_queue:[{ware:"terranmre"}],max_workforce:135},prod_ter_proteinpaste_macro:{name:"蛋白糊产线",production_queue:[{ware:"proteinpaste"}],max_workforce:180},prod_ter_scrap_recycler_macro:{name:"Terran 废料再生设施",production_queue:[{ware:"computronicsubstrate",method:"recycling"},{ware:"siliconcarbide",method:"recycling"}],max_workforce:1250},prod_ter_siliconcarbide_macro:{name:"碳化硅产线",production_queue:[{ware:"siliconcarbide"}],max_workforce:750},prod_ter_stimulants_macro:{name:"兴奋剂产线",production_queue:[{ware:"stimulants"}],max_workforce:300}},r1={storage_arg_l_container_01_macro:{name:"Argon L 集装仓储",cargo:{max:1e6,tags:"container"}},storage_arg_l_liquid_01_macro:{name:"Argon L 液体仓储",cargo:{max:1e6,tags:"liquid"}},storage_arg_l_solid_01_macro:{name:"Argon L 固体仓储",cargo:{max:1e6,tags:"solid"}},storage_arg_l_tradestation_01_macro:{name:"Argon L 通用仓储",cargo:{max:3e5,tags:"container liquid solid"}},storage_arg_m_container_01_macro:{name:"Argon M 集装仓储",cargo:{max:1e5,tags:"container"}},storage_arg_m_liquid_01_macro:{name:"Argon M 液体仓储",cargo:{max:5e5,tags:"liquid"}},storage_arg_m_solid_01_macro:{name:"Argon M 固体仓储",cargo:{max:5e5,tags:"solid"}},storage_arg_s_container_01_macro:{name:"Argon S 集装仓储",cargo:{max:25e3,tags:"container"}},storage_arg_s_liquid_01_macro:{name:"Argon S 液体仓储",cargo:{max:1e5,tags:"liquid"}},storage_arg_s_solid_01_macro:{name:"Argon S 固体仓储",cargo:{max:1e5,tags:"solid"}},storage_bor_l_container_01_macro:{name:"Boron L 集装仓储",cargo:{max:1e6,tags:"container"}},storage_bor_l_liquid_01_macro:{name:"Boron L 液体仓储",cargo:{max:1e6,tags:"liquid"}},storage_bor_l_solid_01_macro:{name:"Boron L 固体仓储",cargo:{max:1e6,tags:"solid"}},storage_bor_m_container_01_macro:{name:"Boron M 集装仓储",cargo:{max:1e5,tags:"container"}},storage_bor_m_liquid_01_macro:{name:"Boron M 液体仓储",cargo:{max:5e5,tags:"liquid"}},storage_bor_m_solid_01_macro:{name:"Boron M 固体仓储",cargo:{max:5e5,tags:"solid"}},storage_bor_s_container_01_macro:{name:"Boron S 集装仓储",cargo:{max:25e3,tags:"container"}},storage_bor_s_liquid_01_macro:{name:"Boron S 液体仓储",cargo:{max:1e5,tags:"liquid"}},storage_bor_s_solid_01_macro:{name:"Boron S 固体仓储",cargo:{max:1e5,tags:"solid"}},storage_par_l_container_01_macro:{name:"Paranid L 集装仓储",cargo:{max:1e6,tags:"container"}},storage_par_l_liquid_01_macro:{name:"Paranid L 液体仓储",cargo:{max:1e6,tags:"liquid"}},storage_par_l_solid_01_macro:{name:"Paranid L 固体仓储",cargo:{max:1e6,tags:"solid"}},storage_par_m_container_01_macro:{name:"Paranid M 集装仓储",cargo:{max:1e5,tags:"container"}},storage_par_m_liquid_01_macro:{name:"Paranid M 液体仓储",cargo:{max:5e5,tags:"liquid"}},storage_par_m_solid_01_macro:{name:"Paranid M 固体仓储",cargo:{max:5e5,tags:"solid"}},storage_par_s_container_01_macro:{name:"Paranid S 集装仓储",cargo:{max:25e3,tags:"container"}},storage_par_s_liquid_01_macro:{name:"Paranid S 液体仓储",cargo:{max:1e5,tags:"liquid"}},storage_par_s_solid_01_macro:{name:"Paranid S 固体仓储",cargo:{max:1e5,tags:"solid"}},storage_pir_l_condensate_01_macro:{name:"戍子护盾发生器",cargo:{max:50,tags:"condensate"}},storage_pir_s_condensate_01_macro:{name:"冷凝态封装厂",cargo:{max:1e4,tags:"condensate"}},storage_spl_l_container_01_macro:{name:"Split L 集装仓储",cargo:{max:1e6,tags:"container"}},storage_spl_l_liquid_01_macro:{name:"Split L 液体仓储",cargo:{max:1e6,tags:"liquid"}},storage_spl_l_solid_01_macro:{name:"Split L 固体仓储",cargo:{max:1e6,tags:"solid"}},storage_spl_m_container_01_macro:{name:"Split M 集装仓储",cargo:{max:1e5,tags:"container"}},storage_spl_m_liquid_01_macro:{name:"Split M 液体仓储",cargo:{max:5e5,tags:"liquid"}},storage_spl_m_solid_01_macro:{name:"Split M 固体仓储",cargo:{max:5e5,tags:"solid"}},storage_spl_s_container_01_macro:{name:"Split S 集装仓储",cargo:{max:25e3,tags:"container"}},storage_spl_s_liquid_01_macro:{name:"Split S 液体仓储",cargo:{max:1e5,tags:"liquid"}},storage_spl_s_solid_01_macro:{name:"Split S 固体仓储",cargo:{max:1e5,tags:"solid"}},storage_tel_l_container_01_macro:{name:"Teladi L 集装仓储",cargo:{max:1e6,tags:"container"}},storage_tel_l_liquid_01_macro:{name:"Teladi L 液体仓储",cargo:{max:1e6,tags:"liquid"}},storage_tel_l_solid_01_macro:{name:"Teladi L 固体仓储",cargo:{max:1e6,tags:"solid"}},storage_tel_m_container_01_macro:{name:"Teladi M 集装仓储",cargo:{max:1e5,tags:"container"}},storage_tel_m_liquid_01_macro:{name:"Teladi M 液体仓储",cargo:{max:5e5,tags:"liquid"}},storage_tel_m_solid_01_macro:{name:"Teladi M 固体仓储",cargo:{max:5e5,tags:"solid"}},storage_tel_s_container_01_macro:{name:"Teladi S 集装仓储",cargo:{max:25e3,tags:"container"}},storage_tel_s_liquid_01_macro:{name:"Teladi S 液体仓储",cargo:{max:1e5,tags:"liquid"}},storage_tel_s_solid_01_macro:{name:"Teladi S 固体仓储",cargo:{max:1e5,tags:"solid"}},storage_ter_l_container_01_macro:{name:"Terran L 集装仓储",cargo:{max:1e6,tags:"container"}},storage_ter_l_liquid_01_macro:{name:"Terran L 液体仓储",cargo:{max:1e6,tags:"liquid"}},storage_ter_l_solid_01_macro:{name:"Terran L 固体仓储",cargo:{max:1e6,tags:"solid"}},storage_ter_m_container_01_macro:{name:"Terran M 集装仓储",cargo:{max:5e5,tags:"container"}},storage_ter_m_container_tradestation_01_macro:{name:"Terran M 贸易空间站集装仓储",cargo:{max:3e5,tags:"container"}},storage_ter_m_liquid_01_macro:{name:"Terran M 液体仓储",cargo:{max:5e5,tags:"liquid"}},storage_ter_m_solid_01_macro:{name:"Terran M 固体仓储",cargo:{max:5e5,tags:"solid"}},storage_ter_s_container_01_macro:{name:"Terran S 集装仓储",cargo:{max:1e5,tags:"container"}},storage_ter_s_liquid_01_macro:{name:"Terran S 液体仓储",cargo:{max:1e5,tags:"liquid"}},storage_ter_s_liquid_tradestation_01_macro:{name:"Terran S 贸易空间站液体仓储",cargo:{max:1e5,tags:"liquid"}},storage_ter_s_solid_01_macro:{name:"Terran S 固体仓储",cargo:{max:1e5,tags:"solid"}}},ct={habitat:n1,production:i1,storage:r1};let Qs,eo;function s1(){if(Qs)return Qs;console.log("Parsing module data (return array)");const i=[],e=[],t=[];for(const n in ct.habitat)i.push({id:n,name:ct.habitat[n].name,race:ct.habitat[n].race,capacity:ct.habitat[n].capacity});for(const n in ct.production)e.push({id:n,name:ct.production[n].name,productionQueue:ct.production[n].production_queue.map(r=>({ware:r.ware,method:r.method?r.method:"default"})),maxWorkforce:ct.production[n].max_workforce});for(const n in ct.storage)t.push({id:n,name:ct.storage[n].name,cargo:{max:ct.storage[n].cargo.max,tags:ct.storage[n].cargo.tags}});return Qs={habitat:i,production:e,storage:t},Qs}function pl(){if(eo)return eo;console.log("Parsing module data (return map)");const i=new Map,e=new Map,t=new Map;for(const n in ct.habitat)i.set(n,{id:n,name:ct.habitat[n].name,race:ct.habitat[n].race,capacity:ct.habitat[n].capacity});for(const n in ct.production)e.set(n,{id:n,name:ct.production[n].name,productionQueue:ct.production[n].production_queue.map(r=>({ware:r.ware,method:r.method?r.method:"default"})),maxWorkforce:ct.production[n].max_workforce});for(const n in ct.storage)t.set(n,{id:n,name:ct.storage[n].name,cargo:{max:ct.storage[n].cargo.max,tags:ct.storage[n].cargo.tags}});return eo={habitat:i,production:e,storage:t},eo}const o1={name:"先进复合材料",transport:"container",volume:32,group:"hightech",price:{min:"432",average:"540",max:"648"},production:{default:{time:300,amount:54,effect:{work:.34},input:{energycells:50,graphene:80,refinedmetals:80}},teladi:{time:300,amount:54,effect:{work:.34},input:{energycells:50,graphene:80,teladianium:58}}}},a1={name:"先进电子设备",transport:"container",volume:30,group:"shiptech",price:{min:"710",average:"1014",max:"1318"},production:{default:{time:720,amount:54,effect:{work:.36},input:{energycells:60,microchips:44,quantumtubes:20}}}},l1={name:"反物质单元",transport:"container",volume:18,group:"refined",price:{min:"121",average:"202",max:"282"},production:{default:{time:120,amount:99,effect:{work:.35},input:{energycells:100,hydrogen:320}}}},c1={name:"反物质转换器",transport:"container",volume:10,group:"shiptech",price:{min:"248",average:"354",max:"461"},production:{default:{time:300,amount:133,effect:{work:.39},input:{advancedcomposites:20,energycells:80,microchips:30}}}},u1={name:"电子黏土",transport:"container",volume:24,group:"shiptech",price:{min:"1734",average:"2040",max:"2346"},production:{default:{time:900,amount:108,effect:{work:.34},input:{antimattercells:100,energycells:140,microchips:160,quantumtubes:100}},recycling:{time:300,amount:60,effect:{work:.34},input:{energycells:12e3,scrapmetal:300}}}},h1={name:"无人机组件",transport:"container",volume:30,group:"shiptech",price:{min:"685",average:"914",max:"1142"},production:{default:{time:1200,amount:105,effect:{work:.43},input:{energycells:60,engineparts:20,hullparts:20,microchips:20,scanningarrays:40}}}},d1={name:"能量电池",transport:"container",volume:1,group:"energy",price:{min:"10",average:"16",max:"22"},production:{default:{time:60,amount:175,effect:{sunlight:1,work:.43}},terran:{time:60,amount:50,effect:{sunlight:1,work:.43}}}},f1={name:"引擎部件",transport:"container",volume:15,group:"hightech",price:{min:"128",average:"182",max:"237"},production:{default:{time:900,amount:208,effect:{work:.47},input:{antimattercells:80,energycells:60,refinedmetals:96}},teladi:{time:900,amount:208,effect:{work:.47},input:{antimattercells:80,energycells:60,teladianium:70}}}},p1={name:"励磁线圈",transport:"container",volume:15,group:"shiptech",price:{min:"247",average:"412",max:"576"},production:{default:{time:600,amount:175,effect:{work:.43},input:{energycells:60,plasmaconductors:40,quantumtubes:43}}}},m1={name:"食品配给",transport:"container",volume:1,group:"food",price:{min:"12",average:"21",max:"29"},production:{argon:{time:240,amount:460,effect:{work:.35},input:{energycells:100,meat:40,spices:40,wheat:40}}}},g1={name:"石墨",transport:"container",volume:20,group:"refined",price:{min:"100",average:"166",max:"233"},production:{default:{time:240,amount:96,effect:{work:.46},input:{energycells:80,methane:320}}}},_1={name:"氦",transport:"liquid",volume:6,group:"gases",price:{min:"37",average:"44",max:"51"}},x1={name:"船体部件",transport:"container",volume:12,group:"hightech",price:{min:"146",average:"209",max:"272"},production:{default:{time:900,amount:294,effect:{work:.37},input:{energycells:80,graphene:40,refinedmetals:280}},recycling:{time:300,amount:200,effect:{work:.37},input:{energycells:3500,scrapmetal:75}},teladi:{time:900,amount:294,effect:{work:.37},input:{energycells:80,graphene:40,teladianium:204}}}},v1={name:"氢",transport:"liquid",volume:6,group:"gases",price:{min:"49",average:"58",max:"67"}},y1={name:"冰",transport:"solid",volume:8,group:"ice",price:{min:"26",average:"30",max:"35"}},w1={name:"艳耀星尘",transport:"container",volume:6,group:"pharmaceutical",price:{min:"94",average:"208",max:"323"},production:{paranid:{time:600,amount:64,effect:{work:.75},input:{energycells:40,majasnails:120,spices:60}}}},M1={name:"艳耀蜗牛",transport:"container",volume:6,group:"agricultural",price:{min:"35",average:"58",max:"81"},production:{paranid:{time:450,amount:146,effect:{work:.59},input:{energycells:40,water:100}}}},S1={name:"食用肉",transport:"container",volume:6,group:"agricultural",price:{min:"29",average:"48",max:"68"},production:{argon:{time:450,amount:290,effect:{work:.33},input:{energycells:80,water:100}}}},b1={name:"医疗物资",transport:"container",volume:2,group:"pharmaceutical",price:{min:"43",average:"66",max:"89"},production:{default:{time:300,amount:208,effect:{work:.28},input:{energycells:100,spices:40,water:60,wheat:30}},paranid:{time:300,amount:208,effect:{work:.28},input:{energycells:100,sojabeans:10,spices:40,water:60}},teladi:{time:300,amount:208,effect:{work:.28},input:{energycells:100,spices:40,sunriseflowers:12,water:60}},boron:{time:300,amount:208,effect:{work:.28},input:{energycells:100,plankton:95,water:60}},split:{time:300,amount:208,effect:{work:.28},input:{energycells:100,scruffinfruits:30,spices:60,water:60}},terran:{time:300,amount:140,effect:{work:.59},input:{energycells:100,ice:50,proteinpaste:24}}}},E1={name:"甲烷",transport:"liquid",volume:6,group:"gases",price:{min:"41",average:"48",max:"55"}},A1={name:"微芯片",transport:"container",volume:22,group:"hightech",price:{min:"805",average:"948",max:"1090"},production:{default:{time:600,amount:72,effect:{work:.36},input:{energycells:50,siliconwafers:200}}}},C1={name:"导弹部件",transport:"container",volume:2,group:"shiptech",price:{min:"6",average:"9",max:"13"},production:{default:{time:900,amount:281,effect:{work:.53},input:{advancedcomposites:2,energycells:20,hullparts:2}}}},T1={name:"N矿",transport:"solid",volume:10,group:"minerals",price:{min:"434",average:"510",max:"587"}},P1={name:"滋养油",transport:"container",volume:1,group:"food",price:{min:"20",average:"34",max:"47"},production:{teladi:{time:300,amount:500,effect:{work:.2},input:{energycells:100,spices:40,sunriseflowers:40,water:60}}}},L1={name:"金属矿石",transport:"solid",volume:10,group:"minerals",price:{min:"43",average:"50",max:"58"}},R1={name:"等离子导体",transport:"container",volume:32,group:"hightech",price:{min:"769",average:"1026",max:"1282"},production:{default:{time:900,amount:44,effect:{work:.43},input:{energycells:60,graphene:96,superfluidcoolant:140}}}},I1={name:"量子管",transport:"container",volume:22,group:"hightech",price:{min:"225",average:"300",max:"375"},production:{default:{time:720,amount:94,effect:{work:.53},input:{energycells:40,graphene:116,superfluidcoolant:30}}}},D1={name:"精炼金属",transport:"container",volume:14,group:"refined",price:{min:"89",average:"148",max:"207"},production:{default:{time:150,amount:88,effect:{work:.43},input:{energycells:90,ore:240}}}},O1={name:"扫描阵列",transport:"container",volume:38,group:"hightech",price:{min:"842",average:"1053",max:"1264"},production:{default:{time:600,amount:36,effect:{work:.38},input:{energycells:60,refinedmetals:100,siliconwafers:60}},teladi:{time:600,amount:36,effect:{work:.38},input:{energycells:60,siliconwafers:60,teladianium:73}}}},N1={name:"废金属",transport:"solid",volume:10,group:"refined",price:{min:"318",average:"375",max:"431"},production:{processing:{time:60,amount:1,input:{energycells:10,rawscrap:1}}}},U1={name:"护盾部件",transport:"container",volume:10,group:"shiptech",price:{min:"113",average:"188",max:"264"},production:{default:{time:1200,amount:193,effect:{work:.43},input:{energycells:70,plasmaconductors:20,quantumtubes:20}}}},F1={name:"硅",transport:"solid",volume:10,group:"minerals",price:{min:"111",average:"130",max:"150"}},z1={name:"硅晶片",transport:"container",volume:18,group:"refined",price:{min:"180",average:"299",max:"419"},production:{default:{time:180,amount:107,effect:{work:.37},input:{energycells:90,silicon:240}}}},k1={name:"智能芯片",transport:"container",volume:2,group:"shiptech",price:{min:"46",average:"57",max:"69"},production:{default:{time:600,amount:143,effect:{work:.37},input:{energycells:50,siliconwafers:20}}}},B1={name:"白豆",transport:"container",volume:5,group:"agricultural",price:{min:"40",average:"67",max:"93"},production:{paranid:{time:300,amount:104,effect:{work:.48},input:{energycells:30,water:80}}}},H1={name:"白豆荚",transport:"container",volume:1,group:"food",price:{min:"19",average:"32",max:"45"},production:{paranid:{time:300,amount:350,effect:{work:.37},input:{energycells:80,majasnails:50,sojabeans:40,spices:20}}}},V1={name:"太空燃料",transport:"container",volume:2,group:"pharmaceutical",price:{min:"60",average:"133",max:"207"},production:{argon:{time:480,amount:98,effect:{work:.69},input:{energycells:40,water:100,wheat:80}}}},G1={name:"太空烟草",transport:"container",volume:3,group:"pharmaceutical",price:{min:"75",average:"166",max:"257"},production:{teladi:{time:600,amount:183,effect:{work:.7},input:{energycells:140,spices:40,swampplant:120}}}},W1={name:"香料",transport:"container",volume:3,group:"agricultural",price:{min:"12",average:"20",max:"28"},production:{default:{time:600,amount:500,effect:{work:.4},input:{energycells:40,water:80}}}},q1={name:"日出花",transport:"container",volume:5,group:"agricultural",price:{min:"48",average:"80",max:"112"},production:{teladi:{time:300,amount:100,effect:{work:.28},input:{energycells:30,water:80}}}},X1={name:"超流体冷却剂",transport:"container",volume:16,group:"refined",price:{min:"90",average:"150",max:"211"},production:{default:{time:240,amount:95,effect:{work:.49},input:{energycells:60,helium:320}}}},$1={name:"沼泽植物",transport:"container",volume:6,group:"agricultural",price:{min:"50",average:"84",max:"117"},production:{teladi:{time:450,amount:120,effect:{work:.59},input:{energycells:40,water:100}}}},j1={name:"T材料",transport:"container",volume:16,group:"refined",price:{min:"121",average:"202",max:"283"},production:{teladi:{time:120,amount:70,effect:{work:.43},input:{energycells:45,ore:280}}}},Y1={name:"炮塔部件",transport:"container",volume:20,group:"shiptech",price:{min:"164",average:"273",max:"383"},production:{default:{time:1800,amount:170,effect:{work:.53},input:{energycells:60,microchips:20,quantumtubes:20,scanningarrays:10}}}},Z1={name:"水",transport:"container",volume:6,group:"water",price:{min:"32",average:"53",max:"74"},production:{default:{time:120,amount:193,effect:{work:.43},input:{energycells:60,ice:320}}}},K1={name:"武器部件",transport:"container",volume:20,group:"shiptech",price:{min:"171",average:"285",max:"399"},production:{default:{time:1800,amount:170,effect:{work:.53},input:{energycells:60,hullparts:20,plasmaconductors:30}}}},J1={name:"小麦",transport:"container",volume:4,group:"agricultural",price:{min:"19",average:"31",max:"44"},production:{argon:{time:300,amount:310,effect:{work:.28},input:{energycells:60,water:80}}}},Q1={name:"繁忙的工作单元",transport:"workunit",volume:1,price:{min:"68",average:"68",max:"68"},production:{default:{time:600,amount:200,input:{foodrations:75,medicalsupplies:45}},paranid:{time:600,amount:200,input:{medicalsupplies:45,sojahusk:48}},teladi:{time:600,amount:200,input:{medicalsupplies:45,nostropoil:38}},boron:{time:600,amount:200,input:{bofu:15,medicalsupplies:33,water:27}},split:{time:600,amount:200,input:{cheltmeat:17,medicalsupplies:45,scruffinfruits:23}},terran:{time:600,amount:200,input:{medicalsupplies:45,terranmre:43}}}},eb={name:"闲置的工作单元",transport:"workunit",volume:1,price:{min:"45",average:"45",max:"45"},production:{default:{time:600,amount:200,input:{foodrations:50,medicalsupplies:30}},paranid:{time:600,amount:200,input:{medicalsupplies:30,sojahusk:32}},teladi:{time:600,amount:200,input:{medicalsupplies:30,nostropoil:25}},boron:{time:600,amount:200,input:{bofu:10,medicalsupplies:22,water:18}},split:{time:600,amount:200,input:{cheltmeat:13,medicalsupplies:30,scruffinfruits:10}},terran:{time:600,amount:200,input:{medicalsupplies:30,terranmre:28}}}},tb={name:"Bo腐",transport:"container",volume:4,group:"food",price:{min:"61",average:"101",max:"142"},production:{default:{time:240,amount:82,effect:{work:.38},input:{bogas:40,energycells:40,plankton:120}}}},nb={name:"Bo气",transport:"container",volume:4,group:"refined",price:{min:"44",average:"73",max:"102"},production:{default:{time:150,amount:110,effect:{work:.46},input:{energycells:40,water:100}}}},ib={name:"浮游生物",transport:"container",volume:1,group:"agricultural",price:{min:"11",average:"18",max:"25"},production:{default:{time:400,amount:275,effect:{work:.4},input:{energycells:20,water:50}}}},rb={name:"钳鱼肉",transport:"container",volume:7,group:"agricultural",price:{min:"31",average:"51",max:"72"},production:{default:{time:450,amount:209,effect:{work:.6},input:{energycells:50,water:120}}}},sb={name:"颈鳍果",transport:"container",volume:6,group:"agricultural",price:{min:"17",average:"28",max:"40"},production:{default:{time:300,amount:255,effect:{work:.53},input:{energycells:30,water:80}}}},ob={name:"电子基质",transport:"container",volume:50,group:"hightech",price:{min:"7452",average:"8280",max:"9108"},production:{default:{time:600,amount:98,effect:{work:.1},input:{energycells:4e3,hydrogen:2e3,ore:3e3,silicon:3e3}},recycling:{time:300,amount:50,effect:{work:.1},input:{energycells:12500,scrapmetal:1e3}}}},ab={name:"金属微晶",transport:"container",volume:1,group:"hightech",price:{min:"42",average:"50",max:"57"},production:{default:{time:180,amount:190,effect:{work:.2},input:{energycells:50,helium:130,ore:50}}}},lb={name:"蛋白糊",transport:"container",volume:4,group:"agricultural",price:{min:"57",average:"96",max:"134"},production:{default:{time:300,amount:219,effect:{work:.3},input:{energycells:80,ice:80,methane:200}}}},cb={name:"碳化硅",transport:"container",volume:20,group:"hightech",price:{min:"1202",average:"1414",max:"1627"},production:{default:{time:300,amount:48,effect:{work:.2},input:{energycells:200,metallicmicrolattice:2,methane:400,silicon:300}},recycling:{time:300,amount:60,effect:{work:.2},input:{energycells:4e3,scrapmetal:250}}}},ub={name:"兴奋剂",transport:"container",volume:12,group:"pharmaceutical",price:{min:"153",average:"340",max:"527"},production:{default:{time:300,amount:98,effect:{work:.65},input:{energycells:80,helium:400,silicon:20}}}},hb={name:"Terran即食餐",transport:"container",volume:2,group:"food",price:{min:"32",average:"54",max:"75"},production:{default:{time:240,amount:175,effect:{work:.42},input:{energycells:60,proteinpaste:60}}}},db={name:"戍子",transport:"condensate",volume:10,price:{min:"22500",average:"25000",max:"27500"}},Mo={advancedcomposites:o1,advancedelectronics:a1,antimattercells:l1,antimatterconverters:c1,claytronics:u1,dronecomponents:h1,energycells:d1,engineparts:f1,fieldcoils:p1,foodrations:m1,graphene:g1,helium:_1,hullparts:x1,hydrogen:v1,ice:y1,majadust:w1,majasnails:M1,meat:S1,medicalsupplies:b1,methane:E1,microchips:A1,missilecomponents:C1,nividium:T1,nostropoil:P1,ore:L1,plasmaconductors:R1,quantumtubes:I1,refinedmetals:D1,scanningarrays:O1,scrapmetal:N1,shieldcomponents:U1,silicon:F1,siliconwafers:z1,smartchips:k1,sojabeans:B1,sojahusk:H1,spacefuel:V1,spaceweed:G1,spices:W1,sunriseflowers:q1,superfluidcoolant:X1,swampplant:$1,teladianium:j1,turretcomponents:Y1,water:Z1,weaponcomponents:K1,wheat:J1,workunit_busy:Q1,workunit_idle:eb,bofu:tb,bogas:nb,plankton:ib,cheltmeat:rb,scruffinfruits:sb,computronicsubstrate:ob,metallicmicrolattice:ab,proteinpaste:lb,siliconcarbide:cb,stimulants:ub,terranmre:hb,condensate:db};class qd{time;amount;effect;input;constructor(e,t,n,r){this.time=e,this.amount=t,this.effect=n,this.input=r}}class Xd{id;name;transport;volume;group;price;production;constructor(e,t,n,r,s,o,a){this.id=e,this.name=t,this.transport=n,this.volume=r,this.group=s,this.price=o,this.production=a}}let to,no;function us(){if(no)return no;console.log("Parsing ware data (return map)");const i=new Map;for(const e in Mo){const t=Mo[e],n=t.name,r=t.transport,s=t.volume,o=t.group;let a;try{a={min:Number(t.price.min),average:Number(t.price.average),max:Number(t.price.max)}}catch(u){throw console.error(n),u}const l=t.production,c=new Map;for(const u in l){const d=l[u],f=d.time,p=d.amount,g={work:0};d.effect&&d.effect.work&&(g.work=d.effect.work);const x=d.input,m=new Map;for(const h in x)m.set(h,x[h]);c.set(u,new qd(f,p,g,m))}i.set(e,new Xd(e,n,r,s,o,a,c))}return no=i,no}function fb(){if(to)return to;console.log("Parsing ware data (return array)");const i=[];for(const e in Mo){const t=Mo[e],n=t.name,r=t.transport,s=t.volume,o=t.group,a={min:Number(t.price.min),average:Number(t.price.average),max:Number(t.price.max)},l=t.production,c=new Map;for(const u in l){const d=l[u],f=d.time,p=d.amount,g={work:0};d.effect&&d.effect.work&&(g.work=d.effect.work);const x=d.input,m=new Map;for(const h in x)m.set(h,x[h]);c.set(u,new qd(f,p,g,m))}i.push(new Xd(e,n,r,s,o,a,c))}return to=i,to}class Xl{inputMap;outputMap;constructor(){this.inputMap=new Map,this.outputMap=new Map}addOutput(e,t){if(t<=0)throw new Error(`${Node.name}.${this.addOutput} requires parameter 'num' > 0. type = ${e}, num = ${t}`);if(this.inputMap.has(e)){const n=this.inputMap.get(e);n===t?this.inputMap.delete(e):n>t?this.inputMap.set(e,n-t):(this.inputMap.delete(e),this.outputMap.set(e,t-n))}else this.outputMap.has(e)?this.outputMap.set(e,this.outputMap.get(e)+t):this.outputMap.set(e,t)}removeOutput(e,t){if(t<=0)throw new Error(`${Node.name}.${this.removeOutput.name} requires parameter 'num' > 0. type = ${e}, num = ${t}`);if(this.outputMap.has(e)){const n=this.outputMap.get(e);if(t>n)throw new Error(`${Node.name}.${this.removeOutput.name} says that no more output can be removed. current output = ${n}, to remove = ${t}`);t===n?this.outputMap.delete(e):this.outputMap.set(e,n-t)}}addInput(e,t){if(t<=0)throw new Error(`${Node.name}.${this.addInput} requires parameter 'num' > 0. type = ${e}, num = ${t}`);if(this.outputMap.has(e)){const n=this.outputMap.get(e);n===t?this.outputMap.delete(e):n>t?this.outputMap.set(e,n-t):(this.outputMap.delete(e),this.inputMap.set(e,t-n))}else this.inputMap.has(e)?this.inputMap.set(e,this.inputMap.get(e)+t):this.inputMap.set(e,t)}removeInput(e,t){if(t<=0)throw new Error(`${Node.name}.${this.removeInput.name} requires parameter 'num' > 0. type = ${e}, num = ${t}`);if(this.inputMap.has(e)){const n=this.inputMap.get(e);if(t>n)throw new Error(`${Node.name}.${this.removeInput.name} says that no more input can be removed. current input = ${n}, to remove = ${t}`);t===n?this.inputMap.delete(e):this.inputMap.set(e,n-t)}}clear(){this.inputMap.clear(),this.outputMap.clear()}toStatisticsInfoString(){const e=us(),t=[];return t.push("输出"),this.outputMap.forEach((n,r)=>{n=Math.trunc(n*100)/100,t.push(`    ${e.get(r).name} x ${n} / 小时`)}),t.push("输入"),this.inputMap.forEach((n,r)=>{n=Math.trunc(n*100)/100,t.push(`    ${e.get(r).name} x ${n} / 小时`)}),t.join(`\r
`)}}class $d{moduleId;moduleCount;equation;moduleRef;wareRef;constructor(e,t,n){this.moduleId=e.id,this.moduleCount=t,this.equation=new Xl,this.moduleRef=e,this.wareRef=n}calculateInputOutput(e,t){this.equation.clear();const n=this.moduleRef.productionQueue.filter(o=>!e.has(o.ware)).map(o=>this.wareRef.get(o.ware).production.get(o.method).time).reduce((o,a)=>o+a,0);this.moduleRef.productionQueue.filter(o=>!e.has(o.ware)).forEach(o=>{const l=this.wareRef.get(o.ware).production.get(o.method);let c=!1;l.input.forEach((u,d)=>{e.has(d)&&(c=!0)}),!c&&(this.equation.addOutput(o.ware,l.amount*(1+t*l.effect.work)),l.input.forEach((u,d)=>this.equation.addInput(d,u)))});const s=3600/n*this.moduleCount;this.equation.inputMap.forEach((o,a,l)=>{l.set(a,o*s)}),this.equation.outputMap.forEach((o,a,l)=>{l.set(a,o*s)})}}class Vo{factoryName;bannedWares;equation;maxWorkforce;currentWorkforce;maxEfficiencyWorkforce;children;moduleRef;wareRef;constructor(e){this.factoryName=e,this.bannedWares=new Set,this.equation=new Xl,this.maxWorkforce=this.currentWorkforce=0,this.children=[],this.moduleRef=pl(),this.wareRef=us()}calculateInputOutput(){this.equation.clear(),this.maxEfficiencyWorkforce=this.children.map(t=>this.moduleRef.production.get(t.moduleId).maxWorkforce*t.moduleCount).reduce((t,n)=>t+n,0);let e=this.currentWorkforce/this.maxEfficiencyWorkforce;e>1&&(e=1),this.children.forEach(t=>{t.calculateInputOutput(this.bannedWares,e),t.equation.inputMap.forEach((n,r)=>this.equation.addInput(r,n)),t.equation.outputMap.forEach((n,r)=>this.equation.addOutput(r,n))})}static createFromFactoryData(e){const t=us(),n=pl(),r=new Vo(e.name),s=new Map;for(const c of e.productionModules)s.has(c)?s.set(c,s.get(c)+1):s.set(c,1);const o=new Map;for(const c of e.habitatModules)o.has(c)?o.set(c,o.get(c)+1):o.set(c,1);s.forEach((c,u)=>{r.children.push(new $d(n.production.get(u),c,t))});let a=0;o.forEach((c,u)=>a+=n.habitat.get(u).capacity*c),r.maxWorkforce=a,r.currentWorkforce=e.currentWorkforce;const l=new Set;return e.bannedWaresIdArray.forEach(c=>l.add(c)),r.bannedWares=l,r}}const Go=i=>(Ad("data-v-c60dace2"),i=i(),Cd(),i),pb=Go(()=>Ve("div",null,"工厂统计信息",-1)),mb={class:"workforce"},gb=["max"],_b=Go(()=>Ve("br",null,null,-1)),xb=Go(()=>Ve("br",null,null,-1)),vb={class:"banned-wares"},yb=["value"],wb=Go(()=>Ve("br",null,null,-1)),Mb=["onClick"],Sb={class:"statistics"},bb=ms({__name:"Statistics",props:{habitatModules:{},productionModules:{},storageModules:{}},setup(i,{expose:e}){const t=i,n=us(),r=pl(),s=st(0),o=st(0),a=st(0),l=st([]),c=st(fb()),u=st("");function d(){u.value&&(l.value.find(m=>m.id===u.value)||l.value.push(n.get(u.value)))}function f(m){l.value.splice(m,1)}const p=st("");let g;mr(t,()=>{g=new Vo("工厂名称（占位符）");for(const m of t.productionModules)g.children.push(new $d(r.production.get(m.moduleId),m.count,n));s.value=t.habitatModules.map(({moduleId:m,count:h})=>r.habitat.get(m).capacity*h).reduce((m,h)=>m+h,0),o.value=0,g.maxWorkforce=s.value,g.currentWorkforce=o.value,x(),a.value=g.maxEfficiencyWorkforce}),mr(o,()=>{g.currentWorkforce=o.value,x(),a.value=g.maxEfficiencyWorkforce}),mr(l,()=>{const m=new Set;for(const h of l.value)m.add(h.id);g.bannedWares=m,x()},{deep:!0});function x(){g.calculateInputOutput(),p.value=g.equation.toStatisticsInfoString()}return e({setCurrentWorkforce(m){o.value=m},getCurrentWorkforce(){return o.value},setBannedWaresArray(m){l.value=m},getBannedWaresArray(){return l.value}}),(m,h)=>(mt(),gt(At,null,[pb,Ve("div",mb,[or(" 当前劳动力："),sr(Ve("input",{type:"number","onUpdate:modelValue":h[0]||(h[0]=y=>o.value=y),min:0,max:s.value,style:{width:"6em"}},null,8,gb),[[Wd,o.value]]),_b,or(" 最大可容纳劳动力："+Gt(s.value),1),xb,or(" 达到最高效率所需劳动力："+Gt(a.value),1)]),Ve("div",vb,[or(" 禁用货物： "),sr(Ve("select",{"onUpdate:modelValue":h[1]||(h[1]=y=>u.value=y)},[(mt(!0),gt(At,null,Jn(c.value,y=>(mt(),gt("option",{key:y.id,value:y.id},Gt(y.name),9,yb))),128))],512),[[ho,u.value]]),Ve("button",{style:{"margin-left":"0.5em"},onClick:d},"+"),wb,Ve("pre",null,[(mt(!0),gt(At,null,Jn(l.value,(y,_)=>(mt(),gt("span",{key:y.id,onClick:v=>f(_)},Gt(y.name),9,Mb))),128))])]),Ve("pre",Sb,Gt(p.value),1)],64))}});const jd=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Eb=jd(bb,[["__scopeId","data-v-c60dace2"]]),$l=i=>(Ad("data-v-3df83502"),i=i(),Cd(),i),Ab={class:"factory-modules"},Cb={class:"habitat-modules"},Tb=$l(()=>Ve("div",null,"居住模块",-1)),Pb=["value"],Lb=["onClick"],Rb={class:"storage-modules"},Ib=$l(()=>Ve("div",null,"仓储模块",-1)),Db=["value"],Ob=["onClick"],Nb={class:"production-modules"},Ub=$l(()=>Ve("div",null,"生产模块",-1)),Fb=["value"],zb=["onClick"],kb={class:"statistics"},Bb={class:"actions"},Hb=ms({__name:"App",setup(i){const e=us();let t=st(null);const n=st(!1),r=st(""),s=st([]),o=st([]),a=st([]);let l=0;window.addEventListener("message",w=>{if(w.data.type==="START_EDIT_FACTORY"){r.value="",s.value=[],o.value=[],a.value=[],l=0,n.value=!0;const b=w.data.factory;r.value=b.name;const U=new Map;for(const N of b.habitatModules)U.has(N)?U.set(N,U.get(N)+1):U.set(N,1);U.forEach((N,G)=>{s.value.push({moduleId:G,count:N})});const W=new Map;for(const N of b.storageModules)W.has(N)?W.set(N,W.get(N)+1):W.set(N,1);W.forEach((N,G)=>{o.value.push({moduleId:G,count:N})});const F=new Map;for(const N of b.productionModules)F.has(N)?F.set(N,F.get(N)+1):F.set(N,1);F.forEach((N,G)=>{a.value.push({moduleId:G,count:N})}),l=b.currentWorkforce,wd(()=>{t.value.setCurrentWorkforce(l),t.value.setBannedWaresArray(b.bannedWaresIdArray.map(N=>e.get(N)))})}});function c(){n.value=!1;const w=[];for(const F of s.value)for(let N=0;N<F.count;++N)w.push(F.moduleId);const b=[];for(const F of o.value)for(let N=0;N<F.count;++N)b.push(F.moduleId);const U=[];for(const F of a.value)for(let N=0;N<F.count;++N)U.push(F.moduleId);const W={name:r.value,habitatModules:w,storageModules:b,productionModules:U,currentWorkforce:t.value.getCurrentWorkforce(),bannedWaresIdArray:t.value.getBannedWaresArray().map(F=>F.id)};window.postMessage({type:"FINISH_EDIT_FACTORY",factory:W})}const u=st([]),d=st([]),f=st([]),p=s1(),g=new Map;for(const w of p.habitat)u.value.push({moduleId:w.id,moduleName:w.name}),g.set(w.id,w.name);for(const w of p.storage)d.value.push({moduleId:w.id,moduleName:w.name}),g.set(w.id,w.name);for(const w of p.production)f.value.push({moduleId:w.id,moduleName:w.name}),g.set(w.id,w.name);function x(w){const b=g.get(w);return b||w}const m=st(""),h=st(""),y=st("");function _(w){if(!m.value)return;const b=m.value,U=s.value.find(W=>W.moduleId===b);if(U){U.count+=1;return}s.value.push({moduleId:b,count:1})}function v(w){if(!h.value)return;const b=h.value,U=o.value.find(W=>W.moduleId===b);if(U){U.count+=1;return}o.value.push({moduleId:b,count:1})}function S(w){if(!y.value)return;const b=y.value,U=a.value.find(W=>W.moduleId===b);if(U){U.count+=1;return}a.value.push({moduleId:b,count:1})}function L(w){s.value[w].count===1?s.value.splice(w,1):s.value[w].count-=1}function O(w){o.value[w].count===1?o.value.splice(w,1):o.value[w].count-=1}function I(w){a.value[w].count===1?a.value.splice(w,1):a.value[w].count-=1}return(w,b)=>(mt(),gt("div",{style:Ni({display:n.value?"flex":"none"}),class:"container"},[Ve("div",Ab,[Ve("div",Cb,[Tb,sr(Ve("select",{"onUpdate:modelValue":b[0]||(b[0]=U=>m.value=U)},[(mt(!0),gt(At,null,Jn(u.value,U=>(mt(),gt("option",{key:U.moduleId,value:U.moduleId},Gt(U.moduleName),9,Pb))),128))],512),[[ho,m.value]]),Ve("button",{onClick:_,style:{"margin-left":"0.5em"}},"+"),Ve("ol",null,[(mt(!0),gt(At,null,Jn(s.value,(U,W)=>(mt(),gt("li",{key:U.moduleId,onClick:F=>L(W)},Gt(x(U.moduleId))+" x "+Gt(U.count),9,Lb))),128))])]),Ve("div",Rb,[Ib,sr(Ve("select",{"onUpdate:modelValue":b[1]||(b[1]=U=>h.value=U)},[(mt(!0),gt(At,null,Jn(d.value,U=>(mt(),gt("option",{key:U.moduleId,value:U.moduleId},Gt(U.moduleName),9,Db))),128))],512),[[ho,h.value]]),Ve("button",{onClick:v,style:{"margin-left":"0.5em"}},"+"),Ve("ol",null,[(mt(!0),gt(At,null,Jn(o.value,(U,W)=>(mt(),gt("li",{key:U.moduleId,onClick:F=>O(W)},Gt(x(U.moduleId))+" x "+Gt(U.count),9,Ob))),128))])]),Ve("div",Nb,[Ub,sr(Ve("select",{"onUpdate:modelValue":b[2]||(b[2]=U=>y.value=U)},[(mt(!0),gt(At,null,Jn(f.value,U=>(mt(),gt("option",{key:U.moduleId,value:U.moduleId},Gt(U.moduleName),9,Fb))),128))],512),[[ho,y.value]]),Ve("button",{onClick:S,style:{"margin-left":"0.5em"}},"+"),Ve("ol",null,[(mt(!0),gt(At,null,Jn(a.value,(U,W)=>(mt(),gt("li",{key:U.moduleId,onClick:F=>I(W)},Gt(x(U.moduleId))+" x "+Gt(U.count),9,zb))),128))])]),Ve("div",kb,[ii(Eb,{habitatModules:s.value,productionModules:a.value,storageModules:o.value,ref_key:"statistics",ref:t},null,8,["habitatModules","productionModules","storageModules"])])]),Ve("div",Bb,[or(" 工厂名称："),sr(Ve("input",{"onUpdate:modelValue":b[3]||(b[3]=U=>r.value=U),style:{width:"24em"}},null,512),[[Wd,r.value]]),Ve("button",{onClick:c,style:{"margin-left":"0.5em"}},"完成编辑")])],4))}});const Vb=jd(Hb,[["__scopeId","data-v-3df83502"]]);Ho(Vb).mount("#appFactoryEdit");const Gb=["href","download"],Wb=ms({__name:"App",setup(i){const e=st(!1),t=st(""),n=st("");window.addEventListener("message",s=>{if(s.data.type==="START_EXPORT"){e.value=!0;const o=new Blob([s.data.exportedString],{type:"application/json"}),a=URL.createObjectURL(o);t.value=a;const l=new Date;n.value="工厂数据"+l.getFullYear()+"年"+(l.getMonth()+1)+"月"+l.getDate()+"日"+l.getHours()+"时"+l.getMinutes()+"分"+l.getSeconds()+"秒.json"}});function r(){window.postMessage({type:"FINISH_EXPORT"}),e.value=!1}return(s,o)=>(mt(),gt("div",{style:Ni({display:e.value?"flex":"none"}),class:"container"},[Ve("a",{href:t.value,download:n.value},"点击导出工厂配置",8,Gb),Ve("button",{onClick:r,style:{"margin-top":"0.5em"}},"关闭导出界面")],4))}});Ho(Wb).mount("#appExport");const qb=ms({__name:"App",setup(i){const e=st(!1);let t="";window.addEventListener("message",o=>{o.data.type==="START_IMPORT"&&(e.value=!0,t="")});function n(){!t&&!confirm("检测到导入的文件内容为空，确定要关闭导入界面吗？")||(window.postMessage({type:"FINISH_IMPORT",importedString:t}),e.value=!1)}function r(){window.postMessage({type:"FINISH_IMPORT"}),e.value=!1}function s(o){const l=o.target.files.item(0),c=new FileReader;c.onload=()=>{typeof c.result=="string"&&(t=c.result)},c.readAsText(l)}return(o,a)=>(mt(),gt("div",{style:Ni({display:e.value?"flex":"none"}),class:"container"},[Ve("input",{type:"file",onChange:s},null,32),Ve("button",{onClick:n,style:{"margin-top":"0.5em"}},"导入数据并回到地图界面"),Ve("button",{onClick:r,style:{"margin-top":"0.5em"}},"取消导入并回到地图界面")],4))}});Ho(qb).mount("#appImport");class Xb{equation;children;constructor(){this.equation=new Xl,this.children=[]}calculateInputOutput(){this.equation.clear();for(const e of this.children)e.calculateInputOutput(),e.equation.inputMap.forEach((t,n)=>this.equation.addInput(n,t)),e.equation.outputMap.forEach((t,n)=>this.equation.addOutput(n,t))}}const $b=ms({__name:"App",setup(i){const e=st(!1),t=st("");window.addEventListener("message",r=>{if(r.data.type==="START_CLUSTER_ANALYZE"){e.value=!0,t.value="";const s=r.data.factoryDataArray,o=new Xb;for(const a of s){const l=Vo.createFromFactoryData(a);o.children.push(l)}o.calculateInputOutput(),t.value=o.equation.toStatisticsInfoString()}});function n(){window.postMessage({type:"FINISH_CLUSTER_ANALYZE"}),e.value=!1}return(r,s)=>(mt(),gt("div",{style:Ni({display:e.value?"flex":"none"}),class:"container"},[Ve("pre",null,Gt(t.value),1),Ve("button",{onClick:n,style:{"margin-top":"0.5em"}},"关闭工厂集群分析界面")],4))}});Ho($b).mount("#appClusterAnalyze");
