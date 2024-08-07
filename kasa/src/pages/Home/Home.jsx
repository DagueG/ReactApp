import Card from '../../components/Card/Card'
import logements from '../../assets/logements.json'
import './Home.css' 

function Home() {
  return (
      <div className="cards-container">
        {logements.map((accommodation, index) => (
          <Card
            key={`${accommodation.id}-${index}`}
            id={accommodation.id}
            title={accommodation.title}
            picture={accommodation.cover}
          />
        ))}
      </div> 
    )
}

export default Home
