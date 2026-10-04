import BuildingModel from '../../../models/Building.mjs';

const getOneBuilding = async (req, res) => {
    try {
        const id = req.params.id;
        const building = await BuildingModel.findById({ _id: id });

        return res
            .status(200)
            .render('building/new-building-pictures.ejs', { building });
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

const updateOneBuilding = async (req, res) => {
    try {
        const id = req.params.id;
        const { kepek } = req.body;
        await BuildingModel.findByIdAndUpdate(
            { _id: id },
            { $set: { kepek: kepek } },
        );

        return res
            .status(200)
            .json({ msg: 'Sikeres épületmódosítás képfeltöltéssel!' });
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.msg}` });
    }
};

export { getOneBuilding, updateOneBuilding };
