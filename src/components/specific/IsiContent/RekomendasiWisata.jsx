import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RekomendasiWisata = () => {
    const [places, setPlaces] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://backend-api-capstone-bdt-deploy.vercel.app/places');
                const data = response.data.places;
                const filteredPlaces = data.filter(place => place.category === 'Pariwisata');
                const shuffledPlaces = filteredPlaces.sort(() => Math.random() - 0.5);
                const selectedPlaces = shuffledPlaces.slice(0, 3);
                setPlaces(selectedPlaces);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/wisata/${id}`);
    };

    return (
        <div className="mx-auto px-4 py-8 max-w-screen-xl">
            <div className="text-center mb-9">
                <h2 className="text-3xl font-bold">Rekomendasi Wisata</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {places.map(place => (
                    <div key={place.id_place}
                        className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer"
                        style={{ width: '400px', height: '350px' }}
                        onClick={() => handleCardClick(place.id_place)}>
                        <img className="w-full h-48 object-cover" src={place.image_place} alt={place.place_name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{place.place_name}</div>
                            <p className="text-gray-700 text-base">{`${place.description.split(' ').slice(0, 10).join(' ')}...`}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="mt-5 mb-5 mx-auto w-1900 border-t-2 border-gray-800" />
        </div>
    );
};

export default RekomendasiWisata;
