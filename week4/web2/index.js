const express = require('express')

const app = express()

function loggerMiddleware(req, res, next) {
    console.log("Method: ", req.method);
    console.log("URL: ", req.url);
    console.log("URL: ", req.hostname);
    console.log("Date: ", new date.now());

    res.json({
        status: 200,
        message: "good request"
    })

    next();
}

app.use(loggerMiddleware) 
app.use(cors())

// app.use(cors({
//     // hosts: [] domains
// }))

app.get("/sum", loggerMiddleware, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});


app.listen(3000, () => {
    console.log(`Server is listening to port ${3000}`);
})