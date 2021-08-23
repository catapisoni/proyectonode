-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-08-2021 a las 19:23:45
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectocafe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `imagen` text NOT NULL,
  `stock` int(11) NOT NULL,
  `categoria` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `stock`, `categoria`) VALUES
(1, 'CAFETERA MOKA', 'Cafetera Moka, original italiana, para 3 pocillos. ', '1200', 'cafeteramoka.jpg', 75, 'Cafetería'),
(2, 'CAFETERA FRANCESA', 'Cafetera francesa embolo 300ml', '2700', 'cafeterafrancesa.jpg', 26, 'Cafetería'),
(6, 'CAFETERA V60', 'El nombre de la V60 procede de su forma en V con un ángulo de 60 grados. El cono resultante se diseñó para albergar un filtro de papel, tenía un orificio de goteo grande y la cara interna de la cafetera poseía ranuras en espiral. De esta manera, permitía que se liberara aire al elaborar el café.', '2900', 'cafeterav60.jpg', 12, 'Cafetería'),
(5, 'CAFÉ BRASILERO', 'Café típico de Brasil.', '1260', 'cafebrasilero.jpg', 44, 'café'),
(7, 'CAFÉ ECUATORIANO', 'Café del Ecuador, de la zona lojana 100% arábico', '900', 'cafeecuatoriano.jpg', 157, 'Café'),
(8, 'CAFÉ COLOMBIANO', 'Café Juan Valdéz de Colombia.', '7000', 'cafecolombiano.jpg', 9, 'Café');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
