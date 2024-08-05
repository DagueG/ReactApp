import PropTypes from 'prop-types'
import './Card.css'

function Card({ id, title, picture }) {
  return (
    <a href={`/card/${id}`} className="link_card_logement"> {/* Modifiez l'URL selon vos besoins */}
      <article className="card-logement">
        <img src={picture} alt="fiche" />
        <div className="card-logement__layer">
          <p className="card-logement__title">{title}</p>
        </div>
      </article>
    </a>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  id: '',
  title: '',
  picture: 'https://via.placeholder.com/150', // Assuming you want to use a placeholder image if no picture is provided
}

export default Card

