import Header from "./Header.jsx";
import UserData from "./UserData.jsx";
import CoreConcept from "./CoreConcept.jsx";
import{CORE_CONCEPTS} from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Time to get Started!</h2>
        <ul>
          <CORE_CONCEPTS title = {CORE_CONCEPTS[0].title}
          alt = {CORE_CONCEPTS[0].title}
          description = {CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}/>

          <CORE_CONCEPTS title = {CORE_CONCEPTS[1].title}
          alt = {CORE_CONCEPTS[1].title}
          description = {CORE_CONCEPTS[1].description}
          image = {CORE_CONCEPTS[1].image}/>

           <CORE_CONCEPTS title = {CORE_CONCEPTS[2].title}
          alt = {CORE_CONCEPTS[2].title}
          description = {CORE_CONCEPTS[2].description}
          image = {CORE_CONCEPTS[2].image}/>

           <CORE_CONCEPTS title = {CORE_CONCEPTS[3].title}
          alt = {CORE_CONCEPTS[3].title}
          description = {CORE_CONCEPTS[3].description}
          image = {CORE_CONCEPTS[3].image}/>
        </ul>
        </section>
        </main>
        </div>
  );
}
export default App;