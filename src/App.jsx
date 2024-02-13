import Header from './components/Header'
import TechnologyStack from './components/TechnologyStack'
import { techs } from './data'

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <section>
          <h3>Мій стек технологій:</h3>
          {console.log(TechnologyStack)}
          <ul>
            <TechnologyStack title={techs[0].title} description={techs[0].description}/>
            <TechnologyStack {... techs[1]} />
            <TechnologyStack {... techs[2]} />
            <TechnologyStack {... techs[3]} />
          </ul>
        </section>
      </main>
    </div>
  )
}
