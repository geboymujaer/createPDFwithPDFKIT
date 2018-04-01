# Host: localhost  (Version 5.6.21)
# Date: 2018-04-01 22:01:40
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "data"
#

CREATE TABLE `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `billing_id` varchar(255) DEFAULT NULL,
  `cust_name` varchar(255) DEFAULT NULL,
  `daya` varchar(255) DEFAULT NULL,
  `peserta` int(11) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `amount` bigint(20) DEFAULT '0',
  `admin` int(11) DEFAULT '3500',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
