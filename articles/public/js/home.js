
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
                
                <!--clicking on the post should open the full article-->	
                <div class="photo">
                    <img src="${data.bannerImage}" alt="">
                    <div class="feed-cover">
                        <h2>${data.title.substring(0, 100) + '...'}</h2>
                        <p>${data.article.substring(0, 200) + '...'}</p>

                        <a href="/${blog.id}"><label class="btn colorful-btn" id="indulge" >Indulge <i class="uil uil-angle-right-b"></i></label></a>
                    </div>
                </div>
                <div class="action-buttons">
                    <div class="interaction-buttons">
                        <span><i class="uil uil-thumbs-up act"></i></span>
                        <span><i class="uil uil-comment-alt-dots"></i></span>
                        <span><i class="uil uil-share-alt"></i></span>
                    </div>
                    <div class="bookmark">
                        <i class="uil uil-bookmark"></i>
                    </div>
                </div>
                
                <div class="liked-by">
                    <!-- <span><img src="img/user_icon_004.webp" ></span>
                    <span><img src="img/user_icon_004.webp" ></span>
                    <span><img src="img/user_icon_004.webp" ></span>
                    <span><img src="img/user_icon_004.webp" ></span> -->
                    <p>Liked by <b>User45 </b> and others</p>
                </div>

                <div class="caption">
                    <p><b>User22</b> This Writing was inspired by my cat jeff <span class="harsh-tag">#catsrule</span></p>
                </div>
                <div class="comments text-muted">View - 277 comments  </div>
            </div>  
    `;

}
