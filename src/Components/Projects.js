
/* Component imports */
import Project from './Project';

/* Data imports */
import projectsData from '../data/projects.json';

/* Img imports imports */
import portHome from '../img/projects/port-home.PNG';
import tsHome from '../img/projects/ts-home-2.PNG';
import tsSettings from '../img/projects/ts-settings-2.PNG';
import tsTruths from '../img/projects/ts-truths-2.PNG';
import tsTruth from '../img/projects/ts-truth-2.PNG';
import ruBuJson from '../img/projects/ru-bu-json.PNG';
import ruBuReadme from '../img/projects/ru-bu-readme.PNG';
import ruBuSample from '../img/projects/ru-bu-sample.PNG';
import cwMath from '../img/projects/cw-math.PNG';
import cwOne from '../img/projects/cw-one.PNG';
import cwTwo from '../img/projects/cw-two.PNG';
import ecOne from '../img/projects/ec-coins.PNG';
import ecTwo from '../img/projects/ec-flip.PNG';
import ecThree from '../img/projects/ec-hex.PNG';
import heStart from '../img/projects/he-start.PNG';
import heFlop from '../img/projects/he-flop.PNG';
import heRiver from '../img/projects/he-river.PNG';
import rfg from '../img/projects/rfg.PNG';
import rfgnr from '../img/projects/rfg-nr.PNG';
import tdwu from '../img/projects/td-wu.PNG';
import tdwu2 from '../img/projects/td-wu-2.PNG';
import tdwu3 from '../img/projects/triv-que.PNG';

const Projects = () => {

  /* Connect imported images with their respective projects */
  const imgObj = {
    port: [portHome],
    ts: [tsHome, tsTruths, tsTruth, tsSettings],
    rubu: [ruBuJson, ruBuReadme, ruBuSample],
    cw: [cwMath, cwOne, cwTwo],
    ec: [ecOne, ecTwo, ecThree],
    he: [heStart, heFlop, heRiver],
    rfg: [rfg, rfgnr],
    tdwu: [tdwu, tdwu2, tdwu3]
  }

  return (
    <div className="projects-container">
      <div className="projects-retainer">

        <h1 className="top-heading projects-heading">Projects</h1>

        {
          projectsData.map((proj, i) => {
            return (
              <Project 
                key={i}
                id={proj.id}
                title={proj.title}
                shortDescription={proj.shortDescription}
                description={proj.description}
                stack={proj.stack}
                links={proj.links}
                imgs={proj.imgKey && imgObj[proj.imgKey]}
              />
            );
          })
        }
      </div>
    </div>
  );  
};

export default Projects;
