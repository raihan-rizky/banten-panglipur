import {ArrowRightIcon} from '@heroicons/react/24/solid'

const AboutUs = () => {
    return(
        <>
                <div className="overflow-hidden xl:flex-col xl:items-center -translate-y-2 relative flex max-w-full min-h-[808px] bg-gradient-to-b from-[#87C0CD] to-white">
                <div className='justify-between xl:flex-col max-w-full min-h-[808px]'>
                    <div className='max-w-full'>
                        <img className='absolute -translate-x-[650px] translate-y-[190px]' src='./public/images/ellipse-pattern.png'/>
                    </div>
                    <div className='overflow-auto'>
                        <img className='absolute rotate-180 max-w-full translate-x-[1000px] ' src='./public/images/ellipse-pattern.png'/>
                    </div>
                </div>
                    <div className="container min-h-[808px] xl:ml-20 xl:p-0 xl:content-center pl-[149px] pb-[230px] absolute flex-col content-center xl:m-auto">
                        <h1 className="max-w-[392px] min-h-[68px] font-[700] text-[50px]">Tentang Kami</h1>
                        <p className="max-w-[498px] min-h-[200px] font-[400] text-[15px]">
                        Kami adalah penjaga kekayaan budaya yang tak ternilai di Banten. 
                        Dengan komitmen yang kokoh, 
                        kami mempertahankan warisan berharga ini agar tetap hidup dan ber
                        semi di hati setiap generasi. 
                        Dari tarian yang memukau hingga cerita-cerita 
                        yang menginspirasi, kami berusaha menjaga keindahan dan 
                        keunikan kebudayaan Banten 
                        agar dapat dinikmati oleh semua orang.</p>
                        <div className="absolute flex max-w-full w-[236px] min-h-[51px]  bg-[#226597] rounded-xl">
                            <button className="flex m-auto max-w-full w-[236px] bg-[#226597] 
                            rounded-xl min-h-[51px] ">
                                <h1 className='min-h-[31px] translate-y-1 text-left text-[16px] font-[700] text-white w-[130px]'>Profile Kami</h1>
                            <ArrowRightIcon className="translate-x-5 m-auto size-7  text-white" ></ArrowRightIcon></button>
                            
                        </div>
                    </div>

                    <div className='container z-20 pl-[250px] pb-[120px] xl:pl-0 xl:mr-auto mr-0 min-w-[567px] min-h-[371px] content-center '>
                        <img src='./public/images/about-us-img.png'/>
                    </div>

                </div>

        </>
    )
}

export default AboutUs;