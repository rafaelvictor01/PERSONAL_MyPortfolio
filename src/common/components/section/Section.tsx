import { motion } from 'framer-motion'
import React from 'react'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'

interface ISectionCPProps extends IStandardInterface {
  children: JSX.Element
}

/**
 * @author rafaelvictor01
 * @return - tag section personalizada para agrupar as screens
 */
export default function SectionCP(props: ISectionCPProps): JSX.Element {
  return (
    <motion.section
      id={props.id}
      className={props.className}
      initial={'hidden'}
      animate={'visible'}
      variants={{
        hidden: { opacity: 0, scale: 1 },
        visible: { opacity: 1, scale: 1 }
      }}
      transition={{
        delay: 0.5
      }}
      style={{ padding: '2rem 0 4rem' }}
    >
      {props.children}
    </motion.section>
  )
}
