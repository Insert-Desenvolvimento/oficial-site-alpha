"use client";

import React, { useEffect, useMemo } from "react";
import "./combination.scss";
import { formatCurrency } from "@/utils";
import { useRouter } from "next/navigation";
import { useAnualPlansStore } from "@/app/store/anualPlansDoc";

const AnualPlans = () => {
  const { anualPlansDocs, fetchAnualPlansDocs } = useAnualPlansStore();
  const route = useRouter();

  useEffect(() => {
    fetchAnualPlansDocs();
  }, [fetchAnualPlansDocs]);

  const featuredPlanId = useMemo(() => {
    if (!anualPlansDocs?.length) return null;
    return (
      [...anualPlansDocs].sort((a, b) => (b.economy ?? 0) - (a.economy ?? 0))[0]
        ?.id ?? null
    );
  }, [anualPlansDocs]);

  const changePage = () => {
    route.push("/register");
  };

  return (
    <div className="anual-plan">
      <div className="container-products-combo-info" id="plans">
        <h1>Planos Anuais</h1>
        <p>Mais que um plano, um estilo de vida anual.</p>
      </div>

      <div className="container-products-combo">
        <div className="container-pick-combo">
          <div className="content-products-combo">
            <ul className="products-combo-gallery">
              {anualPlansDocs.map((plan) => {
                const isFeatured = plan.id === featuredPlanId;

                return (
                  <li key={plan.id} className="plan-card">
                    {isFeatured && (
                      <span className="badge-featured">Mais escolhido</span>
                    )}

                    <span className="name-plan-combination">
                      {plan.name}

                      <span className="price-row">
                        <p className="price-combo">
                          {formatCurrency(plan.parcel)}
                        </p>
                        <span className="frequency">/ mês</span>
                      </span>

                      <p className="frase">Plano anual • cobrança mensal</p>
                    </span>

                    <div className="plan-chips">
                      <span className="chip">
                        Total: {formatCurrency(plan.amount)}
                      </span>

                      {typeof plan.economy === "number" && plan.economy > 0 && (
                        <span
                          className={`chip ${isFeatured ? "chip--highlight" : ""}`}
                        >
                          Economize: {formatCurrency(plan.economy)}
                        </span>
                      )}
                    </div>

                    <div className="plan-benefit-combo">
                      {plan.description.map((item, indexDesc) => (
                        <span className="item-benefit" key={indexDesc}>
                          <img src="/confirm.svg" alt="" />
                          <p className="text-benefit">{item}</p>
                        </span>
                      ))}
                    </div>

                    <div className="plan-button" onClick={changePage}>
                      Inscreva-se
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnualPlans;
