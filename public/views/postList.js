const timeAgo = require('node-time-ago');

const postList=(posts)=>{
    // console.log(posts)
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <div class="news-list">

        <header><img src="/logo.png"/>FOR ONCE IT WAS NICE TO HAVE ALL 9 PARCHMENTS IN ONE PLACE.</header>
        ${posts.map(post =>
            `
            <div class ='news-item'>
            <p>
                <span class="news-position"><a href="/posts/${post.id}">${post.title}</a>.   ▲</span>
                <small>(by ${post.name})</small>
            </p>
            <small class="news-info">
                ${post.upvotes} upvotes | ${timeAgo(post.date)} 
            </small>
            </div>`
        ).join('')}
        <div class="triTop">▲</div>
        <div class="triTop">▲▲</div>
        </div>
    </body>
    </html>`

    return html;

}
module.exports =  {postList:postList} ;