
//article posting 
const blogSection = document.querySelector('.blogs-section');
const feedSection = document.querySelector('.feeds');

db.collection("articles").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog); 
        }
    })
})  

db.collection("articles").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createFeed(blog);
        }
    })
}) 



const createFeed = (blog) => {
    let data = blog.data(); 
    feedSection.innerHTML += `
            <div class="feed">
                <div class="head">
                    <div class="user">
                        <div class="profile-pic">
                            <img src="img/user_icon_004.webp" >
                        </div>
                        <div class="info">
                            <h3>User22</h3>
                            <small>${data.publishedAt}</small>
                        </div>
                    </div>
                    <span class="edit">
                        <i class="uil uil-ellipsis-h"></i>
                    </span>
                </div>