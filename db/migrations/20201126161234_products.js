
exports.up = function (knex) {
    return knex.schema.raw(`create table products(
        id serial primary key,
        title varchar(255) not null,
        description text not null,
        price numeric(8, 2) not null,
        is_promo boolean not null,
        category_id integer references categories(id) not null,
        image jsonb,
        created_at integer not null
    )`);
};

exports.down = function (knex) {
    return knex.schema.raw('drop table products');
};
