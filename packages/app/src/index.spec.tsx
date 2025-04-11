import { render } from "@testing-library/react";
import { CustomQueryProvider } from "@package/query";
import {
    QueryClient,
    useQuery,
    QueryClientProvider,
} from "@tanstack/react-query";

const Component = () => {
    const { data } = useQuery({ queryKey: ["hello"], queryFn: () => "hello" });

    return <>{data}</>;
};

describe("Use CustomQuery provider from package which has react-query as external deps", () => {
    it("should run", () => {
        render(<Component />, {
            wrapper: ({ children }) => (
                <CustomQueryProvider client={new QueryClient()}>
                    {children}
                </CustomQueryProvider>
            ),
        });

        expect(1).toBe(1);
    });
});

describe("Use native react query provider", () => {
    it("should run", () => {
        render(<Component />, {
            wrapper: ({ children }) => (
                <QueryClientProvider client={new QueryClient()}>
                    {children}
                </QueryClientProvider>
            ),
        });

        expect(1).toBe(1);
    });
});
