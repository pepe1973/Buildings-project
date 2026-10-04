import mongoose from 'mongoose';

const buildingSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: true,
        },
        leiras: {
            type: String,
            required: true,
        },
        kep: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const BuildingModel = mongoose.model('building', buildingSchema);

export default BuildingModel;
