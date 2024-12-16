import Image from 'next/image'

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'John Smith',
    role: 'CTO',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Alice Johnson',
    role: 'Head of Operations',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Bob Williams',
    role: 'Lead Developer',
    image: '/placeholder.svg?height=200&width=200',
  },
]

export default function Team() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

