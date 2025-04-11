import React, { PropsWithChildren } from "react";

import {
    QueryClientProvider,
    QueryClientProviderProps,
} from "@tanstack/react-query";

export const CustomQueryProvider: React.FC<
    QueryClientProviderProps & PropsWithChildren
> = (props: QueryClientProviderProps & PropsWithChildren) => {
    return (
        <QueryClientProvider {...props}>{props.children}</QueryClientProvider>
    );
};
