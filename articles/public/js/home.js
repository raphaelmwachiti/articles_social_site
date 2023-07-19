let blogId = decodeURI(location.pathname.split("/").pop());

let docRef = db.collection("articles").doc(blogId);

docRef.get().then((doc) => {
    if(doc.exists){
        setupBlog(doc.data());
    } else{
        location.replace("/");  
    }
})