(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else if(typeof exports === 'object')
		exports["THREEx"] = factory(require("three"));
	else
		root["THREEx"] = factory(root["THREE"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_three__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/artoolkit5-js/dist/ARToolkit.js":
/*!******************************************************!*\
  !*** ./node_modules/artoolkit5-js/dist/ARToolkit.js ***!
  \******************************************************/
/***/ (function(module) {

!function(A,I){ true?module.exports=I():0}("undefined"!=typeof self?self:this,(function(){return function(A){var I={};function g(B){if(I[B])return I[B].exports;var C=I[B]={i:B,l:!1,exports:{}};return A[B].call(C.exports,C,C.exports,g),C.l=!0,C.exports}return g.m=A,g.c=I,g.d=function(A,I,B){g.o(A,I)||Object.defineProperty(A,I,{enumerable:!0,get:B})},g.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},g.t=function(A,I){if(1&I&&(A=g(A)),8&I)return A;if(4&I&&"object"==typeof A&&A&&A.__esModule)return A;var B=Object.create(null);if(g.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:A}),2&I&&"string"!=typeof A)for(var C in A)g.d(B,C,function(I){return A[I]}.bind(null,C));return B},g.n=function(A){var I=A&&A.__esModule?function(){return A.default}:function(){return A};return g.d(I,"a",I),I},g.o=function(A,I){return Object.prototype.hasOwnProperty.call(A,I)},g.p="",g(g.s=197)}([function(A,I){"function"==typeof Object.create?A.exports=function(A,I){I&&(A.super_=I,A.prototype=Object.create(I.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}))}:A.exports=function(A,I){if(I){A.super_=I;var g=function(){};g.prototype=I.prototype,A.prototype=new g,A.prototype.constructor=A}}},function(A,I,g){var B=g(4),C=B.Buffer;function Q(A,I){for(var g in A)I[g]=A[g]}function E(A,I,g){return C(A,I,g)}C.from&&C.alloc&&C.allocUnsafe&&C.allocUnsafeSlow?A.exports=B:(Q(B,I),I.Buffer=E),Q(C,E),E.from=function(A,I,g){if("number"==typeof A)throw new TypeError("Argument must not be a number");return C(A,I,g)},E.alloc=function(A,I,g){if("number"!=typeof A)throw new TypeError("Argument must be a number");var B=C(A);return void 0!==I?"string"==typeof g?B.fill(I,g):B.fill(I):B.fill(0),B},E.allocUnsafe=function(A){if("number"!=typeof A)throw new TypeError("Argument must be a number");return C(A)},E.allocUnsafeSlow=function(A){if("number"!=typeof A)throw new TypeError("Argument must be a number");return B.SlowBuffer(A)}},function(A,I,g){A.exports=g(98)},function(A,I,g){(function(A){!function(A,I){"use strict";function B(A,I){if(!A)throw new Error(I||"Assertion failed")}function C(A,I){A.super_=I;var g=function(){};g.prototype=I.prototype,A.prototype=new g,A.prototype.constructor=A}function Q(A,I,g){if(Q.isBN(A))return A;this.negative=0,this.words=null,this.length=0,this.red=null,null!==A&&("le"!==I&&"be"!==I||(g=I,I=10),this._init(A||0,I||10,g||"be"))}var E;"object"==typeof A?A.exports=Q:I.BN=Q,Q.BN=Q,Q.wordSize=26;try{E=g(138).Buffer}catch(A){}function i(A,I,g){for(var B=0,C=Math.min(A.length,g),Q=I;Q<C;Q++){var E=A.charCodeAt(Q)-48;B<<=4,B|=E>=49&&E<=54?E-49+10:E>=17&&E<=22?E-17+10:15&E}return B}function o(A,I,g,B){for(var C=0,Q=Math.min(A.length,g),E=I;E<Q;E++){var i=A.charCodeAt(E)-48;C*=B,C+=i>=49?i-49+10:i>=17?i-17+10:i}return C}Q.isBN=function(A){return A instanceof Q||null!==A&&"object"==typeof A&&A.constructor.wordSize===Q.wordSize&&Array.isArray(A.words)},Q.max=function(A,I){return A.cmp(I)>0?A:I},Q.min=function(A,I){return A.cmp(I)<0?A:I},Q.prototype._init=function(A,I,g){if("number"==typeof A)return this._initNumber(A,I,g);if("object"==typeof A)return this._initArray(A,I,g);"hex"===I&&(I=16),B(I===(0|I)&&I>=2&&I<=36);var C=0;"-"===(A=A.toString().replace(/\s+/g,""))[0]&&C++,16===I?this._parseHex(A,C):this._parseBase(A,I,C),"-"===A[0]&&(this.negative=1),this.strip(),"le"===g&&this._initArray(this.toArray(),I,g)},Q.prototype._initNumber=function(A,I,g){A<0&&(this.negative=1,A=-A),A<67108864?(this.words=[67108863&A],this.length=1):A<4503599627370496?(this.words=[67108863&A,A/67108864&67108863],this.length=2):(B(A<9007199254740992),this.words=[67108863&A,A/67108864&67108863,1],this.length=3),"le"===g&&this._initArray(this.toArray(),I,g)},Q.prototype._initArray=function(A,I,g){if(B("number"==typeof A.length),A.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(A.length/3),this.words=new Array(this.length);for(var C=0;C<this.length;C++)this.words[C]=0;var Q,E,i=0;if("be"===g)for(C=A.length-1,Q=0;C>=0;C-=3)E=A[C]|A[C-1]<<8|A[C-2]<<16,this.words[Q]|=E<<i&67108863,this.words[Q+1]=E>>>26-i&67108863,(i+=24)>=26&&(i-=26,Q++);else if("le"===g)for(C=0,Q=0;C<A.length;C+=3)E=A[C]|A[C+1]<<8|A[C+2]<<16,this.words[Q]|=E<<i&67108863,this.words[Q+1]=E>>>26-i&67108863,(i+=24)>=26&&(i-=26,Q++);return this.strip()},Q.prototype._parseHex=function(A,I){this.length=Math.ceil((A.length-I)/6),this.words=new Array(this.length);for(var g=0;g<this.length;g++)this.words[g]=0;var B,C,Q=0;for(g=A.length-6,B=0;g>=I;g-=6)C=i(A,g,g+6),this.words[B]|=C<<Q&67108863,this.words[B+1]|=C>>>26-Q&4194303,(Q+=24)>=26&&(Q-=26,B++);g+6!==I&&(C=i(A,I,g+6),this.words[B]|=C<<Q&67108863,this.words[B+1]|=C>>>26-Q&4194303),this.strip()},Q.prototype._parseBase=function(A,I,g){this.words=[0],this.length=1;for(var B=0,C=1;C<=67108863;C*=I)B++;B--,C=C/I|0;for(var Q=A.length-g,E=Q%B,i=Math.min(Q,Q-E)+g,t=0,e=g;e<i;e+=B)t=o(A,e,e+B,I),this.imuln(C),this.words[0]+t<67108864?this.words[0]+=t:this._iaddn(t);if(0!==E){var a=1;for(t=o(A,e,A.length,I),e=0;e<E;e++)a*=I;this.imuln(a),this.words[0]+t<67108864?this.words[0]+=t:this._iaddn(t)}},Q.prototype.copy=function(A){A.words=new Array(this.length);for(var I=0;I<this.length;I++)A.words[I]=this.words[I];A.length=this.length,A.negative=this.negative,A.red=this.red},Q.prototype.clone=function(){var A=new Q(null);return this.copy(A),A},Q.prototype._expand=function(A){for(;this.length<A;)this.words[this.length++]=0;return this},Q.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},Q.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},Q.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var t=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],e=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],a=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function r(A,I,g){g.negative=I.negative^A.negative;var B=A.length+I.length|0;g.length=B,B=B-1|0;var C=0|A.words[0],Q=0|I.words[0],E=C*Q,i=67108863&E,o=E/67108864|0;g.words[0]=i;for(var t=1;t<B;t++){for(var e=o>>>26,a=67108863&o,r=Math.min(t,I.length-1),n=Math.max(0,t-A.length+1);n<=r;n++){var s=t-n|0;e+=(E=(C=0|A.words[s])*(Q=0|I.words[n])+a)/67108864|0,a=67108863&E}g.words[t]=0|a,o=0|e}return 0!==o?g.words[t]=0|o:g.length--,g.strip()}Q.prototype.toString=function(A,I){var g;if(I=0|I||1,16===(A=A||10)||"hex"===A){g="";for(var C=0,Q=0,E=0;E<this.length;E++){var i=this.words[E],o=(16777215&(i<<C|Q)).toString(16);g=0!==(Q=i>>>24-C&16777215)||E!==this.length-1?t[6-o.length]+o+g:o+g,(C+=2)>=26&&(C-=26,E--)}for(0!==Q&&(g=Q.toString(16)+g);g.length%I!=0;)g="0"+g;return 0!==this.negative&&(g="-"+g),g}if(A===(0|A)&&A>=2&&A<=36){var r=e[A],n=a[A];g="";var s=this.clone();for(s.negative=0;!s.isZero();){var h=s.modn(n).toString(A);g=(s=s.idivn(n)).isZero()?h+g:t[r-h.length]+h+g}for(this.isZero()&&(g="0"+g);g.length%I!=0;)g="0"+g;return 0!==this.negative&&(g="-"+g),g}B(!1,"Base should be between 2 and 36")},Q.prototype.toNumber=function(){var A=this.words[0];return 2===this.length?A+=67108864*this.words[1]:3===this.length&&1===this.words[2]?A+=4503599627370496+67108864*this.words[1]:this.length>2&&B(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-A:A},Q.prototype.toJSON=function(){return this.toString(16)},Q.prototype.toBuffer=function(A,I){return B(void 0!==E),this.toArrayLike(E,A,I)},Q.prototype.toArray=function(A,I){return this.toArrayLike(Array,A,I)},Q.prototype.toArrayLike=function(A,I,g){var C=this.byteLength(),Q=g||Math.max(1,C);B(C<=Q,"byte array longer than desired length"),B(Q>0,"Requested array length <= 0"),this.strip();var E,i,o="le"===I,t=new A(Q),e=this.clone();if(o){for(i=0;!e.isZero();i++)E=e.andln(255),e.iushrn(8),t[i]=E;for(;i<Q;i++)t[i]=0}else{for(i=0;i<Q-C;i++)t[i]=0;for(i=0;!e.isZero();i++)E=e.andln(255),e.iushrn(8),t[Q-i-1]=E}return t},Math.clz32?Q.prototype._countBits=function(A){return 32-Math.clz32(A)}:Q.prototype._countBits=function(A){var I=A,g=0;return I>=4096&&(g+=13,I>>>=13),I>=64&&(g+=7,I>>>=7),I>=8&&(g+=4,I>>>=4),I>=2&&(g+=2,I>>>=2),g+I},Q.prototype._zeroBits=function(A){if(0===A)return 26;var I=A,g=0;return 0==(8191&I)&&(g+=13,I>>>=13),0==(127&I)&&(g+=7,I>>>=7),0==(15&I)&&(g+=4,I>>>=4),0==(3&I)&&(g+=2,I>>>=2),0==(1&I)&&g++,g},Q.prototype.bitLength=function(){var A=this.words[this.length-1],I=this._countBits(A);return 26*(this.length-1)+I},Q.prototype.zeroBits=function(){if(this.isZero())return 0;for(var A=0,I=0;I<this.length;I++){var g=this._zeroBits(this.words[I]);if(A+=g,26!==g)break}return A},Q.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},Q.prototype.toTwos=function(A){return 0!==this.negative?this.abs().inotn(A).iaddn(1):this.clone()},Q.prototype.fromTwos=function(A){return this.testn(A-1)?this.notn(A).iaddn(1).ineg():this.clone()},Q.prototype.isNeg=function(){return 0!==this.negative},Q.prototype.neg=function(){return this.clone().ineg()},Q.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},Q.prototype.iuor=function(A){for(;this.length<A.length;)this.words[this.length++]=0;for(var I=0;I<A.length;I++)this.words[I]=this.words[I]|A.words[I];return this.strip()},Q.prototype.ior=function(A){return B(0==(this.negative|A.negative)),this.iuor(A)},Q.prototype.or=function(A){return this.length>A.length?this.clone().ior(A):A.clone().ior(this)},Q.prototype.uor=function(A){return this.length>A.length?this.clone().iuor(A):A.clone().iuor(this)},Q.prototype.iuand=function(A){var I;I=this.length>A.length?A:this;for(var g=0;g<I.length;g++)this.words[g]=this.words[g]&A.words[g];return this.length=I.length,this.strip()},Q.prototype.iand=function(A){return B(0==(this.negative|A.negative)),this.iuand(A)},Q.prototype.and=function(A){return this.length>A.length?this.clone().iand(A):A.clone().iand(this)},Q.prototype.uand=function(A){return this.length>A.length?this.clone().iuand(A):A.clone().iuand(this)},Q.prototype.iuxor=function(A){var I,g;this.length>A.length?(I=this,g=A):(I=A,g=this);for(var B=0;B<g.length;B++)this.words[B]=I.words[B]^g.words[B];if(this!==I)for(;B<I.length;B++)this.words[B]=I.words[B];return this.length=I.length,this.strip()},Q.prototype.ixor=function(A){return B(0==(this.negative|A.negative)),this.iuxor(A)},Q.prototype.xor=function(A){return this.length>A.length?this.clone().ixor(A):A.clone().ixor(this)},Q.prototype.uxor=function(A){return this.length>A.length?this.clone().iuxor(A):A.clone().iuxor(this)},Q.prototype.inotn=function(A){B("number"==typeof A&&A>=0);var I=0|Math.ceil(A/26),g=A%26;this._expand(I),g>0&&I--;for(var C=0;C<I;C++)this.words[C]=67108863&~this.words[C];return g>0&&(this.words[C]=~this.words[C]&67108863>>26-g),this.strip()},Q.prototype.notn=function(A){return this.clone().inotn(A)},Q.prototype.setn=function(A,I){B("number"==typeof A&&A>=0);var g=A/26|0,C=A%26;return this._expand(g+1),this.words[g]=I?this.words[g]|1<<C:this.words[g]&~(1<<C),this.strip()},Q.prototype.iadd=function(A){var I,g,B;if(0!==this.negative&&0===A.negative)return this.negative=0,I=this.isub(A),this.negative^=1,this._normSign();if(0===this.negative&&0!==A.negative)return A.negative=0,I=this.isub(A),A.negative=1,I._normSign();this.length>A.length?(g=this,B=A):(g=A,B=this);for(var C=0,Q=0;Q<B.length;Q++)I=(0|g.words[Q])+(0|B.words[Q])+C,this.words[Q]=67108863&I,C=I>>>26;for(;0!==C&&Q<g.length;Q++)I=(0|g.words[Q])+C,this.words[Q]=67108863&I,C=I>>>26;if(this.length=g.length,0!==C)this.words[this.length]=C,this.length++;else if(g!==this)for(;Q<g.length;Q++)this.words[Q]=g.words[Q];return this},Q.prototype.add=function(A){var I;return 0!==A.negative&&0===this.negative?(A.negative=0,I=this.sub(A),A.negative^=1,I):0===A.negative&&0!==this.negative?(this.negative=0,I=A.sub(this),this.negative=1,I):this.length>A.length?this.clone().iadd(A):A.clone().iadd(this)},Q.prototype.isub=function(A){if(0!==A.negative){A.negative=0;var I=this.iadd(A);return A.negative=1,I._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(A),this.negative=1,this._normSign();var g,B,C=this.cmp(A);if(0===C)return this.negative=0,this.length=1,this.words[0]=0,this;C>0?(g=this,B=A):(g=A,B=this);for(var Q=0,E=0;E<B.length;E++)Q=(I=(0|g.words[E])-(0|B.words[E])+Q)>>26,this.words[E]=67108863&I;for(;0!==Q&&E<g.length;E++)Q=(I=(0|g.words[E])+Q)>>26,this.words[E]=67108863&I;if(0===Q&&E<g.length&&g!==this)for(;E<g.length;E++)this.words[E]=g.words[E];return this.length=Math.max(this.length,E),g!==this&&(this.negative=1),this.strip()},Q.prototype.sub=function(A){return this.clone().isub(A)};var n=function(A,I,g){var B,C,Q,E=A.words,i=I.words,o=g.words,t=0,e=0|E[0],a=8191&e,r=e>>>13,n=0|E[1],s=8191&n,h=n>>>13,D=0|E[2],c=8191&D,w=D>>>13,f=0|E[3],d=8191&f,F=f>>>13,G=0|E[4],y=8191&G,R=G>>>13,u=0|E[5],U=8191&u,S=u>>>13,M=0|E[6],l=8191&M,k=M>>>13,N=0|E[7],K=8191&N,Y=N>>>13,p=0|E[8],J=8191&p,b=p>>>13,H=0|E[9],L=8191&H,q=H>>>13,m=0|i[0],v=8191&m,x=m>>>13,W=0|i[1],Z=8191&W,X=W>>>13,V=0|i[2],O=8191&V,T=V>>>13,j=0|i[3],P=8191&j,z=j>>>13,_=0|i[4],$=8191&_,AA=_>>>13,IA=0|i[5],gA=8191&IA,BA=IA>>>13,CA=0|i[6],QA=8191&CA,EA=CA>>>13,iA=0|i[7],oA=8191&iA,tA=iA>>>13,eA=0|i[8],aA=8191&eA,rA=eA>>>13,nA=0|i[9],sA=8191&nA,hA=nA>>>13;g.negative=A.negative^I.negative,g.length=19;var DA=(t+(B=Math.imul(a,v))|0)+((8191&(C=(C=Math.imul(a,x))+Math.imul(r,v)|0))<<13)|0;t=((Q=Math.imul(r,x))+(C>>>13)|0)+(DA>>>26)|0,DA&=67108863,B=Math.imul(s,v),C=(C=Math.imul(s,x))+Math.imul(h,v)|0,Q=Math.imul(h,x);var cA=(t+(B=B+Math.imul(a,Z)|0)|0)+((8191&(C=(C=C+Math.imul(a,X)|0)+Math.imul(r,Z)|0))<<13)|0;t=((Q=Q+Math.imul(r,X)|0)+(C>>>13)|0)+(cA>>>26)|0,cA&=67108863,B=Math.imul(c,v),C=(C=Math.imul(c,x))+Math.imul(w,v)|0,Q=Math.imul(w,x),B=B+Math.imul(s,Z)|0,C=(C=C+Math.imul(s,X)|0)+Math.imul(h,Z)|0,Q=Q+Math.imul(h,X)|0;var wA=(t+(B=B+Math.imul(a,O)|0)|0)+((8191&(C=(C=C+Math.imul(a,T)|0)+Math.imul(r,O)|0))<<13)|0;t=((Q=Q+Math.imul(r,T)|0)+(C>>>13)|0)+(wA>>>26)|0,wA&=67108863,B=Math.imul(d,v),C=(C=Math.imul(d,x))+Math.imul(F,v)|0,Q=Math.imul(F,x),B=B+Math.imul(c,Z)|0,C=(C=C+Math.imul(c,X)|0)+Math.imul(w,Z)|0,Q=Q+Math.imul(w,X)|0,B=B+Math.imul(s,O)|0,C=(C=C+Math.imul(s,T)|0)+Math.imul(h,O)|0,Q=Q+Math.imul(h,T)|0;var fA=(t+(B=B+Math.imul(a,P)|0)|0)+((8191&(C=(C=C+Math.imul(a,z)|0)+Math.imul(r,P)|0))<<13)|0;t=((Q=Q+Math.imul(r,z)|0)+(C>>>13)|0)+(fA>>>26)|0,fA&=67108863,B=Math.imul(y,v),C=(C=Math.imul(y,x))+Math.imul(R,v)|0,Q=Math.imul(R,x),B=B+Math.imul(d,Z)|0,C=(C=C+Math.imul(d,X)|0)+Math.imul(F,Z)|0,Q=Q+Math.imul(F,X)|0,B=B+Math.imul(c,O)|0,C=(C=C+Math.imul(c,T)|0)+Math.imul(w,O)|0,Q=Q+Math.imul(w,T)|0,B=B+Math.imul(s,P)|0,C=(C=C+Math.imul(s,z)|0)+Math.imul(h,P)|0,Q=Q+Math.imul(h,z)|0;var dA=(t+(B=B+Math.imul(a,$)|0)|0)+((8191&(C=(C=C+Math.imul(a,AA)|0)+Math.imul(r,$)|0))<<13)|0;t=((Q=Q+Math.imul(r,AA)|0)+(C>>>13)|0)+(dA>>>26)|0,dA&=67108863,B=Math.imul(U,v),C=(C=Math.imul(U,x))+Math.imul(S,v)|0,Q=Math.imul(S,x),B=B+Math.imul(y,Z)|0,C=(C=C+Math.imul(y,X)|0)+Math.imul(R,Z)|0,Q=Q+Math.imul(R,X)|0,B=B+Math.imul(d,O)|0,C=(C=C+Math.imul(d,T)|0)+Math.imul(F,O)|0,Q=Q+Math.imul(F,T)|0,B=B+Math.imul(c,P)|0,C=(C=C+Math.imul(c,z)|0)+Math.imul(w,P)|0,Q=Q+Math.imul(w,z)|0,B=B+Math.imul(s,$)|0,C=(C=C+Math.imul(s,AA)|0)+Math.imul(h,$)|0,Q=Q+Math.imul(h,AA)|0;var FA=(t+(B=B+Math.imul(a,gA)|0)|0)+((8191&(C=(C=C+Math.imul(a,BA)|0)+Math.imul(r,gA)|0))<<13)|0;t=((Q=Q+Math.imul(r,BA)|0)+(C>>>13)|0)+(FA>>>26)|0,FA&=67108863,B=Math.imul(l,v),C=(C=Math.imul(l,x))+Math.imul(k,v)|0,Q=Math.imul(k,x),B=B+Math.imul(U,Z)|0,C=(C=C+Math.imul(U,X)|0)+Math.imul(S,Z)|0,Q=Q+Math.imul(S,X)|0,B=B+Math.imul(y,O)|0,C=(C=C+Math.imul(y,T)|0)+Math.imul(R,O)|0,Q=Q+Math.imul(R,T)|0,B=B+Math.imul(d,P)|0,C=(C=C+Math.imul(d,z)|0)+Math.imul(F,P)|0,Q=Q+Math.imul(F,z)|0,B=B+Math.imul(c,$)|0,C=(C=C+Math.imul(c,AA)|0)+Math.imul(w,$)|0,Q=Q+Math.imul(w,AA)|0,B=B+Math.imul(s,gA)|0,C=(C=C+Math.imul(s,BA)|0)+Math.imul(h,gA)|0,Q=Q+Math.imul(h,BA)|0;var GA=(t+(B=B+Math.imul(a,QA)|0)|0)+((8191&(C=(C=C+Math.imul(a,EA)|0)+Math.imul(r,QA)|0))<<13)|0;t=((Q=Q+Math.imul(r,EA)|0)+(C>>>13)|0)+(GA>>>26)|0,GA&=67108863,B=Math.imul(K,v),C=(C=Math.imul(K,x))+Math.imul(Y,v)|0,Q=Math.imul(Y,x),B=B+Math.imul(l,Z)|0,C=(C=C+Math.imul(l,X)|0)+Math.imul(k,Z)|0,Q=Q+Math.imul(k,X)|0,B=B+Math.imul(U,O)|0,C=(C=C+Math.imul(U,T)|0)+Math.imul(S,O)|0,Q=Q+Math.imul(S,T)|0,B=B+Math.imul(y,P)|0,C=(C=C+Math.imul(y,z)|0)+Math.imul(R,P)|0,Q=Q+Math.imul(R,z)|0,B=B+Math.imul(d,$)|0,C=(C=C+Math.imul(d,AA)|0)+Math.imul(F,$)|0,Q=Q+Math.imul(F,AA)|0,B=B+Math.imul(c,gA)|0,C=(C=C+Math.imul(c,BA)|0)+Math.imul(w,gA)|0,Q=Q+Math.imul(w,BA)|0,B=B+Math.imul(s,QA)|0,C=(C=C+Math.imul(s,EA)|0)+Math.imul(h,QA)|0,Q=Q+Math.imul(h,EA)|0;var yA=(t+(B=B+Math.imul(a,oA)|0)|0)+((8191&(C=(C=C+Math.imul(a,tA)|0)+Math.imul(r,oA)|0))<<13)|0;t=((Q=Q+Math.imul(r,tA)|0)+(C>>>13)|0)+(yA>>>26)|0,yA&=67108863,B=Math.imul(J,v),C=(C=Math.imul(J,x))+Math.imul(b,v)|0,Q=Math.imul(b,x),B=B+Math.imul(K,Z)|0,C=(C=C+Math.imul(K,X)|0)+Math.imul(Y,Z)|0,Q=Q+Math.imul(Y,X)|0,B=B+Math.imul(l,O)|0,C=(C=C+Math.imul(l,T)|0)+Math.imul(k,O)|0,Q=Q+Math.imul(k,T)|0,B=B+Math.imul(U,P)|0,C=(C=C+Math.imul(U,z)|0)+Math.imul(S,P)|0,Q=Q+Math.imul(S,z)|0,B=B+Math.imul(y,$)|0,C=(C=C+Math.imul(y,AA)|0)+Math.imul(R,$)|0,Q=Q+Math.imul(R,AA)|0,B=B+Math.imul(d,gA)|0,C=(C=C+Math.imul(d,BA)|0)+Math.imul(F,gA)|0,Q=Q+Math.imul(F,BA)|0,B=B+Math.imul(c,QA)|0,C=(C=C+Math.imul(c,EA)|0)+Math.imul(w,QA)|0,Q=Q+Math.imul(w,EA)|0,B=B+Math.imul(s,oA)|0,C=(C=C+Math.imul(s,tA)|0)+Math.imul(h,oA)|0,Q=Q+Math.imul(h,tA)|0;var RA=(t+(B=B+Math.imul(a,aA)|0)|0)+((8191&(C=(C=C+Math.imul(a,rA)|0)+Math.imul(r,aA)|0))<<13)|0;t=((Q=Q+Math.imul(r,rA)|0)+(C>>>13)|0)+(RA>>>26)|0,RA&=67108863,B=Math.imul(L,v),C=(C=Math.imul(L,x))+Math.imul(q,v)|0,Q=Math.imul(q,x),B=B+Math.imul(J,Z)|0,C=(C=C+Math.imul(J,X)|0)+Math.imul(b,Z)|0,Q=Q+Math.imul(b,X)|0,B=B+Math.imul(K,O)|0,C=(C=C+Math.imul(K,T)|0)+Math.imul(Y,O)|0,Q=Q+Math.imul(Y,T)|0,B=B+Math.imul(l,P)|0,C=(C=C+Math.imul(l,z)|0)+Math.imul(k,P)|0,Q=Q+Math.imul(k,z)|0,B=B+Math.imul(U,$)|0,C=(C=C+Math.imul(U,AA)|0)+Math.imul(S,$)|0,Q=Q+Math.imul(S,AA)|0,B=B+Math.imul(y,gA)|0,C=(C=C+Math.imul(y,BA)|0)+Math.imul(R,gA)|0,Q=Q+Math.imul(R,BA)|0,B=B+Math.imul(d,QA)|0,C=(C=C+Math.imul(d,EA)|0)+Math.imul(F,QA)|0,Q=Q+Math.imul(F,EA)|0,B=B+Math.imul(c,oA)|0,C=(C=C+Math.imul(c,tA)|0)+Math.imul(w,oA)|0,Q=Q+Math.imul(w,tA)|0,B=B+Math.imul(s,aA)|0,C=(C=C+Math.imul(s,rA)|0)+Math.imul(h,aA)|0,Q=Q+Math.imul(h,rA)|0;var uA=(t+(B=B+Math.imul(a,sA)|0)|0)+((8191&(C=(C=C+Math.imul(a,hA)|0)+Math.imul(r,sA)|0))<<13)|0;t=((Q=Q+Math.imul(r,hA)|0)+(C>>>13)|0)+(uA>>>26)|0,uA&=67108863,B=Math.imul(L,Z),C=(C=Math.imul(L,X))+Math.imul(q,Z)|0,Q=Math.imul(q,X),B=B+Math.imul(J,O)|0,C=(C=C+Math.imul(J,T)|0)+Math.imul(b,O)|0,Q=Q+Math.imul(b,T)|0,B=B+Math.imul(K,P)|0,C=(C=C+Math.imul(K,z)|0)+Math.imul(Y,P)|0,Q=Q+Math.imul(Y,z)|0,B=B+Math.imul(l,$)|0,C=(C=C+Math.imul(l,AA)|0)+Math.imul(k,$)|0,Q=Q+Math.imul(k,AA)|0,B=B+Math.imul(U,gA)|0,C=(C=C+Math.imul(U,BA)|0)+Math.imul(S,gA)|0,Q=Q+Math.imul(S,BA)|0,B=B+Math.imul(y,QA)|0,C=(C=C+Math.imul(y,EA)|0)+Math.imul(R,QA)|0,Q=Q+Math.imul(R,EA)|0,B=B+Math.imul(d,oA)|0,C=(C=C+Math.imul(d,tA)|0)+Math.imul(F,oA)|0,Q=Q+Math.imul(F,tA)|0,B=B+Math.imul(c,aA)|0,C=(C=C+Math.imul(c,rA)|0)+Math.imul(w,aA)|0,Q=Q+Math.imul(w,rA)|0;var UA=(t+(B=B+Math.imul(s,sA)|0)|0)+((8191&(C=(C=C+Math.imul(s,hA)|0)+Math.imul(h,sA)|0))<<13)|0;t=((Q=Q+Math.imul(h,hA)|0)+(C>>>13)|0)+(UA>>>26)|0,UA&=67108863,B=Math.imul(L,O),C=(C=Math.imul(L,T))+Math.imul(q,O)|0,Q=Math.imul(q,T),B=B+Math.imul(J,P)|0,C=(C=C+Math.imul(J,z)|0)+Math.imul(b,P)|0,Q=Q+Math.imul(b,z)|0,B=B+Math.imul(K,$)|0,C=(C=C+Math.imul(K,AA)|0)+Math.imul(Y,$)|0,Q=Q+Math.imul(Y,AA)|0,B=B+Math.imul(l,gA)|0,C=(C=C+Math.imul(l,BA)|0)+Math.imul(k,gA)|0,Q=Q+Math.imul(k,BA)|0,B=B+Math.imul(U,QA)|0,C=(C=C+Math.imul(U,EA)|0)+Math.imul(S,QA)|0,Q=Q+Math.imul(S,EA)|0,B=B+Math.imul(y,oA)|0,C=(C=C+Math.imul(y,tA)|0)+Math.imul(R,oA)|0,Q=Q+Math.imul(R,tA)|0,B=B+Math.imul(d,aA)|0,C=(C=C+Math.imul(d,rA)|0)+Math.imul(F,aA)|0,Q=Q+Math.imul(F,rA)|0;var SA=(t+(B=B+Math.imul(c,sA)|0)|0)+((8191&(C=(C=C+Math.imul(c,hA)|0)+Math.imul(w,sA)|0))<<13)|0;t=((Q=Q+Math.imul(w,hA)|0)+(C>>>13)|0)+(SA>>>26)|0,SA&=67108863,B=Math.imul(L,P),C=(C=Math.imul(L,z))+Math.imul(q,P)|0,Q=Math.imul(q,z),B=B+Math.imul(J,$)|0,C=(C=C+Math.imul(J,AA)|0)+Math.imul(b,$)|0,Q=Q+Math.imul(b,AA)|0,B=B+Math.imul(K,gA)|0,C=(C=C+Math.imul(K,BA)|0)+Math.imul(Y,gA)|0,Q=Q+Math.imul(Y,BA)|0,B=B+Math.imul(l,QA)|0,C=(C=C+Math.imul(l,EA)|0)+Math.imul(k,QA)|0,Q=Q+Math.imul(k,EA)|0,B=B+Math.imul(U,oA)|0,C=(C=C+Math.imul(U,tA)|0)+Math.imul(S,oA)|0,Q=Q+Math.imul(S,tA)|0,B=B+Math.imul(y,aA)|0,C=(C=C+Math.imul(y,rA)|0)+Math.imul(R,aA)|0,Q=Q+Math.imul(R,rA)|0;var MA=(t+(B=B+Math.imul(d,sA)|0)|0)+((8191&(C=(C=C+Math.imul(d,hA)|0)+Math.imul(F,sA)|0))<<13)|0;t=((Q=Q+Math.imul(F,hA)|0)+(C>>>13)|0)+(MA>>>26)|0,MA&=67108863,B=Math.imul(L,$),C=(C=Math.imul(L,AA))+Math.imul(q,$)|0,Q=Math.imul(q,AA),B=B+Math.imul(J,gA)|0,C=(C=C+Math.imul(J,BA)|0)+Math.imul(b,gA)|0,Q=Q+Math.imul(b,BA)|0,B=B+Math.imul(K,QA)|0,C=(C=C+Math.imul(K,EA)|0)+Math.imul(Y,QA)|0,Q=Q+Math.imul(Y,EA)|0,B=B+Math.imul(l,oA)|0,C=(C=C+Math.imul(l,tA)|0)+Math.imul(k,oA)|0,Q=Q+Math.imul(k,tA)|0,B=B+Math.imul(U,aA)|0,C=(C=C+Math.imul(U,rA)|0)+Math.imul(S,aA)|0,Q=Q+Math.imul(S,rA)|0;var lA=(t+(B=B+Math.imul(y,sA)|0)|0)+((8191&(C=(C=C+Math.imul(y,hA)|0)+Math.imul(R,sA)|0))<<13)|0;t=((Q=Q+Math.imul(R,hA)|0)+(C>>>13)|0)+(lA>>>26)|0,lA&=67108863,B=Math.imul(L,gA),C=(C=Math.imul(L,BA))+Math.imul(q,gA)|0,Q=Math.imul(q,BA),B=B+Math.imul(J,QA)|0,C=(C=C+Math.imul(J,EA)|0)+Math.imul(b,QA)|0,Q=Q+Math.imul(b,EA)|0,B=B+Math.imul(K,oA)|0,C=(C=C+Math.imul(K,tA)|0)+Math.imul(Y,oA)|0,Q=Q+Math.imul(Y,tA)|0,B=B+Math.imul(l,aA)|0,C=(C=C+Math.imul(l,rA)|0)+Math.imul(k,aA)|0,Q=Q+Math.imul(k,rA)|0;var kA=(t+(B=B+Math.imul(U,sA)|0)|0)+((8191&(C=(C=C+Math.imul(U,hA)|0)+Math.imul(S,sA)|0))<<13)|0;t=((Q=Q+Math.imul(S,hA)|0)+(C>>>13)|0)+(kA>>>26)|0,kA&=67108863,B=Math.imul(L,QA),C=(C=Math.imul(L,EA))+Math.imul(q,QA)|0,Q=Math.imul(q,EA),B=B+Math.imul(J,oA)|0,C=(C=C+Math.imul(J,tA)|0)+Math.imul(b,oA)|0,Q=Q+Math.imul(b,tA)|0,B=B+Math.imul(K,aA)|0,C=(C=C+Math.imul(K,rA)|0)+Math.imul(Y,aA)|0,Q=Q+Math.imul(Y,rA)|0;var NA=(t+(B=B+Math.imul(l,sA)|0)|0)+((8191&(C=(C=C+Math.imul(l,hA)|0)+Math.imul(k,sA)|0))<<13)|0;t=((Q=Q+Math.imul(k,hA)|0)+(C>>>13)|0)+(NA>>>26)|0,NA&=67108863,B=Math.imul(L,oA),C=(C=Math.imul(L,tA))+Math.imul(q,oA)|0,Q=Math.imul(q,tA),B=B+Math.imul(J,aA)|0,C=(C=C+Math.imul(J,rA)|0)+Math.imul(b,aA)|0,Q=Q+Math.imul(b,rA)|0;var KA=(t+(B=B+Math.imul(K,sA)|0)|0)+((8191&(C=(C=C+Math.imul(K,hA)|0)+Math.imul(Y,sA)|0))<<13)|0;t=((Q=Q+Math.imul(Y,hA)|0)+(C>>>13)|0)+(KA>>>26)|0,KA&=67108863,B=Math.imul(L,aA),C=(C=Math.imul(L,rA))+Math.imul(q,aA)|0,Q=Math.imul(q,rA);var YA=(t+(B=B+Math.imul(J,sA)|0)|0)+((8191&(C=(C=C+Math.imul(J,hA)|0)+Math.imul(b,sA)|0))<<13)|0;t=((Q=Q+Math.imul(b,hA)|0)+(C>>>13)|0)+(YA>>>26)|0,YA&=67108863;var pA=(t+(B=Math.imul(L,sA))|0)+((8191&(C=(C=Math.imul(L,hA))+Math.imul(q,sA)|0))<<13)|0;return t=((Q=Math.imul(q,hA))+(C>>>13)|0)+(pA>>>26)|0,pA&=67108863,o[0]=DA,o[1]=cA,o[2]=wA,o[3]=fA,o[4]=dA,o[5]=FA,o[6]=GA,o[7]=yA,o[8]=RA,o[9]=uA,o[10]=UA,o[11]=SA,o[12]=MA,o[13]=lA,o[14]=kA,o[15]=NA,o[16]=KA,o[17]=YA,o[18]=pA,0!==t&&(o[19]=t,g.length++),g};function s(A,I,g){return(new h).mulp(A,I,g)}function h(A,I){this.x=A,this.y=I}Math.imul||(n=r),Q.prototype.mulTo=function(A,I){var g=this.length+A.length;return 10===this.length&&10===A.length?n(this,A,I):g<63?r(this,A,I):g<1024?function(A,I,g){g.negative=I.negative^A.negative,g.length=A.length+I.length;for(var B=0,C=0,Q=0;Q<g.length-1;Q++){var E=C;C=0;for(var i=67108863&B,o=Math.min(Q,I.length-1),t=Math.max(0,Q-A.length+1);t<=o;t++){var e=Q-t,a=(0|A.words[e])*(0|I.words[t]),r=67108863&a;i=67108863&(r=r+i|0),C+=(E=(E=E+(a/67108864|0)|0)+(r>>>26)|0)>>>26,E&=67108863}g.words[Q]=i,B=E,E=C}return 0!==B?g.words[Q]=B:g.length--,g.strip()}(this,A,I):s(this,A,I)},h.prototype.makeRBT=function(A){for(var I=new Array(A),g=Q.prototype._countBits(A)-1,B=0;B<A;B++)I[B]=this.revBin(B,g,A);return I},h.prototype.revBin=function(A,I,g){if(0===A||A===g-1)return A;for(var B=0,C=0;C<I;C++)B|=(1&A)<<I-C-1,A>>=1;return B},h.prototype.permute=function(A,I,g,B,C,Q){for(var E=0;E<Q;E++)B[E]=I[A[E]],C[E]=g[A[E]]},h.prototype.transform=function(A,I,g,B,C,Q){this.permute(Q,A,I,g,B,C);for(var E=1;E<C;E<<=1)for(var i=E<<1,o=Math.cos(2*Math.PI/i),t=Math.sin(2*Math.PI/i),e=0;e<C;e+=i)for(var a=o,r=t,n=0;n<E;n++){var s=g[e+n],h=B[e+n],D=g[e+n+E],c=B[e+n+E],w=a*D-r*c;c=a*c+r*D,D=w,g[e+n]=s+D,B[e+n]=h+c,g[e+n+E]=s-D,B[e+n+E]=h-c,n!==i&&(w=o*a-t*r,r=o*r+t*a,a=w)}},h.prototype.guessLen13b=function(A,I){var g=1|Math.max(I,A),B=1&g,C=0;for(g=g/2|0;g;g>>>=1)C++;return 1<<C+1+B},h.prototype.conjugate=function(A,I,g){if(!(g<=1))for(var B=0;B<g/2;B++){var C=A[B];A[B]=A[g-B-1],A[g-B-1]=C,C=I[B],I[B]=-I[g-B-1],I[g-B-1]=-C}},h.prototype.normalize13b=function(A,I){for(var g=0,B=0;B<I/2;B++){var C=8192*Math.round(A[2*B+1]/I)+Math.round(A[2*B]/I)+g;A[B]=67108863&C,g=C<67108864?0:C/67108864|0}return A},h.prototype.convert13b=function(A,I,g,C){for(var Q=0,E=0;E<I;E++)Q+=0|A[E],g[2*E]=8191&Q,Q>>>=13,g[2*E+1]=8191&Q,Q>>>=13;for(E=2*I;E<C;++E)g[E]=0;B(0===Q),B(0==(-8192&Q))},h.prototype.stub=function(A){for(var I=new Array(A),g=0;g<A;g++)I[g]=0;return I},h.prototype.mulp=function(A,I,g){var B=2*this.guessLen13b(A.length,I.length),C=this.makeRBT(B),Q=this.stub(B),E=new Array(B),i=new Array(B),o=new Array(B),t=new Array(B),e=new Array(B),a=new Array(B),r=g.words;r.length=B,this.convert13b(A.words,A.length,E,B),this.convert13b(I.words,I.length,t,B),this.transform(E,Q,i,o,B,C),this.transform(t,Q,e,a,B,C);for(var n=0;n<B;n++){var s=i[n]*e[n]-o[n]*a[n];o[n]=i[n]*a[n]+o[n]*e[n],i[n]=s}return this.conjugate(i,o,B),this.transform(i,o,r,Q,B,C),this.conjugate(r,Q,B),this.normalize13b(r,B),g.negative=A.negative^I.negative,g.length=A.length+I.length,g.strip()},Q.prototype.mul=function(A){var I=new Q(null);return I.words=new Array(this.length+A.length),this.mulTo(A,I)},Q.prototype.mulf=function(A){var I=new Q(null);return I.words=new Array(this.length+A.length),s(this,A,I)},Q.prototype.imul=function(A){return this.clone().mulTo(A,this)},Q.prototype.imuln=function(A){B("number"==typeof A),B(A<67108864);for(var I=0,g=0;g<this.length;g++){var C=(0|this.words[g])*A,Q=(67108863&C)+(67108863&I);I>>=26,I+=C/67108864|0,I+=Q>>>26,this.words[g]=67108863&Q}return 0!==I&&(this.words[g]=I,this.length++),this},Q.prototype.muln=function(A){return this.clone().imuln(A)},Q.prototype.sqr=function(){return this.mul(this)},Q.prototype.isqr=function(){return this.imul(this.clone())},Q.prototype.pow=function(A){var I=function(A){for(var I=new Array(A.bitLength()),g=0;g<I.length;g++){var B=g/26|0,C=g%26;I[g]=(A.words[B]&1<<C)>>>C}return I}(A);if(0===I.length)return new Q(1);for(var g=this,B=0;B<I.length&&0===I[B];B++,g=g.sqr());if(++B<I.length)for(var C=g.sqr();B<I.length;B++,C=C.sqr())0!==I[B]&&(g=g.mul(C));return g},Q.prototype.iushln=function(A){B("number"==typeof A&&A>=0);var I,g=A%26,C=(A-g)/26,Q=67108863>>>26-g<<26-g;if(0!==g){var E=0;for(I=0;I<this.length;I++){var i=this.words[I]&Q,o=(0|this.words[I])-i<<g;this.words[I]=o|E,E=i>>>26-g}E&&(this.words[I]=E,this.length++)}if(0!==C){for(I=this.length-1;I>=0;I--)this.words[I+C]=this.words[I];for(I=0;I<C;I++)this.words[I]=0;this.length+=C}return this.strip()},Q.prototype.ishln=function(A){return B(0===this.negative),this.iushln(A)},Q.prototype.iushrn=function(A,I,g){var C;B("number"==typeof A&&A>=0),C=I?(I-I%26)/26:0;var Q=A%26,E=Math.min((A-Q)/26,this.length),i=67108863^67108863>>>Q<<Q,o=g;if(C-=E,C=Math.max(0,C),o){for(var t=0;t<E;t++)o.words[t]=this.words[t];o.length=E}if(0===E);else if(this.length>E)for(this.length-=E,t=0;t<this.length;t++)this.words[t]=this.words[t+E];else this.words[0]=0,this.length=1;var e=0;for(t=this.length-1;t>=0&&(0!==e||t>=C);t--){var a=0|this.words[t];this.words[t]=e<<26-Q|a>>>Q,e=a&i}return o&&0!==e&&(o.words[o.length++]=e),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},Q.prototype.ishrn=function(A,I,g){return B(0===this.negative),this.iushrn(A,I,g)},Q.prototype.shln=function(A){return this.clone().ishln(A)},Q.prototype.ushln=function(A){return this.clone().iushln(A)},Q.prototype.shrn=function(A){return this.clone().ishrn(A)},Q.prototype.ushrn=function(A){return this.clone().iushrn(A)},Q.prototype.testn=function(A){B("number"==typeof A&&A>=0);var I=A%26,g=(A-I)/26,C=1<<I;return!(this.length<=g)&&!!(this.words[g]&C)},Q.prototype.imaskn=function(A){B("number"==typeof A&&A>=0);var I=A%26,g=(A-I)/26;if(B(0===this.negative,"imaskn works only with positive numbers"),this.length<=g)return this;if(0!==I&&g++,this.length=Math.min(g,this.length),0!==I){var C=67108863^67108863>>>I<<I;this.words[this.length-1]&=C}return this.strip()},Q.prototype.maskn=function(A){return this.clone().imaskn(A)},Q.prototype.iaddn=function(A){return B("number"==typeof A),B(A<67108864),A<0?this.isubn(-A):0!==this.negative?1===this.length&&(0|this.words[0])<A?(this.words[0]=A-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(A),this.negative=1,this):this._iaddn(A)},Q.prototype._iaddn=function(A){this.words[0]+=A;for(var I=0;I<this.length&&this.words[I]>=67108864;I++)this.words[I]-=67108864,I===this.length-1?this.words[I+1]=1:this.words[I+1]++;return this.length=Math.max(this.length,I+1),this},Q.prototype.isubn=function(A){if(B("number"==typeof A),B(A<67108864),A<0)return this.iaddn(-A);if(0!==this.negative)return this.negative=0,this.iaddn(A),this.negative=1,this;if(this.words[0]-=A,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var I=0;I<this.length&&this.words[I]<0;I++)this.words[I]+=67108864,this.words[I+1]-=1;return this.strip()},Q.prototype.addn=function(A){return this.clone().iaddn(A)},Q.prototype.subn=function(A){return this.clone().isubn(A)},Q.prototype.iabs=function(){return this.negative=0,this},Q.prototype.abs=function(){return this.clone().iabs()},Q.prototype._ishlnsubmul=function(A,I,g){var C,Q,E=A.length+g;this._expand(E);var i=0;for(C=0;C<A.length;C++){Q=(0|this.words[C+g])+i;var o=(0|A.words[C])*I;i=((Q-=67108863&o)>>26)-(o/67108864|0),this.words[C+g]=67108863&Q}for(;C<this.length-g;C++)i=(Q=(0|this.words[C+g])+i)>>26,this.words[C+g]=67108863&Q;if(0===i)return this.strip();for(B(-1===i),i=0,C=0;C<this.length;C++)i=(Q=-(0|this.words[C])+i)>>26,this.words[C]=67108863&Q;return this.negative=1,this.strip()},Q.prototype._wordDiv=function(A,I){var g=(this.length,A.length),B=this.clone(),C=A,E=0|C.words[C.length-1];0!==(g=26-this._countBits(E))&&(C=C.ushln(g),B.iushln(g),E=0|C.words[C.length-1]);var i,o=B.length-C.length;if("mod"!==I){(i=new Q(null)).length=o+1,i.words=new Array(i.length);for(var t=0;t<i.length;t++)i.words[t]=0}var e=B.clone()._ishlnsubmul(C,1,o);0===e.negative&&(B=e,i&&(i.words[o]=1));for(var a=o-1;a>=0;a--){var r=67108864*(0|B.words[C.length+a])+(0|B.words[C.length+a-1]);for(r=Math.min(r/E|0,67108863),B._ishlnsubmul(C,r,a);0!==B.negative;)r--,B.negative=0,B._ishlnsubmul(C,1,a),B.isZero()||(B.negative^=1);i&&(i.words[a]=r)}return i&&i.strip(),B.strip(),"div"!==I&&0!==g&&B.iushrn(g),{div:i||null,mod:B}},Q.prototype.divmod=function(A,I,g){return B(!A.isZero()),this.isZero()?{div:new Q(0),mod:new Q(0)}:0!==this.negative&&0===A.negative?(i=this.neg().divmod(A,I),"mod"!==I&&(C=i.div.neg()),"div"!==I&&(E=i.mod.neg(),g&&0!==E.negative&&E.iadd(A)),{div:C,mod:E}):0===this.negative&&0!==A.negative?(i=this.divmod(A.neg(),I),"mod"!==I&&(C=i.div.neg()),{div:C,mod:i.mod}):0!=(this.negative&A.negative)?(i=this.neg().divmod(A.neg(),I),"div"!==I&&(E=i.mod.neg(),g&&0!==E.negative&&E.isub(A)),{div:i.div,mod:E}):A.length>this.length||this.cmp(A)<0?{div:new Q(0),mod:this}:1===A.length?"div"===I?{div:this.divn(A.words[0]),mod:null}:"mod"===I?{div:null,mod:new Q(this.modn(A.words[0]))}:{div:this.divn(A.words[0]),mod:new Q(this.modn(A.words[0]))}:this._wordDiv(A,I);var C,E,i},Q.prototype.div=function(A){return this.divmod(A,"div",!1).div},Q.prototype.mod=function(A){return this.divmod(A,"mod",!1).mod},Q.prototype.umod=function(A){return this.divmod(A,"mod",!0).mod},Q.prototype.divRound=function(A){var I=this.divmod(A);if(I.mod.isZero())return I.div;var g=0!==I.div.negative?I.mod.isub(A):I.mod,B=A.ushrn(1),C=A.andln(1),Q=g.cmp(B);return Q<0||1===C&&0===Q?I.div:0!==I.div.negative?I.div.isubn(1):I.div.iaddn(1)},Q.prototype.modn=function(A){B(A<=67108863);for(var I=(1<<26)%A,g=0,C=this.length-1;C>=0;C--)g=(I*g+(0|this.words[C]))%A;return g},Q.prototype.idivn=function(A){B(A<=67108863);for(var I=0,g=this.length-1;g>=0;g--){var C=(0|this.words[g])+67108864*I;this.words[g]=C/A|0,I=C%A}return this.strip()},Q.prototype.divn=function(A){return this.clone().idivn(A)},Q.prototype.egcd=function(A){B(0===A.negative),B(!A.isZero());var I=this,g=A.clone();I=0!==I.negative?I.umod(A):I.clone();for(var C=new Q(1),E=new Q(0),i=new Q(0),o=new Q(1),t=0;I.isEven()&&g.isEven();)I.iushrn(1),g.iushrn(1),++t;for(var e=g.clone(),a=I.clone();!I.isZero();){for(var r=0,n=1;0==(I.words[0]&n)&&r<26;++r,n<<=1);if(r>0)for(I.iushrn(r);r-- >0;)(C.isOdd()||E.isOdd())&&(C.iadd(e),E.isub(a)),C.iushrn(1),E.iushrn(1);for(var s=0,h=1;0==(g.words[0]&h)&&s<26;++s,h<<=1);if(s>0)for(g.iushrn(s);s-- >0;)(i.isOdd()||o.isOdd())&&(i.iadd(e),o.isub(a)),i.iushrn(1),o.iushrn(1);I.cmp(g)>=0?(I.isub(g),C.isub(i),E.isub(o)):(g.isub(I),i.isub(C),o.isub(E))}return{a:i,b:o,gcd:g.iushln(t)}},Q.prototype._invmp=function(A){B(0===A.negative),B(!A.isZero());var I=this,g=A.clone();I=0!==I.negative?I.umod(A):I.clone();for(var C,E=new Q(1),i=new Q(0),o=g.clone();I.cmpn(1)>0&&g.cmpn(1)>0;){for(var t=0,e=1;0==(I.words[0]&e)&&t<26;++t,e<<=1);if(t>0)for(I.iushrn(t);t-- >0;)E.isOdd()&&E.iadd(o),E.iushrn(1);for(var a=0,r=1;0==(g.words[0]&r)&&a<26;++a,r<<=1);if(a>0)for(g.iushrn(a);a-- >0;)i.isOdd()&&i.iadd(o),i.iushrn(1);I.cmp(g)>=0?(I.isub(g),E.isub(i)):(g.isub(I),i.isub(E))}return(C=0===I.cmpn(1)?E:i).cmpn(0)<0&&C.iadd(A),C},Q.prototype.gcd=function(A){if(this.isZero())return A.abs();if(A.isZero())return this.abs();var I=this.clone(),g=A.clone();I.negative=0,g.negative=0;for(var B=0;I.isEven()&&g.isEven();B++)I.iushrn(1),g.iushrn(1);for(;;){for(;I.isEven();)I.iushrn(1);for(;g.isEven();)g.iushrn(1);var C=I.cmp(g);if(C<0){var Q=I;I=g,g=Q}else if(0===C||0===g.cmpn(1))break;I.isub(g)}return g.iushln(B)},Q.prototype.invm=function(A){return this.egcd(A).a.umod(A)},Q.prototype.isEven=function(){return 0==(1&this.words[0])},Q.prototype.isOdd=function(){return 1==(1&this.words[0])},Q.prototype.andln=function(A){return this.words[0]&A},Q.prototype.bincn=function(A){B("number"==typeof A);var I=A%26,g=(A-I)/26,C=1<<I;if(this.length<=g)return this._expand(g+1),this.words[g]|=C,this;for(var Q=C,E=g;0!==Q&&E<this.length;E++){var i=0|this.words[E];Q=(i+=Q)>>>26,i&=67108863,this.words[E]=i}return 0!==Q&&(this.words[E]=Q,this.length++),this},Q.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},Q.prototype.cmpn=function(A){var I,g=A<0;if(0!==this.negative&&!g)return-1;if(0===this.negative&&g)return 1;if(this.strip(),this.length>1)I=1;else{g&&(A=-A),B(A<=67108863,"Number is too big");var C=0|this.words[0];I=C===A?0:C<A?-1:1}return 0!==this.negative?0|-I:I},Q.prototype.cmp=function(A){if(0!==this.negative&&0===A.negative)return-1;if(0===this.negative&&0!==A.negative)return 1;var I=this.ucmp(A);return 0!==this.negative?0|-I:I},Q.prototype.ucmp=function(A){if(this.length>A.length)return 1;if(this.length<A.length)return-1;for(var I=0,g=this.length-1;g>=0;g--){var B=0|this.words[g],C=0|A.words[g];if(B!==C){B<C?I=-1:B>C&&(I=1);break}}return I},Q.prototype.gtn=function(A){return 1===this.cmpn(A)},Q.prototype.gt=function(A){return 1===this.cmp(A)},Q.prototype.gten=function(A){return this.cmpn(A)>=0},Q.prototype.gte=function(A){return this.cmp(A)>=0},Q.prototype.ltn=function(A){return-1===this.cmpn(A)},Q.prototype.lt=function(A){return-1===this.cmp(A)},Q.prototype.lten=function(A){return this.cmpn(A)<=0},Q.prototype.lte=function(A){return this.cmp(A)<=0},Q.prototype.eqn=function(A){return 0===this.cmpn(A)},Q.prototype.eq=function(A){return 0===this.cmp(A)},Q.red=function(A){return new G(A)},Q.prototype.toRed=function(A){return B(!this.red,"Already a number in reduction context"),B(0===this.negative,"red works only with positives"),A.convertTo(this)._forceRed(A)},Q.prototype.fromRed=function(){return B(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},Q.prototype._forceRed=function(A){return this.red=A,this},Q.prototype.forceRed=function(A){return B(!this.red,"Already a number in reduction context"),this._forceRed(A)},Q.prototype.redAdd=function(A){return B(this.red,"redAdd works only with red numbers"),this.red.add(this,A)},Q.prototype.redIAdd=function(A){return B(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,A)},Q.prototype.redSub=function(A){return B(this.red,"redSub works only with red numbers"),this.red.sub(this,A)},Q.prototype.redISub=function(A){return B(this.red,"redISub works only with red numbers"),this.red.isub(this,A)},Q.prototype.redShl=function(A){return B(this.red,"redShl works only with red numbers"),this.red.shl(this,A)},Q.prototype.redMul=function(A){return B(this.red,"redMul works only with red numbers"),this.red._verify2(this,A),this.red.mul(this,A)},Q.prototype.redIMul=function(A){return B(this.red,"redMul works only with red numbers"),this.red._verify2(this,A),this.red.imul(this,A)},Q.prototype.redSqr=function(){return B(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},Q.prototype.redISqr=function(){return B(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},Q.prototype.redSqrt=function(){return B(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},Q.prototype.redInvm=function(){return B(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},Q.prototype.redNeg=function(){return B(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},Q.prototype.redPow=function(A){return B(this.red&&!A.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,A)};var D={k256:null,p224:null,p192:null,p25519:null};function c(A,I){this.name=A,this.p=new Q(I,16),this.n=this.p.bitLength(),this.k=new Q(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function w(){c.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function f(){c.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function d(){c.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function F(){c.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function G(A){if("string"==typeof A){var I=Q._prime(A);this.m=I.p,this.prime=I}else B(A.gtn(1),"modulus must be greater than 1"),this.m=A,this.prime=null}function y(A){G.call(this,A),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new Q(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}c.prototype._tmp=function(){var A=new Q(null);return A.words=new Array(Math.ceil(this.n/13)),A},c.prototype.ireduce=function(A){var I,g=A;do{this.split(g,this.tmp),I=(g=(g=this.imulK(g)).iadd(this.tmp)).bitLength()}while(I>this.n);var B=I<this.n?-1:g.ucmp(this.p);return 0===B?(g.words[0]=0,g.length=1):B>0?g.isub(this.p):g.strip(),g},c.prototype.split=function(A,I){A.iushrn(this.n,0,I)},c.prototype.imulK=function(A){return A.imul(this.k)},C(w,c),w.prototype.split=function(A,I){for(var g=Math.min(A.length,9),B=0;B<g;B++)I.words[B]=A.words[B];if(I.length=g,A.length<=9)return A.words[0]=0,void(A.length=1);var C=A.words[9];for(I.words[I.length++]=4194303&C,B=10;B<A.length;B++){var Q=0|A.words[B];A.words[B-10]=(4194303&Q)<<4|C>>>22,C=Q}C>>>=22,A.words[B-10]=C,0===C&&A.length>10?A.length-=10:A.length-=9},w.prototype.imulK=function(A){A.words[A.length]=0,A.words[A.length+1]=0,A.length+=2;for(var I=0,g=0;g<A.length;g++){var B=0|A.words[g];I+=977*B,A.words[g]=67108863&I,I=64*B+(I/67108864|0)}return 0===A.words[A.length-1]&&(A.length--,0===A.words[A.length-1]&&A.length--),A},C(f,c),C(d,c),C(F,c),F.prototype.imulK=function(A){for(var I=0,g=0;g<A.length;g++){var B=19*(0|A.words[g])+I,C=67108863&B;B>>>=26,A.words[g]=C,I=B}return 0!==I&&(A.words[A.length++]=I),A},Q._prime=function(A){if(D[A])return D[A];var I;if("k256"===A)I=new w;else if("p224"===A)I=new f;else if("p192"===A)I=new d;else{if("p25519"!==A)throw new Error("Unknown prime "+A);I=new F}return D[A]=I,I},G.prototype._verify1=function(A){B(0===A.negative,"red works only with positives"),B(A.red,"red works only with red numbers")},G.prototype._verify2=function(A,I){B(0==(A.negative|I.negative),"red works only with positives"),B(A.red&&A.red===I.red,"red works only with red numbers")},G.prototype.imod=function(A){return this.prime?this.prime.ireduce(A)._forceRed(this):A.umod(this.m)._forceRed(this)},G.prototype.neg=function(A){return A.isZero()?A.clone():this.m.sub(A)._forceRed(this)},G.prototype.add=function(A,I){this._verify2(A,I);var g=A.add(I);return g.cmp(this.m)>=0&&g.isub(this.m),g._forceRed(this)},G.prototype.iadd=function(A,I){this._verify2(A,I);var g=A.iadd(I);return g.cmp(this.m)>=0&&g.isub(this.m),g},G.prototype.sub=function(A,I){this._verify2(A,I);var g=A.sub(I);return g.cmpn(0)<0&&g.iadd(this.m),g._forceRed(this)},G.prototype.isub=function(A,I){this._verify2(A,I);var g=A.isub(I);return g.cmpn(0)<0&&g.iadd(this.m),g},G.prototype.shl=function(A,I){return this._verify1(A),this.imod(A.ushln(I))},G.prototype.imul=function(A,I){return this._verify2(A,I),this.imod(A.imul(I))},G.prototype.mul=function(A,I){return this._verify2(A,I),this.imod(A.mul(I))},G.prototype.isqr=function(A){return this.imul(A,A.clone())},G.prototype.sqr=function(A){return this.mul(A,A)},G.prototype.sqrt=function(A){if(A.isZero())return A.clone();var I=this.m.andln(3);if(B(I%2==1),3===I){var g=this.m.add(new Q(1)).iushrn(2);return this.pow(A,g)}for(var C=this.m.subn(1),E=0;!C.isZero()&&0===C.andln(1);)E++,C.iushrn(1);B(!C.isZero());var i=new Q(1).toRed(this),o=i.redNeg(),t=this.m.subn(1).iushrn(1),e=this.m.bitLength();for(e=new Q(2*e*e).toRed(this);0!==this.pow(e,t).cmp(o);)e.redIAdd(o);for(var a=this.pow(e,C),r=this.pow(A,C.addn(1).iushrn(1)),n=this.pow(A,C),s=E;0!==n.cmp(i);){for(var h=n,D=0;0!==h.cmp(i);D++)h=h.redSqr();B(D<s);var c=this.pow(a,new Q(1).iushln(s-D-1));r=r.redMul(c),a=c.redSqr(),n=n.redMul(a),s=D}return r},G.prototype.invm=function(A){var I=A._invmp(this.m);return 0!==I.negative?(I.negative=0,this.imod(I).redNeg()):this.imod(I)},G.prototype.pow=function(A,I){if(I.isZero())return new Q(1).toRed(this);if(0===I.cmpn(1))return A.clone();var g=new Array(16);g[0]=new Q(1).toRed(this),g[1]=A;for(var B=2;B<g.length;B++)g[B]=this.mul(g[B-1],A);var C=g[0],E=0,i=0,o=I.bitLength()%26;for(0===o&&(o=26),B=I.length-1;B>=0;B--){for(var t=I.words[B],e=o-1;e>=0;e--){var a=t>>e&1;C!==g[0]&&(C=this.sqr(C)),0!==a||0!==E?(E<<=1,E|=a,(4===++i||0===B&&0===e)&&(C=this.mul(C,g[E]),i=0,E=0)):i=0}o=26}return C},G.prototype.convertTo=function(A){var I=A.umod(this.m);return I===A?I.clone():I},G.prototype.convertFrom=function(A){var I=A.clone();return I.red=null,I},Q.mont=function(A){return new y(A)},C(y,G),y.prototype.convertTo=function(A){return this.imod(A.ushln(this.shift))},y.prototype.convertFrom=function(A){var I=this.imod(A.mul(this.rinv));return I.red=null,I},y.prototype.imul=function(A,I){if(A.isZero()||I.isZero())return A.words[0]=0,A.length=1,A;var g=A.imul(I),B=g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),C=g.isub(B).iushrn(this.shift),Q=C;return C.cmp(this.m)>=0?Q=C.isub(this.m):C.cmpn(0)<0&&(Q=C.iadd(this.m)),Q._forceRed(this)},y.prototype.mul=function(A,I){if(A.isZero()||I.isZero())return new Q(0)._forceRed(this);var g=A.mul(I),B=g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),C=g.isub(B).iushrn(this.shift),E=C;return C.cmp(this.m)>=0?E=C.isub(this.m):C.cmpn(0)<0&&(E=C.iadd(this.m)),E._forceRed(this)},y.prototype.invm=function(A){return this.imod(A._invmp(this.m).mul(this.r2))._forceRed(this)}}(A,this)}).call(this,g(137)(A))},function(A,I,g){"use strict";(function(A){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/***/ }),

/***/ "./three.js/src/markers-area/arjs-markersareacontrols.js":
/*!***************************************************************!*\
  !*** ./three.js/src/markers-area/arjs-markersareacontrols.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _threex_threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../threex/threex-arbasecontrols */ "./three.js/src/threex/threex-arbasecontrols.js");
/* harmony import */ var _threex_arjs_markercontrols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../threex/arjs-markercontrols */ "./three.js/src/threex/arjs-markercontrols.js");
/* harmony import */ var _arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arjs-markersareacontrols */ "./three.js/src/markers-area/arjs-markersareacontrols.js");





const MarkersAreaControls = function(arToolkitContext, object3d, parameters){
	var _this = this
	_threex_threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_1__.default.call(this, object3d)

	if( arguments.length > 3 )	console.assert('wrong api for', MarkersAreaControls)

	// have a parameters in argument
	this.parameters = {
		// list of controls for each subMarker
		subMarkersControls: parameters.subMarkersControls,
		// list of pose for each subMarker relative to the origin
		subMarkerPoses: parameters.subMarkerPoses,
		// change matrix mode - [modelViewMatrix, cameraTransformMatrix]
		changeMatrixMode : parameters.changeMatrixMode !== undefined ? parameters.changeMatrixMode : 'modelViewMatrix',
	}
	
	this.object3d.visible = false
	// honor obsolete stuff - add a warning to use
	this.subMarkersControls = this.parameters.subMarkersControls
	this.subMarkerPoses = this.parameters.subMarkerPoses

	// listen to arToolkitContext event 'sourceProcessed'
	// - after we fully processed one image, aka when we know all detected poses in it
	arToolkitContext.addEventListener('sourceProcessed', function(){
		_this._onSourceProcessed()
	})
}

MarkersAreaControls.prototype = Object.create( _threex_threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_1__.default.prototype );
MarkersAreaControls.prototype.constructor = MarkersAreaControls;

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////


/**
 * What to do when a image source is fully processed
 */
MarkersAreaControls.prototype._onSourceProcessed = function(){
	var _this = this
	var stats = {
		count: 0,
		position : {
			sum: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),
			average: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),
		},
		quaternion : {
			sum: new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0,0,0,0),
			average: new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0,0,0,0),
		},
		scale : {
			sum: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),
			average: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),
		},
	}

	var firstQuaternion = _this.parameters.subMarkersControls[0].object3d.quaternion

	this.parameters.subMarkersControls.forEach(function(markerControls, markerIndex){
		
		var markerObject3d = markerControls.object3d
		// if this marker is not visible, ignore it
		if( markerObject3d.visible === false )	return

		// transformation matrix of this.object3d according to this sub-markers
		var matrix = markerObject3d.matrix.clone()
		var markerPose = _this.parameters.subMarkerPoses[markerIndex]
		matrix.multiply(new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().getInverse(markerPose))

		// decompose the matrix into .position, .quaternion, .scale
		var position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3
		var quaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion()
		var scale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3
		matrix.decompose(position, quaternion, scale)

		// http://wiki.unity3d.com/index.php/Averaging_Quaternions_and_Vectors
		stats.count++

		MarkersAreaControls.averageVector3(stats.position.sum, position, stats.count, stats.position.average)
		MarkersAreaControls.averageQuaternion(stats.quaternion.sum, quaternion, firstQuaternion, stats.count, stats.quaternion.average)
		MarkersAreaControls.averageVector3(stats.scale.sum, scale, stats.count, stats.scale.average)
	})

	// honor _this.object3d.visible
	if( stats.count > 0 ){
		_this.object3d.visible = true
	}else{
		_this.object3d.visible = false			
	}

	// if at least one sub-marker has been detected, make the average of all detected markers
	if( stats.count > 0 ){
		// compute modelViewMatrix
		var modelViewMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4()
		modelViewMatrix.compose(stats.position.average, stats.quaternion.average, stats.scale.average)

		// change _this.object3d.matrix based on parameters.changeMatrixMode
		if( this.parameters.changeMatrixMode === 'modelViewMatrix' ){
			_this.object3d.matrix.copy(modelViewMatrix)
		}else if( this.parameters.changeMatrixMode === 'cameraTransformMatrix' ){
			_this.object3d.matrix.getInverse( modelViewMatrix )
		}else {
			console.assert(false)
		}

		// decompose - the matrix into .position, .quaternion, .scale
		_this.object3d.matrix.decompose(_this.object3d.position, _this.object3d.quaternion, _this.object3d.scale)
	}

}

//////////////////////////////////////////////////////////////////////////////
//		Utility functions
//////////////////////////////////////////////////////////////////////////////

/**
 * from http://wiki.unity3d.com/index.php/Averaging_Quaternions_and_Vectors
 */
MarkersAreaControls.averageQuaternion = function(quaternionSum, newQuaternion, firstQuaternion, count, quaternionAverage){
	quaternionAverage = quaternionAverage || new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion()
	// sanity check
	console.assert(firstQuaternion instanceof three__WEBPACK_IMPORTED_MODULE_0__.Quaternion === true)
	
	// from http://wiki.unity3d.com/index.php/Averaging_Quaternions_and_Vectors
	if( newQuaternion.dot(firstQuaternion) > 0 ){
		newQuaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion(-newQuaternion.x, -newQuaternion.y, -newQuaternion.z, -newQuaternion.w)
	}

	quaternionSum.x += newQuaternion.x
	quaternionSum.y += newQuaternion.y
	quaternionSum.z += newQuaternion.z
	quaternionSum.w += newQuaternion.w
	
	quaternionAverage.x = quaternionSum.x/count
	quaternionAverage.y = quaternionSum.y/count
	quaternionAverage.z = quaternionSum.z/count
	quaternionAverage.w = quaternionSum.w/count
	
	quaternionAverage.normalize()

	return quaternionAverage
}


MarkersAreaControls.averageVector3 = function(vector3Sum, vector3, count, vector3Average){
	vector3Average = vector3Average || new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()
	
	vector3Sum.x += vector3.x
	vector3Sum.y += vector3.y
	vector3Sum.z += vector3.z
	
	vector3Average.x = vector3Sum.x / count
	vector3Average.y = vector3Sum.y / count
	vector3Average.z = vector3Sum.z / count
	
	return vector3Average
}

//////////////////////////////////////////////////////////////////////////////
//		Utility function
//////////////////////////////////////////////////////////////////////////////

/**
 * compute the center of this multimarker file
 */
MarkersAreaControls.computeCenter = function(jsonData){
	var multiMarkerFile = JSON.parse(jsonData)
	var stats = {
		count : 0,
		position : {
			sum: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),
			average: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),						
		},
		quaternion : {
			sum: new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0,0,0,0),
			average: new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0,0,0,0),						
		},
		scale : {
			sum: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),
			average: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),						
		},
	}
	var firstQuaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion() // FIXME ???
	
	multiMarkerFile.subMarkersControls.forEach(function(item){
		var poseMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray(item.poseMatrix)
		
		var position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3
		var quaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion
		var scale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3
		poseMatrix.decompose(position, quaternion, scale)
		
		// http://wiki.unity3d.com/index.php/Averaging_Quaternions_and_Vectors
		stats.count++

		MarkersAreaControls.averageVector3(stats.position.sum, position, stats.count, stats.position.average)
		MarkersAreaControls.averageQuaternion(stats.quaternion.sum, quaternion, firstQuaternion, stats.count, stats.quaternion.average)
		MarkersAreaControls.averageVector3(stats.scale.sum, scale, stats.count, stats.scale.average)
	})
	
	var averageMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4()
	averageMatrix.compose(stats.position.average, stats.quaternion.average, stats.scale.average)

	return averageMatrix
}

