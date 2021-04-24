-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2021 a las 11:15:46
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto daw`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprado_usuario`
--

CREATE TABLE `comprado_usuario` (
  `id_usuario` int(5) NOT NULL,
  `id_juego` int(20) NOT NULL,
  `cantidad` int(100) NOT NULL,
  `fecha_compra` date NOT NULL,
  `tipo_compra` varchar(100) NOT NULL,
  `codigo_compra` varchar(6) NOT NULL,
  `codigo_producto` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juego`
--

CREATE TABLE `juego` (
  `id_juego` int(6) NOT NULL,
  `descripcion` longtext NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` varchar(50) NOT NULL,
  `etiquetas` varchar(200) NOT NULL,
  `plataforma` varchar(100) NOT NULL,
  `imagen_principal` blob NOT NULL,
  `idioma` varchar(50) NOT NULL,
  `fecha_salida` date NOT NULL,
  `id_saga` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requisitos_juego`
--

CREATE TABLE `requisitos_juego` (
  `id_juego` int(5) NOT NULL,
  `os` int(100) NOT NULL,
  `procesador` varchar(100) NOT NULL,
  `memoria` int(20) NOT NULL,
  `graficos` int(40) NOT NULL,
  `directx` int(30) NOT NULL,
  `storage` int(6) NOT NULL,
  `tarjeta_sonido` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `saga`
--

CREATE TABLE `saga` (
  `id_saga` int(5) NOT NULL,
  `nombre` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(5) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `telefono` int(9) NOT NULL,
  `email` varchar(50) NOT NULL,
  `foto` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comprado_usuario`
--
ALTER TABLE `comprado_usuario`
  ADD PRIMARY KEY (`codigo_compra`),
  ADD KEY `FOREIGN_id_usu_id_juego` (`id_usuario`),
  ADD KEY `id_juego-id_juego` (`id_juego`);

--
-- Indices de la tabla `juego`
--
ALTER TABLE `juego`
  ADD PRIMARY KEY (`id_juego`),
  ADD KEY `id_sagas` (`id_saga`);

--
-- Indices de la tabla `requisitos_juego`
--
ALTER TABLE `requisitos_juego`
  ADD PRIMARY KEY (`id_juego`);

--
-- Indices de la tabla `saga`
--
ALTER TABLE `saga`
  ADD PRIMARY KEY (`id_saga`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comprado_usuario`
--
ALTER TABLE `comprado_usuario`
  ADD CONSTRAINT `FOREIGN_id_usu_id_juego` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `id_juego-id_juego` FOREIGN KEY (`id_juego`) REFERENCES `juego` (`id_juego`);

--
-- Filtros para la tabla `juego`
--
ALTER TABLE `juego`
  ADD CONSTRAINT `id_sagas` FOREIGN KEY (`id_saga`) REFERENCES `saga` (`id_saga`);

--
-- Filtros para la tabla `requisitos_juego`
--
ALTER TABLE `requisitos_juego`
  ADD CONSTRAINT `id_juego_requisitos` FOREIGN KEY (`id_juego`) REFERENCES `juego` (`id_juego`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
