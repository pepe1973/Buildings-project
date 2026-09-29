import dotenv from 'dotenv';
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pictureUploader = async (req, res, next) => {
    try {
        const { kep } = req.body;

        if (kep.toString().includes('http')) {
            const { kep } = req.body;
            const result = await cloudinary.uploader.upload(kep);

            req.body.kep = result.url;
            next();
        } else {
            const feltoltKep = path.join(
                __dirname,
                '..',
                'public',
                'images',
                kep,
            );
            const result = await cloudinary.uploader.upload(feltoltKep);

            req.body.kep = result.url;

            next();
        }
    } catch (error) {
        console.error('Cloudinary hiba:', error);
        res.status(500).json({
            msg: 'Képfeltöltési hiba!',
        });
    }
};

export default pictureUploader;
