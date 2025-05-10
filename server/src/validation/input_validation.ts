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
  emailId: zod.string().email(),
  password: zod.string(),
});

export const credinatlsForLogin = zod.object({
  emailId: zod.string().email(),
  password: zod.string(),
});