CREATE SCHEMA private;
CREATE SEQUENCE IF NOT EXISTS "private".url_sequence start 100000000000 increment 1;
CREATE TABLE IF NOT EXISTS "private".short_url (
    id BIGINT PRIMARY KEY,
    long_url Text NOT NULL
);
CREATE TABLE IF NOT EXISTS "private".matric(
    id BIGSERIAL PRIMARY KEY,
    url_id BIGINT REFERENCES "private".short_url(id) NOT NULL,
    use_count SERIAL NOT NULL
);