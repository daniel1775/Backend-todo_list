const router = require("express").Router();
const Todo = require("../models/todo");
const { ObjectId } = require('mongodb');

router.get("/search-all", async (req, res) => {
  try {
    const resul = await Todo.find({deleted: false, completed: false});
    res.json(resul);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/search-completed", async (req, res) => {
  try {
    const resul = await Todo.find({completed: true});
    res.json(resul);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/search-deleted", async (req, res) => {
  try {
    const resul = await Todo.find({deleted: true});
    res.json(resul);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/search/:title", async (req, res) => {
  try {
    const resul = await Todo.findOne({title: req.params['title']});
    res.json(resul);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    const resul = await Todo.create(req.body);
    res.send("completed");
  }catch (err){
    res.status(500).send(err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params['id']);
    const resul = await Todo.findOneAndUpdate({ _id: id }, req.body, { new: true });
    red.send("completed")
  }catch (err){
    res.status(500).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params['id']);
    const resul = await Todo.findOneAndUpdate({ _id: id }, {deleted: true}, { new: true });
    res.send("completed");
  }catch (err){
    res.status(500).send(err);
  }
});

router.delete("/finalized/:id", async (req, res) => {
  try{
    const id = new ObjectId(req.params['id']);
    const resul = await Todo.findOneAndUpdate({_id: id}, {completed: true}, {new: true});
    res.send("completed");
  }catch (err){
    res.status(500).send(err);
  }
});

module.exports = router;



/**
const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {
    Todo.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

module.exports = router;
 */