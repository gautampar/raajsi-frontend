"use client";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Heading from '../components/Heading'
import TestSlider from '../slider/TestSlider'
import Link from 'next/link'
import { getAllProducts } from '@/api/auth'
import WishlistButton from '../components/WishlistButton';
import CartButton from '../components/CartButton';

// export const featureProducts = [
//     {
//         id: 1,
//         name: "Cosmic Body Oil",
//         desc: "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm.",
//         image: "/images/home/img3.jpg",
//         logo: "/images/home/lag.svg",
//         price: "₹1800",
//         oldPrice: "₹2400",
//         discount: "Get 50% OFF",
//     },
//     {
//         id: 2,
//         name: "Ayurvedic Face Cream",
//         desc: "Infused with saffron and sandalwood, this cream brightens, hydrates, and rejuvenates your skin for a natural glow.",
//         image: "/images/home/img8.jpg",
//         logo: "/images/home/lag.svg",
//         price: "₹950",
//         oldPrice: "₹1200",
//         discount: "Get 20% OFF",
//     },
//     {
//         id: 3,
//         name: "Herbal Hair Elixir",
//         desc: "A nourishing blend of bhringraj, amla, and neem that strengthens roots, prevents hair fall, and adds shine.",
//         image: "/images/home/img3.jpg",
//         logo: "/images/home/lag.svg",
//         price: "₹1250",
//         oldPrice: "₹1600",
//         discount: "Get 22% OFF",
//     },
//     {
//         id: 4,
//         name: "Organic Rose Water",
//         desc: "Pure steam-distilled rose water that tones, refreshes, and hydrates your skin naturally.",
//         image: "/images/home/img8.jpg",
//         logo: "/images/home/lag.svg",
//         price: "₹450",
//         oldPrice: "₹600",
//         discount: "Get 25% OFF",
//     },
// ];


