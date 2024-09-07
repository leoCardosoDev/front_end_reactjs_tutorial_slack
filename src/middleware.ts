import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from '@convex-dev/auth/nextjs/server';

// Definir rotas públicas e protegidas
const isPublicPage = createRouteMatcher(['/auth']);
const isProtectedRoute = createRouteMatcher(['/']);

export default convexAuthNextjsMiddleware((request) => {
  // Se a rota é pública, permitir acesso
  if (isPublicPage(request)) {
    return;
  }

  // Se a rota é protegida e o usuário não está autenticado, redirecionar para /auth
  if (isProtectedRoute(request) && !isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, '/auth');
  }

  // Permitir acesso às demais rotas
});

export const config = {
  // Ajustar o matcher para focar nas rotas necessárias, evitando rotas internas do Next.js
  matcher: ['/', '/((?!.*\\..*|_next).*)', '/(api|trpc)(.*)'],
};
