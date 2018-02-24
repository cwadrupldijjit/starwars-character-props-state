INSERT INTO children (name, title, parent_id)
VALUES (${name}, ${title}, ${parentId});

SELECT * FROM children order by id desc limit 1;