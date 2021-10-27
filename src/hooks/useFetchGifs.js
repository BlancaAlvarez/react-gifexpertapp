import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Se ejecuta esta instruccion cuando el componente es renderizado solo una vez
    //se dispara el useEffect solo si la categoria cambia
    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                    console.log(imgs);

                    setState({
                        data: imgs,
                        loading: false
                    });
                
            });

        //Otra manera que podria ser y sea lo mismo es...
        //getGifs(category)
        //    .then(setImages);

    }, [category]);

    //setTimeout(() => {
    //    setState({
    //        data: [1, 2, 3, 4, 5, 6, 7],
    //        loading: false
    //    })
    //}, 3000);

    return state;
}