import { useContext, useState } from "react"
import { createContext } from "react"
import { props } from "../Models/ProductProps"

interface ProductProviderType {
    children: any
}

export interface ProductContextType{
    product: props
    all: props[]
    featured: props[]
    flashSale: props[]
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getFlashSale: (take?: number) => void
}


export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: props = {
                tag: '', articleNumber: '', description:'', name: '', category: '', price: 0, imageName: '' 
       
    }

    const [product, setProduct] = useState<props>(EMPTY_PRODUCT)
    const [all, setAll] = useState<props[]>([])
    const [featured, setFeatured] = useState<props[]>([])
    const [flashSale, setFlashSale] = useState<props[]>([])

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined){
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {        
        const res = await fetch(baseUrl)
        setAll(await res.json())
    }

    const getFeatured = async (take:number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url +=`/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getFlashSale = async (take:number = 0) => {
        let url = `${baseUrl}/FlashSale`
            if (take !== 0)
                url +=`/${take}`
            const res = await fetch(url)
            setFlashSale(await res.json())
    }

return <ProductContext.Provider value = {{product, all, featured, flashSale, get, getAll, getFeatured, getFlashSale}}>
    {children}
    </ProductContext.Provider>
}
export default ProductProvider