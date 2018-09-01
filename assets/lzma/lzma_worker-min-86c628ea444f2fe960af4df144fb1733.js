var e=function(){"use strict"
function n(n,r){postMessage({action:Fn,cbn:r,result:n})}function r(n){var r=[]
return r[n-1]=void 0,r}function c(n,r){return f(n[0]+r[0],n[1]+r[1])}function t(n,r){return function(n,r){var c
return c=r,0>r&&(c+=Tn),[c,n*Tn]}(~~Math.max(Math.min(n[1]/Tn,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/Tn,2147483647),-2147483648),u(n)&u(r))}function o(n,r){var c,t
return n[0]==r[0]&&n[1]==r[1]?0:(c=0>n[1],t=0>r[1],c&&!t?-1:!c&&t?1:d(n,r)[1]<0?-1:1)}function f(n,r){var c,t
for(n%=0x10000000000000000,r=(r%=0x10000000000000000)-(c=r%Tn)+(t=Math.floor(n/Tn)*Tn),n=n-t+c;0>n;)n+=Tn,r-=Tn
for(;n>4294967295;)n-=Tn,r+=Tn
for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000
for(;-0x8000000000000000>r;)r+=0x10000000000000000
return[n,r]}function b(n,r){return n[0]==r[0]&&n[1]==r[1]}function i(n){return n>=0?[n,0]:[n+Tn,-Tn]}function u(n){return n[0]>=2147483648?~~Math.max(Math.min(n[0]-Tn,2147483647),-2147483648):~~Math.max(Math.min(n[0],2147483647),-2147483648)}function a(n){return 30>=n?1<<n:a(30)*a(n-30)}function v(n,r){var c,t,o,f
if(r&=63,b(n,Yn))return r?Rn:n
if(0>n[1])throw Error("Neg")
return f=a(r),t=n[1]*f%0x10000000000000000,(t+=c=(o=n[0]*f)-o%Tn)>=0x8000000000000000&&(t-=0x10000000000000000),[o-=c,t]}function l(n,r){var c
return c=a(r&=63),f(Math.floor(n[0]/c),n[1]/c)}function d(n,r){return f(n[0]-r[0],n[1]-r[1])}function h(n,r){return n.Mc=r,n.Lc=0,n.Yb=r.length,n}function s(n){return n.Lc>=n.Yb?-1:255&n.Mc[n.Lc++]}function m(n,r,c,t){return n.Lc>=n.Yb?-1:(t=Math.min(t,n.Yb-n.Lc),M(n.Mc,n.Lc,r,c,t),n.Lc+=t,t)}function g(n){return n.Mc=r(32),n.Yb=0,n}function x(n){var r=n.Mc
return r.length=n.Yb,r}function p(n,r){n.Mc[n.Yb++]=r<<24>>24}function z(n,r,c,t){M(r,c,n.Mc,n.Yb,t),n.Yb+=t}function M(n,r,c,t,o){for(var f=0;o>f;++f)c[t+f]=n[r+f]}function w(n,r,c,t,f){var b,i
if(o(t,Vn)<0)throw Error("invalid length "+t)
for(n.Tb=t,function(n,r){(function(n,r){n.ab=r
for(var c=0;r>1<<c;++c);n.$b=2*c})(r,1<<n.s),r.n=n.f,function(n,r){var c=n.X
n.X=r,n.b&&c!=n.X&&(n.wb=-1,n.b=null)}(r,n.m),r.eb=0,r.fb=3,r.Y=2,r.y=3}(f,b=H({})),b.Gc=void 0===e.disableEndMark,function(n,r){n.fc[0]=9*(5*n.Y+n.eb)+n.fb<<24>>24
for(var c=0;4>c;++c)n.fc[1+c]=n.ab>>8*c<<24>>24
z(r,n.fc,0,5)}(b,c),i=0;64>i;i+=8)p(c,255&u(l(t,i)))
n.yb=(b.W=0,b.oc=r,b.pc=0,function(n){var r,c
n.b||(r={},c=4,n.X||(c=2),function(n,r){n.qb=r>2,n.qb?(n.w=0,n.xb=4,n.R=66560):(n.w=2,n.xb=3,n.R=0)}(r,c),n.b=r),ln(n.A,n.eb,n.fb),(n.ab!=n.wb||n.Hb!=n.n)&&(G(n.b,n.ab,4096,n.n,274),n.wb=n.ab,n.Hb=n.n)}(b),b.d.Ab=c,function(n){(function(n){n.l=0,n.J=0
for(var r=0;4>r;++r)n.v[r]=0})(n),function(n){n.mc=Rn,n.xc=Rn,n.E=-1,n.Jb=1,n.Oc=0}(n.d),Bn(n.C),Bn(n._),Bn(n.bb),Bn(n.hb),Bn(n.Ub),Bn(n.vc),Bn(n.Sb),function(n){var r,c=1<<n.u+n.I
for(r=0;c>r;++r)Bn(n.V[r].tb)}(n.A)
for(var r=0;4>r;++r)Bn(n.K[r].G)
fn(n.$,1<<n.Y),fn(n.i,1<<n.Y),Bn(n.S.G),n.N=0,n.jb=0,n.q=0,n.s=0}(b),P(b),$(b),b.$.rb=b.n+1-2,vn(b.$,1<<b.Y),b.i.rb=b.n+1-2,vn(b.i,1<<b.Y),b.g=Rn,function(n,r){return n.cb=r,n.Z=null,n.zc=1,n}({},b))}function E(n,r,c){return n.Nb=g({}),w(n,h({},r),n.Nb,i(r.length),c),n}function L(n,r,c){var t,o,f,b,u="",e=[]
for(o=0;5>o;++o){if(-1==(f=s(r)))throw Error("truncated input")
e[o]=f<<24>>24}if(!function(n,r){var c,t,o,f,b,i,u
if(5>r.length)return 0
for(u=255&r[0],o=u%9,f=(i=~~(u/9))%5,b=~~(i/5),c=0,t=0;4>t;++t)c+=(255&r[1+t])<<8*t
return c>99999999||!function(n,r,c,t){if(r>8||c>4||t>4)return 0
R(n.gb,c,r)
var o=1<<t
return K(n.Rb,o),K(n.sb,o),n.Dc=o-1,1}(n,o,f,b)?0:function(n,r){return 0>r?0:(n.Ob!=r&&(n.Ob=r,n.nb=Math.max(n.Ob,1),function(n,r){(null==n.Lb||n.M!=r)&&(n.Lb=c(r)),n.M=r,n.o=0,n.h=0}(n.B,Math.max(n.nb,4096))),1)}(n,c)}(t=F({}),e))throw Error("corrupted input")
for(o=0;64>o;o+=8){if(-1==(f=s(r)))throw Error("truncated input")
1==(f=f.toString(16)).length&&(f="0"+f),u=f+""+u}/^0+$|^f+$/i.test(u)?n.Tb=Vn:(b=parseInt(u,16),n.Tb=b>4294967295?Vn:i(b)),n.yb=function(n,r,c,t){return n.e.Ab=r,J(n.B),n.B.cc=c,function(n){n.B.h=0,n.B.o=0,Bn(n.Gb),Bn(n.pb),Bn(n.Zb),Bn(n.Cb),Bn(n.Db),Bn(n.Eb),Bn(n.kc),function(n){var r,c
for(c=1<<n.u+n.I,r=0;c>r;++r)Bn(n.V[r].Ib)}(n.gb)
for(var r=0;4>r;++r)Bn(n.kb[r].G)
Y(n.Rb),Y(n.sb),Bn(n.Fb.G),function(n){n.Bb=0,n.E=-1
for(var r=0;5>r;++r)n.Bb=n.Bb<<8|s(n.Ab)}(n.e)}(n),n.U=0,n.ib=0,n.Jc=0,n.Ic=0,n.Qc=0,n.Nc=t,n.g=Rn,n.jc=0,function(n,r){return n.Z=r,n.cb=null,n.zc=1,n}({},n)}(t,r,c,n.Tb)}function j(n,r){return n.Nb=g({}),L(n,h({},r),n.Nb),n}function y(n,r){return n.c[n.f+n.o+r]}function k(n,r,c,t){var o,f
for(n.T&&n.o+r+t>n.h&&(t=n.h-(n.o+r)),++c,f=n.f+n.o+r,o=0;t>o&&n.c[f+o]==n.c[f+o-c];++o);return o}function A(n){return n.h-n.o}function B(n){var r,c
if(!n.T)for(;;){if(!(c=-n.f+n.Kb-n.h))return
if(-1==(r=m(n.cc,n.c,n.f+n.h,c)))return n.zb=n.h,n.f+n.zb>n.H&&(n.zb=n.H-n.f),void(n.T=1)
n.h+=r,n.h>=n.o+n._b&&(n.zb=n.h-n._b)}}function C(n,r){n.f+=r,n.zb-=r,n.o-=r,n.h-=r}function G(n,c,t,o,f){var b,i
1073741567>c&&(n.Fc=16+(o>>1),function(n,c,t,o){var f
n.Bc=c,n._b=t,f=c+t+o,(null==n.c||n.Kb!=f)&&(n.c=null,n.Kb=f,n.c=r(n.Kb)),n.H=n.Kb-t}(n,c+t,o+f,256+~~((c+t+o+f)/2)),n.ob=o,b=c+1,n.p!=b&&(n.L=r(2*(n.p=b))),i=65536,n.qb&&(i=c-1,i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i>>=1,(i|=65535)>16777216&&(i>>=1),n.Ec=i,++i,i+=n.R),i!=n.rc&&(n.ub=r(n.rc=i)))}function I(n){var r;++n.k>=n.p&&(n.k=0),function(n){++n.o,n.o>n.zb&&(n.f+n.o>n.H&&function(n){var r,c,t
for((t=n.f+n.o-n.Bc)>0&&--t,c=n.f+n.h-t,r=0;c>r;++r)n.c[r]=n.c[t+r]
n.f-=t}(n),B(n))}(n),1073741823==n.o&&(r=n.o-n.p,U(n.L,2*n.p,r),U(n.ub,n.rc,r),C(n,r))}function U(n,r,c){var t,o
for(t=0;r>t;++t)c>=(o=n[t]||0)?o=0:o-=c,n[t]=o}function q(n){var r=n.o-n.h
r&&(z(n.cc,n.Lb,n.h,r),n.o>=n.M&&(n.o=0),n.h=n.o)}function Q(n,r){var c=n.o-r-1
return 0>c&&(c+=n.M),n.Lb[c]}function J(n){q(n),n.cc=null}function D(n){return 4>(n-=2)?n:3}function N(n){return 4>n?0:10>n?n-3:n-6}function Z(n){if(!n.zc)throw Error("bad state")
return n.cb?function(n){(function(n,r,t,f){var e,a,v,l,h,s,m,g,x,p,z,M,w,E,L
if(r[0]=Rn,t[0]=Rn,f[0]=1,n.oc&&(n.b.cc=n.oc,function(n){n.f=0,n.o=0,n.h=0,n.T=0,B(n),n.k=0,C(n,-1)}(n.b),n.W=1,n.oc=null),!n.pc){if(n.pc=1,E=n.g,b(n.g,Rn)){if(!A(n.b))return void W(n,u(n.g))
cn(n),w=u(n.g)&n.y,Cn(n.d,n.C,(n.l<<4)+w,0),n.l=N(n.l),v=y(n.b,-n.s),hn(dn(n.A,u(n.g),n.J),n.d,v),n.J=v,--n.s,n.g=c(n.g,Sn)}if(!A(n.b))return void W(n,u(n.g))
for(;;){if(m=_(n,u(n.g)),p=n.mb,w=u(n.g)&n.y,a=(n.l<<4)+w,1==m&&-1==p)Cn(n.d,n.C,a,0),v=y(n.b,-n.s),L=dn(n.A,u(n.g),n.J),7>n.l?hn(L,n.d,v):(x=y(n.b,-n.v[0]-1-n.s),sn(L,n.d,x,v)),n.J=v,n.l=N(n.l)
else{if(Cn(n.d,n.C,a,1),4>p){if(Cn(n.d,n.bb,n.l,1),p?(Cn(n.d,n.hb,n.l,1),1==p?Cn(n.d,n.Ub,n.l,0):(Cn(n.d,n.Ub,n.l,1),Cn(n.d,n.vc,n.l,p-2))):(Cn(n.d,n.hb,n.l,0),Cn(n.d,n._,a,1==m?0:1)),1==m?n.l=7>n.l?9:11:(un(n.i,n.d,m-2,w),n.l=7>n.l?8:11),l=n.v[p],0!=p){for(s=p;s>=1;--s)n.v[s]=n.v[s-1]
n.v[0]=l}}else{for(Cn(n.d,n.bb,n.l,0),n.l=7>n.l?7:10,un(n.$,n.d,m-2,w),M=on(p-=4),g=D(m),wn(n.K[g],n.d,M),M>=4&&(z=p-(e=(2|1&M)<<(h=(M>>1)-1)),14>M?yn(n.Sb,e-M-1,n.d,h,z):(Gn(n.d,z>>4,h-4),Ln(n.S,n.d,15&z),++n.Qb)),l=p,s=3;s>=1;--s)n.v[s]=n.v[s-1]
n.v[0]=l,++n.Mb}n.J=y(n.b,m-1-n.s)}if(n.s-=m,n.g=c(n.g,i(m)),!n.s){if(n.Mb>=128&&P(n),n.Qb>=16&&$(n),r[0]=n.g,t[0]=In(n.d),!A(n.b))return void W(n,u(n.g))
if(o(d(n.g,E),[4096,0])>=0)return n.pc=0,void(f[0]=0)}}}})(n.cb,n.cb.Xb,n.cb.uc,n.cb.Kc),n.Pb=n.cb.Xb[0],n.cb.Kc[0]&&(function(n){tn(n),n.d.Ab=null}(n.cb),n.zc=0)}(n):function(n){var r=function(n){var r,t,f,b,e,a
if(a=u(n.g)&n.Dc,An(n.e,n.Gb,(n.U<<4)+a)){if(An(n.e,n.Zb,n.U))f=0,An(n.e,n.Cb,n.U)?(An(n.e,n.Db,n.U)?(An(n.e,n.Eb,n.U)?(t=n.Qc,n.Qc=n.Ic):t=n.Ic,n.Ic=n.Jc):t=n.Jc,n.Jc=n.ib,n.ib=t):An(n.e,n.pb,(n.U<<4)+a)||(n.U=7>n.U?9:11,f=1),f||(f=T(n.sb,n.e,a)+2,n.U=7>n.U?8:11)
else if(n.Qc=n.Ic,n.Ic=n.Jc,n.Jc=n.ib,f=2+T(n.Rb,n.e,a),n.U=7>n.U?7:10,(e=zn(n.kb[D(f)],n.e))>=4){if(b=(e>>1)-1,n.ib=(2|1&e)<<b,14>e)n.ib+=function(n,r,c,t){var o,f,b=1,i=0
for(f=0;t>f;++f)o=An(c,n,r+b),b<<=1,b+=o,i|=o<<f
return i}(n.kc,n.ib-e-1,n.e,b)
else if(n.ib+=function(n,r){var c,t,o=0
for(c=r;0!=c;--c)n.E>>>=1,t=n.Bb-n.E>>>31,n.Bb-=n.E&t-1,o=o<<1|1-t,-16777216&n.E||(n.Bb=n.Bb<<8|s(n.Ab),n.E<<=8)
return o}(n.e,b-4)<<4,n.ib+=function(n,r){var c,t,o=1,f=0
for(t=0;n.F>t;++t)c=An(r,n.G,o),o<<=1,o+=c,f|=c<<t
return f}(n.Fb,n.e),0>n.ib)return-1==n.ib?1:-1}else n.ib=e
if(o(i(n.ib),n.g)>=0||n.ib>=n.nb)return-1;(function(n,r,c){var t=n.o-r-1
for(0>t&&(t+=n.M);0!=c;--c)t>=n.M&&(t=0),n.Lb[n.o++]=n.Lb[t++],n.o>=n.M&&q(n)})(n.B,n.ib,f),n.g=c(n.g,i(f)),n.jc=Q(n.B,0)}else r=function(n,r,c){return n.V[((r&n.qc)<<n.u)+((255&c)>>>8-n.u)]}(n.gb,u(n.g),n.jc),n.jc=7>n.U?function(n,r){var c=1
do{c=c<<1|An(r,n.Ib,c)}while(256>c)
return c<<24>>24}(r,n.e):function(n,r,c){var t,o,f=1
do{if(o=c>>7&1,c<<=1,t=An(r,n.Ib,(1+o<<8)+f),f=f<<1|t,o!=t){for(;256>f;)f=f<<1|An(r,n.Ib,f)
break}}while(256>f)
return f<<24>>24}(r,n.e,Q(n.B,n.ib)),function(n,r){n.Lb[n.o++]=r,n.o>=n.M&&q(n)}(n.B,n.jc),n.U=N(n.U),n.g=c(n.g,Sn)
return 0}(n.Z)
if(-1==r)throw Error("corrupted input")
n.Pb=Vn,n.Pc=n.Z.g,(r||o(n.Z.Nc,Rn)>=0&&o(n.Z.g,n.Z.Nc)>=0)&&(q(n.Z.B),J(n.Z.B),n.Z.e.Ab=null,n.zc=0)}(n),n.zc}function F(n){n.B={},n.e={},n.Gb=r(192),n.Zb=r(12),n.Cb=r(12),n.Db=r(12),n.Eb=r(12),n.pb=r(192),n.kb=r(4),n.kc=r(114),n.Fb=pn({},4),n.Rb=V({}),n.sb=V({}),n.gb={}
for(var c=0;4>c;++c)n.kb[c]=pn({},6)
return n}function K(n,r){for(;r>n.O;++n.O)n.ec[n.O]=pn({},3),n.hc[n.O]=pn({},3)}function T(n,r,c){return An(r,n.wc,0)?8+(An(r,n.wc,1)?8+zn(n.tc,r):zn(n.hc[c],r)):zn(n.ec[c],r)}function V(n){return n.wc=r(2),n.ec=r(16),n.hc=r(16),n.tc=pn({},8),n.O=0,n}function Y(n){Bn(n.wc)
for(var r=0;n.O>r;++r)Bn(n.ec[r].G),Bn(n.hc[r].G)
Bn(n.tc.G)}function R(n,c,t){var o,f
if(null==n.V||n.u!=t||n.I!=c)for(n.I=c,n.qc=(1<<c)-1,n.u=t,f=1<<n.u+n.I,n.V=r(f),o=0;f>o;++o)n.V[o]=S({})}function S(n){return n.Ib=r(768),n}function O(n,r){var c,t,o,f
n.jb=r,o=n.a[r].r,t=n.a[r].j
do{n.a[r].t&&(xn(n.a[o]),n.a[o].r=o-1,n.a[r].Ac&&(n.a[o-1].t=0,n.a[o-1].r=n.a[r].r2,n.a[o-1].j=n.a[r].j2)),f=o,c=t,t=n.a[f].j,o=n.a[f].r,n.a[f].j=c,n.a[f].r=r,r=f}while(r>0)
return n.mb=n.a[0].j,n.q=n.a[0].r}function H(n){var c
for(n.v=r(4),n.a=[],n.d={},n.C=r(192),n.bb=r(12),n.hb=r(12),n.Ub=r(12),n.vc=r(12),n._=r(192),n.K=[],n.Sb=r(114),n.S=Mn({},4),n.$=en({}),n.i=en({}),n.A={},n.m=[],n.P=[],n.lb=[],n.nc=r(16),n.x=r(4),n.Q=r(4),n.Xb=[Rn],n.uc=[Rn],n.Kc=[0],n.fc=r(5),n.yc=r(128),n.vb=0,n.X=1,n.D=0,n.Hb=-1,n.mb=0,c=0;4096>c;++c)n.a[c]={}
for(c=0;4>c;++c)n.K[c]=Mn({},6)
return n}function $(n){for(var r=0;16>r;++r)n.nc[r]=jn(n.S,r)
n.Qb=0}function P(n){var r,c,t,o,f,b,i,u
for(o=4;128>o;++o)r=(2|1&(b=on(o)))<<(t=(b>>1)-1),n.yc[o]=kn(n.Sb,r-b-1,t,o-r)
for(f=0;4>f;++f){for(c=n.K[f],i=f<<6,b=0;n.$b>b;++b)n.P[i+b]=En(c,b)
for(b=14;n.$b>b;++b)n.P[i+b]+=(b>>1)-1-4<<6
for(u=128*f,o=0;4>o;++o)n.lb[u+o]=n.P[i+o]
for(;128>o;++o)n.lb[u+o]=n.P[i+on(o)]+n.yc[o]}n.Mb=0}function W(n,r){tn(n),function(n,r){if(n.Gc){Cn(n.d,n.C,(n.l<<4)+r,1),Cn(n.d,n.bb,n.l,0),n.l=7>n.l?7:10,un(n.$,n.d,0,r)
var c=D(2)
wn(n.K[c],n.d,63),Gn(n.d,67108863,26),Ln(n.S,n.d,15)}}(n,r&n.y)
for(var c=0;5>c;++c)Un(n.d)}function _(n,r){var c,t,o,f,b,i,u,e,a,v,l,d,h,s,m,g,x,p,z,M,w,E,L,j,B,C,G,I,U,q,Q,J,D,Z,F,K,T,V,Y,R,S,H,$,P
if(n.jb!=n.q)return h=n.a[n.q].r-n.q,n.mb=n.a[n.q].j,n.q=n.a[n.q].r,h
if(n.q=n.jb=0,n.N?(d=n.vb,n.N=0):d=cn(n),C=n.D,2>(j=A(n.b)+1))return n.mb=-1,1
for(j>273&&(j=273),Y=0,a=0;4>a;++a)n.x[a]=n.v[a],n.Q[a]=k(n.b,-1,n.x[a],273),n.Q[a]>n.Q[Y]&&(Y=a)
if(n.Q[Y]>=n.n)return n.mb=Y,rn(n,(h=n.Q[Y])-1),h
if(d>=n.n)return n.mb=n.m[C-1]+4,rn(n,d-1),d
if(u=y(n.b,-1),x=y(n.b,-n.v[0]-1-1),2>d&&u!=x&&2>n.Q[Y])return n.mb=-1,1
if(n.a[0].Hc=n.l,D=r&n.y,n.a[1].z=$n[n.C[(n.l<<4)+D]>>>2]+gn(dn(n.A,r,n.J),n.l>=7,x,u),xn(n.a[1]),V=(p=$n[2048-n.C[(n.l<<4)+D]>>>2])+$n[2048-n.bb[n.l]>>>2],x==u&&(R=V+function(n,r,c){return $n[n.hb[r]>>>2]+$n[n._[(r<<4)+c]>>>2]}(n,n.l,D),n.a[1].z>R&&(n.a[1].z=R,function(n){n.j=0,n.t=0}(n.a[1]))),2>(l=d>=n.Q[Y]?d:n.Q[Y]))return n.mb=n.a[1].j,1
n.a[1].r=0,n.a[0].bc=n.x[0],n.a[0].ac=n.x[1],n.a[0].dc=n.x[2],n.a[0].lc=n.x[3],v=l
do{n.a[v--].z=268435455}while(v>=2)
for(a=0;4>a;++a)if(!(2>(T=n.Q[a]))){F=V+nn(n,a,n.l,D)
do{f=F+an(n.i,T-2,D),(q=n.a[T]).z>f&&(q.z=f,q.r=0,q.j=a,q.t=0)}while(--T>=2)}if(L=p+$n[n.bb[n.l]>>>2],d>=(v=n.Q[0]>=2?n.Q[0]+1:2)){for(G=0;v>n.m[G];)G+=2
for(;f=L+X(n,e=n.m[G+1],v,D),(q=n.a[v]).z>f&&(q.z=f,q.r=0,q.j=e+4,q.t=0),v!=n.m[G]||(G+=2)!=C;++v);}for(c=0;;){if(++c==l)return O(n,c)
if(z=cn(n),C=n.D,z>=n.n)return n.vb=z,n.N=1,O(n,c)
if(++r,J=n.a[c].r,n.a[c].t?(--J,n.a[c].Ac?(H=n.a[n.a[c].r2].Hc,H=4>n.a[c].j2?7>H?8:11:7>H?7:10):H=n.a[J].Hc,H=N(H)):H=n.a[J].Hc,J==c-1?H=n.a[c].j?N(H):7>H?9:11:(n.a[c].t&&n.a[c].Ac?(J=n.a[c].r2,Q=n.a[c].j2,H=7>H?8:11):H=4>(Q=n.a[c].j)?7>H?8:11:7>H?7:10,U=n.a[J],4>Q?Q?1==Q?(n.x[0]=U.ac,n.x[1]=U.bc,n.x[2]=U.dc,n.x[3]=U.lc):2==Q?(n.x[0]=U.dc,n.x[1]=U.bc,n.x[2]=U.ac,n.x[3]=U.lc):(n.x[0]=U.lc,n.x[1]=U.bc,n.x[2]=U.ac,n.x[3]=U.dc):(n.x[0]=U.bc,n.x[1]=U.ac,n.x[2]=U.dc,n.x[3]=U.lc):(n.x[0]=Q-4,n.x[1]=U.bc,n.x[2]=U.ac,n.x[3]=U.dc)),n.a[c].Hc=H,n.a[c].bc=n.x[0],n.a[c].ac=n.x[1],n.a[c].dc=n.x[2],n.a[c].lc=n.x[3],i=n.a[c].z,u=y(n.b,-1),x=y(n.b,-n.x[0]-1-1),D=r&n.y,t=i+$n[n.C[(H<<4)+D]>>>2]+gn(dn(n.A,r,y(n.b,-2)),H>=7,x,u),M=0,(w=n.a[c+1]).z>t&&(w.z=t,w.r=c,w.j=-1,w.t=0,M=1),V=(p=i+$n[2048-n.C[(H<<4)+D]>>>2])+$n[2048-n.bb[H]>>>2],x!=u||c>w.r&&!w.j||(R=V+($n[n.hb[H]>>>2]+$n[n._[(H<<4)+D]>>>2]),w.z>=R&&(w.z=R,w.r=c,w.j=0,w.t=0,M=1)),!(2>(j=B=(B=A(n.b)+1)>4095-c?4095-c:B))){if(j>n.n&&(j=n.n),!M&&x!=u&&(P=Math.min(B-1,n.n),(m=k(n.b,0,n.x[0],P))>=2)){for($=N(H),Z=r+1&n.y,E=t+$n[2048-n.C[($<<4)+Z]>>>2]+$n[2048-n.bb[$]>>>2],I=c+1+m;I>l;)n.a[++l].z=268435455
f=E+(an(n.i,m-2,Z)+nn(n,0,$,Z)),(q=n.a[I]).z>f&&(q.z=f,q.r=c+1,q.j=0,q.t=1,q.Ac=0)}for(S=2,K=0;4>K;++K)if(!(2>(s=k(n.b,-1,n.x[K],j)))){g=s
do{for(;c+s>l;)n.a[++l].z=268435455
f=V+(an(n.i,s-2,D)+nn(n,K,H,D)),(q=n.a[c+s]).z>f&&(q.z=f,q.r=c,q.j=K,q.t=0)}while(--s>=2)
if(s=g,K||(S=s+1),B>s&&(P=Math.min(B-1-s,n.n),(m=k(n.b,s,n.x[K],P))>=2)){for($=7>H?8:11,Z=r+s&n.y,o=V+(an(n.i,s-2,D)+nn(n,K,H,D))+$n[n.C[($<<4)+Z]>>>2]+gn(dn(n.A,r+s,y(n.b,s-1-1)),1,y(n.b,s-1-(n.x[K]+1)),y(n.b,s-1)),$=N($),Z=r+s+1&n.y,E=o+$n[2048-n.C[($<<4)+Z]>>>2]+$n[2048-n.bb[$]>>>2],I=s+1+m;c+I>l;)n.a[++l].z=268435455
f=E+(an(n.i,m-2,Z)+nn(n,0,$,Z)),(q=n.a[c+I]).z>f&&(q.z=f,q.r=c+s+1,q.j=0,q.t=1,q.Ac=1,q.r2=c,q.j2=K)}}if(z>j){for(z=j,C=0;z>n.m[C];C+=2);n.m[C]=z,C+=2}if(z>=S){for(L=p+$n[n.bb[H]>>>2];c+z>l;)n.a[++l].z=268435455
for(G=0;S>n.m[G];)G+=2
for(s=S;;++s)if(f=L+X(n,b=n.m[G+1],s,D),(q=n.a[c+s]).z>f&&(q.z=f,q.r=c,q.j=b+4,q.t=0),s==n.m[G]){if(B>s&&(P=Math.min(B-1-s,n.n),(m=k(n.b,s,b,P))>=2)){for($=7>H?7:10,Z=r+s&n.y,o=f+$n[n.C[($<<4)+Z]>>>2]+gn(dn(n.A,r+s,y(n.b,s-1-1)),1,y(n.b,s-(b+1)-1),y(n.b,s-1)),$=N($),Z=r+s+1&n.y,E=o+$n[2048-n.C[($<<4)+Z]>>>2]+$n[2048-n.bb[$]>>>2],I=s+1+m;c+I>l;)n.a[++l].z=268435455
f=E+(an(n.i,m-2,Z)+nn(n,0,$,Z)),(q=n.a[c+I]).z>f&&(q.z=f,q.r=c+s+1,q.j=0,q.t=1,q.Ac=1,q.r2=c,q.j2=b+4)}if((G+=2)==C)break}}}}}function X(n,r,c,t){var o=D(c)
return(128>r?n.lb[128*o+r]:n.P[(o<<6)+function(n){return 131072>n?Hn[n>>6]+12:134217728>n?Hn[n>>16]+32:Hn[n>>26]+52}(r)]+n.nc[15&r])+an(n.$,c-2,t)}function nn(n,r,c,t){var o
return r?(o=$n[2048-n.hb[c]>>>2],1==r?o+=$n[n.Ub[c]>>>2]:(o+=$n[2048-n.Ub[c]>>>2],o+=qn(n.vc[c],r-2))):(o=$n[n.hb[c]>>>2],o+=$n[2048-n._[(c<<4)+t]>>>2]),o}function rn(n,r){r>0&&(function(n,r){var c,t,o,f,b,i,u,e,a,v,l,d,h,s,m,g,x
do{if(n.h>=n.o+n.ob)d=n.ob
else if(d=n.h-n.o,n.xb>d){I(n)
continue}for(h=n.o>n.p?n.o-n.p:0,t=n.f+n.o,n.qb?(i=1023&(x=On[255&n.c[t]]^255&n.c[t+1]),n.ub[i]=n.o,u=65535&(x^=(255&n.c[t+2])<<8),n.ub[1024+u]=n.o,e=(x^On[255&n.c[t+3]]<<5)&n.Ec):e=255&n.c[t]^(255&n.c[t+1])<<8,o=n.ub[n.R+e],n.ub[n.R+e]=n.o,m=1+(n.k<<1),g=n.k<<1,v=l=n.w,c=n.Fc;;){if(h>=o||0==c--){n.L[m]=n.L[g]=0
break}if(b=n.o-o,f=(n.k>=b?n.k-b:n.k-b+n.p)<<1,s=n.f+o,a=l>v?v:l,n.c[s+a]==n.c[t+a]){for(;++a!=d&&n.c[s+a]==n.c[t+a];);if(a==d){n.L[g]=n.L[f],n.L[m]=n.L[f+1]
break}}(255&n.c[t+a])>(255&n.c[s+a])?(n.L[g]=o,g=f+1,o=n.L[g],l=a):(n.L[m]=o,m=f,o=n.L[m],v=a)}I(n)}while(0!=--r)}(n.b,r),n.s+=r)}function cn(n){var r=0
return n.D=function(n,r){var c,t,o,f,b,i,u,e,a,v,l,d,h,s,m,g,x,p,z,M,w
if(n.h>=n.o+n.ob)s=n.ob
else if(s=n.h-n.o,n.xb>s)return I(n),0
for(x=0,m=n.o>n.p?n.o-n.p:0,t=n.f+n.o,g=1,e=0,a=0,n.qb?(e=1023&(w=On[255&n.c[t]]^255&n.c[t+1]),a=65535&(w^=(255&n.c[t+2])<<8),v=(w^On[255&n.c[t+3]]<<5)&n.Ec):v=255&n.c[t]^(255&n.c[t+1])<<8,o=n.ub[n.R+v]||0,n.qb&&(f=n.ub[e]||0,b=n.ub[1024+a]||0,n.ub[e]=n.o,n.ub[1024+a]=n.o,f>m&&n.c[n.f+f]==n.c[t]&&(r[x++]=g=2,r[x++]=n.o-f-1),b>m&&n.c[n.f+b]==n.c[t]&&(b==f&&(x-=2),r[x++]=g=3,r[x++]=n.o-b-1,f=b),0!=x&&f==o&&(x-=2,g=1)),n.ub[n.R+v]=n.o,z=1+(n.k<<1),M=n.k<<1,d=h=n.w,0!=n.w&&o>m&&n.c[n.f+o+n.w]!=n.c[t+n.w]&&(r[x++]=g=n.w,r[x++]=n.o-o-1),c=n.Fc;;){if(m>=o||0==c--){n.L[z]=n.L[M]=0
break}if(u=n.o-o,i=(n.k>=u?n.k-u:n.k-u+n.p)<<1,p=n.f+o,l=h>d?d:h,n.c[p+l]==n.c[t+l]){for(;++l!=s&&n.c[p+l]==n.c[t+l];);if(l>g&&(r[x++]=g=l,r[x++]=u-1,l==s)){n.L[M]=n.L[i],n.L[z]=n.L[i+1]
break}}(255&n.c[t+l])>(255&n.c[p+l])?(n.L[M]=o,M=i+1,o=n.L[M],h=l):(n.L[z]=o,z=i,o=n.L[z],d=l)}return I(n),x}(n.b,n.m),n.D>0&&((r=n.m[n.D-2])==n.n&&(r+=k(n.b,r-1,n.m[n.D-1],273-r))),++n.s,r}function tn(n){n.b&&n.W&&(n.b.cc=null,n.W=0)}function on(n){return 2048>n?Hn[n]:2097152>n?Hn[n>>10]+20:Hn[n>>20]+40}function fn(n,r){Bn(n.db)
for(var c=0;r>c;++c)Bn(n.Vb[c].G),Bn(n.Wb[c].G)
Bn(n.ic.G)}function bn(n,r,c,t,o){var f,b,i,u,e
for(f=$n[n.db[0]>>>2],i=(b=$n[2048-n.db[0]>>>2])+$n[n.db[1]>>>2],u=b+$n[2048-n.db[1]>>>2],e=0,e=0;8>e;++e){if(e>=c)return
t[o+e]=f+En(n.Vb[r],e)}for(;16>e;++e){if(e>=c)return
t[o+e]=i+En(n.Wb[r],e-8)}for(;c>e;++e)t[o+e]=u+En(n.ic,e-8-8)}function un(n,r,c,t){(function(n,r,c,t){8>c?(Cn(r,n.db,0,0),wn(n.Vb[t],r,c)):(c-=8,Cn(r,n.db,0,1),8>c?(Cn(r,n.db,1,0),wn(n.Wb[t],r,c)):(Cn(r,n.db,1,1),wn(n.ic,r,c-8)))})(n,r,c,t),0==--n.sc[t]&&(bn(n,t,n.rb,n.Cc,272*t),n.sc[t]=n.rb)}function en(n){return function(n){n.db=r(2),n.Vb=r(16),n.Wb=r(16),n.ic=Mn({},8)
for(var c=0;16>c;++c)n.Vb[c]=Mn({},3),n.Wb[c]=Mn({},3)}(n),n.Cc=[],n.sc=[],n}function an(n,r,c){return n.Cc[272*c+r]}function vn(n,r){for(var c=0;r>c;++c)bn(n,c,n.rb,n.Cc,272*c),n.sc[c]=n.rb}function ln(n,c,t){var o,f
if(null==n.V||n.u!=t||n.I!=c)for(n.I=c,n.qc=(1<<c)-1,n.u=t,f=1<<n.u+n.I,n.V=r(f),o=0;f>o;++o)n.V[o]=mn({})}function dn(n,r,c){return n.V[((r&n.qc)<<n.u)+((255&c)>>>8-n.u)]}function hn(n,r,c){var t,o,f=1
for(o=7;o>=0;--o)t=c>>o&1,Cn(r,n.tb,f,t),f=f<<1|t}function sn(n,r,c,t){var o,f,b,i,u=1,e=1
for(f=7;f>=0;--f)o=t>>f&1,i=e,u&&(i+=1+(b=c>>f&1)<<8,u=b==o),Cn(r,n.tb,i,o),e=e<<1|o}function mn(n){return n.tb=r(768),n}function gn(n,r,c,t){var o,f,b=1,i=7,u=0
if(r)for(;i>=0;--i)if(f=c>>i&1,o=t>>i&1,u+=qn(n.tb[(1+f<<8)+b],o),b=b<<1|o,f!=o){--i
break}for(;i>=0;--i)o=t>>i&1,u+=qn(n.tb[b],o),b=b<<1|o
return u}function xn(n){n.j=-1,n.t=0}function pn(n,c){return n.F=c,n.G=r(1<<c),n}function zn(n,r){var c,t=1
for(c=n.F;0!=c;--c)t=(t<<1)+An(r,n.G,t)
return t-(1<<n.F)}function Mn(n,c){return n.F=c,n.G=r(1<<c),n}function wn(n,r,c){var t,o,f=1
for(o=n.F;0!=o;)t=c>>>--o&1,Cn(r,n.G,f,t),f=f<<1|t}function En(n,r){var c,t,o=1,f=0
for(t=n.F;0!=t;)c=r>>>--t&1,f+=qn(n.G[o],c),o=(o<<1)+c
return f}function Ln(n,r,c){var t,o,f=1
for(o=0;n.F>o;++o)t=1&c,Cn(r,n.G,f,t),f=f<<1|t,c>>=1}function jn(n,r){var c,t,o=1,f=0
for(t=n.F;0!=t;--t)c=1&r,r>>>=1,f+=qn(n.G[o],c),o=o<<1|c
return f}function yn(n,r,c,t,o){var f,b,i=1
for(b=0;t>b;++b)Cn(c,n,r+i,f=1&o),i=i<<1|f,o>>=1}function kn(n,r,c,t){var o,f,b=1,i=0
for(f=c;0!=f;--f)o=1&t,t>>>=1,i+=$n[(2047&(n[r+b]-o^-o))>>>2],b=b<<1|o
return i}function An(n,r,c){var t,o=r[c]
return(-2147483648^(t=(n.E>>>11)*o))>(-2147483648^n.Bb)?(n.E=t,r[c]=o+(2048-o>>>5)<<16>>16,-16777216&n.E||(n.Bb=n.Bb<<8|s(n.Ab),n.E<<=8),0):(n.E-=t,n.Bb-=t,r[c]=o-(o>>>5)<<16>>16,-16777216&n.E||(n.Bb=n.Bb<<8|s(n.Ab),n.E<<=8),1)}function Bn(n){for(var r=n.length-1;r>=0;--r)n[r]=1024}function Cn(n,r,o,f){var b,u=r[o]
b=(n.E>>>11)*u,f?(n.xc=c(n.xc,t(i(b),[4294967295,0])),n.E-=b,r[o]=u-(u>>>5)<<16>>16):(n.E=b,r[o]=u+(2048-u>>>5)<<16>>16),-16777216&n.E||(n.E<<=8,Un(n))}function Gn(n,r,t){for(var o=t-1;o>=0;--o)n.E>>>=1,1==(r>>>o&1)&&(n.xc=c(n.xc,i(n.E))),-16777216&n.E||(n.E<<=8,Un(n))}function In(n){return c(c(i(n.Jb),n.mc),[4,0])}function Un(n){var r,f=u(function(n,r){var t
return t=l(n,r&=63),0>n[1]&&(t=c(t,v([2,0],63-r))),t}(n.xc,32))
if(0!=f||o(n.xc,[4278190080,0])<0){n.mc=c(n.mc,i(n.Jb)),r=n.Oc
do{p(n.Ab,r+f),r=255}while(0!=--n.Jb)
n.Oc=u(n.xc)>>>24}++n.Jb,n.xc=v(t(n.xc,[16777215,0]),8)}function qn(n,r){return $n[(2047&(n-r^-r))>>>2]}function Qn(n){for(var r,c,t,o=0,f=0,b=n.length,i=[],u=[];b>o;++o,++f){if(128&(r=255&n[o]))if(192==(224&r)){if(o+1>=b)return n
if(128!=(192&(c=255&n[++o])))return n
u[f]=(31&r)<<6|63&c}else{if(224!=(240&r))return n
if(o+2>=b)return n
if(128!=(192&(c=255&n[++o])))return n
if(128!=(192&(t=255&n[++o])))return n
u[f]=(15&r)<<12|(63&c)<<6|63&t}else{if(!r)return n
u[f]=r}16383==f&&(i.push(String.fromCharCode.apply(String,u)),f=-1)}return f>0&&(u.length=f,i.push(String.fromCharCode.apply(String,u))),i.join("")}function Jn(n){var r,c,t,o=[],f=0,b=n.length
if("object"==typeof n)return n
for(function(n,r,c,t,o){var f
for(f=r;c>f;++f)t[o++]=n.charCodeAt(f)}(n,0,b,o,0),t=0;b>t;++t)(r=o[t])>=1&&127>=r?++f:f+=!r||r>=128&&2047>=r?2:3
for(c=[],f=0,t=0;b>t;++t)(r=o[t])>=1&&127>=r?c[f++]=r<<24>>24:!r||r>=128&&2047>=r?(c[f++]=(192|r>>6&31)<<24>>24,c[f++]=(128|63&r)<<24>>24):(c[f++]=(224|r>>12&15)<<24>>24,c[f++]=(128|r>>6&63)<<24>>24,c[f++]=(128|63&r)<<24>>24)
return c}function Dn(n){return n[1]+n[0]}var Nn=1,Zn=2,Fn=3,Kn="function"==typeof setImmediate?setImmediate:setTimeout,Tn=4294967296,Vn=[4294967295,-Tn],Yn=[0,-0x8000000000000000],Rn=[0,0],Sn=[1,0],On=function(){var n,r,c,t=[]
for(n=0;256>n;++n){for(c=n,r=0;8>r;++r)0!=(1&c)?c=c>>>1^-306674912:c>>>=1
t[n]=c}return t}(),Hn=function(){var n,r,c,t=2,o=[0,1]
for(c=2;22>c;++c)for(r=1<<(c>>1)-1,n=0;r>n;++n,++t)o[t]=c<<24>>24
return o}(),$n=function(){var n,r,c,t=[]
for(r=8;r>=0;--r)for(n=1<<9-r,c=1<<9-r-1;n>c;++c)t[c]=(r<<6)+(n-c<<6>>>9-r-1)
return t}(),Pn=function(){var n=[{s:16,f:64,m:0},{s:20,f:64,m:0},{s:19,f:64,m:1},{s:20,f:64,m:1},{s:21,f:128,m:1},{s:22,f:128,m:1},{s:23,f:128,m:1},{s:24,f:255,m:1},{s:25,f:255,m:1}]
return function(r){return n[r-1]||n[6]}}()
return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||(onmessage=function(n){n&&n.gc&&(n.gc.action==Zn?e.decompress(n.gc.gc,n.gc.cbn):n.gc.action==Nn&&e.compress(n.gc.gc,n.gc.Rc,n.gc.cbn))}),{compress:function(r,c,t,o){var f,b,i={},u=void 0===t&&void 0===o
if("function"!=typeof t&&(b=t,t=o=0),o=o||function(r){return void 0!==b?n(r,b):void 0},t=t||function(n,r){return void 0!==b?postMessage({action:Nn,cbn:b,result:n,error:r}):void 0},u){for(i.c=E({},Jn(r),Pn(c));Z(i.c.yb););return x(i.c.Nb)}try{i.c=E({},Jn(r),Pn(c)),o(0)}catch(n){return t(null,n)}Kn(function n(){try{for(var r,c=(new Date).getTime();Z(i.c.yb);)if(f=Dn(i.c.yb.Pb)/Dn(i.c.Tb),(new Date).getTime()-c>200)return o(f),Kn(n,0),0
o(1),r=x(i.c.Nb),Kn(t.bind(null,r),0)}catch(n){t(null,n)}},0)},decompress:function(r,c,t){var o,f,b,i,u={},e=void 0===c&&void 0===t
if("function"!=typeof c&&(f=c,c=t=0),t=t||function(r){return void 0!==f?n(b?r:-1,f):void 0},c=c||function(n,r){return void 0!==f?postMessage({action:Zn,cbn:f,result:n,error:r}):void 0},e){for(u.d=j({},r);Z(u.d.yb););return Qn(x(u.d.Nb))}try{u.d=j({},r),i=Dn(u.d.Tb),b=i>-1,t(0)}catch(n){return c(null,n)}Kn(function n(){try{for(var r,f=0,e=(new Date).getTime();Z(u.d.yb);)if(++f%1e3==0&&(new Date).getTime()-e>200)return b&&(o=Dn(u.d.yb.Z.g)/i,t(o)),Kn(n,0),0
t(1),r=Qn(x(u.d.Nb)),Kn(c.bind(null,r),0)}catch(n){c(null,n)}},0)}}}()
this.LZMA=this.LZMA_WORKER=e
