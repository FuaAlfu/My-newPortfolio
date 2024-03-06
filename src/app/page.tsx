import React from 'react'
import {aboutMeData} from './data/data';

const AboutMePage = () =>{
    return (
      <main className='flex flex-col items-center'>
          <section className='flex flex-row w-10/12 mt-10 mb-6 items-center'>
              <div className='w-1/3'>
                  <Image 
                  priority={false}
                  width={640}
                  height={960} 
                  aria-label={"Image of .."} 
                  alt={"Image of .."}
                  src={'/images/..'}
                  />
              </div>
              <div> 
                  <h2>{aboutMeData.title}</h2>
                  <p>{aboutMeData.body}</p>
              </div>
          </section>
          {/*  */}
          <section>
              <p>{aboutMeData.highlightedBody}</p>
          </section>
          {/*  */}
          <section>
              <div>
                  <p>{aboutMeData.body2}</p>
              </div>
              <div> Image</div>
          </section>
      </main>
    )
}

export default AboutMePage
