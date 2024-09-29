import { useState } from 'react';
import eyeIcon from '../../assets/eye-empty.svg';
import eyeHideIcon from '../../assets/eye-password-hide.svg';

export default function Forms() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <form className='w-full mr-auto ml-auto mt-20 md:w-3/4 lg:w-1/4 flex flex-col bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-gray-900 rounded-xl p-5 text-center'
            onSubmit={handleSubmit}>
            <h1 className='text-3xl font-extrabold mb-4 underline mt-6'>Login</h1>
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
            <button className='bg-white h-10 w-1/2 rounded-2xl mr-auto ml-auto mb-10 mt-4 hover:bg-blue-600' type="submit">Login</button>
        </form>
    )
}

