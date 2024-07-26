import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories(['One Piece', ...categories]);
    //     setCategories(cats => [...cats, 'Bebe cuka']);
    // }

    return(
        <>
        
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr></hr>

        <ol>
            {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </ol>

        </>
    )
}