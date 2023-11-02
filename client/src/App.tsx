import React from "react";
import './main.global.css';
import { Layout } from "./share/Layout";
import { Header } from "./share/Header";
import { Main } from "./share/Main";
import { Hero } from "./share/Hero";


export function AppComponent() {

  return (
    <Layout>
      <Header />
      <Main>
        <Hero />
      </Main>
    </Layout>
  );
}
