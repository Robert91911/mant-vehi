-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-12-2020 a las 10:24:30
-- Versión del servidor: 8.0.22-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mant_vehi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mantenimientos`
--

CREATE TABLE `mantenimientos` (
  `id-mantenimiento` int NOT NULL,
  `id-vehiculo` int NOT NULL,
  `id-tipo` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `importe` decimal(10,0) NOT NULL,
  `factura` varchar(255) NOT NULL,
  `fecha-creacion` datetime NOT NULL,
  `km-mant` bigint NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `taller` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `mantenimientos`
--

INSERT INTO `mantenimientos` (`id-mantenimiento`, `id-vehiculo`, `id-tipo`, `nombre`, `importe`, `factura`, `fecha-creacion`, `km-mant`, `ubicacion`, `taller`) VALUES
(7, 12, 5, 'Cambio de neumaticos', '252', '', '2020-11-09 10:25:44', 350000, 'Ruedas frontales', 'Talleres Pato 2'),
(8, 12, 5, 'Cambio neumaticos', '251', '', '2020-07-14 10:26:38', 300000, 'Ruedas traseras', 'Talleres primo Pato'),
(11, 12, 5, 'Limpieza profesional', '55', '', '2020-11-28 01:00:00', 60000, 'Interior y exterior', 'Juan Talleres SL'),
(13, 48, 3, 'Limpieza profesional', '350', '', '2020-12-07 01:00:00', 60000, 'Luna delantera', 'Talleres Pato 2'),
(17, 61, 5, 'Cambio de neumaticos', '350', '', '2020-12-03 01:00:00', 60000, 'Ruedas delanteras', 'Talleres Pato 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id-marca` int NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id-marca`, `nombre`) VALUES
(1, 'Ford'),
(2, 'Tesla'),
(3, 'Kia'),
(4, 'Audi'),
(5, 'BMW'),
(6, 'Renault'),
(7, 'peugeot');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelos`
--

