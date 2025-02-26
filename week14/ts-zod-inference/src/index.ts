import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

export type userProfileSchema = z.infer<typeof userProfileSchema> // { name: string; email: string; age?: number | undefined; }

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: userProfileSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }

//   updateBody.age = updateBody.age || 18; // set default age to 18
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000, 'server started at http://localhost:3000');