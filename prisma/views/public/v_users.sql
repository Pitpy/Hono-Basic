SELECT
  u.id,
  u.name,
  u.address,
  u.phone,
  array_to_json((u.arr) :: text []) AS arr
FROM
  users u;