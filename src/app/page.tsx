'use client'
import React, { useEffect, useState } from "react";
import { fetchModalities, fetchPartners, fetchPersonal, fetchSpace, getImageUrl } from "./firebase/fireStorage";
import { Modality, Partner, Personal, Space } from "@/types";



export default function Home() {
  const [modalities, setModality] = useState<Modality[]>([]);
  const [partners, setPartner] = useState<Partner[]>([]);
  const [personals, setPersonal] = useState<Personal[]>([]);
  const [space, setSpace] = useState<Space[]>([]);
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const displayImages = async () => {
      try {
        const modalities = await fetchModalities();
        const partners = await fetchPartners();
        const personals = await fetchPersonal();
        const space = await fetchSpace();

        setModality(modalities)
        setPartner(partners)
        setPersonal(personals)
        setSpace(space)

        const urls: { [key: string]: string } = {};
        for (const item of personals) {
          const url = await getImageUrl(`${item.id}.jpg`);
          urls[item.id] = url;
        }
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }

    };

    displayImages();
  }, []);


  return (
    <main>
      <ul>
        {
          personals.map((personal, index) => (<li key={index}>{personal.name} <img src={imageUrls[personal.id]} /></li>))
        }</ul>
    </main>
  );
}