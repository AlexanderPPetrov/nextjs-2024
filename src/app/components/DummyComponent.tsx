import type { Product, ProductListType } from "@/app/types/product";

type Props = {
    title: string
    count: number
    isSelected?: boolean
}
function DummyComponent({ title, count, isSelected }: Props) {
    const dummyProduct: Product = {
        id: 1,
        title: "tralala",
        description: "asd",
        category: "123",
        image: "blabla",
        price: 23,
        rating: {
            rate: 2,
            count: 20
        }
    }
    return(
        <div>
            {title}
            {count}
        </div>
    )
}

export default DummyComponent