MarkersAreaControls.computeBoundingBox = function(jsonData){
	var multiMarkerFile = JSON.parse(jsonData)
	var boundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3()

	multiMarkerFile.subMarkersControls.forEach(function(item){
		var poseMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray(item.poseMatrix)
		
		var position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3
		var quaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion
		var scale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3
		poseMatrix.decompose(position, quaternion, scale)

		boundingBox.expandByPoint(position)
	})

	return boundingBox
}
//////////////////////////////////////////////////////////////////////////////
//		updateSmoothedControls
//////////////////////////////////////////////////////////////////////////////

MarkersAreaControls.prototype.updateSmoothedControls = function(smoothedControls, lerpsValues){
	// handle default values
	if( lerpsValues === undefined ){
		// FIXME this parameter format is uselessly cryptic
		// lerpValues = [
		// {lerpPosition: 0.5, lerpQuaternion: 0.2, lerpQuaternion: 0.7}
		// ]
		lerpsValues = [
			[0.3+.1, 0.1, 0.3],
			[0.4+.1, 0.1, 0.4],
			[0.4+.1, 0.2, 0.5],
			[0.5+.1, 0.2, 0.7],
			[0.5+.1, 0.2, 0.7],
		]
	}
	// count how many subMarkersControls are visible
	var nVisible = 0
	this.parameters.subMarkersControls.forEach(function(markerControls, markerIndex){
		var markerObject3d = markerControls.object3d
		if( markerObject3d.visible === true )	nVisible ++
	})

	// find the good lerpValues
	if( lerpsValues[nVisible-1] !== undefined ){
		var lerpValues = lerpsValues[nVisible-1]
	}else{
		var lerpValues = lerpsValues[lerpsValues.length-1]
	}

	// modify lerpValues in smoothedControls
	smoothedControls.parameters.lerpPosition = lerpValues[0]
	smoothedControls.parameters.lerpQuaternion = lerpValues[1]
	smoothedControls.parameters.lerpScale = lerpValues[2]
}


