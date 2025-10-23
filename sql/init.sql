-- Tabela de operadoras
CREATE TABLE IF NOT EXISTS carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

-- Inserir operadoras (conforme enunciado)
INSERT INTO carriers (name, code) VALUES ('Vivo', 15)
ON CONFLICT (name) DO NOTHING;
INSERT INTO carriers (name, code) VALUES ('Tim', 41)
ON CONFLICT (name) DO NOTHING;
INSERT INTO carriers (name, code) VALUES ('Oi', 31)
ON CONFLICT (name) DO NOTHING;
INSERT INTO carriers (name, code) VALUES ('Claro', 21)
ON CONFLICT (name) DO NOTHING;

-- Tabela de telefones
CREATE TABLE IF NOT EXISTS phones (
  id SERIAL PRIMARY KEY,
  document VARCHAR(11) NOT NULL,        -- CPF do cliente (11 dígitos)
  number VARCHAR(11) NOT NULL UNIQUE,   -- Número com DDD (11 dígitos)
  name VARCHAR(200) NOT NULL,           -- Nome do cliente
  description VARCHAR(500) NOT NULL,    -- Descrição do telefone
  carrier_id INTEGER NOT NULL REFERENCES carriers(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Índice para buscar telefones por CPF
CREATE INDEX IF NOT EXISTS idx_phones_document ON phones(document);

-- Tabela de recargas
CREATE TABLE IF NOT EXISTS recharges (
  id SERIAL PRIMARY KEY,
  phone_id INTEGER NOT NULL REFERENCES phones(id),
  value NUMERIC(10,2) NOT NULL CHECK (value >= 10 AND value <= 1000),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Índice para buscar recargas por telefone
CREATE INDEX IF NOT EXISTS idx_recharges_phone_id ON recharges(phone_id);