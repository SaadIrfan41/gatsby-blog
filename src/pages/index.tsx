import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { GatsbyImage } from 'gatsby-plugin-image'
import Blogs from '../components/Blogs'
import { graphql } from 'gatsby'
const index = ({ data }: any) => {
  const carousel = data.allContentfulCarousel
  const herosdata = data.allContentfulHeros

  return (
    <>
      <div className='flex h-5/6 mt-1 mb-8'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          loop={true}
          // autoplay
          spaceBetween={1}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <div className='relative'>
            {carousel.edges.map((edge: any, index: number) => {
              return (
                <div key={edge.node.carouselName}>
                  <SwiperSlide
                    className='flex justify-center'
                    key={edge.node.carouselName}
                  >
                    <div>
                      <GatsbyImage
                        className='h-full w-full object-center max-w-7xl rounded-lg '
                        //@ts-ignore
                        image={edge.node.carouselImage.gatsbyImageData}
                        alt='A dinosaur'
                        //@ts-ignore
                        placeholder='blurred'
                      />
                    </div>
                  </SwiperSlide>
                </div>
              )
            })}
          </div>
        </Swiper>
      </div>
      <div>
        <Blogs
          data={herosdata}
          // coverimage={} heroavatar={} herodescription={} herofullname={} heroshortname={}
        />
      </div>
    </>
  )
}
export const query = graphql`
  {
    allContentfulCarousel {
      edges {
        node {
          carouselImage {
            gatsbyImageData
          }
          carouselDescription {
            carouselDescription
          }
          carouselName
        }
      }
    }
    allContentfulHeros {
      edges {
        node {
          heroCoverImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          heroDescription {
            heroDescription
          }
          heroFullName
          heroShortName
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          mainAttribute
        }
      }
    }
  }
`
export default index
