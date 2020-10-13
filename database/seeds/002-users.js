exports.seed = function (knex) {
  return knex("users").insert([
    { username: "Billy", password: "bob", role: 1 },
    { username: "Jack", password: "daniels" },
    { username: "Roscoe", password: "wayne" },
  ]);
};
