#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS dd;
#创建数据库,设置存储的编码
CREATE DATABASE dd CHARSET=UTF8;
#进入数据库
USE dd;
#创建保存商品列表数据的表
CREATE TABLE menu(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(8)
);
#插入数据
INSERT INTO menu VALUES(1,'凉菜');
INSERT INTO menu VALUES(2,'热菜');
INSERT INTO menu VALUES(3,'汤类');
INSERT INTO menu VALUES(4,'时令素菜类');
#创建保存商品数据的表
CREATE TABLE details(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(8),
  place VARCHAR(88),
  eid INT,
  price DECIMAL(4,2)
);
INSERT INTO details VALUES(1,'香油黄瓜','img/index/0591170001561745702.jpg',1,6);
INSERT INTO details VALUES(2,'五香豆干','img/index/0577329001561745701.jpg','1',6);
INSERT INTO details VALUES(3,'大刀青笋','img/index/0198002001561717809.jpg','1',6);
INSERT INTO details VALUES(4,'山椒凤爪','img/index/0290921001561721401.jpg','1',18);
INSERT INTO details VALUES(5,'麻辣心舌','img/index/0279095001551509946.jpg','1',18);
INSERT INTO details VALUES(6,'红油毛肚','img/index/0208257001551462159.jpg','1',20);
INSERT INTO details VALUES(7,'番茄炒蛋','img/index/0693064001561710601.jpg','2',10);
INSERT INTO details VALUES(8,'青椒肉丝','img/index/0134273001561700743.jpg','2',15);
INSERT INTO details VALUES(9,'鱼香肉丝','img/index/0067445001561697104.jpg','2',15);
INSERT INTO details VALUES(10,'水煮牛肉','img/imdex/0830151001561700740.jpg','2',20);
INSERT INTO details VALUES(11,'干煸肥肠','img/index/0445805001561697101.jpg','2',20);
INSERT INTO details VALUES(12,'三鲜汤','img/index/0974399001561689001.jpg','3',15);
INSERT INTO details VALUES(13,'酸菜粉丝汤','img/index/0764020001561692601.jpg','3',10);
INSERT INTO details VALUES(14,'土鸡汤','img/index/0764020001561692601.jpg','3',30);
INSERT INTO details VALUES(15,'泡白菜','img/index/0764020001561692601.jpg','4',8);
INSERT INTO details VALUES(16,'青椒土豆丝','img/index/0764020001561692601.jpg','4',8);
INSERT INTO details VALUES(17,'炒油菜尖','img/index/0764020001561692601.jpg','4',8);
INSERT INTO details VALUES(18,'空心菜','img/index/0764020001561692601.jpg','4',6);
INSERT INTO details VALUES(19,'干煸四季豆','img/index/0764020001561692601.jpg','4',10);


