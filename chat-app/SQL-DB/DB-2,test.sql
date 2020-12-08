BACKUP DATABASE backdb
TO DISK = 'DB-1,test.bak'
 WITH DIFFERENTIAL;
 

--MySQL';
CREATE TABLE Dbs (
Db1ID int NOT NULL,
lastDbtest varchar(255) NOT NULL,
firstDbtest varchar(255),
DbID int,
 PRIMARY KEY (DbID),
 FORIEGN KEY (Db1ID) REFERENCES Databases(Db1ID)
);

CREATE INDEX idx_firstDbtest
ON Db1 (LastDbtest);
ON Db1 (firstDbtest);

ALTER TABLE Dbs
DROP INDEX  firstDbtest;
