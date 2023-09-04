const env = process.env;

export const dbConfig = {
    db: {
        host: env.DB_HOST,
        port: Number(env.DB_PORT),
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        ssl: true
    },
    listPerPage: env.LIST_PER_PAGE,
};

export const corsOptions={
    origin: [""],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200,
    preflightContinue: false,
}
