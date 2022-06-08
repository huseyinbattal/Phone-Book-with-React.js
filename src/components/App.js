import '../App.css';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{padding:"5px",border:"3px solid purple", borderRadius:"20px", width:"50%", margin:"40px auto", backgroundColor:"#f8f8f8"}} className="container App">
    <Contact/>
    </div>
  );
}

export default App;
