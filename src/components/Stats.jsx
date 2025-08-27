export default function Stats() {
  const items = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects', value: '15+' },
    { label: 'Happy Clients', value: '8+' },
    { label: 'Certifications', value: '3' },
  ];
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/40">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.label} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 text-center shadow-soft">
            <div className="text-3xl font-extrabold">{it.value}</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
