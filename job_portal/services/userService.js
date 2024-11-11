// services/userService.js

import userModel from "../models/userModel.js";

export const updateUser = async (userId, name, email, lastname, location) => {
    if (!name || !email || !location || !lastname) {
        throw new Error("Please provide all fields");
    }

    const user = await userModel.findOne({ _id: userId });
    if (!user) {
        throw new Error("User not found");
    }

    user.name = name;
    user.email = email;
    user.location = location;
    user.lastname = lastname;

    await user.save();

    return user;
};

export const getUser = async (userId) => {
    if (!userId) {
        throw new Error("User not authenticated");
    }

    const user = await userModel.findOne({ _id: userId });
    if (!user) {
        throw new Error("User not found");
    }

    return user;
};

export const deleteUser = async (userId) => {
    const user = await userModel.findOneAndDelete({ _id: userId });
    if (!user) {
        throw new Error("User not found");
    }

    return true;
};
