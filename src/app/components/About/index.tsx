"use client"
import { usePageTextStore } from '@/app/store/pageTextDocs';
import React, { useEffect } from 'react';
import "./about.scss"

const About = () => {
    const { pageText, fetchPageText } = usePageTextStore();


    useEffect(() => {
        fetchPageText();
    }, [])

    const aboutText = pageText.filter(item => item.title === "Quem Somos")

    return (
        <>
            <div id='about'>
                <div className='container-about'>
                    <div className='content-all'>
                        <div className='container-about-info'>
                            <h1>{aboutText[0]?.title}</h1>
                            <h2>{aboutText[0]?.subtitle}</h2>
                        </div>
                        <div className='container-text-about'>
                            <p>
                                {aboutText[0]?.text}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='separator'></div>
        </>
    );
}

export default About;
