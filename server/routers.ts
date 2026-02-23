import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { contactMessages, orcamentos } from "../drizzle/schema";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // GS Caçambas - Contact Messages
  contact: router({
    send: publicProcedure
      .input(z.object({
        name: z.string().min(2).max(100),
        email: z.string().email().optional(),
        phone: z.string().min(8).max(20),
        message: z.string().min(5).max(2000),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (db) {
          await db.insert(contactMessages).values({
            name: input.name,
            email: input.email ?? null,
            phone: input.phone,
            message: input.message,
          });
        }
        return { success: true } as const;
      }),
  }),

  // GS Caçambas - Orçamentos
  orcamento: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(2).max(100),
        phone: z.string().min(8).max(20),
        email: z.string().email().optional(),
        city: z.string().min(2).max(100),
        serviceType: z.enum(['residencial', 'comercial', 'industrial', 'condominio', 'engenheiros', 'outro']),
        message: z.string().max(2000).optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (db) {
          await db.insert(orcamentos).values({
            name: input.name,
            phone: input.phone,
            email: input.email ?? null,
            city: input.city,
            serviceType: input.serviceType,
            message: input.message ?? null,
          });
        }
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
