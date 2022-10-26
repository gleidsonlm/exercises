/* 
    Adding example values for the exercise.
 */
--  Adding users
-- userid,username,password,firstname,lastname,email,created,modified,status
insert into user values (01234567890,'john.doe','','John','Doe','john.doe@gleidsonlm.com',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
insert into user values (09876543210,'jane.doe','','Jane','Doe','Jane.doe@gleidsonlm.com',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
-- Adding context
-- contextid,name,description
insert into context values (2022031011,'SQLite 101','Introduction to SQLite - 2022 Winter Class 1');
insert into context values (2022031012,'SQLite 101','Introduction to SQLite - 2022 Winter Class 2');
-- Adding role
-- roleid,name,description
insert into role values (001,'Guest','Guests can view course content');
insert into role values (010,'Student','Student can participate in the course');
insert into role values (100,'Instructor','Instructor can manage the course');
-- Adding enrol
-- enrolid,userid,roleid,contextid,created,modified,status
insert into enrol values (113,01234567890,100,2022031011,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
insert into enrol values (223,09876543210,100,2022031012,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);