import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);

async function dbConnect() {
    try {
        const kapcsolat = await mongoose.connect(process.env.MONGO_DB);
        return kapcsolat;
    } catch (error) {
        console.log(`Adatbázis hiba: ${error.message}`);
    }
}

export default dbConnect;
