import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Leetcode',
    github: 'https://leetcode.com/aktamoli0910/',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Codechef',
    github: 'https://www.codechef.com/users/aktamoli0910',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Github',
    github: 'http://github.com/aktamoli0910',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'JIIT Optica Website',
    github: 'https://github.com/aktamoli0910/Fake-Product-Identifier',
    demo: 'https://github.com/aktamoli0910/Jiit-Optica-Website'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Fake Product Identifier',
    github: 'https://github.com/aktamoli0910/Fake-Product-Identifier',
    demo: 'https://github.com/aktamoli0910/Fake-Product-Identifier'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Heal Fast',
    github: 'https://github.com/aktamoli0910/Heal-Fast',
    demo: 'https://github.com/aktamoli0910/Heal-Fast'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Activities</h5>
      <h2>DSA and DEVELOPMENT</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel='noreferrer' target='_blank'>Link</a>
                  {/* <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio