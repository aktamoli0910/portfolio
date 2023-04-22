import React from 'react'
import './services.css'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My</h5>
      <h2>Skill Set</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Data Structures and Algorithms</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Top 9% in Leetcode Contests Ratings</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solved 500+ Questions on Leetcode</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solved 400+ Questions across Other Platforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>4* on Codechef</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>5* on Hackerrank</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed the Official website of JIIT Optica Chapter</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed JSCOP 2022 Official Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skilled in Frontend Development and made several projects</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skliled in Backend Development as well</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Open Source</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project Mentor at Girlscript Summer of Code 2022</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project Mentor at Script Winter of Code 2.0</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Top 44/1000+ participants in Njack Winter of Code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contributed to the project KaroVerify under Script Fellowship Program</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services