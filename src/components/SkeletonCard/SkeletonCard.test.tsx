import { render, screen } from '@testing-library/react'
import SkeletonCard from './SkeletonCard'

describe('<SkeletonCard />', () => {
  it('should render', () => {
    render(<SkeletonCard />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})