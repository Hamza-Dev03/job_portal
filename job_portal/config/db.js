import mongoose from 'mongoose';
import colors from 'colors'


const connection = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb databse ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`db not connected err:${error} `.bgRed.white)
    }
}
export default connection ;