import React, { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

const VerticalCard = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row mb-5 w-full max-w-3xl">
            <img className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" src={image} alt={title} />
            <div className="p-4 flex flex-col justify-center w-full sm:w-2/3">
                <h2 className="text-xl font-bold mb-2 truncate">{title}</h2>
                <p className="text-gray-700 text-base truncate">{description}</p>
            </div>
        </div>
    );
};

const HorizontalCard = ({ title, image }) => {
    return (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h2 className="text-xl font-bold text-center">{title}</h2>
            </div>
        </div>
    );
};

const CombinedCardComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const verticalCards = [
        {
            title: "Card 1",
            description: "Description for Card 1",
            image: "/images/pantai-anyer.png"
        },
        {
            title: "Card 2",
            description: "Description for Card 2",
            image: "/images/puncak-gunung-karang.png"
        },
        {
            title: "Card 3",
            description: "Description for Card 3",
            image: "/images/tanjung-lesung.png"
        },
    ];

    const horizontalCards = [
        {
            title: 'Card 4',
            image: '/images/tanjung-lesung.png',
        },
        {
            title: 'Card 5',
            image: '/images/curug-cikotak.png',
        },
        {
            title: 'Card 6',
            image: '/images/danau-biru.png',
        },
        {
            title: 'Card 7',
            image: '/images/danau-biru.png',
        },
        {
            title: 'Card 8',
            image: '/images/curug-cikotak.png',
        },
        {
            title: 'Card 9',
            image: '/images/tanjung-lesung.png',
        },
    ];

    const filteredVerticalCards = verticalCards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredHorizontalCards = horizontalCards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                                title={card.title}
                                description={card.description}
                                image={card.image}
                            />
                        ))}
                        {filteredHorizontalCards.map((card, index) => (
                            <HorizontalCard
                                key={index}
                                title={card.title}
                                image={card.image}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Rekomendasi Wisata</h2>
                    <div className="flex flex-col items-center w-full px-4">
                        {verticalCards.map((card, index) => (
                            <VerticalCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                            />
                        ))}
                    </div>
                    <hr className="w-full sm:w-[1000px] mt-5" style={{ height: '5px', backgroundColor: 'black', borderRadius: '50px' }} />

                    <div className="max-w-[1200px] mx-auto my-10 text-center px-4">
                        <h2 className="text-2xl font-bold mb-5">Wisata Lainnya</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {horizontalCards.map((card, index) => (
                                <div key={index} className="my-2">
                                    <HorizontalCard
                                        title={card.title}
                                        image={card.image}
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
