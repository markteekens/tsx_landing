import { router } from "../trpc";
import { authRouter } from "./auth";
import { contactRouter } from "./contact";

export const appRouter = router({
  contact: contactRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
