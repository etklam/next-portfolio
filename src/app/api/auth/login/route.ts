import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { generateToken } from '@/lib/jwt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 驗證輸入
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: '電子郵件和密碼都是必填的' },
        { status: 400 }
      );
    }

    // 查找用戶
    const [users] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    const user = Array.isArray(users) ? users[0] : null;

    if (!user) {
      return NextResponse.json(
        { success: false, message: '用戶不存在' },
        { status: 401 }
      );
    }

    // 驗證密碼
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: '密碼錯誤' },
        { status: 401 }
      );
    }

    // 生成 JWT
    const token = generateToken({ userId: user.id, email: user.email });

    return NextResponse.json({
      success: true,
      message: '登入成功',
      token,
      user: { id: user.id, email: user.email, name: user.name }
    });
  } catch (error) {
    console.error('登入錯誤:', error);
    return NextResponse.json(
      { success: false, message: '登入失敗' },
      { status: 500 }
    );
  }
} 