//////////////////////////////////////////////////////////////////////////////
//		Create ArMultiMarkerControls from JSON
//////////////////////////////////////////////////////////////////////////////

MarkersAreaControls.fromJSON = function(arToolkitContext, parent3D, markerRoot, jsonData, parameters){
	var multiMarkerFile = JSON.parse(jsonData)
	// declare variables
	var subMarkersControls = []
	var subMarkerPoses = []
	// handle default arguments
	parameters = parameters || {}

	// prepare the parameters
	multiMarkerFile.subMarkersControls.forEach(function(item){
		// create a markerRoot
		var markerRoot = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D()
		parent3D.add(markerRoot)

		// create markerControls for our markerRoot
		var subMarkerControls = new _threex_arjs_markercontrols__WEBPACK_IMPORTED_MODULE_2__.default(arToolkitContext, markerRoot, item.parameters)

// if( true ){
		// store it in the parameters
		subMarkersControls.push(subMarkerControls)
		subMarkerPoses.push(new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray(item.poseMatrix))	
// }else{
// 		// build a smoothedControls
// 		var smoothedRoot = new THREE.Group()
// 		parent3D.add(smoothedRoot)
// 		var smoothedControls = new THREEx.ArSmoothedControls(smoothedRoot, {
// 			lerpPosition : 0.1,
// 			lerpQuaternion : 0.1, 
// 			lerpScale : 0.1,
// 			minVisibleDelay: 0,
// 			minUnvisibleDelay: 0,
// 		})
// 		onRenderFcts.push(function(delta){
// 			smoothedControls.update(markerRoot)	// TODO this is a global
// 		})
// 	
// 
// 		// store it in the parameters
// 		subMarkersControls.push(smoothedControls)
// 		subMarkerPoses.push(new THREE.Matrix4().fromArray(item.poseMatrix))
// }
	})
	
	parameters.subMarkersControls = subMarkersControls
	parameters.subMarkerPoses = subMarkerPoses
	// create a new ArMultiMarkerControls
	var multiMarkerControls = new _arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_3__.default(arToolkitContext, markerRoot, parameters)

	// return it
	return multiMarkerControls	
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkersAreaControls);

