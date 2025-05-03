import express from "express"
import { getAllProducts,getFeaturedProducts,createProduct,deleteProduct,getRecommendedProducts,
    getProductsByCategory,toggleFeaturedProduct } from "../controllers/product.controller.js"
import { protectRoute, adminRoute } from "../middlewares/auth.middleware.js"
const router=express.Router()
router.get("/",protectRoute,adminRoute,getAllProducts)
router.get("/featured",getFeaturedProducts);

router.post("/",protectRoute,adminRoute,createProduct)

router.get("/recommendations", getRecommendedProducts);
router.get("/category/:category", getProductsByCategory);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);

export default router
 