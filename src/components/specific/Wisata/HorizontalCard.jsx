import React from 'react';

const HorizontalCard = ({ title, image }) => {
    return (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h2 className="text-xl font-bold text-center">{title}</h2>
            </div>
        </div>
    );
}

const CardsContainer = () => {
    const cardsData = [
        {
            title: 'Card 1',
            image: '/images/tanjung-lesung.png', // URL to your image
        },
        {
            title: 'Card 2',
            image: '/images/curug-cikotak.png', // URL to your image
        },
        {
            title: 'Card 3',
            image: '/images/danau-biru.png', // URL to your image
        },
        {
            title: 'Card 4',
            image: '/images/danau-biru.png', // URL to your image
        },
        {
            title: 'Card 5',
            image: '/images/curug-cikotak.png', // URL to your image
        },
        {
            title: 'Card 6',
            image: '/images/tanjung-lesung.png', // URL to your image
        },
    ];

    return (
        <div className="max-w-[1200px] mx-auto my-10 text-center px-4">
            <h2 className="text-2xl font-bold mb-5">Wisata Lainnya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cardsData.map((card, index) => (
                    <div key={index} className="my-2">
                        <HorizontalCard
                            title={card.title}
                            image={card.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsContainer;
