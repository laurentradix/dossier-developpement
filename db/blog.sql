-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 29 Juin 2018 à 16:29
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `created_ad` datetime NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `categoy_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `articles`
--

INSERT INTO `articles` (`id`, `author_id`, `created_ad`, `title`, `content`, `categoy_id`) VALUES
(1, 1, '2018-06-05 07:11:11', 'SWM cherche à se démarquer avec deux nouveaux scramblers', 'La marque de motos italiennes SWM, importée en France depuis trois ans par la DIP, présente les évolutions de sa gamme classique de motos de route pour 2018 et 2019. Quatre modèles sont au programme : une inédite Six Days et une série limitée Ace of Spades, ainsi que des Gran Turismo et Gran Milano remaniées. Présentation.', 1),
(2, 2, '2018-06-09 02:08:06', 'Une Jaguar du troisième type', 'La nouvelle I-Pace est une Jaguar déroutante. Quelque part entre SUV et monospace, elle s’écarte résolument de la grande tradition des profils étirés et des mécaniques ronflantes chers à la marque anglaise. Curieuse voiture à la poupe tronquée, étonnamment habitable et capable à l’occasion de pratiquer le tout-terrain, la I-Pace est surtout un modèle électrique. On n’attendait pas vraiment Jaguar sur ce registre. A l’origine, c’est la marque sœur Land Rover qui devait faire entrer le vrai chic british dans l’ère du véhicule « zéro émission », mais les stratèges de Coventry ont finalement changé d’avis.', 2),
(3, 3, '2018-03-04 02:17:21', 'Pen Duick V, la naissance de l\'ancêtre des monocoques 60 pieds IMOCA', 'À chaque course son bateau, telle était la devise d\'Éric Tabarly. Après les quatre premiers Pen Duick, il en va donc de même pour Pen Duick V, un monocoque de 35 pieds conçu pour la Transpacifique San-Francisco — Tokyo organisée par la Slocum Society en 1969. Et comme sur ses autres bateaux, Tabarly est visionnaire. Ainsi, Pen Duick V sera le premier voilier de course à ballasts, précurseur des monocoques de 60 pieds IMOCA.', 3);

-- --------------------------------------------------------

--
-- Structure de la table `author`
--

CREATE TABLE `author` (
  `id` int(255) NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `author`
--

INSERT INTO `author` (`id`, `firstname`, `lastname`, `email`, `password`) VALUES
(1, 'laurent', 'radix', 'laurent.radix@sfr.fr', ''),
(2, 'victoire', 'rabiller', 'rabiller@hotmail.fr', ''),
(3, 'olivier', 'de kersauson', 'de kersauson@sfr.FR', '');

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `pseudo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `article_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
