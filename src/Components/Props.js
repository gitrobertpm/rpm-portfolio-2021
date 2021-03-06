
/* Data imports */
import propsData from '../data/props.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Props = () => {
  return (
    <div className="props">

      <h2 className="top-heading props-heading">Props</h2>

      <div className="props-txt-box">
        <p className="props-txt">Where quantitative data ends, qualitative data steps in to shed some light.  The following statements were captured from Slack posts and emails from students I mentored and teammates I worked with.</p>
      </div>

      {
        propsData.map((prop, i) => {
          return (
            <div className="prop-box" key={i}>
              <ul className="prop-info-box">
                <li className="prop-date">{ prop.date }</li>
                <li className="prop-role">{ prop.role }</li>
                <li className="prop-name">{ prop.name }</li>
              </ul>
              <p className="prop">{ prop.prop }</p>
            </div>
        )})
      }

      <div className="logo-box">
        <img className="my-logo" src={myLogo} alt="My Logo" />
      </div>
      
    </div>
  );
};

export default Props;
