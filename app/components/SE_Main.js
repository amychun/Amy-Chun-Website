//REACT
import React, { useState, useEffect } from "react";

// SOFTWARE ENGINEERING PROJECTS
import Project02 from "./SE_project02";
import Intellego from "./SE_Intellego";

//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import LayersIcon from "@mui/icons-material/Layers";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const Main = ({ addindexprops }) => {
  //STATES:
  const [expanded, setExpanded] = React.useState("Intellego");
  const [projectview, setProjectview] = React.useState("Intellego");
  const [addindex, setAddindex] = useState(0);

  //EVENTS:
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setProjectview(panel);
  };

  //adding numbers on the left of the project content according to the height of the project window. Passing this into a prop so that other projects can share them across projects.
  useEffect(() => {
    const contentHeight =
      document.getElementsByClassName("project_content")[0].offsetHeight / 27;
    setAddindex(contentHeight);
  }, []);

  const addIndex = (addindex) => {
    let nums = [];
    for (let i = 1; i < addindex; i++) {
      nums.push(i + " ");
    }
    return nums;
  };
  return (
    <Container className="main">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={15} spacing={0} className="container">
          <Grid item xs={3} className="side_nav">
            <>
              <div className="dots_title">
                <div className="three_dots"></div>
                <div className="sw_title">Software Engineer</div>
              </div>

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  color: "#d0d0d0",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{ bgcolor: "transparent", color: "#d0d0d0" }}
                  >
                    Projects
                  </ListSubheader>
                }
              >
                <Accordion
                  disableGutters
                  expanded={expanded === "Intellego"}
                  onChange={handleChange("Intellego")}
                  sx={{ bgcolor: "transparent", color: "#d0d0d0" }}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <ListItemIcon sx={{ color: "#eee" }}>
                      {expanded === "Intellego" ? (
                        <ExpandMoreIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                      {expanded === "Intellego" ? (
                        <FolderOpenIcon />
                      ) : (
                        <FolderOutlinedIcon />
                      )}
                    </ListItemIcon>
                    <Typography>Intellego</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      direction="column"
                      spacing={1}
                      sx={{ maxWidth: 340, mx: 2 }}
                    >
                      <Chip
                        icon={<GitHubIcon />}
                        label="Github"
                        component="a"
                        href="https://github.com/Manananaam/Intellego"
                        target="_blank"
                        color="info"
                        clickable
                        variant="elevated"
                      />
                      <Chip
                        icon={<InsertEmoticonIcon />}
                        label="React"
                        sx={{ color: "#909090" }}
                        size="small"
                      />
                      <Chip
                        icon={<ViewQuiltIcon />}
                        label="Figma"
                        sx={{ color: "#909090" }}
                        size="small"
                      />
                      <Chip
                        icon={<LayersIcon />}
                        label="Webpack"
                        sx={{ color: "#909090" }}
                        size="small"
                      />
                    </Stack>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  disableGutters
                  expanded={expanded === "VideoChat"}
                  onChange={handleChange("VideoChat")}
                  sx={{ bgcolor: "transparent", color: "#d0d0d0" }}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <ListItemIcon sx={{ color: "#eee" }}>
                      {expanded === "VideoChat" ? (
                        <ExpandMoreIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                      {expanded === "VideoChat" ? (
                        <FolderOpenIcon />
                      ) : (
                        <FolderOutlinedIcon />
                      )}
                    </ListItemIcon>
                    <Typography>Video Chat</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      direction="column"
                      align="left"
                      spacing={1}
                      sx={{ maxWidth: 340, mx: 2 }}
                    >
                      <Chip
                        icon={<GitHubIcon />}
                        label="Github"
                        component="a"
                        href="https://github.com/Manananaam/Intellego"
                        target="_blank"
                        color="info"
                        clickable
                      />
                      <Chip
                        icon={<InsertEmoticonIcon />}
                        label="React"
                        sx={{ color: "#909090" }}
                      />
                      <Chip
                        icon={<ViewQuiltIcon />}
                        label="Figma"
                        sx={{ color: "#909090" }}
                      />
                      <Chip
                        icon={<LayersIcon />}
                        label="Webpack"
                        sx={{ color: "#909090" }}
                      />
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </List>
            </>
          </Grid>

          <Grid item xs={12}>
            {projectview && projectview === "Intellego" ? (
              <Intellego addindexprops={addIndex(addindex)} />
            ) : projectview === "VideoChat" ? (
              <Project02 addindexprops={addIndex(addindex)} />
            ) : (
              <h1>Nothing to see here!</h1>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
