"use client"
import React from 'react';
import Head from './components/Head';
import { useEffect } from 'react';
import Banner from './components/Banner';
import "./page.scss"
import Modalitie from './components/Modalitie';
import Space from './components/Space';
import Personal from './components/Personal';
import About from './components/About';
import Products from './components/Products';
import Combination from './components/CombinationProducts';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

const Home = () => {
  const list = [
    {
      name: "Home",
      route: "#home"
    },
    {
      name: "Nosso Espaço",
      route: "#space"
    },
    {
      name: "Nossa Equipe",
      route: "#group"
    },
    {
      name: "Nossos Planos",
      route: "#plans"
    },
    {
      name: "Sobre Nós",
      route: "#about"
    },
    {
      name: "Contatos",
      route: "#contacts"
    },
    {
      name: "Seja Alpha",
      route: "/register"
    },
  ]

  useEffect(() => {
    document.querySelectorAll('[cz-shortcut-listen]').forEach(el => {
      el.removeAttribute('cz-shortcut-listen');
    });
  }, []);

  return (
    <>
      <main className="container">
        <div className='content-header'>
          <Head list={list} />
          <Banner />
        </div>
        <Modalitie />
        <Space />
        <Personal />
        <Products />
        <Combination />
        <About />
        <Marquee/>
        <Footer />
      </main>
      <Whatsapp />
    </>
  );
};

export default Home;