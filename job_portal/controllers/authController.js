// controllers/authController.js

import { registerUser, loginUser } from "../services/authService.js";

export const authUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await registerUser(name, email, password);

        // Create a token
        const token = user.createJWT();

        res.status(200).json({
            success: true,
            message: "User created",
            user: {
                name: user.name,
                lastname: user.lastname,
                email: user.email
            },
            token
        });
    } catch (error) {
        next(error.message);
    }
};

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);

        // Create a token
        const token = user.createJWT();

        res.status(200).json({
            success: true,
            message: "Login successful",
            user,
            token
        });
    } catch (error) {
        next(error.message);
    }
};
