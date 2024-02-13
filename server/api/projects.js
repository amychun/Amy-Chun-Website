const router = require("express").Router();
const { rest } = require("nodemon");
const { Project } = require("../db");

//GET /api/projects
router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (err) {
    next(err);
  }
});

//GET /api/projects/:id
router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
  } catch (err) {
    next(err);
  }
});
