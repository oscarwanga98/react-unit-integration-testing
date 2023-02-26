import { render,screen } from "@testing-library/react"
import { Greed } from "./greed"

describe('Greed yote',()=>{
    test('renders correctly',()=>{
        render(<Greed/>)
        const text=screen.getByText(/hello/i)
        expect(text).toBeInTheDocument()
    })
    
    test('renders with name',()=>{
        render(<Greed name='Wanga'/>)
        const name=screen.getByText(/wanga/i)
    })
})
