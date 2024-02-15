//REACT
import React from "react";
import { NavLink } from "react-router-dom";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import LayersIcon from "@mui/icons-material/Layers";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

// PROJECTS VIEW
import ProjectView from "./ProjectView";
import Intellego from "./Intellego";
import { VideoChat } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const Main = () => {
  //STATES:
  const [expanded, setExpanded] = React.useState("Intellego");
  const [projectView, setProjectView] = React.useState("Intellego");

  //EVENTS:
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setProjectView(projectView);
    console.log(`Clicked on ${panel}`);
    project(panel);

    //PROJECTS:
    function project(panel) {
      switch (projectView) {
        case "Intellego":
          <Intellego />;
          console.log("Intellego Project");
        case "VideoChat":
          console.log("Video Chat");
        // case "three": return <ComponentC />;
        // case "four":  return <ComponentD />;

        default:
          return <h1>No project match</h1>;
      }
    }
  };

  return (
    <Container className="main">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={15} spacing={0} className="container">
          <Grid item xs={3} className="side_nav">
            <Item>
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
                  className="accordion"
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
                      // useFlexGap
                      // flexWrap="wrap"
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
                        // variant="outlined"
                        sx={{ color: "#909090" }}
                        // size="small"
                      />
                      <Chip
                        icon={<ViewQuiltIcon />}
                        label="Figma"
                        // variant="outlined"
                        sx={{ color: "#909090" }}
                        // size="small"
                      />
                      <Chip
                        icon={<LayersIcon />}
                        label="Webpack"
                        // variant="outlined"
                        sx={{ color: "#909090" }}
                        // size="small"
                      />
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </List>
            </Item>
          </Grid>

          <div onChange={handleChange(<Intellego />)}></div>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
