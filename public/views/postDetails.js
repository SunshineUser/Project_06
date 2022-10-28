const timeAgo = require('node-time-ago');

const postDetails = (post) =>{
    const html= `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="../style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>${post.title}.</header>
      <small class="news-info">
            ${post.upvotes} upvotes | ${timeAgo(post.date)} 
        </small> 
      <small>(by ${post.name})</small>
      <div class="content">${post.content}</div>
      <div class="triTop">▲</div>
      <div class="triTop">▲▲</div>
    </div>
  </body>
</html>`

    return html;
}

module.exports = {postDetails:postDetails};