CREATE TABLE `modelos` (
  `id-modelo` int NOT NULL,
  `id-marca` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `generacion` varchar(255) NOT NULL,
  `fecha-inicio` date NOT NULL,
  `fecha-fin` date NOT NULL,
  `serie` varchar(255) NOT NULL,
  `modificacion` varchar(255) NOT NULL,
  `carroceria` varchar(255) NOT NULL,
  `combustible` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `modelos`
--

INSERT INTO `modelos` (`id-modelo`, `id-marca`, `nombre`, `generacion`, `fecha-inicio`, `fecha-fin`, `serie`, `modificacion`, `carroceria`, `combustible`) VALUES
(1, 1, 'Mondeo', 'MK3', '2007-03-01', '2009-04-01', 'Trend', '2.5 20v, 220cv. 6 velocidades manual', 'Hatchback', 'Diesel'),
(2, 1, 'Transit', 'MK2', '2014-01-01', '2020-08-27', 'Ambiente', 'Transit Kombi L4H3 350 RWD. 2.2 TDCI 125cv. 6 velocidades, manual', 'L4H3 350', 'Diesel'),
(3, 2, 'Model 3', '2016', '2016-06-01', '2020-11-01', 'P90D', '470cv. Automatico, Frenada regenerativa', 'Berlina', 'Electrico'),
(4, 1, 'Transit', 'MK2', '2020-11-02', '2020-12-18', '2', '2.2.TDCI', '', ''),
(5, 1, 'Focus Hatchback', '2018', '2018-01-01', '2020-12-31', '2018', 'Trent Edition - Manual - 100cv', 'Hatchback', 'Diesel'),
(6, 1, 'Ranger', '2015', '2015-01-01', '2020-12-01', 'XL', 'Ford Ranger dovle cab 2.2 TDCI - Manual 6 velocidades', 'Cabina doble', 'Diesel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos-mantenimientos`
--

CREATE TABLE `tipos-mantenimientos` (
  `id-tipo` int NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tipos-mantenimientos`
--

INSERT INTO `tipos-mantenimientos` (`id-tipo`, `nombre`) VALUES
(2, 'Pasivo'),
(3, 'Motor'),
(4, 'Estetico'),
(5, 'Preventivo'),
(6, 'Interior'),
(7, 'Pre-ITV');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'robert9191@gmail.com', '$2a$10$fnnkDFmtFRDU8jr1RMrOjecxrHr5jrLv7YgcVMV3fbwDeuAbSTUYW', 'admin'),
(2, 'batman@gmail.com', '$2a$10$sekZ8wAO/TJIs94TrZolnOOoQW8C2PRTh3DM1v86LEXGpk0e1GuC2', 'user'),
(4, 'robert@gmail.com', '$2a$10$d3I43tpPQdfgbxY8pcW3ye8tCZvaRSiL/Y47HCLKjkwZvRwOfW9Wq', 'admin'),
(6, 'batman2@gmail.com', '$2a$10$crW8OFYlfiJOHCVV3tvqh.cKBSnmiroNX2Gr1vDIZ.eky3gYZpB8O', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id-vehiculo` int NOT NULL,
  `id-modelo` int NOT NULL,
  `id-usuario` int NOT NULL,
  `color` varchar(50) NOT NULL,
  `matricula` varchar(7) NOT NULL,
  `km` bigint NOT NULL,
  `imagen` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id-vehiculo`, `id-modelo`, `id-usuario`, `color`, `matricula`, `km`, `imagen`) VALUES
(12, 1, 2, 'Verde', '6765JJB', 7778, 0x433a5c66616b65706174685c53637265656e73686f742066726f6d20323032302d31312d32342031362d33382d32312e706e67),
(14, 2, 1, 'blanco', '3232JPJ', 360, ''),
(43, 1, 1, 'Blanco', '1212HPH', 370000, ''),
(48, 1, 2, 'Gris', '6765JJJ', 1112, ''),
(60, 3, 1, 'Gris', '6765JJJ', 1112, ''),
(61, 3, 2, 'Gris', '6765JJB', 20000, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mantenimientos`
--
ALTER TABLE `mantenimientos`
  ADD PRIMARY KEY (`id-mantenimiento`),
  ADD KEY `FK_ID_TIPO` (`id-tipo`) USING BTREE,
  ADD KEY `FK_ID_VEHICULO` (`id-vehiculo`) USING BTREE;

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id-marca`);

--
-- Indices de la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD PRIMARY KEY (`id-modelo`),
  ADD KEY `FK_ID_MARCA` (`id-marca`) USING BTREE;

--
-- Indices de la tabla `tipos-mantenimientos`
--
ALTER TABLE `tipos-mantenimientos`
  ADD PRIMARY KEY (`id-tipo`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id-vehiculo`),
  ADD KEY `FK_ID_MODELO` (`id-modelo`) USING BTREE,
  ADD KEY `FK_ID_USUARIO` (`id-usuario`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mantenimientos`
--
ALTER TABLE `mantenimientos`
  MODIFY `id-mantenimiento` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id-marca` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `modelos`
--
ALTER TABLE `modelos`
  MODIFY `id-modelo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tipos-mantenimientos`
--
ALTER TABLE `tipos-mantenimientos`
  MODIFY `id-tipo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id-vehiculo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mantenimientos`
--
ALTER TABLE `mantenimientos`
  ADD CONSTRAINT `FK_3d46930b916765aeebc74498e85` FOREIGN KEY (`id-tipo`) REFERENCES `tipos-mantenimientos` (`id-tipo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_a535ac86889cbd874bb85bcc3b3` FOREIGN KEY (`id-vehiculo`) REFERENCES `vehiculos` (`id-vehiculo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD CONSTRAINT `FK_a4916476ab0f06d439813369ce7` FOREIGN KEY (`id-marca`) REFERENCES `marca` (`id-marca`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD CONSTRAINT `FK_129c0603021327b98fcafa09cf2` FOREIGN KEY (`id-modelo`) REFERENCES `modelos` (`id-modelo`),
  ADD CONSTRAINT `FK_a7c0c5e8d93aa39b6bd30387155` FOREIGN KEY (`id-usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
