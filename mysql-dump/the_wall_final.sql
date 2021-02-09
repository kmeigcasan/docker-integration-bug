-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 05, 2021 at 02:41 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the_wall_final`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `message`, `created_at`, `updated_at`) VALUES
(15, 15, 'Accusamus omnis occaecati nihil tempora optio expedita officiis vel.', '2021-02-05 22:32:29', '2021-02-05 22:32:29'),
(14, 16, 'Hi', '2021-01-06 15:44:06', '2021-01-06 15:44:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `created_at`, `updated_at`) VALUES
(14, 'lei@gmail.com', 'Lei', 'Cabarles', '1234567890', '2020-11-13 13:44:01', '2020-11-13 13:44:01'),
(15, 'kmeigcasan@gmail.com', 'Karen', 'Igcasan', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-11-13 13:44:32', '2020-11-13 13:44:32'),
(16, 'jmd.maghari@gmail.com', 'Joy Mae', 'Maghari', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-11-14 09:42:32', '2020-11-14 09:42:32'),
(17, 'jeanita@gmail.com', 'Jeanita', 'Cabarles', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-11-14 11:27:40', '2020-11-14 11:27:40'),
(18, '0000@gmail.com', 'Karen', 'Cabarles', 'd41d8cd98f00b204e9800998ecf8427e', '2020-11-17 01:40:35', '2020-11-17 01:40:35'),
(19, 'kmeigcasan1@gmail.com', 'Karen', 'Cabarles', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-11-17 01:40:51', '2020-11-17 01:40:51'),
(20, 'docker@gmail.com', 'Docker', 'docker', 'e807f1fcf82d132f9bb018ca6738a19f', '2021-02-05 22:17:14', '2021-02-05 22:17:14'),
(21, 'Preston86@example.org', 'Preston', 'Lesch', 'e807f1fcf82d132f9bb018ca6738a19f', '2021-02-05 22:32:11', '2021-02-05 22:32:11');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
