import { useModalityStore } from '@/app/store/modalitieDocs';
import React, { useEffect } from 'react';
import "./modalitie.scss"

const Modalitie = () => {
    const { modalityDocs, fetchModalityDocs } = useModalityStore();


    useEffect(() => {
        fetchModalityDocs();
    }, [])


    return (
        <div className='container-modalitie' id='home'>
            <div className='container-modality-info'>
                <h1>Modalidades</h1>
                <p>Temos diversas modalidades em nossa academia para que você tenha o melhor desenvolvimento do seu corpo e sua saúde</p>
            </div>
            <div className='container-list-modalities'>
                <ul>
                    {
                        modalityDocs.map(item => (<li key={item.id}>{item.name}</li>))
                    }
                </ul>
            </div>

        </div>
    );
}

export default Modalitie;
