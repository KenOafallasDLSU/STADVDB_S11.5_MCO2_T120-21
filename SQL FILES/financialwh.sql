-- drop and create schema
DROP SCHEMA IF EXISTS financialwh;
CREATE SCHEMA IF NOT EXISTS financialwh;
USE financialwh;

-- (optional but schema already dropped) drop tables

-- create tables without foreign keys
CREATE TABLE IF NOT EXISTS time
(
	timeid		BIGINT PRIMARY KEY UNIQUE,
	dayOfYear	INT(3),
	year	    INT(4),
	quarter	    INT(1),
    month       INT(2),
    dayOfMonth  INT(2)
);

CREATE TABLE IF NOT EXISTS type
(
	typeid				BIGINT PRIMARY KEY UNIQUE,
	flow			    VARCHAR(30),
	mode			    VARCHAR(30),
	characterization	VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS recipient
(
	recipientid		BIGINT PRIMARY KEY UNIQUE,
	bank            VARCHAR(2),
    account         INT(8)
);

CREATE TABLE IF NOT EXISTS account
(
	accountid			BIGINT PRIMARY KEY UNIQUE,
	frequency		    VARCHAR(30),
	accountDistrict		VARCHAR(30),
    createdYear         INT(4),
	ownerCardType       VARCHAR(16),
    ownerGender         VARCHAR(1),
    ownerDistrict       VARCHAR(30)
);

-- create tables with foreign keys
CREATE TABLE IF NOT EXISTS transactions
(
    timeid          BIGINT,
    recipientid     BIGINT,
    accountid       BIGINT,
    typeid          BIGINT,
    amount          FLOAT,
    count           INT(11)
);