/***/ }),

/***/ "./three.js/src/markers-area/arjs-markersarealearning.js":
/*!***************************************************************!*\
  !*** ./three.js/src/markers-area/arjs-markersarealearning.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arjs-markersareacontrols */ "./three.js/src/markers-area/arjs-markersareacontrols.js");


const MarkersAreaLearning = function(arToolkitContext, subMarkersControls){
	var _this = this
	this._arToolkitContext = arToolkitContext

	// Init variables
	this.subMarkersControls = subMarkersControls
	this.enabled = true
		
	// listen to arToolkitContext event 'sourceProcessed'
	// - after we fully processed one image, aka when we know all detected poses in it
	arToolkitContext.addEventListener('sourceProcessed', function(){
		_this._onSourceProcessed()
	})
}

//////////////////////////////////////////////////////////////////////////////
//		statistic collection
//////////////////////////////////////////////////////////////////////////////

/**
 * What to do when a image source is fully processed
 */
MarkersAreaLearning.prototype._onSourceProcessed = function(){
	var originQuaternion = this.subMarkersControls[0].object3d.quaternion
	// here collect the statistic on relative positioning 
	
	// honor this.enabled
	if( this.enabled === false )	return

	// keep only the visible markers
	var visibleMarkerControls = this.subMarkersControls.filter(function(markerControls){
		return markerControls.object3d.visible === true
	})

	var count = Object.keys(visibleMarkerControls).length

	var positionDelta = new THREE.Vector3()
	var quaternionDelta = new THREE.Quaternion()
	var scaleDelta = new THREE.Vector3()
	var tmpMatrix = new THREE.Matrix4()
	
	// go thru all the visibleMarkerControls
	for(var i = 0; i < count; i++){
		var markerControls1 = visibleMarkerControls[i]
		for(var j = 0; j < count; j++){
			var markerControls2 = visibleMarkerControls[j]

			// if markerControls1 is markerControls2, then skip it
			if( i === j )	continue


			//////////////////////////////////////////////////////////////////////////////
			//		create data in markerControls1.object3d.userData if needed
			//////////////////////////////////////////////////////////////////////////////
			// create seenCouples for markerControls1 if needed
			if( markerControls1.object3d.userData.seenCouples === undefined ){
				markerControls1.object3d.userData.seenCouples = {}
			}
			var seenCouples = markerControls1.object3d.userData.seenCouples
			// create the multiMarkerPosition average if needed`
			if( seenCouples[markerControls2.id] === undefined ){
				// console.log('create seenCouples between', markerControls1.id, 'and', markerControls2.id)
				seenCouples[markerControls2.id] = {
					count : 0,
					position : {
						sum: new THREE.Vector3(0,0,0),
						average: new THREE.Vector3(0,0,0),						
					},
					quaternion : {
						sum: new THREE.Quaternion(0,0,0,0),
						average: new THREE.Quaternion(0,0,0,0),						
					},
					scale : {
						sum: new THREE.Vector3(0,0,0),
						average: new THREE.Vector3(0,0,0),						
					},
				}
			}

			
			//////////////////////////////////////////////////////////////////////////////
			//		Compute markerControls2 position relative to markerControls1
			//////////////////////////////////////////////////////////////////////////////
			
			// compute markerControls2 position/quaternion/scale in relation with markerControls1
			tmpMatrix.getInverse(markerControls1.object3d.matrix)
			tmpMatrix.multiply(markerControls2.object3d.matrix)
			tmpMatrix.decompose(positionDelta, quaternionDelta, scaleDelta)
			
			//////////////////////////////////////////////////////////////////////////////
			//		update statistics
			//////////////////////////////////////////////////////////////////////////////
			var stats = seenCouples[markerControls2.id]
			// update the count
			stats.count++

			// update the average of position/rotation/scale
			_arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_0__.default.averageVector3(stats.position.sum, positionDelta, stats.count, stats.position.average)
			_arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_0__.default.averageQuaternion(stats.quaternion.sum, quaternionDelta, originQuaternion, stats.count, stats.quaternion.average)
			_arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_0__.default.averageVector3(stats.scale.sum, scaleDelta, stats.count, stats.scale.average)
		}
	}
}

