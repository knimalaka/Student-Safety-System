-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: studentsafetydb
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `Admin_Name` varchar(50) NOT NULL,
  `Admin_ID` varchar(45) NOT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Phone_Number` int(11) NOT NULL,
  `Password` varchar(35) NOT NULL,
  PRIMARY KEY (`Admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('Saman','00001','Sam@g.com',754325456,'asdgh4'),('Upul','00029','stdesdft1@g.com',771818385,'XXsdf');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendence report`
--

DROP TABLE IF EXISTS `attendence report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendence report` (
  `Student_ID` varchar(20) NOT NULL,
  `Date` date DEFAULT NULL,
  `Arrival_Time` time DEFAULT NULL,
  `Departure_Time` time DEFAULT NULL,
  `Arrival_Type` tinyint(1) DEFAULT NULL,
  KEY `Student_ID_idx` (`Student_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendence report`
--

LOCK TABLES `attendence report` WRITE;
/*!40000 ALTER TABLE `attendence report` DISABLE KEYS */;
INSERT INTO `attendence report` VALUES ('1','2020-09-28','07:15:00',NULL,NULL);
/*!40000 ALTER TABLE `attendence report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `First_Name` varchar(45) NOT NULL,
  `Second_Name` varchar(45) DEFAULT NULL,
  `Student_ID` varchar(20) NOT NULL,
  `Class` varchar(15) NOT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Parents_Name` varchar(45) DEFAULT NULL,
  `Parents_Phone_Number` int(11) NOT NULL,
  `Password` varchar(30) NOT NULL,
  PRIMARY KEY (`Student_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('Kavinda','Nimalaka','00001','11E','stdent1@g.com','Priyanganie',771818385,'XXXXX'),('Nethmi','Kavindhya','00002','2B','nethmi2@g.com','SriLal',782345621,'5ccbbdsd'),('Kapila','Wanniarachci','00003','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Kevin','Diaz','00004','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Shakila','Diyog','00005','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Sanduni','Madushika','00006','4F','sandunid@g.com','Rehan',763241540,'fsdag'),('Hazan','Diyog','00007','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Isuru','Umayanga','00009','3C','isurus@g.com','Tehan',784352389,'isuru5'),('Jehan','Diyog','00010','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Suki','Diyog','00011','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Kasun','Umayanga','00012','3C','isusdfus@g.com','Gehan',784352389,'isuru5'),('Hasantha','Umayanga','00013','3C','isusdfus@g.com','Gehan',784352389,'isuru5'),('Rayan','Diyog','00014','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Hashan','Diyog','00015','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Jethika','Wanniarachci','00016','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Ashan','Wanniarachci','00017','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Amila','Wanniarachci','00018','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Sunimal','Wanniarachci','00019','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Heshan','BLayer','00020','5B','sadf@g.com','gsadf',777432332,'asvsf'),('Kaushika','Wanniarachci','00021','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Kasun','Wanniarachci','00022','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Kalana','Wanniarachci','00023','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Hsangana','Wanniarachci','00024','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Kalhara','Wanniarachci','00025','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Ranga','Wanniarachci','00026','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Sanga','Wanniarachci','00027','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Chani','Wanniarachci','00028','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Upul','Wanniarachci','00029','1E','stdesdft1@g.com','Priya',771818385,'XXsdf'),('Nethmi','Kavindhya','00035','2B','nethmi2@g.com','SriLal',782345621,'5ccbbdsd'),('dsf','sfa','00039','3D','kavi@hh.com','reqt',705628530,'1');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-02 23:07:57
