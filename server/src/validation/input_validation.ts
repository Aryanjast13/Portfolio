import zod from "zod";
export const projectsSchema = zod.object({
  title: zod.string().min(3),
  description: zod.string().min(3),
});

export const toolsSchema = zod.object({
  name: zod.string().min(1),
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