//////////////////////////////////////////////////////////////////////////////
//		Compute markers transformation matrix from current stats
//////////////////////////////////////////////////////////////////////////////

MarkersAreaLearning.prototype.computeResult = function(){
	var _this = this
	var originSubControls = this.subMarkersControls[0]

	this.deleteResult()

	// special case of originSubControls averageMatrix
	originSubControls.object3d.userData.result = {
		averageMatrix : new THREE.Matrix4(),
		confidenceFactor: 1,
	}
	// TODO here check if the originSubControls has been seen at least once!!
	
	
	/**
	 * ALGO in pseudo code
	 *
	 * - Set confidenceFactor of origin sub markers as 1
	 *
	 * Start Looping
	 * - For a given sub marker, skip it if it already has a result.
	 * - if no result, check all seen couple and find n ones which has a progress of 1 or more.
	 * - So the other seen sub markers, got a valid transformation matrix. 
	 * - So take local averages position/orientation/scale, compose a transformation matrix. 
	 *   - aka transformation matrix from parent matrix * transf matrix pos/orientation/scale
	 * - Multiple it by the other seen marker matrix. 
	 * - Loop on the array until one pass could not compute any new sub marker
	 */
	
	do{
		var resultChanged = false
		// loop over each subMarkerControls
		this.subMarkersControls.forEach(function(subMarkerControls){

			// if subMarkerControls already has a result, do nothing
			var result = subMarkerControls.object3d.userData.result
			var isLearned = (result !== undefined && result.confidenceFactor >= 1) ? true : false
			if( isLearned === true )	return
			
			// console.log('compute subMarkerControls', subMarkerControls.name())
			var otherSubControlsID = _this._getLearnedCoupleStats(subMarkerControls)
			if( otherSubControlsID === null ){
				// console.log('no learnedCoupleStats')
				return
			}
			
			var otherSubControls = _this._getSubMarkerControlsByID(otherSubControlsID)

			var seenCoupleStats = subMarkerControls.object3d.userData.seenCouples[otherSubControlsID]
			
			var averageMatrix = new THREE.Matrix4()
			averageMatrix.compose(seenCoupleStats.position.average, seenCoupleStats.quaternion.average, seenCoupleStats.scale.average)
				
			var otherAverageMatrix = otherSubControls.object3d.userData.result.averageMatrix

			var matrix = new THREE.Matrix4().getInverse(otherAverageMatrix).multiply(averageMatrix)
			matrix = new THREE.Matrix4().getInverse(matrix)

			console.assert( subMarkerControls.object3d.userData.result === undefined )
			subMarkerControls.object3d.userData.result = {
				averageMatrix: matrix,
				confidenceFactor: 1
			}
			
			resultChanged = true
		})
		// console.log('loop')
	}while(resultChanged === true)
	
	// debugger
	// console.log('json:', this.toJSON())
	// this.subMarkersControls.forEach(function(subMarkerControls){
	// 	var hasResult = subMarkerControls.object3d.userData.result !== undefined
	// 	console.log('marker', subMarkerControls.name(), hasResult ? 'has' : 'has NO', 'result')
	// })
}

//////////////////////////////////////////////////////////////////////////////
//		Utility function
//////////////////////////////////////////////////////////////////////////////

/** 
 * get a _this.subMarkersControls id based on markerControls.id
 */
MarkersAreaLearning.prototype._getLearnedCoupleStats	= function(subMarkerControls){

	// if this subMarkerControls has never been seen with another subMarkerControls
	if( subMarkerControls.object3d.userData.seenCouples === undefined )	return null
	
	var seenCouples = subMarkerControls.object3d.userData.seenCouples
	var coupleControlsIDs = Object.keys(seenCouples).map(Number)

	for(var i = 0; i < coupleControlsIDs.length; i++){
		var otherSubControlsID = coupleControlsIDs[i]
		// get otherSubControls
		var otherSubControls = this._getSubMarkerControlsByID(otherSubControlsID)
			
		// if otherSubControls isnt learned, skip it
		var result = otherSubControls.object3d.userData.result
		var isLearned = (result !== undefined && result.confidenceFactor >= 1) ? true : false
		if( isLearned === false )	continue

		// return this seenCouplesStats
		return otherSubControlsID
	}
	
	// if none is found, return null
	return null
}

/** 
 * get a _this.subMarkersControls based on markerControls.id
 */
MarkersAreaLearning.prototype._getSubMarkerControlsByID	= function(controlsID){

	for(var i = 0; i < this.subMarkersControls.length; i++){
		var subMarkerControls = this.subMarkersControls[i]
		if( subMarkerControls.id === controlsID ){
			return subMarkerControls
		}
	}

	return null
}
 //////////////////////////////////////////////////////////////////////////////
//		JSON file building
//////////////////////////////////////////////////////////////////////////////

MarkersAreaLearning.prototype.toJSON = function(){

	// compute the average matrix before generating the file
	this.computeResult()

	//////////////////////////////////////////////////////////////////////////////
	//		actually build the json
	//////////////////////////////////////////////////////////////////////////////
	var data = {
		meta : {
			createdBy : "Area Learning - AR.js "+THREEx.ArToolkitContext.REVISION, // TODO: ArToolkitContext depending on build
			createdAt : new Date().toJSON(),
			
		},
		trackingBackend: this._arToolkitContext.parameters.trackingBackend,
		subMarkersControls : [],
	}

	var originSubControls = this.subMarkersControls[0]
	var originMatrixInverse = new THREE.Matrix4().getInverse(originSubControls.object3d.matrix)
	this.subMarkersControls.forEach(function(subMarkerControls, index){
		
		// if a subMarkerControls has no result, ignore it
		if( subMarkerControls.object3d.userData.result === undefined )	return

		var poseMatrix = subMarkerControls.object3d.userData.result.averageMatrix
		console.assert(poseMatrix instanceof THREE.Matrix4)
		

		// build the info
		var info = {
			parameters : {
				// to fill ...
			},
			poseMatrix : poseMatrix.toArray(),
		}
		if( subMarkerControls.parameters.type === 'pattern' ){
			info.parameters.type = subMarkerControls.parameters.type
			info.parameters.patternUrl = subMarkerControls.parameters.patternUrl
		}else if( subMarkerControls.parameters.type === 'barcode' ){
			info.parameters.type = subMarkerControls.parameters.type
			info.parameters.barcodeValue = subMarkerControls.parameters.barcodeValue
		}else console.assert(false)

		data.subMarkersControls.push(info)
	})

	var strJSON = JSON.stringify(data, null, '\t');
	
	
	//////////////////////////////////////////////////////////////////////////////
	//		round matrix elements to ease readability - for debug
	//////////////////////////////////////////////////////////////////////////////
	var humanReadable = false
	if( humanReadable === true ){
		var tmp = JSON.parse(strJSON)
		tmp.subMarkersControls.forEach(function(markerControls){
			markerControls.poseMatrix = markerControls.poseMatrix.map(function(value){
				var roundingFactor = 100
				return Math.round(value*roundingFactor)/roundingFactor
			})
		})
		strJSON = JSON.stringify(tmp, null, '\t');
	}
	
	return strJSON;	
}

//////////////////////////////////////////////////////////////////////////////
//		utility function
//////////////////////////////////////////////////////////////////////////////

/**
 * reset all collected statistics
 */
MarkersAreaLearning.prototype.resetStats = function(){
	this.deleteResult()
	
	this.subMarkersControls.forEach(function(markerControls){
		delete markerControls.object3d.userData.seenCouples
	})
}
/**
 * reset all collected statistics
 */
MarkersAreaLearning.prototype.deleteResult = function(){
	this.subMarkersControls.forEach(function(markerControls){
		delete markerControls.object3d.userData.result
	})
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkersAreaLearning);


/***/ }),

/***/ "./three.js/src/markers-area/arjs-markersareautils.js":
/*!************************************************************!*\
  !*** ./three.js/src/markers-area/arjs-markersareautils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _threex_arjs_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../threex/arjs-context */ "./three.js/src/threex/arjs-context.js");

 // TODO context build-dependent

const MarkersAreaUtils = {};

//////////////////////////////////////////////////////////////////////////////
//		navigateToLearnerPage
//////////////////////////////////////////////////////////////////////////////

/**
 * Navigate to the multi-marker learner page
 *
 * @param {String} learnerBaseURL  - the base url for the learner
 * @param {String} trackingBackend - the tracking backend to use
 */
MarkersAreaUtils.navigateToLearnerPage = function(learnerBaseURL, trackingBackend){
	var learnerParameters = {
		backURL : location.href,
		trackingBackend: trackingBackend,
		markersControlsParameters: MarkersAreaUtils.createDefaultMarkersControlsParameters(trackingBackend),
	}
	location.href = learnerBaseURL + '?' + encodeURIComponent(JSON.stringify(learnerParameters))
}

//////////////////////////////////////////////////////////////////////////////
//		DefaultMultiMarkerFile
//////////////////////////////////////////////////////////////////////////////

/**
 * Create and store a default multi-marker file
 *
 * @param {String} trackingBackend - the tracking backend to use
 */
MarkersAreaUtils.storeDefaultMultiMarkerFile = function(trackingBackend){
	var file = MarkersAreaUtils.createDefaultMultiMarkerFile(trackingBackend)
	// json.strinfy the value and store it in localStorage
	localStorage.setItem('ARjsMultiMarkerFile', JSON.stringify(file))
}



/**
 * Create a default multi-marker file
 * @param {String} trackingBackend - the tracking backend to use
 * @return {Object} - json object of the multi-marker file
 */
MarkersAreaUtils.createDefaultMultiMarkerFile = function(trackingBackend){
	console.assert(trackingBackend)
	if( trackingBackend === undefined )	debugger

	// create absoluteBaseURL
	var link = document.createElement('a')
	link.href = _threex_arjs_context__WEBPACK_IMPORTED_MODULE_1__.default.baseURL
	var absoluteBaseURL = link.href

	// create the base file
	var file = {
		meta : {
			createdBy : 'AR.js ' + _threex_arjs_context__WEBPACK_IMPORTED_MODULE_1__.default.REVISION + ' - Default Marker',
			createdAt : new Date().toJSON(),
		},
		trackingBackend : trackingBackend,
		subMarkersControls : [
			// empty for now... being filled
		]
	}
	// add a subMarkersControls
	file.subMarkersControls[0] = {
		parameters: {},
		poseMatrix: new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(0,0, 0).toArray(),
	}
	if( trackingBackend === 'artoolkit' ){
		file.subMarkersControls[0].parameters.type = 'pattern'
		file.subMarkersControls[0].parameters.patternUrl = absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-hiro.patt'
	}else console.assert(false)

	// json.strinfy the value and store it in localStorage
	return file
}

//////////////////////////////////////////////////////////////////////////////
//		createDefaultMarkersControlsParameters
//////////////////////////////////////////////////////////////////////////////

/**
 * Create a default controls parameters for the multi-marker learner
 *
 * @param {String} trackingBackend - the tracking backend to use
 * @return {Object} - json object containing the controls parameters
 */
