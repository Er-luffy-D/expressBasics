const zod=require("zod")

// Structure of how to write schema for a json object which has email and password 
const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})

const res={
    email:"abc@gmail.com",
    password:"abcdefghi"
}
console.log(schema.safeParse(res));
