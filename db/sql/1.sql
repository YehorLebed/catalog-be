with recursive r as
    (
        select id
    from categories
    where id = 3
union
    select id
    from categories c
        join r on c.parent_id = r.id
        )

select p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at
from r join products p on p.category_id = r.id
limit 10 offset 0;