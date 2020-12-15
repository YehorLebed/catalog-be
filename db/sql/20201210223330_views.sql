-- 1. account data

create view users_with_roles
as
    select u.id, u.email, r.id as role_id, r.name as role_name
    from users u join roles r on r.id = u.role_id;

-- 2. product data

create view products_with_categories
as
    select
        p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at,
        c.id as category_id, c.title as category_title
    from products p
        join categories c on (c.id = p.category_id);

-- 3. most viewed products by user
create view most_viewed_products
as
    select 
        p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at, p.category_id, p.category_title,
        pv.user_id, pv.product_id, pv.quantity, pv.updated_at
    from product_views pv
    join products_with_categories p on (p.id = pv.product_id)
    order by quantity desc;
