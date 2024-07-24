import {Router} from "express"
const router=Router()
import { create,getAllLaptop,getSingleLaptop,updateLaptop,deleteLaptop} from "../controller/laptopController.js"

router.route("/laptop").post(create).get(getAllLaptop)
router.route("/laptop/:id").get(getSingleLaptop).patch(updateLaptop).delete(deleteLaptop)
// router.post("/laptop",create)
// router.get("/laptop",getAllLaptop)
// router.get("/laptop/:id",getSingleLaptop)
// router.patch("/laptop/:id",updateLaptop)
// router.delete("/laptop/:id",deleteLaptop)

export default router


