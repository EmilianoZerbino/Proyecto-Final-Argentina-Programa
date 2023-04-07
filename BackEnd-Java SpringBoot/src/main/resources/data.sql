INSERT INTO `portfoliodb`.`usuarios` VALUES ('1', 'San Martin', '11111111', 'josesanmartin@gmail.com', '1995-02-25', 'Desarrollo Backend', 'José', '11111');
INSERT INTO `portfoliodb`.`usuarios` VALUES ('2', 'Perez', '22222222', 'juanperez@gmail.com', '1990-02-15', 'Programar', 'Juan', '22222');
INSERT INTO `portfoliodb`.`usuarios` VALUES ('3', 'Hernandez', '33333333', 'pedrohernandez@gmail.com', '1993-06-26', 'Desarrollo Fullstack','Pedro', '33333');

INSERT INTO `portfoliodb`.`acerca_de`VALUES ('1', 'Graduado como Técnico Universitario en Programación de la Universidad Tecnológica Nacional de Argentina y con un marcado interés en el área de desarrollo Backend y de diseño y administración de Bases de Datos, busco oportunidad para adquirir experiencia en el sector de desarrollo de software.', '1');
INSERT INTO `portfoliodb`.`acerca_de`VALUES ('2', 'Soy una persona curiosa, me gusta encontrar soluciones a problemas complejos, volcarlas a código y materializarlas en aplicaciones.Me agrada trabajar en equipo, cooperando con mis compañeros y aportando mis conocimientos y experiencia, con el fin de aprender y lograr un crecimiento tanto en el área profesional como personal.', '2');
INSERT INTO `portfoliodb`.`acerca_de`VALUES ('3', 'Me gusta integrar grupos de trabajo, donde pueda trabajar codo a codo con personas de mi misma profesión y personas de otras áreas que complementen mi trabajo; y me gustaría algun dia poder liderar estos grupos y guiarlos en el desarrollo de soluciones informaticas.Por último, me agrada incrementar día a día mis conocimientos en el área de desarrollo de software a través de cursos y diversos tutoriales, por lo que me gustaría conseguir una vacante en una empresa que cuente con programas de formación y desarrollo profesional.', '3');

INSERT INTO `portfoliodb`.`encabezados` VALUES ('1', 'http://localhost:8080/images/3.jpg', 'http://localhost:8080/images/1.jpg', '1');
INSERT INTO `portfoliodb`.`encabezados` VALUES ('2', 'http://localhost:8080/images/5.png', 'http://localhost:8080/images/5.jpg', '2');
INSERT INTO `portfoliodb`.`encabezados` VALUES ('3', 'http://localhost:8080/images/9.jpg', 'http://localhost:8080/images/6.jpg', '3');

INSERT INTO `portfoliodb`.`estado_academico` (`id`, `estado`) VALUES ('1', 'Finalizado');
INSERT INTO `portfoliodb`.`estado_academico` (`id`, `estado`) VALUES ('2', 'En Curso');
INSERT INTO `portfoliodb`.`estado_academico` (`id`, `estado`) VALUES ('3', 'Incompleto');

INSERT INTO `portfoliodb`.`instituciones` VALUES ('1', 'UTN', 'Universidad Técnologica Nacional','http://localhost:8080/images/2.png');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('2', 'UBA', 'Universidad de Buenos Aires','http://localhost:8080/images/9.png');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('3', 'UNLP', 'Universidad Nacional de La Plata','http://localhost:8080/images/11.png');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('4', 'AP4.0', 'Argentina Programa 4.0','http://localhost:8080/images/2.jpg');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('5', 'BAE', 'Buenos Aires Ciudad Educación','http://localhost:8080/images/10.png');

INSERT INTO `portfoliodb`.`instituciones` VALUES ('6', 'ML', 'Mercado Libre','http://localhost:8080/images/7.jpg');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('7', 'GB', 'Globant','http://localhost:8080/images/6.png');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('8', 'CABA', 'Buenos Aires Ciudad','http://localhost:8080/images/8.png');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('9', 'AMZ', 'Amazon Company','http://localhost:8080/images/12.png');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('10', 'ARG', 'Argentina Nacion','http://localhost:8080/images/1.png');
INSERT INTO `portfoliodb`.`instituciones` VALUES ('11', 'GOOGLE', 'Google Company','http://localhost:8080/images/7.png');

INSERT INTO `portfoliodb`.`especialidades` VALUES ('1', 'Técnico Universitario en Programación', '1');
INSERT INTO `portfoliodb`.`especialidades` VALUES ('2', 'Desarrollador FullStack', '4');
INSERT INTO `portfoliodb`.`especialidades` VALUES ('3', 'Licenciado en Sistemas', '2');
INSERT INTO `portfoliodb`.`especialidades` VALUES ('4', 'Ingeniero en Sistemas Informaticos', '3');
INSERT INTO `portfoliodb`.`especialidades` VALUES ('5', 'Abogado', '2');

