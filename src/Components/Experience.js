
/* Component imports */
import ExpItem from './ExpItem';

/* Data imports */
import experienceData from '../data/experience.json';

/* Image imports */
import myLogo from '../img/myLogo.svg';

const Experience = () => {
  return (
    <div className="experience">
      
      <h2 className="top-heading experience-heading">Experience</h2>

      <div className="exp-item-container">

        {
          experienceData.map((ei, i) => {
            return ( 
              <ExpItem 
                id={ ei.id }
                key={ i }
                date={ ei.date }
                company={ ei.company }
                title={ ei.title }
                description={ ei.description }
                bullets={ ei.bullets && ei.bullets }
              />
            );
          })
        }
      </div>

      <img className="my-logo" src={ myLogo } alt="My Logo" />
    </div>
  );
};

export default Experience;
