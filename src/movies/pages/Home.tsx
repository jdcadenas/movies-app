
import { Suspense } from "react";
import { Carrusel } from "../components";
import { MainLayout } from "../layout";

export const Home = () => {
  
  return (
    <MainLayout>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Carrusel titulo="Lo más visto" slug="trending/all/week?" />
        <Carrusel titulo="Acción" slug="discover/movie?with_genres=28&" />
        <Carrusel titulo="Crimen" slug="discover/movie?with_genres=80&" />
        <Carrusel titulo="Animación" slug="discover/movie?with_genres=16&" />
      </Suspense> 
    </MainLayout>
  );
};
