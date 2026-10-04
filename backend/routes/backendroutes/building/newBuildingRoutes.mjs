import express from 'express';
import {
    getNewBuilding,
    postNewBuilding,
} from '../../../controllers/backendcontrollers/building/newBuildingControllers.mjs';
import pictureUploader from '../../../middlewares/morePicturesToCloudinary.mjs';

const newBuildingRouter = express.Router();

newBuildingRouter.get('/', getNewBuilding);
newBuildingRouter.post('/', pictureUploader, postNewBuilding);

export default newBuildingRouter;