MarkersAreaUtils.createDefaultMarkersControlsParameters = function(trackingBackend){
	// create absoluteBaseURL
	var link = document.createElement('a')
	link.href = _threex_arjs_context__WEBPACK_IMPORTED_MODULE_1__.default.baseURL
	var absoluteBaseURL = link.href


	if( trackingBackend === 'artoolkit' ){
		// pattern hiro/kanji/a/b/c/f
		var markersControlsParameters = [
			{
				type : 'pattern',
				patternUrl : absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-hiro.patt',
			},
			{
				type : 'pattern',
				patternUrl : absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-kanji.patt',
			},
			{
				type : 'pattern',
				patternUrl : absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterA.patt',
			},
			{
				type : 'pattern',
				patternUrl : absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterB.patt',
			},
			{
				type : 'pattern',
				patternUrl : absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterC.patt',
			},
			{
				type : 'pattern',
				patternUrl : absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterF.patt',
			},
		]
	}else console.assert(false)
	return markersControlsParameters
}


//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////
/**
 * generate areaFile
 */
MarkersAreaUtils.storeMarkersAreaFileFromResolution = function (trackingBackend, resolutionW, resolutionH) {
	// generate areaFile
	var areaFile = this.buildMarkersAreaFileFromResolution(trackingBackend, resolutionW, resolutionH)
	// store areaFile in localStorage
	localStorage.setItem('ARjsMultiMarkerFile', JSON.stringify(areaFile))
}


//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////

MarkersAreaUtils.buildMarkersAreaFileFromResolution = function(trackingBackend, resolutionW, resolutionH){
	// create the base file
	var file = {
		meta : {
			createdBy : 'AR.js - Augmented Website',
			createdAt : new Date().toJSON(),
		},
		trackingBackend : trackingBackend,
		subMarkersControls : [
			// empty for now...
		]
	}

	var whiteMargin = 0.1
	if( resolutionW > resolutionH ){
		var markerImageSize = 0.4 * resolutionH
	}else if( resolutionW < resolutionH ){
		var markerImageSize = 0.4 * resolutionW
	}else if( resolutionW === resolutionH ){
		// specific for twitter player - https://dev.twitter.com/cards/types/player
		var markerImageSize = 0.33 * resolutionW
	}else console.assert(false)

	// console.warn('using new markerImageSize computation')
	var actualMarkerSize = markerImageSize * (1 - 2*whiteMargin)

	var deltaX = (resolutionW - markerImageSize)/2 / actualMarkerSize
	var deltaZ = (resolutionH - markerImageSize)/2 / actualMarkerSize

	var subMarkerControls = buildSubMarkerControls('center', 0, 0)
	file.subMarkersControls.push(subMarkerControls)

	var subMarkerControls = buildSubMarkerControls('topleft', -deltaX, -deltaZ)
	file.subMarkersControls.push(subMarkerControls)

	var subMarkerControls = buildSubMarkerControls('topright', +deltaX, -deltaZ)
	file.subMarkersControls.push(subMarkerControls)

	var subMarkerControls = buildSubMarkerControls('bottomleft', -deltaX, +deltaZ)
	file.subMarkersControls.push(subMarkerControls)

	var subMarkerControls = buildSubMarkerControls('bottomright', +deltaX, +deltaZ)
	file.subMarkersControls.push(subMarkerControls)

	return file

	//////////////////////////////////////////////////////////////////////////////
	//		Code Separator
	//////////////////////////////////////////////////////////////////////////////

	function buildSubMarkerControls(layout, positionX, positionZ){
		console.log('buildSubMarkerControls', layout, positionX, positionZ)
		// create subMarkersControls
		var subMarkersControls = {
			parameters: {},
			poseMatrix: new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(positionX,0, positionZ).toArray(),
		}
		// fill the parameters
		if( trackingBackend === 'artoolkit' ){
			layout2MarkerParametersArtoolkit(subMarkersControls.parameters, layout)
		}else console.assert(false)
		// return subMarkersControls
		return subMarkersControls
	}

	function layout2MarkerParametersArtoolkit(parameters, layout){
		// create absoluteBaseURL
		var link = document.createElement('a')
		link.href = _threex_arjs_context__WEBPACK_IMPORTED_MODULE_1__.default.baseURL
		var absoluteBaseURL = link.href

		var layout2PatternUrl = {
			'center' : convertRelativeUrlToAbsolute(absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-hiro.patt'),
			'topleft' : convertRelativeUrlToAbsolute(absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterA.patt'),
			'topright' : convertRelativeUrlToAbsolute(absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterB.patt'),
			'bottomleft' : convertRelativeUrlToAbsolute(absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterC.patt'),
			'bottomright' : convertRelativeUrlToAbsolute(absoluteBaseURL + 'examples/marker-training/examples/pattern-files/pattern-letterF.patt'),
		}
		console.assert(layout2PatternUrl[layout] !== undefined )
		parameters.type = 'pattern'
		parameters.patternUrl = layout2PatternUrl[layout]
		return
		function convertRelativeUrlToAbsolute(relativeUrl){
			var tmpLink = document.createElement('a');
			tmpLink.href = relativeUrl
			return tmpLink.href
		}
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkersAreaUtils);


/***/ }),

/***/ "./three.js/src/new-api/arjs-utils.js":
/*!********************************************!*\
  !*** ./three.js/src/new-api/arjs-utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);


const Utils = {};

/**
 * Create a default rendering camera for this trackingBackend. They may be modified later. to fit physical camera parameters
 *
 * @param {string} trackingBackend - the tracking to user
 * @return {THREE.Camera} the created camera
 */
Utils.createDefaultCamera = function (trackingMethod) {
    var trackingBackend = this.parseTrackingMethod(trackingMethod).trackingBackend
    // Create a camera
    if (trackingBackend === 'artoolkit') {
        var camera = new three__WEBPACK_IMPORTED_MODULE_0__.Camera();
    } else console.assert(false, 'unknown trackingBackend: ' + trackingBackend)

    return camera
}

/**
 * parse tracking method
 *
 * @param {String} trackingMethod - the tracking method to parse
 * @return {Object} - various field of the tracking method
 */
Utils.parseTrackingMethod = function (trackingMethod) {

    if (trackingMethod === 'best') {
        trackingMethod = 'area-artoolkit';
    }

    if (trackingMethod.startsWith('area-')) {
        return {
            trackingBackend: trackingMethod.replace('area-', ''),
            markersAreaEnabled: true,
        }
    } else {
        return {
            trackingBackend: trackingMethod,
            markersAreaEnabled: false,
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);


/***/ }),

/***/ "./three.js/src/threex/arjs-context.js":
/*!*********************************************!*\
  !*** ./three.js/src/threex/arjs-context.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var threexArmarkercontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! threexArmarkercontrols */ "./three.js/src/threex/arjs-markercontrols.js");
/* harmony import */ var jsartoolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsartoolkit */ "./node_modules/artoolkit5-js/dist/ARToolkit.js");
/* harmony import */ var jsartoolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsartoolkit__WEBPACK_IMPORTED_MODULE_2__);

 // Alias for dynamic importing
 // TODO comment explanation
const { ARToolkit, ARController } = (jsartoolkit__WEBPACK_IMPORTED_MODULE_2___default());
const artoolkit = new ARToolkit();

const Context = function (parameters) {
    var _this = this

    _this._updatedAt = null

    // handle default parameters
    this.parameters = {
        // AR backend - ['artoolkit']
        trackingBackend: 'artoolkit',
        // debug - true if one should display artoolkit debug canvas, false otherwise
        debug: false,
        // the mode of detection - ['color', 'color_and_matrix', 'mono', 'mono_and_matrix']
        detectionMode: 'mono',
        // type of matrix code - valid iif detectionMode end with 'matrix' - [3x3, 3x3_HAMMING63, 3x3_PARITY65, 4x4, 4x4_BCH_13_9_3, 4x4_BCH_13_5_5]
        matrixCodeType: '3x3',

        // url of the camera parameters
        cameraParametersUrl: Context.baseURL + '../data/data/camera_para.dat',

        // tune the maximum rate of pose detection in the source image
        maxDetectionRate: 60,
        // resolution of at which we detect pose in the source image
        canvasWidth: 640,
        canvasHeight: 480,

        // the patternRatio inside the artoolkit marker - artoolkit only
        patternRatio: 0.5,

        // enable image smoothing or not for canvas copy - default to true
        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
        imageSmoothingEnabled: false,
    }
    // parameters sanity check
    console.assert(['artoolkit'].indexOf(this.parameters.trackingBackend) !== -1, 'invalid parameter trackingBackend', this.parameters.trackingBackend)
    console.assert(['color', 'color_and_matrix', 'mono', 'mono_and_matrix'].indexOf(this.parameters.detectionMode) !== -1, 'invalid parameter detectionMode', this.parameters.detectionMode)

    this.arController = null;

    _this.initialized = false


    this._arMarkersControls = []

    //////////////////////////////////////////////////////////////////////////////
    //		setParameters
    //////////////////////////////////////////////////////////////////////////////
    setParameters(parameters)
    function setParameters(parameters) {
        if (parameters === undefined) return
        for (var key in parameters) {
            var newValue = parameters[key]

            if (newValue === undefined) {
                console.warn("Context: '" + key + "' parameter is undefined.")
                continue
            }

            var currentValue = _this.parameters[key]

            if (currentValue === undefined) {
                console.warn("Context: '" + key + "' is not a property of this material.")
                continue
            }

            _this.parameters[key] = newValue
        }
    }
}

Object.assign(Context.prototype, three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher.prototype);

// default to github page
Context.baseURL = 'https://ar-js-org.github.io/AR.js/three.js/'
Context.REVISION = '3.3.1'
/**
 * Create a default camera for this trackingBackend
 * @param {string} trackingBackend - the tracking to user
 * @return {THREE.Camera} the created camera
 */
Context.createDefaultCamera = function (trackingBackend) {
    console.assert(false, 'use ARjs.Utils.createDefaultCamera instead')
    // Create a camera
    if (trackingBackend === 'artoolkit') {
        var camera = new three__WEBPACK_IMPORTED_MODULE_0__.Camera();
    } else console.assert(false);
    return camera
}


//////////////////////////////////////////////////////////////////////////////
//		init functions
//////////////////////////////////////////////////////////////////////////////
Context.prototype.init = function (onCompleted) {
    var _this = this
    if (this.parameters.trackingBackend === 'artoolkit') {
        this._initArtoolkit(done);
    } else console.assert(false);
    return

    function done() {
        // dispatch event
        _this.dispatchEvent({
            type: 'initialized'
        });

        _this.initialized = true

        onCompleted && onCompleted()
    }

}
////////////////////////////////////////////////////////////////////////////////
//          update function
////////////////////////////////////////////////////////////////////////////////
Context.prototype.update = function (srcElement) {

    // be sure arController is fully initialized
    if (this.parameters.trackingBackend === 'artoolkit' && this.arController === null) return false;

    // honor this.parameters.maxDetectionRate
    var present = performance.now()
    if (this._updatedAt !== null && present - this._updatedAt < 1000 / this.parameters.maxDetectionRate) {
        return false
    }
    this._updatedAt = present

    var prevVisibleMarkers = []

    // mark all markers to invisible before processing this frame
    this._arMarkersControls.forEach(function (markerControls) {
        if (markerControls.object3d.visible) {
            prevVisibleMarkers.push(markerControls)
        }
        markerControls.object3d.visible = false
    })

    // process this frame
    if (this.parameters.trackingBackend === 'artoolkit') {
        this._updateArtoolkit(srcElement);
    }  else {
        console.assert(false);
    }

    // dispatch event
    this.dispatchEvent({
        type: 'sourceProcessed'
    });

    // After frame is processed, check visibility of each marker to determine if it was found or lost
    this._arMarkersControls.forEach(function (markerControls) {
        var wasVisible = prevVisibleMarkers.includes(markerControls);
        var isVisible = markerControls.object3d.visible;
    
        if (isVisible === true && wasVisible === false) {
            window.dispatchEvent(new CustomEvent('markerFound', {
                detail: markerControls,
            }))
        } else if (isVisible === false && wasVisible === true) {
            window.dispatchEvent(new CustomEvent('markerLost', {
                detail: markerControls,
            }))
        }
    })


    // return true as we processed the frame
    return true;
}

////////////////////////////////////////////////////////////////////////////////
//          Add/Remove markerControls
////////////////////////////////////////////////////////////////////////////////
Context.prototype.addMarker = function (arMarkerControls) {
    console.assert(arMarkerControls instanceof threexArmarkercontrols__WEBPACK_IMPORTED_MODULE_1__.default)
    this._arMarkersControls.push(arMarkerControls)
}

Context.prototype.removeMarker = function (arMarkerControls) {
    console.assert(arMarkerControls instanceof threexArmarkercontrols__WEBPACK_IMPORTED_MODULE_1__.default)
    // console.log('remove marker for', arMarkerControls)
    var index = this.arMarkerControlss.indexOf(artoolkitMarker);
    console.assert(index !== index)
    this._arMarkersControls.splice(index, 1)
}

//////////////////////////////////////////////////////////////////////////////
//		artoolkit specific
//////////////////////////////////////////////////////////////////////////////
Context.prototype._initArtoolkit = function (onCompleted) {
    var _this = this

    // set this._artoolkitProjectionAxisTransformMatrix to change artoolkit projection matrix axis to match usual webgl one
    this._artoolkitProjectionAxisTransformMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4()
    this._artoolkitProjectionAxisTransformMatrix.multiply(new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeRotationY(Math.PI))
    this._artoolkitProjectionAxisTransformMatrix.multiply(new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeRotationZ(Math.PI))

    // init ARToolkit
    artoolkit.init().then(_ => {
        // init controller
        ARController.initWithDimensions(_this.parameters.canvasWidth, _this.parameters.canvasHeight, _this.parameters.cameraParametersUrl).then((arController) => {
            _this.arController = arController

            // honor this.parameters.imageSmoothingEnabled
            arController.ctx.mozImageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;
            arController.ctx.webkitImageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;
            arController.ctx.msImageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;
            arController.ctx.imageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;

            // honor this.parameters.debug
            if (_this.parameters.debug === true) {
                arController.debugSetup();
                arController.canvas.style.position = 'absolute'
                arController.canvas.style.top = '0px'
                arController.canvas.style.opacity = '0.6'
                arController.canvas.style.pointerEvents = 'none'
                arController.canvas.style.zIndex = '-1'
            }

            // setPatternDetectionMode
            var detectionModes = {
                'color': artoolkit.AR_TEMPLATE_MATCHING_COLOR,
                'color_and_matrix': artoolkit.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX,
                'mono': artoolkit.AR_TEMPLATE_MATCHING_MONO,
                'mono_and_matrix': artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX,
            }
            var detectionMode = detectionModes[_this.parameters.detectionMode]
            console.assert(detectionMode !== undefined)
            arController.setPatternDetectionMode(detectionMode);

            // setMatrixCodeType
            var matrixCodeTypes = {
                '3x3': artoolkit.AR_MATRIX_CODE_3x3,
                '3x3_HAMMING63': artoolkit.AR_MATRIX_CODE_3x3_HAMMING63,
                '3x3_PARITY65': artoolkit.AR_MATRIX_CODE_3x3_PARITY65,
                '4x4': artoolkit.AR_MATRIX_CODE_4x4,
                '4x4_BCH_13_9_3': artoolkit.AR_MATRIX_CODE_4x4_BCH_13_9_3,
                '4x4_BCH_13_5_5': artoolkit.AR_MATRIX_CODE_4x4_BCH_13_5_5,
            }
            var matrixCodeType = matrixCodeTypes[_this.parameters.matrixCodeType]
            console.assert(matrixCodeType !== undefined)
            arController.setMatrixCodeType(matrixCodeType);

            // set the patternRatio for artoolkit
            arController.setPattRatio(_this.parameters.patternRatio);

            // set thresholding in artoolkit
            // this seems to be the default
            // arController.setThresholdMode(artoolkit.AR_LABELING_THRESH_MODE_MANUAL)
            // adatative consume a LOT of cpu...
            // arController.setThresholdMode(artoolkit.AR_LABELING_THRESH_MODE_AUTO_ADAPTIVE)
            // arController.setThresholdMode(artoolkit.AR_LABELING_THRESH_MODE_AUTO_OTSU)

            // notify
            onCompleted()
        });
    });
    return this
}

/**
 * return the projection matrix
 */
Context.prototype.getProjectionMatrix = function (srcElement) {


    // FIXME rename this function to say it is artoolkit specific - getArtoolkitProjectMatrix
    // keep a backward compatibility with a console.warn

    console.assert(this.parameters.trackingBackend === 'artoolkit')
    console.assert(this.arController, 'arController MUST be initialized to call this function')
    // get projectionMatrixArr from artoolkit
    var projectionMatrixArr = this.arController.getCameraMatrix();
    var projectionMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray(projectionMatrixArr)

    // return the result
    return projectionMatrix
}

Context.prototype._updateArtoolkit = function (srcElement) {
    this.arController.process(srcElement)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./three.js/src/threex/arjs-markercontrols.js":
/*!****************************************************!*\
  !*** ./three.js/src/threex/arjs-markercontrols.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threex-arbasecontrols */ "./three.js/src/threex/threex-arbasecontrols.js");
/* harmony import */ var jsartoolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsartoolkit */ "./node_modules/artoolkit5-js/dist/ARToolkit.js");
/* harmony import */ var jsartoolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsartoolkit__WEBPACK_IMPORTED_MODULE_2__);


 // TODO comment explanation
const { ARToolkit } = (jsartoolkit__WEBPACK_IMPORTED_MODULE_2___default());

