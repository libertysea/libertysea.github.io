var posts=["2023/04/03/CloudSearchAggregationPlatform/","2023/03/31/hello-world/","2023/04/02/Typora+PicGo+Lsky Pro搭建写作环境/","2023/01/13/deeplearning/基于深度学习的中医药识别与预测/基于深度学习的中医药识别与预测/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};