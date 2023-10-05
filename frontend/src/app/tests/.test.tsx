import React from 'react'
import { render, screen } from '@testing-library/react'
import { jest } from '@jest/globals'
import userEvent from '@testing-library/user-event'
import Home from '../page'

// Mocking the APIRequest module
jest.mock('../services/ApiRequest', () => ({
    handlePostRequest: jest.fn(),
}))

describe('Home component', () => {
    it('renders without errors', () => {
        render(<Home />)
        // You can add more specific tests for rendering components
        // Example:
        // expect(screen.getByText('CREATE A NEW NODE')).toBeInTheDocument();
        // expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    })

    it('creates a new node when the button in the SideMenu is clicked', () => {
        render(<Home />)

        const createNodeButton = screen.getByText('CREATE A NEW NODE')
        userEvent.click(createNodeButton)

        // Assert that a new node is added, you can check the nodes state or rendered output.
        // Example: expect(screen.getByText('Your New Node')).toBeInTheDocument();
    })

    it('connects two nodes when a new edge is added', () => {
        render(<Home />)

        const nodeA = screen.getByText('START') // Replace with your node label
        const nodeB = screen.getByText('START') // Replace with your node label

        // userEvent.drag(nodeA)
        // userEvent.hover(nodeA)
        // userEvent.click(screen.getByTestId('add-edge-button'))

        // userEvent.drag(nodeB)
        // userEvent.hover(nodeB)
        // userEvent.drop()

        // Assert that a new edge is added, you can check the edges state or rendered output.
        // Example: expect(screen.getByText('Edge Label')).toBeInTheDocument();
    })

    it('submits the flux when the submit button is clicked', () => {
        render(<Home />)

        const submitButton = screen.getByTestId('submit-button')
        userEvent.click(submitButton)

        // Assert that handlePostRequest is called with the expected arguments
        // Example: expect(handlePostRequest).toHaveBeenCalledWith({ nodes: [], edges: [] });
    })

    // You can add more test cases for other functionalities as needed
})
