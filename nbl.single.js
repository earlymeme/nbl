/* NBL.js (c) 2010 Berklee. Licensed under the MIT license. */
this.nbl={c:document,q:{},n:null,l:function(a){var b,c,x,y,z,s,l,i=j=0,m=this;m.h=m.c.head||m.c.body,m.i||(m.s=m.f=0,m.i=setInterval(function(){if(m.o<0||m.s==0)m.i=clearInterval(m.i),m.s>0&&m.f&&m.f(m.q);m.o--},m.o=50));if(a&&a.shift)while(i<a.length)b=a[i],c=a[i+1],x="function",y=typeof b,z=typeof c,l=z==x?c:y==x?b:m.n,y=="number"&&(m.o=b/50),y=="string"&&m.a([b],l),b.shift&&m.a([b.shift(),b],l),!m.f&&l&&(m.f=l),i++},a:function(a,b){var c,d=this,e=a[0].replace(/.+\/|\.min\.js|\.js|\?.+|\W/g,"");c=d.q[e]=d.c.createElement("script"),c.setAttribute("src",a[0]),c.onload=c.onreadystatechange=function(){var c=this,f=function(){var c=d,f=a[1];c.q[e]=!0,f&&c.l(f),b&&b(),c.s--};if(!c.readyState||/de|te/.test(c.readyState))c.onload=c.onreadystatechange=d.n,f()},d.s++,d.h.appendChild(c)}},
nbl.l(['your', 'scripts', 'here'])
