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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import LayersIcon from "@mui/icons-material/Layers";

//FILES
import ProjectView from "./ProjectView";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const Main = () => {
  //STATES:
  // open-close nested nav
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setOpen(!open);
    setSelectedIndex(expanded);
  };

  // selected={selectedIndex === 1}
  // onClick={(event) => handleListItemClick(event, 1)}

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
                {/* INTELLEGO NAV */}
                <ListItemButton
                  onClick={handleClick("panel1")}
                  expanded={expanded === "panel1"}
                  sx={{ bgcolor: "#4b8768" }}
                >
                  <ListItemIcon sx={{ color: "#eee" }}>
                    {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                    {open ? <FolderOutlinedIcon /> : <FolderIcon />}
                  </ListItemIcon>
                  <ListItemText primary="Intellego" />
                </ListItemButton>

                {/* INTELLEGO COLLAPSE */}
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <ListItem>
                    <Stack
                      direction="row"
                      useFlexGap
                      flexWrap="wrap"
                      spacing={1}
                      sx={{ pl: 1, maxWidth: 360 }}
                    >
                      <Chip
                        icon={<GitHubIcon />}
                        label="Github"
                        component="a"
                        href="https://github.com/Manananaam/Intellego"
                        target="_blank"
                        sx={{ color: "#eee" }}
                        variant="outlined"
                        clickable
                      />
                      <Chip
                        icon={<JavascriptIcon />}
                        label="React.js"
                        variant="outlined"
                        sx={{ color: "#909090" }}
                      />
                      <Chip
                        icon={<ViewQuiltIcon />}
                        label="Figma"
                        variant="outlined"
                        sx={{ color: "#909090" }}
                      />
                      <Chip
                        icon={<LayersIcon />}
                        label="Webpack"
                        variant="outlined"
                        sx={{ color: "#909090" }}
                      />
                    </Stack>
                  </ListItem>
                </Collapse>

                {/* VIDEO-CHAT NAV */}
                <ListItemButton
                  onClick={handleClick("panel2")}
                  expanded={expanded === "panel2"}
                  sx={{ bgcolor: "#4b8768" }}
                >
                  <ListItemIcon sx={{ color: "#eee" }}>
                    {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                    {open ? <FolderOutlinedIcon /> : <FolderIcon />}
                  </ListItemIcon>
                  <ListItemText primary="Video Chat" />
                </ListItemButton>

                {/* INTELLEGO COLLAPSE */}
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <ListItem>
                    <Stack
                      direction="row"
                      useFlexGap
                      flexWrap="wrap"
                      spacing={1}
                      sx={{ pl: 1, maxWidth: 360 }}
                    >
                      <Chip
                        icon={<GitHubIcon />}
                        label="Github"
                        component="a"
                        href="https://github.com/Manananaam/Intellego"
                        target="_blank"
                        sx={{ color: "#eee" }}
                        variant="outlined"
                        clickable
                      />
                      <Chip
                        icon={<JavascriptIcon />}
                        label="React.js"
                        variant="outlined"
                        sx={{ color: "#909090" }}
                      />
                      <Chip
                        icon={<ViewQuiltIcon />}
                        label="Figma"
                        variant="outlined"
                        sx={{ color: "#909090" }}
                      />
                      <Chip
                        icon={<LayersIcon />}
                        label="Webpack"
                        variant="outlined"
                        sx={{ color: "#909090" }}
                      />
                    </Stack>
                  </ListItem>
                </Collapse>
              </List>
            </Item>
          </Grid>

          <ProjectView />
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
