
import './App.css';
import A from "./components/A";
import B from "./components/B";

//değişken veya objenin key i olarak tanımlarken arada - işareti kullanılamıyor.

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <div style={{color:"red", backgroundColor:"antiquewhite", paddingTop:50}}>
        Just go out and talk to a tree. Make friends with it. Those great big fluffy clouds. You don't have to spend all your time thinking about what you're doing, you just let it happen. Work on one thing at a time. Don't get carried away - we have plenty of time. Maybe, just to play a little, we'll put a little tree here. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.
        </div>

        <div class="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
       </div>*/}
       
       <A />
       <B />
       
      </header>
    </div>
  );
}

export default App;
