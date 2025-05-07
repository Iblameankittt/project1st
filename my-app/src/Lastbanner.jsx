import React from 'react'
import {FaHandMiddleFinger, FaLeaf} from 'react-icons/fa'
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import {motion , AnimatePresence, delay } from 'framer-motion'
import { BiBasket } from "react-icons/bi";                  
import Logo1 from './assets/images/a6.png'
import Logo2 from './assets/images/leaf.webp'
import Logo3 from './assets/images/a1.png'
import Logo4 from './assets/images/o3.png'
import Logo5 from './assets/images/orange.png'
import Logo6 from './assets/images/guava.webp'
import Logo7 from './assets/images/cherry.png'
import Logo8 from './assets/images/apple.jpeg'
import Logo9 from './assets/images/o2.png'
import Logo10 from './assets/images/a3.avif'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const SlideDown = (delay)=>{
    return{
      initial:{
        y:"-100%",
        opacity:0,
      },
      animate:{
        y:0,
        opacity:1,
        transition:{
          duration:0.7,
          delay: delay,
        }
      }
    }
  }
     
  
  const SlideUp =(delay)=>{
          return{
            initial:{
              y:"100%",
              opacity:0,
            },
            animate:{
              y:0,
              opacity:1,
              transition:{
                duration:0.6,
                delay: delay,
              }
            }
          }
     }





const BannerStyle = {
    backgroundImage:`url(${Logo10})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
}
function Lastbanner() {
  return ( <>
   <motion.section 
              variants={SlideDown(0.9)}
              initial="initial"
              whileInView="animate"
             className='a999'>
               <div  style={BannerStyle} 
                className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl'>
                 <div>

                 </div>
                 <div className='flex flex-col justify-center '>
                   <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                     <motion.h1 
                      variants={SlideUp(1.2)}
                      initial="initial"
                      whileInView="animate"
                     className='text-3xl lg:text-6xl font-extrabold uppercase'>
                       Brand Info
                     </motion.h1>
                     <motion.p 
                      variants={SlideDown(1.2)}
                      initial="initial"
                      whileInView="animate"
                     >
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto facere, voluptate et eaque natus dicta molestias modi qui dolore necessitatibus distinctio nostrum nisi molestiae illo earum doloribus deleniti ab!
                     </motion.p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore necessitatibus cumque error consequuntur atque aperiam, ullam nihil iusto cupiditate, laboriosam optio ipsam nostrum dicta. Quibusdam officiis quasi iusto maxime?
                     <div className='flex justify-center md:justify-start'>
                   <motion.button 
                    variants={SlideUp(1.2)}
                    initial="initial"
                    whileInView="animate"
                   id='a4' className='text-white hover:!scale-110 duration-300 flex items-center gap-2'>
                     Learn more!
                   </motion.button>
                 </div>
                   </div>
   
                 </div>
                </div>
             </motion.section> 
             <motion.footer  className='bg-pink-100 py-12 items-center'
             variants={SlideUp(1.2)}
             initial="initial"
             whileInView="animate"
             >
              <div className='container flex justify-between items-center'>
               <motion.div 
               variants={SlideDown(1.2)}
               initial="initial"
               whileInView="animate"
               id='a6777' className='text-2xl flex items-center gap-2 font-bold uppercase'> 
                 <motion.p 
                 variants={SlideDown(1.2)}
                      initial="initial"
                      whileInView="animate"
                 className='text-red-500'>Fruit</motion.p>
                 <motion.p 
                 variants={SlideUp(1.2)}
                      initial="initial"
                      whileInView="animate"
                 className='text-orange-300'>Store</motion.p>
                   <FaLeaf 
                             className='text-green-500'/>
                 </motion.div>
               <motion.div 
               variants={SlideDown(1.2)}
               initial="initial"
               whileInView="animate"
               className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
         < FaInstagram />
        < FaFacebookF />
         < FaYoutube /> 
                  </motion.div>
              </div>
             </motion.footer>

    </>
         
    
  )
}

export default Lastbanner
