import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    //const handledAdd = (e) => {
        //setCategories([...categories, 'HunterXHunter']);

        ////Si queremos que HunterXHunter sea al inicio es de la siguiente manera
        ////setCategories(['HunterXHunter',...categories]);
        ////setCategories(cats => [...cats, 'HunterXHunter']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/*<button onClick={handledAdd}>Agregar</button>*/}

            <ol>
                {
                    categories.map(category => (
                        //Se quitan los () - {return <li key={category}> {category} </li>}
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;