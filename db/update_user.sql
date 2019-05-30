UPDATE users
SET username = $1
WHERE
   users.id = $2