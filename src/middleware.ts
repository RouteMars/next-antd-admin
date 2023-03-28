import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import Common from './util/Common';
import Cookie from './util/Cookie';

/**
 * Middleware
 */
export function middleware(request: NextRequest, event: NextFetchEvent) {
  Common.debug('~~~~~ middleware');
  // Common.debug(request.nextUrl.pathname)
  // Common.debug(request.url)
  // TODO - Token 기반 인증 로직 추가
  if (!Cookie.checkToken(request.cookies)) {
    // token validation api를 통해 유효여부 확인
    // cookie에 token을 저장
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

/**
 * Config (middleware url 필터링)
 *
 * 메뉴 추가 이후 필터링 필요시 url 추가
 */
export const config = {
  matcher: ['/', '/menu1/:path*', '/menu2/:path*', '/menu3/:path*'],
};
