-- PROMOTION table
CREATE TABLE promotion(
	promotion_id VARCHAR(4) NOT NULL PRIMARY KEY,
	promotion_name VARCHAR(50),
	promotion_owner VARCHAR(50),
	popularity INT,
	network VARCHAR(20),
	promotion_description VARCHAR(250),
	abbreviation VARCHAR(8)
);

-- ALLEGIANCE table
CREATE TABLE allegiance(
	allegiance_id VARCHAR(1) NOT NULL PRIMARY KEY,
	allegiance_name VARCHAR(10),
	allegiance_description VARCHAR(100)
);

-- STYLE table
CREATE TABLE wrestling_style(
	style_id VARCHAR(4) NOT NULL PRIMARY KEY,
	style_name VARCHAR(20),
	style_description VARCHAR(150),
	style_popularity INT
);

-- FINISHER table
CREATE TABLE finisher(
	finisher_id INT NOT NULL PRIMARY KEY,
	finisher_name VARCHAR(20),
	finisher_description VARCHAR(50),
	finisher_popularity INT
);

-- WRESTLER TABLE
CREATE TABLE pro_wrestler(
	wrestler_id INT NOT NULL PRIMARY KEY,
	wrestler_name VARCHAR(50),
	promotion_id VARCHAR(4),
	gender VARCHAR(1),
	allegiance_id VARCHAR(1),
	style_id VARCHAR(4),
	finisher_id INT,
	bio VARCHAR(200),
	FOREIGN KEY(promotion_id) REFERENCES promotion(promotion_id) ON DELETE SET NULL,
	FOREIGN KEY(allegiance_id) REFERENCES allegiance(allegiance_id) ON DELETE SET NULL,
	FOREIGN KEY(style_id) REFERENCES wrestling_style(style_id) ON DELETE SET NULL,
	FOREIGN KEY(finisher_id) REFERENCES finisher(finisher_id) ON DELETE SET NULL
);

-- Add abbreviation column to promotion table
ALTER TABLE promotion
ADD abbreviation VARCHAR(10);

--POPULATING Promotion table
INSERT INTO promotion VALUES('001', 'World Wrestling Entertainment', 'Vince McMahon',
							 '98', 'USA', 'The top wrestling promotion in the world', 'WWE');
INSERT INTO promotion VALUES('002', 'All Elite Wrestling', 'Tony Khan', '90', 'TNT',
							 'Revolutionizing the wrestling game!', 'AEW');
INSERT INTO promotion VALUES('003', 'National Wrestling Alliance', 'State-Owned', '82', 'MTV',
							 'Restoring the integrity of Pro Wrestling', 'NWA');
INSERT INTO promotion VALUES('004', 'Total Non-Stop Action', 'Dixie Carter', '70', 'YOUTUBE',
							 'Exhilirating action', 'TNA');
INSERT INTO promotion VALUES('005', 'New Japan Pro Wrestling', 'Fujimoto', '84', 'Toonito',
							 'Japanese Wrestling at its finest', 'NJPW');		 
SELECT * FROM promotion;	

-- POPULATE allegiance table
INSERT INTO allegiance VALUES('F', 'Babyface', 'Good guys that do everything to please the crowd and win fair and square');
INSERT INTO allegiance VALUES('H', 'Heel', 'Despicable stars that do whatever it takes to win');
SELECT * FROM allegiance;


-- POPULATE wrestling_style table
INSERT INTO wrestling_style VALUES('PWH', 'Powerhouse', 'Power beyond measure, Never challenge them to an arm wrestling contest', 85);
INSERT INTO wrestling_style VALUES('HF', 'High Flyer', 'Exciting, Innovative, A pleasure to watch. They risk it all by taking to the sky', 92);
INSERT INTO wrestling_style VALUES('STR', 'Striker', 'Lethal, Quick, Unpredictable. Strikers tear down their opponents with ruthless efficiency', 82);
INSERT INTO wrestling_style VALUES('SUB', 'Submission Master', 'Masters of torture and manipulation. Best to avoid direct contact', 83);
SELECT style_description FROM wrestling_style;

-- ALTER promotion table
ALTER TABLE promotion
ADD abbreviation VARCHAR(8);

-- ALTER wrestling_style table
ALTER TABLE wrestling_style
ALTER COLUMN style_name TYPE VARCHAR(40) USING style_description::varchar(40);

UPDATE wrestling_style
SET style_name = 'Submission Specialist'
WHERE style_id = 'SUB';

UPDATE wrestling_style
SET style_description = 'Power beyond measure, Never challenge them to an arm wrestling contest'
WHERE style_id = 'PWH';

UPDATE wrestling_style
SET style_description = 'Exciting, Innovative, A pleasure to watch. They risk it all by taking to the sky'
WHERE style_id = 'HF';

UPDATE wrestling_style
SET style_description = 'Lethal, Quick, Unpredictable. Strikers tear down their opponents with ruthless efficiency'
WHERE style_id = 'STR';


-- UPDATE WWE record in database
UPDATE promotion
SET abbreviation = 'WWE', promotion_name = 'World Wrestling Entertainment'
WHERE promotion_id = 001;

-- ALTER wrestler table
ALTER TABLE pro_wrestler
ALTER COLUMN gender TYPE VARCHAR(10) USING gender::VARCHAR(10);

-- UPDATE wrestler table to include image urls
UPDATE pro_wrestler
SET image_url = 'https://static.tvtropes.org/pmwiki/pub/images/eb0pp92xsaep4vj.jpg'
WHERE wrestler_id = 8;


SELECT * FROM pro_wrestler;
SELECT promotion.abbreviation AS promotion, promotion.promotion_id FROM promotion; 

SELECT 
    COUNT(*)
FROM
    pro_wrestler