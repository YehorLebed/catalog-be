
exports.up = function (knex) {
    return knex.schema.raw(`create table images(
        id serial primary key,
        title varchar(255) not null,
        path varchar(255) not null,
        size varchar(255) not null check(size in ('small', 'medium', 'original'))
    )`);
};

exports.down = function (knex) {
    return knex.schema.raw('drop table images');
};
