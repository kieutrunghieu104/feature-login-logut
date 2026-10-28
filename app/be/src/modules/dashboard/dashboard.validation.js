import { z } from "zod";

const userIdParamsSchema = z.object({
  id: z
    .string("ID người dùng không hợp lệ")
    .regex(/^[a-fA-F0-9]{24}$/, "ID sản phẩm không hợp lệ"),
});

const getUserByIdSchema = z.object({
  params: userIdParamsSchema,
})

export {
  getUserByIdSchema,
}