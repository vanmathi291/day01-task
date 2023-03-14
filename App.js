
import './App.css';


export default function App() {
  return (
    <div className="App">
    <Details/>
    <Details/>
    </div>
  );
}

function Details(){
return(
  <div className="card">
    <div>
    <h5>FREE</h5>
    <h1>$0</h1><h5>/month</h5>
    <h3><span>✔</span>single user</h3>
    <h3><span>✔</span>5GB storage</h3>
    <h3><span>✔</span>unlimited public projects</h3>
    <h3><span>✔</span>community Access</h3>
    <h3><span>❌</span>unlimited private projects</h3>
    <h3><span>❌</span>Dedicated phone support</h3>
    <h3><span>❌</span>Free subdomain</h3>
    <h3><span>❌</span>Monthly status Reports</h3>
    <button>BUTTON</button>
    </div>

    <div>
    <h5>PLUS</h5>
    <h1>$9</h1><h5>/month</h5>
    <h3><span>✔</span>5 Users</h3>
    <h3><span>✔</span>50GB storage</h3>
    <h3><span>✔</span>unlimited public projects</h3>
    <h3><span>✔</span>community Access</h3>
    <h3><span>✔</span>unlimited private projects</h3>
    <h3><span>✔</span>Dedicated phone support</h3>
    <h3><span>✔</span>Free subdomain</h3>
    <h3><span>❌</span>Monthly status Reports</h3>
    <button>BUTTON</button>
    </div>
  </div>
)
}

