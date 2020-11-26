
exports.up = function (knex) {
    return knex.schema.raw(`create table users(
        id serial primary key,
        email varchar(255) unique not null,
        password varchar(255) not null,
        role_id integer references roles(id) not null
    )`);
};

exports.down = function (knex) {
    return knex.schema.raw('drop table users');
};
