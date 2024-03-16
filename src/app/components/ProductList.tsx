import type { ProductListType } from "@/app/types/product";
import ProductListItem from "@/app/components/ProductListItem";

type Props = {
    productList: ProductListType
}
function ProductList({ productList }: Props) {
    const getProducts = () => {
        return productList.map((product) => {
            return <ProductListItem key={product.id}
                                    product={product}/>
        })
    }
    return <div className={"container mx-auto p-2"}>
        <div className={"flex flex-wrap -mx-2"}>
            {getProducts()}
        </div>
    </div>


}

export default ProductList