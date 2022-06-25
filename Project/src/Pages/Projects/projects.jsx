import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectsDesktop from '../../Small Components/Projects Desktop/ProjectsDesktop'
import ProjectsMobile from '../../Small Components/Projects Mobile/ProjectsMobile'


function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div> {isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}</div>
  )
}

export default Projects