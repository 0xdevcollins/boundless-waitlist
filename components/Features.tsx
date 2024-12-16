import { Rocket, LightbulbIcon, Users } from 'lucide-react'

const features = [
  {
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
    title: 'Launch Your Idea',
    description: 'Validate your concept and secure initial funding to kickstart your project.'
  },
  {
    icon: <LightbulbIcon className="h-6 w-6 text-blue-600" />,
    title: 'Community-Driven Innovation',
    description: 'Tap into the collective wisdom and support of the Stellar ecosystem.'
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: 'Decentralized Funding',
    description: 'Leverage blockchain technology for transparent and efficient crowdfunding.'
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Boundless?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

