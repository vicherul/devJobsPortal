
interface OfferCardProps {
    title: string;
    company: string;
    location: string;
    isUrgent: boolean;
}

const OfferCard = ({ title, company, location, isUrgent }: OfferCardProps) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
            {title}
        </h3>
        <p className="text-gray-500">{company}</p>
        
        <div className="mt-3 flex flex-wrap items-center gap-3">
            {/* Conditionally render the location badge */}
          <span className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-sm font-semibold shadow-sm transition-colors ${
            location === 'Remote'
              ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-100 text-blue-800'
              : 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-100 text-emerald-800'
            }`}>
            <span aria-hidden="true">📍</span>
                {location}
            </span>
            {/* Conditionally render the urgent badge */}
            {isUrgent && (
            <span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-gradient-to-r from-rose-50 to-red-100 px-3.5 py-1.5 text-sm font-semibold text-rose-800 shadow-sm">
               <span aria-hidden="true">🔥</span>
               Urgent
                </span>
            )}
            <button
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-500 hover:via-violet-500 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 active:translate-y-0"
              onClick={() => alert(`Applying for ${title} at ${company}`)}
            >
              <span>Apply Now</span>
              <span aria-hidden="true">→</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default OfferCard