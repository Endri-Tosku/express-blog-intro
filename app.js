const express = require('express')
const app = express()
const port = 3000

// rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})


app.get('/bacheca', (req, res) => {

    // array dei post definito all'inizio
    const posts = [
        { title: "Post 1", content: "Testo del post", img: "img1.jpg", tags: ["tag1"] },
        { title: "Post 2", content: "Testo del post", img: "img2.jpg", tags: ["tag2"] },
        { title: "Post 3", content: "Testo del post", img: "img3.jpg", tags: ["tag3"] },
        { title: "Post 4", content: "Testo del post", img: "img4.jpg", tags: ["tag4"] },
        { title: "Post 5", content: "Testo del post", img: "img5.jpg", tags: ["tag5"] },
    ]
    res.json(posts)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})