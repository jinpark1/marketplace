select products.*, users.email, users.online_id from users
join products on users.id = users_id
order by products.id asc;