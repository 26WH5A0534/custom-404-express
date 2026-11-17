const express = require("express");
const app = express();

// Home Page
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Home Page</title>
        </head>
        <body>
            <h1>Welcome to My Application</h1>
            <h2>Home Page</h2>
            <p>Welcome to our Express.js web application.</p>
            <p>This application demonstrates routing and custom
            error handling using Node.js and Express.js.</p>

            <h3>Our Features:</h3>
            <ul>
                <li>Simple and user-friendly interface</li>
                <li>Home, About and Contact pages</li>
                <li>Express.js routing</li>
                <li>Custom 404 error handling</li>
            </ul>

            <nav>
                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>
            </nav>
        </body>
        </html>
    `);
});

// About Page
app.get("/about", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>About Us</title>
        </head>
        <body>
            <h1>About Our Application</h1>

            <p>This is a simple web application developed
            using Node.js and Express.js.</p>

            <h2>Our Purpose</h2>
            <p>The main purpose of this application is to
            demonstrate how routing works in Express.js.</p>

            <h2>Technologies Used</h2>
            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>

            <p>We also implemented custom 404 middleware
            to handle invalid URLs.</p>

            <nav>
                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>
            </nav>
        </body>
        </html>
    `);
});

// Contact Page
app.get("/contact", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Contact Us</title>
        </head>
        <body>
            <h1>Contact Us</h1>

            <p>We are happy to hear from you!</p>

            <h2>Contact Information</h2>
            <p><b>Email:</b> support@example.com</p>
            <p><b>Phone:</b> +91 9876543210</p>
            <p><b>Address:</b> Hyderabad, Telangana, India</p>

            <h2>Working Hours</h2>
            <p>Monday to Saturday</p>
            <p>9:00 AM to 5:00 PM</p>

            <p>Feel free to contact us for any queries
            or suggestions.</p>

            <nav>
                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>
            </nav>
        </body>
        </html>
    `);
});

// Custom 404 Middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        status: 404,
        message: "404 - Page Not Found",
        requestedUrl: req.originalUrl
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});