
exports.up = function (knex) {
    return knex.schema.table('skills', function (table) {
      table.renameColumn('code', 'area');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('skills', function (table) {
      table.renameColumn('code', 'area');
    });
  };