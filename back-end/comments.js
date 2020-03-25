const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let comments = [];
let id = 0;

app.post('/api/comments', (req, res) => {
  id = id + 1;
  let comment = {
    id: id,
    text: req.body.text,
    name: req.body.name,
    time: req.body.time
  };
  comments.push(comment);
  res.send(comment);
});

app.get('/api/comments', (req, res) => {
  res.send(comments);
});

app.put('/api/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let commentsMap = comments.map(comment => {
    return comment.id;
  });
  let index = commentsMap.indexOf(id);
  if (index === -1) {
    res.status(404)
      .send("Sorry, that comment doesn't exist");
    return;
  }
  let comment = comments[index];
  comment.text = req.body.text;
  comment.name = req.body.name;
  comment.time = req.body.time;
  res.send(comment);
});

app.delete('/api/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = comments.map(comment => {
      return comment.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that comment doesn't exist");
    return;
  }
  comment.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
