'use client'

import React, { useEffect } from 'react';
import "./combination.scss"
import { formatCurrency } from '@/utils';
import { useCombinationStore } from '@/app/store/combinationDocs';
import { useRouter } from 'next/navigation';

const Combination = () => {
    const { combinationDocs, fetchCombinationDocs } = useCombinationStore();

    const route = useRouter();

    useEffect(() => {
        fetchCombinationDocs();
    }, [])

    const changePage = () => {
        route.push("/register");
    };
    return (
        <>
            <div className='container-products-combo-info' id='plans'>
                <h1>Nossos Combos</h1>
                <p>Pensando em você que quer estar com o corpo sempre em movimento.</p>
            </div>
            <div className='container-products-combo'>
                <div className='container-pick-combo'>

                    <div className='content-products-combo'>

                        <ul className='products-combo-gallery'>
                            {
                                combinationDocs.map((plan, index) => (
                                    <li key={index} className='plan-card'>
                                        <span className='name-plan'>{plan.name}
                                            <p className='price-combo'>{formatCurrency(plan.price)}
                                                <span className='frequency'> / Mês</span></p>
                                        </span>

                                        <div className='plan-benefit-combo'>
                                            {plan.description.map((item, indexDesc) => (<span className='item-benefit' key={indexDesc}><img src='/confirm.svg' /><p className='text-benefit'>{item}</p></span>))}
                                        </div>
                                        <div className='plan-button' onClick={changePage}>Inscreva-se</div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Combination;