function page() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();

                const { categories, products } = separateCategories(
                    data?.data?.products || []
                );
                console.log("Products:", products);
                console.log("Categories:", categories);
                setProducts(products);
                setCategories(categories);
            } catch (err) {
                console.error("Error fetching featured products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    function separateCategories(products) {
        const categoriesMap = new Map();

        const updatedProducts = products.map((product) => {
            const { category, ...rest } = product;

            if (category && !categoriesMap.has(category._id)) {
                categoriesMap.set(category._id, {
                    _id: category._id,
                    name: category.name,
                });
            }

            return {
                ...rest,
                categoryId: category?._id || null,
            };
        });

        const categories = Array.from(categoriesMap.values());
        return { categories, products: updatedProducts };
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-[#BA7E38] text-[24px] font-bold animate-pulse">
                    Loading...
                </div>
            </div>
        );
    }
    return (
        <div>
            <section className="hero-section h-[600px] sm:h-[650px] md:h-[700px] lg:h-[778px] overflow-hidden">
                <div className="relative w-full h-full lg:ml-[93px] ml-[20px] pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[83px]">
                    <h2 className="max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[634px] 
                   w-full font-[400] text-[24px] sm:text-[28px] md:text-[34px] lg:text-[41px] 
                   text-[#FFFAFA] leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[40px]">
                        शरीरमाद्यं खलु धर्मसाधनम्।
                    </h2>
                    <p className="font-avenir-400 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] 
                  text-[#FFFAFA80] max-w-[100%] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[863px] 
                  w-full leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] 
                  pt-[12px] sm:pt-[14px] md:pt-[16px] lg:pt-[18px]">
                        Explore our wide range of luxurious skincare and wellness products to celebrate beauty that is timeless.
                    </p>
                    <button className="absolute bottom-[90px] sm:bottom-[110px] md:bottom-[120px] lg:bottom-[128px] left-1/2 -translate-x-1/2">
                        <Image
                            src="/images/home/arrow.svg"
                            height={36}
                            width={36}
                            className="arrow-bounce"
                            alt="scroll arrow"
                        />
                    </button>
                </div>
            </section>
            {categories.map((cat, idx) => (
                <section key={cat._id} className='py-[62px] lg:bg-transparent bg-[#BA7E381A]'>
                    <div className="max-w-[1440px] w-full mx-auto lg:px-[34px] px-[20px]">
                        <Heading title={cat.name.toUpperCase()} />
                        {/* Optional: category description, you can customize per category */}
                        <p className="max-w-[360px] mx-auto pt-[14px] pb-[26px] text-center text-gradient font-[400] lg:text-[24px] text-[14px] w-full ">
                            {/* Add your Sanskrit or Hindi description here if needed */}
                        </p>
                        <div className="max-w-[1369px] w-full mx-auto lg:bg-[#BA7E381A] bg-transparent rounded-[24px] lg:p-[32px]">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                                {products.filter(p => p.categoryId === cat._id).map((product) => (
                                    <div key={product._id} className="w-full max-w-[634px]">
                                        <div className="relative rounded-[20px] h-[250px] md:h-[433px] overflow-hidden">
                                            <Image
                                                src={product.productImageUrl?.[0] || "/images/home/img3.jpg"}
                                                alt={product.productTitle}
                                                fill
                                                className="rounded-[20px] object-cover"
                                            />
                                            <div
                                                className="absolute bottom-0 left-0 w-full h-[120px] md:h-[206px]"
                                                style={{
                                                    background:
                                                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                                                }}
                                            ></div>
                                            {/* Top overlay */}
                                            <div className="absolute top-0 w-full z-10 p-[15px] md:p-[30px]">
                                                <div className="flex justify-between md:items-center items-start md:gap-0 gap-[10px] md:flex-row flex-col">
                                                    <div className="flex items-center gap-[10px] md:gap-[14px]">
                                                        <Image
                                                            src="/images/home/lag.svg"
                                                            height={30}
                                                            width={30}
                                                            alt="le"
                                                        />
                                                        <h6 className="font-avenir-400 text-[10px] md:text-[12px] text-[#363636] max-w-[200px]">
                                                            {/* Optional Sanskrit text */}
                                                        </h6>
                                                    </div>
                                                    <button className="bg-[#3030304A] font-avenir-400 text-[12px] md:text-[14px] text-[#FFFFFF] py-[6px] px-[14px] md:py-[10px] md:px-[22px] rounded-full">
                                                        Ingredients & Benefits
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Bottom overlay */}
                                            <div className="absolute bottom-0 w-full z-10 p-[15px] md:p-[30px]">
                                                <h6 className="font-rose font-[400] text-[18px] md:text-[32px] text-[#FFFFFF] pb-[6px]">
                                                    {product.productTitle}
                                                </h6>
                                                <p className="font-avenir-400 text-[12px] md:text-[20px] text-[#FFFFFF]">
                                                    {product.productDescription}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Bottom actions */}
                                        <div className="flex justify-between md:items-center items-start md:gap-0 gap-[10px] flex-row py-[18px]">
                                            <div className="flex gap-[6px] md:flex-row flex-col items-start w-full">
                                                <Link href={`/products/${product._id}`} className="w-full md:w-auto">
                                                    <button className="font-avenir-400 cursor-pointer w-full md:max-w-[206px] text-[12px] md:text-[18px] text-[#FFFFFF] py-[8px] md:py-[12px] px-[10px] md:px-[30px] bg-[#BA7E38] rounded-full border border-[#BA7E38] hover:bg-transparent hover:text-[#BA7E38] transition-all">
                                                        VIEW PRODUCT
                                                    </button>
                                                </Link>
                                                <div className="flex gap-[10px]">
                                                    <CartButton productId={product._id} />
                                                    <WishlistButton productId={product._id} />
                                                </div>
                                            </div>
                                            <div className="text-right w-full md:max-w-[170px]">
                                                <h6 className="font-avenir-800 text-[20px] md:text-[24px] text-[#000000]">
                                                    ₹{product.salePrice}
                                                </h6>
                                                <p className="font-avenir-400 text-[14px] md:text-[18px] text-[#00000099]">
                                                    {product.regularPrice && product.salePrice ? `Get ${Math.round(100 - (product.salePrice / product.regularPrice) * 100)}% OFF ₹${product.regularPrice}` : ""}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            <section className='lg:pt-[100px] pt-[60px]'>
                <div className="max-w-[1440px] w-full mx-auto lg:px-[34px] px-[20px]">
                    <Heading title="Testimonials" />
                    <p className="pt-[6px] pb-[44px] text-center text-[#5E6E89] font-avenir-400 text-[18px] leading-[27.6px] ">Some quotes from our happy customers</p>
                    <div className='overflow-hidden'>
                        <TestSlider />
                        {/* <div style={{ boxShadow: "0px 4px 24px 0px #8BA7B229" }} className='bg-[#FFFFFF] rounded-[6px] py-[22px] px-[16px]'>
                            <div className='relative pt-[16px]'>
                                <h6 className="text-[32px] absolute top-[0px] leading-[28.8px]">“</h6>
                                <h6 className="text-[32px] absolute bottom-[0px] right-[30px] leading-[28.8px]">”</h6>
                                <p className="font-[400] font-avenir-400 text-[22px] leading-[28px] text-[#101418]">I love this Vitamin C serum, I can see my skin becomes brighter after one to two days only which is remarkable.</p>
                            </div>
                            <div className="flex items-center gap-[12px] pt-[20px] pb-[30px]">
                                <div className="bg-[#D9D9D9] h-[50px] w-[50px] rounded-full"></div>
                                <p className="font-avenir-400 text-[18px] text-[#7C8087]">– Luisa</p>
                            </div>
                            <div className="flex gap-[6px] items-center pb-[14px]">
                                <Image src="/images/footer/star.svg" height={24} width={24} alt='star' />
                                <Image src="/images/footer/star.svg" height={24} width={24} alt='star' />
                                <Image src="/images/footer/star.svg" height={24} width={24} alt='star' />
                                <Image src="/images/footer/star.svg" height={24} width={24} alt='star' />
                                <Image src="/images/footer/star.svg" height={24} width={24} alt='star' />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
