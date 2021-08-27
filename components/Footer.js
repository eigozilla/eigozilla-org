import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="text-center py-8">
          <img src="/logo.svg" alt="Logo" className="mx-auto w-16 pb-2" />
          <p>Copyright &copy; 2021 Eigozilla.org</p>
        </div>
      </footer>
    </>
  )
}
