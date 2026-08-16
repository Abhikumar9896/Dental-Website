import { Component, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
          <h2 className="font-poppins text-3xl font-semibold text-[#28231F]">
            Something went wrong
          </h2>
          <p className="font-poppins text-lg text-[#767676]">Please try again later.</p>
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#C187A4] px-8 font-poppins text-xl font-bold text-white"
          >
            Go back home
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}
