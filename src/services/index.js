import {
  getCartDetails,
  addToCart,
  updateInCart,
  removeFromCart,
  applyCouponCode
} from './cartService'
import {
  login,
  register,
  forgotPassword,
  logout,
  getAddresses,
  newEditAddress,
  deleteAddress,
  getUserRank
} from './userService'

import {
  getTopIcons,
  getMenu,
  searchProductsTerms,
  searchProducts
} from './headerService'

import {
  getCustomText1,
  getQuestions,
  getAnswers,
  lastOrder
} from './homeService'

import {
  getProductsList,
  getProductFilters,
  productDetails
} from './productService'

import {
  getContentModule,
  getFooterContent
} from './footerService'
export const CartServices = {
  getCartDetails,
  addToCart,
  updateInCart,
  removeFromCart,
  applyCouponCode
}
export const UserServices = {
  login,
  register,
  forgotPassword,
  logout,
  getAddresses,
  newEditAddress,
  deleteAddress,
  getUserRank
}

export const HeaderServices = {
  getTopIcons,
  getMenu,
  searchProductsTerms,
  searchProducts
}

export const HomeServices = {
  getCustomText1,
  getQuestions,
  getAnswers,
  lastOrder
}

export const ProductServices = {
  getProductsList,
  getProductFilters,
  productDetails
}

export const FooterServices = {
  getContentModule,
  getFooterContent
}
