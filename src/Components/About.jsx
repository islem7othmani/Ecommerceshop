import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import about from '../Images/abut.jpg'
import banner4 from '../Images/banner4.jpg'

const AboutUsPage = () => {
  return (
    <>
    <Nav/>
    <div className="bg-gray-100 min-h-screen">
     

    <div className='bg-black '>
           <img src={banner4} alt="" className='relative w-full h-56 bg-black opacity-20' />
           <h1 className='absolute text-white top-36 left-96 font-bold text-5xl'># Know more about us #</h1>
    </div>


      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8 flex items-center">
          <div className="flex-shrink-0">
            <img
              src={about}
              alt="About Us"
              className="w-64 h-64 rounded-md"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet semper magna, sit amet tristique neque
              dignissim vel. Pellentesque sodales sodales tortor, et condimentum ex convallis et. Donec ac neque urna. Nulla
              facilisi. Sed et justo id nulla scelerisque semper at ut dui.
            </p>
          </div>
        </div>
      </main>
     
    </div>

    <Footer/>
    </>
  );
};

export default AboutUsPage;
