var posts=["posts/ed866ec2.html","posts/c03ae513.html","posts/629787b4.html","posts/undefined.html","posts/9f5c66d2.html","posts/3cbdce34.html","posts/e323552.html","posts/1decec4.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}