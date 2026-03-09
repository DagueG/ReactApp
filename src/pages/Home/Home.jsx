import Card from '../../components/Card/Card'
import logements from '../../assets/logements.json'
import './Home.css' 

function Home() {
  return (
    <div className="home-container">
      <div className="banner-container">
        <div className="banner-text-container">
          <div className="banner-text">Chez vous, partout et ailleurs</div>
        </div>
      </div>
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
    </div>
    )
}

export default Home
