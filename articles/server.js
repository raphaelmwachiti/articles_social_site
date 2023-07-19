const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public"); 

const app = express();
app.use(express.static(initial_path)); 
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
}) 

app.get('/home', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
}) 

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
}) 

app.get('/contributions', (req, res) => {
    res.sendFile(path.join(initial_path, "contributions.html"));
}) 

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(initial_path, "about-us.html"));
}) 
app.get('/general-admissions', (req, res) => {
    res.sendFile(path.join(initial_path, "general-admissions.html"));
}) 
app.get('/join-us', (req, res) => {
    res.sendFile(path.join(initial_path, "join-us.html"));
})  


// upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.use((req, res) => {
    res.json("Error 404");
})


app.listen("3000", () => {
    console.log('Listening for 3000......');
})