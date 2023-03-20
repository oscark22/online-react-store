import './App.css'
import DoggoCard from './DoggoCard'


const doggos = [
  {
    nameDoggo: 'Barongo',
    datePublication: new Date(2022, 11, 29),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    age: 15,
    tags: ['goodboy', 'cool', 'gamer']
  }
]

function App() {
  return (
    <>
      { doggos.map((doggo, index) => (
        <li key={index}>
          <DoggoCard 
            nameDoggo={doggo.nameDoggo}
            datePublication={doggo.datePublication}
            description={doggo.description}
            srcImg={doggo.srcImg}
            age={doggo.age}
            tags={doggo.tags}
          />
        </li>
      ))}
    </>
  )
}

export default App
