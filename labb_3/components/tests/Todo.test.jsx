import { render, fireEvent } from '@testing-library/react'
import Todo from '../../pages/todos/index'

jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '/',
        query: ''
    })
}))

describe('Todo Component', () => {
    test('renders Todo component without errors', () => {
        render(<Todo />)
    })

    test('updates searchQuery state on input change', () => {
        const { getByPlaceholderText } = render(<Todo />)
        const searchInput = getByPlaceholderText('Search...')
        fireEvent.change(searchInput, { target: { value: 'test' } })
        expect(searchInput.value).toBe('test')
    })

    test('updates todos state on search', async () => {
        const { getByPlaceholderText, getByText } = render(<Todo />)
        const searchInput = getByPlaceholderText('Search...')
        fireEvent.change(searchInput, { target: { value: 'test' } })

        const searchButton = getByText('Search')
        fireEvent.click(searchButton)
    })
})
