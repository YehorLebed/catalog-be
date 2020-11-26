
exports.up = function (knex) {
    return knex.schema.raw(`create table carts(
        id serial primary key,
        user_id integer references users(id) not null,
        products jsonb,
        updated_at integer not null
    )`);
};

exports.down = function (knex) {
    return knex.schema.raw('drop table carts');
};
