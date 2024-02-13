const { db, Project } = require("./server/db");

const projects = [
  {
    projectName: "Intellego",
    date: "2023.02.23",
    description:
      "Lorem ipsum dolor sit i vestibulum massa sit amet sagittis placerat. Sed egestas porta diam, non suscipit neque aliquet eu. Maecenas eu nisl varius, egestas libero ac, tempus metus.",
    tools: "github, react, node, figma, photoshop",
    githubLink: "github.com",
    image: "https://dummyimage.com/400x300",
  },
  {
    projectName: "Example 2",
    date: "2023.01.33",
    description:
      "Lorem ipsum dolor sit i vestibulum massa sit amet sagittis placerat. Sed egestas porta diam, Lorem ipsum dolor sit i vestibulum massa sit amet sagittis placerat. Sed egestas porta diam, non suscipit neque aliquet eu. Maecenas eu nisl varius, egestas libero ac, tempus metus. non suscipit neque aliquet eu. Maecenas eu nisl varius, egestas libero ac, tempus metus.",
    tools: "github, react, photoshop",
    githubLink: "github.com",
    image: "https://dummyimage.com/600x200",
  },
];

const projectSeed = () => {
  Promise.all(
    projects.map((project) => {
      Project.create(project);
    })
  );
};

const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return projectSeed();
    })
    .catch((err) => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      // db.close();
      return null;
    });
};

main();
