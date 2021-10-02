import { z } from "zod";

const shape = z.object({
  foo: z.string(),
  bar: z.number(),
});

type Shape = z.infer<typeof shape>;
