var posts=["posts/ed866ec2.html","posts/c03ae513.html","posts/629787b4.html","posts/9f5c66d2.html","posts/3cbdce34.html","posts/undefined.html","posts/e323552.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};