import zod from "zod";
export const projectsDetail = zod.object({
  tite: zod.string(),
    description: zod.string(),
  image_url:zod.string().url()
});


export const toolsDetail = zod.object({
    title: zod.string(),
    image_url:zod.string().url()
})

export const credinatlsForResgister = zod.object({
  name: zod.string(),
  emailId: zod.string().email(),
  password:zod.string()
})


export const credinatlsForLogin = zod.object({
  
})