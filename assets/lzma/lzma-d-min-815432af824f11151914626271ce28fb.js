var e=function(){"use strict"
function n(n){var r=[]
return r[n-1]=void 0,r}function r(n,r){return f(n[0]+r[0],n[1]+r[1])}function t(n,r){var t,u
return n[0]==r[0]&&n[1]==r[1]?0:(t=0>n[1],u=0>r[1],t&&!u?-1:!t&&u?1:function(n,r){return f(n[0]-r[0],n[1]-r[1])}(n,r)[1]<0?-1:1)}function f(n,r){var t,f
for(n%=0x10000000000000000,r=(r%=0x10000000000000000)-(t=r%O)+(f=Math.floor(n/O)*O),n=n-f+t;0>n;)n+=O,r-=O
for(;n>4294967295;)n-=O,r+=O
for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000
for(;-0x8000000000000000>r;)r+=0x10000000000000000
return[n,r]}function u(n){return n>=0?[n,0]:[n+O,-O]}function o(n){return n[0]>=2147483648?~~Math.max(Math.min(n[0]-O,2147483647),-2147483648):~~Math.max(Math.min(n[0],2147483647),-2147483648)}function i(n){return n.cb>=n.O?-1:255&n.ab[n.cb++]}function c(n){var r=n.ab
return r.length=n.O,r}function a(n,r,t){var f,o,e,c,a="",l=[]
for(o=0;5>o;++o){if(-1==(e=i(r)))throw Error("truncated input")
l[o]=e<<24>>24}if(!function(n,r){var t,f,u,o,i,e,c
if(5>r.length)return 0
for(c=255&r[0],u=c%9,o=(e=~~(c/9))%5,i=~~(e/5),t=0,f=0;4>f;++f)t+=(255&r[1+f])<<8*f
return t>99999999||!function(n,r,t,f){if(r>8||t>4||f>4)return 0
x(n.k,t,r)
var u=1<<f
return b(n.C,u),b(n.o,u),n.P=u-1,1}(n,u,o,i)?0:function(n,r){return 0>r?0:(n.z!=r&&(n.z=r,n.m=Math.max(n.z,1),function(n,r){(null==n.x||n.c!=r)&&(n.x=t(r)),n.c=r,n.D=0,n.w=0}(n.b,Math.max(n.m,4096))),1)}(n,t)}(f=p({}),l))throw Error("corrupted input")
for(o=0;64>o;o+=8){if(-1==(e=i(r)))throw Error("truncated input")
1==(e=e.toString(16)).length&&(e="0"+e),a=e+""+a}/^0+$|^f+$/i.test(a)?n.N=A:(c=parseInt(a,16),n.N=c>4294967295?A:u(c)),n.Q=function(n,r,t,f){return n.a.K=r,h(n.b),n.b.V=t,function(n){n.b.w=0,n.b.D=0,T(n.q),T(n.n),T(n.E),T(n.s),T(n.u),T(n.r),T(n.J),function(n){var r,t
for(t=1<<n.g+n.y,r=0;t>r;++r)T(n.F[r].v)}(n.k)
for(var r=0;4>r;++r)T(n.j[r].B)
w(n.C),w(n.o),T(n.t.B),function(n){n.p=0,n.i=-1
for(var r=0;5>r;++r)n.p=n.p<<8|i(n.K)}(n.a)}(n),n.f=0,n.l=0,n.T=0,n.R=0,n._=0,n.U=f,n.d=W,n.I=0,function(n,r){return n.h=r,n.bb=null,n.X=1,n}({},n)}(f,r,t,n.N)}function l(r,t){return r.S=function(r){return r.ab=n(32),r.O=0,r}({}),a(r,function(n,r){return n.ab=r,n.cb=0,n.O=r.length,n}({},t),r.S),r}function d(n){var r=n.D-n.w
r&&(function(n,r,t,f){(function(n,r,t,f,u){for(var o=0;u>o;++o)t[f+o]=n[r+o]})(r,t,n.ab,n.O,f),n.O+=f}(n.V,n.x,n.w,r),n.D>=n.c&&(n.D=0),n.w=n.D)}function v(n,r){var t=n.D-r-1
return 0>t&&(t+=n.c),n.x[t]}function h(n){d(n),n.V=null}function s(n){if(!n.X)throw Error("bad state")
if(n.bb)throw Error("No encoding")
return function(n){var f=function(n){var f,i,e,c,a,l
if(l=o(n.d)&n.P,E(n.a,n.q,(n.f<<4)+l)){if(E(n.a,n.E,n.f))e=0,E(n.a,n.s,n.f)?(E(n.a,n.u,n.f)?(E(n.a,n.r,n.f)?(i=n._,n._=n.R):i=n.R,n.R=n.T):i=n.T,n.T=n.l,n.l=i):E(n.a,n.n,(n.f<<4)+l)||(n.f=7>n.f?9:11,e=1),e||(e=g(n.o,n.a,l)+2,n.f=7>n.f?8:11)
else if(n._=n.R,n.R=n.T,n.T=n.l,e=2+g(n.C,n.a,l),n.f=7>n.f?7:10,(a=y(n.j[function(n){return 4>(n-=2)?n:3}(e)],n.a))>=4){if(c=(a>>1)-1,n.l=(2|1&a)<<c,14>a)n.l+=function(n,r,t,f){var u,o,i=1,e=0
for(o=0;f>o;++o)u=E(t,n,r+i),i<<=1,i+=u,e|=u<<o
return e}(n.J,n.l-a-1,n.a,c)
else if(n.l+=S(n.a,c-4)<<4,n.l+=function(n,r){var t,f,u=1,o=0
for(f=0;n.A>f;++f)t=E(r,n.B,u),u<<=1,u+=t,o|=t<<f
return o}(n.t,n.a),0>n.l)return-1==n.l?1:-1}else n.l=a
if(t(u(n.l),n.d)>=0||n.l>=n.m)return-1;(function(n,r,t){var f=n.D-r-1
for(0>f&&(f+=n.c);0!=t;--t)f>=n.c&&(f=0),n.x[n.D++]=n.x[f++],n.D>=n.c&&d(n)})(n.b,n.l,e),n.d=r(n.d,u(e)),n.I=v(n.b,0)}else f=function(n,r,t){return n.F[((r&n.Y)<<n.g)+((255&t)>>>8-n.g)]}(n.k,o(n.d),n.I),n.I=7>n.f?function(n,r){var t=1
do{t=t<<1|E(r,n.v,t)}while(256>t)
return t<<24>>24}(f,n.a):function(n,r,t){var f,u,o=1
do{if(u=t>>7&1,t<<=1,f=E(r,n.v,(1+u<<8)+o),o=o<<1|f,u!=f){for(;256>o;)o=o<<1|E(r,n.v,o)
break}}while(256>o)
return o<<24>>24}(f,n.a,v(n.b,n.l)),function(n,r){n.x[n.D++]=r,n.D>=n.c&&d(n)}(n.b,n.I),n.f=function(n){return 4>n?0:10>n?n-3:n-6}(n.f),n.d=r(n.d,j)
return 0}(n.h)
if(-1==f)throw Error("corrupted input")
n.$=A,n.Z=n.h.d,(f||t(n.h.U,W)>=0&&t(n.h.d,n.h.U)>=0)&&(d(n.h.b),h(n.h.b),n.h.a.K=null,n.X=0)}(n),n.X}function p(r){r.b={},r.a={},r.q=n(192),r.E=n(12),r.s=n(12),r.u=n(12),r.r=n(12),r.n=n(192),r.j=n(4),r.J=n(114),r.t=D({},4),r.C=m({}),r.o=m({}),r.k={}
for(var t=0;4>t;++t)r.j[t]=D({},6)
return r}function b(n,r){for(;r>n.e;++n.e)n.G[n.e]=D({},3),n.H[n.e]=D({},3)}function g(n,r,t){return E(r,n.M,0)?8+(E(r,n.M,1)?8+y(n.L,r):y(n.H[t],r)):y(n.G[t],r)}function m(r){return r.M=n(2),r.G=n(16),r.H=n(16),r.L=D({},8),r.e=0,r}function w(n){T(n.M)
for(var r=0;n.e>r;++r)T(n.G[r].B),T(n.H[r].B)
T(n.L.B)}function x(r,t,f){var u,o
if(null==r.F||r.g!=f||r.y!=t)for(r.y=t,r.Y=(1<<t)-1,r.g=f,o=1<<r.g+r.y,r.F=n(o),u=0;o>u;++u)r.F[u]=M({})}function M(r){return r.v=n(768),r}function D(r,t){return r.A=t,r.B=n(1<<t),r}function y(n,r){var t,f=1
for(t=n.A;0!=t;--t)f=(f<<1)+E(r,n.B,f)
return f-(1<<n.A)}function E(n,r,t){var f,u=r[t]
return(-2147483648^(f=(n.i>>>11)*u))>(-2147483648^n.p)?(n.i=f,r[t]=u+(2048-u>>>5)<<16>>16,-16777216&n.i||(n.p=n.p<<8|i(n.K),n.i<<=8),0):(n.i-=f,n.p-=f,r[t]=u-(u>>>5)<<16>>16,-16777216&n.i||(n.p=n.p<<8|i(n.K),n.i<<=8),1)}function S(n,r){var t,f,u=0
for(t=r;0!=t;--t)n.i>>>=1,f=n.p-n.i>>>31,n.p-=n.i&f-1,u=u<<1|1-f,-16777216&n.i||(n.p=n.p<<8|i(n.K),n.i<<=8)
return u}function T(n){for(var r=n.length-1;r>=0;--r)n[r]=1024}function B(n){for(var r,t,f,u=0,o=0,i=n.length,e=[],c=[];i>u;++u,++o){if(128&(r=255&n[u]))if(192==(224&r)){if(u+1>=i)return n
if(128!=(192&(t=255&n[++u])))return n
c[o]=(31&r)<<6|63&t}else{if(224!=(240&r))return n
if(u+2>=i)return n
if(128!=(192&(t=255&n[++u])))return n
if(128!=(192&(f=255&n[++u])))return n
c[o]=(15&r)<<12|(63&t)<<6|63&f}else{if(!r)return n
c[o]=r}16383==o&&(e.push(String.fromCharCode.apply(String,c)),o=-1)}return o>0&&(c.length=o,e.push(String.fromCharCode.apply(String,c))),e.join("")}function C(n){return n[1]+n[0]}var I=2,R=3,K="function"==typeof setImmediate?setImmediate:setTimeout,O=4294967296,A=[4294967295,-O],W=[0,0],j=[1,0]
return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||(onmessage=function(n){n&&n.W&&n.W.action==I&&e.decompress(n.W.W,n.W.cbn)}),{decompress:function(n,r,t){var f,u,o,i,e={},a=void 0===r&&void 0===t
if("function"!=typeof r&&(u=r,r=t=0),t=t||function(n){return void 0!==u?function(n,r){postMessage({action:R,cbn:r,result:n})}(o?n:-1,u):void 0},r=r||function(n,r){return void 0!==u?postMessage({action:I,cbn:u,result:n,error:r}):void 0},a){for(e.d=l({},n);s(e.d.Q););return B(c(e.d.S))}try{e.d=l({},n),i=C(e.d.N),o=i>-1,t(0)}catch(n){return r(null,n)}K(function n(){try{for(var u,a=0,l=(new Date).getTime();s(e.d.Q);)if(++a%1e3==0&&(new Date).getTime()-l>200)return o&&(f=C(e.d.Q.h.d)/i,t(f)),K(n,0),0
t(1),u=B(c(e.d.S)),K(r.bind(null,u),0)}catch(n){r(null,n)}},0)}}}()
this.LZMA=this.LZMA_WORKER=e
