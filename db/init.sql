-- set up schema/tables
CREATE TABLE parents (
    id SERIAL PRIMARY KEY,
    name TEXT,
    kills INT DEFAULT 0
    -- kills INT NOT NULL
);

CREATE TABLE children (
    id SERIAL PRIMARY KEY,
    name TEXT,
    title TEXT,
    parent_id INT, -- for one-to-many (many children to one parent)
    FOREIGN KEY (parent_id) REFERENCES parents(id)
);

-- adding default iformation
INSERT INTO parents (name) VALUES ('Anakin');

INSERT INTO children
    (name, title, parent_id)
VALUES
    ('Luke', 'New Hope', 1),
    ('Leia', 'Princess of Alderaan', 1);

-- grab brand-new data
SELECT * FROM parents p INNER JOIN children c ON p.id = c.parent_id;

-- many-to-many (many children to many parents)
-- CREATE TABLE child_parent (
--     child_id INT FOREIGN KEY REFERENCES children(id),
--     parent_id INT FOREIGN KEY REFERENCES parents(id),
--     created_on DATE,
--     modified_on DATE,
--     modified_by INT FOREIGN KEY REFERENCES users(id)
-- );

-- child  | parent
-- 1      | 1
-- 2      | 1
-- 1      | 2
-- 2      | 3       -- ERROR!