-- exo 01

-- Créez une table 'profile" qui contient :
-- - le prénom
-- - le nom de famille
-- - abonnement newsletter (boolean)

-- La relation user 0,1 <-> 1,1 profile est de type 1 <-> 1

-- Créez une table categorie qui contient :
-- - nom
-- - description

-- la relation categorie 0,n <-> 1,1 post est de type 1 <-> n

-- Ajouter contraintes de clé étrangère

CREATE TABLE profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    newsletter BOOLEAN NOT NULL
);


CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

