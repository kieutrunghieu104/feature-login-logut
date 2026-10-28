import User from "../users/user.model.js";
import AppError from "../../utils/AppError.js";

const loginService = async (data) => {
  const result = await User.findOne({ email: data.email }).select("+password").lean().exec();
  if (!result || result.password !== data.password) throw new AppError("Email hoặc mật khẩu không chính xác", 401);
  const { password: _, ...safeUser } = result;
  return safeUser;
};

export {
  loginService,
}