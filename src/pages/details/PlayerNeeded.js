import { useMediaQuery } from 'react-responsive'

import DetailNavbar from '../../components/DetailsNavbar';

import banner from '../../assets/images/projects/playerNeeded.jpg'
import home from '../../assets/images/projects/player/home.PNG';
import profile from '../../assets/images/projects/player/profileScreen.PNG';
import signup from '../../assets/images/projects/player/SignUpScreenshot.png';

export default function PlayerNeedDetails() {
    const isDesktop = useMediaQuery({ minWidth: 800 });

    return (
        <div className='detailsPage'>
            {isDesktop && <DetailNavbar />}
            <div className='details'>
                {!isDesktop && <img src={banner} alt='Player Needed Banner' />}
                <div className='purpose'>
                    <h1>Purpose</h1>
                    <p>
                        This project was created by three others and myself for our Senior
                        Design course at Ohio University. We were tasked with creating
                        an application according to our client's specifications. The course was
                        designed to emulate a Scrum Environment, including standups, sprint goals,
                        and presentations to demonstrate our accomplishments during each sprint.
                        Throughout the project, we held regular meetings with the client to provide updates
                        and receive feedback. These meetings often generated
                        new ideas for the app and additional features the client wanted to include.
                        Most of my work on this application was focused on the frontend,
                        ensuring users have a seamless experience while navigating it.
                    </p>
                    <p>
                        Player Needed was a group-finding app that allowed users to create groups, plan events, and
                        socialize within their groups via a chat feature. It was based in Athens, Ohio, and on the campus of
                        Ohio University. Users posting events to the app could make them public, allowing everyone to see
                        and RSVP, or make them group-only events, where only group members could RSVP. The application
                        included a feedback feature that enabled users to rate others, encouraging them to honor plans and
                        not RSVP for an event and then fail to show up. Users could also rate their own skill in certain
                        activities, such as tennis, to help ensure that highly experienced players would be matched with
                        others of similar skill levels.
                    </p>
                    <p>
                        Unfortunately, due to this projects creation happening in the Fall of 2021 and the Spring of 2022,
                        the application has not been maintained and some of the code is now deprecated. Screenshots of this
                        code are still available but are from various different versions of the application throughout its
                        development.
                    </p>
                </div>
                <div className='purpose' id='how'>
                    <h1>How it Works</h1>
                    <p>
                        Player Needed was designed with a mobile-first mindset. The client wanted it to be available for
                        all platforms so the best way to go about this was to use React Native and the Expo framework. 
                        React Native allowed for us to create native applications to both android, iOS devices, and desktop all at once. 
                        The database for the application was held on Google's Firestore database. This allowed for flexiblity due to its 
                        NoSQL approach. When a user first opens the app, they'll be prompted to register or sign into their
                        account. All of the authentication is done through Firebase authentication.
                    </p>
                    <p>
                        Once signed in, users were brought straight to the home page. A page that contained two timeline-like elements. 
                        One for public events happening and one for private ones that you were allowed to join via groups. 
                        There was also a group page that contained a list of available groups to join. 
                        Joining a group would give the user access to the group chat, which was also handled by Firebase, and any event posted.
                    </p>
                </div>
                <div className='purpose' id='tech'>
                    <h1>Built With</h1>
                    <ul>
                        <li>JavaScript - The language used throughout the project</li>
                        <li><a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">React Native</a> - The framework used throughout the project. Allowed us to develop for all platforms at once</li>
                        <li><a href="https://expo.dev/" target="_blank" rel="noopener noreferrer">Expo</a> - Allowed for us to worry less about build environments so we could focus on the coding</li>
                        <li><a href='https://expressjs.com/' target='_blank' rel='noopener noreferrer'>Express</a> - Used to create our RESTful API in this project</li>
                        <li><a href="https://firebase.google.com/docs" target='_blank' rel='noopener noreferrer'>Google Firebase</a> - Used as the backend for this project handling both the authentication and the database</li>
                    </ul>
                </div>
                {isDesktop && <div className='exampleContainer' id='ex'>
                    <h1>Screenshots</h1>
                    <div className='pictureContainer'>
                        <div className='pictureWrapper'>
                            <img src={home} className='picturePlayer' alt='home screen' />
                            <div className='caption'>Old home screen for the application</div>
                        </div>
                        <div className='pictureWrapper'>
                            <img src={profile} className='picturePlayer' alt='profile screen' />
                            <div className='caption'>Example profile screen for the application</div>
                        </div>
                        <div className='pictureWrapper'>
                            <img src={signup} className='picturePlayer' alt='profile screen' />
                            <div className='caption'>Example profile screen for the application</div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}