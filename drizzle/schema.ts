import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * GS Caçambas - Schema de banco de dados
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Tabela de mensagens de contato enviadas pelo formulário do site
 */
export const contactMessages = mysqlTable("contact_messages", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }).notNull(),
  message: text("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "replied"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = typeof contactMessages.$inferInsert;

/**
 * Tabela de orçamentos solicitados pelo site
 */
export const orcamentos = mysqlTable("orcamentos", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 320 }),
  city: varchar("city", { length: 100 }).notNull(),
  serviceType: mysqlEnum("serviceType", [
    "residencial",
    "comercial",
    "industrial",
    "condominio",
    "engenheiros",
    "outro",
  ]).notNull(),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "contacted", "closed"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Orcamento = typeof orcamentos.$inferSelect;
export type InsertOrcamento = typeof orcamentos.$inferInsert;
