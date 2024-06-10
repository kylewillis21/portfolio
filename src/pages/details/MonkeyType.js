import banner from "../../assets/images/projects/typewriterMonkeys.jpg"
import { useMediaQuery } from 'react-responsive';
import screenshot from "../../assets/images/projects/monkey/Screenshot.png"

export default function MonkeyDetails() {
    const isDesktop = useMediaQuery({ minWidth: 800 });

    return (
    <div className="detailsPage">
        <div className="details">
        {!isDesktop && <img src={banner} />}
        <div className="purpose">
            <h1>Purpose</h1>
            <p>
                This program was written to test the Infinite Monkey 
                Theorem. The basic theory is that if you allow a monkey 
                to randomly hit a typewriter for an infinite amount of 
                time, the monkey would eventually type out the entire 
                works of Shakespeare.
                <br/>
                <a href="https://en.wikipedia.org/wiki/Infinite_monkey_theorem" target="_blank" rel="noopener noreferrer">More information about the theorem can be found here</a>
            </p>
        </div>
        <div className="purpose">
            <h1>How It Works</h1>
            <text>
                <p>
                    This program starts by creating a list of every 
                    unique word inside of Shakespeare's play "Hamlet". Using 
                    the Python standard library, it then chooses a letter
                    at random to add to a string simulating the monkey hitting 
                    keys at random. The program checks
                    if that string is in the list of words. If it is, the
                    word is removed from the list to avoid repetition. 
                </p>
                <p>
                    That is what each "monkey" or process is doing individually.
                    Using threads and a lock we will be able to have multiple 
                    monkeys running at the same time all creating
                    their own unique words in order to work together to write every word of 
                    "Hamlet". Every time a monkey accesses the list of words, it will
                    use the lock to ensure that it is the only monkey using the list
                    in order to keep the list from being modified by multiple monkeys at a time.
                </p>
            </text>
        </div>
        <div className="purpose">
            <h1>Built With</h1>
            <ul>
                <li>Python - The language used throughout the project</li>
                <li><a href="https://docs.python.org/3/library/threading.html" target="_blank" rel="noopener noreferrer">Threads</a> - Allowing the program to run multiple processes of the same function in order to speed along the process</li>
            </ul>
        </div>
        </div>
        {isDesktop && <div className='screenshotContainer'>
            <img src={screenshot} />
            <p>An example of the output</p>    
        </div>}
    </div>
    )
}