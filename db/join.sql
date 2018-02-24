SELECT p.id as "Parent id",
       p.name as "Parent name",
       p.kills as "Parent kills",
       c.id as "Child id",
       c.name as "Child name",
       c.title as "Child title"
FROM parents p INNER JOIN children c ON p.id = c.parent_id;