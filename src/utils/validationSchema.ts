import { z } from "zod";

export const validationSchema = z.object({
    name: z.string().min(4, "名前は4文字以上で入力してください"),
    email: z.string().email("メールアドレスの形式で入力してください"),
    password: z.string().min(6, "パスワードは6文字以上で入力してください"),
});
