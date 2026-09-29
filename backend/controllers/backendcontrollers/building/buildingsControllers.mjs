import BuildingModel from '../../../models/Building.mjs';

const getBuildings = async (req, res) => {
    try {
        const buildings = await BuildingModel.find({});
        return res.status(200).render('building/buildings.ejs', { buildings });
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

const deleteBuildings = async (req, res) => {
    try {
        const id = req.params.id;
        await BuildingModel.findByIdAndDelete({ _id: id });

        return res.status(200).json({ msg: 'Az épület törlődött!' });
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

const getOneBuilding = async (req, res) => {
    try {
        const id = req.params.id;
        const building = await BuildingModel.findById({ _id: id });

        return res
            .status(200)
            .render('building/one-building.ejs', { building });
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

const updateOneBuilding = async (req, res) => {
    try {
        const id = req.params.id;
        const { nev, leiras, kep } = req.body;
        await BuildingModel.findByIdAndUpdate(
            { _id: id },
            { $set: { nev: nev, leiras: leiras, kep: kep } },
        );

        return res.status(200).json({ msg: 'Sikeres épületmódosítás!' });
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

export { getBuildings, deleteBuildings, getOneBuilding, updateOneBuilding };
