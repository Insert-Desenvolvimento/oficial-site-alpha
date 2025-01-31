import React, { useEffect, useState } from "react";
import { Carousel, Card } from "antd";
import "./personal.scss";
import { usePersonalStore } from "@/app/store/personalDocs";
import ModalPersonal from "../ModalPersonal";
import { Personal as PersonalType } from "@/types";

const Personal = () => {
  const { personalDocs, fetchPersonalDocs } = usePersonalStore();
  const [statusModal, setOpenModal] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState({});
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleOpenModal = (item: PersonalType): void => {
    setOpenModal(!statusModal);
    setCurrentItem(item);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetchPersonalDocs();
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadingImages((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <>
      <div className="container-backgound">
        <div className="container-personal-info">
          <h1>
            Nós temos os <span className="personal-target">melhores</span>{" "}
            profissionais de{" "}
            <span className="personal-target">Mar de Espanha e região</span>.
            <br />
            <span className="personal-target">
              {" "}
              Contrate um de nossos profissionais e tenha mais evolução.
            </span>{" "}
            Clique e Confira.
          </h1>
          <p>
            A equipe Alpha é treinada e capacitada para te atender da melhor
            forma. Todos nosso profissionais são formados e certificados.
          </p>
          <h3 className="personal-target"></h3>
        </div>
        <div className="container-personal" id="group">
          <ul className="gallery-personal">
            {personalDocs.map((item, index) => (
              <li
                key={index}
                className="container-card"
                onClick={() => handleOpenModal(item)}
              >
                <div
                  className={`container-img ${loadingImages[index] === false ? "" : "skeleton"
                    }`}
                >
                  <img
                    alt={item.name}
                    loading="lazy"
                    src={item.imageUrl}
                    className="personal-image"
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
                <div className="container-text-personal">
                  <p>{item.name}</p>
                  <p className="qualify">{item.qualify}</p>
                </div>
              </li>
            ))}
          </ul>
          {statusModal && (
            <ModalPersonal item={currentItem} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </>
  );
};

export default Personal
