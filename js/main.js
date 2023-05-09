var anzhiyu_musicFirst=!1,anzhiyu_musicPlaying=!1,adjectives=["美丽的","英俊的","聪明的","勇敢的","可爱的","慷慨的","善良的","可靠的","开朗的","成熟的","稳重的","真诚的","幽默的","豁达的","有趣的","活泼的","优雅的","敏捷的","温柔的","温暖的","敬业的","细心的","耐心的","深沉的","朴素的","含蓄的","率直的","开放的","务实的","坚强的","自信的","谦虚的","文静的","深刻的","纯真的","朝气蓬勃的","慎重的","大方的","顽强的","迷人的","机智的","善解人意的","富有想象力的","有魅力的","独立的","好奇的","干净的","宽容的","尊重他人的","体贴的","守信的","有耐性的","有责任心的","有担当的","有远见的","有智慧的","有眼光的","有冒险精神的","有爱心的","有同情心的","喜欢思考的","喜欢学习的","具有批判性思维的","善于表达的","善于沟通的","善于合作的","善于领导的","有激情的","有幽默感的","有思想的","有个性的","有正义感的","有责任感的","有创造力的","有想象力的","有艺术细胞的","有团队精神的","有协调能力的","有决策能力的","有组织能力的","有学习能力的","有执行能力的","有分析能力的","有逻辑思维的","有创新能力的","有专业素养的","有商业头脑的"],vegetablesAndFruits=["萝卜","白菜","芹菜","生菜","青椒","辣椒","茄子","豆角","黄瓜","西红柿","洋葱","大蒜","土豆","南瓜","豆腐","韭菜","花菜","西兰花","蘑菇","金针菇","苹果","香蕉","橙子","柠檬","猕猴桃","草莓","葡萄","桃子","杏子","李子","石榴","西瓜","哈密瓜","蜜瓜","樱桃","蓝莓","柿子","橄榄","柚子","火龙果"];document.addEventListener("DOMContentLoaded",(function(){let e,t,n,o,i=!1;const a=i=>{if(i){e=document.getElementById("site-name").offsetWidth;const i=document.querySelectorAll("#menus .menus_item");t=0,i.length&&i.forEach((e=>{t+=e.offsetWidth}));const a=document.querySelector("#search-button");n=a?a.offsetWidth:0,o=document.getElementById("nav")}let a="";a=window.innerWidth<=768||e+t+n>o.offsetWidth-120,a?o.classList.add("hide-menu"):o.classList.remove("hide-menu")},c=()=>{anzhiyu.sidebarPaddingR(),document.body.style.overflow="hidden",anzhiyu.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),i=!0},s=()=>{const e=document.body;e.style.overflow="",e.style.paddingRight="",anzhiyu.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),i=!1},l=function(){const e=GLOBAL_CONFIG.highlight;if(!e)return;const t=e.highlightCopy,n=e.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink,i=e.highlightHeightLimit,a=t||n||void 0!==o,c="highlighjs"===e.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!a&&!i||!c.length)return;const s="prismjs"===e.plugin;let l="",r="";const d=!0===o?"closed":"";void 0!==o&&(l=`<i class="anzhiyufont anzhiyu-icon-angle-down expand ${d}"></i>`),t&&(r='<div class="copy-notice"></div><i class="anzhiyufont anzhiyu-icon-paste copy-button"></i>');const u=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection(),o=document.createRange();o.selectNodeContents(s?t.querySelectorAll("pre code")[0]:t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);((e,t)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)anzhiyu.snackbarShow(GLOBAL_CONFIG.copy.success);else{const e=t.previousElementSibling;e.innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?anzhiyu.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport})(0,e.lastChild),n.removeAllRanges(),t.classList.remove("copy-true")},m=function(e){const t=e.target.classList;t.contains("expand")?(e=>{const t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed"),anzhiyu.isHidden(t[t.length-1])?t.forEach((e=>{e.style.display="block"})):t.forEach((e=>{e.style.display="none"}))})(this):t.contains("copy-button")&&u(this)},h=function(){this.classList.toggle("expand-done")};function g(e,t,n){const o=document.createDocumentFragment();if(a){const t=document.createElement("div");t.className="highlight-tools "+d,t.innerHTML=l+e+r,t.addEventListener("click",m),o.appendChild(t)}if(i&&t.offsetHeight>i+30){const e=document.createElement("div");e.className="code-expand-btn",e.innerHTML='<i class="anzhiyufont anzhiyu-icon-angle-double-down"></i>',e.addEventListener("click",h),o.appendChild(e)}"hl"===n?t.insertBefore(o,t.firstChild):t.parentNode.insertBefore(o,t)}c.forEach(n?s?function(e){const t=`<div class="code-lang">${e.getAttribute("data-language")?e.getAttribute("data-language"):"Code"}</div>`;anzhiyu.wrap(e,"figure",{class:"highlight"}),g(t,e)}:function(e){let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code");g(`<div class="code-lang">${t}</div>`,e,"hl")}:s?function(e){anzhiyu.wrap(e,"figure",{class:"highlight"}),g("",e)}:function(e){g("",e,"hl")})};const r=function(e){const t=e=>{let t="";const n=e=>e.replace(/"/g,"&quot;");return e.forEach((e=>{const o=e.alt?`alt="${n(e.alt)}"`:"",i=e.title?`title="${n(e.title)}"`:"",a=e.address?e.address:"";t+=a?`<div class="fj-gallery-item"><div class="tag-address">${a}</div><img src="${e.url}" ${o+i}"></div>`:`<div class="fj-gallery-item"><img src="${e.url}" ${o+i}"></div>`})),t},n=(e,n,o)=>{const i=+o,a=n.length;return a>i?e.insertAdjacentHTML("beforeend",t(n.splice(0,i))):(e.insertAdjacentHTML("beforeend",t(n)),e.classList.remove("lazyload")),window.lazyLoadInstance.update(),a>i?i:a},o=(e,o)=>{const i=e.getAttribute("data-limit")??o.length;if(!e.classList.contains("lazyload")||o.length<i)e.innerHTML=t(o);else if(e.classList.contains("btn_album_detail_lazyload")){n(e,o,i);const t=()=>{const a=n(e,o,i);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${a})`)),anzhiyu.loadLightbox(e.querySelectorAll("img")),a<i&&e.nextElementSibling.removeEventListener("click",t)};e.nextElementSibling.addEventListener("click",t)}else{n(e,o,i);const t=()=>{const t=n(e,o,i);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${t})`)),anzhiyu.loadLightbox(e.querySelectorAll("img")),t<+i&&(window.runJustifiedGalleryNextElementSiblingLazyloadFn=null)};window.runJustifiedGalleryNextElementSiblingLazyloadFn=t}anzhiyu.initJustifiedGallery(e),anzhiyu.loadLightbox(e.querySelectorAll("img")),window.lazyLoadInstance.update()},i=()=>{e.forEach((e=>{e.classList.contains("url")?(async e=>{const t=await fetch(e);return await t.json()})(e.textContent).then((t=>{o(e,t)})):o(e,JSON.parse(e.textContent))}))};window.fjGallery?i():(getCSS(""+GLOBAL_CONFIG.source.justifiedGallery.css),getScript(""+GLOBAL_CONFIG.source.justifiedGallery.js).then(i))},d=function(){const e=document.getElementById("rightside"),t=window.innerHeight+56;if(document.body.scrollHeight<=t&&(e.style.cssText="opacity: 1; transform: translateX(-58px)",!window.location.pathname.startsWith("/fcircle")))return;let n=0,o=!0;const i=document.getElementById("page-header"),a="function"==typeof chatBtnHide,c="function"==typeof chatBtnShow,s=anzhiyu.throttle((()=>{const s=window.scrollY||document.documentElement.scrollTop,l=function(e){const t=e>n;return n=e,t}(s);s>16?(l?(i.classList.contains("nav-visible")&&i.classList.remove("nav-visible"),c&&!0===o&&(chatBtnHide(),o=!1)):(i.classList.contains("nav-visible")||i.classList.add("nav-visible"),a&&!1===o&&(chatBtnShow(),o=!0)),i.classList.add("nav-fixed"),anzhiyu.initThemeColor(),"0"===window.getComputedStyle(e).getPropertyValue("opacity")&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===s&&(i.querySelector(".bili-banner")||(i.classList.remove("nav-fixed"),i.classList.remove("nav-visible")),anzhiyu.initThemeColor()),e.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=t&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)")}),200);window.scrollCollect=s,window.addEventListener("scroll",scrollCollect)},u=function(){const e=GLOBAL_CONFIG_SITE.isToc,t=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(!n||!e&&!t)return;let o,i,a,c,s;if(e){const e=document.getElementById("card-toc");i=e.getElementsByClassName("toc-content")[0],o=i.querySelectorAll(".toc-link");const t=e.querySelector(".toc-percentage");s=i.classList.contains("is-expand"),a=e=>{const o=n.clientHeight,i=document.documentElement.clientHeight,a=o>i?o-i:document.documentElement.scrollHeight-i,c=Math.round(100*((e-n.offsetTop)/a));t.textContent=c>100?100:c<=0?0:c},window.mobileToc={open:()=>{e.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:()=>{e.style.animation="toc-close .2s",setTimeout((()=>{e.style.cssText="opacity:''; animation: ''; right: ''"}),100)}},i.addEventListener("click",(e=>{e.preventDefault();const t=e.target.classList;if(t.contains("toc-content"))return;const n=t.contains("toc-link")?e.target:e.target.parentElement;anzhiyu.scrollToDest(anzhiyu.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#","")))-60,300),window.innerWidth<900&&window.mobileToc.close()})),c=e=>{const t=e.getBoundingClientRect().top,n=i.scrollTop;t>document.documentElement.clientHeight-100&&(i.scrollTop=n+150),t<100&&(i.scrollTop=n-150)}}const l=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let r="";window.tocScrollFn=function(){return anzhiyu.throttle((function(){const n=window.scrollY||document.documentElement.scrollTop;e&&a(n),function(n){if(0===n)return!1;let a="",d="";if(l.forEach((function(e,t){if(n>anzhiyu.getEleTop(e)-80){const n=e.id;a=n?"#"+encodeURI(n):"",d=t}})),r!==d&&(t&&anzhiyu.updateAnchor(a),r=d,e)){if(i.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),""===a)return;const e=o[d];if(e.classList.add("active"),setTimeout((()=>{c(e)}),0),s)return;let t=e.parentNode;for(;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}(n)}),100)()},window.addEventListener("scroll",tocScrollFn)},m=()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="anzhiyufont anzhiyu-icon-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function n(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)}))},h=()=>{"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof runMermaid&&window.runMermaid()},g=e=>{const t=document.getElementById("rightside-config-hide").classList;t.toggle("show"),e.classList.contains("show")&&(t.add("status"),setTimeout((()=>{t.remove("status")}),300)),e.classList.toggle("show")},y=()=>{anzhiyu.scrollToDest(0,500)},f=()=>{const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},p=()=>{const e=document.getElementById("console");document.documentElement.classList.contains("hide-aside")?document.querySelector("#consoleHideAside").classList.add("on"):document.querySelector("#consoleHideAside").classList.remove("on"),e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")},L=()=>{"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close()};document.getElementById("rightside").addEventListener("click",(function(e){const t=e.target.id?e.target:e.target.parentNode;switch(t.id){case"go-up":y();break;case"rightside_config":g(t);break;case"mobile-toc-button":L();break;case"readmode":m();break;case"darkmode":h();break;case"hide-aside-btn":f();break;case"center-console":p()}})),document.addEventListener("touchstart",(e=>{anzhiyu.removeRewardMask()}),!1);const v=()=>{document.querySelectorAll("#sidebar-menus .site-page.group").forEach((function(e){e.addEventListener("click",(function(){this.classList.toggle("hide")}))}))},E=function(){document.querySelectorAll("#article-container .tab > button").forEach((function(e){e.addEventListener("click",(function(e){const t=this,n=t.parentNode;if(!n.classList.contains("active")){const e=n.parentNode.nextElementSibling,o=anzhiyu.siblings(n,".active")[0];o&&o.classList.remove("active"),n.classList.add("active");const i=t.getAttribute("data-href").replace("#","");[...e.children].forEach((e=>{e.id===i?e.classList.add("active"):e.classList.remove("active")}));const a=e.querySelectorAll(`#${i} .fj-gallery`);a.length>0&&anzhiyu.initJustifiedGallery(a)}}))}))},b=()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((function(e){e.addEventListener("click",(function(){anzhiyu.scrollToDest(anzhiyu.getEleTop(anzhiyu.getParents(this,".tabs"))-60,300)}))}))},w=function(e){e.forEach((e=>{const t=e,n=t.getAttribute("datetime");t.innerText=anzhiyu.diffDate(n,!0),t.style.display="inline"}))},I=function(e){var t=e;if(/^(rgb|RGB)/.test(t)){for(var n=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),o="#",i=0;i<n.length;i++){var a=(+n[i]).toString(16);"0"===a&&(a+=a),o+=a}return 7!==o.length&&(o=t),o}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t))return t;var c=t.replace(/#/,"").split("");if(6===c.length)return t;if(3===c.length){var s="#";for(i=0;i<c.length;i+=1)s+=c[i]+c[i];return s}},S=function(e,t){var n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);var o=parseInt(e,16),i=(o>>16)+t;i>255?i=255:i<0&&(i=0);var a=(o>>8&255)+t;a>255?a=255:a<0&&(a=0);var c=(255&o)+t;return c>255?c=255:c<0&&(c=0),(n?"#":"")+("000000"+(c|a<<8|i<<16).toString(16)).slice(-6)},B=function(e){var t,n=function(e){var t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var n="#",o=1;o<4;o+=1)n+=t.slice(o,o+1).concat(t.slice(o,o+1));t=n}var i=[];for(o=1;o<7;o+=2)i.push(parseInt("0x"+t.slice(o,o+2)));return"rgb("+i.join(",")+")"}return t}(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return t=299*n[1]+587*n[2]+114*n[3],(t/=255e3)>=.5?"light":"dark"};window.onkeydown=function(e){123===e.keyCode&&anzhiyu.snackbarShow("开发者模式已打开，请遵循GPL协议",!1)};window.refreshFn=function(){a(!0),o.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const e=GLOBAL_CONFIG.noticeOutdate,t=anzhiyu.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=e.messagePrev+" "+t+" "+e.messageNext;const o=document.getElementById("article-container");"top"===e.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&w(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&w(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.innerText=anzhiyu.diffDate(t)+" "+GLOBAL_CONFIG.runtime}})(),(()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.innerText=anzhiyu.diffDate(t,!0)}})(),function(){const e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("expand");const t=this.parentNode.nextElementSibling;t.style.display=anzhiyu.isHidden(t)?"block":"none"}))}))}()),u(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const e=document.getElementById("scroll-down");e&&e.addEventListener("click",(function(){anzhiyu.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),l(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(e){const t=e.parentNode,n=e.title||e.alt;if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center",o.textContent=n,t.insertBefore(o,e.nextSibling)}})),d();const e=document.querySelectorAll("#content-inner .fj-gallery");var t;e.length&&r(e),anzhiyu.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(()=>{const e=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");e.length&&e.forEach((e=>{anzhiyu.wrap(e,"div",{class:"table-wrap"})}))})(),function(){const e=document.querySelectorAll("#article-container .hide-button");e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){this.classList.add("open");const t=this.nextElementSibling.querySelectorAll(".fj-gallery");t.length&&anzhiyu.initJustifiedGallery(t)}))}))}(),E(),b(),function(){let e=!1;const t=document.querySelector("#comment-switch > .switch-btn");t&&t.addEventListener("click",(function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach((function(e){e.style.cssText=anzhiyu.isHidden(e)?"display: block;animation: tabshow .5s":"display: none;animation: ''"})),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())}))}(),document.getElementById("toggle-menu").addEventListener("click",(()=>{c()})),document.getElementById("post-comment")&&function(){let e=1,t="",n=document.createElement("div");n.id="owo-big";let o=document.querySelector("body");o.appendChild(n),document.getElementById("post-comment").addEventListener("DOMNodeInserted",(i=>{if(i.target.classList&&"OwO-body"==i.target.classList.value){let a=i.target;a.addEventListener("contextmenu",(e=>e.preventDefault())),a.addEventListener("mouseover",(i=>{"IMG"==i.target.tagName&&e&&(e=0,t=setTimeout((()=>{let e=3*i.target.clientWidth,t=i.x-i.offsetX-(e-i.target.clientWidth)/2;t+e>o.clientWidth&&(t-=t+e-o.clientWidth+10),t<0&&(t=10);let a=i.y-i.offsetY;n.style.height=3*i.target.clientHeight+"px",n.style.width=e+"px",n.style.left=t+"px",n.style.top=a+"px",n.style.display="flex",n.innerHTML=`<img src="${i.target.src}">`}),300))})),a.addEventListener("mouseout",(o=>{n.style.display="none",e=1,clearTimeout(t)}))}}))}(),function(){const e=document.querySelector(".topGroup");e&&e.addEventListener("mouseleave",(function(){document.getElementById("todayCard").classList.remove("hide"),document.getElementById("todayCard").style.zIndex=1}))}(),function(){var e=document.getElementById("post-top-bg")?.src;const t=document.querySelector(":root");if(void 0!==e){var n=new XMLHttpRequest;n.open("GET",e+"?imageAve",!0),n.send(),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText;try{var o=JSON.parse(e,(function(e,t){return t})),i=o.RGB;i="#"+i.slice(2),"light"==B(i)&&(i=S(I(i),-40)),t.style.setProperty("--anzhiyu-bar-background",i),anzhiyu.initThemeColor()}catch(e){t.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-main)"),anzhiyu.initThemeColor()}}}}else t.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-meta-theme-color)");anzhiyu.initThemeColor()}(),function(){let e=!1;const t=document.getElementById("nav-music"),n=document.getElementById("footer"),o=document.getElementById("waterfall"),i=document.getElementById("percent");let a=document.getElementById("post-comment")||document.getElementById("footer");window.anzhiyuScrollFnToDo=anzhiyu.throttle((function(){n&&t&&768<document.body.clientWidth&&(t.style.bottom=anzhiyu.isInViewPortOfOne(n)?"-10px":"20px",t.style.opacity=anzhiyu.isInViewPortOfOne(n)?"0":"1");let c=document.documentElement.scrollTop||window.pageYOffset,s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,l=Math.round(c/s*100);if(l=Math.min(99,Math.max(0,l)),anzhiyu.isInViewPortOfOne(a)||90<l?(document.getElementById("nav-totop").classList.add("long"),i.textContent="返回顶部",e=!0):(document.getElementById("nav-totop").classList.remove("long"),i.textContent=l),o){const t=c%document.documentElement.clientHeight;!e&&t+100>=document.documentElement.clientHeight?(console.info(t,document.documentElement.clientHeight),setTimeout((()=>{waterfall("#waterfall")}),500)):setTimeout((()=>{o&&waterfall("#waterfall")}),500)}const r=document.getElementById("album_detail_gallery_load_more");r&&anzhiyu.isInViewPortOfOne(r)&&setTimeout((function(){const e=window.runJustifiedGalleryNextElementSiblingLazyloadFn;e&&e()}),100)}),48),window.addEventListener("scroll",anzhiyuScrollFnToDo)}(),(t=document.getElementById("toPageText"))&&t.addEventListener("keydown",(e=>{if(13===e.keyCode){anzhiyu.toPage();var t=document.getElementById("toPageButton");pjax.loadUrl(t.href)}}))},refreshFn(),window.addEventListener("resize",(()=>{a(!1),anzhiyu.isHidden(document.getElementById("toggle-menu"))&&i&&s()})),document.getElementById("menu-mask").addEventListener("click",(e=>{s()})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const e=GLOBAL_CONFIG.copyright;document.body.oncopy=t=>{let n;t.preventDefault();const o=""+window.getSelection(0);return n=o.length>e.limitCount?o+"\n\n\n"+e.languages.author+"\n"+e.languages.link+window.location.href+"\n"+e.languages.source+"\n"+e.languages.info:o,t.clipboardData?t.clipboardData.setData("text",n):window.clipboardData.setData("text",n)}})(),GLOBAL_CONFIG.navMusic&&function(){const e=setInterval((()=>{navMusicEl.querySelector("#nav-music meting-js").aplayer&&(clearInterval(e),navMusicEl.querySelector("#nav-music meting-js").aplayer.on("pause",(function(){navMusicEl.classList.remove("playing"),document.getElementById("menu-music-toggle").innerHTML='<i class="anzhiyufont anzhiyu-icon-play"></i><span>播放音乐</span>',document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",document.querySelector("#consoleMusic").classList.remove("on"),anzhiyu_musicPlaying=!1,navMusicEl.classList.remove("stretch")})))}),16)}(),v()}));