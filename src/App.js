import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}
     <body>

      <h1 className="Titel">Hausaufgabe</h1>


      
      <div className="Eltern">

      <div className="Textfeld">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
         invidunt ut <strong>Lorem ipsum</strong> labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
         duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
         amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
         ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
         et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          <a href="https://www.loremipsum.de/" target="_blank" rel="noopener noreferrer">
            Lorem Ipsum
          </a>
      </div>



      <div className="Kurzbeschreibung">

        <h2 className="KurzbeschreibTitel">Hausaufgabe</h2>

        <a
           href="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Homework_-_vector_maths.jpg/960px-Homework_-_vector_maths.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
           target="_blank"
        >
        <img 
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Homework_-_vector_maths.jpg/960px-Homework_-_vector_maths.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail" 
        alt="Hausaufgabe" 
        className="Bild"
         />
         </a>
      

      
      
      
      

      <div className="KurzbeschreibZeile">
        <div className="KurzbeschreibName">Gründung</div>
        <div className="KurzbeschreibInhalt">2026</div>
      </div>
      

      <div className="KurzbeschreibZeile">
        <div className="KurzbeschreibName">Mitarbeiterin</div>
        <div className="KurzbeschreibInhalt">1</div>
      </div>

      <div className="KurzbeschreibZeile">
        <div className="KurzbeschreibName">Standort</div>
        <div className="KurzbeschreibInhalt">Menzingen</div>
      </div>
    </div>
  </div>
      </body> 
        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
