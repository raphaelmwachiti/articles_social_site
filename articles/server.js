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