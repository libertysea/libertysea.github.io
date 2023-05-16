var dragStartX,anzhiyu_musicFirst=!1,anzhiyu_musicPlaying=!1,anzhiyu_keyboard=!!localStorage.getItem("keyboardToggle")&&localStorage.getItem("keyboardToggle"),$web_container=document.getElementById("web_container"),$web_box=document.getElementById("web_box"),$bodyWrap=document.getElementById("body-wrap"),$main=document.querySelector("main"),adjectives=["美丽的","英俊的","聪明的","勇敢的","可爱的","慷慨的","善良的","可靠的","开朗的","成熟的","稳重的","真诚的","幽默的","豁达的","有趣的","活泼的","优雅的","敏捷的","温柔的","温暖的","敬业的","细心的","耐心的","深沉的","朴素的","含蓄的","率直的","开放的","务实的","坚强的","自信的","谦虚的","文静的","深刻的","纯真的","朝气蓬勃的","慎重的","大方的","顽强的","迷人的","机智的","善解人意的","富有想象力的","有魅力的","独立的","好奇的","干净的","宽容的","尊重他人的","体贴的","守信的","有耐性的","有责任心的","有担当的","有远见的","有智慧的","有眼光的","有冒险精神的","有爱心的","有同情心的","喜欢思考的","喜欢学习的","具有批判性思维的","善于表达的","善于沟通的","善于合作的","善于领导的","有激情的","有幽默感的","有思想的","有个性的","有正义感的","有责任感的","有创造力的","有想象力的","有艺术细胞的","有团队精神的","有协调能力的","有决策能力的","有组织能力的","有学习能力的","有执行能力的","有分析能力的","有逻辑思维的","有创新能力的","有专业素养的","有商业头脑的"],vegetablesAndFruits=["萝卜","白菜","芹菜","生菜","青椒","辣椒","茄子","豆角","黄瓜","西红柿","洋葱","大蒜","土豆","南瓜","豆腐","韭菜","花菜","西兰花","蘑菇","金针菇","苹果","香蕉","橙子","柠檬","猕猴桃","草莓","葡萄","桃子","杏子","李子","石榴","西瓜","哈密瓜","蜜瓜","樱桃","蓝莓","柿子","橄榄","柚子","火龙果"];document.addEventListener("DOMContentLoaded",(function(){function e(e){var i,s;dragStartX=o(e),$web_box.style.transition="all .3s",i=t,s=n,document.addEventListener("mousemove",i),document.addEventListener("mouseup",s),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",s)}function t(e){const t=o(e)-dragStartX;if(t<0){const e=window.innerWidth,n=Math.min(-300,-1*t/e*300),o=Math.min(1,.86+t/e*.14);$web_box.style.transform=`translate3d(-${n}px, 0px, 0px) scale3d(${o}, ${o}, 1)`}}function n(e){const s=window.innerWidth;o(e)<=s/1.5?($web_box.style.transition="all 0.3s ease-out",$web_box.style.transform="none",y.close(),i(t,n)):($web_box.style.transition="",$web_box.style.transform=""),i(t,n)}function o(e){return e.type.startsWith("touch")?e.changedTouches[0].clientX:e.clientX}function i(e,t){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t),document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)}let s,a,c,l=!1;const d=document.getElementById("sidebar-menus"),r=document.getElementById("rightside");let u=document.getElementById("nav");const m=e=>{if(e){s=document.getElementById("site-name").offsetWidth;const e=document.querySelectorAll("#menus .menus_item");a=0,e.length&&e.forEach((e=>{a+=e.offsetWidth}));const t=document.querySelector("#search-button");c=t?t.offsetWidth:0,u=document.getElementById("nav")}let t="";t=window.innerWidth<=768||s+a+c>u.offsetWidth-120,t?u.classList.add("hide-menu"):u.classList.remove("hide-menu")},y={open:()=>{anzhiyu.sidebarPaddingR(),anzhiyu.changeThemeColor("#607d8b"),anzhiyu.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),d.classList.add("open"),$web_box.classList.add("open"),r.classList.add("hide"),u.style.borderTopLeftRadius="12px",l=!0,document.body.style.overflow="hidden",$web_box.addEventListener("mousedown",e),$web_box.addEventListener("touchstart",e,{passive:!1}),window.location.pathname.startsWith("/music/")?$web_container.style.background="rgb(255 255 255 / 20%)":$web_container.style.background="var(--global-bg)"},close:()=>{const e=document.body;anzhiyu.initThemeColor(),e.style.paddingRight="",anzhiyu.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),d.classList.remove("open"),$web_box.classList.remove("open"),r.classList.remove("hide"),u.style.borderTopLeftRadius="0px",l=!1,document.body.style.overflow="auto",anzhiyu.addNavBackgroundInit()}},h=function(){const e=GLOBAL_CONFIG.highlight;if(!e)return;const t=e.highlightCopy,n=e.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink,i=e.highlightHeightLimit,s=t||n||void 0!==o,a="highlighjs"===e.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!s&&!i||!a.length)return;const c="prismjs"===e.plugin;let l="",d="";const r=!0===o?"closed":"";void 0!==o&&(l=`<i class="anzhiyufont anzhiyu-icon-angle-down expand ${r}"></i>`),t&&(d='<div class="copy-notice"></div><i class="anzhiyufont anzhiyu-icon-paste copy-button"></i>');const u=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection(),o=document.createRange();c?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);n.toString();((e,t)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)anzhiyu.snackbarShow(GLOBAL_CONFIG.copy.success);else{const e=t.previousElementSibling;e.innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?anzhiyu.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport})(0,e.lastChild),n.removeAllRanges(),t.classList.remove("copy-true")},m=function(e){const t=e.target.classList;t.contains("expand")?(e=>{const t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed"),anzhiyu.isHidden(t[t.length-1])?t.forEach((e=>{e.style.display="block"})):t.forEach((e=>{e.style.display="none"}))})(this):t.contains("copy-button")&&u(this)},y=function(){this.classList.toggle("expand-done")};function h(e,t,n){const o=document.createDocumentFragment();if(s){const t=document.createElement("div");t.className=`highlight-tools ${r}`,t.innerHTML=l+e+d,t.addEventListener("click",m),o.appendChild(t)}if(i&&t.offsetHeight>i+30){const e=document.createElement("div");e.className="code-expand-btn",e.innerHTML='<i class="anzhiyufont anzhiyu-icon-angle-double-down"></i>',e.addEventListener("click",y),o.appendChild(e)}"hl"===n?t.insertBefore(o,t.firstChild):t.parentNode.insertBefore(o,t)}n?c?a.forEach((function(e){const t=`<div class="code-lang">${e.getAttribute("data-language")?e.getAttribute("data-language"):"Code"}</div>`;anzhiyu.wrap(e,"figure",{class:"highlight"}),h(t,e)})):a.forEach((function(e){let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code");h(`<div class="code-lang">${t}</div>`,e,"hl")})):c?a.forEach((function(e){anzhiyu.wrap(e,"figure",{class:"highlight"}),h("",e)})):a.forEach((function(e){h("",e,"hl")}))};const g=function(e){const t=e=>{let t="";const n=e=>e.replace(/"/g,"&quot;");return e.forEach((e=>{const o=e.alt?`alt="${n(e.alt)}"`:"",i=e.title?`title="${n(e.title)}"`:"",s=e.address?e.address:"";t+=s?`<div class="fj-gallery-item"><div class="tag-address">${s}</div><img src="${e.url}" ${o+i}"></div>`:`<div class="fj-gallery-item"><img src="${e.url}" ${o+i}"></div>`})),t},n=(e,n,o)=>{const i=Number(o),s=n.length;return s>i?e.insertAdjacentHTML("beforeend",t(n.splice(0,i))):(e.insertAdjacentHTML("beforeend",t(n)),e.classList.remove("lazyload")),window.lazyLoadInstance.update(),s>i?i:s},o=(e,o)=>{const i=e.getAttribute("data-limit")??o.length;if(!e.classList.contains("lazyload")||o.length<i)e.innerHTML=t(o);else if(e.classList.contains("btn_album_detail_lazyload")){n(e,o,i);const t=()=>{const s=n(e,o,i);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${s})`)),anzhiyu.loadLightbox(e.querySelectorAll("img")),s<i&&e.nextElementSibling.removeEventListener("click",t)};e.nextElementSibling.addEventListener("click",t)}else{n(e,o,i);const t=()=>{const t=n(e,o,i);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${t})`)),anzhiyu.loadLightbox(e.querySelectorAll("img")),t<Number(i)&&(window.runJustifiedGalleryNextElementSiblingLazyloadFn=null)};window.runJustifiedGalleryNextElementSiblingLazyloadFn=t}anzhiyu.initJustifiedGallery(e),anzhiyu.loadLightbox(e.querySelectorAll("img")),window.lazyLoadInstance.update()},i=()=>{e.forEach((e=>{e.classList.contains("url")?(async e=>{const t=await fetch(e);return await t.json()})(e.textContent).then((t=>{o(e,t)})):o(e,JSON.parse(e.textContent))}))};window.fjGallery?i():(getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`),getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(i))},f=function(){const e=document.getElementById("rightside"),t=window.innerHeight+56;let n=0;document.body.scrollHeight<=t&&(e.style.cssText="opacity: 1; transform: translateX(-58px)");let o=0,i=!0;const s=document.getElementById("page-header"),a="function"==typeof chatBtnHide,c="function"==typeof chatBtnShow;let l=!1;const d=document.getElementById("nav-music"),r=document.getElementById("footer"),u=document.getElementById("waterfall"),m=document.getElementById("percent"),y=document.getElementById("nav-totop"),h=document.getElementById("body-wrap");let g=document.getElementById("post-comment")||document.getElementById("footer");const f=anzhiyu.throttle((()=>{const d=window.scrollY||document.documentElement.scrollTop,r=function(e){const t=e>o;return o=e,t}(d),f=Math.abs(n-d);d>60&&f<20&&0!=f||(n=d,d>26?(r?(s.classList.contains("nav-visible")&&s.classList.remove("nav-visible"),c&&!0===i&&(chatBtnHide(),i=!1)):(s.classList.contains("nav-visible")||s.classList.add("nav-visible"),a&&!1===i&&(chatBtnShow(),i=!0)),requestAnimationFrame((()=>{anzhiyu.initThemeColor(),s.classList.add("nav-fixed")})),"0"===window.getComputedStyle(e).getPropertyValue("opacity")&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(d<=5&&requestAnimationFrame((()=>{s.classList.remove("nav-fixed"),s.classList.remove("nav-visible"),anzhiyu.initThemeColor()})),e.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=t&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)"),function(e){let t=h.clientHeight;const n=document.documentElement.clientHeight,o=e/(t>n?t-n:document.documentElement.scrollHeight-n),i=Math.round(100*o),s=i>100?100:i<=0?1:i;if(m.textContent=s,function(e){if(!e)return;if("none"==window.getComputedStyle(e).getPropertyValue("display"))return;const t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return e.offsetTop-document.documentElement.scrollTop<=t}(g)||s>90?(y.classList.add("long"),m.textContent="返回顶部"):(y.classList.remove("long"),m.textContent=s),u){const t=e%document.documentElement.clientHeight;!l&&t+100>=document.documentElement.clientHeight?(console.info(t,document.documentElement.clientHeight),setTimeout((()=>{waterfall("#waterfall")}),500)):setTimeout((()=>{u&&waterfall("#waterfall")}),500)}const a=document.getElementById("album_detail_gallery_load_more");a&&anzhiyu.isInViewPortOfOne(a)&&setTimeout((function(){const e=window.runJustifiedGalleryNextElementSiblingLazyloadFn;e&&e()}),100)}(d))}),96);anzhiyu.intersectionObserver((()=>{r&&d&&768<document.body.clientWidth&&(d.style.bottom="-10px",d.style.opacity="0"),l=!0}),(()=>{r&&d&&768<document.body.clientWidth&&(d.style.bottom="20px",d.style.opacity="1")}))().observe(r),window.scrollCollect=f,window.addEventListener("scroll",scrollCollect)},p=function(){const e=GLOBAL_CONFIG_SITE.isToc,t=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(!n||!e&&!t)return;let o,i,s,a;if(e){const e=document.getElementById("card-toc");i=e.getElementsByClassName("toc-content")[0],o=i.querySelectorAll(".toc-link"),a=i.classList.contains("is-expand"),window.mobileToc={open:()=>{e.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:()=>{e.style.animation="toc-close .2s",setTimeout((()=>{e.style.cssText="opacity:''; animation: ''; right: ''"}),100)}},i.addEventListener("click",(e=>{e.preventDefault();const t=e.target.classList;if(t.contains("toc-content"))return;const n=t.contains("toc-link")?e.target:e.target.parentElement;anzhiyu.scrollToDest(anzhiyu.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#","")))-60,300),window.innerWidth<900&&window.mobileToc.close()})),s=e=>{const t=e.getBoundingClientRect().top,n=i.scrollTop;t>document.documentElement.clientHeight-100&&(i.scrollTop=n+150),t<100&&(i.scrollTop=n-150)}}const c=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let l="";window.tocScrollFn=anzhiyu.throttle((()=>{!function(n){if(0===n)return!1;let d="",r="";if(c.forEach((function(e,t){if(n>anzhiyu.getEleTop(e)-80){const n=e.id;d=n?"#"+encodeURI(n):"",r=t}})),l!==r&&(t&&anzhiyu.updateAnchor(d),l=r,e)){if(i.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),""===d)return;const e=o[r];if(e.classList.add("active"),setTimeout((()=>{s(e)}),0),a)return;let t=e.parentNode;for(;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}(window.scrollY||document.documentElement.scrollTop)}),96),window.addEventListener("scroll",tocScrollFn)},L=()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="anzhiyufont anzhiyu-icon-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function n(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)}))},v=e=>{const t=document.getElementById("rightside-config-hide").classList;t.toggle("show"),e.classList.contains("show")&&(t.add("status"),setTimeout((()=>{t.remove("status")}),300)),e.classList.toggle("show")},b=()=>{anzhiyu.scrollToDest(0,500)},E=()=>{const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},w=()=>{const e=document.getElementById("console");document.documentElement.classList.contains("hide-aside")?document.querySelector("#consoleHideAside").classList.add("on"):document.querySelector("#consoleHideAside").classList.remove("on"),e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show");const t=document.querySelector("#consoleKeyboard");t&&("true"===localStorage.getItem("keyboardToggle")?(t.classList.add("on"),anzhiyu_keyboard=!0):(t.classList.remove("on"),anzhiyu_keyboard=!1))},I=()=>{"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close()};document.getElementById("rightside").addEventListener("click",(function(e){const t=e.target.id?e.target:e.target.parentNode;switch(t.id){case"go-up":b();break;case"rightside_config":v(t);break;case"mobile-toc-button":I();break;case"readmode":L();break;case"darkmode":anzhiyu.switchDarkMode();break;case"hide-aside-btn":E();break;case"center-console":w()}})),document.addEventListener("touchstart",(e=>{anzhiyu.removeRewardMask()}),{passive:!0});const S=()=>{document.querySelectorAll("#sidebar-menus .site-page.group").forEach((function(e){e.addEventListener("click",(function(){this.classList.toggle("hide")}))}))},B=function(){document.querySelectorAll("#article-container .tab > button").forEach((function(e){e.addEventListener("click",(function(e){const t=this,n=t.parentNode;if(!n.classList.contains("active")){const e=n.parentNode.nextElementSibling,o=anzhiyu.siblings(n,".active")[0];o&&o.classList.remove("active"),n.classList.add("active");const i=t.getAttribute("data-href").replace("#","");[...e.children].forEach((e=>{e.id===i?e.classList.add("active"):e.classList.remove("active")}));const s=e.querySelectorAll(`#${i} .fj-gallery`);s.length>0&&anzhiyu.initJustifiedGallery(s)}}))}))},z=()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((function(e){e.addEventListener("click",(function(){anzhiyu.scrollToDest(anzhiyu.getEleTop(anzhiyu.getParents(this,".tabs"))-60,300)}))}))},x=function(e){e.forEach((e=>{const t=e,n=t.getAttribute("datetime");t.innerText=anzhiyu.diffDate(n,!0),t.style.display="inline"}))},T=e=>{if(/^(rgb|RGB)/.test(e)){return e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").reduce(((e,t)=>e+Number(t).toString(16).padStart(2,"0")),"#")}return/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(e)&&4===e.length?Array.from(e.slice(1)).reduce(((e,t)=>e+t+t),"#"):e},A=(e,t)=>{const n=e.startsWith("#");n&&(e=e.slice(1));let o=parseInt(e,16);const i=(e,t)=>(e+=t)>255?255:e<0?0:e,s=i(o>>16,t),a=i(o>>8&255,t),c=i(255&o,t);return(n?"#":"")+String("000000"+(c|a<<8|s<<16).toString(16)).slice(-6)},C=e=>{const t=(e=>{e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((e,t,n,o)=>t+t+n+n+o+o));const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`rgb(${parseInt(t[1],16)}, ${parseInt(t[2],16)}, ${parseInt(t[3],16)})`:null})(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),[n,o,i,s]=t;return(299*o+587*i+114*s)/255e3>=.5?"light":"dark"};window.onkeydown=function(e){123===e.keyCode&&anzhiyu.snackbarShow("开发者模式已打开，请遵循GPL协议",!1)};window.refreshFn=function(){m(!0),u.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const e=GLOBAL_CONFIG.noticeOutdate,t=anzhiyu.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=e.messagePrev+" "+t+" "+e.messageNext;const o=document.getElementById("article-container");"top"===e.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&x(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&x(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.innerText=anzhiyu.diffDate(t)+" "+GLOBAL_CONFIG.runtime}})(),(()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.innerText=anzhiyu.diffDate(t,!0)}})(),function(){const e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("expand");const t=this.parentNode.nextElementSibling;anzhiyu.isHidden(t)?t.style.display="block":t.style.display="none"}))}))}()),p(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const e=document.getElementById("bbTimeList"),t=document.getElementById("scroll-down");t&&t.addEventListener("click",(function(){e?anzhiyu.scrollToDest(e.offsetTop,300):anzhiyu.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),h(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(e){const t=e.parentNode,n=e.title||e.alt;if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center",o.textContent=n,t.insertBefore(o,e.nextSibling)}})),f();const e=document.querySelectorAll("#content-inner .fj-gallery");var t;e.length&&g(e),anzhiyu.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(()=>{const e=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");e.length&&e.forEach((e=>{anzhiyu.wrap(e,"div",{class:"table-wrap"})}))})(),function(){const e=document.querySelectorAll("#article-container .hide-button");e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){this.classList.add("open");const t=this.nextElementSibling.querySelectorAll(".fj-gallery");t.length&&anzhiyu.initJustifiedGallery(t)}))}))}(),B(),z(),function(){let e=!1;const t=document.querySelector("#comment-switch > .switch-btn");t&&t.addEventListener("click",(function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach((function(e){anzhiyu.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"})),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())}))}(),document.getElementById("toggle-menu").addEventListener("click",(()=>{y.open()})),document.getElementById("post-comment")&&function(){let e=1,t="",n=document.createElement("div");n.id="owo-big";let o=document.querySelector("body");function i(i){"IMG"==i.target.tagName&&e&&(e=0,t=setTimeout((()=>{let e=3*i.target.clientHeight,t=3*i.target.clientWidth,s=i.x-i.offsetX-(t-i.target.clientWidth)/2;s+t>o.clientWidth&&(s-=s+t-o.clientWidth+10),s<0&&(s=10);let a=i.y-i.offsetY;n.style.height=e+"px",n.style.width=t+"px",n.style.left=s+"px",n.style.top=a+"px",n.style.display="flex",n.innerHTML=`<img src="${i.target.src}">`}),100))}function s(o){n.style.display="none",e=1,clearTimeout(t)}o.appendChild(n),new MutationObserver((e=>{e.forEach((e=>{const t=e.addedNodes;for(let e=0;e<t.length;e++){const n=t[e];if(n.nodeType===Node.ELEMENT_NODE&&n.classList.contains("OwO-body")&&!n.classList.contains("comment-barrage")){const e=n;e.addEventListener("contextmenu",(e=>e.preventDefault())),e.addEventListener("mouseover",i),e.addEventListener("mouseout",s)}}}))})).observe(document.getElementById("post-comment"),{childList:!0,subtree:!0})}(),function(){const e=document.querySelector(".topGroup");e&&e.addEventListener("mouseleave",(function(){document.getElementById("todayCard").classList.remove("hide"),document.getElementById("todayCard").style.zIndex=1}))}(),(()=>{const e=document.querySelector(":root"),t=document.getElementById("post-top-bg")?.src;if(!t)return e.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-meta-theme-color)"),void anzhiyu.initThemeColor();const n=new XMLHttpRequest;n.open("GET",`${t}?imageAve`,!0),n.send(),n.onreadystatechange=()=>{const t=4===n.readyState;let o;if(t&&200===n.status)try{o="#"+JSON.parse(n.responseText).RGB.slice(2),"light"===C(o)&&(o=A(T(o),-40))}catch(e){o="var(--anzhiyu-main)"}else t&&(o="var(--anzhiyu-main)");o&&(e.style.setProperty("--anzhiyu-bar-background",o),anzhiyu.initThemeColor())}})(),(t=document.getElementById("toPageText"))&&t.addEventListener("keydown",(e=>{if(13===e.keyCode){anzhiyu.toPage();var t=document.getElementById("toPageButton").href;pjax.loadUrl(t)}}))},refreshFn(),window.addEventListener("resize",(()=>{m(!1),anzhiyu.isHidden(document.getElementById("toggle-menu"))&&l&&y.close()})),document.getElementById("menu-mask").addEventListener("click",(e=>{y.close()})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const e=GLOBAL_CONFIG.copyright;document.body.oncopy=t=>{let n;t.preventDefault();const o=window.getSelection(0).toString();return n=o.length>e.limitCount?o+"\n\n\n"+e.languages.author+"\n"+e.languages.link+window.location.href+"\n"+e.languages.source+"\n"+e.languages.info:o,t.clipboardData?t.clipboardData.setData("text",n):window.clipboardData.setData("text",n)}})(),GLOBAL_CONFIG.navMusic&&function(){const e=setInterval((()=>{navMusicEl.querySelector("#nav-music meting-js").aplayer&&(clearInterval(e),navMusicEl.querySelector("#nav-music meting-js").aplayer.on("pause",(function(){navMusicEl.classList.remove("playing"),document.getElementById("menu-music-toggle").innerHTML='<i class="anzhiyufont anzhiyu-icon-play"></i><span>播放音乐</span>',document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",document.querySelector("#consoleMusic").classList.remove("on"),anzhiyu_musicPlaying=!1,navMusicEl.classList.remove("stretch")})))}),16)}(),S()}));