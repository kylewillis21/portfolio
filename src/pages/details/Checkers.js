import { useMediaQuery } from 'react-responsive'

import banner from '../../assets/images/projects/checkers.jpg'
import client from '../../assets/images/projects/checkers/ClientScreenshotWaiting.png'
import server from '../../assets/images/projects/checkers/ServerScreenshot.png'


export default function CheckersDetails() {
    const isDesktop = useMediaQuery({ minWidth: 800 });

    return (
        <div className='detailsPage'>
            <div className='details'>
                {!isDesktop && <img src={banner} />}
                <div className='purpose'>
                    <h1>Purpose</h1>
                    <p>
                        This program was created with the intention of making a simple game
                        with multiplayer capabilities. The goal was to provide a means for 
                        two different machines communicate with one another using an 
                        established TCP connection.
                    </p>
                </div>
                <div className='purpose'>
                    <h1>How it Works</h1>
                    <text>
                        <p>
                            The server will start and wait for the client to establish a connection.
                            Once the client connects, both the client and server will create their own
                            instance of the game to account for any disconnections that may occur.
                            The instance of the game created by both the client and the server is capable
                            of making moves across the board for both sides and handling any of the logic
                            for the game.
                        </p>
                        <p>
                            Between each turn taken, the program will automatically convert the game data into
                            a string that can be sent to the other side of the connection. The other side
                            will then update the board to reflect the received data. While waiting for the response
                            from the other side, the game will pause to keep a player from taking multiple turns in 
                            a row.
                        </p>
                    </text>
                </div>
                <div className='purpose'>
                    <h1>Built With</h1>
                    <ul>
                        <li>C++ - Used as the main programming language throughout the development of this project.</li>
                        <li><a href='https://think-async.com/Asio/asio-1.30.2/doc/' target="_blank" rel="noopener noreferrer">ASIO Library</a> - The library used that simplified the creation of the connection between the client and the server</li>
                    </ul>
                </div>
            </div>
            {isDesktop && <div className='exampleContainer'>
                <h1>Examples</h1>
                <div className='pictureContainer'>
                    <div className='pictureWrapper'>
                        <img src={server} className='picture' alt='Server'/>
                        <div className='caption'>Server side shortly after connecting to the client</div>
                    </div>
                    <div className='pictureWrapper'>
                        <img src={client} className='picture' alt='Client'/>
                        <div className='caption'>Client side waiting on the server to make their move</div>
                    </div>
                </div>
            </div>}
        </div>
    )
}