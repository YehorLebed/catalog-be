create table roles
(
    id serial primary key,
    name varchar(50) unique not null
);

create table users
(
    id serial primary key,
    email varchar(255) unique not null,
    password varchar(255) not null,
    role_id integer references roles(id) not null
);

create table carts
(
    id serial primary key,
    user_id integer references users(id) not null,
    products jsonb,
    updated_at integer not null
);

create table categories
(
    id serial primary key,
    title varchar(50) not null,
    parent_id integer references categories(id) null
);

create table images
(
    id serial primary key,
    title varchar(255) not null,
    path varchar(255) not null,
    size varchar(255) not null check(size in ('small', 'medium', 'original'))
);

create table products
(
    id serial primary key,
    title varchar(255) not null,
    description text not null,
    price numeric(8, 2) not null,
    is_promo boolean not null,
    category_id integer references categories(id) not null,
    created_at integer not null
);

create table product_views
(
    id serial primary key,
    product_id integer references products(id),
    user_id integer references users(id),
    quantity integer not null,
    updated_at integer not null
);