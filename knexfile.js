'use strict';

 module.exports = {
     development: {
         client: 'pg',
         connection: 'postgres://localhost/yarn_dev',
     },
     production: {
         client: 'pg',
         connection: process.env.DATABASE_URL,
     }
 }




 // migrations: {
 //     directory: './server/db/migrations'
 // },
 // seeds: {
 //     directory: './server/db/seeds'
 // }
