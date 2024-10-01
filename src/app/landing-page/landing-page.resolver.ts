import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-angular';

export const landingPageResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
) => {
  const urlPath = `/${route.url.join('/')}`;
  const searchParams = getBuilderSearchParams(route.queryParams);

  return fetchOneEntry({
    apiKey: '499d1b35754f499db22cae2eaf086006',
    model: 'page',
    userAttributes: {
      urlPath,
    },
    options: searchParams,
  });
};