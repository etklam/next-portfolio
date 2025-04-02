import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export async function middleware(request: NextRequest) {
  // 排除不需要驗證的路由
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  const token = request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json(
      { success: false, message: '未提供認證令牌' },
      { status: 401 }
    );
  }

  try {
    const decoded = verifyToken(token);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decoded.userId.toString());
    requestHeaders.set('x-user-email', decoded.email);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: '無效的認證令牌' },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: '/api/:path*',
}; 