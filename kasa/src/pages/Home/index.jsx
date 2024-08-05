
import Card from '../../components/Card'
import styled from 'styled-components'
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

function Home() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
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

export default Home
