'use client'
import React, { useEffect, useState } from "react";
import { listModalityImages, listPartnersImages, listPersonalImages, listSpaceImages } from "./firebase/fireStorage";

export default function Home() {
  const [modalityImages, setModalityImages] = useState<string[]>([]);
  const [partnerImages, setPartnerImages] = useState<string[]>([]);
  const [personalImages, setPersonalImages] = useState<string[]>([]);
  const [spaceImages, setSpaceImages] = useState<string[]>([]);

  useEffect(() => {
    const displayImages = async () => {
      const modalityImages = await listModalityImages();
      const partnerImages = await listPartnersImages();
      const personalImages = await listPersonalImages();
      const spaceImages = await listSpaceImages();

      setModalityImages(modalityImages);
      setPartnerImages(partnerImages);
      setPersonalImages(personalImages);
      setSpaceImages(spaceImages);
    };

    displayImages();
  }, []);

  return (
    <main>
      <section>
        <h2>Imagens de Modalidades</h2>
        <div>
          {modalityImages.map((url, index) => (
            <img key={index} src={url} alt={`Modalidade ${index}`} />
          ))}
        </div>
      </section>

      <section>
        <h2>Imagens de Parceiros</h2>
        <div>
          {partnerImages.map((url, index) => (
            <img key={index} src={url} alt={`Parceiro ${index}`} />
          ))}
        </div>
      </section>

      <section>
        <h2>Imagens Pessoais</h2>
        <div>
          {personalImages.map((url, index) => (
            <img key={index} src={url} alt={`Pessoal ${index}`} />
          ))}
        </div>
      </section>

      <section>
        <h2>Imagens do Espaço</h2>
        <div>
          {spaceImages.map((url, index) => (
            <img key={index} src={url} alt={`Espaço ${index}`} />
          ))}
        </div>
      </section>
    </main>
  );
}