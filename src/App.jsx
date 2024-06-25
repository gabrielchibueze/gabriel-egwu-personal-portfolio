import { Route, Routes, BrowserRouter} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
// About Components
import AAboutOutlet from './Pages/About/AAboutOutlet'
import AboutGabriel from './Pages/About/AboutGabriel'
import BusinessAndInvestment from './Pages/About/BusinessAndInvestment'
import Education from './Pages/About/Education'
import Philantropy from './Pages/About/Philantropy'
// Gallery Components
import AGalleryOutlet from './Pages/Gallery/AGalleryOutlet'
import Photos from './Pages/Gallery/Photos'
import Videos from './Pages/Gallery/Videos'
// Lifestyle Components
import ALifestyleOutlet from './Pages/Lifestyle/ALifestyleOutlet'
import ArtsAndLifestyle from './Pages/Lifestyle/ArtAndLifestyle'
import BusinessAndFinance from './Pages/Lifestyle/BusinessAndFinance'
import MusicAndFashion from './Pages/Lifestyle/MusicAndFashion'
import Technology from './Pages/Lifestyle/Technology'
import TravelAndBooks from './Pages/Lifestyle/TravelandBooks'
// Project Components
import AProjectOutlet from './Pages/Projects/AProjectOutlet'
import Engineering from './Pages/Projects/Engineering'
import FutureProjects from './Pages/Projects/FutureProjects'
import WebDevelopment from './Pages/Projects/WebDevelopment'
// Other Components
import BusinessPrincipleAndEthics from './Pages/BusinessPrincipleAndEthics'
import Contactme from './Pages/Contactme'
import HireMe from './Pages/Hireme'
import LibraryAndPublications from './Pages/LibraryAndPublications'
import News from './Pages/News'
import PageNotFound from './Pages/PageNotFound'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<AboutGabriel/>} />
            <Route path='about' element={<AAboutOutlet/>}>
              <Route index element={<AboutGabriel/>} />
              <Route path='business&investment' element={<BusinessAndInvestment/>} />
              <Route path='education' element={<Education/>} />
              <Route path='philantropy' element={<Philantropy/>} />
            </Route>
            <Route path='gallery' element={<AGalleryOutlet/>}>
              <Route path="photos" element={<Photos/>} />
              <Route path='videos' element={<Videos/>} />
            </Route>
            <Route path='lifestyle' element={<ALifestyleOutlet/>}>
              <Route index element={<ArtsAndLifestyle/>} />
              <Route path='business&finance' element={<BusinessAndFinance/>} />
              <Route path='music&fashion' element={<MusicAndFashion/>} />
              <Route path='technology' element={<Technology/>} />
              <Route path='travel&books' element={<TravelAndBooks/>} />

            </Route>
            <Route path='projects' element={<AProjectOutlet/>}>
              <Route path='engineering' element={<Engineering/>} />
              <Route path='futureprojects' element={<FutureProjects/>} />
              <Route path='webdevelopment' element={<WebDevelopment/>} />
            </Route>

            <Route path='businessprinciple&ethics' element={<BusinessPrincipleAndEthics />}/>            
            <Route path='contactme' element={<Contactme />}/>
            <Route path='hireme' element={<HireMe />}/>
            <Route path='library&publications' element={<LibraryAndPublications/>}/>
            <Route path='news' element={<News />}/>
            <Route path='*' element={<PageNotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
