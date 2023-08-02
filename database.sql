
create TABLE repositories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    url VARCHAR(255),
    stars INTEGER
);