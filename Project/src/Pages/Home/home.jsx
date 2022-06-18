import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import UpButton from '../../Components/UpButton/upButton'
import './home.css'
import photo from '../../Photos/photo.jpeg'

function Home() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>

      {isMobile ?
        (<>

          <div className='main-mobile'>
            <div className='mobile-text'>
              <h4>Salut, sunt<br /> Lucian Dina-Muszuriak</h4>
              <h6 >Sunt front-end developer <br />specializat in realizarea<br />de site-uri si web-apps</h6>
            </div>
            <img src={photo} alt="Poza cu mine" srcSet='' />
          </div>


        </>)

        :

        (<>
          <div className='main'>

            <div>
              <h1>Salut, sunt<br /> Lucian Dina-Muszuriak</h1>
              <h3>Sunt front-end developer <br />specializat in realizarea de site-uri si web-apps</h3>

            </div>
            <img src={photo} alt="Poza cu mine" srcSet='' />
          </div>
          <div><UpButton /></div>
        </>
        )}

    </div>
  )
}

export default Home

