import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Blog from '../../Poze/Blog.png'
import ToDo from '../../Poze/ToDo.png'
import Bmi from '../../Poze/Bmi.png'
import Space from '../../Poze/Space.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import './ProjectsDesktop.css'

export default function ProjectsDesktop() {
  return (<div id="main-projects">
    <ImageList id='projects-desktop-item'>
      <ImageListItem key="Subheader" cols={2} >
        <ListSubheader  component="div">Git Projects</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <a href={item.urlSrc}> <GitHubIcon /></a>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList></div>
  );
}

const itemData = [
  {
    img: Blog,
    title: 'Vacation Blog',
    urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/02%20week',
    author: 'Lucian Dina-Muszuriak',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: ToDo,
    title: 'ToDo Project',
    author: 'Lucian Dina-Muszuriak',
    urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week08',
  },
   {
     img: Space,
     title: 'SpaceShip Project',
     author: 'Lucian Dina-Muszuriak',
     urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week10',
   },
   {
     img: Bmi,
     title: 'BMI Project',
     author: 'Lucian Dina-Muszuriak',
     urlSrc: 'https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week5extra',
   },
 
];
