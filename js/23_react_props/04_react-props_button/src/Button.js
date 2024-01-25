export default function Button({ color, text, disabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
