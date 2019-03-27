exports.up = function(knex, Promise) {
  return knex.schema.creatTable("students", student => {
    student.increments();
  });
};

exports.down = function(knex, Promise) {};
