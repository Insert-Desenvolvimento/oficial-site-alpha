"use client"
import React from 'react';
import Head from './components/Head';
import { useEffect } from 'react';

const Home = () => {
  const list = [
    {
      name: "Quem somos",
      route: "#about"
    },
    {
      name: "Nossos Produtos",
      route: "#plans"
    },
    {
      name: "Nossa Equipe",
      route: "#group"
    },
    {
      name: "Nossos Parceiros",
      route: "#partners"
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

    <div className="container">
      <Head list={list} />
      <h1>Home</h1>
    </div>
  );
};

export default Home;