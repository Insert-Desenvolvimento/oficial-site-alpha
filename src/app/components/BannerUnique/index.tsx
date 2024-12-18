import React, { useEffect } from "react";
import "./bannerUnique.scss";
import { ItemBanner } from "@/types";
import { useBannerStore } from "@/app/store/ownerDocs";

const BannerUnique = (item: Partial<ItemBanner>) => {
  const { itemBannerDocs, fetchItemBannerDocs } = useBannerStore();

  useEffect(() => {
    fetchItemBannerDocs();
  }, []);

  const itemBanner: ItemBanner | undefined = itemBannerDocs?.[0];

  return (
    <>
    <div className="container-banne-unique-all">
      <div className="container-banner-unique">
        <div className="banner-unique-rigth-elements">
          <h1 className="banner-unique-title">{itemBanner?.title || "Título Padrão"}</h1>
          <h2>Comprometimento com a saúde e o bem estar de todos.</h2>
          <div className="banner-unique-imgs">
            {itemBanner?.photoUrl?.[0] && (
              <img
                className="banner-unique-imgs-first-img"
                src={itemBanner.photoUrl[0]}
                alt="Imagem principal"
              />
            )}
            {itemBanner?.photoUrl?.[1] && (
              <img
                className="banner-unique-imgs-second-img"
                src={itemBanner.photoUrl[1]}
                alt="Imagem sobreposta"
              />
            )}
          </div>
        </div>

        <div>
          <p>{itemBanner?.text || "Texto padrão caso não haja conteúdo."}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default BannerUnique;
