import { Component, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
          <h2 className="font-poppins text-3xl font-semibold text-[#28231F]">
            Something went wrong
          </h2>
          <pre className="text-red-500 max-w-[80vw] whitespace-pre-wrap text-left p-4 bg-red-50 rounded overflow-auto">
            {this.state.error?.toString()}
            {'\n'}
            {this.state.error?.stack}
          </pre>
          <p className="font-poppins text-lg text-[#767676]">Please try again later.</p>
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#D35B8F] px-8 font-poppins text-xl font-bold text-white"
          >
            Go back home
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}
