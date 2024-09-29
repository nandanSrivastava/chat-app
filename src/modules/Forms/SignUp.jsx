import { useState } from 'react';
import eyeIcon from '../../assets/eye-empty.svg';
import eyeHideIcon from '../../assets/eye-password-hide.svg';
// import SignIn from './SignIn';
import { Link } from 'react-router-dom';


export default function Forms() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <form className='w-1/4 flex flex-col text-white bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-gray-900 rounded-xl p-5 text-center mr-auto ml-auto mt-10'
            onSubmit={handleSubmit}>
            <h1 className='text-3xl font-extrabold mb-4 underline'>Sign Up</h1>
            <label htmlFor='name' className='mt-7'>
                Name
            </label>
            <input id='name' className='bg-transparent border-b-2 text-center outline-none mb-3' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor='mobile'>
                Mobile
            </label>
            <input id='mobile' className='bg-transparent border-b-2 text-center outline-none mb-3' type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor='email'>
                Email
            </label>
            <input id='email' className='bg-transparent border-b-2 text-center outline-none mb-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor='password'>
                Password
            </label>
            <div className='relative'>
                <input
                    id='password'
                    className='bg-transparent border-b-2 text-center outline-none mb-3 w-full'
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                    <img
                        src={showPassword ? eyeHideIcon : eyeIcon}
                        alt={showPassword ? "Hide" : "Show"}
                        className='absolute right-0 top-0 w-6 h-6 cursor-pointer'
                        onClick={()=>setShowPassword(!showPassword)}
                    />
            </div>
            <button className='bg-transparent border-2 h-10 w-1/2 rounded-2xl mr-auto ml-auto mt-5 hover:bg-blue-600' type="submit">Submit</button>
            <h1 className='font-bold mt-3 mb-8'>Already have an account?  <Link to="/Forms/SignIn" className='text-blue-700'>Sign in</Link></h1>
        </form>
    )
}

