import { motion } from 'framer-motion';


function App() {
  const text = 'How to create Awesome text animation with '
const dadh1 ={
  hidden: {
    opacity:0
  },
  visible: {
    opacity:1,
    transition: {
      staggerChildren:0.05
    }
  }
}
const span ={
  hidden: {
    opacity:0
  },
  visible: {
    opacity:1,
 
  }
}
  return (
    <div className="App">
        <motion.h1 variants={dadh1} initial='hidden' animate='visible' >
    {text.split('').map((item,index) => {
      return(
        <motion.span variants={span} key={index}>{item}</motion.span>
      )
      // 
    })}

        </motion.h1>
    </div>
  );
}

export default App;
