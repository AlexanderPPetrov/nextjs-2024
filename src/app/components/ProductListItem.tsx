import type { ProductType } from "@/app/types/product";
type Props = {
    product: ProductType
}
function ProductListItem({ product } : Props) {
    return (
        <div className={"w-full md:w-1/3 px-2 mb-3"}>
            <div className={"bg-white rounded-lg shadow-lg overflow-hidden border p-3 h-full"}>

                <button type="button"
                        className="mb-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Primary Button
                </button>

                <img src={product.image}
                     className={"max-w-[150px]"}
                     title={product.title}
                     alt={product.title}/>
                <h3 className={"font-bold mt-2"}>
                    {product.title}
                </h3>
                <p className={"mt-2 text-sm"}>
                    {product.description}
                </p>
            </div>
        </div>

    )
}

export default ProductListItem