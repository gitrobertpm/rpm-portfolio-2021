
/* Data imports */
import propsData from '../data/props.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Props = () => {
  return (
    <div className="props">

      <h2 className="top-heading props-heading">Props</h2>

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
