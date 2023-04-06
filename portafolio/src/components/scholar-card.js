export default function ScholarCard(props) {
  return (
    <div className="scholarContainer">
      <div>
        <img src={props.link} alt="Img"/>
      </div>
      <div>
        <div>
            {props.name}
        </div>
        <div>
            {props.escolaridad}
        </div>
      </div>
    </div>
  );
}
