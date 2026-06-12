import "../styles/card.css";

function StatsCard({ titulo, valor }) {
  return (
    <div className="stats-card">
      <h3>{titulo}</h3>
      <p>{valor}</p>
    </div>
  );
}

export default StatsCard;