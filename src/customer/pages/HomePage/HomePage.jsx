import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens } from "../../../Data/mens";

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens} sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel data={mens} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens} sectionName={"Women's Shirt"}/>
            <HomeSectionCarousel data={mens} sectionName={"Women's Shoes"}/>
            {/* <HomeSectionCarousel data={mens} sectionName={"Men"}/>
            <HomeSectionCarousel data={mens} sectionName={"Men"}/> */}
        </div>
    </div>
  )
}

export default HomePage ;