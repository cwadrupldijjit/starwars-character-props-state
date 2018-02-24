const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config({ path: __dirname + '/.env' });

const app = express();

massive(process.env.DB_CONNECTION_STRING)
    .then(dbInstance => {
        console.log('Database connected');
        app.set('db', dbInstance);
    })
    .catch(err => {
        console.error(err);
    });

//#region middleware
app.use(cors());
app.options((req, res, next) => {})
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

app.use((req, res, next) => {
    const db = app.get('db');
    
    if (!db) {
        return res.status(500).send({ message: 'something died' });
    }
    req.db = db;
    next();
});
//#endregion middleware

app.get('/children', (req, res) => {
    req.db.children.find() // SELECT * FROM children;
        .then(children => {
            console.log(`Hello my children ${children}`);
            res.send(children);
        });
});

app.post('/child', (req, res) => {
    const { name, title } = req.body;
    const parentId = 1;
    
    // db.children.insert(postChild)
    //     .then(child => {
    //         res.send(child);
    //     });
    
    // db.run(`
    //     INSERT INTO children (name, title, parent_id)
    //     VALUES ($1, $2, $3);
    //     select * from children order by id desc limit 1;
    // `, [postChild.name, postChild.title, postChild.parent_id])
    //     .then(([child]) => {
    //         res.send(child);
    //     });
    
    req.db.create_child({name, title, parentId})
        .then(([child]) => {
            res.send(child);
        });
});

app.delete('/child/:id', (req, res) => {
    let child;
    
    req.db.children.findOne({ id: req.params.id }) // SELECT * FROM children WHERE id = $id;
        .then(formerChild => {
            child = formerChild;
            return db.children.destroy({ id: req.params.id });
        })
        .then(() => {
            res.send(child);
        });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('server running and listening at localhost:%s', port);
});