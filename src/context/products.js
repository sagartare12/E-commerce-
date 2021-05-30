import React, {createContext , useState , useContext} from 'react'
import  data from'../products.json'
 
const ProductContext = createContext();
 export const ProductsProvider = ({ children}) => {
    
    
    const [ isLoading , setIsLoading ] = useState(false);
    const { id } =  data;
console.log(data)

   return <ProductContext.Provider value={ { isLoading , data }}>
       {children}
   </ProductContext.Provider>
}

export const useProduct = () => useContext(ProductContext);