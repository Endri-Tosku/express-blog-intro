const express = require('express')
const app = express()
const port = 3000

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {

    // array dei post definito all'inizio
    const posts = [
        {
            title: "ciambellone",
            content: "ciambellone",
            img: "images/ciambellone.jpeg",
            tags: ["tag1"]
        },
        {
            title: "cracker barbabietola",
            content: "cracker barbabietola",
            img: "images/cracker_barbabietola.jpeg",
            tags: ["tag2"]
        },
        {
            title: "pane fritto dolce",
            content: "pane fritto dolce",
            img: "images/pane_fritto_dolce.jpeg",
            tags: ["tag3"]
        },
        {
            title: "pasta barbabietola",
            content: "pasta barbabietola",
            img: "images/pasta_barbabietola.jpeg",
            tags: ["tag4"]
        },
        {
            title: "torta paesana",
            content: "torta paesana",
            img: "images/torta_paesana.jpeg",
            tags: ["tag5"]
        },
    ]
    res.json(posts)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})