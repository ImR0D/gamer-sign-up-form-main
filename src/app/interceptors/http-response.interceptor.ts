import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((responseError) => {
      const errorMessage = handleHttpResponse(responseError.status);
      console.error(errorMessage);
      return throwError(() => responseError);
    }),
  );

  function handleHttpResponse(httpCode: number): string {
    const httpCodeErrors: Record<number, string> = {
      0: 'Ocorreu uma falha de conexão com o servidor',
      400: 'Um ou mais dados da requisição pode estar inválido. Nenhuma ação foi realizada!',
      404: 'O recurso solicitado não foi encontrado ou está indisponível no momento',
      409: 'Um conflito ocorreu na requisição, verifique os dados enviados e tente novamente',
    };
    return httpCodeErrors[httpCode] ?? 'Ocorreu um erro desconhecido.';
  }
};
