import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors())
let todos = [];


app.delete('/del', (req, res) => {
    todos=[]
    res.send({
        message: "your todo is deleted",
        data: todos
    })
    
})

app.post('/todo', (req, res) => {
    
    todos.push(req.body.text);

    res.send({
        message: "your todo is saved",
        data: todos
    })
})
app.get('/todos', (req, res) => {
    
    res.send({
        message: "here is you todo list",
        data: todos
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})