import { Business } from "src/entities/business.entity/Business.entity";
import { LoginDetails } from "src/entities/login.entity/LoginDetails.entity";
import { PasswordRest } from "src/entities/user.entity/PasswordRest.entity";
import { User } from "src/entities/user.entity/User.entity";
import { ProductCategory } from "src/product-categories/entities/ProductCategory";
import { Product } from "src/products/entities/product.entity";
import { Purchase } from "src/purchase/entities/purchase.entity";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { TransactionDetail } from "src/transaction-details/entities/TransactionDetail.entity";

dotenv.config();

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.POSTGRES_HOST,
	port: 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	ssl: true,
	// url: "postgres://default:pguX9yMWco8T@ep-lucky-frost-a402y3x7-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
	entities: [
		User,
		LoginDetails,
		PasswordRest,
		ProductCategory,
		Business,
		Product,
		Purchase,
		TransactionDetail,
	],
	migrations: ["src/migration/**/*.ts"],
	logging: true,
	synchronize: false,
});
