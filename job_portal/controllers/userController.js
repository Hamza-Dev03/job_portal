// controllers/userController.js

import { updateUser, getUser, deleteUser } from "../services/userService.js";

export const updateUserController = async (req, res, next) => {
    try {
        const { name, email, lastname, location } = req.body;
        const user = await updateUser(req.user.userId, name, email, lastname, location);

        const token = user.createJWT();

        res.status(200).json({
            user,
            token
        });
    } catch (error) {
        next(error.message);
    }
};

export const getUserController = async (req, res, next) => {
    try {
        const user = await getUser(req.user.userId);

        res.status(200).json({
            user,
        });
    } catch (error) {
        next(error.message);
    }
};

export const deleteUserController = async (req, res, next) => {
    try {
        await deleteUser(req.user.userId);

        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        next(error.message);
    }
};
