'use client'

import { usePlanStore } from '@/app/store/planDocs';
import React, { useEffect } from 'react';
import "./products.scss"
import { formatCurrency } from '@/utils';
import { useRouter } from 'next/navigation';

const Products = () => {
    const { planDocs, fetchPlanDocs } = usePlanStore();
    const route = useRouter()
    useEffect(() => {
        fetchPlanDocs();
    }, [])

    const changePage = () => {
        route.push("/register");
    };
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
                                                <span className='frequency'> {plan.name !== "Avulso" ? "/Mês" : "/ Dia"}</span></p>
                                        </span>

                                        <div className='plan-benefit'>
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

export default Products;
