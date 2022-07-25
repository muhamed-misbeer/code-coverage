import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [detail, setDetails] = useState({
    name: "",
    age: 0
  });
  const [error, setError] = useState("")
  const handleSubmit = () => {
    if (detail.name === "")
      setError('Name is Required');
    else if (detail.age < 18)
      setError('Please enter the valid age');
    else if (detail.age > 99)
      setError("Please enter the valid age");
    else {
      toast.success('Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError("")
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <ToastContainer />
      <div className='w-25'>
        <div className="mb-3 mt-3">
          <label>Name</label>
          <input type="text" value={detail.name} className="form-control" onChange={e => { setDetails({ ...detail, name: e.target.value }); setError("") }} data-testid="name" />
        </div>
        <div className="mb-3 mt-3">
          <label>Age</label>
          <input type="text" value={detail.age} className="form-control" onChange={e => { setDetails({ ...detail, age: e.target.value }); setError("") }} data-testid="age" />
        </div>
        <p className='text-danger' data-testid="paragraph">{error}</p>
        <button className='btn btn-primary' type="submit" onClick={handleSubmit} data-testid="button">Submit</button>
      </div>
    </div>
  );
}

export default App;
