import OfferCard from "../OfferCard/OfferCard"

const OfferView = () => {
    const vacancy = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'Tech Company',
            location: 'Remote',
            isUrgent: true,
        },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Cloud Systems',
      location: 'On-site',
      isUrgent: false,
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'On-site',
      isUrgent: true,
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'Startup Labs',
      location: 'Remote',
      isUrgent: false,
    },
    ] 
  return (
    <div className="max-w-3xl mx-auto space-y-4">
        <h2>Job Offers ({vacancy.length})</h2>
        {/* Gonna use a map to display each vacancy */}
        {/* USE LIST AND MAP AND KEY */}
        {vacancy.map((offer) => (
            <OfferCard
                key={offer.id}
                title={offer.title}
                company={offer.company}
                location={offer.location}
                isUrgent={offer.isUrgent}
            />
        ))}
    </div>
  )
}

export default OfferView