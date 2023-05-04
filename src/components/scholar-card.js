export default function ScholarCard(props) {
  return (
    <div className="scholarContainer">
      <div className="centrar">
        <img src={props.link} height="100px" alt="Img"/>
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
