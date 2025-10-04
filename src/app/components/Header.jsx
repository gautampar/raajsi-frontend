"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import OTPLogin from "./OTPLogin";

// --- Cart Modal Component ---
const CartModal = ({ onClose }) => {
    return (
        <div
            className="fixed lg:right-[73px] mt-[20px] p-6 w-[360px] bg-white rounded-3xl shadow-2xl border border-gray-100 z-[200]"
        // Prevent the modal from closing when the mouse moves within it
        >
            <div className="flex justify-between items-start">
                <h3 className="text-[24px] font-light font-rose text-[#600B04] tracking-[1.5px] uppercase">SHOPPING CART</h3>
                <button onClick={() => onClose(false)} className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p className="mt-2 text-base text-gray-600 font-avenir-400">Your Cart Is Currently Empty.</p>
            <Link href="/products">
                <button className="font-avenir-400 mt-5 w-fit px-8 bg-[#BA7E38] hover:bg-[#976d3e] text-white font-medium py-3 rounded-3xl transition duration-200 uppercase text-[15px] tracking-[1px]" style={{ boxShadow: "0px 1px 2px 0px #00000040" }}>
                    View Products
                </button>
            </Link>
        </div>
    );
};

// --- Favorites Modal Component ---
const FavoritesModal = ({ onClose }) => {
    return (
        <div
            className="fixed lg:right-[73px] mt-[20px] p-6 w-[360px] bg-white rounded-3xl shadow-2xl border border-gray-100 z-[200]"
        >
            <div className="flex justify-between items-start relative">
                <h3 className="text-[24px] font-light font-rose text-[#600B04] tracking-[1.5px] uppercase">FAVORITE ITEMS</h3>
                {/* Profile image placeholder - adjust path/logic as needed */}

                <button onClick={() => onClose(false)} className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p className="mt-2 text-base font-avenir-400 text-gray-600">Your Favorite Cart Is Currently Empty.</p>
            <Link href="/products">
                <button className="font-avenir-400 mt-5 w-fit px-8 bg-[#BA7E38] hover:bg-[#976d3e] text-white font-medium py-3 rounded-3xl transition duration-200 uppercase text-[15px] tracking-[1px]" style={{ boxShadow: "0px 1px 2px 0px #00000040" }}>
                    Add Products
                </button>
            </Link>
        </div>
    );
};


