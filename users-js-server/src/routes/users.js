import { Router } from 'express';
import UserModel from '../models/user.js';

const userRouter = Router();

userRouter.route('/')
    .get(async (req, res) => {
        const users = await UserModel.find();
        res.send(users.filter((x, index) => index < 10));
    })
    .post(async (req, res) => {
        try {
            const { _id, createdOn, ...newData } = req.body;
            const newUser = await UserModel.create(newData);
            res.status(201).send(newUser);
        } catch (err) {
            res.status(400).send(err);
        }
    });

userRouter.param('id', async (req, res, next, id) => {
    try {
        req.user = await UserModel.findById(id);
    } catch { }

    if (req.user === undefined || req.user === null) {
        res.status(404).send(`User id: '${id}' not found`);
        return;
    }

    next();
});

userRouter.route('/:id')
    .get(async (req, res) => {
        res.send(req.user);
    })
    .patch(async (req, res) => {
        let user = req.user;
        const { _id, createdOn, ...changes } = req.body;
        Object.assign(user, changes);
        try {
            user = await user.save();
        } catch (e) {
            res.send(e);
            return;
        }

        res.send(user);
    })
    .delete(async (req, res) => {
        const user = req.user;
        const result = await user.deleteOne();
        res.send(result.acknowledged);
    });

export default userRouter;
