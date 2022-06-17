import UpButton from '../../Components/UpButton/upButton'
import './home.css'
import photo from '../../Photos/photo.jpeg'

function Home() {
  return (
    <div>
      <div className='main'>
        
        <div>
          <h1>Salut, sunt<br/> Lucian Dina-Muszuriak</h1>
          <h3>Sunt front-end developer <br/>specializat in realizarea de site-uri si web-apps</h3>
          
          </div>
          <img src={photo} alt="Poza cu mine" srcSet=''/>
      </div>
      <div><UpButton /></div>
    </div>
  )
}

export default Home

