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



   const bgStyle=()=>{
    backgroundImage : `url(${Logo9})`
    backgroundPosition : "center";
    backgroundSize : "cover";
    backgroundRepeat:"no-repeat";
    
}



const FadeUp =(delay)=>{
  return{
    hidden:{
      opacity:0,
      y:100,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
        delay:delay,
      }
    }
  }
}
const FadeLeft =(delay)=>{
  return{
    hidden:{
      opacity:0,
      x:100,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
        delay: delay,
      }
    }
  }
}
const FadeRight =(delay)=>{
  return{
    hidden:{
      opacity:0,
      x:-100,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
        delay: delay,
      }
    }
  }
}
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
    title: "Contact",
    path: "/contact",
    delay: 0.5,
  },
] 
const MenuData = [ 
  {
    id:1,
    title: "Fresh Apples!",
    path: "/",
    price :"12",
    img:Logo8,
    delay: 0.3,
  },
  {
    id:2,
    title: "Fresh Oranges!",
    path: "/",
    price :"12",
    img:Logo5,
    delay: 0.6,
  },
  {
    id:3,
    title: "Fresh Guava!",
    path: "/",
    price : "12",
    img:Logo6,
    delay: 0.9,
  },
  {
    id:4,
    title: "Fresh cherry!",
    path: "/",
    price :"12",
    img:Logo7,
    delay: 1.2,
  }
] 

