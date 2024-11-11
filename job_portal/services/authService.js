// services/authService.js

import userModel from "../models/userModel.js";

export const registerUser = async (name, email, password) => {
    if (!name) throw new Error("Name is required");
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) throw new Error("Email already registered, please login");

    // Create a new user
    const user = await userModel.create({ name, email, password });

    return user;
};

export const loginUser = async (email, password) => {
    if (!email || !password) throw new Error("Please provide all fields");

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) throw new Error("Invalid username and password");

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid username or password");

    return user;
};
