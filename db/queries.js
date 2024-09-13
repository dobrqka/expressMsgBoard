const pool = require("./pool");

async function getAll() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function newMessagePost(user, message) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    user,
    message,
  ]);
}

async function deleteAll() {
  try {
    await pool.query("DELETE FROM messages;");
    console.log("All messages deleted successfully.");
  } catch (error) {
    console.error("Error deleting messages:", error.message);
  }
}

module.exports = {
  getAll,
  newMessagePost,
  deleteAll,
};
