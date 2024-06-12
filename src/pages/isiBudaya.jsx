import HeroWithBottomLeftText from "../components/common/HeroWithBottomLeftText";
import ContentIsiBudaya from "../components/specific/Budaya/isiBudaya/ContentIsiBudaya";
import MapsIsiBudaya from "../components/specific/Budaya/isiBudaya/MapsIsiBudaya";
import RekomenWisataIsiBudaya from "../components/specific/Budaya/isiBudaya/RekomenWisataIsiBudaya";

const IsiBudaya = () => {
    return( <>
        <HeroWithBottomLeftText imageSrc="./public/images/hero-isi-budaya.png" title="Desa Baduy" address="Kadujangkung, Bojong Menteng, Kec. Leuwidamar, Kabupaten Lebak, Banten 42362" />
        <ContentIsiBudaya />
        <MapsIsiBudaya />
        <RekomenWisataIsiBudaya />
    </>)
}
export default IsiBudaya;