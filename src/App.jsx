import Feature from './components/Feature';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WorkFlow from './components/WorkFlow';
import Price from './components/Price';
function App() {

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <Hero/>
    <Feature/>
    <WorkFlow/>
    <Price/>
    </div>
    </>
  )
}

export default App
