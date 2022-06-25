import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import GitHubIcon from '@mui/icons-material/GitHub';
import ButtonBase from '@mui/material/ButtonBase';
import Blog from '../../Poze/Blog.png'
import ToDo from '../../Poze/ToDo.png'
import Bmi from '../../Poze/Bmi.png'
import Space from '../../Poze/Space.png'
import './ProjectsMobile.css'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ProjectsMobile() {
  const sites = [
    {
      sitesName: 'Blog Project',
      src: Blog,
      urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/02%20week'
    },
    {
      sitesName: 'ToDo Project',
      src: ToDo,
      urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week08',
    },
    {
      sitesName: 'BMI Project',
      src: Space,
      urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week5extra',
    },
    {
      sitesName: 'SpaceShip Project',
      src: Bmi,
      urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week10',
    }, 
  ]

  return (
    <div id='main-project'>{sites.map((sitesApp) => {
      const { sitesName, src, urlSrc } = sitesApp;
      return (
        <Paper
          key={sitesName}
          sx={{
            p: 1,
            margin: 'auto',
            maxWidth: 300,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
          }}
        >   <div id='project-col'>
            <Grid container spacing={2}>
              <Grid item >
                <ButtonBase sx={{ width: 300, height: 128 }}>
                  <Img alt={sitesName} src={src} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs>
                    <a id='grid-anchor' href={urlSrc}><GitHubIcon /> {sitesName}</a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid></div> </Paper>)
    })}
    </div>
  );
}


