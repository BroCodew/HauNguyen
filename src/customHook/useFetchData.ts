import { useEffect, useMemo, useState } from "react"
import productApi from "../api/productApi"
import categoryApi from "../api/categoryApi"
import { kMaxLength } from "buffer"


const useFetchProductId = (productId: any) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState<any | null>(null)


    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await categoryApi.get(productId)
            setProduct(result)
            setLoading(false)

        } catch (error) {
            console.log("error");

        } finally {
            const result = await categoryApi.get(productId)
            setProduct(result)

        }
        setLoading(false)



    }

    const data = useMemo(() => {
        return { loading, product };
    }, [product])

    useEffect(() => { fetchData() }, [productId])
    return [data] as const;
}

export default useFetchProductId;