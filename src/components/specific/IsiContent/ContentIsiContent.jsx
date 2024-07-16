/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ContentIsiBudaya = ({ placeName, description }) => {
    // Split description into two paragraphs
    const paragraphs = description.split('\n\n'); // Jika deskripsi sudah dibagi menjadi 2 paragraf

    return (
        <div className="container px-22 max-w-[793px] h-auto mb-20 lg:px-24 sm-max:px-16">
            <h1 className="text-3xl font-bold sm-max:text-xl mb-10">{placeName}</h1>
            <section className="text-xl text-justify sm-max:text-lg">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </section>
            <div className="relative my-20 h-1 mx-60 max-w-[1900px] bg-black border-1 border-solid border-black rounded-md" />
        </div>
    );
}

export default ContentIsiBudaya;
