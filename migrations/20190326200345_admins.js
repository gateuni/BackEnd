exports.up = function(knex, Promise) {
  return knex.schema.addTable("admins", admin => {
    admin.increments();
    admin.string("roll", 123).notNullable();

    admin.string("name", 123).notNullable();

    admin.string("password", 123).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("admin");
};
