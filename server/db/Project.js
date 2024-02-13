const Sequelize = require("sequelize");
const db = require("./database");

const Project = db.define("project", {
  projectName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "",
    allowNull: true,
  },
  tools: {
    type: Sequelize.STRING,
    defaultValue: "github",
    allowNull: true,
  },
  githubLink: {
    type: Sequelize.STRING,
    defaultValue: "https://github.com/amychun",
    allowNull: true,
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: "",
    allowNull: true,
  },
});

module.exports = Project;
