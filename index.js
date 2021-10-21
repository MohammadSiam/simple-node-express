const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;


const users = [
    { id: 1, name: 'Shabana', email: 'sabana@gmail.com', phone: '01786750066' },
    { id: 2, name: 'shabnor', email: 'sabana@gmail.com', phone: '01786750066' },
    { id: 3, name: 'Alamgir', email: 'sabana@gmail.com', phone: '01786750066' },
    { id: 4, name: 'Jashim', email: 'sabana@gmail.com', phone: '01786750066' }
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.get('/users', (req, res) => {
    const search = req.query.search;
    //user Query Perameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult);

    } else {
        res.send(users);
    }

})

//app method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length+1;

    users.push(newUser)
    console.log('hitting the post',req.body);
    //res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['magoes', 'orange', 'banana']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Tok aam');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})