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
                <h1>Nossa Estrutura</h1>
                <p>A Alpha oferece uma estrutura moderna, limpa e espaçosa para suas atividades</p>
            </div>
            <Carousel
                className="carousel-container"
                dots
                arrows
                autoplay={true}
            >
                {spaceDocs.map((item) => (
                    <Card
                        key={item.id}
                        className="space-card"
                        cover={<img alt={item.name} src={item.imageUrl} className="space-image" />}
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

export default Space;
