import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token');
  const userStatus = request.cookies.get('UserStatus');

  return NextResponse.json({
    isLoggedIn: !!token && userStatus?.value === 'true'
  });
}