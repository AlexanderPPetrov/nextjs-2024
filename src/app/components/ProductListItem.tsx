import type { ProductType } from "@/app/types/product";

type Props = {
    product: ProductType
}
function ProductListItem({ product } : Props) {
    return (
        <div>
            { product.title }
        </div>
    )
}

export default ProductListItem