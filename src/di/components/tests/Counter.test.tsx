import {render, screen, renderHook} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";
import { DependencyProvider, useDependency } from "../../contexts/Dependency";

const Component = () => {
    return (
        <DependencyProvider>
            <Counter />
        </DependencyProvider>
    );
}

describe("test Counter", () => {
    test("test increment", async () => {
        render(<Component />);

        await userEvent.click(screen.getByText("increment"));
        await userEvent.click(screen.getByText("increment"));

        // screen.debug();
    
        expect(screen.getByText("2")).toBeInTheDocument();
    });
});
