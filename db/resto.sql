-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 29 Juin 2018 à 16:30
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `resto`
--

-- --------------------------------------------------------

--
-- Structure de la table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `seat_number` int(11) NOT NULL,
  `booking_date` date NOT NULL,
  `booking_time` time NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Réservations';

-- --------------------------------------------------------

--
-- Structure de la table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Entête commande';

-- --------------------------------------------------------

--
-- Structure de la table `orderline`
--

CREATE TABLE `orderline` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `priceHT` decimal(11,4) NOT NULL,
  `tax` decimal(3,2) NOT NULL,
  `status` varchar(2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `quantity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Ligne commande';

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `priceHT` decimal(11,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Produits';

--
-- Contenu de la table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `photo`, `priceHT`, `stock`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Coca-Cola', 'Mmmm, le Coca-cola avec 10 morceaux de sucres et tout plein de caféine!', 'coca.jpg', '3.00', 10, 1, '2018-06-18 10:35:07', '2018-06-18 12:00:00'),
(2, 'Bagel Thon', 'Notre Bagel est constitué d\'un pain moelleux avec des grains de sésames et du thon albacore, accompagné de feuilles de salade fraîche du jour et d\'une sauce renversante :)', 'bagel_thon.jpg', '5.50', 10, 1, '2018-06-18 10:35:12', '2018-06-19 12:00:00'),
(3, 'Bacon Cheesburger', 'Ce délicieux cheeseburger contient un steak haché viande française de 150g ainsi que d\'un buns grillé juste comme il faut, le tout accompagné de frites fraîches maison !', 'bacon_cheeseburger.jpg', '12.50', 50, 1, '2018-06-19 12:00:00', '2018-06-19 12:00:00'),
(4, 'Carrot Cake', 'Le carrot cake maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\r\nÀ consommer sans modération', 'carrot_cake.jpg', '6.75', 20, 1, '2018-06-19 12:00:00', '2018-06-19 12:00:00'),
(5, 'Donut Chocolat', 'Les donuts sont fabriqués le matin même et sont recouvert d\'une délicieuse sauce au chocolat !', 'chocolate_donut.jpg', '6.20', 50, 1, '2018-06-19 12:00:00', '2018-06-19 12:00:00'),
(6, 'Dr.Pepper', 'Son goût sucré avec de l\'amande vous ravira !', 'drpepper.jpg', '2.90', 100, 1, '2018-06-19 12:00:00', '2018-06-19 12:00:00'),
(7, 'Milkshake', 'Notre milkshake bien crémeux contient des morceaux d\'Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !', 'milkshake.jpg', '5.35', 20, 1, '2018-06-19 12:00:00', '2018-06-19 12:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `zipcode` int(5) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `birthday`, `address`, `city`, `zipcode`, `phone`, `email`, `password`, `created_at`, `updated_at`) VALUES
(5, 'laurent', 'radix', '1966-06-09', 'felix', 'st julien', 44000, '0000000000', 'radix@sfr.fr', '12345678', '2018-06-20 16:05:47', '2018-06-20 16:05:47'),
(4, 'gdfs', 'gfds', '1905-06-10', 'gdsfgfdsg', 'gfdsgs', 44000, '11111', 'fradi@sfr.fr', '12345678', '2018-06-20 14:51:08', '2018-06-20 14:51:08');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `orderline`
--
ALTER TABLE `orderline`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `orderline`
--
ALTER TABLE `orderline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
