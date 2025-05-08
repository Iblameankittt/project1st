import React from 'react'
import Logo from "./images/logo1.webp"
import {motion} from 'framer-motion'
import Logo2 from './images/beef.png'
import Logo6 from './images/salad.png'
import Logo11 from './images/juice.png'
import Logo12 from './images/cuss.png'
import Logo14 from './images/chick.png'
import Logo15 from './images/logo3.webp'
import { BiBasket } from "react-icons/bi"; 
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";




const navMenu = [ 
  {
    id:1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id:2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id:3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id:4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id:5,
    title: "Contact us",
    path: "/contact",
    delay: 0.5,
  },
] 
const SildeDown = (delay)=>{
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
   const HotdessertData=[
       {
        id:1,
        name:"Hot Dessert",
        img:Logo11,
        price:"$1200",
        delay:0.7
       },
       {
        id:2,
        name:"Hot Dessert",
        img:Logo12,
        price:"$1200",
        delay:1.2
       },
       {
        id:3,
        name:"Hot Dessert",
        img:Logo6,
        price:"$1200",
        delay:0.9
       }




      ]
const Navbar = () => {
  return (
    <>
       <nav>
        <motion.div 
          variants={SildeDown(1.2)}
          initial="initial"
          animate="animate"
        id='con'>
           {/* logo section */}
           < motion.img 
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:0.7 , delay: 0.5}}
            src={Logo} className="navbar" />
            <motion.h1 
             variants={SlideUp(0.3)}
             initial="initial"
             whileInView="animate" id='yummy1'>__TTThe BezT in the WezT</motion.h1>
           {/* menu section */}
           <div>
             <ul className='flex gap-10 bg-rgb(235, 235, 217)'>
              {
                navMenu.map((menu)=>{
                   return( <motion.li
                    variants={SildeDown(menu.delay)}
                    initial="initial"
                    animate="animate"
                    key={menu.id} className='nav-menu' id='buut' data-delay={menu.delay}>
                       <a href={menu.path} className='inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{menu.title}</a></motion.li>)
                })
              }
               <button className='text-4xl hover:bg-red-500 hover:shadow hover:text-white rounded-full p-2 duration-200' ><a href="#">
                  <BiBasket /></a>
                </button>
             </ul>
             </div>
           </motion.div>
           {/* button section */}
       
       
       </nav>
       {/* <hr className='line'/> */}
       
       <motion.div 
         variants={SlideUp(1.2)}
         initial="initial"
         animate="animate"
       id='main' className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between relative top-200px">
                {/* text content here */}
               <div>
                <motion.h1
                  variants={SlideUp(0.5)}
                  initial="initial"
                  whileInView="animate"
                                          id='yummy' className='relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase '>YummY
                 {/* <span>  <img src={Logo4} className='leaf' /></span> */}
                </motion.h1>
               <motion.h1
                variants={SildeDown(1.2)}
                initial="initial"
                animate="animate"
               className='text-5xl lg:text-7xl xl:text-8xl font-bold uppercase'>BREAKFAST</motion.h1>
               <motion.p
                variants={SlideUp(1.8)}
                initial="initial"
                whileInView="animate"
                id='para' className='text-xl p-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum cum quae architecto ex perferendis, harum porro obcaecati, nisi consequatur modi deleniti provident distinctio, culpa hic quam nesciunt minus rerum!</motion.p>
                <span>  <div className='flex justify-center md:justify-start'>
                <button id='a44' className='text-white hover:!scale-110 duration-300 flex items-center gap-2'>
                  <span>
                    <BiBasket/>
                  </span>
                  Order Now!
                </button>
              </div></span>
               </div>
                {/* images  here */}
                <div>
                  <motion.img  
                   initial={{opacity:0, rotate:20, x:300,y:200}}  
                   whileInView={{opacity:1, rotate:0, x:0, y:0}}
                   transition={{duration:1, delay:0.7 , rotate:360,}}
                  src={Logo2} className='w-[350px]'/>
                  <br />
                  <br />
                   <motion.img
                   initial={{opacity:0, rotate:20, x:300,y:200}}  
                   whileInView={{opacity:1, rotate:0, x:0, y:0}}
                   transition={{duration:1, delay:0.7}}
                  src={Logo14} id='a5'  className='w-[350px]'/>
                   <motion.img
                   initial={{opacity:0, rotate:20, x:300,y:200}}  
                   whileInView={{opacity:1, rotate:0, x:0, y:0}}
                   transition={{duration:1, delay:0.7}}
                  src={Logo6}   className='w-[350px]'/>
                   
                   <div id='a1'></div>
               
                
            </div>
        
              </motion.div>
              <br /><br />
              <section>
                <div className="container relative align-middle justify-between ">
                  <div className="relative justify-center align-middle w-full inline-block">
                  {/* image section */}
                  <motion.img
                  initial="initial"
                  variants={SildeDown(1.2)}
                  animate="animate"
                  whileHover={
                    {
                      scale:1.2,
                      rotate:30,
                      x:50,
                      y:-50,
                    }
                  }
                  transition={{
                    duration:0.7,
                    delay:0.5,
                    scale: {duration: 0.5}
                  }}
                  src={Logo12} className=' h-[300px] w-[300px] relative z-10 inline-block'  /><span>
                  <motion.img
                  initial="initial"
                  variants={SlideUp(1.2)}
                  animate="animate"
                  whileHover={
                    {
                      scale:1.2,
                      rotate:30,
                      x:50,
                      y:-50,
                    }
                  }
                  transition={{
                    duration:0.7,
                    delay:0.5,
                    scale: {duration: 0.5}
                  }}
                  src={Logo14} className=' h-[300px] w-[300px] relative z-10 inline-block '  /></span>
                  <motion.img
                  initial="initial"
                  variants={SildeDown(1.2)}
                  animate="animate"
                  whileHover={
                    {
                      scale:1.2,
                      rotate:30,
                      x:50,
                      y:-50,
                    }
                  }
                  transition={{
                    duration:0.7,
                    delay:0.5,
                    scale: {duration: 0.5}
                  }}
                  src={Logo2} className=' h-[300px] w-[300px] relative z-10 inline-block'  />
                  <motion.div
                  variants={SildeDown(1.2)}
                  initial="initial"
                  animate="animate"
                  className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[50%] h-[320px] bg-amber-200 rounded-full'>

                  </motion.div>
                  </div>
                  {/* <div className='space-y-5 lg:max-w-[400px]'> */}
                  <motion.h1 
                   variants={SildeDown(1.2)}
                   initial="initial"
                   animate="animate"
                  id='the-bezt' className='text-6xl uppercase font-extrabold'>The bezt In the Wezt</motion.h1>
                  <motion.p 
                   variants={SlideUp(1.4)}
                   initial="initial"
                   animate="animate"
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe beatae corrupti quaerat id eius minus, quae, culpa excepturi voluptatibus ex odit consequuntur necessitatibus quas sit vero in reiciendis vitae! Mollitia accusamus deleniti magnam dolor doloribus, vero quasi maiores repellendus. Aliquid a temporibus saepe inventore quis quos eius magnam aut ipsam!</motion.p>
                  {/* </div> */}
                </div>
              </section>
           <section>
            <div className="container py-24">
              <motion.h3
               variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
              className='text-4xl text-center font-extrabold font-serif uppercase'>OuR pOPULAr RecipE</motion.h3>
               {/* car selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                  {HotdessertData.map((item)=>{
                       return(  <div className="group space-y-3 text-center bg-amber-50 shadow-xl p-3 rounded-xl">
                           <img src={item.img} className='w-44 mx-auto img-shadow group-hover:scale-x-110
                           group-hover:translate-y-[-50px]
                           group-hover:translate-x-10
                           group-hover:rotate-[50deg] transition-all duration-400
                           
                           ' />
                           <div>
                            <button className='border-t-neutral-800 group-hover:mb-3 opacity-40 group-hover:opacity-10'>Buy now</button>
                            <p className='text-xl font-semibold text-shadow-amber-900'>{item.name}</p>
                            <p className='text-xl font-bold text-amber-300'>{item.price}</p>
                           </div>

                       </div> )
                  })}
                </div>


            </div>
           </section>
           <br /><br /><br /> 
                        <motion.footer className='bg-amber-400'
                          variants={SildeDown(1.2)}
                          initial="initial"
                          animate="animate"
                        >
              
             <div className="container py-14">
              <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
             {/* brand info */}
             <div className='space-y-3 lg:max-w-[300px]:'>
              <motion.img 
                variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
              src={Logo15} alt="" />
              <motion.p 
                variants={SildeDown(1.2)}
                initial="initial"
                animate="animate"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis quidem officiis tempora minus, quis dolorem at tenetur deleniti delectus, minima illum nostrum asperiores voluptatibus dolore reiciendis labore, qui error!</motion.p>
              <motion.a 
                variants={SildeDown(1.2)}
                initial="initial"
                animate="animate"
              href="#" className='inline-block mt-6 text-xl'>Contact@gmail.com</motion.a>
             </div>
             <div className='col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6'>
              <div>
                <motion.h1 
                  variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
                className='text-xl font-semibold inline-block'>Quick lines</motion.h1>
                <motion.ul 
                  variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
                className='space-y-3 mt-6'>
                  <li className='footer-link'>Home</li>
                  <li className='footer-link'>Contact</li>
                  <li className='footer-link'>About</li>
                  <li className='footer-link'>Food Authority</li>
                  <li>    < FaInstagram />
           < FaFacebookF />
         <   FaYoutube /> 
</li>
                </motion.ul>
                <motion.h1 
                  variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
                className='text-xl font-semibold inline-block'>Quick lines</motion.h1>
                <motion.ul 
                  variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
                className='space-y-3 mt-6'>
                  <li className='footer-link'>Home</li>
                  <li className='footer-link'>Contact</li>
                  <li className='footer-link'>About</li>
                  <li className='footer-link'>Food Authority</li>
                  <li>    < FaInstagram />
           < FaFacebookF />
         <   FaYoutube /> 
</li>
                </motion.ul>
                <motion.h1 
                  variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
                className='text-xl font-semibold inline-block'>Quick lines</motion.h1>
                <motion.ul 
                  variants={SildeDown(1.2)}
               initial="initial"
               animate="animate"
                className='space-y-3 mt-6'> 
                  <li className='footer-link'>Home</li>
                  <li className='footer-link'>Contact</li>
                  <li className='footer-link'>About</li>
                  <li className='footer-link'>Food Authority </li>
                  <li>    < FaInstagram />
           < FaFacebookF />
         <   FaYoutube /> 
         </li>
                </motion.ul>
              </div>
             </div>
             </div>
             </div>
              <div>
            
       
              </div>

             </motion.footer>






    </>
  )
}

export default Navbar
