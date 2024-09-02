"use client"
import { usePageTextStore } from '@/app/store/pageTextDocs';
import React, { useEffect } from 'react';
import { Dumbbell } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { Boxes } from 'lucide-react';
import "./about.scss"
import { Card } from '@/utils';

const About = () => {
    const { pageText, fetchPageText } = usePageTextStore();



    useEffect(() => {
        fetchPageText();
    }, [])

    const aboutText = pageText.filter(item => item.title === "Quem Somos")

    return (
        <>
            <div id='about'>
                <div className='container-about-info'>
                    <h1>{aboutText[0]?.title}</h1>
                    <p>{aboutText[0]?.subtitle}</p>
                </div>
                <div className='container-about'>
                    <div className='content-all'>
                        <section className='content-body-text'>
                            <div className='call-text'>
                                <h1>Porque ser mais um, se você pode ser <span className='destaque'>Alpha</span>. Da nossa historia até a construção da <span className='destaque'>sua história</span>.</h1>
                            </div>
                            <div className='container-text-about'>
                                <p className='text-about'>
                                    {aboutText[0]?.text}
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className='minicard'>
                        <ul className='list-minicard'>
                            {
                                Card.map((item, index) => (
                                    <li key={index} className='item-card'>
                                        <div className='name-container'>
                                            {
                                                item.name === "500" ?
                                                    <Dumbbell color='#efb608' size={"38px"}></Dumbbell>
                                                    : item.name === "14" ? <UsersRound color='#efb608' size={"38px"} />
                                                        : item.name === "120" ? <Wrench color='#efb608' size={"38px"} />
                                                            : item.name === "20" ? <Handshake color='#efb608' size={"38px"} />
                                                                : item.name === "15" ? <Boxes color='#efb608' size={"38px"} /> : <></>
                                            }
                                            <h1 className='card-name'>{item.name}+</h1>
                                        </div>
                                        <p className='card-description'>{item.description}</p>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
