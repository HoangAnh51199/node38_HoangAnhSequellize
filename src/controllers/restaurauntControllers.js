import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getListLikeByRes = async (req, res) => {
    try {
        let { ResId } = req.params;
        console.log(req)
        let data = await conn.like_res.findAll({

            where: {
                res_id: ResId,
            }
        });

        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}


const getListRateByRes = async (req, res) => {
    try {
        let { ResId } = req.params;
        console.log(req)
        let data = await conn.rate_res.findAll({

            where: {
                res_id: ResId,
            }
        });

        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}


export {
    getListLikeByRes,
    getListRateByRes,
}