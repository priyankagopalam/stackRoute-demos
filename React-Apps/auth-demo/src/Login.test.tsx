import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Login from "./Login";
import * as api from "./api";
import { MockInstance, vi } from "vitest";

describe('Testing Login Component', () => {
    let loginSpy: MockInstance<(email: string, password: string) => Promise<any>>;

    beforeEach(() => {
        loginSpy = vi.spyOn(api, 'login');
    });

    afterEach(() => {
        loginSpy.mockRestore();
    });


    test('Should display success message while successful submission', async () => {
        let resolveFn: (value: any) => void;

        loginSpy.mockImplementationOnce(
            () => new Promise((resolve) => (resolveFn = resolve))
        );

        render(<Login />);

        await userEvent.type(screen.getByTestId('email'), 'Peter@gmail.com');
        await userEvent.type(screen.getByTestId('password'), '123456');
        await userEvent.click(screen.getByTestId('btnSubmit'));

        expect(screen.getByRole('button')).toBeDisabled();
        expect(screen.getByRole('button')).toHaveTextContent(/submitting/i);

        resolveFn!({ token: 'dummy' });

        const success = await screen.findByRole('status')
        expect(success).toHaveTextContent("Login Successful");
        expect(screen.getByRole('button')).toBeEnabled();

    });

    test('Should display error message', async() => {
        loginSpy.mockRejectedValueOnce(new Error('Invalid Credentials'));
        render(<Login />);
        await userEvent.type(screen.getByTestId('email'), 'Peter@gmail.com');
        await userEvent.type(screen.getByTestId('password'), '123456');
        await userEvent.click(screen.getByTestId('btnSubmit'));

        const alert = await screen.findByRole('alert');
        expect(alert).toHaveTextContent("Invalid Credentials");
        expect(screen.getByRole('button')).toBeEnabled();
    })

})