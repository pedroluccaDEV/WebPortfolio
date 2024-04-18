
exports.up = function(knex) {
    return knex.schema.createTable('skills', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.string('image').notNullable(); // Assuming this is the path to the image
      table.string('code')
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('skills');
  };
  
