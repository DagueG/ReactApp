import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardTitle = styled.span`
  color: white;
  font-size: 22px;
  font-weight: normal;
  position: absolute;
  bottom: 15px;
  left: 15px;
  padding: 5px 10px;
  border-radius: 5px;
`

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  position: absolute;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%);
  top: 0;
  left: 0;

`

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ title, picture }) {
  return (
    <CardWrapper>
      <CardImage src={picture} alt="image fiche" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  ID_number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  ID_number: '',
  title: '',
  picture: 'https://via.placeholder.com/150', // Assuming you want to use a placeholder image if no picture is provided
}

export default Card
