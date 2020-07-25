CREATE DATABASE IF NOT EXISTS jqh_blog default charset utf8 COLLATE utf8_general_ci;

USE `jqh_blog`;

CREATE TABLE IF NOT EXISTS `blog_content` (
    `title` VARCHAR(265) NOT NULL COMMENT '标题',
    `type` INT NOT NULL COMMENT '类型',
    `introduce` TEXT NOT NULL COMMENT '简介',
    `content`  TEXT NOT NULL COMMENT '内容',
     PRIMARY KEY (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '博客表';



CREATE TABLE IF NOT EXISTS `type` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '编号',
    `typeName` VARCHAR(265) NOT NULL COMMENT '类型名称',
    `orderNum` TEXT NOT NULL COMMENT '类型排序编号',
     PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '类型表';

CREATE TABLE IF NOT EXISTS `article` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '编号',
    `type_id` INT NOT NULL COMMENT '类型编号',
    `title` VARCHAR(256) NOT NULL COMMENT '文章标题',
    `article_content` TEXT NOT NULL COMMENT '文章内容',
    `introduce` TEXT COMMENT '简介',
    `addTime` LONG NOT NULL COMMENT '文章发布时间',
    `view_count` INT NOT NULL DEFAULT 0 COMMENT '文章浏览次数',
     PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '文章类型';

CREATE TABLE IF NOT EXISTS `admin_user` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '编号',
    `userName` VARCHAR(265) NOT NULL COMMENT '用户名',
    `password` VARCHAR(265) NOT NULL COMMENT '用户密码',
     PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT '管理员表';
