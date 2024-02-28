-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2024 at 03:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `liteauth`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `authAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `authAt`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'admin@liteauth.com', '$2b$10$WnityWuM830a1Teqg7QgPeHWYyTbtaSOrhkJnSYOCTtEGHNVxzJq6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AbGl0ZWF1dGguY29tIiwiaWF0IjoxNjk3MTg0MzcxLCJleHAiOjE2OTcyNzA3NzF9._eq-EYw195W9Fjb1uXuM1sYr_KdEQQiqNrRmJLw1XFI', '2023-10-13 08:06:11', '2023-10-11 03:56:45', '2023-10-13 08:06:11'),
(2, 'Reggy', 'reggy@liteauth.com', '$2b$10$uibCkxiB2Vy/qnx4bPnmaeHeX5KYkQFIg8YOTxSFTGpv2PYzVA9mi', NULL, NULL, '2023-10-11 08:14:52', '2023-10-11 08:14:52'),
(3, 'Iqbal', 'iqbal@liteauth.com', '$2b$10$8DzI36d5.DP3bZUAdRV/HeeGIyszp6Ksu2ZLZv0WYee144HJFkwla', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJJcWJhbCIsImVtYWlsIjoiaXFiYWxAbGl0ZWF1dGguY29tIiwiaWF0IjoxNjk3MDk0ODMwLCJleHAiOjE2OTcxODEyMzB9.Bqudc2rOKN-rJdrq22kD1oCaKThAYe8NdjfErsHN_IE', '2023-10-12 07:13:50', '2023-10-11 08:21:05', '2023-10-12 07:13:50'),
(4, 'Adi', 'adi@liteauth.com', '$2b$10$6c.wYwc4Hf8S.xNAIUGYIu/B.2kKvbJMTnZOEG3ah0v0JUZ.HWPsq', NULL, NULL, '2023-10-11 08:27:52', '2023-10-11 08:27:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
