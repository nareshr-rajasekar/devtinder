app.use('/a*b', (req, res) =>{
    res.send("Testing the dynamic")
})

?, +, (), * can also be used

app.get(/a/, (req, res) =>{
    res.send('Regex Based Routing')
})
app.get(/.*fly$/, (req, res) =>{
    res.send('Regex Based Routing')
}) 

app.use("/home/2", (req, res) =>{
    res.send("Welcome to Naresh's Home/2")
})
app.use("/home", (req, res) =>{
    res.send("Welcome to Naresh's Home")
})


app.get('/', (requestAnimationFrame, res) =>{
    res.send("Test Get")
})

app.post('/', (requestAnimationFrame, res) =>{
    res.send("Test Post")
}) 

app.use("/test", (req, res) =>{
    res.send("Welcome to Naresh's Test")
})
app.use("/", (req, res) =>{
    res.send("Welcome to Naresh's World")
})