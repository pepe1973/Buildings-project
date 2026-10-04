import express from 'express';
import {
    getOneBuilding,
    updateOneBuilding,
} from '../../../controllers/backendcontrollers/building/newBuildingPicturesControllers.mjs';
import pictureUploader from '../../../middlewares/morePicturesToCloudinary.mjs';
import pictureDeleter from '../../../middlewares/morePicturesDeleteFromCloudinary.mjs';

const newBuildingPicturesRouter = express.Router();

newBuildingPicturesRouter.get('/:id', getOneBuilding);
newBuildingPicturesRouter.patch(
    '/:id',
    pictureUploader,
    pictureDeleter,
    updateOneBuilding,
);

export default newBuildingPicturesRouter;
