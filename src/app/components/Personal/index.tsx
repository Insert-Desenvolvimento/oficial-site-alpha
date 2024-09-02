import React, { useEffect } from 'react';
import { Carousel, Card } from 'antd';
import "./personal.scss";
import { usePersonalStore } from '@/app/store/personalDocs';

const Personal = () => {
    const { personalDocs, fetchPersonalDocs } = usePersonalStore();

    useEffect(() => {
        fetchPersonalDocs();
    }, []);

    return (
        <>
            <div className='container-backgound'>
                <div className="container-personal-info">
                    <h1>Nós temos os <span className='personal-target'>melhores</span> profissionais de <span className='personal-target'>Mar de Espanha e região</span>.</h1>
                    <p>A equipe Alpha é treinada e capacitada para te atender da melhor forma. Todos nosso profissionais são formados e certificados.</p>
                </div>
                <div className="container-personal" id='group'>
                    <ul className='gallery-personal'>
                        {
                            personalDocs.map((item, index) => (
                                <li key={index} className='container-card'>
                                    <div className='container-img'>
                                        <img alt={item.name} src={item.imageUrl} className="personal-image" />
                                    </div>
                                    <div className='container-text-personal'>
                                        <p>{item.name}</p>
                                        <p className='qualify'>Personal Trainer</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Personal;
