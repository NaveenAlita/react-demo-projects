// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import DisplayTable from './components/DisplayTable';
function App() {
  const [userList, setUserList] = useState([])
  const addToListHandler = (data) => {
    setUserList((prevState) => {
      return [...prevState, data]
    })
  }
  const handleDelete = (index) => {
    setUserList((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  const [toggle, setToggle] = useState(true)
  return (
    <>
      <br />
      <div className='container'>
        <button class="btn btn-primary" aria-current="page" onClick={() => {
          setToggle(prevState => !prevState)
        }}>Display Toggle</button >
        <br />
        <br />
        {toggle &&
          <FormComponent toggel={setToggle} addToListHandlerProps={addToListHandler} />
        }
        {!toggle &&

          <DisplayTable formDataArray={userList} onDelete={handleDelete} />
        }
      </div></>
  );
}

export default App;