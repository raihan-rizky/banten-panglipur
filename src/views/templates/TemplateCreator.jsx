import HeroWithBottomLeftText from "../../components/common/HeroWithBottomLeftText";
import ContentIsiContent from "../../components/specific/IsiContent/ContentIsiContent";
import MapsIsiContent from "../../components/specific/IsiContent/MapsIsiContent";
import RekomenWisataIsiContent from "../../components/specific/IsiContent/RekomenWisataIsiContent";
import ReviewContent from "../../components/specific/IsiContent/ReviewContent";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IsiContent = () => {
  const { id } = useParams();
  const [imagePath, setImagePath] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [imageAddress, setImageAddress] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('https://backend-api-capstone-bdt-deploy.vercel.app/places')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const item = data.places.find(d => d.id_place === id);
        if (item) {
          setImagePath(item.image_place);
          setImageTitle(item.place_name);
          setImageAddress(item.city);
          setPlaceName(item.place_name); // Set placeName from API data
          setDescription(item.description); // Set description from API data
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <>
      <HeroWithBottomLeftText imageSrc={imagePath} title={imageTitle} address={imageAddress} />
      <ContentIsiContent placeName={placeName} description={description} />
      <MapsIsiContent />
      <RekomenWisataIsiContent />
      <ReviewContent />
    </>
  );
}

export default IsiContent;
