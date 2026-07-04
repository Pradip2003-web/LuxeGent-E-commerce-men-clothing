import { Container, Accordion } from "react-bootstrap";

const faqs = [
  {
    question: "What information do you collect?",
    answer:
      "We may collect your name, email address, phone number, shipping and billing addresses, order history, payment-related information processed through secure providers, and device or browser information to improve your shopping experience.",
  },
  {
    question: "How do you use my personal information?",
    answer:
      "Your information is used to process orders, provide customer support, improve our website, personalize recommendations, prevent fraud, and send marketing communications when you have given consent.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. Payments are processed through trusted payment gateways using encrypted connections. We do not store your credit or debit card details on our servers.",
  },
  {
    question: "Do you share my data with third parties?",
    answer:
      "We only share necessary information with trusted partners such as payment processors, shipping companies, analytics providers, and customer communication services to operate our business.",
  },
  {
    question: "Can I request deletion of my personal data?",
    answer:
      "Yes. You may contact us to request deletion of your account or personal information where permitted by applicable laws and regulations.",
  },
  {
    question: "Can I unsubscribe from marketing emails?",
    answer:
      "Absolutely. Every marketing email contains an unsubscribe link, or you can update your communication preferences in your account settings.",
  },
  {
    question: "How long do you keep my data?",
    answer:
      "We retain information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and protect our business interests.",
  },
  {
    question: "How can I contact you about privacy concerns?",
    answer:
      "You can reach our support team through our contact page or by emailing our privacy support address for any questions regarding your personal information.",
  },
];

function PrivacyFaq() {
  return (
    <section className="py-5" id="privacy-faq">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently Asked Questions</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Find answers to common questions about how we collect, use, and
            protect your personal information.
          </p>
        </div>

        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="mb-3 border rounded-4 shadow-sm overflow-hidden"
            >
              <Accordion.Header>
                <span className="fw-semibold">{faq.question}</span>
              </Accordion.Header>

              <Accordion.Body className="text-muted">
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export default PrivacyFaq;
