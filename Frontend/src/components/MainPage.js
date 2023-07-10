import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import DetailedQuestion from './DetailedQuestion'
import Showcase from './Showcase'
import Diary from './Diary'
import QuestionPage from './QuestionPage'

const MainPage = () => {
  return (
    <div className='min-h-screen bg-f5efE6 text-7895B2'>
      <nav className='container mx-auto px-10 py-6'>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-aeBDca mr-8">SoulJourney</h1>
          <ul className='flex items-center gap-16 justify-end list-none'>
            <li><Link className='font-bold hover:text-aeBDca' to='/'>Home</Link></li>
            <li><Link className='font-bold hover:text-aeBDca' to='/detailed-question'>Detailed Question</Link></li>
            <li><Link className='font-bold hover:text-aeBDca' to='/showcase'>Showcase</Link></li>
            <li><Link className='font-bold hover:text-aeBDca' to='/diary'>Diary</Link></li>
          </ul>
        </div>
      </nav>

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detailed-question' element={<DetailedQuestion />} />
        <Route path='/question-page' element={<QuestionPage />} />
        <Route path='/showcase' element={<Showcase />} />
        <Route path='/diary' element={<Diary />} />
      </Routes>
    </div>
  )
}

export default MainPage
