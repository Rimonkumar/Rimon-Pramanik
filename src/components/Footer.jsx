export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container text-center text-sm">
        © {new Date().getFullYear()} Your Name. Built with React & Tailwind.
      </div>
    </footer>
  )
}
