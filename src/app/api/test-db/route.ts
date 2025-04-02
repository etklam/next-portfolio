import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT 1 + 1 AS result');
    connection.release();
    
    return NextResponse.json({ 
      success: true, 
      message: '數據庫連接成功',
      data: rows 
    });
  } catch (error) {
    console.error('數據庫連接錯誤:', error);
    return NextResponse.json({ 
      success: false, 
      message: '數據庫連接失敗',
      error: error instanceof Error ? error.message : '未知錯誤'
    }, { status: 500 });
  }
} 