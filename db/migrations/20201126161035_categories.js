
exports.up = function (knex) {
    return knex.schema.raw(`create table categories(
        id serial primary key,
        title varchar(50) not null,
        parent_id integer references categories(id) null
    )`);
};

exports.down = function (knex) {
    return knex.schema.raw('drop table categories');
};
