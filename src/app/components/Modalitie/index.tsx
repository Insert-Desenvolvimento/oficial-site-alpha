import { useModalityStore } from '@/app/store/modalitieDocs';
import React, { useEffect } from 'react';
import "./modalitie.scss"
import { BicepsFlexed, Dumbbell, Play, Activity, Zap } from 'lucide-react';

const Modalitie = () => {
    const { modalityDocs, fetchModalityDocs } = useModalityStore();


    useEffect(() => {
        fetchModalityDocs();
    }, [])


    return (
        <div className='container-modalitie' id='home'>
            <div className='container-modality-info'>
                <h1>Pensamos cada <span className='qualify-modality'>modalidade</span> com atenção para seu desenvolvimento.</h1>
                <p>Temos diversas modalidades em nossa academia para que você tenha o melhor desenvolvimento do seu corpo e sua saúde</p>
            </div>
            <div className='container-list-modalities'>
                <div className='content-img'></div>
                <ul className='list-mini-card-modality'>
                    {
                        modalityDocs.map(item => (
                            <li key={item.id} className='mini-card-modality'>

                                {item.name}
                                <span>
                                    {item.name === "Luta" ? <BicepsFlexed size={"38px"} /> :
                                        item.name === "Dança" ? <Play size={"38px"} /> :
                                            item.name === "Musculação" ? <Dumbbell size={"38px"} /> :
                                                item.name === "Funcional" ? <Activity size={"38px"} /> :
                                                    <Zap size={"38px"} />}
                                </span>

                            </li>
                        )
                        )
                    }
                </ul>
            </div>

        </div>
    );
}

export default Modalitie;
