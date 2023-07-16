if(typeof _STNS=="undefined"){
if(!Array.prototype.push){
Array.prototype.push=function(){
for(var i=0;i<arguments.length;i++){
this[this.length]=arguments[i];
}
return this.length;
};
}
if(!Array.prototype.pop){
Array.prototype.pop=function(){
if(this.length){
var o=this[this.length-1];
this.length--;
return o;
}
};
}
if(!Array.prototype.shift){
Array.prototype.shift=function(){
if(this.length){
var o=this[0];
for(var i=0;i<this.length-1;i++){
this[i]=this[i+1];
}
this.length--;
return o;
}
};
}
if(!Function.prototype.call){
Function.prototype.call=function(_5){
var _5=_5||window;
_5.__tmp=this;
var _6=_5.__tmp(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10]);
_5.__tmp=null;
return _6;
};
}
_STNS={sVer:"3.0",bDebug:false,fvThrow:function(e){
},bBufImg:true,oImgs:{},fvBufImgs:function(){
if(!_STNS.bBufImg){
return;
}
if(!_STNS.bLoaded){
var s="";
for(var i in _STNS.oImgs){
if(_STNS.oImgs[i]!=2){
s+=_STNS.fsGetTag("div","style=\"display:none\"",_STNS.fsGetImgTag(i,-1,-1));
}
_STNS.oImgs[i]=2;
}
document.write(s);
}
},bIsIE:false,bIsMIE:false,bIsFX:false,bIsOP:false,bIsSF:false,bIsKQ:false,oNav:null,bRTL:false,sDocMd:null,sURL:window.location.href+"",sDIR:null,bLocal:false,fsGetDocMd:function(w){
var w=w||window;
switch(w.document.compatMode){
case "QuirksMode":
case "BackCompat":
return "quirks";
case "CSS1Compat":
return "css1";
default:
return document.compatMode;
}
},_foGetNav:function(){
var _n=navigator,_u=_n.userAgent,_a=_n.appName,_p=_n.platform,n,v,p;
if(/(Opera)[ \/]([\d\.]+)/.test(_u)||/(Netscape)\d*\/([\d\.]+)/.test(_u)||/(MSIE) ([\d\.]+)/.test(_u)||/(Safari)\/([\d\.]+)/.test(_u)||/(Konqueror)\/([\d\.]+)/.test(_u)||/(Gecko)\/(\d+)/.test(_u)){
n=RegExp.$1.toLowerCase();
v=RegExp.$2;
}else{
if(_a=="Netscape"&&_n.appVersion.charAt(0)=="4"){
n="netscape4";
v=parseFloat(_n.appVersion);
}else{
n="unknow";
v=0;
}
}
if(n=="netscape"){
switch(_a){
case "Microsoft Internet Explorer":
n="msie";
v=/(MSIE) ([\d\.]+)/.exec(_u)[2];
break;
case "Netscape":
n="gecko";
v=/(Gecko)\/(\d+)/.exec(_u)[2];
}
}
if(/^(Win)/.test(_p)||/^(Mac)/.test(_p)||/^(SunOS)/.test(_p)||/^(Linux)/.test(_p)||/^(Unix)/.test(_p)){
p=RegExp.$1.toLowerCase();
}else{
p=_p;
}
return {name:n,version:v,platform:p};
},fiGetCT:function(w){
var w=w||window;
if(_STNS.bIsIE){
return (_STNS.fsGetDocMd(w)=="css1"?w.document.documentElement:w.document.body).scrollTop;
}else{
return w.pageYOffset;
}
},fiGetCL:function(w){
var w=w||window;
if(_STNS.bIsIE){
return (_STNS.fsGetDocMd(w)=="css1"?w.document.documentElement:w.document.body).scrollLeft;
}else{
return w.pageXOffset;
}
},fiGetCW:function(w){
var w=w||window;
if(_STNS.bIsIE){
return (_STNS.fsGetDocMd(w)=="css1"?w.document.documentElement:w.document.body).clientWidth;
}else{
if(w.scrollbars&&w.scrollbars.visible||w.innerHeight<document.documentElement.offsetHeight){
return w.innerWidth-20;
}
}
return w.innerWidth;
},fiGetCH:function(w){
var w=w||window;
if(_STNS.bIsIE){
return (_STNS.fsGetDocMd(w)=="css1"?w.document.documentElement:w.document.body).clientHeight;
}else{
if(w.scrollbars&&w.scrollbars.visible||w.innerWidth<document.documentElement.offsetWidth){
return w.innerHeight-20;
}
}
return w.innerHeight;
},foGetMediaInfor:function(s){
_STNS.fvThrow(new Error("_STNS.runTime error:call foGetMediaInfor that has not been implemented"));
},oLibs:{},sLibPth:"",fvInitLib:function(){
var scs,sc,s,t,ls,pth;
if(_STNS.bIsFX&&!_STNS.faGetElesByTagName("body").length){
var hds=_STNS.faGetElesByTagName("head");
sc=hds[0].lastChild;
}else{
scs=_STNS.faGetElesByTagName("script");
sc=scs[scs.length-1];
}
if(sc){
s=sc.src;
}
if(s){
_STNS.sLibPth=s.substr(0,s.lastIndexOf("index.html")+1);
t=_STNS.fcoGetAttribute(sc,"sothinkdebug");
if(t=="true"){
pth=_STNS.fsGetAbsPth(_STNS.sLibPth+"debug/stdebug.js");
if(!_STNS.oLibs[pth]){
_STNS.oLibs[pth]={state:1,defer:0};
}
}
t=_STNS.fcoGetAttribute(sc,"sothinklib");
if(t){
ls=t.split(";");
for(var i=0;i<ls.length;i++){
if(!ls[i]){
continue;
}
if(!_STNS.fbIsFile(ls[i])){
ls[i]+=".js";
}
pth=_STNS.fsGetAbsPth(_STNS.sLibPth+ls[i]);
if(_STNS.oLibs[pth]){
continue;
}
_STNS.oLibs[pth]={state:1,defer:0};
}
}
}else{
_STNS.fvThrow(new Error("_STNS.runTime error:can't get lib path"));
}
},fvInc:function(s,f){
if(!_STNS.oLibs[s]){
_STNS.oLibs[s]={state:1,defer:f};
}
},fvLoadLib:function(){
var s="";
with(_STNS){
for(var i in oLibs){
if(oLibs[i].state!=2){
if(bLoaded){
fbInsJs(i);
}else{
s+=fsGetJsTag(i,oLibs[i].defer);
}
oLibs[i].state=2;
}
}
}
if(s){
document.write(s);
}
},bLoaded:false,_aLoads:[],fbAddLoad:function(f){
if(!_STNS.bLoaded&&typeof f=="function"){
return _STNS._aLoads.push(f);
}else{
if(_STNS.bLoaded){
_STNS.fvThrow(new Error("_STNS.runTime error:Page has been loaded!"));
}else{
_STNS.fvThrow(new Error("_STNS.runTime error:Not a function is pushed into onload event!"));
}
}
return false;
},_fvOnload:function(){
with(_STNS){
if(bLoaded){
return;
}
bLoaded=true;
for(var j=0;j<_aLoads.length;j++){
_aLoads[j]();
}
}
},_fvInitOnload:function(){
if(_STNS.bIsIE&&window.attachEvent){
window.attachEvent("onload",_STNS._fvOnload);
}else{
if(_STNS.oNav.name!="konqueror"&&window.addEventListener){
window.addEventListener("load",_STNS._fvOnload,false);
}else{
if(!window.onload||window.onload.toString()!=_STNS._fvOnload.toString()){
if(typeof window.onload=="function"){
_STNS.fbAddLoad(window.onload);
}
onload=_STNS._fvOnload;
}
}
}
},_aCks:[],bCkPg:false,nCkTid:0,nCkTime:100,fvAddCk:function(f){
if(typeof f=="function"){
with(_STNS){
if(bCkPg){
clearTimeout(nCkTid);
bCkPg=false;
}
_aCks.push(f);
if(bLoaded){
_fvCkPg();
}
}
}else{
_STNS.fvThrow(new Error("_STNS.runTime error:Not a function is pushed into check page event!"));
}
return false;
},_fvCkPg:function(){
with(_STNS){
if(_aCks.length){
bCkPg=true;
for(var i=0;i<_aCks.length;i++){
_aCks[i]();
}
nCkTid=setTimeout("_STNS._fvCkPg()",nCkTime);
}else{
bCkPg=false;
}
}
},bShield:false,oDefCSS:{tb:"border-style:none;background-color:transparent;background-image:none;",tr:"border-style:none;background-color:transparent;background-image:none;",td:"border-style:none;background-color:transparent;background-image:none;",dv:"border-style:none;background-color:transparent;background-image:none;margin:0px;padding:0px;",a:"display:block;border-style:none;background-color:transparent;background-image:none;margin:0px;padding:0px;",hd:"display:none;",sp:"border-style:none;background-color:transparent;background-image:none;margin:0px;padding:0px;"},foCss2Obj:function(s){
var o={},a,re=/([\w\-_]+):([^;]+)(;|$)/,ra;
a=s.split(";");
for(var i=0;i<a.length;i++){
ra=re.exec(a[i]);
if(ra){
o[ra[1]]=ra[2];
}
}
return o;
},foCss2Style:function(s){
var cs=_STNS.foCss2Obj(s),re=/-([a-z])/,o={},i,k,t;
for(i in cs){
t=re.exec(i);
if(t){
k=i.replace("-"+t[1],t[1].toUpperCase());
}else{
k=i;
}
o[k]=cs[i];
}
return o;
},fsObj2Css:function(a){
var s="";
for(var i in a){
if(a[i]!=null){
s+=i+":"+a[i]+";";
}
}
return s;
},fvCSSShield:function(){
with(_STNS){
if(bLoaded){
bShield=false;
}else{
if(faGetElesByTagName("body")&&faGetElesByTagName("body").length){
bShield=false;
}else{
var i,s="\n<style type='text/css'>\n";
for(i in oDefCSS){
if(i=="a"){
s+=".sta:link,.sta:hover,.sta:active,.sta:visited";
}else{
s+=".st"+i;
}
s+="{"+oDefCSS[i]+"}\n";
}
s+="</style>";
bShield=true;
document.write(s);
}
}
}
},fsReadCoki:function(n){
var i,cs=document.cookie.split("; ");
for(i=0;i<cs.length;i++){
if(!cs[i].indexOf(n+"=")){
return cs[i].substr(n.length);
}
}
},fvSaveCoki:function(n,v,t){
var s=n+"="+v+"; ",d=new Date;
if(!t||!v){
s+="expires=Fri, 31 Dec 1999 23:59:59 GMT; ";
}else{
s+="expires="+((new Date(d-0+t)).toGMTString())+"; ";
}
s+="path=/; ";
document.cookie=s;
},ffGetFun:function(f){
if(typeof f=="function"){
return f;
}else{
if(typeof f=="string"&&window[f]){
return window[f];
}
}
},fbIsAbsPth:function(s){
var t=s.toLowerCase();
return /^(#|\?|\/|[a-z]:|http:|https:|file:|ftp:|javascript:|vbscript:|mailto:|about:|gopher:|news:|res:|telnet:|view-source|wais:|rtsp:|mms:|outlook:)/.test(t);
},fsGetAbsPth:function(ss){
var s=ss;
if(!s){
return s;
}
var re,t;
if(!s.indexOf("//")){
return s;
}
if(s.charAt(0)=="index.html"){
re=/^(file:\/{2,}[^\/]+\/|http:\/\/[^\/]+\/|https:\/\/[^\/]+\/)/;
if(re.exec(_STNS.sDIR)){
s=RegExp.$1+s.substr(1);
}else{
return s;
}
}else{
if(s=="#"){
if(_STNS.sURL.charAt(_STNS.sURL.length-1)!="#"){
return _STNS.sURL+"#";
}else{
return _STNS.sURL;
}
}else{
if(!_STNS.fbIsAbsPth(s)){
s=_STNS.sDIR+s;
}else{
return s;
}
}
}
while(s.indexOf("index.html")>0){
s=s.replace("index.html","index.html");
}
while((t=s.indexOf("index.html"))>0){
var p1,p2;
p1=s.substr(0,t);
p2=s.substr(t).replace("index.html","");
p1=p1.substr(0,p1.lastIndexOf("index.html")+1);
s=p1+p2;
}
return s;
},fsGetImgTag:function(s,w,h,b,id,nw,nh){
if(!s||!w||!h){
return "";
}
if(nw&&nh){
if(w==-1&&h==-1){
w=nw,h=nh;
}else{
if(w==-1&&h!=-1){
w=Math.floor(nw*h/nh);
}else{
if(w!=-1&&h==-1){
h=Math.floor(nh*w/nw);
}
}
}
}
return "<img class='stimg' src=\""+s+"\""+(w==-1?"":" width="+w)+(h==-1?"":" height="+h)+" border="+(b?b:0)+(id?" id='"+id+"'":"")+">";
},fsGetJsTag:function(s,f){
return "<script type='text/javascript' language='javascript1.2' src=\""+s+"\""+(f?" DEFER":"")+"></"+"script>";
},fsGetTag:function(t,a,s){
return "<"+t+" "+a+">"+(s?s:"")+"</"+t+">";
},fbIsFile:function(s){
return /\w+\.\w+$/.test(s);
},fbIsImg:function(s){
return /\.(gif|png|jpg|jpeg|bmp)$/.test(s.toLowerCase());
},fsGetDIR:function(s){
var t=s.toLowerCase();
if(!t.indexOf("file:/")||!t.indexOf("http://")||!t.indexOf("https:///")){
return s.substr(0,s.lastIndexOf("index.html")+1);
}else{
return "";
}
},fsGetHTMLEnti:function(s,f){
if(!s){
return "";
}
var re;
re=/&/g;
s=s.replace(re,"&amp;");
if(!f){
re=/ /g;
s=s.replace(re,"&nbsp;");
}
re=/</g;
s=s.replace(re,"&lt;");
re=/>/g;
s=s.replace(re,"&gt;");
re=/\"/g;
s=s.replace(re,"&quot;");
return s;
},faJoinA:function(a,b){
var c=[],l=Math.max(a.length,b.length);
for(var i=0;i<l;i++){
if(a[i]==null){
c[i]=b[i];
}else{
c[i]=a[i];
}
}
return c;
},S64:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@",fiTransX2D:function(n,m){
m=String(m).replace(/ /gi,"");
if(m==""){
return 0;
}
var a=_STNS.S64.substr(0,n);
if(eval("m.replace(/["+a+"]/gi,'')")!=""){
_STNS.fvThrow(new Error("_STNS.runTime error:Transform bad number from "+m+" to 10!"));
return 0;
}
var t=0,c=1;
for(var x=m.length-1;x>-1;x--){
t+=c*(a.indexOf(m.charAt(x)));
c*=n;
}
return t;
},fsTranD2X:function(n,m){
m=String(m).replace(/ /gi,"");
if(m==""){
return 0;
}
if(parseInt(m)!=m){
_STNS.fvThrow(new Error("_STNS.runTime error:Transform bad number from 10 to "+m+"!"));
return "";
}
var t="",a=_STNS.S64.substr(0,n);
while(m!=0){
var b=m%n;
t=a.charAt(b)+t;
m=(m-b)/n;
}
if(!t){
t="0";
}
return t;
},faCP2PP:function(cp,w){
var t,l;
with(_STNS){
t=fiGetCT(w);
l=fiGetCL(w);
return [cp[0]+l,cp[1]+t];
}
},faPP2CP:function(pp,w){
var t,l;
with(_STNS){
t=fiGetCT(w);
l=fiGetCL(w);
return [pp[0]-l,pp[1]-t];
}
},fsGetLen:function(t,l,p,b,s,w){
var _r=_STNS,u;
if(w==null){
w=true;
}
if(s==null){
s=true;
}
if(p==null){
p=0;
}
if(b==null){
b=0;
}
if(typeof l=="string"){
u=/%|px|pt|em|ex|pc|in|cm|mm$/.exec(l);
}
if(u){
switch(u[0]){
case "%":
return l;
default:
l=parseInt(l),u=u[0];
}
}else{
l=parseInt(l);
u="px";
}
switch(t){
case "dv":
if(_r.sDocMd=="css1"||(!_r.bIsIE&&!_r.bIsOP||(_r.bIsOP&&parseInt(_r.oNav.version)>=8))){
return l-2*p-2*b+u;
}
break;
case "tb":
if(_r.bIsMIE&&!w&&s){
return l-2*b-2*p+u;
}
break;
case "td":
if(_r.bIsSF){
if(_r.sDocMd!="css1"||w){
if(s){
return l-2*b+u;
}else{
return l-2*p+u;
}
}else{
return l-2*p-2*b+u;
}
}else{
if(!_r.bIsMIE&&(_r.sDocMd=="css1"||w)){
return l-2*b-2*p+u;
}
}
break;
}
return l+u;
},fdmGetEleById:function(id,w){
var w=w||window;
with(_STNS){
if(bIsIE&&parseFloat(oNav.version)<9){
var es=w.document.all(id);
if(es&&es.length&&!es.tagName){
return es[0];
}else{
return es;
}
}else{
return w.document.getElementById(id);
}
}
},faGetElesByTagName:function(n,w){
var w=w||window;
with(_STNS){
if(bIsIE){
return w.document.all.tags(n);
}else{
return w.document.getElementsByTagName(n);
}
}
},faGetElesByCls:function(n,w){
var w=w||window;
var i,a=[],el,els=_STNS.bIsIE?w.document.all:w.document.getElementsByTagName("*");
for(i=0;el=els[i];i++){
if(el.className==n){
a.push(el);
}
}
return a;
},fdmGetFmByName:function(n,w){
var w=w||window;
if(w.frames[t]){
return w.frames[t];
}else{
if(w.parent){
return w.parent.frames[t];
}
}
},fbIsPar:function(p,c){
if(_STNS.bIsIE){
return p.contains(c);
}else{
if(!p||!c){
return false;
}
if(p==c){
return true;
}
do{
if(c.parentNode){
c=c.parentNode;
}else{
break;
}
if(p==c){
return true;
}
}while(c);
}
return false;
},fbInsHTML:function(e,p,h){
if(_STNS.bIsIE){
return e.insertAdjacentHTML(p,h);
}else{
var d=e.ownerDocument,t=d.createElement("span");
t.innerHTML=h;
switch(p){
case "beforeBegin":
return e.parentNode.insertBefore(t,e);
case "afterBegin":
return e.insertBefore(t,e.firstChild);
case "beforeEnd":
return e.appendChild(t);
case "afterEnd":
if(e.nextSibling){
return e.parentNode.insertBefore(t,e.nextSibling);
}else{
return e.parentNode.appendChild(t);
}
}
}
return false;
},fbInsEle:function(e,p,ne){
if(_STNS.bIsIE){
return e.insertAdjacentElement(p,ne);
}else{
switch(p){
case "beforeBegin":
return e.parentNode.insertBefore(ne,e);
case "afterBegin":
return e.insertBefore(ne,e.firstChild);
case "beforeEnd":
return e.appendChild(ne);
case "afterEnd":
if(o.nextSibling){
return e.parentNode.insertBefore(ne,e.nextSibling);
}else{
return e.parentNode.appendChild(ne);
}
}
}
},fbDelEle:function(e){
var p=e.parentNode;
return p.removeChild(e);
},fbInsJs:function(s,l){
var l=l||"JavaScript";
var hd=_STNS.faGetElesByTagName("HEAD");
if(hd&&hd[0]){
l=l.toLowerCase();
var t=document.createElement("script");
t.language=l;
if(!l.indexOf("javascript")||!l.indexOf("jscript")){
t.type="text/javascript";
}
t.src=s;
_STNS.fbInsEle(hd,"beforeEnd",t);
}
},fdmCreateXMLHttp:function(){
var _9a;
if(window.XMLHttpRequest){
_9a=new XMLHttpRequest();
}else{
var _9b=["MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
for(var n=0;n<_9b.length;n++){
try{
_9a=new ActiveXObject(_9b[n]);
break;
}
catch(e){
_9a=null;
}
}
}
if(!_9a){
_9a=null;
_STNS.fvThrow(new Error("Create XMLHttpRequest fail!"));
return;
}
if(_9a.readyState==null){
_9a.readyState=0;
_9a.addEventListener("load",function(){
_9a.readyState=4;
if(typeof _9a.onreadystatechange=="function"){
_9a.onreadystatechange();
}
},false);
}
return _9a;
},fdmCreateXMLDoc:function(){
var _9d;
if(_STNS.bIsIE){
var _9e=["Msxml2.DOMDocument.4.0","Msxml2.DOMDocument.3.0","Msxml2.DOMDocument","Microsoft.XMLDOM"];
for(var n=0;n<_9e.length;n++){
try{
_9d=new ActiveXObject(_9e[n]);
break;
}
catch(e){
}
}
}else{
_9d=document.implementation.createDocument("","",null);
}
if(!_9d){
_STNS.fvThrow(new Error("Create XMLDOMDocument fail!"));
return;
}
return _9d;
},faGetElePos:function(e){
if(!e){
return;
}
var x=y=bl=bt=0;
var v=_STNS.oNav.version,a=new Array(v,523.12),sv=a.sort()[0]==523.12;
if(_STNS.bIsSF&&sv){
var o=e.offsetParent?e.offsetParent.offsetParent?e.offsetParent.offsetParent.offsetParent?e.offsetParent.offsetParent.offsetParent?e.offsetParent.offsetParent.offsetParent.offsetParent?e.offsetParent.offsetParent.offsetParent.offsetParent:null:null:null:null:null;
while(o){
if(o.tagName=="TABLE"){
bl=parseInt(_STNS.fsGetEleStyle(o,"borderLeftWidth"));
bt=parseInt(_STNS.fsGetEleStyle(o,"borderTopWidth"));
if(!isNaN(bl)){
x+=bl;
}
if(!isNaN(bt)){
y+=bt;
}
}
o=o.offsetParent;
}
}
while(e){
x+=e.offsetLeft;
y+=e.offsetTop;
if((_STNS.oNav.name=="konqueror"||_STNS.oNav.name=="safari")&&e.style.position.toLowerCase()=="absolute"){
break;
}
switch(e.tagName){
case "TD":
if(_STNS.bIsIE||(_STNS.bIsSF&&sv)||(_STNS.bIsOP&&_STNS.oNav.version<9)){
bl=parseInt(_STNS.fsGetEleStyle(e,"borderLeftWidth"));
bt=parseInt(_STNS.fsGetEleStyle(e,"borderTopWidth"));
if(!isNaN(bl)){
x+=bl;
}
if(!isNaN(bt)){
y+=bt;
}
}
break;
}
if(e.parentNode&&e.parentNode.tagName=="DIV"){
var s=_STNS.fsGetEleStyle(e.parentNode,"overflow").toLowerCase();
var w=_STNS.fsGetEleStyle(e.parentNode,"width").toLowerCase();
if(s=="hidden"||s=="scroll"||s=="auto"){
x-=e.parentNode.scrollLeft;
y-=e.parentNode.scrollTop;
}
if(w&&w!="auto"){
if((_STNS.bIsFX&&_STNS.oNav.version>20060414&&s!="visible")||(_STNS.bIsIE&&_STNS.oNav.version>=5)){
bl=parseInt(_STNS.fsGetEleStyle(e.parentNode,"borderLeftWidth"));
bt=parseInt(_STNS.fsGetEleStyle(e.parentNode,"borderTopWidth"));
if(!isNaN(bl)){
x+=bl;
}
if(!isNaN(bt)){
y+=bt;
}
}
}
}
if(e.parentNode&&e.offsetParent&&e.parentNode!=e.offsetParent){
if(e.offsetParent.tagName=="DIV"){
var s=_STNS.fsGetEleStyle(e.offsetParent,"overflow").toLowerCase();
var w=_STNS.fsGetEleStyle(e.offsetParent,"width").toLowerCase();
if(s=="hidden"||s=="scroll"||s=="auto"){
x-=e.offsetParent.scrollLeft;
y-=e.offsetParent.scrollTop;
}
if(w&&w!="auto"){
if((_STNS.bIsFX&&_STNS.oNav.version>20060414&&s!="visible")||(_STNS.bIsIE&&_STNS.oNav.version>=5)){
bl=parseInt(_STNS.fsGetEleStyle(e.offsetParent,"borderLeftWidth"));
bt=parseInt(_STNS.fsGetEleStyle(e.offsetParent,"borderTopWidth"));
if(!isNaN(bl)){
x+=bl;
}
if(!isNaN(bt)){
y+=bt;
}
}
}
}
}
e=e.offsetParent;
}
return [x,y];
},fiGetEleWid:function(e){
return e.offsetWidth;
},fiGetEleHei:function(e){
return e.offsetHeight;
},fsGetEleStyle:function(e,p){
if(!e||!p){
return;
}
if(_STNS.bIsIE){
return e.currentStyle[p];
}else{
if(_STNS.bIsFX||_STNS.bIsSF||_STNS.bIsOP){
var w=e.ownerDocument.defaultView;
p=p.replace(/([A-Z])/g,"-$1");
return w.getComputedStyle(e,"").getPropertyValue(p.toLowerCase());
}else{
return e.style[p];
}
}
},fcoGetAttribute:function(e,a){
if(!e||!a){
return;
}
if(_STNS.bIsIE){
return e[a];
}else{
return e.getAttribute(a);
}
},fbFalse:function(){
return false;
},fbTrue:function(){
return true;
}};
_STNS.Class=(function(){
var _af=function(){
var c=function(as){
if(_STNS.bIsIE){
this._cls=this.constructor;
}else{
this._cls=arguments.callee;
}
_b2.call(this,as);
};
_b3(c,arguments);
c.register=_b4;
c.toString=_b5;
c.subclsOf=_b6;
c.superclassOf=_b7;
return c;
};
_af.toString=function(){
return "[object Class]";
};
_af.getC=function(pth){
var _b9=[];
if(!_ba(pth,_b9)||!_bb[_b9[0]][_b9[1]]){
_STNS.fvThrow(new Error("Class get error: Class \""+pth+"\" is not found"));
return;
}
return _bb[_b9[0]][_b9[1]];
};
_af.getClsLst=function(o,pre){
var o=o||_bb,pre=pre||"/",sp,s="";
for(var i in o){
if(typeof o[i]=="object"){
sp=pre+i+"/";
s+=_STNS.Class.getClsLst(o[i],sp);
}else{
s+=pre+i+"\n";
}
}
return s;
};
var _b4=function(pth){
var _c2=[];
if(!_ba(pth,_c2)){
_STNS.fvThrow(new Error("Class register error: Invalid class path:"+pth));
return;
}
var pkg=_c2[0];
var cn=_c2[1];
if(pkg){
if(!_bb[pkg]){
_bb[pkg]={};
}
var _c5=_bb[pkg][cn];
if(_c5){
_STNS.fvThrow(new Error("Class register error: Class \""+pth+"\" already exists"));
return;
}
_bb[pkg][cn]=this;
}else{
var _c5=_bb[cn];
if(_c5){
_STNS.fvThrow(new Error("Class register error: Class \""+pth+"\" already exists"));
return;
}
_bb[cn]=this;
}
this._pkg=pkg;
this._cn=cn;
};
var _bb={};
var _c6=function(_c7,_c8){
if(typeof _c7=="string"){
_c7=_STNS.Class.getC(_c7);
}
if(typeof _c8=="string"){
_c8=_STNS.Class.getC(_c8);
}
if(typeof _c7!="function"||typeof _c8!="function"){
return false;
}
if(!_c7._supers){
return false;
}
for(var i=0;i<_c7._supers.length;i++){
if(_c7._supers[i]==_c8){
return true;
}else{
if(_c6(_c7._supers[i],_c8)){
return true;
}
}
}
return false;
};
var _b6=function(cls){
return _c6(this,cls);
};
var _b7=function(cls){
return _c6(cls,this);
};
var _ba=function(pth,_cd){
if(typeof pth!="string"||!pth){
return false;
}
var n=pth.lastIndexOf("index.html");
if(n>-1){
_cd[0]=pth.substr(0,n);
_cd[1]=pth.substr(n+1);
}else{
_cd[0]="";
_cd[1]=pth;
}
return true;
};
var _b3=function(c,as){
c._supers=[];
for(var i=0;i<as.length;i++){
var s=as[i];
if(typeof s=="string"){
s=_STNS.Class.getC(s);
}
if(typeof s!="function"){
_STNS.fvThrow(new Error("Class create error: Invalid superclass: "+"args["+i+"]"));
return;
}
c._supers.push(s);
}
};
var _b2=function(as){
var c=this._cls;
for(var i=0;i<c._supers.length;i++){
if(_STNS.bIsIE){
this.constructor=c._supers[i];
}
c._supers[i].call(this,as);
}
if(_STNS.bIsIE){
this.constructor=c;
}
this._cls=c;
this.toString=_d6;
this.getClass=_d7;
this.instanceOf=_d8;
this.toConvert=_d9;
if(c.construct){
c.construct.call(this,as);
}
};
var _d9=function(cls,as){
var c=this._cls;
if(_c6(c,cls)){
var t=new cls;
for(var i in this){
if(typeof t[i]=="undefined"){
delete this[i];
}
if(cls[i]){
this[i]=cls[i];
}
}
}else{
if(_c6(cls,c)){
var f=0;
for(var i=0;i<cls._supers.length;i++){
if(_STNS.bIsIE){
this.constructor=cls._supers[i];
}
if(cls._supers[i]!=c){
cls._supers[i].call(this,as);
}else{
f=1;
}
}
if(!f){
_STNS.fvThrow(new Error("_STNS.runTime error:Can't convert this instance;The class of instance must be the target class's direct superClass!"));
return;
}
if(_STNS.bIsIE){
this.constructor=cls;
}
this._cls=cls;
if(cls.construct){
cls.construct.call(this,as);
}
}else{
_STNS.fvThrow(new Error("_STNS.runTime error:Can't convert this instance;The class of instance must be the target class's subClass or direct superClass!"));
}
}
};
var _d8=function(c){
if(typeof c=="string"){
c=_STNS.Class.getC(c);
}
if(typeof c!=="function"){
return false;
}
return this._cls==c;
};
var _d7=function(){
return this._cls;
};
var _d6=function(){
if(this._cls._cn){
return "[object Object "+this._cls._pkg+"/"+this._cls._cn+"]";
}else{
return "[object Object Anonymous class]";
}
};
var _b5=function(){
if(this._cn){
return "[object Class "+this._pkg+"/"+this._cn+"]";
}
return "[object Anonymous Class]";
};
return _af;
})();
with(_STNS){
sDocMd=fsGetDocMd();
oNav=_foGetNav();
bIsIE=oNav.name=="msie";
bIsMIE=bIsIE&&oNav.platform=="mac";
bIsOP=oNav.name=="opera";
bIsFX=oNav.name=="gecko";
bIsSF=oNav.name=="safari";
bIsKQ=oNav.name=="konqueror";
sDIR=fsGetDIR(sURL);
bLocal=!sURL.indexOf("file:");
_fvInitOnload();
fbAddLoad(_fvCkPg);
}
}
_STNS.fvInitLib();
_STNS.fvInc(_STNS.fsGetAbsPth(_STNS.sLibPth+"stcode.js"));
_STNS.fvLoadLib();
if(!_STNS.bShield){
_STNS.fvCSSShield();
}
if(typeof _STNS!="undefined"&&!_STNS.EFFECT){
_STNS.EFFECT={foGetEff:function(s,id,w,d,o){
if(!s){
return 0;
}
if(/^stEffect\(.Open/i.test(s)&&_STNS.bIsIE){
var dir=s.replace(/^.*[\(\,]Direction\=(\w+)[\)\,].*$/i,"$1");
var d=s.replace(/^.*[\(\,]Duration\=([\d.]+)[\)\,].*$/i,"$1");
d=(d==s?1:parseFloat(d));
if(dir=="Down"||dir==s){
s="progid:DXImageTransform.Microsoft.Zigzag(GridSizeX=16,GridSizeY=16,enabled=0,Duration="+d+")";
d*=1000;
o=5;
}
if(dir=="Middle"){
s="progid:DXImageTransform.Microsoft.Barn(orientation=horizontal,motion=out,enabled=0,Duration="+d+")";
d*=1000;
o=16;
}
}
if(/^stEffect\(.Active/i.test(s)&&_STNS.bIsIE){
var d=s.replace(/^.*[\(\,]Duration\=([\d.]+)[\)\,].*$/i,"$1");
if(d==s){
d=(dd==s?1:parseFloat(d));
}
s="progid:DXImageTransform.Microsoft.Fade(overlap=.5,enabled=0,Duration="+d+")";
d*=1000;
o=12;
}
var t=s.toLowerCase(),c;
if((!t.indexOf("progid:")||!t.indexOf("revealtrans"))&&_STNS.EFFECT["CEffIE"]){
return new _STNS.EFFECT["CEffIE"]([s,id,w,d,o]);
}else{
if(!s.indexOf("stEffect")){
s=s.substring(10,s.length-2);
var cn="CEff"+s.charAt(0).toUpperCase()+s.substr(1).replace(/^(.*)\(.*$/,"$1");
if(_STNS.EFFECT[cn]){
return new _STNS.EFFECT[cn]([s,id,w,d,o]);
}
}else{
return 0;
}
}
}};
with(_STNS.EFFECT){
_STNS.EFFECT.CEffect=_STNS.Class();
CEffect.register("EFFECT/CEffect");
CEffect.construct=function(as){
this._iStat=-1;
this.sName=as[0];
this.sDmId=as[1];
this.dmWin=as[2]||window;
with(_STNS.EFFECT.CEffect){
this.fiGetStat=fiGetStat;
this.sGetParam=sGetParam;
this.fbSet=_STNS.fbFalse;
this.fbDel=_STNS.fbFalse;
this.fbApply=_STNS.fbFalse;
this.fbPlay=_STNS.fbFalse;
this.fbStop=_STNS.fbFalse;
this.fbSetStyle=_STNS.fbFalse;
this.fvAnalyzeParams=fvAnalyzeParams;
}
this.aParams=new Array();
this.sParams=as[0].replace(/^.*\((.*)\).*$/,"$1");
if(this.sParams==as[0]){
this.sParams="";
}
};
CEffect.fiGetStat=function(){
return this._iStat;
};
CEffect.sGetParam=function(s){
var b=this.sName.replace(new RegExp("^.*[\\(\\,]"+s+"\\=(\\d+)[\\,\\)].*$","i"),"$1");
return this.sName==b?"":b;
};
CEffect.fvAnalyzeParams=function(){
var ta=this.sParams.split(",");
var a;
for(var i=0;i<ta.length;i++){
a=ta[i].split("=");
a[1]=/^\d+$/.test(a[1])?parseInt(a[1]):(/^\d*\.\d+$/.test(a[1])?parseFloat(a[1]):a[1]);
this.aParams[a[0]]=typeof (a[1])!="string"?a[1]:this._cls[a[1]]||a[1];
}
};
}
}

