import { motion } from 'framer-motion'

const FramerComponent = () => {
  return (
     <div className="flex">
     { [1,2,3].map(x => { return <motion.div 
        className="bg-red-800 font-bold text-white rounded-full m-4 pl-4 h-8 w-8"
        animate={{opacity: 1}} 
        initial={{opacity: 0}}
      />
      })}
     </div>
  )
}

export default FramerComponent