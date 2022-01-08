import { GenerateCard } from './GenerateCard';

function App() {
  const moods=[
    "Happy", "Sad", "Chill"
  ]
  function renderCards() {
    return moods.map(function(mood, i) {return <span key={i}><GenerateCard mood={mood}/></span>})
  }
  return (
    <div>
      <h1>Moodie</h1>
      {renderCards()}
    </div>
  );
}

export default App;
