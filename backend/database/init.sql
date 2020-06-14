--
-- Estrutura da tabela `users`
--
CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT;


--
-- Estrutura da tabela `points`
--
CREATE TABLE `points` (
  `idPoints` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `points` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE `points`
  ADD PRIMARY KEY (`idPoints`);
ALTER TABLE `points`
  MODIFY `idPoints` int(11) NOT NULL AUTO_INCREMENT;

COMMIT;