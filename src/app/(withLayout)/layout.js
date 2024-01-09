
import Footer from "../computents/Footer";
import Navbar from "../computents/Navbar";



const Withlayout = ({children}) => {
    return (
        <div>
  
   <div className='container mx-auto relative'>
<div className=' absolute  z-50 right-0 left-0'>
<Navbar/>
</div>
      <div>  {children}</div>

      <Footer/>
        
 </div>

   
        </div>
    );
};

export default Withlayout;