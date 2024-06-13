import { useMediaQuery } from "react-responsive";

import DetailNavbar from '../../components/DetailsNavbar';

import banner from '../../assets/images/projects/blogProject.jpg'
import register from '../../assets/images/projects/blog/registerScreenshot.png';
import create from '../../assets/images/projects/blog/createScreenshot.png';
import post from '../../assets/images/projects/blog/postScreenshot.png';

export default function BlogDetails() {
    const isDesktop = useMediaQuery({ minWidth: 800 });

    return (
        <div className="detailsPage">
            {isDesktop && <DetailNavbar />}
            <div className='details'>
                {!isDesktop && <img src={banner} />}
                <div className='purpose'>
                    <h1>Purpose</h1>
                    <p>
                        This project was created with the goal of developing
                        a web app using ASP.NET Core, incorporating both authentication
                        and authorization functionalitites. The main focus was on the
                        backend of the application. By leveraging the power of ASP.NET Core,
                        the project successfully delivered a reliable and efficient web application.
                    </p>
                </div>
                <div className='purpose' id='how'>
                    <h1>How it Works</h1>
                    <text>
                        <p>
                            The backend of the application was created using ASP.NET core.
                            The database was created using the Entity Framework to facilitate
                            easy creation and access. Entity Framework provides efficient and streamlined
                            way to interact with the database through object-reltaional mapping.
                        </p>
                        <p>
                            Employing an MVC structure allowed the application to be scalable and testable, 
                            enabling me to focus on developing specific parts of the application individually.
                            Through this structure, I found the code easier to mantain. Debugging was made easier
                            as well because all functionality was found in the controllers of the project making it easier
                            to pinpoint where something may have went wrong.
                        </p>
                        <p>
                            Using the authentication and authorization features of the application, users
                            had limited permissions based on their access level. For example,
                            signed-in users could view, create, and comment on posts, while users who were not signed
                            in could only view posts. This system also allowed users to modify their own posts without
                            the risk of other users accessing them.
                        </p>
                    </text>
                </div>
                <div className='purpose' id='tech'>
                    <h1>Built With</h1>
                    <ul>
                        <li>C# - The main language used throughout the project</li>
                        <li>
                            <a href="https://dotnet.microsoft.com/en-us/apps/aspnet" target="_blank" rel="noopener noreferrer">ASP.NET Core</a> - An extension of .NET specifically designed for creating web applications
                        </li>
                        <li>
                            <a href="https://learn.microsoft.com/en-us/ef/" target="_blank" rel="noopener noreferrer">Entity Framework</a> - An object-relational mapping framework for .NET allowing for easy creation and access to databases
                        </li>
                        <li>
                            SQL Server - The relational database management system used throughout the application. Worked with Entity Framework in order to pull the data needed
                        </li>
                        <li>
                            <a href="https://learn.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-8.0&tabs=visual-studio" target="_blank" rel="noopener noreferrer">Razor Pages</a> - Used to create the views of the project. Allowed for easy integration of C# code in it.
                        </li>
                        <li>
                            <a href="https://learn.microsoft.com/en-us/entra/identity-platform/" target="_blank" rel="noopener noreferrer">Microsoft Identity</a> - Used to authenticate users inside of the project.
                        </li>
                    </ul>
                </div>
                {/* contemplating putting all of these screenshots into some type of slideshow */}
                {isDesktop && <div className='exampleContainer' id='ex'>
                    <h1>Screenshots</h1>
                    <div className="pictureContainer">
                        <div className="pictureWrapper">
                            <img src={register} className='pictureBlog' alt="Register screen" />
                            <div className='caption'>User register screen</div>
                        </div>
                        <div className="pictureWrapper">
                            <img src={create} className="pictureBlog" alt="Create post" />
                            <div className='caption'>Post creation screen</div>
                        </div> 
                        <div className="pictureWrapper">
                            <img src={post} className="pictureBlog" alt="Post" />
                            <div className='caption'>Post screen with comments</div>
                        </div>  
                    </div>    
                </div>}
            </div>
        </div>
    )
}