/* import 'bootstrap/dist/css/bootstrap.min.css'; */
/* Import Express module for http server */
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

/* Setting application to use EJS as view engine */
app.set('view engine', 'ejs');
/* app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); */

/* Render index when requesting root folder "/" */
app.get("/",
    function(request,response){
        response.render("pages/index");
    }
);

/* Render about page */
app.get("/about",
    function(request,response){
        response.render("pages/about");
    }
);

/* Render links page */
app.get("/links",
    function(request,response){
        const link = [
            {label: "Linkedin", url: "https://www.linkedin.com/in/gleidsonlm"},
            {label: "GitHub", url: "https://www.linkedin.com/in/gleidsonlm"},
            {label: "YouTube", url: "http://youtube.com/gleidsonlm"},
        ];
        response.render("pages/links", {
            links: link,
        }
        );
    }
);

/* Application listen on 8080 */
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});