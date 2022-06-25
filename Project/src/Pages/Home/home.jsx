import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeDesktop from '../../Small Components/Home Desktop/HomeDesktop';
import HomeMobile from '../../Small Components/Home Mobile/HomeMobile';


function Home() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>{isMobile ? <HomeMobile /> : <HomeDesktop />}</div>
  )
}

export default Home

