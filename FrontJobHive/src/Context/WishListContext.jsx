import React, { createContext } from 'react'
import useLocal from '../Hooks/useLocal'
export const WishListContext = createContext()
function WishListProvider({children}) {
  const [wishlist, setWishlist] = useLocal('wishlist',[])
  return (
    <WishListContext.Provider value={{}}>
      {children}
    </WishListContext.Provider>
  )
}

export default WishListProvider





