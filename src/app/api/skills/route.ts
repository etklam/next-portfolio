import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// 添加環境變量檢查
const requiredEnvVars = ['MYSQL_HOST', 'MYSQL_USER', 'MYSQL_PASSWORD', 'MYSQL_DATABASE'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
}

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'nextdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function GET() {
  try {
    console.log('Attempting to connect to database...');
    console.log('Database config:', {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DATABASE
    });

    // 測試數據庫連接
    const connection = await pool.getConnection();
    console.log('Database connected successfully');

    // 確保數據庫存在
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE || 'nextdb'}`);
    await connection.query(`USE ${process.env.MYSQL_DATABASE || 'nextdb'}`);

    // 檢查表是否存在
    const [tables] = await connection.query('SHOW TABLES LIKE "skills"');
    if (!Array.isArray(tables) || tables.length === 0) {
      console.log('Skills table does not exist, creating it...');
      await connection.query(`
        CREATE TABLE IF NOT EXISTS skills (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          icon VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
      `);
      console.log('Skills table created successfully');
    }

    // 檢查是否有數據
    const [rows] = await connection.query('SELECT * FROM skills');
    if (!Array.isArray(rows) || rows.length === 0) {
      console.log('No skills found, inserting sample data...');
      await connection.query(`
        INSERT INTO skills (title, description, icon) VALUES
        (
          'Full Stack Development',
          'Proficient in both frontend and backend development, creating seamless web applications.',
          '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
        ),
        (
          'System Modernization',
          'Expert in modernizing legacy systems and implementing cutting-edge technologies.',
          '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        ),
        (
          'Banking Systems',
          'Specialized in developing and maintaining core banking systems and financial applications.',
          '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>'
        )
      `);
      console.log('Sample data inserted successfully');
    }

    // 獲取所有技能
    const [skills] = await connection.query('SELECT * FROM skills ORDER BY created_at DESC');
    connection.release();

    return NextResponse.json(skills);
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to fetch skills',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 