
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.string('date').notNullable();
      table.string('cover_url'); // Assuming this is the path to the image
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects');
  };
  