# stage-2-catalog

### How to work with knex migrations and seed:
    1. Drop database and create new
    2. Apply migrations using: ** $ knex migrate:all **
    3. Apply seed using ** $ knex seed:run **
** It is important to use seed before any data have been inserted into your database **

### Routes

Authentication:
    -- [POST] /authentication/registration  "registrate user"
    -- [POST] /authentication/login         "login user"

Product:
    -- [GET]   /products                    "get all products"
                        ?search=name
                        ?minPrice=100
                        ?maxPrice=250
                        ?category=2
                        ?page=1&amount=1
    -- [GET]   /products/:id                "get product by id"

    -- [POST]   /admin/products/
    -- [PUT]    /admin/products/:id
    -- [DELETE] /admin/products/:id

Category
    -- [GET]   /categories
                          ?parentId=1|null
                          ?page=1&amount=1
    -- [GET]   /categories/:id

    -- [POST]   /admin/category/
    -- [PUT]    /admin/category/:id
    -- [DELETE] /admin/category/:id

Image: