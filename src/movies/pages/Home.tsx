import { Typography } from "@mui/material";
import { useEffect, useState } from "react";


export const Home = () => {
  const [peliculas, setpeliculas] = useState<any []>([]); //array de películas
  const obtenerPeliculas = async ()=> {
    const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=943eb331b223bc0ea9f2be25ead132ca";
    const res = await fetch(url);
    const data = await res.json();
    setpeliculas(data.results);
    
  }

  useEffect(() => {
    obtenerPeliculas()
  
  }, [])
  return (
    <div>
    {
      peliculas.map(pelicula =>(
        <div key={pelicula.id} className="card">
          <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt="{pelicula.title}" />
        <Typography  key={pelicula.id} >{pelicula.title}</Typography>
        </div>
      ))

    }
  </div>
  )
}
