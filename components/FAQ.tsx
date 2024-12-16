import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqItems = [
    {
      question: "What is Boundless?",
      answer: "Boundless is a decentralized crowdfunding platform designed specifically for early-stage founders in the Stellar community. It helps innovators validate their ideas and secure seed funding."
    },
    {
      question: "How does Boundless work?",
      answer: "Boundless allows founders to create campaigns for their projects. Community members can then support these projects by contributing funds using Stellar's blockchain technology, ensuring transparency and efficiency in the crowdfunding process."
    },
    {
      question: "Who can use Boundless?",
      answer: "Boundless is primarily designed for early-stage founders and innovators within the Stellar ecosystem. However, anyone interested in supporting or investing in Stellar-based projects can participate in funding campaigns."
    },
    {
      question: "Is Boundless secure?",
      answer: "Yes, Boundless leverages the security and transparency of the Stellar blockchain. All transactions are recorded on the blockchain, ensuring a high level of security and accountability."
    },
    {
      question: "When will Boundless launch?",
      answer: "We're currently in the development phase. Join our waitlist to be notified about our launch date and to get early access to the platform."
    }
  ]
  
  export default function FAQ() {
    return (
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  