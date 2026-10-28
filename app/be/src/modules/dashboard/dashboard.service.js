import User from "../users/user.model.js";

const getUserByIdService = async (id) => {
  const result = await User.findById(id).lean().exec();
  if (!result) throw new AppError("Không tìm thấy người dùng", 404);
  return result;
};

export {
  getUserByIdService,
}