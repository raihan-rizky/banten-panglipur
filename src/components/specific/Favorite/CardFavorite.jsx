import React, { useState } from 'react';

const FavoritePage = () => {
    // Contoh data favorit, bisa diganti dengan data dari API atau sumber lainnya
    const [favorites, setFavorites] = useState([
        {
            id: 1,
            title: 'Card 1',
            image: '/images/tanjung-lesung.png',
        },
        {
            id: 2,
            title: 'Card 2',
            image: '/images/curug-cikotak.png',
        },
        {
            id: 3,
            title: 'Card 3',
            image: '/images/danau-biru.png',
        },
    ]);

    // Fungsi untuk menghapus item dari daftar favorit
    const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter(item => item.id !== id);
        setFavorites(updatedFavorites);
    };

    return (
        <div className="max-w-[1200px] mx-auto my-10 text-center px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {favorites.length === 0 ? (
                    <p className="text-lg text-gray-600">No favorites added yet.</p>
                ) : (
                    favorites.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-72">
                            <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2 truncate">{item.title}</h2>
                                <div className="mt-4">
                                    <button
                                        onClick={() => removeFromFavorites(item.id)}
                                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoritePage;
