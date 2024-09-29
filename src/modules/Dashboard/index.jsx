import UserImg from '../../assets/user.svg';
import VideoCall from '../../assets/video-call.svg';
import AudioCall from '../../assets/phone-call.svg';
import Add from '../../assets/add.svg';
import { useState } from 'react';

const contacts = [
  {
    id: 0,
    name: 'Nandan',
    status: 'Available',
    img: UserImg,
  },
  {
    id: 1,
    name: 'Nandan',
    status: 'Available',
    img: UserImg,
  },
  {
    id: 2,
    name: 'Nandan',
    status: 'Available',
    img: UserImg,
  },
  {
    id: 3,
    name: 'Nandan',
    status: 'Available',
    img: UserImg,
  },
  {
    id: 4,
    name: 'Nandan',
    status: 'Available',
    img: UserImg,
  },
  {
    id: 3,
    name: 'Nandan',
    status: 'Available',
    img: UserImg,
  },
  {
    id: 4,
    name: 'Nandan',
    status: 'Available',
    img: UserImg,
  },
  
];

export default function Dashboard() {
  const [message, setMessage] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="w-screen flex min-h-svh">
      <div className="w-[30%] h-screen bg-secondary min-h-svh resize-x rounded-md ">
        <div className='flex justify-center items-center my-5'>
          <div className='border border-primary p-[2px] rounded-full'>
            <img src={UserImg} width={75} height={75} alt="User" />
          </div>
          <div className='ml-4'>
            <h3 className='text-2xl mr-2'>Nandan Shrivastava</h3>
            <p className='text-lg font-light'>My Account</p>
          </div>
        </div>
        <hr />
        <div className='text-center font-semibold font-sans mt-2'>
          Messages
        </div>
        <div className='flex justify-center '>
          <input className='rounded-xl p-1 text-center mt-2 w-3/4 hover:outline-none'
            type="search"
            placeholder="Search contacts"
            // value={searchQuery}
            // onChange={e => setSearchQuery(e.target.value)}
          />
          <ul>
            {/* {filteredContacts.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))} */}
          </ul>
        </div>
        <div className='ml-10 overflow-y-auto h-[calc(100vh-200px)] '>
          <div>
            {
              contacts.map(({ id, name, status, img }) => (
                <div key={id} className='flex items-center my-4 border-b-2 pb-3 mr-8'>
                  <div>
                    <img src={img} width={50} height={50} alt={name} />
                  </div>
                  <div className='ml-8'>
                    <h3 className='text-lg'>{name}</h3>
                    <p className='text-sm font-light'>{status}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="w-[70%] bg-blue-200 px-8 ">
        <div className='w-[75%] bg-secondary h-20 rounded-3xl ml-auto mr-auto mt-4'>
          <div className='flex flex-row justify-between items-center mr-3 pt-1'>
            <div className='flex flex-row justify-start items-center gap-4 ml-6 pt-3'>
              <img src={UserImg} width={50} height={50} alt="User" />
              <h1 className='font-medium'>Nandan</h1>
            </div>
            <div className='flex flex-row justify-end items-center mt-2'>
              <img className="mr-3" src={VideoCall} width={30} height={30} alt="Video Call" />
              <img className="mr-3" src={AudioCall} width={30} height={30} alt="Audio Call" />
            </div>
          </div>
        </div>
        <div className='overflow-y-auto h-[calc(100vh-190px)] mt-2'>
          <div className='max-w-80 bg-secondary rounded-b-2xl rounded-r-2xl m-5 p-4 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='max-w-80 bg-primary text-white rounded-b-2xl rounded-l-2xl m-5 p-4 ml-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='max-w-80 bg-secondary rounded-b-2xl rounded-r-2xl m-5 p-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='max-w-80 bg-primary text-white rounded-b-2xl rounded-l-2xl m-5 p-4 ml-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='max-w-80 bg-secondary rounded-b-2xl rounded-r-2xl m-5 p-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className='max-w-80 bg-primary text-white rounded-b-2xl rounded-l-2xl m-5 p-4 ml-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="flex items-center mr-auto ml-auto rounded-2xl p-3 mt-3 w-[90%] bg-light">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow outline-none"
            value={message}
            onChange={handleChange}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Send
          </button>
          <img className='ml-3 hover:scale-125' src={Add} width={30} alt="Add" />
        </div>
      </div>
    </div>
  );
}
