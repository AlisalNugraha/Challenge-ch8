import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className="col-8 "> 
          <h2>Data Player</h2>
          <table class="table border">
             <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Experience</th>
    </tr>
             </thead>
             <tbody>
    <tr>
      <th scope="row">1</th>
      <td>admin1</td>
      <td>admin1@gmail.com</td>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>admin2</td>
      <td>admin2@gmail.com</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>admin3</td>
      <td>admin3@gmail.com</td>
      <td>5</td>
    </tr>
             </tbody>
          </table>
          </div>
          <div className="col-4 border p-4"> 
          <h2>Form Player</h2> 
            <form>
              <div className="mb-3">
                  <label for="Username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username"/>
                </div>
                <div className="mb-3">
                  <label for="Password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password"/>
                </div>
                <div class="mb-3">
                  <label for="Email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                  <label for="exp" className="form-label">Experience</label>
                  <input type="number" className="form-control" id="experience"/>
                </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
