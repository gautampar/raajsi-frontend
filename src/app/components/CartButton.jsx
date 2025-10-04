
import { addToCart } from "@/api/auth";
import Image from "next/image";


const CartButton = ({ productId, quantity = 1 }) => {
  const handleAddToCart = async () => {
    try {
      const result = await addToCart(productId, "", quantity);
      console.log("Cart Response:", result);
    } catch (err) {
      console.error("Cart Error:", err);
    }
  };

  return (
    <button onClick={handleAddToCart}>
      <Image
        src="/images/home/cart.svg"
        alt="cart"
        height={40}
        width={40}
        className="object-cover md:h-[52px] md:w-[52px]"
      />
    </button>
  );
};

export default CartButton;
