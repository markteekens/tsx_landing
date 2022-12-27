import { z } from "zod";
import nodemailer from "nodemailer"
import { router, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";
import * as contentful from "contentful";

export const contactRouter = router({
  addContact: publicProcedure
    .input(z.object({ name: z.string(), email: z.string(), telefoon: z.string(), checked: z.boolean()}))
    .mutation(async ({ input }) => {
      const transporter = nodemailer.createTransport({
        host: "mail.zxcs.nl",
        port: 465,
        secure: true,
        auth: {
          user: "mark@rubyfinance.nl", // generated ethereal user
          pass: env.MAIL_CLIENT_SECRET // generated ethereal password
        },
      });

      const info = await transporter.sendMail({
        from: input.email, // sender address
        to: "mark@rubyfinance.nl", // list of receivers
        subject: `${input.checked ? "TSX Aanvraag, ik wil een offerte" : "TSX Aanvraag, bel mij terug."}`, // Subject line
        text: `Mijn naam is ${input.name}, mijn telefoonnummer is ${input.telefoon} en ik ${input.checked ? "wil een offerte." : "wil geen offerte" }`, // plain text body
        html: `Mijn naam is ${input.name}, mijn telefoonnummer is ${input.telefoon} en ik ${input.checked ? "wil een offerte." : "wil geen offerte" }`, // html body
      });

      return  info.messageId;

     
    }),
  getItems: publicProcedure.mutation(async ({  }) => {
    const client = contentful.createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESTOKEN!
  })
      return await client?.getEntries().then((response: { items: any; }) => {
      return response.items
     });
  }),
});
