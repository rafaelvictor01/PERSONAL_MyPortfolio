import { motion } from 'framer-motion'
import React from 'react'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'
import styled from 'styled-components'

interface ISectionCPProps extends IStandardInterface {
  children: JSX.Element
  title?: string
  subtitle?: string
}

/**
 * @author rafaelvictor01
 * @return - tag section personalizada para agrupar as screens
 */
export default function SectionCP(props: ISectionCPProps): JSX.Element {
  return (
    <SectionWrapperSCP>
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
      >
        {props.title && <SectionTitleSCP>{props.title}</SectionTitleSCP>}
        {props.subtitle && (
          <SectionSubtitleSCP>{props.subtitle}</SectionSubtitleSCP>
        )}
        {props.children}
      </motion.section>
    </SectionWrapperSCP>
  )
}

const SectionWrapperSCP = styled.div`
  padding: 1rem 0 4rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 0 2rem;
  }
`

const SectionTitleSCP = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizeForSmallDevices.h1FontSize};
  @media screen and (min-width: 960px) {
    font-size: ${props => props.theme.fontSizeForLargeDevices.h1FontSize};
  }
`

const SectionSubtitleSCP = styled.div`
  text-align: center;
  display: block;
  margin-bottom: ${props => props.theme.marginBottom.mb1};

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }

  font-size: ${props => props.theme.fontSizeForSmallDevices.smallFontSize};
  @media screen and (min-width: 960px) {
    font-size: ${props => props.theme.fontSizeForLargeDevices.smallFontSize};
  }
`
