if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const o=e=>c(e,n),d={module:{uri:n},exports:a,require:o};i[n]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/color.css",revision:"9482df804629998a076e746eae773b64"},{url:"css/custom.css",revision:"145437b42233117a9b0b4b15209528ea"},{url:"css/icon.css",revision:"ab1199db12b4e2962134c926e6120c91"},{url:"css/index.css",revision:"c0c228dd0aa66b8291a45d83b7ea5bf2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"a0462dba54090f6d0bc8cf298368830a"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"1f9cb97213595fe0527ad0ac2cc28c3c"},{url:"anzhiyu/random.js",revision:"c953d1918babdb7a0fb88eed3de07ece"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"a5b16ed66a650fa584f7dbbdbe982a14"},{url:"/",revision:"index-20230604120718057"},{url:"music/",revision:"music-20230604120718057"},{url:"about/",revision:"about-20230604120718057"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));