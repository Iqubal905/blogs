import React from 'react';

const AboutPage = () => {
    return (
        <div>
       <div
    className="  py-12   "
    style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/963438020/photo/surreal-plants-background.webp?b=1&s=170667a&w=0&k=20&c=tycWywCsSK6AxPUl8XKxV7TRALzzZ2PtfPanSlca4k8=")', // Replace with your actual image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // This is the key property for fixing the background image
     
    }}
  >
      <div className=' absolute  p-12  z-0   top-0 left-0 right-0 bg-black  opacity-50  text-white'>

      </div>
      <div className=' absolute  z-20 right-0 left-0'>
          <h2 className=' text-center text-3xl font-bold text-white  '>About</h2>
          </div>
      
          </div>
            
        </div>
    );
};

export default AboutPage;