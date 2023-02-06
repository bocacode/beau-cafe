export default function MenuCard(props) {
  const { image, title, description } = props
  return (
    <div className="coffee-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
