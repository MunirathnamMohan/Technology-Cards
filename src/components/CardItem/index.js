import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="">{description}</p>
      <img className="img" alt={title} src={imgUrl} />
    </li>
  )
}

export default CardItem
