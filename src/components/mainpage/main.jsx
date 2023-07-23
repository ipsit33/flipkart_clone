import React from "react";
import '../css/style.css';
import '../css/utils.css';
import '../css/responsive.css';
import Navbar from '../navbar/navbar.jsx';
import { Slider } from "./slider";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/css/bundle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from "@mui/material";


function MainPage() {
    return (
        <div className="container">
            <Navbar />
            <div className="icons">
                <span><img src="https://img.icons8.com/?size=512&id=d88KNPcub1fN&format=png" alt="" />Grocery</span>
                <span><img src="https://img.icons8.com/?size=512&id=5wGnhtHODuE9&format=png" alt="" />Mobiles</span>
                <span><img src="https://img.icons8.com/?size=512&id=38e2rijW2EqN&format=png" alt="" />Fashion</span>
                <span><img src="https://img.icons8.com/?size=512&id=blpKd0mpBEOj&format=png" alt="" />Electronics</span>
                <span><img src="https://img.icons8.com/?size=512&id=Y4whzjEgpgTq&format=png" alt="" />Home & Furniture</span>
                <span><img src="https://img.icons8.com/?size=512&id=hjpCowiz3u1s&format=png" alt="" />Appliances</span>
                <span><img src="https://img.icons8.com/?size=512&id=k4N6h31JXTep&format=png" alt="" />Travel</span>
                <span><img src="https://img.icons8.com/?size=512&id=63761&format=png" alt="" />Top Offers</span>
                <span><img src="https://img.icons8.com/?size=512&id=VvzkwEC3yvRY&format=png" alt="" />Beauty, Toys & More</span>
                <span><img src="https://img.icons8.com/?size=512&id=jZP21q3Oabgr&format=png" alt="" />Two Wheelers</span>
            </div>
            <Slider />

            <div className="card">
                <h2 className="my-2">Best of Electronics<button><ChevronRightIcon /></button></h2>
                <div className="cards">
                <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><div className="card-item">
                        <img src="https://futureforward.in/images/thumbs/010/0109217_nikon-z6ii-mirrorless-camera-with-24-120mm-lens-kit_600.jpeg" alt="" />
                        <div className="lines">
                            <p className="p-center my-3">Top Mirrorless Cameras</p>
                            <p className="p-center my-4">Shop Now !</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card-item">
                        <img src="https://www.suryaelectronics.in/img/Product/Main/PhilipsGroomingandPersonalcareTrimmers26.jpg" alt="" />
                        <div className="lines">
                            <p className="p-center my-3">Best of Trimmers</p>
                            <p className="p-center my-4">From ₹399</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card-item">
                        <img src="https://images.samsung.com/is/image/samsung/p6pim/in/lu28r550uqwxxl/gallery/in-ur55-lu28r550uqwxxl-536896135?$650_519_PNG$" alt="" />
                        <div className="lines">
                            <p className="p-center my-3">Monitors</p>
                            <p className="p-center my-4">From ₹7949</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card-item">
                        <img src="https://www.sbsmobile.com/che/204195-thickbox_default/10w-wireless-power-bank.jpg" alt="" />
                        <div className="lines">
                            <p className="p-center my-3">Premium PowerBanks</p>
                            <p className="p-center my-4">Shop Now</p>
                        </div>
                    </div></SwiperSlide> 
                    <SwiperSlide><div className="card-item">
                        <img src="https://www.viewsonic.com/vsAssetFile/in/img/resize/projector/scaled/PA503_L01_m_w640.webp" alt="" />
                        <div className="lines">
                            <p className="p-center my-3">Projectors</p>
                            <p className="p-center my-4">From ₹9999</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card-item">
                        <img src="https://ethlits.com/media/catalog/product/cache/1/thumbnail/4f9502202b77059316180a23e4857517/s/g/sg_hp33_english_willow_cricket_bat_size_sh_ethlits.com_3_.jpg" alt="" />
                        <div className="lines">
                            <p className="p-center my-3">Cricket Bats</p>
                            <p className="p-center my-4">From ₹899</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card-item">
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/023711/08/fnd/IND/fmt/png/Poly-Cotton-Unisex-Cap" alt="" />
                        <div className="lines">
                            <p className="p-center my-3">Men's Caps</p>
                            <p className="p-center my-4">Min. 50% Off</p>
                        </div>
                    </div></SwiperSlide>
                
            </Swiper>
                </div>

            </div>


            <footer className="flex-all-center">
                <p>Copyright &copy; MyCart.com</p>
            </footer>
        </div>
    );
}

export default MainPage;