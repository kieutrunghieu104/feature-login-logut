import { z } from "zod";

const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ error: "Email phải là chuỗi ký tự" })
      .trim()
      .min(1, { error: "Email là bắt buộc" })
      .max(150, { error: "Email không được vượt quá 150" })
      .email({ error: "Email không hợp lệ" }),
    password: z
      .string({ error: "Password phải là chuỗi ký tự" })
      .trim()
      .min(6, { error: "Mật khẩu phải có ít nhất 6 ký tự" })
      .pipe(z.string().regex(/[a-zA-Z]/, {
        error: "Mật khẩu phải chứa ít nhất một chữ cái",
      }))
      .pipe(z.string().regex(/[0-9]/, {
        error: "Mật khẩu phải chứa ít nhất một chữ số",
      }))
      .pipe(z.string().regex(/[^a-zA-Z0-9]/, {
        error: "Mật khẩu phải chứa ít nhất một ký tự đặc biệt",
      }))
  }),
});

export {
  loginSchema,
}