function Navbar() {
   const [open , setOpen] = React.useState(false);
  return (
    <>
      <motion.nav 
      variants={SlideUp(0.2)}
      initial="initial"
      whileInView="animate"
      >
        <motion.div
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="conatiner flex justify-between items-center py-4 md:pt-4">
            {/* logo selection  */}
           <motion.div 
           variants={SlideUp(0.6)}
           initial="initial"
           whileInView="animate"
           id='a2'   className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <motion.p 
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
            className='text-red-500 '>Fruit</motion.p>
            <motion.p 
            variants={SlideDown(0.8)}
            initial="initial"
            whileInView="animate"
            className='text-orange-300 '>Store</motion.p>
            <FaLeaf 
            className='text-green-500'/>
           </motion.div>
            {/* menu selection  */}
            <div className='hidden md:block'>
              <ul  id='a1'  className='flex items-center gap-7 text-gray-600 '>
                {navMenu.map((nav)=>{
                  return  <motion.li 
                  variants={SlideUp(1)}
                initial="initial"
                whileInView="animate"
                  id='a6' key={nav.id} className='text-xl' data-delay={nav.delay}>
                        <a href={nav.path} className='inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{nav.title}</a>
                    </motion.li>
                    
                })}
                <button className='text-4xl hover:bg-red-500 hover:shadow hover:text-white rounded-full p-7 duration-200' ><a href="#">
                  <FaCartShopping /></a>
                </button>
              </ul>
            </div>

            {/* mobile */}
            <div className='md:hidden' onClick={()=>{
              setOpen(!open)
            }}>
              <MdMenu className='text-4xl'/>
            </div>
        </motion.div>
      </motion.nav>
      < AnimatePresence mode='wait'>
          {
            open && (
                <div className='absolute top-20 left-o w-full h-screen z-20'>
                    <div className='text-xl font-semibold uppercase bg-red-500 text-white py-10 m-6 rounded-3xl'>
                        <ul className='flex flex-col items-center gap-10'>
                            <li className='a0' > <a href="#" >Home</a></li>
                            <li className='a0' > <a href="#" >About</a></li>
                            <li className='a0' > <a href="#" >Delivery</a></li>
                            <li className='a0' > <a href="#" >Contact</a></li>
                            <li className='a0' > <a href="#" >Menu</a></li>
                        </ul>
                    </div>
                </div>

            )
          }



      </AnimatePresence>   
         <section 
         id='a8' className='p-24'>
          <div 
  
          className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] ">
            {/* brand info */}
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
              <div  className='text-center md:text-left py-14 space-y-6 lg:max-w-[400px]'>
                <motion.h1 
                variants={SlideUp(1.1)}
                initial="initial"
                whileInView="animate" 
              
                className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose'>Healthy
                <br />
                Fresh <span className='text-orange-400'>Fruits!</span></motion.h1>
                <motion.p 
                variants={SlideUp(1.2)}
                initial="initial"
                whileInView="animate"
                className='text-2xl tracking-wide '>
                  Order Now And Get A Healthy Life And Live Long!
                </motion.p>
                <motion.p 
                variants={SlideDown(1.2)}
                initial="initial"
                whileInView="animate"
                className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore illum ab nobis placeat, rem quasi nisi natus, optio iste cumque debitis, consectetur quos quis unde quo. </motion.p>
              <div className='flex justify-center md:justify-start'>
                <motion.button 
                 variants={SlideUp(1.2)}
                 initial="initial"
                 whileInView="animate"
                id='a4' className='text-white hover:!scale-110 duration-300 flex items-center gap-2'>
                  <span>
                    <BiBasket/>
                  </span>
                  Order Now!
                </motion.button>
              </div>
             </div>
            </div>
            <div className='flex flex-cols justify-center py-14 md:py-0 relative z-10'>
              <motion.img 
              initial={{opacity:0, rotate:75, x:300,y:200}}  
              animate={{opacity:1, rotate:0, x:0, y:0}}
              transition={{duration:1, delay:0.7 , rotate:360,}}
              src={Logo1} className='w-[350px] md:w-[700px] '/>
            </div>
             <div className='w-full md:max-w-[250px]'>
              <motion.img 
              initial={{opacity:0, rotate:20, x:300,y:200}}  
              whileInView={{opacity:1, rotate:0, x:0, y:0}}
              transition={{duration:1, delay:0.7 , rotate:360,}}
              src={Logo2} className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]' />
             </div>
             <div className='w-full md:max-w-[250px]'>
              <motion.img 
              initial={{opacity:0, rotate:20, x:300,y:200}}  
              whileInView={{opacity:1, rotate:0, x:0, y:0}}
              transition={{duration:1, delay:0.7 , rotate:360,}}
              src={Logo3} id='a6' className='absolute  md:top-0  blur-sm opacity-20 rotate-[40deg]' />
             </div>
          </div>
         </section >
         <br /> <br /> <br />
         <div>
         <section className='a67'>
          <motion.div 
            variants={SlideDown(1.2)}
            initial="initial"
            whileInView="animate"
          className='container pt-12 pb-20' id='a77'>
           <motion.h1 
           variants={SlideDown(1.2)}
           initial="initial"
           whileInView="animate"
           className='text-2xl font-extrabold uppercase text-center'> OUR MOST FAMOUS MENU</motion.h1>
          </motion.div>
          <motion.div 
          variants={SlideUp(1.2)}
          initial="initial"
          whileInView="animate"
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9'>
            {MenuData.map((menu)=>{
             return( <motion.div 
              variants={SlideUp(0.7)}
              initial="initial"
              whileInView="animate"
              whileHover={{scale:1.1}}
             className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-4 cursor-pointer'>
                <img src={menu.img} key={menu.id} className='w-[60px] mb-4 scale-110 transform -translate-y-6'/>
               <div className='cursor-pointer'>
                <motion.h1 
                variants={SlideUp(1.4)}
                initial="initial"
                whileInView="animate"
                className='text-lg font-semibold'>{menu.title}</motion.h1>
                <motion.p
                variants={SlideDown(1.4)}
                initial="initial"
                whileInView="animate"
                className='text-lg font-semibold text-amber-500'>{menu.price}</motion.p>
               </div>
              </motion.div>)
            })}  
          </motion.div>
          <br /><br />
          </section></div>
        
          <motion.section 
           variants={SlideDown(0.9)}
           initial="initial"
           whileInView="animate"
          className='s56'>
            <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
             <div>
              <motion.img  
               variants={SlideDown(1.2)}
               initial="initial"
               whileInView="animate"
              src={Logo4} className='w-[300px] md:mx-w-[400px] h-full object-cover' id='a99'/>
             </div>
              <div className='flex flex-col justify-center absolute right-40'>
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
             <br /> <br />
          </motion.section>
          <div>
            <div>
          <motion.section 
           variants={SlideUp(0.9)}
           initial="initial"
           whileInView="animate"
          >
          <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
             <div>
              <motion.img  
              variants={SlideUp(1.2)}
              initial="initial"
              whileInView="animate"
              src={Logo9} className='w-[300px] md:mx-w-[400px] h-full object-cover absolute right-24' id='a98'/>
             </div>
              <div className='flex flex-col justify-around absolute left-40'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]' id='a555'>
                  <motion.h1 
                   variants={SlideUp(1.2)}
                   initial="initial"
                   whileInView="animate"
                  className='text-3xl lg:text-6xl font-extrabold uppercase'>
                    about food
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
             <br /> <br />
          </motion.section>
          </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <br />
          <br />
          <br />
          <br />
          
          
    </>
  )
}

export default Navbar
