import { Link } from 'react-router-dom'

const CharacterCard = ({ name, image, id }) =>
  <>
    <Link to={`/character/${id}`}>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  </>

export default CharacterCard
