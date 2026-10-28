import { loginService } from "./auth.service.js";

const loginController = async (req, res) => {
  const result = await loginService(req.validated.body);
  return res.status(200).json({
    success: true,
    message: "Đăng nhập thành công",
    data: result,
  })
};

export {
  loginController,
}