import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ 
  product, 
  className = "", 
  style = {},
  showShloka = false,
  showTag = true,
  cardHeight = "350px",
  isMobile = false
}) => {
  const [isTranslated, setIsTranslated] = useState(false);
  
  // Sanskrit and English text
  const sanskritText = "मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥";
  const englishText = "O Charming One! An unprecedented archery is seen in you, by which you pierce hearts with virtues alone, not with arrows.";
  
  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };
  
  if (!product) return null;

  // For mobile slider items, we don't include the outer col div
  if (isMobile) { 
    return (
      <>
        <div
          className={`w-full rounded-[15px] relative overflow-hidden shadow-md ${className}`}
          style={{
            height: cardHeight,
            backgroundImage: `url(${product.image || product.productImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...style,
          }}
        >
          {/* Shloka - Optional */}
          {showShloka && (
            <div
              onClick={toggleTranslation}
              className="absolute top-4 left-4 text-white text-sm font-serif max-w-[70%] leading-6 z-20 rounded-md flex items-start gap-2 cursor-pointer transition-opacity duration-300"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}
            >
              <Image
                src="/translate.png"
                alt="Translation"
                width={40}
                height={40}
                className="flex-shrink-0"
                style={{ marginTop: 2 }}
              />
              <div style={{ fontFamily: isTranslated ? 'Avenir, sans-serif' : 'Georgia, serif', lineHeight: isTranslated ? '1.2' : '1.5' }}>
                {isTranslated ? englishText : (product?.careHandling)}
              </div>
            </div>
          )}

          {/* Tag/Label - Optional */}
          {showTag && (
            <div className="absolute top-2 right-2 bg-black/60 text-white px-3 py-1 text-xs rounded-full z-20 backdrop-blur-sm">
              Ingredients & Benefits
            </div>
          )}

          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/30 via-black/10 to-black/40" />

          {/* Content at bottom */}
          <div className="absolute bottom-0 w-full text-white p-4 font-serif z-20 bg-gradient-to-t from-black/70 via-transparent">
            <h5 className="font-['Rose_Velt_Personal_Use_Only'] font-bold mb-2">
              {product.title || product.name}
            </h5>
            <p className="text-sm">
              {product.desc || product.description}
            </p>
          </div>
        </div>
      </>
    );
  }

  // Desktop version with full column wrapper and button/price section
  return (
    <div className={`w-full ${className}`} style={style}>
      <div className="w-full max-w-[634px]">
        <div className="relative rounded-[20px] h-[433px] overflow-hidden">
          <Image
            src={product.image || product.productImageUrl || '/images/home/img3.jpg'}
            height={433}
            width={634}
            alt={product.name || product.title || product.productTitle || 'Product'}
            className="rounded-[20px] h-[433px] w-full object-cover"
          />

          {/* Gradient overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-[206px]"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)' }}
          />

          {/* Top bar: logo + shloka / button */}
          <div className="absolute top-0 w-full z-10 p-[30px]">
            <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start lg:gap-0 gap-[20px]">
              <div className="flex items-center gap-[14px]">
                <Image src={product.logo || '/images/home/lag.svg'} alt="logo" width={44} height={44} className="object-contain" />
                <h6 className="font-avenir-400 text-[12px] text-[#FFFFFF] max-w-[200px] w-full">
                  {product.shloka || product.sanskrit || sanskritText}
                </h6>
              </div>
              {showTag ? (
                <button className="bg-[#3030304A] font-avenir-400 text-[14px] text-[#FFFFFF] py-[10px] px-[22px] rounded-full">
                  Ingredients & Benefits
                </button>
              ) : null}
            </div>
          </div>

          {/* Bottom content over image */}
          <div className="absolute bottom-0 w-full z-10 p-[30px]">
            <h6 className="font-[400] font-rose text-[32px] text-[#FFFFFF] pb-[6px]">{product.name || product.title || product.productTitle}</h6>
            <p className="font-avenir-400 text-[20px] text-[#FFFFFF]">{product.desc || product.description}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start lg:gap-0 gap-[20px] py-[18px]">
          <div className="flex gap-[6px]">
            <Link href={`/products/${product.id || product._id || '1'}`}>
              <button className="font-avenir-400 text-[18px] text-[#FFFFFF] py-[20px] px-[34px] bg-[#BA7E38] rounded-full border border-[#BA7E38] hover:bg-transparent hover:text-[#BA7E38] transition">
                VIEW PRODUCT
              </button>
            </Link>

            <button aria-label="Add to cart">
              <Image src="/images/home/cart.svg" alt="cart" height={52} width={52} className="object-cover" />
            </button>
            <button aria-label="Like">
              <Image src="/images/home/like.svg" alt="like" height={52} width={52} className="object-cover" />
            </button>
          </div>

          <div className="lg:text-right text-left">
            <h6 className="font-avenir-800 text-[24px] leading-[30px] text-[#000000]">{product.price || '—'}</h6>
            <p className="font-avenir-400 text-[18px] leading-[26px] text-[#00000099]">{product.discount || ''} &nbsp; <s>{product.oldPrice || ''}</s></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;