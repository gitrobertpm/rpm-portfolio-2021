
const ExpItem = (props) => {

  return (
    <div className="exp-item" key={ props.id }>
      
      <p className="exp-date">{ props.date }</p>
      <h2 className="exp-title">{ props.title }</h2>
      <p className="exp-description">{ props.description }</p>

      {
        props.bullets &&

        <div className="exp-bullets-container">
          <h3 className="exp-bullets-heading">{ props.bullets.heading }</h3>
          <ul className="exp-bullets-points">

            {
              props.bullets.points.map((point, i) => {
                return (
                  <li className="exp-bullets-point" key={i}>{ point }</li>
                ); 
              })
            }

          </ul>
        </div>
      }

    </div>
  ); 
}

export default ExpItem;
