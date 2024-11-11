import JWT from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    // Check if the authorization header is present and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next("Authentication failed: Invalid or missing authorization header");
    }

    // Split the header to extract the token
    const token = authHeader.split(" ")[1];
    if (!token) {
        return next("Authentication failed: Token not found");
    }

    try {
        // Verify the JWT token
        const payload = JWT.verify(token, process.env.JWT_SECRET);
        
        // Attach the user ID from the payload to the request object
        req.user = { userId: payload.userId };
        
        // Proceed to the next middleware
        next();
    } catch (error) {
        // Handle any errors that occur during token verification
        return next("Authentication failed: Invalid token");
    }
};

export default userAuth;
