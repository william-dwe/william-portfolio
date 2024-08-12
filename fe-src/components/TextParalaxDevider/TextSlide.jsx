'use client'
import { useTransform, motion } from 'framer-motion';
import {ChevronDoubleRightIcon, ChevronDoubleLeftIcon} from '@heroicons/react/16/solid';

const TextSlide = (props) => {
    const direction = props.direction == 'left' ? 1 : -1;
    const translateX = useTransform(props.progress, [0, 1], [props.speed * direction, -props.speed * direction])
    return (
      <motion.div style={{x: translateX, left: props.left}} className={"relative flex whitespace-nowrap font-extrabold " + props.className }>
        <Phrase text={props.text} direction={props.direction}/>
        <Phrase text={props.text} direction={props.direction}/>
        <Phrase text={props.text} direction={props.direction}/>
        <Phrase text={props.text} direction={props.direction}/>
        <Phrase text={props.text} direction={props.direction}/>
        <Phrase text={props.text} direction={props.direction}/>
        <Phrase text={props.text} direction={props.direction}/>
      </motion.div>
    )
  }
  
  const Phrase = ({text, direction}) => {
  
    return (
      <div className={'px-5 flex gap-5 items-center'}>
        <p className='text-6xl'>{text}</p>
        { direction == 'left' ? <ChevronDoubleLeftIcon className='h-14'/> : <ChevronDoubleRightIcon className='h-14'/> } 
      </div>
    )
  }

  export default TextSlide;