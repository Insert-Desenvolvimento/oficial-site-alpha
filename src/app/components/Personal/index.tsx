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
        <div className="container-personal">
            <div className="container-personal-info">
                <h1>Nossa Equipe</h1>
                <p>A equipe Alpha é treinada e capacitada para te atender da melhor forma. Todos nosso profissionais são formados e certificados.</p>
            </div>
            <Carousel
                className="carousel-container"
                dots
                arrows
                autoplay={false}
            >
                {personalDocs.map((item) => (
                    <Card
                        key={item.id}
                        className="personal-card"
                        cover={<img alt={item.name} src={item.imageUrl} className="personal-image" />}
                    >
                        <Card.Meta
                            title={item.name}
                            description={item.description}
                        />
                    </Card>
                ))}
            </Carousel>
        </div>
    );
};

export default Personal;
