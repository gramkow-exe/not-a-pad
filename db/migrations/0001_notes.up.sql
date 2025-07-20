CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    type TEXT,
    link TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
