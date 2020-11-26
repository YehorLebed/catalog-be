
exports.up = function (knex) {
    return knex.schema.raw(`create table roles(
        id serial primary key,
        name varchar(50) unique not null
    )`);
};

exports.down = function (knex) {
    return knex.schema.raw(`drop table roles`);
};
