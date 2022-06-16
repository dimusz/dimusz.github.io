import React from 'react'
import './projects.css'
import UpButton from '../../Components/UpButton/upButton'
function Projects() {

    return (


        <div class='main'>
            <div>
                <nav>
                    <ul>
                    <li>
                        <a href="https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/02%20week"  target="_blank" rel="noreferrer"><button> Blog vacanta</button></a>
                    </li>
                    <li>
                        <a href="https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week5extra" target="_blank" rel="noreferrer"><button>BMI project</button> </a>
                    </li>
                    <li>
                        <a href="https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week7" target="_blank" rel="noreferrer"><button>Timer app</button> </a>
                    </li>
                    <li>
                        <a href="https://github.com/dimusz/SIIT_Lucian_DinaMuszuriak/tree/main/week08" target="_blank" rel="noreferrer"><button>ToDo Server</button> </a>
                    </li>
                    </ul>
                    </nav>
            </div>
            <div><UpButton /></div>
        </div>
    )
}

export default Projects