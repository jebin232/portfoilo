import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validEmail || !message) return

    setSubmitting(true)
    
    try {
      const response = await fetch('https://email-for-portfolio.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email":email,
          "additionalInfo":message,
        }),
      })

      const result = await response.json()
      console.log(result);
      
      if (response.ok) {
        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
        setSucceeded(true)
      } else {
        console.log(`Failed to send email: ${result.error}`)
        toast.error(`Failed to send email: ${result.error || 'Unknown error'}`, {
          position: toast.POSITION.BOTTOM_LEFT,
          toastId: 'error',
        })
      }
    } catch (error) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
      setSucceeded(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value)
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <button
          type="submit"
          disabled={submitting || !validEmail || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
