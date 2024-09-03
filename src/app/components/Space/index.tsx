import React, { useEffect } from 'react';
import { useSpaceStore } from '@/app/store/spaceDocs';
import { Carousel, Card } from 'antd';
import "./space.scss";

const Space = () => {
    const { spaceDocs, fetchSpaceDocs } = useSpaceStore();

    useEffect(() => {
        fetchSpaceDocs();
    }, []);

    return (
        <div className="container-space" id='space'>
            <div className="container-space-info">
                <h1>Nosso Espaço é projetado para seu <span className='qualify-space'>conforto e praticidade.</span></h1>
                <p>A Alpha oferece uma estrutura moderna, limpa e espaçosa para suas atividades</p>
            </div>
            <div className='gallery-img-space'>
                <ul className='gallery'>
                    {
                        spaceDocs.map((item, index) => (
                            <li key={index} className='space-card'>
                                <img alt={item.name} src={item.imageUrl} className="space-image" />
                                <div className='text-card'>
                                    <p className='space-text-name'>
                                        {item.name}
                                    </p>
                                    <p>{item.description}</p>
                                </div>
                            </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Space;
