import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
//inti models => users,Customers,Order,......

const conn = initModels(sequelize);

const getLike = async (req, res) => {
    try {
        let data = await conn.like_res.findAll();
        res.send(data);
    } catch (error) {
        console.log(`Back end error: ${error}`)
    }
};

const deleteLike = async (req, res) => {
    try {
         let { UserId, ResId } = req.params;
        // const UserId = req.query.userId;
        // const ResId = req.query.resId;
        console.log(UserId,ResId)
        await conn.like_res.destroy({
            where: {
                user_id: UserId,
                res_id: ResId,
            }
        });


        res.send(`Delete UserId:${UserId}  ResId:${ResId} successfull!`);
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}

const createLike = async (req, res) => {
    try {
        let { user_id, res_id, date_like } = req.body;
        let newData = {
            user_id,
            res_id,
            date_like
        }
        await conn.like_res.create(newData);
        res.send("Create like successfull");
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}

const getListLikeByUser = async (req, res) => {
    try {
        let { UserId } = req.params;
        console.log(req)
        let data = await conn.like_res.findAll({

            where: {
                user_id: UserId,
            }
        });

        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}



const createRate = async (req, res) => {
    try {
        let { user_id, res_id, amount, date_rate } = req.body;
        let newData = {
            user_id,
            res_id,
            amount,
            date_rate,
        }
        await conn.rate_res.create(newData);
        res.send("Create rate successfull");
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}

const createOrder = async (req, res) => {
    try {
        let { user_id, food_id, amount, code,arr_sub_id} = req.body;
        let newData = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id,
        }
        await conn.orderfood.create(newData);
        res.send("Create order successfull");
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}
export {
    getLike,
    deleteLike,
    createLike,
    getListLikeByUser,
    createRate,
    createOrder,
}