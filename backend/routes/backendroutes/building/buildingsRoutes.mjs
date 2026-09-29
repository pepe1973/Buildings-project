import express from 'express';
import {
    deleteBuildings,
    getBuildings,
    getOneBuilding,
    updateOneBuilding,
} from '../../../controllers/backendcontrollers/building/buildingsControllers.mjs';
import pictureDeleter from '../../../middlewares/onePictureDeleteFromCloudinary.mjs';
import pictureUploader from '../../../middlewares/onePictureToCloudinary.mjs';

const buildingsRouter = express.Router();

buildingsRouter.get('/', getBuildings);
buildingsRouter.delete('/:id', pictureDeleter, deleteBuildings);
buildingsRouter.get('/:id', getOneBuilding);
buildingsRouter.put('/:id', pictureUploader, pictureDeleter, updateOneBuilding);

export default buildingsRouter;