INSERT INTO `portfoliodb`.`formaciones` VALUES ('1', '2020-12-10', '2014-03-01', '3', '3', '1');
INSERT INTO `portfoliodb`.`formaciones` VALUES ('2', '2022-12-12', '2018-03-01', '2', '1', '1');
INSERT INTO `portfoliodb`.`formaciones` VALUES ('3', '2015-06-12', '2008-03-01', '4', '1', '2');
INSERT INTO `portfoliodb`.`formaciones` VALUES ('4', '2022-03-03', '2018-03-01','2', '2', '2');
INSERT INTO `portfoliodb`.`formaciones` VALUES ('5', '2020-06-06', '2018-03-01','3', '3', '3');
INSERT INTO `portfoliodb`.`formaciones` VALUES ('6', '2016-02-02', '2010-03-12', '5', '1', '3');

INSERT INTO `portfoliodb`.`trabajos` VALUES ('1', '2022-02-02', 'Desarrollador de Software'     , '2010-03-03', '6' , '1');
INSERT INTO `portfoliodb`.`trabajos` VALUES ('2', '2010-03-03', 'Programador Junior'            , '2005-06-06', '7' , '1');
INSERT INTO `portfoliodb`.`trabajos` VALUES ('3', '2023-06-06', 'Desarrollador Backend'         , '2010-06-06', '8' , '2');
INSERT INTO `portfoliodb`.`trabajos` VALUES ('4', '2010-06-06', 'Desarrollador FullStack'       , '2000-03-03', '11', '2');
INSERT INTO `portfoliodb`.`trabajos` VALUES ('5', '2010-02-02', 'Repartidor'                    , '2000-03-03', '9' , '3');
INSERT INTO `portfoliodb`.`trabajos` VALUES ('6', '2015-06-06', 'Desarrollador Junior/Ssr'      , '2010-06-06', '10', '3');
INSERT INTO `portfoliodb`.`trabajos` VALUES ('7', '2023-06-06', 'Desarrollador FullStack Senior', '2015-06-07', '7' , '3');

INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('1', 'HTML5');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('2', 'Angular');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('3', 'Java');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('4', 'SpringBoot');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('5', 'C#');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('6', 'Entity Framework');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('7', 'SQL');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('8', 'C++');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('9', 'Office');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('10', 'MathLab');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('11', 'Unity');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('12', 'Phyton');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('13', 'SQL Alchemy');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('14', 'VertX');
INSERT INTO `portfoliodb`.`tecnologias` (`id`, `nombre`) VALUES ('15', 'React');

INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('1', '95', '1', '1');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('2', '85', '2', '1');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('3', '90', '3', '1');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('4', '75', '4', '1');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('5', '100', '7', '1');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('6', '100', '9', '2');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('7', '95', '10', '2');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('8', '100', '12', '2');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('9', '95', '13', '2');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('10', '90', '1', '2');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('11', '85', '15', '2');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('13', '95', '5', '3');
INSERT INTO `portfoliodb`.`tecnologia_usuario` (`id`, `nivel`, `tecnologia_id`, `usuario_id`) VALUES ('14', '95', '11', '3');

INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('1', 'Resolución de Problemas');
INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('2', 'Trabajo en Equipo');
INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('3', 'Liderazgo');
INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('4', 'SCRUM');
INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('5', 'CANVAS');
INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('6', 'Proactividad');
INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('7', 'Buen Compañero');
INSERT INTO `portfoliodb`.`skills` (`id`, `nombre`) VALUES ('8', 'Puntualidad');

INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('1', '65', '1', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('2', '95', '2', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('3', '85', '3', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('4', '70', '4', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('5', '75', '5', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('6', '95', '6', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('7', '90', '7', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('8', '85', '8', '1');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('9', '90', '1', '2');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('10', '85', '3', '2');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('11', '65', '4', '2');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('12', '75', '6', '2');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('13', '90', '7', '2');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('14', '95', '8', '2');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('15', '55', '3', '3');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('16', '90', '4', '3');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('17', '85', '5', '3');
INSERT INTO `portfoliodb`.`skill_usuario` (`id`, `nivel`, `skill_id`, `usuario_id`) VALUES ('18', '75', '6', '3');

INSERT INTO `portfoliodb`.`proyectos` (`id`, `nombre`, `url_logo`, `url_proyecto`, `usuario_id`) VALUES ('1', 'Calculadora en javascript', 'http://localhost:8080/images/15.png', 'https://github.com/EmilianoZerbino/Repo1', '1');
INSERT INTO `portfoliodb`.`proyectos` (`id`, `nombre`, `url_logo`, `url_proyecto`, `usuario_id`) VALUES ('2', 'App Deportiva en Java', 'http://localhost:8080/images/15.png', 'https://github.com/EmilianoZerbino/Repo1', '1');
INSERT INTO `portfoliodb`.`proyectos` (`id`, `nombre`, `url_logo`, `url_proyecto`, `usuario_id`) VALUES ('3', 'Juego simple Java', 'http://localhost:8080/images/13.png', 'https://github.com/EmilianoZerbino/Repo1', '1');
INSERT INTO `portfoliodb`.`proyectos` (`id`, `nombre`, `url_logo`, `url_proyecto`, `usuario_id`) VALUES ('4', 'Canal de Youtube', 'http://localhost:8080/images/14.png', 'https://www.youtube.com/@pildorasinformaticas', '1');

INSERT INTO `portfoliodb`.`contactos` (`id`, `url_contacto`, `url_logo`, `usuario_id`) VALUES ('1', 'josesanmartin@gmail.com', 'http://localhost:8080/images/4.png', '1');

