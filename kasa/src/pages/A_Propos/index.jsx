import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logements from '../../assets/logements.json' // Assurez-vous que le fichier JSON est placé dans le bon répertoire

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

function Freelances() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {logements.map((accommodation, index) => (
          <Card
            key={`${accommodation.id}-${index}`}
            ID_number={accommodation.id}
            title={accommodation.title}
            picture={accommodation.cover}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
