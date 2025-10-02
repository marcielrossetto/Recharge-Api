-- Tabelas base
CREATE TABLE IF NOT EXISTS carriers (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
code INT NOT NULL
);


INSERT INTO carriers (name, code) VALUES ('Vivo', 15)
ON CONFLICT (name) DO NOTHING;
INSERT INTO carriers (name, code) VALUES ('Tim', 41)
ON CONFLICT (name) DO NOTHING;
INSERT INTO carriers (name, code) VALUES ('Oi', 31)
ON CONFLICT (name) DO NOTHING;
INSERT INTO carriers (name, code) VALUES ('Claro', 21)
ON CONFLICT (name) DO NOTHING;


-- Clientes (CPF como documento)
CREATE TABLE IF NOT EXISTS customers (
id SERIAL PRIMARY KEY,
document VARCHAR(14) NOT NULL UNIQUE, -- CPF apenas dígitos
name VARCHAR(255) NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);


-- Telefones
CREATE TABLE IF NOT EXISTS phones (
id SERIAL PRIMARY KEY,
number VARCHAR(20) NOT NULL UNIQUE, -- ex: 11971234112
name VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
carrier_id INT NOT NULL REFERENCES carriers(id),
customer_id INT NOT NULL REFERENCES customers(id),
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);


-- Recargas
CREATE TABLE IF NOT EXISTS recharges (
id SERIAL PRIMARY KEY,
phone_id INT NOT NULL REFERENCES phones(id),
amount NUMERIC(10,2) NOT NULL CHECK (amount >= 10 AND amount <= 1000),
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);


-- Índices úteis
CREATE INDEX IF NOT EXISTS idx_customers_document ON customers(document);
CREATE INDEX IF NOT EXISTS idx_phones_customer ON phones(customer_id);
CREATE INDEX IF NOT EXISTS idx_recharges_phone ON recharges(phone_id);