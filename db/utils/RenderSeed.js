class RenderSeed {


    /**
    * apply knex seed migration
    * @param {Knex}      knex      knex object
    * @param {string}    tableName table name
    * @param {string[]}  columns   columns
    * @param {any[]}     items     items
    * @return {Promise<any>}
    */
    static render(knex, tableName, columns, items) {
        // prepare sql statement
        const deleteStatement = RenderSeed.prepareDeleteStatement(tableName);
        const insertStatement = RenderSeed.prepareInsertStatement(tableName, columns, items);
        // knex run sql statements
        return knex.raw(deleteStatement).then(() => knex.raw(insertStatement));
    }

    /**
     * prepare delete statement
     * @param   {string}  table  table name
     * @return  {string}
     */
    static prepareDeleteStatement(table) {
        return `delete from ${table}`;
    }

    /**
     * prepare sql statement
     * @param   {string}    table       table name
     * @param   {string[]}  columns  table columns
     * @param   {any[]}       items       items to insert
     * @return  {string}
     */
    static prepareInsertStatement(table, columns, items) {
        // prepare sql for columns
        let insertColumns = '';
        columns.forEach((column, idx) => {
            insertColumns += idx !== columns.length - 1 ? `${column},` : column;
        });

        // prepare sql for items to insert
        let insertItems = '';
        items.forEach((item, idx) => {
            insertItems += '(';
            columns.forEach((column, idx) => {
                // add "'" if data is string
                insertItems += typeof item[column] !== 'string'
                    ? item[column] : `'${item[column]}'`;

                // add "," if not last item
                if (idx !== columns.length - 1) {
                    insertItems += ','
                }
            })
            insertItems += idx !== items.length - 1
                ? '),' : ')';
        });
        return `insert into ${table}(${insertColumns}) values ${insertItems}`;
    }
}

module.exports = { RenderSeed };