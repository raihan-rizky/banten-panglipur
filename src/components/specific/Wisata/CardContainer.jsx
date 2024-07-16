import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FunnelIcon } from '@heroicons/react/24/outline';

const VerticalCard = ({ title, description, image }) => {
    // Function to truncate description to the first 10 words
    const truncateDescription = (str, numWords) => {
        const words = str.split(' ');
        if (words.length <= numWords) {
            return str;
        }
        return words.slice(0, numWords).join(' ') + '...';
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row mb-5 w-full max-w-3xl">
            <img className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" src={image || '/placeholder-image.jpg'} alt={title} />
            <div className="p-4 flex flex-col justify-center w-full sm:w-2/3">
                <h2 className="text-xl font-bold mb-2 truncate">{title}</h2>
                <p className="text-gray-700 text-base truncate">{truncateDescription(description, 10)}</p>
            </div>
        </div>
    );
};

const HorizontalCard = ({ title, image }) => {
    return (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={image || '/placeholder-image.jpg'} alt={title} />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h2 className="text-xl font-bold text-center">{title}</h2>
            </div>
        </div>
    );
};

const CombinedCardComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get('https://backend-api-capstone-bdt-deploy.vercel.app/places');
                console.log(response.data);
                if (response.data && response.data.places) {
                    setPlaces(response.data.places);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching places:', error);
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    // Filter places by category 'Pariwisata' and search term
    const filteredPlaces = places.filter(card =>
        card.category === 'Pariwisata' &&
        card.place_name && card.place_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        card.description && card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Slice first 3 items for vertical cards and rest for horizontal cards
    const filteredVerticalCards = filteredPlaces.slice(0, 3);
    const filteredHorizontalCards = filteredPlaces.slice(3);

    const containerStyle = {
        backgroundImage: "url('/images/pattern-destinasi-pilihan.png')",
        backgroundRepeat: 'repeat',
    };

    const isSearching = searchTerm !== '';

    return (
        <div className="flex flex-col items-center" style={containerStyle}>
            <div className="flex items-center mb-5 w-full sm:w-auto px-4 sm:px-0">
                <div className="bg-white border border-black w-full sm:w-[500px] flex items-center rounded-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 outline-none flex-1 rounded-lg text-black bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="p-2 ml-2 rounded-lg bg-white border border-black">
                    <FunnelIcon className="h-5 w-5" />
                </button>
            </div>

            {isSearching ? (
                <div className="w-full px-4 flex flex-col items-center mb-lg-4">
                    <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Search Results</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredVerticalCards.map((card, index) => (
                            <VerticalCard
                                key={index}
                                title={card.place_name}
                                description={card.description}
                                image={card.image_place}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Rekomendasi Wisata</h2>
                    <div className="flex flex-col items-center w-full px-4">
                        {filteredVerticalCards.map((card, index) => (
                            <VerticalCard
                                key={index}
                                title={card.place_name}
                                description={card.description}
                                image={card.image_place}
                            />
                        ))}
                    </div>
                    <hr className="w-full sm:w-[1000px] mt-5" style={{ height: '5px', backgroundColor: 'black', borderRadius: '50px' }} />

                    <div className="max-w-[1200px] mx-auto my-10 text-center px-4">
                        <h2 className="text-2xl font-bold mb-5">Wisata Lainnya</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredHorizontalCards.map((card, index) => (
                                <div key={index} className="my-2">
                                    <HorizontalCard
                                        title={card.place_name}
                                        image={card.image_place}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CombinedCardComponent;
