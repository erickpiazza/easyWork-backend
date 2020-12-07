module.exports =  {
    "type":"postgres",
    "url":process.env.DATABASE_URL,

    "entities":[process.env.APP_ENTITIES],
    "migrations":[
        process.env.APP_MIGRATIONS
    ],
    "cli":{
        "migrationsDir":"./src/shared/infra/typeorm/migrations"
    }
}

//

