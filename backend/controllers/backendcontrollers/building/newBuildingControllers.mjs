import BuildingModel from '../../../models/Building.mjs';

const getNewBuilding = (req, res) => {
    try {
        return res.status(200).render('building/new-building.ejs');
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

const postNewBuilding = async (req, res) => {
    try {
        const { nev, leiras, kep } = req.body;

        if (!nev || !leiras || !kep) {
            return res
                .status(400)
                .json({ msg: 'Minden mező kitöltése kötelező!' });
        }
        const newBuilding = new BuildingModel({ nev, leiras, kep });
        await newBuilding.save();

        return res.status(201).json({ msg: 'Létrejött az új épület!' });
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

export { getNewBuilding, postNewBuilding };
