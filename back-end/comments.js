const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let comments = [
  {
    id: 0,
    year:"1832",
    comments: []
  },
  {
    id: 0,
    year:"1835",
    comments: []
  },
  {
    id: 0,
    year:"1838",
    comments: []
  },
  {
    id: 0,
    year:"1842",
    comments: []
  },
  {
    id: 0,
    year:"other",
    comments: []
  }
];

app.post('/api/comments/:year', (req, res) => {
  let index = comments.map(comment => {
      return comment.year;
    })
    .indexOf(req.params.year);
  comments[index].id = comments[index].id + 1;
  let comment = {
    id: comments[index].id,
    text: req.body.text,
    name: req.body.name,
    date: req.body.date
  };
  comments[index].comments.push(comment);
  res.send(comment);
});

app.get('/api/comments/:year', (req, res) => {
  let index = comments.map(comment => {
      return comment.year;
    })
    .indexOf(req.params.year);
  res.send(comments[index].comments);
});

app.put('/api/comments/:year/:id', (req, res) => {
  let index = comments.map(comment => {
      return comment.year;
    })
    .indexOf(req.params.year);
  let id = parseInt(req.params.id);
  let commentsMap = comments[index].comments.map(comment => {
    return comment.id;
  });
  let ind = commentsMap.indexOf(id);
  if (ind === -1) {
    res.status(404)
      .send("Sorry, that comment doesn't exist");
    return;
  }
  let comment = comments[index].comments[ind];
  comment.text = req.body.text;
  comment.name = req.body.name;
  comment.date = req.body.date;
  res.send(comment);
});

app.delete('/api/comments/:year/:id', (req, res) => {
  let index = comments.map(comment => {
      return comment.year;
    })
    .indexOf(req.params.year);
  let id = parseInt(req.params.id);
  let removeIndex = comments[index].comments.map(comment => {
      return comment.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that comment doesn't exist");
    return;
  }
  comments[index].comments.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
