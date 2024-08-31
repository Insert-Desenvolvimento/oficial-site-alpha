'use client'

import { usePlanStore } from '@/app/store/planDocs';
import React, { useEffect } from 'react';
import "./products.scss"
import { formatCurrency } from '@/utils';

const Products = () => {
    const { planDocs, fetchPlanDocs } = usePlanStore();

    useEffect(() => {
        fetchPlanDocs();
    }, [])
    return (
        <>
            <div className='container-products-info' id='plans'>
                <h1>Nossos Planos</h1>
                <p>Na alpha você tem variedade para manter sua mente e corpo saudavel.</p>
            </div>
            <div className='container-products'>
                <div className='container-pick'>

                    <div className='content-products'>

                        <ul className='products-gallery'>
                            {
                                planDocs.map((plan, index) => (
                                    <li key={index} className='plan-card'>
                                        <span className='name-plan'>{plan.name}
                                            <p className='price'>{formatCurrency(plan.price)}
                                                <span className='frequency'> / Mês</span></p>
                                        </span>

                                        <div className='plan-benefit'>
                                            {plan.description.map((item, index) => (<span className='item-benefit'><img src='/confirm.svg' /><p className='text-benefit' key={index}>{item}</p></span>))}
                                        </div>
                                        <div className='plan-button'>Inscreva-se</div>
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

export default Products;
