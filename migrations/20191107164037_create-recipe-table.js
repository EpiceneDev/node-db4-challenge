
exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('recipes', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text('name', 255).unique().notNullable();
      // creates a numeric field called budget which is required
      tbl.integer('ingredientId').unsigned()
        .foreign('ingredientId').references('ingredients.id');

      tbl.integer('directionsId').unsigned()
        .foreign('directionsId').references('directions.id');
        
      tbl.onDelete('RESTRICT')
        .onUpdate('CASCADE');

    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('accounts');
  };
  