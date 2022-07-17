import { render, screen } from '@testing-library/react'
import Card from './Card'
import userEvent from '@testing-library/user-event'

const cardProp = {
  name: 'Gbadamosi',
  phone: '023948398',
  email: 'odofing@gmail.com',
  image: { url: 'https://unsplash.com/photos/2AovfzYV3rc', alt: 'first car' },
  favoured: false,
}

describe('Card', () => {
  test('Should show name of cat', () => {
    render(<Card {...cardProp} />)
    expect(
      screen.getByRole('heading', { name: /Gbadamosi/i })
    ).toBeInTheDocument()
  })
  test('Should show phone number', () => {
    render(<Card {...cardProp} />)
    expect(screen.getByText(/023948398/i)).toBeInTheDocument()
  })
  test('Should show email', () => {
    render(<Card {...cardProp} />)
    expect(screen.getByText(/odofing@gmail.com/i)).toBeInTheDocument()
  })
  test('Should show image with correct src', () => {
    render(<Card {...cardProp} />)
    expect(screen.getByAltText(/first car/i).src).toBe(cardProp.image.url)
  })
  test('Should show an outlined heart', () => {
    render(<Card {...cardProp} />)
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument()
  })
  test('Should show filled heart', () => {
    render(<Card {...cardProp} favoured={true} />)
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument()
  })

  test('Should toggle heart status', () => {
    render(<Card {...cardProp} />)
    userEvent.click(screen.getByRole('button'))

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole('button'))

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument()
  })
})
