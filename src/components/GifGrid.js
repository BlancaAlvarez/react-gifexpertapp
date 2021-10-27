//import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //Para la desestructuracion se deja la variable de data pero al renombrarlo es data:images
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash"> Loading</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                        //de esta manera {...img} se mandan las propiedades de una manera independiente
                    ))
                }
            </div>
        </>
    );
}

export default GifGrid;