import  express from "express"
import HandleErrors from "../../../middleware/handleErrors"
import { verifyToken, checkPermission } from "../../../middleware/authMiddleware";
import { CREATE_PRODUCT_PERMISSIONS, READ_ORDER_PERMISSIONS, READ_PRODUCT_PERMISSIONS, UPDATE_ORDER_PERMISSIONS, UPDATE_PRODUCT_PERMISSIONS } from "../../../utils/CommonConstants";
import { CreateProduct, EditProduct, ReadOrder, ReadProduct, UpdateOrder, UpdateProduct } from "./controllers";
const ProductRouter=express.Router()
ProductRouter.post('/create', verifyToken ,checkPermission(CREATE_PRODUCT_PERMISSIONS), HandleErrors(CreateProduct))
ProductRouter.get('/read', verifyToken ,checkPermission(READ_PRODUCT_PERMISSIONS), HandleErrors(ReadProduct))
ProductRouter.get('/edit/:id', verifyToken ,checkPermission(UPDATE_PRODUCT_PERMISSIONS), HandleErrors(EditProduct))
ProductRouter.put('/update/:id', verifyToken ,checkPermission(UPDATE_PRODUCT_PERMISSIONS), HandleErrors(UpdateProduct))
// Orders api routes
ProductRouter.get('/read-orders', verifyToken ,checkPermission(READ_ORDER_PERMISSIONS), HandleErrors(ReadOrder))
ProductRouter.put('/update-orders/:id', verifyToken ,checkPermission(UPDATE_ORDER_PERMISSIONS), HandleErrors(UpdateOrder))

export default ProductRouter;

