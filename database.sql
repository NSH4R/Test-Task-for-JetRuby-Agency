CREATE TABLE repositories (
    id varchar(255) PRIMARY KEY,
    name varchar(255),
    url varchar(255),
    stars integer,

    CONSTRAINT unique_id UNIQUE (id)
);
