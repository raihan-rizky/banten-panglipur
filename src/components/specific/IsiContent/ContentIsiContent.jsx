/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ContentIsiBudaya = ({ placeName, description }) => {
    return (
        <div className="container px-22 max-w-[793px] h-auto mb-20 lg:px-24 sm-max:px-16">
            <h1 className="text-3xl font-bold sm-max:text-xl">{placeName}</h1>
            <section className="text-xl text-left sm-max:text-lg">
                <p>{description}</p>
            </section>
            <div className="relative my-20 h-1 mx-60 max-w-[1900px] bg-black border-1 border-solid border-black rounded-md" />
        </div>
    );
}

export default ContentIsiBudaya;
