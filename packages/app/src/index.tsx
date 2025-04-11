import { StrictMode, useRef } from "react";
import ReactDOM from "react-dom/client";
import { CustomQueryProvider } from "@package/query";
import { QueryClient, useQuery } from "@tanstack/react-query";

const App = () => {
    const reactQueryClient = useRef(new QueryClient());
    return (
        <StrictMode>
            <CustomQueryProvider client={reactQueryClient.current}>
                <HelloComponent />
            </CustomQueryProvider>
        </StrictMode>
    );
};

const HelloComponent = () => {
    const { data } = useQuery({ queryKey: ["hello"], queryFn: () => "hello" });

    return <>{data}</>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);
