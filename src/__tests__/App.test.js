import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from '../mocks/server';
import App from '../App';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('test App components', () => {
    test('renders learn react link', () => {
        render(<App />);
        const labelText = screen.getByRole('form');
        expect(labelText).toBeVisible();
    });
    test('get input element', () => {
        render(<App />);
        const inputElement = screen.getByLabelText('searchInput');
        expect(inputElement).toBeVisible();
        fireEvent.change(inputElement, { target: { value: 'Sammie' } });
        expect(inputElement.value).toBe('Sammie');
    });
    test('reset Input', () => {
        render(<App />);
        const inputElement = screen.getByLabelText('searchInput');
        expect(inputElement).toBeVisible();
        fireEvent.change(inputElement, { target: { value: 'Sammie' } });
        expect(inputElement.value).toBe('Sammie');
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    });
    test('get button element', () => {
        render(<App />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent('Search');
        expect(buttonElement).toBeVisible();
    });
    test('mock api response', async () => {
        render(<App />);
        const inputElement = screen.getByLabelText('searchInput');
        expect(inputElement).toBeVisible();
        fireEvent.change(inputElement, { target: { value: 'Sammie' } });
        expect(inputElement.value).toBe('Sammie');
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        const headerElements = await screen.findByRole('heading', { level: 2 });
        expect(headerElements).toHaveTextContent('Sammie Todeo');
        expect(headerElements).toBeVisible();
        const pointsElement = await screen.findAllByText('Date:');
        expect(pointsElement.length).toBe(3);
        const totalPoints = await screen.findAllByText('Total Points:');
        expect(totalPoints.length).toBe(1);
    });
});
