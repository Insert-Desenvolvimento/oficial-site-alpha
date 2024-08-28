import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Certifique-se de importar corretamente
import "./banner.scss";
import { getBannerImages } from '@/app/firebase/fireStorage';

const Banner = () => {
    const router = useRouter();
    const [images, setImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const fetchImageBanner = async () => {
        const bannerImages = await getBannerImages();
        setImages(bannerImages);
    };

    useEffect(() => {
        fetchImageBanner();
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [images]);

    const changePage = () => {
        router.push("/register");
    };

    return (
        <div className='container-banner'>
            <img src={images[currentImageIndex]} alt="Banner" />
            <div className="banner-text" onClick={changePage}>
                <h1>Transforme seu estilo de vida com a Alpha</h1>
                <p>Alpha academia oferecendo o que há de melhor para Mar de Espanha e região.</p>
                <div className='register'>
                    Inscreva-se
                </div>
            </div>
        </div>
    );
};

export default Banner;
