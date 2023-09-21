(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
document.addEventListener("DOMContentLoaded",function n(){document.removeEventListener("DOMContentLoaded",n,!1);var e=document,h;h||(h={});var k=e.querySelectorAll("[data-gwd-motion-path-key]");if(0!=k.length){e=e.ownerDocument||e;for(var l=0;l<k.length;l++){var a=k[l];var b=a.parentElement;if(b.hasAttribute("data-gwd-motion-path-node"))for(;b.parentElement.hasAttribute("data-gwd-motion-path-node");)b=b.parentElement;else b=null;if(!b){b=a.getAttribute("data-gwd-motion-path-key");b=!!h[b]||a.hasAttribute("data-gwd-has-tangent-following");
var g=a,c=e,p=b,m=g.getAttribute("data-gwd-motion-path-key"),d=c.createElement("div");d.setAttribute("data-gwd-motion-path-node","x");d.className=m+"-anim-x";g.parentElement.insertBefore(d,g);var f=c.createElement("div");f.setAttribute("data-gwd-motion-path-node","y");f.className=m+"-anim-y";d.appendChild(f);d=f;p&&(c=c.createElement("div"),c.setAttribute("data-gwd-motion-path-node","theta"),c.className=m+"-anim-theta",f.appendChild(c),d=c);d.appendChild(g);b&&(a.setAttribute("data-gwd-mp-inline-ltwh",
[a.style.left,a.style.top,a.style.width,a.style.height].join()),a.style.left="0px",a.style.top="0px",a.style.width="100%",a.style.height="100%")}}}},!1);}).call(this);
