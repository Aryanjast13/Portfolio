import zod from "zod";
export const projectsSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

export const toolsSchema = zod.object({
  title: zod.string(),
});

export const credinatlsForResgister = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});

export const credinatlsForLogin = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});