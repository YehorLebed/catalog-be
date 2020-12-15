insert into roles
    (name)
values
    ('customer'),
    ('admin');

insert into users
    (email, password, role_id)
values
    ('rodriguez.phyllis@danielleannon.biz', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('treutel.shemar@russelaltenwerth.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('vada.beier@mcclurejacobson.net', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('fjerde@ratkemorissette.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('jacobi.melyna@hotmail.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('roscoe.mitchell@yahoo.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('welch.faye@walshbosco.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('ngaylord@fritschnolan.info', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('eva.satterfield@yahoo.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('jenkins.madie@gmail.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('nlabadie@anderson.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('qhessel@thompson.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('rudolph06@yahoo.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('jtorp@hotmail.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('tbeahan@gmail.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('ubeer@osinski.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('ron28@hotmail.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('browe@yahoo.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('tkihn@hintz.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 1),
    ('admin@gmail.com', '$2a$10$13r6nvXcS5lv75d3XlFeNucNwlRK71AdOnK02/OQMOWCdGKUir58a', 2);

INSERT INTO categories
    (title, parent_id)
VALUES
    ('Labore voluptatem perspiciatis voluptatum.', null),
    ('Cumque fugit repudiandae similique.', null),
    ('Deserunt rerum laborum voluptatem.', null),
    ('Voluptatem perferendis omnis.', null),
    ('Ut dignissimos quis veniam.', null),
    ('Omnis accusantium alias.', null),
    ('Sit voluptatem amet illo.', 1),
    ('Aut ex.', 2),
    ('Et quia accusamus pariatur.', 3),
    ('Quasi sequi dignissimos.', 4),
    ('Tenetur quos ducimus.', 5),
    ('Tempora delectus.', 6),
    ('Reiciendis accusantium ut et.', 7),
    ('Sit aut saepe vitae et.', 8),
    ('Autem laborum aut.', 1),
    ('Ea quis veritatis.', 2),
    ('Fuga deserunt velit praesentium.', 2),
    ('Dolorem quisquam voluptates.', 4),
    ('Atque cumque quia ea.', 4),
    ('Voluptate est.', 4);

INSERT INTO products
    (title, description, price, is_promo, category_id, created_at, image)
VALUES
    ('Reiciendis est et magni eaque.', 'Voluptas quo inventore fugit cum aut. Autem in magnam sed quos unde. Aut eius ea enim velit ut placeat. Velit est nam voluptas debitis quis. Dolore at aut aut cum. Magnam dolor architecto adipisci natus qui nemo dolore.', '657287.92', '1', '11', '1579249409', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Sapiente assumenda ipsam voluptas.', 'Dolor molestiae fuga qui ea nesciunt quaerat. Velit odit magni velit occaecati quo reprehenderit. Et sunt ullam neque sint quia placeat voluptas. Itaque ut eius esse. Odio veniam non dolore ut atque deserunt tempore. Voluptas dolorum qui laborum earum sed unde laudantium. Qui aut vero totam facilis maiores est dolorum nisi. Sunt exercitationem enim dolore ut praesentium quisquam sapiente.', '103982.34', '1', '13', '1592619429', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Magni voluptates vitae et quisquam.', 'Quae sed laboriosam quia culpa qui. Hic dolores sint eveniet. Debitis ipsum est repellat alias quasi doloribus tenetur. In ex quis sed necessitatibus. Ducimus vero aut eaque minus accusantium.', '379095.24', '0', '18', '1566518331', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Eius sunt quos possimus.', 'Qui aperiam quos voluptate numquam iure cum consectetur. Placeat est ea quasi nam sit vel. Illo molestiae consequuntur pariatur. Numquam aperiam id fuga excepturi eos.', '675451.93', '1', '19', '1567124354', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Qui aliquid facilis.', 'Et repellat minima dolor voluptatem sunt rem dolores. Officia omnis aut et ratione. Aspernatur cupiditate in eum. Iure id ut exercitationem officiis excepturi soluta. Accusamus quia ut nobis nam voluptas saepe voluptatem.', '654461.25', '1', '5', '1550531155', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Quasi incidunt eum a voluptatem dolorum.', 'Sequi sed id deserunt ut. A neque ad quia tenetur vero. Ea tempora dolor qui dolores rerum consequatur. Magni eos est voluptas molestias unde quibusdam et ut. Odit eum architecto enim est.', '232450.82', '0', '2', '1549078245', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Autem rerum qui modi molestias.', 'Numquam ad non dicta consequuntur ut itaque ut. Eaque blanditiis repellendus nemo nulla eum. Qui autem et omnis autem magnam minus. Voluptatibus molestiae sit dolorem et. Omnis aliquid dolore veritatis et voluptas. Numquam error vel et dolores.', '246051.31', '0', '5', '1594952757', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Harum suscipit eos fugit.', 'Sequi sunt omnis quis nihil et sunt dolores. Temporibus dignissimos autem optio libero necessitatibus illum. In dolorem quia unde sit. Commodi dolor qui dolorem in. Iusto aut aperiam occaecati ut ut ipsam. Qui debitis dicta facilis harum. Et est quasi similique eos rem.', '214260.33', '0', '13', '1584305398', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Earum reprehenderit quas quas consequatur.', 'Cupiditate quia necessitatibus qui quasi. Officiis accusantium ut quo consectetur quod. Accusamus dicta et nesciunt voluptas sunt corrupti error. Corporis officiis ducimus incidunt pariatur illo sit. Vel quibusdam id possimus.', '629968.85', '1', '20', '1563972586', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Excepturi deleniti amet sit.', 'Neque quo blanditiis commodi autem qui eaque omnis quis. Et sit non magni aut. Ut est eveniet vero nulla impedit. Ut maxime quisquam consectetur dolor cumque necessitatibus molestiae.', '280486.03', '0', '11', '1543390658', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Perspiciatis laudantium vero minima aliquid rerum.', 'Culpa alias excepturi reprehenderit sequi repellat et. Commodi inventore sed voluptas. Repudiandae assumenda rerum ut et tempora. Dignissimos pariatur earum facilis maxime velit voluptatem. Nesciunt voluptas sed odit et. Vel distinctio molestiae ipsum aut libero.', '250278.40', '0', '13', '1549562377', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Expedita inventore ipsa aut fugit et.', 'Et omnis commodi distinctio illo sunt perspiciatis provident voluptatibus. Consequatur voluptas nam officia illum iure eum voluptatum. Et sunt consectetur voluptatem incidunt non aliquid excepturi. Dolor ea dolore cum qui. Rerum consequatur ut sed eum molestias omnis. Et dolor quia numquam. Ut modi omnis fuga doloribus nesciunt.', '488975.67', '1', '14', '1568239038', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Voluptatem asperiores delectus alias.', 'Qui delectus sit sint corrupti consequatur unde. Deleniti sit quod enim molestiae. Expedita animi dolorem inventore sequi non porro. Voluptates repellendus itaque eum sed aut. Voluptatum perspiciatis fugiat sit ea hic maxime.', '450391.52', '0', '17', '1551177729', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Qui aspernatur laudantium corrupti ullam.', 'Fugit a ab quidem laboriosam sint. Voluptatem dignissimos cum delectus temporibus voluptates saepe quia. At voluptas deserunt nesciunt placeat iusto quod accusantium. Alias sapiente natus veritatis doloremque facilis possimus. Voluptatem ad sed excepturi quasi ut. Sed debitis et qui culpa non.', '867015.34', '1', '6', '1559122697', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Ex sit minima commodi.', 'Dolor ad eum tempora id. Voluptate eum ex dolor laudantium qui. Iure dignissimos officiis est illum illo accusantium. Et eos mollitia ducimus eos rem aut asperiores. Et aperiam sint incidunt blanditiis quas inventore totam. Et doloribus officiis asperiores doloremque facilis quam.', '823481.45', '1', '10', '1587717517', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('In corrupti et modi blanditiis odio.', 'Voluptatem qui quaerat quam voluptatem. Dignissimos ipsam quo non possimus mollitia consequuntur non. Labore aut non doloribus inventore autem. Voluptas aut reiciendis qui maiores sunt tempora. Voluptas vel illum dolores amet non. Deleniti dolor consequatur magnam fugit.', '746310.84', '0', '1', '1605353702', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('At officiis dicta voluptates.', 'Eos cum dolorem minus optio natus odit. Qui consequuntur officia ea dolore ut aspernatur voluptatum libero. Quia ea alias officia nihil est iste nesciunt est. Quaerat labore quia reprehenderit. Illo dolor sint ea aliquid excepturi ea.', '491048.29', '1', '3', '1544490283', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Nihil molestiae perferendis quisquam.', 'Aliquid qui aperiam ut quis hic earum rem. Id culpa repellat vitae omnis. Et dignissimos possimus debitis itaque vel accusantium. Dignissimos ab modi expedita sint. Aut qui blanditiis vel. Ut distinctio maiores autem.', '586566.61', '0', '11', '1564618131', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Id quia autem tempore illo.', 'Modi magnam atque culpa ipsa necessitatibus dicta. Illo optio dicta quia est cum tempora. Suscipit et eveniet reprehenderit voluptatem. Expedita qui sed numquam officia ex nulla. Non nihil repudiandae voluptas qui ipsam officiis id. Ut maxime eum et amet qui ut atque numquam. Velit at assumenda sit officiis est aut voluptatem.', '422327.81', '1', '16', '1559897195', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Aliquid maxime ut error.', 'Beatae rerum qui animi et quas aut. Inventore id voluptatem et eveniet aliquid est. Velit non quia maxime veritatis eaque reprehenderit ut. Omnis totam ipsa nobis.', '629791.48', '0', '20', '1548169885', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Ut ipsa provident quae voluptatibus.', 'A ut eaque molestiae. Occaecati alias et quibusdam est natus dolores. Fugiat velit enim tempora incidunt dolor laboriosam. Enim similique aliquid recusandae. Maxime quasi reprehenderit consectetur corporis eaque sint.', '61323.41', '0', '10', '1590796445', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Iusto quo vel quidem.', 'Delectus sit in aut cum. Voluptate ipsum asperiores sed tenetur repellat. Aut sunt eius aut ut voluptatibus. Eum voluptatibus omnis consequatur dolorem quos. Nulla quidem et impedit est autem suscipit veniam voluptas. Eum consequuntur quo et ut eius consequatur. Quo aliquid ut officiis tenetur harum omnis architecto.', '546646.76', '0', '2', '1568482209', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Eveniet ut provident doloremque ducimus.', 'Magni dicta impedit sit et. Commodi labore totam ea. Molestiae numquam eius qui ut ut. Similique modi id sit. Aut occaecati saepe dolorem neque saepe deleniti.', '253281.36', '0', '2', '1570614911', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Accusantium rerum qui dolor.', 'Aspernatur aspernatur magnam quaerat distinctio. Inventore illo quis recusandae corrupti iusto nemo dolores. Eius voluptatem id laudantium id. Velit placeat magnam aspernatur voluptas. Nihil dolores sit maiores placeat. Quia sunt sunt nihil in eos voluptas.', '570890.45', '0', '20', '1603792729', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Amet maxime nulla dolore in.', 'Doloremque qui ea dolorem architecto fuga iusto ut natus. Voluptatem dolorum qui sunt aut vel. Dolorem temporibus maxime cupiditate veniam id quaerat. Mollitia voluptatibus temporibus veritatis qui. Inventore est laudantium rerum et hic vero animi. Et ipsam dolor fugit aut sed. Temporibus beatae ipsa rerum excepturi.', '906635.41', '1', '10', '1590690692', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Harum repudiandae temporibus quam.', 'Nisi rem qui animi reiciendis magnam ratione ratione aliquid. Eius ipsam est laudantium velit et veniam laborum. Asperiores sit debitis dicta nobis sint et quam suscipit. Necessitatibus officiis perferendis accusantium et sunt et. Quis porro nulla aut in est eaque adipisci. Animi dolores alias id assumenda fuga.', '27959.79', '0', '20', '1584568292', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Odio debitis dolores voluptatem.', 'Magnam provident omnis optio accusantium veritatis assumenda incidunt. Optio unde sed itaque et suscipit rem aut facere. Non nostrum possimus in veritatis est quis autem. Vero omnis a qui mollitia. Nesciunt iusto delectus possimus nemo qui. Aut ex quasi et eaque quam molestiae recusandae.', '751059.07', '1', '1', '1545677054', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('At voluptas ullam fugiat ex temporibus.', 'Quibusdam alias aspernatur quis doloribus. Ut rerum sit consequatur esse. Officiis beatae excepturi nisi vel et et. Libero corrupti id velit. Sed autem labore numquam. Ut nobis aut sint recusandae quisquam dolor et. Aliquid reiciendis facilis deserunt aut molestias eum.', '850380.34', '0', '18', '1559759484', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Id impedit sunt.', 'Laboriosam dolor consequuntur et velit praesentium quo. Dignissimos itaque dolorum consequatur debitis cum. Natus ab eum eum mollitia. Corrupti unde eum corporis provident quis.', '933767.33', '0', '7', '1551393854', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Quis incidunt nihil consequatur dolorem.', 'Qui rerum ullam tenetur est dolores. Porro quidem sapiente et reiciendis. Assumenda molestiae amet doloremque et itaque quis. Sequi placeat et at molestias. Placeat dolorum aspernatur nesciunt temporibus.', '850512.52', '1', '19', '1607531099', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Perferendis ducimus corrupti est quia.', 'Et dolor nihil fuga nemo quo. Temporibus et officia et amet. Asperiores rerum quo voluptates aut et repellat. Expedita aut quasi laborum a ex natus. Voluptatum debitis quam autem nisi quidem. Numquam perspiciatis illo harum aut perferendis.', '414141.70', '0', '1', '1575427595', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('At consequatur repellat.', 'Magnam magni nostrum dolores et molestiae iste. Et culpa sit necessitatibus minus dolorem facere et in. Nobis rerum voluptatum veniam deserunt eius qui deleniti. Sint minus facilis reprehenderit quos accusamus mollitia rerum. Aspernatur nostrum voluptate aut ea dignissimos. Repellat illum quae occaecati aliquid totam. Officia magnam sed dolores.', '144077.55', '0', '2', '1568545949', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Iusto impedit sed fuga unde.', 'Ab et tempora eum sed non placeat et. Magnam porro dolorem cumque. Error fugit in laborum et quasi. Magnam sit velit fugiat. Suscipit magnam distinctio qui magni et magni. Molestiae dolor vel similique adipisci magni officia iure.', '809810.08', '0', '13', '1566786229', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Dolore molestiae tenetur ut aut voluptas.', 'Sint voluptatem rerum dolorem quisquam quaerat alias. Ad et rem exercitationem cupiditate sapiente earum et. Sequi iusto et sit. Natus ab aperiam debitis autem iusto et.', '990268.48', '0', '17', '1582944325', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Omnis nisi est modi fuga reprehenderit.', 'Debitis laborum nihil nesciunt ut. Modi debitis repellat alias nisi nam sapiente voluptatem. Ut nihil qui est dolorum. Aspernatur ut eos ratione numquam ut at. Amet molestiae accusantium aperiam cupiditate eos ipsa. Eum rerum vel non deleniti laborum. Dolorem corporis omnis magnam illo laudantium.', '504847.55', '1', '1', '1593079558', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Dolorem deserunt dolorum.', 'Saepe et ipsa aut quo consequatur. Ratione blanditiis ipsam at sed nostrum similique. Est modi unde praesentium aut et totam. Enim voluptates quia explicabo quas quisquam adipisci sit distinctio. Non eaque unde aut eum explicabo. Sit est quidem rerum sapiente similique est nam.', '716141.68', '1', '2', '1544677542', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Nemo aliquam eveniet nobis optio alias.', 'Doloribus eligendi aut non aut ex explicabo totam. Quaerat distinctio quis est quibusdam. Dolor laboriosam dolor eum id blanditiis libero minus commodi. Beatae earum eaque atque accusantium et.', '782652.21', '0', '17', '1555079667', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Nihil quo totam sit aperiam.', 'Ad minima nobis repellendus et. Unde quas occaecati omnis neque nemo fugit numquam. Unde dolorum voluptatem odio nisi et non. Saepe perferendis modi totam sit. Dicta architecto quis voluptas velit rerum.', '910939.52', '0', '9', '1573923077', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Animi illum debitis et suscipit sed.', 'In similique voluptas repudiandae laborum ipsa nobis. Consequuntur ratione et libero quod aut expedita. Pariatur dolor corporis aperiam dolor iste. Omnis tenetur nihil enim doloremque nihil optio. Aspernatur et sunt commodi qui veritatis. Eligendi omnis molestias molestiae eius iure harum fugiat animi. Illo qui voluptate laudantium animi debitis voluptatum qui.', '745659.75', '0', '4', '1583661566', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Est eaque tempore aliquid quisquam.', 'Voluptate ut molestiae similique rerum. Earum commodi ut optio tenetur facere occaecati porro consequatur. Occaecati voluptatem ut nemo deserunt et doloremque. Voluptatum suscipit sed et.', '224733.93', '0', '19', '1571888226', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Et voluptatum non.', 'Dolorem et numquam ad eum nesciunt. Et totam eius voluptates nihil. Pariatur deserunt aut et libero. Veritatis sint dolor nemo excepturi. Delectus voluptas nesciunt similique quaerat ex et aut.', '429904.65', '1', '1', '1597072987', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Modi rerum cumque quo.', 'Ad quis quia magnam eos ipsam qui suscipit. Ullam alias iure aliquam excepturi. Nulla sunt quidem tenetur illo vel sit. Sint quis velit eos accusantium ipsa iste. Facilis explicabo voluptates unde rem sit illo. Omnis eaque reiciendis labore ut quibusdam nihil. Quis eligendi enim eveniet.', '383389.66', '1', '10', '1576025193', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Excepturi dicta ut dicta autem quo.', 'At qui quisquam quis. Ut dolore itaque veniam porro autem eos inventore. Rem et et tempora in. Sunt saepe natus ex asperiores consequatur sequi. Et temporibus est harum minima voluptatibus commodi fugiat autem.', '977713.25', '1', '1', '1585147204', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Ut hic nesciunt.', 'Voluptas doloribus rerum quod eveniet sed sequi ad. Placeat tenetur illo quia voluptas ducimus repudiandae. Est itaque quia nesciunt consequatur tempore unde vel. Deserunt tempora ea suscipit et quo qui. Minima temporibus molestiae velit ut aut. Perferendis aut repellat vero blanditiis autem neque. Quo sunt praesentium earum facere molestiae voluptatem quia.', '856900.11', '0', '2', '1562834513', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Accusantium amet officiis dolores.', 'Nam exercitationem impedit hic eius. Tempora quasi provident ducimus qui. Molestiae possimus magni similique nemo. Expedita ratione ut consequuntur. Explicabo sequi quis sit et.', '267377.43', '1', '17', '1596154092', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Eos pariatur quae animi.', 'Dolor quia possimus mollitia libero sed. Aut rerum earum qui voluptatem rerum. Rerum eum distinctio delectus. Veritatis consequatur iste esse dolorum.', '745770.90', '1', '13', '1566973405', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Laborum non officiis ipsam aut.', 'Illum est enim officiis inventore ad voluptatum consequuntur aut. Sit voluptas modi rerum iste omnis. Voluptate nesciunt labore labore. Quibusdam occaecati facere est consectetur maiores nam. Ad dolor quis totam id.', '372353.71', '1', '6', '1604055674', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Hic fuga sit.', 'Blanditiis voluptatem molestiae est fuga vitae voluptas voluptatem voluptatem. Sunt reiciendis facilis ab omnis dolorem omnis. Voluptatum perferendis explicabo optio voluptas rerum. Quis dolores voluptatum eum doloremque dolor perferendis dolor. Asperiores et corporis at doloremque temporibus. Nulla qui unde molestiae nostrum. Ipsum ut laboriosam aperiam velit voluptatem sunt ipsam sequi.', '81289.10', '1', '20', '1548175605', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Et ipsam quibusdam fuga saepe.', 'Similique quibusdam ipsam numquam neque asperiores ipsa. Iste voluptates fugit tenetur libero et ea ea. Aliquid dolor suscipit ut molestiae. Aut omnis repellendus voluptatem velit sint aliquam quis.', '420953.97', '0', '7', '1547738335', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Maiores id quasi impedit quibusdam.', 'Sit dolore debitis labore eum voluptatem. Delectus delectus asperiores rem pariatur. Quia autem recusandae nesciunt. Consectetur officia vel repudiandae id rem. Reprehenderit in deleniti corrupti consequuntur dolor eos maxime.', '264056.88', '0', '20', '1572246476', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Culpa fugiat voluptates praesentium velit.', 'Quas in sed ipsam velit laborum molestias. Enim vitae aut eum architecto. Consectetur rerum blanditiis porro dolorem eos. Dolores autem ut animi commodi.', '712006.89', '0', '8', '1573252471', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Dolores et aut voluptatem.', 'Ea quas cupiditate facere molestiae. Maxime enim porro sint doloribus. Id dolore repellendus velit earum consequuntur voluptates provident. Temporibus enim expedita omnis et.', '440730.84', '0', '3', '1544269831', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Maxime consequatur vero sint reiciendis ipsam.', 'Architecto et repudiandae et. Provident qui explicabo esse asperiores enim molestiae necessitatibus. Et id quam expedita ab voluptatem. Ut aut nobis earum autem porro quia et fuga. Debitis et est perferendis. Est et provident distinctio dignissimos distinctio non aut error. Et minus dicta ea et.', '272681.73', '0', '5', '1576985776', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Nisi iusto cupiditate quasi veritatis iste.', 'Quis autem quas harum omnis optio illum. Odit fuga cupiditate illum quis. Et accusamus quia explicabo voluptatem atque illum error et. Suscipit non eum sit sit et rerum vitae. Et est itaque iste. Quia impedit esse ut expedita molestiae quaerat illum qui.', '516726.09', '1', '8', '1574740709', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Vero cupiditate aut molestiae velit ut.', 'Ut est in ipsa hic. Quia quia ducimus nam deserunt necessitatibus quae est. Non cupiditate itaque aut iste reprehenderit. Aut et dolore facere aut qui quis deleniti. Iusto perspiciatis praesentium vero animi maxime. Eos aliquid vitae repellendus aut. Fuga consequatur ut consequuntur quisquam est iste.', '250505.24', '1', '6', '1555841587', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Ipsum eveniet qui perferendis praesentium.', 'Nostrum dicta quos et. Error facilis deserunt velit et voluptas. Distinctio temporibus exercitationem ut laboriosam illo unde esse. Dolores non excepturi nihil est. Tempora earum voluptas quia.', '224512.23', '0', '3', '1571121556', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Culpa quibusdam nisi eos excepturi sit.', 'Sit explicabo non facilis aliquid. Cum nemo incidunt qui sit ipsam dolorem non. Iusto esse quisquam minus rerum qui est consequatur. Est et assumenda dolorem.', '574314.37', '0', '12', '1564527252', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Saepe aspernatur et porro.', 'Nihil id illum accusantium corrupti qui libero tempore. Odit quo maxime doloremque odio ut temporibus nostrum. Et labore quos ut voluptatem odio vitae ut. Ipsum atque dolorem quis vel. Optio aut numquam animi dolores.', '643046.04', '0', '3', '1565941234', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Impedit autem consequatur ab rerum ullam.', 'Dignissimos aperiam ipsa ipsa iure. Quibusdam et animi dicta sapiente eligendi quia aliquam. Quidem cumque officiis corrupti. Vero qui vel corrupti soluta nihil dolorem. Totam aut illo ad praesentium.', '526774.77', '1', '4', '1539854263', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Illum iste exercitationem sapiente.', 'Quia voluptates dolorem molestiae blanditiis veritatis natus. Sunt est voluptatum rem eum maxime et repellat. Numquam aut est qui dolores illum voluptatem vitae. Vel placeat qui debitis libero aut. Doloremque dolorem dolorem optio placeat nihil. Magnam reprehenderit aut ducimus deleniti debitis expedita libero.', '486378.21', '0', '16', '1548900670', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Neque nihil dolorem veniam doloremque.', 'Aut nostrum consequatur ullam suscipit culpa qui. Enim facilis culpa debitis aut possimus aut et. Ex nemo quia voluptas asperiores quibusdam. Odio eveniet id qui ipsum aut ut nisi. Occaecati eum maxime incidunt autem quis architecto et quam.', '676677.96', '0', '16', '1597830631', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Occaecati vitae ea amet.', 'Ullam modi itaque eaque magni eum tempore cum est. Eaque minima necessitatibus doloribus veritatis rerum ex ab. Facere et quia hic eius qui. Rerum explicabo quasi sint incidunt et placeat.', '195135.24', '1', '15', '1590130576', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Quis deserunt dolor est ea.', 'Veniam repudiandae unde quam velit nam dolor soluta. Dicta ad esse architecto. Asperiores et consequatur rerum et voluptas. Odit itaque impedit incidunt voluptate.', '750286.98', '1', '19', '1581524076', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Enim saepe porro.', 'Neque ducimus voluptate vero magni minus velit. Consequatur dolore dolorem similique laudantium laudantium quidem veritatis. Maiores non ut sit vel dolorem sed. Aut illo nobis nam dicta dolorem iste. Quis voluptatum ut dignissimos assumenda sit. Error voluptatem est et et voluptatem rerum sunt. Omnis dolorem nulla commodi doloremque ullam.', '129491.36', '0', '12', '1569279019', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Qui aut iure iure.', 'Itaque esse qui qui dolor eius. Alias est voluptatibus et voluptatibus quidem repellat blanditiis non. Consequuntur fugit dolore illo cumque et dicta occaecati. Corporis ipsa molestias aperiam saepe voluptas in eos.', '373863.49', '1', '13', '1591280366', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Nesciunt consequatur tempore qui.', 'Quas modi eos quisquam sint nihil consequuntur a. Natus modi ad dignissimos aliquam et sunt. Nihil hic culpa blanditiis non molestias. Dolores est quia blanditiis modi aut et saepe tempore.', '97995.97', '1', '14', '1579234659', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Dolore enim voluptates architecto.', 'Molestiae assumenda beatae earum maxime. Sed minima maxime enim perferendis et. Sed ratione soluta eligendi. Est qui voluptate error.', '986641.40', '1', '1', '1567370743', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Eligendi explicabo aliquid amet optio.', 'In sequi quidem doloremque aliquam et et. Et dolor debitis recusandae magni. Fugit fuga consequatur dolores qui nulla autem et totam. Molestiae illo quis facilis odit illo et consectetur. Voluptatem quod quia explicabo. Cupiditate aperiam corrupti non saepe exercitationem nobis.', '64965.60', '1', '9', '1568761408', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Natus quos qui aut.', 'Excepturi et culpa dolorum perferendis omnis ad. Iure consequatur quia distinctio minima sit doloribus ut. Sit adipisci aut ut recusandae. Repellendus voluptas similique iure quisquam. Eos et temporibus error temporibus vel in.', '925453.13', '0', '3', '1542592524', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Facilis repellat quis.', 'Blanditiis sequi provident debitis eius totam reprehenderit. Harum quod ad et distinctio. Aperiam quibusdam quibusdam sed odio beatae esse eos. Aut similique libero et voluptate ut illo delectus veritatis. Exercitationem excepturi eos in ipsum culpa ut. Exercitationem placeat doloribus et quod ut sit eligendi doloribus. Asperiores repudiandae ab consequatur aperiam eveniet delectus ut.', '454925.54', '1', '8', '1567245161', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Eveniet in qui laudantium ea.', 'Nemo autem aut nam rerum voluptas quia. Expedita dignissimos culpa tempore ut nostrum. Cupiditate sed et amet nihil quisquam. Quis qui perferendis ut hic voluptatem. Nobis quia iusto debitis distinctio deleniti vel quia. Facilis dolore ipsam rem nulla illum est. Nesciunt hic et praesentium quisquam delectus.', '566107.46', '0', '14', '1606606239', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Neque nihil explicabo deleniti impedit et.', 'Distinctio assumenda sit omnis ducimus et dolores perferendis. Natus illum libero pariatur laudantium eligendi id. Fugit minus aut magnam et aut. Cumque dolorum sunt necessitatibus qui corporis iste.', '473087.67', '0', '15', '1607015868', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('A unde provident.', 'Alias eum ratione veritatis in. Sapiente in sint sit nostrum quidem sed nisi. A autem rerum nostrum vero similique. Non nam commodi neque mollitia dolore. Minus autem et voluptatem ut. Ea ipsa minima doloremque est.', '871601.11', '0', '2', '1549213024', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Nobis est consequatur.', 'Et architecto laboriosam corrupti nihil eaque. Dolores quae et ea et incidunt quis molestiae expedita. Non iusto vel nam et dolores velit. Ut quia ut qui et sed. Vitae odit tempora reprehenderit eveniet dignissimos sit in cupiditate. Vero laborum in consequatur in expedita consequatur architecto sit.', '989203.94', '1', '9', '1577019895', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Consequatur vel atque possimus voluptatem.', 'Magnam perferendis esse est fugit. Vel perspiciatis quas doloremque quos. Rerum repellat enim veniam. Nihil corrupti modi laudantium rerum recusandae. Commodi eos et et. Dignissimos esse veritatis eaque occaecati. Modi qui architecto quae dolores.', '43368.60', '1', '16', '1575327816', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Veritatis inventore nihil.', 'Occaecati et nihil totam harum suscipit. Rerum laborum excepturi et doloribus. Debitis dolor dolorem delectus at temporibus. Excepturi nam quibusdam asperiores ipsum atque. Est molestiae id quia minus. Beatae cum labore neque soluta voluptatem asperiores rem aut.', '744074.81', '1', '11', '1565862419', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Accusantium consequatur expedita id rerum sed.', 'Dolorum velit in dignissimos amet rerum aut quibusdam necessitatibus. Fugiat nisi reiciendis eligendi accusamus voluptatem quis. Minima nesciunt harum doloribus. Necessitatibus reprehenderit similique deleniti similique magni repudiandae neque. Consequatur non nihil rerum numquam consectetur. Nisi delectus unde eius.', '612403.04', '0', '18', '1595502284', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Et quia optio aut qui.', 'Excepturi dolor laborum eos. Ad enim qui nemo ipsum dolorum. Doloremque dolor molestiae consequatur quo deleniti. Eligendi quibusdam recusandae aliquid tenetur qui optio incidunt.', '336109.25', '1', '6', '1552015975', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Et illo iusto qui.', 'Fuga perspiciatis ipsam voluptates nemo. Natus dolor sunt cum sit delectus perferendis debitis. Placeat dignissimos unde quisquam dolorem magnam mollitia quaerat. Omnis ea sit non aut debitis sit sit.', '960519.88', '0', '16', '1552836776', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Incidunt facere nobis.', 'Aut expedita rerum sit consequatur qui id. Rerum laboriosam quae exercitationem ullam labore. Debitis dolorum repellat quo minus velit sed enim. Autem ab itaque molestias quidem accusamus rem inventore. Dolorem sit ut ipsum placeat hic eveniet at. Voluptatibus eveniet neque nostrum consectetur officia. Qui velit consequatur ad dolore.', '301128.64', '0', '13', '1596882636', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Quia architecto eligendi illum.', 'Quos asperiores qui fugiat deserunt ut. Provident est quae illo aut. In sed voluptatem repellat dolores voluptatem saepe. Exercitationem officia consequatur et laborum maiores temporibus ut. Hic rerum reiciendis provident corporis id dolores.', '172325.79', '1', '18', '1579758563', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Sed necessitatibus quisquam eum.', 'Velit cum quae velit quas. Excepturi mollitia repudiandae delectus aut sit provident animi a. Autem veritatis odio voluptatem doloribus laudantium. Eius est hic aliquam. Deserunt nesciunt mollitia animi quisquam distinctio. Maxime temporibus eveniet quod laboriosam nihil tempora.', '405807.28', '1', '7', '1595992383', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Dolor quia quo.', 'In qui aut voluptatem voluptatibus laborum. Et sit illum veniam minima repellendus temporibus at. Rerum natus qui et accusantium totam fugiat. Ullam accusantium deserunt et maxime inventore non veniam. Eum quia qui est. Non est consequatur distinctio nihil quae ea. Soluta dolorem laborum quae asperiores cumque eum.', '615681.09', '1', '13', '1569738822', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Non pariatur molestiae enim repellendus.', 'Iure rerum quam totam blanditiis sapiente perferendis sed quas. Consequatur atque distinctio animi iste nihil fugiat quas. Saepe modi cumque vitae nam nobis quia quas. Quas ea incidunt ut quidem neque inventore ea. Veniam alias inventore quia qui eum. Fugit ut cum aut architecto et laborum omnis.', '460818.97', '1', '6', '1566201540', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Repellendus enim tenetur est dolore quo.', 'Expedita incidunt ea architecto similique. Pariatur qui itaque molestiae aperiam. Culpa distinctio rerum dolorem suscipit id neque. Rerum ut repellendus dolores. Id veritatis odit natus. Nobis saepe enim ipsa magni.', '471229.72', '1', '9', '1540001660', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Similique rem error ut dolor quidem.', 'Sit voluptatem qui ab laudantium in sint. Aut temporibus sequi iure. Assumenda neque eos expedita dolor aliquid quia. Qui mollitia sapiente et voluptates a dolorem ut. Est hic ea suscipit id totam fugiat.', '803623.48', '0', '18', '1549455709', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Labore aspernatur assumenda deleniti odio quam.', 'Ipsa reiciendis fuga sit. Unde voluptas quia perspiciatis rerum voluptatem provident. Inventore deleniti dolor rerum aliquid placeat. Nobis est nemo a qui voluptas quae eius. Sint reprehenderit ratione modi est quia non. Eaque sint aut impedit doloribus veniam asperiores reiciendis.', '772763.31', '1', '4', '1571363483', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Atque perferendis quod qui et.', 'Laborum nostrum qui non quos. Facere excepturi aut placeat in. Voluptas amet similique sapiente aut. Voluptate distinctio voluptate libero. Non debitis quia deleniti rerum.', '893986.52', '0', '20', '1542025135', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Totam est sint suscipit nam qui.', 'Ut sed atque voluptatem saepe sit iusto laboriosam. Laborum architecto alias ut et ut esse. Ea esse magni in sunt commodi dolor velit labore. Tenetur doloribus non unde cupiditate ut. Magnam eveniet nam doloribus at debitis voluptate ut. Mollitia quaerat quia quibusdam omnis non.', '682426.75', '1', '16', '1556410114', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Et neque nesciunt odio consequatur.', 'Hic quia molestias voluptatem ut nostrum accusantium. Quas amet quia vel ducimus qui quod ex. Molestias alias possimus aperiam commodi dolor soluta. Ut nesciunt unde necessitatibus distinctio aut sunt occaecati. Vel voluptas illo quos voluptas aut.', '945402.51', '0', '4', '1549287513', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Officiis facilis accusamus quisquam omnis.', 'Et doloribus nisi autem ea voluptas. Possimus ad enim repellendus. Ut ut numquam repudiandae in. Inventore aut corrupti esse veniam eaque quisquam.', '643451.60', '0', '7', '1569758089', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Dolores est reiciendis earum sint minima.', 'Commodi officia at facere dolor id aperiam deserunt. Natus accusamus vero reiciendis vitae et. Similique est error nisi qui nostrum. Quos illo esse rerum. Ipsam similique ex velit veritatis.', '868433.28', '0', '7', '1563848786', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Voluptatum ut quia voluptatum aliquid.', 'Minima et expedita quis non corporis qui. Blanditiis neque asperiores enim inventore. Voluptatem labore perferendis et voluptas quas delectus sint. Minima laboriosam sed similique qui perspiciatis doloremque vel. Eius a repudiandae ipsum earum.', '224334.22', '1', '16', '1589110061', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Et inventore porro.', 'Eius voluptatem nobis qui. Vel tempora sit sit quae eligendi. Magni quia quia modi facilis iure soluta quia. Autem magni id voluptas. Animi dolorem corrupti ex optio.', '959600.75', '0', '19', '1549905508', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Eius qui non facere tempora fugit.', 'Eaque sit ut quia rerum temporibus voluptas et ut. Est non architecto adipisci dolor corporis. Aliquid cupiditate est et accusantium. Cupiditate maiores voluptas quaerat dolores est sunt et. Magnam iusto impedit quo voluptatibus cupiditate. Nihil dolorem optio harum quis. A consequatur ut sint et.', '662476.08', '0', '16', '1548244261', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Eaque architecto adipisci repellendus.', 'Ex earum illo sapiente. Rerum voluptatem harum reiciendis voluptas. Ipsum et delectus similique. Placeat ab officia quaerat voluptates ipsum ipsam dolores. A quos qui vel. Dolor necessitatibus eius autem officiis consectetur quibusdam voluptatem.', '969630.99', '1', '13', '1570863623', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Possimus et qui aut adipisci aut.', 'Ea odio optio maiores ut. Est officiis repellat inventore sit fugit. Sit soluta et officia magnam ipsa voluptatem totam. Voluptas dolore similique voluptatem iusto ut minus. Labore ullam quod est.', '147406.17', '0', '13', '1606290173', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Quod est ut aut et quidem.', 'Numquam ex dignissimos minus voluptatem laboriosam aut ex. Blanditiis autem perferendis non deserunt dolor culpa at error. Dolorem quaerat at fuga et. Voluptatem aliquam magnam animi officiis autem expedita beatae.', '569289.58', '0', '3', '1605870925', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Dolores voluptates et qui.', 'Ab cum assumenda cupiditate vero. Corrupti ipsam dolorem occaecati repellat sequi iusto ullam. Aut hic sunt sunt quaerat non ut aut. Aut velit et iste magni ut cupiditate asperiores. Ut a optio unde ipsam. Rem quia corrupti voluptatem rem et.', '145661.76', '1', '7', '1553050070', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}'),
    ('Ullam at dolorem.', 'Dolore voluptas ea laudantium eius accusantium magnam. Veniam provident ipsam et beatae sed debitis facere ea. Temporibus consequatur excepturi aliquid consequuntur. Quibusdam aut aliquid cum dolor sapiente dolorum nobis quo. Aspernatur quia et vel rerum non qui et nobis. Ut fuga natus et molestias aut. Sunt minima quia sint optio et deleniti.', '164770.24', '0', '11', '1563100029', '{"small": "/images/products/0/small.jpg", "medium": "/images/products/0/medium.jpg", "original":"/images/products/0/original.jpg"}');

INSERT INTO product_views
    (user_id, product_id, quantity, updated_at)
VALUES
    ('4', '5', '9', '1547790986'),
    ('1', '37', '13', '1583985789'),
    ('2', '41', '3', '1597322040'),
    ('18', '34', '10', '1557887722'),
    ('13', '17', '11', '1591131494'),
    ('2', '8', '1', '1597093038'),
    ('11', '21', '5', '1593329050'),
    ('18', '16', '3', '1552477165'),
    ('11', '47', '10', '1610073087'),
    ('19', '29', '1', '1575792181'),
    ('9', '43', '8', '1603028116'),
    ('5', '19', '6', '1598875880'),
    ('1', '15', '14', '1608389466'),
    ('7', '14', '15', '1602391031'),
    ('2', '41', '3', '1600012606'),
    ('8', '6', '3', '1605098550'),
    ('17', '48', '15', '1595168048'),
    ('16', '26', '8', '1570506335'),
    ('7', '25', '8', '1564329611'),
    ('17', '22', '2', '1549289123'),
    ('19', '9', '1', '1605176652'),
    ('14', '13', '10', '1561901584'),
    ('13', '7', '8', '1597837389'),
    ('10', '8', '2', '1589709606'),
    ('17', '14', '11', '1597839585'),
    ('9', '7', '6', '1585643823'),
    ('12', '47', '2', '1587638065'),
    ('11', '19', '2', '1589813266'),
    ('6', '4', '2', '1595680298'),
    ('1', '27', '8', '1553807672'),
    ('1', '49', '7', '1602507478'),
    ('3', '31', '3', '1554636744'),
    ('9', '16', '5', '1574258326'),
    ('15', '46', '7', '1563346695'),
    ('1', '14', '3', '1557085579'),
    ('6', '8', '11', '1589885443'),
    ('4', '32', '15', '1605582828'),
    ('17', '42', '1', '1610719772'),
    ('8', '30', '3', '1590546716'),
    ('17', '5', '12', '1567133420'),
    ('10', '12', '13', '1604680541'),
    ('19', '39', '9', '1593033868'),
    ('12', '20', '6', '1580887163'),
    ('14', '38', '4', '1555311071'),
    ('11', '24', '11', '1590810397'),
    ('11', '36', '9', '1609530129'),
    ('3', '25', '12', '1561846469'),
    ('12', '15', '8', '1583247318'),
    ('10', '4', '12', '1557946198'),
    ('17', '14', '2', '1610521300'),
    ('16', '19', '7', '1609664691'),
    ('16', '28', '4', '1597039144'),
    ('19', '29', '12', '1594987690'),
    ('14', '47', '6', '1604241455'),
    ('2', '47', '2', '1545876429'),
    ('14', '29', '2', '1579068210'),
    ('5', '2', '3', '1608379737'),
    ('15', '41', '7', '1590088537'),
    ('12', '31', '14', '1600020163'),
    ('12', '10', '15', '1599867603');


INSERT INTO carts
    (user_id, products, updated_at)
VALUES
    (
        '19',
        '[{"id":12,"quantity":1},{"id":42,"quantity":2},{"id":3,"quantity":2},{"id":13,"quantity":1},{"id":42,"quantity":1}]',
        '1608289373'
    ),
    (
        '4',
        '[{"id":6,"quantity":4},{"id":31,"quantity":2},{"id":3,"quantity":2},{"id":41,"quantity":2},{"id":41,"quantity":4},{"id":32,"quantity":1},{"id":50,"quantity":3}]',
        '1584490461'
    ),
    (
        '6',
        '[{"id":17,"quantity":3},{"id":32,"quantity":2},{"id":39,"quantity":2},{"id":24,"quantity":2},{"id":26,"quantity":4},{"id":46,"quantity":1},{"id":36,"quantity":4}]',
        '1585021770'
    ),
    (
        '11',
        '[{"id":25,"quantity":3},{"id":21,"quantity":1},{"id":6,"quantity":3},{"id":43,"quantity":1},{"id":37,"quantity":3}]',
        '1593965290'
    ),
    (
        '2',
        '[{"id":5,"quantity":1},{"id":21,"quantity":4},{"id":22,"quantity":3},{"id":2,"quantity":4},{"id":27,"quantity":4},{"id":30,"quantity":1},{"id":41,"quantity":1}]',
        '1548367353'
    ),
    (
        '14',
        '[{"id":36,"quantity":1},{"id":40,"quantity":4},{"id":18,"quantity":1}]',
        '1578596030'
    ),
    (
        '15',
        '[{"id":27,"quantity":4},{"id":39,"quantity":3},{"id":31,"quantity":1}]',
        '1562406658'
    ),
    (
        '9',
        '[{"id":35,"quantity":3},{"id":23,"quantity":4},{"id":24,"quantity":2},{"id":36,"quantity":3}]',
        '1559896424'
    ),
    (
        '17',
        '[{"id":40,"quantity":2},{"id":39,"quantity":1}]',
        '1561588023'
    ),
    (
        '8',
        '[{"id":40,"quantity":2},{"id":39,"quantity":1}]',
        '1571974290'
    ),
    (
        '12',
        '[{"id":40,"quantity":2},{"id":39,"quantity":1}]',
        '1555932042'
    ),
    (
        '18',
        '[{"id":40,"quantity":2},{"id":39,"quantity":1}]',
        '1597633251'
    ),
    (
        '10',
        '[{"id":8,"quantity":3},{"id":8,"quantity":4},{"id":46,"quantity":1}]',
        '1565372498'
    ),
    (
        '16',
        '[{"id":8,"quantity":3},{"id":8,"quantity":4},{"id":46,"quantity":1}]',
        '1590570173'
    ),
    (
        '13',
        '[{"id":8,"quantity":3},{"id":8,"quantity":4},{"id":46,"quantity":1}]',
        '1569758421'
    ),
    (
        '7',
        '[{"id":15,"quantity":3},{"id":24,"quantity":4},{"id":33,"quantity":1},{"id":39,"quantity":2}]',
        '1559679473'
    ),
    (
        '3',
        '[{"id":15,"quantity":3},{"id":24,"quantity":4},{"id":33,"quantity":1},{"id":39,"quantity":2}]',
        '1566890670'
    ),
    (
        '1',
        '[{"id":15,"quantity":3},{"id":24,"quantity":4},{"id":33,"quantity":1},{"id":39,"quantity":2}]',
        '1605438796'
    ),
    (
        '5',
        '[{"id":15,"quantity":3},{"id":24,"quantity":4},{"id":33,"quantity":1},{"id":39,"quantity":2}]',
        '1551502135')
    ; 