import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

describe('Testing React App', () => {
    let element: any;
    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(() => {
        document.body.removeChild(element);
        element = null;
    });

    test('renders Routing-Demo link', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        const linkElement = screen.getByText(/Routing-Demo/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Should have navbar brand element', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByTestId('brandname')).toBeInTheDocument();
    });

    test('Should have navbar-brand class in navbar', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByTestId('brandname')).toHaveClass('navbar-brand');
    });

    test('Should have 6 links in navbar component', () => {
        act(() => {
            createRoot(element).render(<BrowserRouter><Navbar /></BrowserRouter>);
        });
        const count = element.querySelectorAll('a').length;
        expect(count).toBe(6);
    });
});