const MarkerControls = function(context, object3d, parameters){
	var _this = this

	_threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_1__.default.call(this, object3d)

	this.context = context
	// handle default parameters
	this.parameters = {
		// size of the marker in meter
		size : 1,
		// type of marker - ['pattern', 'barcode', 'unknown' ]
		type : 'unknown',
		// url of the pattern - IIF type='pattern'
		patternUrl : null,
		// value of the barcode - IIF type='barcode'
		barcodeValue : null,
		// change matrix mode - [modelViewMatrix, cameraTransformMatrix]
		changeMatrixMode : 'modelViewMatrix',
		// minimal confidence in the marke recognition - between [0, 1] - default to 1
		minConfidence: 0.6,
		// turn on/off camera smoothing
		smooth: false,
		// number of matrices to smooth tracking over, more = smoother but slower follow
		smoothCount: 5,
		// distance tolerance for smoothing, if smoothThreshold # of matrices are under tolerance, tracking will stay still
		smoothTolerance: 0.01,
		// threshold for smoothing, will keep still unless enough matrices are over tolerance
		smoothThreshold: 2,
	}

	// sanity check
	var possibleValues = ['pattern', 'barcode', 'unknown']
	console.assert(possibleValues.indexOf(this.parameters.type) !== -1, 'illegal value', this.parameters.type)
	var possibleValues = ['modelViewMatrix', 'cameraTransformMatrix' ]
	console.assert(possibleValues.indexOf(this.parameters.changeMatrixMode) !== -1, 'illegal value', this.parameters.changeMatrixMode)


        // create the marker Root
	this.object3d = object3d
	this.object3d.matrixAutoUpdate = false;
	this.object3d.visible = false

	//////////////////////////////////////////////////////////////////////////////
	//		setParameters
	//////////////////////////////////////////////////////////////////////////////
	setParameters(parameters)
	function setParameters(parameters){
		if( parameters === undefined )	return
		for( var key in parameters ){
			var newValue = parameters[ key ]

			if( newValue === undefined ){
				console.warn( "ArMarkerControls: '" + key + "' parameter is undefined." )
				continue
			}

			var currentValue = _this.parameters[ key ]

			if( currentValue === undefined ){
				console.warn( "ArMarkerControls: '" + key + "' is not a property of this material." )
				continue
			}

			_this.parameters[ key ] = newValue
		}
	}

	if (this.parameters.smooth) {
		this.smoothMatrices = []; // last DEBOUNCE_COUNT modelViewMatrix
	}

	//////////////////////////////////////////////////////////////////////////////
	//		Code Separator
	//////////////////////////////////////////////////////////////////////////////
	// add this marker to artoolkitsystem
	// TODO rename that .addMarkerControls
	context.addMarker(this)

	if( _this.context.parameters.trackingBackend === 'artoolkit' ){
		this._initArtoolkit()
	}else console.assert(false)
}

MarkerControls.prototype = Object.create( _threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_1__.default.prototype );
MarkerControls.prototype.constructor = MarkerControls;

MarkerControls.prototype.dispose = function(){
	this.context.removeMarker(this)

	// TODO remove the event listener if needed
	// unloadMaker ???
}

//////////////////////////////////////////////////////////////////////////////
//		update controls with new modelViewMatrix
//////////////////////////////////////////////////////////////////////////////

/**
 * When you actually got a new modelViewMatrix, you need to perfom a whole bunch
 * of things. it is done here.
 */
MarkerControls.prototype.updateWithModelViewMatrix = function(modelViewMatrix){
	var markerObject3D = this.object3d;

	// mark object as visible
	markerObject3D.visible = true

	if( this.context.parameters.trackingBackend === 'artoolkit' ){
		// apply context._axisTransformMatrix - change artoolkit axis to match usual webgl one
		var tmpMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().copy(this.context._artoolkitProjectionAxisTransformMatrix)
		tmpMatrix.multiply(modelViewMatrix)

		modelViewMatrix.copy(tmpMatrix)
	}else console.assert(false)

	// change axis orientation on marker - artoolkit say Z is normal to the marker - ar.js say Y is normal to the marker
	var markerAxisTransformMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeRotationX(Math.PI/2)
	modelViewMatrix.multiply(markerAxisTransformMatrix)

	var renderReqd = false;

	// change markerObject3D.matrix based on parameters.changeMatrixMode
	if( this.parameters.changeMatrixMode === 'modelViewMatrix' ){
		if (this.parameters.smooth) {
			var sum,
					i, j,
					averages, // average values for matrix over last smoothCount
					exceedsAverageTolerance = 0;

			this.smoothMatrices.push(modelViewMatrix.elements.slice()); // add latest

			if (this.smoothMatrices.length < (this.parameters.smoothCount + 1)) {
				markerObject3D.matrix.copy(modelViewMatrix); // not enough for average
			} else {
				this.smoothMatrices.shift(); // remove oldest entry
				averages = [];

				for (i in modelViewMatrix.elements) { // loop over entries in matrix
					sum = 0;
					for (j in this.smoothMatrices) { // calculate average for this entry
						sum += this.smoothMatrices[j][i];
					}
					averages[i] = sum / this.parameters.smoothCount;
					// check how many elements vary from the average by at least AVERAGE_MATRIX_TOLERANCE
					if (Math.abs(averages[i] - modelViewMatrix.elements[i]) >= this.parameters.smoothTolerance) {
						exceedsAverageTolerance++;
					}
				}

				// if moving (i.e. at least AVERAGE_MATRIX_THRESHOLD entries are over AVERAGE_MATRIX_TOLERANCE)
				if (exceedsAverageTolerance >= this.parameters.smoothThreshold) {
					// then update matrix values to average, otherwise, don't render to minimize jitter
					for (i in modelViewMatrix.elements) {
						modelViewMatrix.elements[i] = averages[i];
					}
					markerObject3D.matrix.copy(modelViewMatrix);
					renderReqd = true; // render required in animation loop
				}
			}
		} else {
			markerObject3D.matrix.copy(modelViewMatrix)
		}
	}else if( this.parameters.changeMatrixMode === 'cameraTransformMatrix' ){
		markerObject3D.matrix.getInverse( modelViewMatrix )
	}else {
		console.assert(false)
	}

	// decompose - the matrix into .position, .quaternion, .scale
	markerObject3D.matrix.decompose(markerObject3D.position, markerObject3D.quaternion, markerObject3D.scale)

	// dispatchEvent
	this.dispatchEvent( { type: 'markerFound' } );

	return renderReqd;
}

//////////////////////////////////////////////////////////////////////////////
//		utility functions
//////////////////////////////////////////////////////////////////////////////

/**
 * provide a name for a marker
 * - silly heuristic for now
 * - should be improved
 */
MarkerControls.prototype.name = function(){
	var name = ''
	name += this.parameters.type;
	if( this.parameters.type === 'pattern' ){
		var url = this.parameters.patternUrl
		var basename = url.replace(/^.*\//g, '')
		name += ' - ' + basename
	}else if( this.parameters.type === 'barcode' ){
		name += ' - ' + this.parameters.barcodeValue
	}else{
		console.assert(false, 'no .name() implemented for this marker controls')
	}
	return name
}

//////////////////////////////////////////////////////////////////////////////
//		init for Artoolkit
//////////////////////////////////////////////////////////////////////////////
MarkerControls.prototype._initArtoolkit = function(){
	var _this = this

	var artoolkitMarkerId = null

	var delayedInitTimerId = setInterval(function(){
		// check if arController is init
		var arController = _this.context.arController
		if( arController === null )	return
		// stop looping if it is init
		clearInterval(delayedInitTimerId)
		delayedInitTimerId = null
		// launch the _postInitArtoolkit
		postInit()
	}, 1000/50)

	return

	function postInit(){
		// check if arController is init
		var arController = _this.context.arController
		console.assert(arController !== null )

		// start tracking this pattern
		if( _this.parameters.type === 'pattern' ){
	                arController.loadMarker(_this.parameters.patternUrl).then(function(markerId) {
				artoolkitMarkerId = markerId
	                        arController.trackPatternMarkerId(artoolkitMarkerId, _this.parameters.size);
	                });
		}else if( _this.parameters.type === 'barcode' ){
			artoolkitMarkerId = _this.parameters.barcodeValue
			arController.trackBarcodeMarkerId(artoolkitMarkerId, _this.parameters.size);
		}else if( _this.parameters.type === 'unknown' ){
			artoolkitMarkerId = null
		}else{
			console.log(false, 'invalid marker type', _this.parameters.type)
		}

		// listen to the event
		arController.addEventListener('getMarker', function(event){
			if( event.data.type === ARToolkit.PATTERN_MARKER && _this.parameters.type === 'pattern' ){
				if( artoolkitMarkerId === null )	return
				if( event.data.marker.idPatt === artoolkitMarkerId ) onMarkerFound(event)
			}else if( event.data.type === ARToolkit.BARCODE_MARKER && _this.parameters.type === 'barcode' ){
				// console.log('BARCODE_MARKER idMatrix', event.data.marker.idMatrix, artoolkitMarkerId )
				if( artoolkitMarkerId === null )	return
				if( event.data.marker.idMatrix === artoolkitMarkerId )  onMarkerFound(event)
			}else if( event.data.type === ARToolkit.UNKNOWN_MARKER && _this.parameters.type === 'unknown'){
				onMarkerFound(event)
			}
		})

	}

	function onMarkerFound(event){
		// honor his.parameters.minConfidence
		if( event.data.type === ARToolkit.PATTERN_MARKER && event.data.marker.cfPatt < _this.parameters.minConfidence )	return
		if( event.data.type === ARToolkit.BARCODE_MARKER && event.data.marker.cfMatrix < _this.parameters.minConfidence )	return

		var modelViewMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray(event.data.matrix)
		_this.updateWithModelViewMatrix(modelViewMatrix)
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkerControls);


/***/ }),

/***/ "./three.js/src/threex/arjs-profile.js":
/*!*********************************************!*\
  !*** ./three.js/src/threex/arjs-profile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_api_arjs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new-api/arjs-utils */ "./three.js/src/new-api/arjs-utils.js");
/* harmony import */ var _arjs_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arjs-context */ "./three.js/src/threex/arjs-context.js");

 // TODO context build-dependent

/**
 * ArToolkitProfile helps you build parameters for artoolkit
 * - it is fully independent of the rest of the code
 * - all the other classes are still expecting normal parameters
 * - you can use this class to understand how to tune your specific usecase
 * - it is made to help people to build parameters without understanding all the underlying details.
 */
const Profile = function () {
    this.reset()

    this.performance('default')
}

Profile.prototype._guessPerformanceLabel = function () {
    var isMobile = navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ? true : false
    if (isMobile === true) {
        return 'phone-normal'
    }
    return 'desktop-normal'
}

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////

/**
 * reset all parameters
 */
Profile.prototype.reset = function () {
    this.sourceParameters = {
        // to read from the webcam
        sourceType: 'webcam',
    }

    this.contextParameters = {
        cameraParametersUrl: _arjs_context__WEBPACK_IMPORTED_MODULE_1__.default.baseURL + '../data/data/camera_para.dat', // TODO dependent of build?
        detectionMode: 'mono',
    }
    this.defaultMarkerParameters = {
        type: 'pattern',
        patternUrl: _arjs_context__WEBPACK_IMPORTED_MODULE_1__.default.baseURL + '../data/data/patt.hiro', // TODO dependent of build?
        changeMatrixMode: 'modelViewMatrix',
    }
    return this
};

//////////////////////////////////////////////////////////////////////////////
//		Performance
//////////////////////////////////////////////////////////////////////////////



Profile.prototype.performance = function (label) {

    if (label === 'default') {
        label = this._guessPerformanceLabel()
    }

    if (label === 'desktop-fast') {
        this.contextParameters.canvasWidth = 640 * 3
        this.contextParameters.canvasHeight = 480 * 3

        this.contextParameters.maxDetectionRate = 30
    } else if (label === 'desktop-normal') {
        this.contextParameters.canvasWidth = 640
        this.contextParameters.canvasHeight = 480

        this.contextParameters.maxDetectionRate = 60
    } else if (label === 'phone-normal') {
        this.contextParameters.canvasWidth = 80 * 4
        this.contextParameters.canvasHeight = 60 * 4

        this.contextParameters.maxDetectionRate = 30
    } else if (label === 'phone-slow') {
        this.contextParameters.canvasWidth = 80 * 3
        this.contextParameters.canvasHeight = 60 * 3

        this.contextParameters.maxDetectionRate = 30
    } else {
        console.assert(false, 'unknonwn label ' + label)
    }
    return this
}

//////////////////////////////////////////////////////////////////////////////
//		Marker
//////////////////////////////////////////////////////////////////////////////


Profile.prototype.defaultMarker = function (trackingBackend) {
    trackingBackend = trackingBackend || this.contextParameters.trackingBackend

    if (trackingBackend === 'artoolkit') {
        this.contextParameters.detectionMode = 'mono'
        this.defaultMarkerParameters.type = 'pattern'
        this.defaultMarkerParameters.patternUrl = _arjs_context__WEBPACK_IMPORTED_MODULE_1__.default.baseURL + '../data/data/patt.hiro' // TODO dependent of build?
    } else console.assert(false)

    return this
}
//////////////////////////////////////////////////////////////////////////////
//		Source
//////////////////////////////////////////////////////////////////////////////
Profile.prototype.sourceWebcam = function () {
    this.sourceParameters.sourceType = 'webcam'
    delete this.sourceParameters.sourceUrl
    return this
}

Profile.prototype.sourceVideo = function (url) {
    this.sourceParameters.sourceType = 'video'
    this.sourceParameters.sourceUrl = url
    return this
}

Profile.prototype.sourceImage = function (url) {
    this.sourceParameters.sourceType = 'image'
    this.sourceParameters.sourceUrl = url
    return this
}

//////////////////////////////////////////////////////////////////////////////
//		trackingBackend
//////////////////////////////////////////////////////////////////////////////
Profile.prototype.trackingBackend = function (trackingBackend) {
    console.warn('stop profile.trackingBackend() obsolete function. use .trackingMethod instead')
    this.contextParameters.trackingBackend = trackingBackend
    return this
}

//////////////////////////////////////////////////////////////////////////////
//		trackingBackend
//////////////////////////////////////////////////////////////////////////////
Profile.prototype.changeMatrixMode = function (changeMatrixMode) {
    this.defaultMarkerParameters.changeMatrixMode = changeMatrixMode
    return this
}

//////////////////////////////////////////////////////////////////////////////
//		trackingBackend
//////////////////////////////////////////////////////////////////////////////
Profile.prototype.trackingMethod = function (trackingMethod) {
    var data = _new_api_arjs_utils__WEBPACK_IMPORTED_MODULE_0__.default.parseTrackingMethod(trackingMethod)
    this.defaultMarkerParameters.markersAreaEnabled = data.markersAreaEnabled
    this.contextParameters.trackingBackend = data.trackingBackend
    return this
}

/**
 * check if the profile is valid. Throw an exception is not valid
 */
Profile.prototype.checkIfValid = function () {
    return this
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);


/***/ }),

/***/ "./three.js/src/threex/arjs-source.js":
/*!********************************************!*\
  !*** ./three.js/src/threex/arjs-source.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Source = function (parameters) {
    var _this = this

    this.ready = false
    this.domElement = null

    // handle default parameters
    this.parameters = {
        // type of source - ['webcam', 'image', 'video']
        sourceType: 'webcam',
        // url of the source - valid if sourceType = image|video
        sourceUrl: null,

        // Device id of the camera to use (optional)
        deviceId: null,

        // resolution of at which we initialize in the source image
        sourceWidth: 640,
        sourceHeight: 480,
        // resolution displayed for the source
        displayWidth: 640,
        displayHeight: 480,
    }
    //////////////////////////////////////////////////////////////////////////////
    //		setParameters
    //////////////////////////////////////////////////////////////////////////////
    setParameters(parameters)
    function setParameters(parameters) {
        if (parameters === undefined) return
        for (var key in parameters) {
            var newValue = parameters[key]

            if (newValue === undefined) {
                console.warn("ArToolkitSource: '" + key + "' parameter is undefined.")
                continue
            }

            var currentValue = _this.parameters[key]

            if (currentValue === undefined) {
                console.warn("ArToolkitSource: '" + key + "' is not a property of this material.")
                continue
            }

            _this.parameters[key] = newValue
        }
    }
}

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////
Source.prototype.init = function (onReady, onError) {
    var _this = this

    if (this.parameters.sourceType === 'image') {
        var domElement = this._initSourceImage(onSourceReady, onError)
    } else if (this.parameters.sourceType === 'video') {
        var domElement = this._initSourceVideo(onSourceReady, onError)
    } else if (this.parameters.sourceType === 'webcam') {
        // var domElement = this._initSourceWebcamOld(onSourceReady)
        var domElement = this._initSourceWebcam(onSourceReady, onError)
    } else {
        console.assert(false)
    }

    // attach
    this.domElement = domElement
    this.domElement.style.position = 'absolute'
    this.domElement.style.top = '0px'
    this.domElement.style.left = '0px'
    this.domElement.style.zIndex = '-2'
    this.domElement.setAttribute('id', 'arjs-video');

    return this
    function onSourceReady() {
        document.body.appendChild(_this.domElement);
        window.dispatchEvent(new CustomEvent('arjs-video-loaded', {
            detail: {
                component: document.querySelector('#arjs-video'),
            },
        }));

        _this.ready = true

        onReady && onReady()
    }
}

////////////////////////////////////////////////////////////////////////////////
//          init image source
////////////////////////////////////////////////////////////////////////////////


Source.prototype._initSourceImage = function (onReady) {
    // TODO make it static
    var domElement = document.createElement('img');
    domElement.src = this.parameters.sourceUrl;

    domElement.width = this.parameters.sourceWidth;
    domElement.height = this.parameters.sourceHeight;
    domElement.style.width = this.parameters.displayWidth + 'px';
    domElement.style.height = this.parameters.displayHeight + 'px';

    domElement.onload = onReady;
    return domElement
}

////////////////////////////////////////////////////////////////////////////////
//          init video source
////////////////////////////////////////////////////////////////////////////////


Source.prototype._initSourceVideo = function (onReady) {
    // TODO make it static
    var domElement = document.createElement('video');
    domElement.src = this.parameters.sourceUrl;

    domElement.style.objectFit = 'initial';

    domElement.autoplay = true;
    domElement.webkitPlaysinline = true;
    domElement.controls = false;
    domElement.loop = true;
    domElement.muted = true;

    // trick to trigger the video on android
    document.body.addEventListener('click', function onClick() {
        document.body.removeEventListener('click', onClick);
        domElement.play()
    });

    domElement.width = this.parameters.sourceWidth;
    domElement.height = this.parameters.sourceHeight;
    domElement.style.width = this.parameters.displayWidth + 'px';
    domElement.style.height = this.parameters.displayHeight + 'px';

    domElement.onloadeddata = onReady;
    return domElement
}

////////////////////////////////////////////////////////////////////////////////
//          handle webcam source
////////////////////////////////////////////////////////////////////////////////

Source.prototype._initSourceWebcam = function (onReady, onError) {
    var _this = this

    // init default value
    onError = onError || function (error) {
        alert('Webcam Error\nName: ' + error.name + '\nMessage: ' + error.message)
        var event = new CustomEvent('camera-error', { error: error });
        window.dispatchEvent(event);

        setTimeout(() => {
            alert('Webcam Error\nName: ' + error.name + '\nMessage: ' + error.message)
        }, 1000);
    }

    var domElement = document.createElement('video');
    domElement.setAttribute('autoplay', '');
    domElement.setAttribute('muted', '');
    domElement.setAttribute('playsinline', '');
    domElement.style.width = this.parameters.displayWidth + 'px'
    domElement.style.height = this.parameters.displayHeight + 'px'

    // check API is available
    if (navigator.mediaDevices === undefined
        || navigator.mediaDevices.enumerateDevices === undefined
        || navigator.mediaDevices.getUserMedia === undefined) {
        if (navigator.mediaDevices === undefined) var fctName = 'navigator.mediaDevices'
        else if (navigator.mediaDevices.enumerateDevices === undefined) var fctName = 'navigator.mediaDevices.enumerateDevices'
        else if (navigator.mediaDevices.getUserMedia === undefined) var fctName = 'navigator.mediaDevices.getUserMedia'
        else console.assert(false)
        onError({
            name: '',
            message: 'WebRTC issue-! ' + fctName + ' not present in your browser'
        });
        return null
    }

    // get available devices
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        var userMediaConstraints = {
            audio: false,
            video: {
                facingMode: 'environment',
                width: {
                    ideal: _this.parameters.sourceWidth,
                    // min: 1024,
                    // max: 1920
                },
                height: {
                    ideal: _this.parameters.sourceHeight,
                    // min: 776,
                    // max: 1080
                }
            }
        };

        if (null !== _this.parameters.deviceId) {
            userMediaConstraints.video.deviceId = {
                exact: _this.parameters.deviceId
            };
        }

        // get a device which satisfy the constraints
        navigator.mediaDevices.getUserMedia(userMediaConstraints).then(function success(stream) {
            // set the .src of the domElement
            domElement.srcObject = stream;

            var event = new CustomEvent('camera-init', { stream: stream });
            window.dispatchEvent(event);
            // to start the video, when it is possible to start it only on userevent. like in android
            document.body.addEventListener('click', function () {
                domElement.play();
            });
            // domElement.play();

            onReady();
        }).catch(function (error) {
            onError({
                name: error.name,
                message: error.message
            });
        });
    }).catch(function (error) {
        onError({
            message: error.message
        });
    });

    return domElement
}

//////////////////////////////////////////////////////////////////////////////
//		Handle Mobile Torch
//////////////////////////////////////////////////////////////////////////////
Source.prototype.hasMobileTorch = function () {
    var stream = arToolkitSource.domElement.srcObject
    if (stream instanceof MediaStream === false) return false

    if (this._currentTorchStatus === undefined) {
        this._currentTorchStatus = false
    }

    var videoTrack = stream.getVideoTracks()[0];

    // if videoTrack.getCapabilities() doesnt exist, return false now
    if (videoTrack.getCapabilities === undefined) return false

    var capabilities = videoTrack.getCapabilities()

    return capabilities.torch ? true : false
}

/**
 * toggle the flash/torch of the mobile fun if applicable.
 * Great post about it https://www.oberhofer.co/mediastreamtrack-and-its-capabilities/
 */
