import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Md Zubayer</span>
        <br />
        A Software Developer from Newfoundland.
        <br />
        Click and drag the island to see magic!
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Skilled in AWS Cloud, 3D Data Analysis <br /> and Agile Software Development.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          My Skills
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Worked in many Personal & Group Projects <br /> Here are the best ones
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Interested in any of my work or need some work done? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contact me
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
