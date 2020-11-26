
exports.up = function (knex) {
    return knex.schema.raw(`create table product_views(
        id serial primary key,
        product_id integer references products(id),
        user_id integer references users(id),
        quantity integer not null,
        updated_at integer not null
    )`);
};

exports.down = function (knex) {
    return knex.schema.raw('drop table product_views');
};
