USE [master]
GO
/****** Object:  Database [MyKitchen]    Script Date: 11/01/2021 14:59:19 ******/
CREATE DATABASE [MyKitchen]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MyKitchen', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\MyKitchen.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'MyKitchen_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\MyKitchen_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [MyKitchen] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MyKitchen].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MyKitchen] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MyKitchen] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MyKitchen] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MyKitchen] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MyKitchen] SET ARITHABORT OFF 
GO
ALTER DATABASE [MyKitchen] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MyKitchen] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MyKitchen] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MyKitchen] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MyKitchen] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MyKitchen] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MyKitchen] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MyKitchen] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MyKitchen] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MyKitchen] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MyKitchen] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MyKitchen] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MyKitchen] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MyKitchen] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MyKitchen] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MyKitchen] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MyKitchen] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MyKitchen] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MyKitchen] SET  MULTI_USER 
GO
ALTER DATABASE [MyKitchen] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MyKitchen] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MyKitchen] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MyKitchen] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [MyKitchen] SET DELAYED_DURABILITY = DISABLED 
GO
USE [MyKitchen]
GO
/****** Object:  Table [dbo].[Ingredients]    Script Date: 11/01/2021 14:59:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ingredients](
	[IngredientId] [int] IDENTITY(1,1) NOT NULL,
	[IngName] [nvarchar](25) NULL,
	[IngredientsImg] [varchar](250) NULL,
	[Calories] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[IngredientId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ingredientsInRecipes]    Script Date: 11/01/2021 14:59:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ingredientsInRecipes](
	[RecipeId] [int] NOT NULL,
	[IngredientId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[RecipeId] ASC,
	[IngredientId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Recipes]    Script Date: 11/01/2021 14:59:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Recipes](
	[RecipeId] [int] IDENTITY(1,1) NOT NULL,
	[RecipeName] [nvarchar](25) NULL,
	[RecImg] [varchar](250) NULL,
	[CookingMethod] [nvarchar](30) NULL,
	[CookTime] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[RecipeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ingredients] ON 

INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (1, N'Dough', N'https://www.onceuponachef.com/images/2020/06/Pizza-Dough-scaled.jpg', 500)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (2, N'ChoclateChips ', N'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/51e5a614afaf394a-ID7L6IQD-zoom.jpg', 300)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (3, N'Oreo', N'https://www.sailthru.com/content/uploads/2018/08/iStock-899732720.jpg', 250)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (4, N'M&M', N'https://www.cubicpromote.com.au/media/catalog/product/cache/5d7f6713fbe2478aec81596acac0c0c8/m/_/m_m_chocolates_bulk_.jpg', 200)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (5, N'Resses ', N'https://dingmansdairy.biz/wp-content/uploads/sites/4/2015/09/71MZC0i-JgL._SL1500_.jpg', 400)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (6, N'4324', N'32443', 3423)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (9, N'WhiteChocolate', N'https://static.toiimg.com/thumb/msid-78711856,width-800,height-600,resizemode-75,imgsize-312528,pt-32,y_pad-40/78711856.jpg', 350)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (10, N'Caramel', N'https://www.thespruceeats.com/thmb/2JtJRIGuP27AFVxqqsrCBX4ELcc=/1333x1000/smart/filters:no_upscale()/sea-salt-caramels-1-58ae014c3df78c345b18651d.jpg', 120)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (11, N'Bagle', N'https://static.hashulchan.co.il/www/uploads/terms-images/ingredient/%D7%91%D7%99%D7%99%D7%92%D7%9C%D7%94-medium.jpg', 220)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (12, N'Dark Chocolate', N'https://shifke.com/wp-content/uploads/thumbs/-%D7%9E%D7%A8%D7%99%D7%A8-3521wrqg4cqg16qpjleayo.jpg', 90)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (13, N'Marshmelo', N'https://images1.calcalist.co.il/PicServer2/20122005/104318/mr_l.jpg', 120)
INSERT [dbo].[Ingredients] ([IngredientId], [IngName], [IngredientsImg], [Calories]) VALUES (14, N'Teami', N'https://d3m9l0v76dty0.cloudfront.net/system/photos/3369290/large/671a2d7d1064ccf35d1bc42fb95d75d3.jpg', 200)
SET IDENTITY_INSERT [dbo].[Ingredients] OFF
GO
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (1, 1)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (1, 2)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (2, 2)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (2, 4)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (4, 1)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (4, 10)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (5, 1)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (5, 12)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (5, 14)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (6, 9)
INSERT [dbo].[ingredientsInRecipes] ([RecipeId], [IngredientId]) VALUES (6, 12)
GO
SET IDENTITY_INSERT [dbo].[Recipes] ON 

INSERT [dbo].[Recipes] ([RecipeId], [RecipeName], [RecImg], [CookingMethod], [CookTime]) VALUES (1, N'ChocolateChipCookies', N'https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookie-recipe-ever-no-chilling-683x1024.jpg', N'Baking', 15)
INSERT [dbo].[Recipes] ([RecipeId], [RecipeName], [RecImg], [CookingMethod], [CookTime]) VALUES (2, N'M&M Cookies', N'https://www.mybakingaddiction.com/wp-content/uploads/2016/04/mm-cookies-4-1500-1-720x540.jpg', N'Baking', 20)
INSERT [dbo].[Recipes] ([RecipeId], [RecipeName], [RecImg], [CookingMethod], [CookTime]) VALUES (3, N'Reeses Cookies', N'https://prettysimplesweet.com/wp-content/uploads/2018/12/Peanut-Butter-Cup-Cookies.jpg', N'Baking', 12)
INSERT [dbo].[Recipes] ([RecipeId], [RecipeName], [RecImg], [CookingMethod], [CookTime]) VALUES (4, N'Caramel', N'https://www.thespruceeats.com/thmb/2JtJRIGuP27AFVxqqsrCBX4ELcc=/1333x1000/smart/filters:no_upscale()/sea-salt-caramels-1-58ae014c3df78c345b18651d.jpg', N'Baking', 18)
INSERT [dbo].[Recipes] ([RecipeId], [RecipeName], [RecImg], [CookingMethod], [CookTime]) VALUES (5, N'Teami finger', N'https://st1.foodsd.co.il/Images/Recipes/xxl/Recipe-7610-VKaOufm6oydh2mot.jpg', N'freezing', -2)
INSERT [dbo].[Recipes] ([RecipeId], [RecipeName], [RecImg], [CookingMethod], [CookTime]) VALUES (6, N'Amsterdam Cookies', N'https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2020/10/04114705/10_8-1100x733.jpg', N'Baking', 12)
SET IDENTITY_INSERT [dbo].[Recipes] OFF
GO
ALTER TABLE [dbo].[ingredientsInRecipes]  WITH CHECK ADD  CONSTRAINT [fk1] FOREIGN KEY([RecipeId])
REFERENCES [dbo].[Recipes] ([RecipeId])
GO
ALTER TABLE [dbo].[ingredientsInRecipes] CHECK CONSTRAINT [fk1]
GO
ALTER TABLE [dbo].[ingredientsInRecipes]  WITH CHECK ADD  CONSTRAINT [fk2] FOREIGN KEY([IngredientId])
REFERENCES [dbo].[Ingredients] ([IngredientId])
GO
ALTER TABLE [dbo].[ingredientsInRecipes] CHECK CONSTRAINT [fk2]
GO
USE [master]
GO
ALTER DATABASE [MyKitchen] SET  READ_WRITE 
GO
