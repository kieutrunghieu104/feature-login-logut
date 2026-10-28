import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email là bắt buộc"],
    trim: true,
    lowercase: true,
    minLength: [1, "Email phải lớn hơn bằng 1"],
    maxLength: [200, "Email không được vượt quá 200"],
  },
  password: {
    type: String,
    required: [true, "Password là bắt buộc"],
    select: false,
    minLength: [6, "Password phải có ít nhất 6 ký tự"],
    validate: [
      {
        validator: value => /[a-zA-Z]/.test(value),
        message: "Password phải chứa ít nhất 1 chữ cái",
      }, {
        validator: value => /[0-9]/.test(value),
        message: "Password phải chứa ít nhất 1 chữ số",
      }, {
        validator: value => /[^a-zA-Z0-9]/.test(value),
        message: "Password phải chứa ít nhất 1 ký tự đặc biệt",
      },
    ],
  },
});
userSchema.index({ email: 1 }, { unique: true });
const User = mongoose.model("User", userSchema);
export default User;