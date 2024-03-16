import type { ProductListType } from "@/app/types/product";
import ProductList from "@/app/components/ProductList";

async function getData() {
    const res = await fetch(
        'https://fakestoreapi.com/products'
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function Products() {
    const data: ProductListType = await getData()
    return(
        <div>
            <ProductList productList={data}/>
        </div>
    )
}
export default Products