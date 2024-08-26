require('dotenv').config();

const {Client} = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS user_messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        message TEXT,
        username TEXT,
        added date DEFAULT NOW()    
        )
`;

const user = process.env.PGUSER;
const password = process.env.PGPASSWORD;
const db = process.env.PGDATABASE;
const host = process.env.PGHOST;
const port = process.env.PGPORT;

async function main() {
    // console.log({user, password, db, host, port});
    // console.log(`postgresql://${user}:${password}@${host}:${port}/${db}`);
    // console.log(process.env.PGPORT || 3000);

    const client = new Client({
        connectionString: `postgresql://${user}:${password}@${host}:${port}/${db}`
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    // console.log('ended');
}

main();
