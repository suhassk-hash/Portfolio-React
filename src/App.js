import image from './images/IMG_20240806_110720_050-Photoroom.png';
import React, { useState} from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(!(window.innerWidth < 768));
  const handleToggle = () =>
     setIsVisible(!isVisible);
  return (
    <div>
      <nav className='text-center p-0 md:flex md:justify-around md:p-0 bg-secclr'>
      <img src="https://img.icons8.com/?size=256&id=S5biqohaDgd1&format=png" alt='Suhas Koheda' className='rounded-full w-10 h-8 object-cover fixed mr-0 right-0 md:hidden' onClick={handleToggle}/>
        <div><h3 className={`${isVisible && window.innerWidth<768 ? 'fixed' : ''} text-2xl font-serif bg-secclr`}>Suhas Koheda</h3></div>
        {isVisible && (
      <div className={`${isVisible && window.innerWidth < 768 ? 'fixed w-screen h-screen' : ''} text-center p-12 md:flex md:justify-end gap-28 md:p-0 bg-secclr`}>
                    <div className="p-8 md:p-0">
                        <a href="#" className="bg-secclr" onClick={handleToggle}>Home</a>
                    </div>
                    <div className="p-8 md:p-0">
                        <a href="#About" className="bg-secclr" onClick={handleToggle}>About Me</a>
                    </div>
                    <div className="p-8 md:p-0">
                        <a href="#Skills" className="bg-secclr" onClick={handleToggle}>Skills</a>
                    </div>
                    <div className="p-8 md:p-0">
                        <a href="#Projects" className="bg-secclr" onClick={handleToggle}>Projects</a>
                    </div>
                    <div className="p-8 md:p-0">
                        <a href="./Resume.html" className="bg-secclr" onClick={handleToggle}>Resume/CV</a>
                    </div>
                    <div className="p-8 md:p-0 ">
                        <a href="./Contact.html" className="bg-secclr" onClick={handleToggle}>Contact Information</a>
                    </div>
                </div>
        )}
                </nav>
      <div className='flex justify-center items-center h-screen bg-secclr'>
        <div className='text-center text-3xl font-semibold font-lora'>
          <h1>
            Hey there! <br />
            I am <em className="Name">Suhas Koheda</em>,<br />
            a <em className="Animation text-accentclr"></em>
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-12 gap-20 md:h-screen md:items-center border-t'id='About'>
        <div className='flex justify-center'>
          <img src={image} alt='Suhas Koheda' className='rounded-full w-50 h-80 object-cover' />
        </div>
        <div>
          <p className='text-center text-xl font-semibold font-lora'>
            Namaste! I'm Suhas Koheda, a second-year student embarking on the exciting journey of flexuter
            Science at VIT Chennai with a specialized focus on Artificial Intelligence and Machine Learning.<br/><br/>
            • My coursework has begun laying the foundation for a flexrehensive understanding of Java and
            Python programming languages, setting the stage for my future in software development.<br/><br/>
          </p>
        </div>
      </div>
      <div className='my-12  border-t p-12'id='Skills'>
        <div className=' flex flex-col justify-normal items-center text-center font-semibold font-lora'>
          <h4 className=' text-2xl'>Skills</h4>
          <h2 className='text-l'>That give me Happiness and Money 😎</h2>
        </div>
        <div className="grid cols-1 md:flex text-l font-semibold">
                <div className="p-4 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center flex justify-center shadow-xl shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue h-16 md:h-14 items-center">Java Developer</h3>
                    <p className='py-4 md:py-12'>Created robust and scalable applications using Java, focusing on enterprise solutions and backend
                        services. Proficient in Java SE, Java EE, and various frameworks such as Spring and
                        Hibernate.</p>
                </div>
                <div className="p-4 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center flex justify-center shadow-xl shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue h-16 md:h-14 items-center">Full Stack Web Developer</h3>
                    <p className='py-4 md:py-12'>Designed and developed full-stack web applications using modern technologies. Experienced in both
                        front-end (React, HTML/CSS) and back-end (Node.js, Express) development, ensuring seamless user
                        experiences and server-side functionality.</p>
                </div>
                <div className="p-4 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center flex justify-center shadow-xl shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue h-16 md:h-14 items-center">Machine Learning</h3>
                    <p className='py-4 md:py-12'>Applied machine learning techniques to build predictive models and data-driven solutions. Skilled
                        in Python, TensorFlow, and scikit-learn for tasks such as classification, regression, and
                        clustering.</p>
                </div>
                <div className="p-4 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center flex justify-center shadow-xl shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue h-16 md:h-14 items-center">UI/UX</h3>
                    <p className='py-4 md:py-12'>Developed intuitive user interfaces and engaging user experiences. Experience with tools like
                        Adobe XD and Figma to create wireframes, prototypes, and high-fidelity designs that meet user
                        needs and business goals.</p>
                </div>
            </div>
        </div>
        <div className='my-12  border-t p-12'>
        <div className=' flex flex-col justify-normal items-center text-center font-semibold font-lora'>
          <h4 className=' text-2xl font-semibold'>Stacks I Know</h4>
          <h2 className='text-l'>Tools I Have Been Using Over Time for My Development</h2>
        </div>
        <div className='grid col-1 md:flex md:justify-around'>
        <div className="flex flex-col text-center p-12 shadow-xl  shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue my-12">
                    <h4 className="shadow-xl  md:shadow-custom-zeal p-4">Languages</h4>
                    <div className="flex p-4 justify-center">
                        <img src="https://www.svgrepo.com/show/452234/java.svg" alt="Java" 
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/452183/cpp.svg" alt="Cpp" 
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/452091/python.svg" alt="Py" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col text-center p-12 shadow-xl  shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue my-12">
                    <h4 className="shadow-xl  md:shadow-custom-zeal p-4">Design</h4>
                    <div className="flex p-4 justify-center">
                        <img src="https://www.svgrepo.com/show/452202/figma.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/473499/adobe.svg" alt="Java" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col text-center p-12 shadow-xl  shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue my-12">
                    <h4 className="shadow-xl  md:shadow-custom-zeal p-4 ">Containers</h4>
                    <div className="flex  justify-center p-4">
                        <img src="https://www.svgrepo.com/show/452192/docker.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
            </div>
            <div className=" grid col-1 md:flex justify-around">
            <div className="flex flex-col text-center p-12 shadow-xl  shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue my-12">
                    <h4 className="shadow-xl  md:shadow-custom-zeal p-4">Version Control</h4>
                    <div className="flex  justify-center  p-4">
                        <img src="https://www.svgrepo.com/show/452210/git.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="Figma" width="500"
                             height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col text-center p-12 shadow-xl  shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue my-12">
                    <h4 className="shadow-xl  md:shadow-custom-zeal p-4">Database</h4>
                    <div className="flex  justify-center  p-4">
                        <img src="https://www.svgrepo.com/show/373845/mongo.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col text-center p-12 shadow-xl  shadow-custom-zeal hover:shadow-inner hover:shadow-custom-blue my-12">
                   <h4 className="shadow-xl md:shadow-custom-zeal p-4">IDE's</h4>
                    <div className="flex   justify-center p-4">
                        <img src="https://www.svgrepo.com/show/353906/intellij-idea.svg" alt="Figma" width="500"
                             height="600"
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
        </div>
        </div>
        <div className="text-center py-6 border-t" id="Projects">
  <h2 className="text-3xl font-bold mb-4">Some of my Projects</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8">
  <div className="bg-secclr border border-accentclr rounded-lg p-4 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Truecaller Lite</h3>
    <p className="mb-4">A lightweight version of the popular Truecaller app, featuring essential caller identification and spam blocking functionalities.</p>
    <a href="https://github.com/suhassk-hash/Truecaller_lite" className="text-accentclr font-bold hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
  <div className="bg-secclr border border-accentclr rounded-lg p-4 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Nature for Future</h3>
    <p className="mb-4">An initiative focusing on promoting environmental conservation through interactive web-based platforms and educational content.</p>
    <a href="https://github.com/suhassk-hash/Nature-for-future" className="text-accentclr font-bold hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
  <div className="bg-secclr border border-accentclr rounded-lg p-4 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">LMS Java</h3>
    <p className="mb-4">A Learning Management System developed in Java, designed to manage and facilitate educational content and student engagement.</p>
    <a href="https://github.com/suhassk-hash/LMS-Java" className="text-accentclr font-bold hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 md:p-8'>
  <div className="bg-secclr border border-accentclr rounded-lg p-4 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Instagram Landing Page</h3>
    <p className="mb-4">A static landing page designed to replicate the look and feel of Instagram's homepage, showcasing front-end web design skills.</p>
    <a href="https://github.com/suhassk-hash/Instagram-Landing-Page" className="text-accentclr font-bold hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
  <div className="bg-secclr border border-accentclr rounded-lg p-4 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Laksmanamurthy Website</h3>
    <p className="mb-4">A personal or business website developed for Laksmanamurthy, featuring modern design and responsive layout.</p>
    <a href="https://github.com/suhassk-hash/Laksmanamurthy-Website" className="text-accentclr font-bold hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
  </div>
    </div>
  );
}

export default App;