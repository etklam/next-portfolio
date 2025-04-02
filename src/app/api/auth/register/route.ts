import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { generateToken } from '@/lib/jwt';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    // 驗證輸入
    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, message: '所有欄位都是必填的' },
        { status: 400 }
      );
    }

    // 檢查用戶是否已存在
    const [existingUsers] = await pool.query(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      return NextResponse.json(
        { success: false, message: '該電子郵件已被註冊' },
        { status: 400 }
      );
    }

    // 加密密碼
    const hashedPassword = await bcrypt.hash(password, 10);

    // 創建新用戶
    const [result] = await pool.query(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
      [email, hashedPassword, name]
    );

    const userId = (result as any).insertId;

    // 生成 JWT
    const token = generateToken({ userId, email });

    return NextResponse.json({
      success: true,
      message: '註冊成功',
      token,
      user: { id: userId, email, name }
    });
  } catch (error) {
    console.error('註冊錯誤:', error);
    return NextResponse.json(
      { success: false, message: '註冊失敗' },
      { status: 500 }
    );
  }
} 