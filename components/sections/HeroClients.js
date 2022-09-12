import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './HeroClients.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import Image from 'next/image'
import Marquee from "react-fast-marquee";





function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}


function HeroClients(props) {
  const { heading, backgroundImage, backgroundImageAltText, heroImage, heroImageAltText, tagline, ctas, clients } = props
  
  
  let heroImgDimensions = urlFor(heroImage).url().split(/[-./]+/)[8].split('x')
  let heroWidth = heroImgDimensions[0];
  let heroHeight = heroImgDimensions[1];

  let backgroundImgDimensions = urlFor(backgroundImage).url().split(/[-./]+/)[8].split('x')
  let backgroundWidth = backgroundImgDimensions[0];
  let backgroundHeight = backgroundImgDimensions[1];

  //let clientImg = urlFor(client.logo).url().split(/[-./]+/)[8].split('x')
  
  
  
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.heroImage} style={{maxWidth: `${heroWidth}px`}}>
          <Image  priority layout="responsive" width={heroWidth} height={heroHeight} src={urlFor(heroImage).auto('format').url()} alt={heroImageAltText} />
        </div>        

        </div>
        </div>
      <div className={styles.clients} id="Clients">
                <h2 > Trusted by</h2>
        {clients &&
          
          (
                    <div className={styles.clientsContainer}>
                        <Marquee gradientWidth ="0" gradient="false" pauseOnHover="true" speed="50">
                            {clients.map(c => (
                                <a className={styles.clientLink} href={c.url} key={c._id} target="_blank" rel="noreferrer">
                                    <div className={styles.imgContainer}>
                                        <Image className={styles.clientImg} src={urlFor(c.logo).height(35).auto('format').url()} alt={c.name} layout='fill' objectFit="contain" objectPosition="center"/>
                                    </div>
                                </a>
                            ))}                      
                        </Marquee>                        
                    </div>                    
                )}
            </div>
      <Image className={styles.heroBackground} priority layout="fill" objectFit="cover" objectPosition="center" src={urlFor(backgroundImage).width(2000).auto('format').url()} alt={backgroundImageAltText}  />

    </div>
  )
}

HeroClients.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  backgroundImageAltText: PropTypes.string,
  heroImage: PropTypes.object,
  heroImageAltText: PropTypes.string,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}




export default HeroClients

