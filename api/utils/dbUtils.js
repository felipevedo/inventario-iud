exports.init = () => {
    const mariadb = require('mariadb');

    const pool = mariadb.createPool({
        host: 'localhost',
        user: 'root',
        password: '', // TODO: should be 1234 and come from .env file
        database: 'inventario-iud'
    });

    async function query(sql) {
        let conn;

        try {
            conn = await pool.getConnection();
            let rows = await conn.query(sql);

            return rows;
        } catch (err) {
            console.log('query error: ', err);
            throw err;
        } finally {
            if (conn) conn.end();
        }
    }

    return { query };
};
