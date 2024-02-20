import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, RouterOutlet } from "@angular/router";
import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { importProvidersFrom } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { routes } from "./app/app.routes";

bootstrapApplication(
  AppComponent, 
  {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideRouter(routes),
      {
        provide: APOLLO_OPTIONS,
        useFactory: (
          httpLink: HttpLink,
        ): ApolloClientOptions<unknown> => ({
          link: ApolloLink.from([
            httpLink.create({ uri: 'https://rickandmortyapi.com/graphql' }),
          ]),
          cache: new InMemoryCache(),
        }),
        deps: [HttpLink],
      },
      Apollo,
    ],
  }
);