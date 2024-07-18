import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroWithBottomLeftText from "../../components/common/HeroWithBottomLeftText";
import ContentIsiContent from "../../components/specific/IsiContent/ContentIsiContent";
import MapsIsiContent from "../../components/specific/IsiContent/MapsIsiContent";
import RekomendasiWisata from '../../components/specific/IsiContent/RekomendasiWisata';
import ReviewContent from "../../components/specific/IsiContent/ReviewContent";

const TemplateCreator = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`https://backend-api-capstone-bdt-deploy.vercel.app/places/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPlace(data.place);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!place) {
    return null;
  }

  return (
    <>
      <HeroWithBottomLeftText imageSrc={place.image_place} title={place.place_name} address={place.city} />
      <ContentIsiContent placeName={place.place_name} description={place.description} />
      <MapsIsiContent place={place} />
      <RekomendasiWisata />
      <ReviewContent />
    </>
  );
}

export default TemplateCreator;
