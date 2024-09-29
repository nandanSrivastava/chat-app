// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from './modules/Forms/SignIn';
// import SignUp from './modules/Forms/SignUp';
// import Forms from './modules/Forms/SignUp'
import Dashboard from './modules/Dashboard';

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path='/' element={<Forms />} />
    //     <Route path='/Forms/SignIn' element={<SignIn />} />
    //     <Route path='/Forms/SignUp' element={<SignUp />} /> */}
    //     {/* <Route path='/Dashboard' element={<Dashboard />} /> */}
    //     {/* <Route path='/' element={<Forms />} /> */}
    //   </Routes>
    // </Router>
    <Dashboard/>
  )
}

export default App

// {/* <div className='min-h-svh flex flex-col justify-center items-center bg-indigo-600'>
//   <Forms />
// </div> */}