export default function Button({ copy, id, color }) {
  return (
    <button
      id={id}      
      style={color ? { backgroundColor: color } : undefined}
    >
      {copy}
    </button>
  );
}
