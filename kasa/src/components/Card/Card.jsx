import PropTypes from 'prop-types';
import './Card.css';

function Card({ id = '', title = '', picture = 'https://via.placeholder.com/150' }) {
  return (
    <a href={`/fiche_logement/${id}`} className="link_card_logement">
      <article className="card-logement">
        <img src={picture} alt="fiche" />
        <div className="card-logement__layer">
          <p className="card-logement__title">{title}</p>
        </div>
      </article>
    </a>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Card;
