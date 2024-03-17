import Accordian from './components/Accordian'
import RandomColor from './components/RandomColor'
import ImageSlider from './components/image-slider'
import StarRating from './components/star-rating'

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
    </>
  )
}

export default App
