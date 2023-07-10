import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-image.png'
import progress from '../assets/progress.png'

const Home = () => {
  return(
    <main className='container py-20 grid content-center justify-items-center'>
      <div className='my-10 hero-section flex items-center justify-sb'>
        <div>
          <h1 className='font-bold text-5xl'>The Journey to Personal Growth,</h1>
          <p className='mt-5 mb-8 text-xl'>Nurture your soul, unlock your potential</p>
          <Link className='mt-4 py-2 px-5 border-aeBDca bg-aeBDca text-white rounded uppercase text-2xl' to='/detailed-question'>Start Now</Link>

        </div>

        <div><img src={heroImage} role='presentation' alt='hero-section'/></div>
      </div>

      <div className='my-10'>
        <h2 className='font-normal mb-6 text-3xl'>Track your Progress</h2>

        <div><img src={progress} role='presentation' alt='progress-section'/></div>
      </div>

    </main>
  )
}

export default Home