Source.prototype.toggleMobileTorch = function () {
    // sanity check
    console.assert(this.hasMobileTorch() === true)

    var stream = arToolkitSource.domElement.srcObject
    if (stream instanceof MediaStream === false) {
        alert('enabling mobile torch is available only on webcam')
        return
    }

    if (this._currentTorchStatus === undefined) {
        this._currentTorchStatus = false
    }

    var videoTrack = stream.getVideoTracks()[0];
    var capabilities = videoTrack.getCapabilities()

    if (!capabilities.torch) {
        alert('no mobile torch is available on your camera')
        return
    }

    this._currentTorchStatus = this._currentTorchStatus === false ? true : false
    videoTrack.applyConstraints({
        advanced: [{
            torch: this._currentTorchStatus
        }]
    }).catch(function (error) {
        console.log(error)
    });
}

Source.prototype.domElementWidth = function () {
    return parseInt(this.domElement.style.width)
}
Source.prototype.domElementHeight = function () {
    return parseInt(this.domElement.style.height)
}

////////////////////////////////////////////////////////////////////////////////
//          handle resize
////////////////////////////////////////////////////////////////////////////////

Source.prototype.onResizeElement = function () {
    var _this = this
    var screenWidth = window.innerWidth
    var screenHeight = window.innerHeight

    // sanity check
    console.assert(arguments.length === 0)

    // compute sourceWidth, sourceHeight
    if (this.domElement.nodeName === "IMG") {
        var sourceWidth = this.domElement.naturalWidth
        var sourceHeight = this.domElement.naturalHeight
    } else if (this.domElement.nodeName === "VIDEO") {
        var sourceWidth = this.domElement.videoWidth
        var sourceHeight = this.domElement.videoHeight
    } else {
        console.assert(false)
    }

    // compute sourceAspect
    var sourceAspect = sourceWidth / sourceHeight
    // compute screenAspect
    var screenAspect = screenWidth / screenHeight

    // if screenAspect < sourceAspect, then change the width, else change the height
    if (screenAspect < sourceAspect) {
        // compute newWidth and set .width/.marginLeft
        var newWidth = sourceAspect * screenHeight
        this.domElement.style.width = newWidth + 'px'
        this.domElement.style.marginLeft = -(newWidth - screenWidth) / 2 + 'px'

        // init style.height/.marginTop to normal value
        this.domElement.style.height = screenHeight + 'px'
        this.domElement.style.marginTop = '0px'
    } else {
        // compute newHeight and set .height/.marginTop
        var newHeight = 1 / (sourceAspect / screenWidth)
        this.domElement.style.height = newHeight + 'px'
        this.domElement.style.marginTop = -(newHeight - screenHeight) / 2 + 'px'

        // init style.width/.marginLeft to normal value
        this.domElement.style.width = screenWidth + 'px'
        this.domElement.style.marginLeft = '0px'
    }
}
/*
Source.prototype.copyElementSizeTo = function(otherElement){
	otherElement.style.width = this.domElement.style.width
	otherElement.style.height = this.domElement.style.height
	otherElement.style.marginLeft = this.domElement.style.marginLeft
	otherElement.style.marginTop = this.domElement.style.marginTop
}
*/

Source.prototype.copyElementSizeTo = function (otherElement) {

    if (window.innerWidth > window.innerHeight) {
        //landscape
        otherElement.style.width = this.domElement.style.width
        otherElement.style.height = this.domElement.style.height
        otherElement.style.marginLeft = this.domElement.style.marginLeft
        otherElement.style.marginTop = this.domElement.style.marginTop
    }
    else {
        //portrait
        otherElement.style.height = this.domElement.style.height
        otherElement.style.width = (parseInt(otherElement.style.height) * 4 / 3) + "px";
        otherElement.style.marginLeft = ((window.innerWidth - parseInt(otherElement.style.width)) / 2) + "px";
        otherElement.style.marginTop = 0;
    }

}

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////

Source.prototype.copySizeTo = function () {
    console.warn('obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo')
    this.copyElementSizeTo.apply(this, arguments)
}

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////

Source.prototype.onResize = function (arToolkitContext, renderer, camera) {
    if (arguments.length !== 3) {
        console.warn('obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement')
        return this.onResizeElement.apply(this, arguments)
    }

    var trackingBackend = arToolkitContext.parameters.trackingBackend


    // RESIZE DOMELEMENT
    if (trackingBackend === 'artoolkit') {

        this.onResizeElement()

        var isAframe = renderer.domElement.dataset.aframeCanvas ? true : false
        if (isAframe === false) {
            this.copyElementSizeTo(renderer.domElement)
        } else {

        }

        if (arToolkitContext.arController !== null) {
            this.copyElementSizeTo(arToolkitContext.arController.canvas)
        }
    } else console.assert(false, 'unhandled trackingBackend ' + trackingBackend)


    // UPDATE CAMERA
    if (trackingBackend === 'artoolkit') {
        if (arToolkitContext.arController !== null) {
            camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
        }
    } else console.assert(false, 'unhandled trackingBackend ' + trackingBackend)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Source);

/***/ }),

/***/ "./three.js/src/threex/threex-arbasecontrols.js":
/*!******************************************************!*\
  !*** ./three.js/src/threex/threex-arbasecontrols.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);


const ArBaseControls = function(object3d) {
	this.id = ArBaseControls.id++

	this.object3d = object3d
	this.object3d.matrixAutoUpdate = false;
	this.object3d.visible = false

	// Events to honor
	// this.dispatchEvent({ type: 'becameVisible' })
	// this.dispatchEvent({ type: 'markerVisible' })	// replace markerFound
	// this.dispatchEvent({ type: 'becameUnVisible' })
}

ArBaseControls.id = 0

ArBaseControls.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher.prototype);

//////////////////////////////////////////////////////////////////////////////
//		Functions
//////////////////////////////////////////////////////////////////////////////
/**
 * error catching function for update()
 */
ArBaseControls.prototype.update = function(){
	console.assert(false, 'you need to implement your own update')
}

/**
 * error catching function for name()
 */
ArBaseControls.prototype.name = function(){
	console.assert(false, 'you need to implement your own .name()')
	return 'Not yet implemented - name()'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArBaseControls);


/***/ }),

/***/ "./three.js/src/threex/threex-armarkerhelper.js":
/*!******************************************************!*\
  !*** ./three.js/src/threex/threex-armarkerhelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);


const ArMarkerHelper = function(markerControls){
	this.object3d = new three__WEBPACK_IMPORTED_MODULE_0__.Group

	var mesh = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper()
	this.object3d.add(mesh)

	var text = markerControls.id
	// debugger
	// var text = markerControls.parameters.patternUrl.slice(-1).toUpperCase();

	var canvas = document.createElement( 'canvas' );
	canvas.width =  64;
	canvas.height = 64;

	var context = canvas.getContext( '2d' );
	var texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture( canvas );

	// put the text in the sprite
	context.font = '48px monospace';
	context.fillStyle = 'rgba(192,192,255, 0.5)';
	context.fillRect( 0, 0, canvas.width, canvas.height );
	context.fillStyle = 'darkblue';
	context.fillText(text, canvas.width/4, 3*canvas.height/4 )
	texture.needsUpdate = true

	// var geometry = new THREE.CubeGeometry(1, 1, 1)
	var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1, 1)
	var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
		map: texture,
		transparent: true
	});
	var mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)
	mesh.rotation.x = -Math.PI/2

	this.object3d.add(mesh)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArMarkerHelper);


/***/ }),

/***/ "./three.js/src/threex/threex-arsmoothedcontrols.js":
/*!**********************************************************!*\
  !*** ./three.js/src/threex/threex-arsmoothedcontrols.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./threex-arbasecontrols */ "./three.js/src/threex/threex-arbasecontrols.js");


/**
 * - lerp position/quaternino/scale
 * - minDelayDetected
 * - minDelayUndetected
 * @param {[type]} object3d   [description]
 * @param {[type]} parameters [description]
 */
const ArSmoothedControls = function(object3d, parameters){
	var _this = this
	
	_threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_0__.default.call(this, object3d)
	
	// copy parameters
	this.object3d.visible = false
	
	this._lastLerpStepAt = null
	this._visibleStartedAt = null
	this._unvisibleStartedAt = null

	// handle default parameters
	parameters = parameters || {}
	this.parameters = {
		// lerp coeficient for the position - between [0,1] - default to 1
		lerpPosition: 0.8,
		// lerp coeficient for the quaternion - between [0,1] - default to 1
		lerpQuaternion: 0.2,
		// lerp coeficient for the scale - between [0,1] - default to 1
		lerpScale: 0.7,
		// delay for lerp fixed steps - in seconds - default to 1/120
		lerpStepDelay: 1/60,
		// minimum delay the sub-control must be visible before this controls become visible - default to 0 seconds
		minVisibleDelay: 0.0,
		// minimum delay the sub-control must be unvisible before this controls become unvisible - default to 0 seconds
		minUnvisibleDelay: 0.2,
	}
	
	//////////////////////////////////////////////////////////////////////////////
	//		setParameters
	//////////////////////////////////////////////////////////////////////////////
	setParameters(parameters)
	function setParameters(parameters){
		if( parameters === undefined )	return
		for( var key in parameters ){
			var newValue = parameters[ key ]

			if( newValue === undefined ){
				console.warn( "ArSmoothedControls: '" + key + "' parameter is undefined." )
				continue
			}

			var currentValue = _this.parameters[ key ]

			if( currentValue === undefined ){
				console.warn( "ArSmoothedControls: '" + key + "' is not a property of this material." )
				continue
			}

			_this.parameters[ key ] = newValue
		}
	}
}
	
ArSmoothedControls.prototype = Object.create( _threex_arbasecontrols__WEBPACK_IMPORTED_MODULE_0__.default.prototype );
ArSmoothedControls.prototype.constructor = ArSmoothedControls;

//////////////////////////////////////////////////////////////////////////////
//		update function
//////////////////////////////////////////////////////////////////////////////

ArSmoothedControls.prototype.update = function(targetObject3d){
	var object3d = this.object3d
	var parameters = this.parameters
	var wasVisible = object3d.visible
	var present = performance.now()/1000


	//////////////////////////////////////////////////////////////////////////////
	//		handle object3d.visible with minVisibleDelay/minUnvisibleDelay
	//////////////////////////////////////////////////////////////////////////////
	if( targetObject3d.visible === false )	this._visibleStartedAt = null
	if( targetObject3d.visible === true )	this._unvisibleStartedAt = null

	if( targetObject3d.visible === true && this._visibleStartedAt === null )	this._visibleStartedAt = present
	if( targetObject3d.visible === false && this._unvisibleStartedAt === null )	this._unvisibleStartedAt = present

	if( wasVisible === false && targetObject3d.visible === true ){
		var visibleFor = present - this._visibleStartedAt
		if( visibleFor >= this.parameters.minVisibleDelay ){
			object3d.visible = true
			snapDirectlyToTarget()
		}
		// console.log('visibleFor', visibleFor)
	}

	if( wasVisible === true && targetObject3d.visible === false ){
		var unvisibleFor = present - this._unvisibleStartedAt
		if( unvisibleFor >= this.parameters.minUnvisibleDelay ){
			object3d.visible = false			
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////
	//		apply lerp on positon/quaternion/scale
	//////////////////////////////////////////////////////////////////////////////

	// apply lerp steps - require fix time steps to behave the same no matter the fps
	if( this._lastLerpStepAt === null ){
		applyOneSlerpStep()
		this._lastLerpStepAt = present
	}else{
		var nStepsToDo = Math.floor( (present - this._lastLerpStepAt)/this.parameters.lerpStepDelay )
		for(var i = 0; i < nStepsToDo; i++){
			applyOneSlerpStep()
			this._lastLerpStepAt += this.parameters.lerpStepDelay
		}
	}

	// disable the lerp by directly copying targetObject3d position/quaternion/scale
	if( false ){}

	// update the matrix
	this.object3d.updateMatrix()

	//////////////////////////////////////////////////////////////////////////////
	//		honor becameVisible/becameUnVisible event
	//////////////////////////////////////////////////////////////////////////////
	// honor becameVisible event
	if( wasVisible === false && object3d.visible === true ){
		this.dispatchEvent({ type: 'becameVisible' })
	}
	// honor becameUnVisible event
	if( wasVisible === true && object3d.visible === false ){
		this.dispatchEvent({ type: 'becameUnVisible' })
	}
	return

	function snapDirectlyToTarget(){
		object3d.position.copy( targetObject3d.position )
		object3d.quaternion.copy( targetObject3d.quaternion )
		object3d.scale.copy( targetObject3d.scale )
	}	
	
	function applyOneSlerpStep(){
		object3d.position.lerp(targetObject3d.position, parameters.lerpPosition)
		object3d.quaternion.slerp(targetObject3d.quaternion, parameters.lerpQuaternion)
		object3d.scale.lerp(targetObject3d.scale, parameters.lerpScale)
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArSmoothedControls);


/***/ }),

/***/ "three":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","amd":"three","root":"THREE"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./three.js/src/index-threex.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArMarkerControls": () => (/* reexport safe */ _threex_arjs_markercontrols__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "ArMarkerHelper": () => (/* reexport safe */ _threex_threex_armarkerhelper__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ArSmoothedControls": () => (/* reexport safe */ _threex_threex_arsmoothedcontrols__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "ArToolkitContext": () => (/* reexport safe */ _threex_arjs_context__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "ArToolkitProfile": () => (/* reexport safe */ _threex_arjs_profile__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "ArToolkitSource": () => (/* reexport safe */ _threex_arjs_source__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "ArMultiMarkerControls": () => (/* reexport safe */ _markers_area_arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "ArMultiMakersLearning": () => (/* reexport safe */ _markers_area_arjs_markersarealearning__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "ArMultiMarkerUtils": () => (/* reexport safe */ _markers_area_arjs_markersareautils__WEBPACK_IMPORTED_MODULE_8__.default)
/* harmony export */ });
/* harmony import */ var _threex_arjs_markercontrols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./threex/arjs-markercontrols */ "./three.js/src/threex/arjs-markercontrols.js");
/* harmony import */ var _threex_threex_armarkerhelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threex/threex-armarkerhelper */ "./three.js/src/threex/threex-armarkerhelper.js");
/* harmony import */ var _threex_threex_arsmoothedcontrols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threex/threex-arsmoothedcontrols */ "./three.js/src/threex/threex-arsmoothedcontrols.js");
/* harmony import */ var _threex_arjs_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./threex/arjs-context */ "./three.js/src/threex/arjs-context.js");
/* harmony import */ var _threex_arjs_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./threex/arjs-profile */ "./three.js/src/threex/arjs-profile.js");
/* harmony import */ var _threex_arjs_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./threex/arjs-source */ "./three.js/src/threex/arjs-source.js");
/* harmony import */ var _markers_area_arjs_markersareacontrols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markers-area/arjs-markersareacontrols */ "./three.js/src/markers-area/arjs-markersareacontrols.js");
/* harmony import */ var _markers_area_arjs_markersarealearning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markers-area/arjs-markersarealearning */ "./three.js/src/markers-area/arjs-markersarealearning.js");
/* harmony import */ var _markers_area_arjs_markersareautils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markers-area/arjs-markersareautils */ "./three.js/src/markers-area/arjs-markersareautils.js");







 // typo is spread over codebase




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});