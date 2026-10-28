import { getUserByIdService } from "./dashboard.service.js";

const getUserByIdController = async (req, res) => {
  const result = await getUserByIdService(req.validated.params.id);
  return res.status(200).json({
    success: true,
    message: "Lấy thông tin người dùng thành công",
    data: result,
  });
};

export {
  getUserByIdController
}