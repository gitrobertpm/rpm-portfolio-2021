
/* Data imports */
import propsData from '../data/props.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Props = () => {
  return (
    <div className="props">

      <h2 className="top-heading props-heading">Props</h2>

      <div className="props-txt-box">
        <p className="props-txt">To help demonstrate my contribution and compassion and hard work, I like to keep a log of those kind words that students and teammates have shared on my behalf.  The following statements were captured from Slack posts and emails over the last four years.</p>
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
