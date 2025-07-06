import CartContents from '../_components/Cart/CartContents';

function CartPage() {
    return (
        <div className="container mx-auto px-5 py-8 sm:px-7 lg:px-8 lg:w-[52rem]">
            <h1 className="text-2xl md:text-3xl text-blue-600 font-bold mb-8">
                Shopping Cart
            </h1>

            <CartContents />
        </div>
    );
}

export default CartPage;
