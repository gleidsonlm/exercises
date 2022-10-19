/* 
    Create tables for enrolment.
    Enrolment is the user role in the context, eg; John Doe is a student in the class "JavaScript 101".

 */
-- Table user
create table "user" (
    userid INT UNIQUE,
    username TEXT UNIQUE,
    password TEXT,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    created DATETIME,
    modified DATETIME,
    status INTEGER
    );
-- Table role
create table "role" (
    roleid INTEGER UNIQUE,
    name TEXT,
    description TEXT
    );
--Table context
create table "context" (
    contextid INTEGER UNIQUE,
    name TEXT,
    description TEXT
    );
--Table enrol
create table "enrol" (
    enrolid INTEGER UNIQUE,
    userid INTEGER,
    roleid INTEGER,
    contextid INTEGER,
    created DATETIME,
    modified DATETIME,
    status INTEGER,
    FOREIGN KEY (userid) REFERENCES user (userid),
    FOREIGN KEY (roleid) REFERENCES role (roleid),
    FOREIGN KEY (contextid) REFERENCES context (contextid)
    );