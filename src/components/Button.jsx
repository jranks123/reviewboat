export default function Button({ copy, id, color, type, onClick }) {
  return (
    <button
      id={id}
      type={type}     
      onClick={onClick} 
      style={color ? { backgroundColor: color } : undefined}
    >
      <span> {copy} </span>
      <img id="arrow-right" className="leader-subheading-icon" src='/arrow-right.svg'></img>
    </button>
  );
}
