import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
         <Video
          likes={165667}
          messages={57}
          shares={30870}
          name="the.jeronimo"
          description ="Brecker o goleiro"
          music='Épicas'
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
         />
        <Video
          likes={1599}
          messages={75}
          shares={516}
          name="the.jeronimo"
          description ="Brecker o goleiro"
          music='Épicas'
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
         /><Video
         likes={852}
         messages={456}
         shares={753}
         name="the.jeronimo"
         description ="Brecker o goleiro"
         music='Épicas'
         url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
         </div>
    </div>
  );
}

export default App;
