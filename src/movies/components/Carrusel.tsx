// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";

export const Carrusel = () => {
  const [peliculas, setpeliculas] = useState<any[]>([]); //array de películas
  const obtenerPeliculas = async () => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/week?api_key=943eb331b223bc0ea9f2be25ead132ca";
    const res = await fetch(url);
    const data = await res.json();
    setpeliculas(data.results);
  };

  useEffect(() => {
    obtenerPeliculas();
  }, []);
  return (
    <Box sx={{ marginbottom:6}}>
      <Typography
        fontWeight={600}
        sx={{ color: "#fff", fontsize: 20, marginBottom: 1 }}
      >
        Lo más visto
      </Typography>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