// --- Header Component ---
export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openModal, setOpenModal] = useState(null);
    const [loginOpen, setLoginOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // lg breakpoint
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <header style={{ boxShadow: "0px 2px 1px 0px #00000014" }} className="fixed top-0 left-0 lg:py-0 py-[14px] w-full bg-white z-100">
                <div className="max-w-[1440px] w-full justify-between mx-auto lg:px-[110px] px-[20px] flex items-center">
                    <div className="hidden lg:flex flex-1 justify-start">
                        <Link href="/" className={`${pathname === "/" ? "nav-link-active" : "nav-link"}`}>Royal Home</Link>
                        <Link href="/the-royal-promise" className={`${pathname === "/the-royal-promise" ? "nav-link-active" : "nav-link"}`}>THE Royal Promise</Link>
                    </div>
                    <div className="flex-shrink-0">
                        {/* Assuming you have a proper logo component/path */}
                        <Link href="/">
                            <Image
                                src="/images/header/logo.svg"
                                alt="Logo"
                                width={61}
                                height={72}
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex flex-1 justify-end items-center">
                        <Link href="/our-essence" className={`${pathname === "/our-essence" ? "nav-link-active" : "nav-link"}`}>Our Essence</Link>
                        <div className="relative group top-[-4px]">
                            <Link
                                href="/feature-products"
                                className={`${pathname === "/feature-products" ? "nav-link-active" : "nav-link"
                                    }`}
                            >
                                Featured Products
                            </Link>

                            {/* Dropdown */}
                            <div className="absolute right-[0px] top-[60px] py-[25px] px-[34px] hidden group-hover:block bg-white shadow-lg rounded-[30px] w-[722px]">
                                <div className="grid gap-[34px] lg:grid-cols-4">
                                    <div className="max-w-172px] w-full">
                                        <h6 className="text-[14px] font-avenir-800 text-[#404040] uppercase border-b border-[#767676] pb-[5px]">body therapy</h6>
                                        <ul className="pt-[14px] flex flex-col gap-[14px]">
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-w-172px] w-full">
                                        <h6 className="text-[14px] font-avenir-800 text-[#404040] uppercase border-b border-[#767676] pb-[5px]">HAIR therapy</h6>
                                        <ul className="pt-[14px] flex flex-col gap-[14px]">
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-w-172px] w-full">
                                        <h6 className="text-[14px] font-avenir-800 text-[#404040] uppercase border-b border-[#767676] pb-[5px]">SKIN therapy</h6>
                                        <ul className="pt-[14px] flex flex-col gap-[14px]">
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-w-172px] w-full">
                                        <h6 className="text-[14px] font-avenir-800 text-[#404040] uppercase border-b border-[#767676] pb-[5px]">HAIR therapy</h6>
                                        <ul className="pt-[14px] flex flex-col gap-[14px]">
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Cosmic Oil
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-[6px]">
                                                <Image src="/images/header/Vector.svg" alt="Step 1" className='lg:h-[24px] lg:w-[16px] object-cover' width={19} height={13} />
                                                <Link
                                                    href="/feature-products/category1"
                                                    className="font-avenir-400 text-[16px] text-[#404040]"
                                                >
                                                    Lavish Body
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[30px] relative">
                            {/* Profile Icon */}
                            <button className="relative" onClick={() => setLoginOpen(true)}>
                                <Image src="/images/header/profile.svg" alt="Profile" width={28} height={28} />
                            </button>

                            {/* Favorites/Wishlist Icon with Modal */}
                            <div
                                className="relative cursor-pointer"
                                onClick={() => setOpenModal(openModal === "favorites" ? null : "favorites")}
                            >
                                <Image src="/images/header/wishlist.svg" alt="Wishlist" width={28} height={28} />
                            </div>
                            {/* Cart Icon with Modal */}
                            <div
                                className="relative cursor-pointer"
                                onClick={() => setOpenModal(openModal === "cart" ? null : "cart")}
                            >
                                <Image src="/images/header/cart.svg" alt="Cart" width={28} height={28} />

                            </div>
                        </div>
                    </div>
                    {/* ... (Mobile Menu Button and logic remains the same) ... */}
                    <button
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative gap-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span
                            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-[5px]" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                }`}
                        />
                    </button>

                </div>
                <div
                    className={`fixed inset-0 bg-[#0000009e] z-[105] transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[110] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col mt-10 mx-6 gap-3">
                        <Link href="/" className={`${pathname === "/" ? "nav-link-active" : "nav-link"}`} onClick={() => setMenuOpen(false)}>Royal Home</Link>
                        <Link href="/the-royal-promise" className={`${pathname === "/the-royal-promise" ? "nav-link-active" : "nav-link"}`} onClick={() => setMenuOpen(false)}>THE Royal Promise</Link>
                        <Link href="/our-essence" className={`${pathname === "/our-essence" ? "nav-link-active" : "nav-link"}`} onClick={() => setMenuOpen(false)}>Our Essence</Link>
                        <Link href="/feature-products" className={`${pathname === "/feature-products" ? "nav-link-active" : "nav-link"}`} onClick={() => setMenuOpen(false)}>Featured Products</Link>
                        <div className="flex gap-[20px] mt-6">
                            <Link href=""><Image src="/images/header/profile.svg" alt="Profile" width={28} height={28} /></Link>
                            <button onClick={() => setOpenModal(openModal === "favorites" ? null : "favorites")} ><Image src="/images/header/wishlist.svg" alt="Wishlist" width={28} height={28} /></button>
                            <button onClick={() => setOpenModal(openModal === "cart" ? null : "cart")} ><Image src="/images/header/cart.svg" alt="Cart" width={28} height={28} /></button>
                        </div>
                    </div>
                </div>

            </header>
            {openModal === "favorites" && (
                <FavoritesModal onClose={() => setOpenModal(null)} />
            )}
            {openModal === "cart" && (
                <CartModal onClose={() => setOpenModal(null)} />
            )}

            {loginOpen && (
                <div className="auth-modal-overlay" onClick={() => setLoginOpen(false)}>
                    <div className="auth-modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
                        <OTPLogin setLoginOpen={setLoginOpen} />
                    </div>
                </div>
            )}
        </>

    );
}