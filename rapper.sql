-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 25. 20:14
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `rapperek`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rapper`
--

CREATE TABLE `rapperek` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `born` int(11) NOT NULL,
  `stillAlive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `rapper`
--

INSERT INTO `rapperek` (`id`, `name`, `born`, `stillAlive`) VALUES
(1, 'Lil uzi vert', 1995, 1),
(2, 'Asap Rocky', 1988, 1),
(3, 'XXXtentacion', 1998, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `rapper`
--
ALTER TABLE `rapperek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `rapper`
--
ALTER TABLE `rapperek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
