import HeroWithBottomLeftText from "../../components/common/HeroWithBottomLeftText";
import ContentIsiBudaya from "../../components/specific/Budaya/isiBudaya/ContentIsiBudaya";
import MapsIsiBudaya from "../../components/specific/Budaya/isiBudaya/MapsIsiBudaya";
import RekomenWisataIsiBudaya from "../../components/specific/Budaya/isiBudaya/RekomenWisataIsiBudaya";
import ReviewContent from "../../components/specific/Budaya/isiBudaya/ReviewContent";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IsiBudaya = () => {
    const { id } = useParams();
    const [imagePath, setImagePath] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [imageAdress, setImageAdress] = useState('');
    useEffect(() => {
      // Memuat data dari JSON
      fetch('../data/imageData.json')
        .then(response => response.json())
        .then(data => {
          console.log(id);
          
          // Mencari gambar yang sesuai dengan ID
          const item = data.find(d => d.id === id);
          if (item) {
            setImagePath(item.src);
            setImageTitle(item.caption)
            setImageAdress(item.address)
            
          }
        });
        
    }, [id]);
    return( <>
        <HeroWithBottomLeftText imageSrc={imagePath} title={imageTitle} address={imageAdress} />
        <ContentIsiBudaya />
        <MapsIsiBudaya />
        <RekomenWisataIsiBudaya />
        <ReviewContent />

    </>)
}
export { IsiBudaya
    as default };