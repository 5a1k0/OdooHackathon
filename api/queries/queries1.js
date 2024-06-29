const getUsers = 'SELECT * FROM users';
const getuserById = 'SELECT * FROM users WHERE id = $1';
const createUser = "INSERT INTO users (id, first_name, last_name, email, password, age, gender) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const checkEmail = "SELECT * FROM users WHERE email = $1";
const updateUser = 'UPDATE users SET first_name = $1, last_name = $2, password = $3 WHERE id = $4';
const removeUser = 'DELETE FROM users WHERE id=$1'

const addValues = 'INSERT INTO usersPref (id, dietary_preferences, weight, height, health_issue, health_goals) VALUES ($1, $2, $3, $4, $5, $6)'
const getCardValue = 'SELECT ni.food_name,ni.dietary_preference,ni.nutrition,ni.description,ni.diseases FROM usersPref up JOIN nutritional_information ni ON up.dietary_preferences = ni.dietary_preference WHERE up.id = $1'

module.exports = {
    getUsers,
    getuserById,
    createUser,
    checkEmail,
    updateUser,
    removeUser,
    addValues,
    getCardValue,
};
