// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { FC, useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import { MovieResponse, MovieShort } from "../interfaces";
import { suspend } from "suspend-react";

interface Props {
  titulo: string;
  slug: string;
}

export const Carrusel: FC<Props> = ({ titulo, slug }) => {
  //const [peliculas, setpeliculas] = useState<MovieShort[]>([]); //array de películas
  const peliculas = suspend(async () => {
    const url = `${import.meta.env.VITE_API_URL}/${slug}api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const data: MovieResponse = await res.json();
    return data.results;
    //setpeliculas(data.results);
  }, [slug]);

  // useEffect(() => {
  //   obtenerPeliculas();
  // }, []);
  return (
    <Box sx={{ marginbottom: 6 }}>
      <Typography
        fontWeight={600}
        sx={{ color: "#fff", fontsize: 20, marginBottom: 1 }}
      >
        {titulo}
      </Typography>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
      >
        {peliculas.map((pelicula) => (
          <SwiperSlide key={pelicula.id} className="card">
            <img
              style={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                borderRadius: 10,
              }}
              src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
              alt="{pelicula.title}"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
