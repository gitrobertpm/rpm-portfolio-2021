
/* Component imports */
import Project from './Project';

/* Data imports */
import projectsData from '../data/projects.json';

/* Img imports imports */
import portHome from '../img/projects/port-home.PNG';
import tsHome from '../img/projects/ts-home.PNG';
import tsSettings from '../img/projects/ts-settings.PNG';
import tsTruth from '../img/projects/ts-truth.PNG';
import tsTruths from '../img/projects/ts-truths.PNG';
import ruBuJson from '../img/projects/ru-bu-json.PNG';
import ruBuReadme from '../img/projects/ru-bu-readme.PNG';
import ruBuSample from '../img/projects/ru-bu-sample.PNG';
import cwMath from '../img/projects/cw-math.PNG';
import cwOne from '../img/projects/cw-one.PNG';
import cwTwo from '../img/projects/cw-two.PNG';
import trivQue from '../img/projects/triv-que.PNG';
import trivAns from '../img/projects/triv-ans.PNG';
import heStart from '../img/projects/he-start.PNG';
import heFlop from '../img/projects/he-flop.PNG';
import heRiver from '../img/projects/he-river.PNG';
import rfg from '../img/projects/rfg.PNG';
import rfgnr from '../img/projects/rfg-nr.PNG';
import tdwu from '../img/projects/td-wu.PNG';
import tdwu2 from '../img/projects/td-wu-2.PNG';

const Projects = () => {

  /* Connect imported images with their respective projects */
  const imgObj = {
    port: [portHome],
    ts: [tsHome, tsSettings, tsTruths, tsTruth],
    rubu: [ruBuJson, ruBuReadme, ruBuSample],
    cw: [cwMath, cwOne, cwTwo],
    triv: [trivQue, trivAns],
    he: [heStart, heFlop, heRiver],
    rfg: [rfg, rfgnr],
    tdwu: [tdwu, tdwu2]
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
                description={proj.description}
                stack={proj.stack}
                repo={proj.links.repo}
                live={proj.links.live && proj.links.live}
                api={proj.links.api && proj.links.api}
                imgs={proj.imgKey ? imgObj[proj.imgKey] : null}
              />
            );
          })
        }
      </div>
    </div>
  );  
};

export default Projects;
